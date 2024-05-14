import type Store from '@ember-data/store';
import type { Signal } from '@ember-data/tracking/-private';
import { addToTransaction, createSignal, subscribe } from '@ember-data/tracking/-private';
import { assert } from '@warp-drive/build-config/macros';
import type { StableRecordIdentifier } from '@warp-drive/core-types';
import type { Cache } from '@warp-drive/core-types/cache';
import type { ArrayValue, Value } from '@warp-drive/core-types/json/raw';
import type { OpaqueRecordInstance } from '@warp-drive/core-types/record';
import type { ArrayField, SchemaArrayField } from '@warp-drive/core-types/schema/fields';

import { SchemaRecord } from './record';
import type { SchemaService } from './schema';
import { ARRAY_SIGNAL, Editable, Identifier, Legacy, MUTATE, SOURCE } from './symbols';

export function notifyArray(arr: ManagedArray) {
  addToTransaction(arr[ARRAY_SIGNAL]);
}

type KeyType = string | symbol | number;
const ARRAY_GETTER_METHODS = new Set<KeyType>([
  Symbol.iterator,
  'concat',
  'entries',
  'every',
  'fill',
  'filter',
  'find',
  'findIndex',
  'flat',
  'flatMap',
  'forEach',
  'includes',
  'indexOf',
  'join',
  'keys',
  'lastIndexOf',
  'map',
  'reduce',
  'reduceRight',
  'slice',
  'some',
  'values',
]);
// const ARRAY_SETTER_METHODS = new Set<KeyType>(['push', 'pop', 'unshift', 'shift', 'splice', 'sort']);
const SYNC_PROPS = new Set<KeyType>(['[]', 'length']);
function isArrayGetter<T>(prop: KeyType): prop is keyof Array<T> {
  return ARRAY_GETTER_METHODS.has(prop);
}
// function isArraySetter<T>(prop: KeyType): prop is keyof Array<T> {
//   return ARRAY_SETTER_METHODS.has(prop);
// }
// function isSelfProp<T extends object>(self: T, prop: KeyType): prop is keyof T {
//   return prop in self;
// }

function convertToInt(prop: KeyType): number | null {
  if (typeof prop === 'symbol') return null;

  const num = Number(prop);

  if (isNaN(num)) return null;

  return num % 1 === 0 ? num : null;
}

type ProxiedMethod = (...args: unknown[]) => unknown;

type ForEachCB = (record: OpaqueRecordInstance, index: number, context: typeof Proxy<unknown[]>) => void;
function safeForEach(
  instance: typeof Proxy<unknown[]>,
  arr: unknown[],
  store: Store,
  callback: ForEachCB,
  target: unknown
) {
  if (target === undefined) {
    target = null;
  }
  // clone to prevent mutation
  arr = arr.slice();
  assert('`forEach` expects a function as first argument.', typeof callback === 'function');

  // because we retrieveLatest above we need not worry if array is mutated during iteration
  // by unloadRecord/rollbackAttributes
  // push/add/removeObject may still be problematic
  // but this is a more traditionally expected forEach bug.
  const length = arr.length; // we need to access length to ensure we are consumed

  for (let index = 0; index < length; index++) {
    callback.call(target, arr[index], index, instance);
  }

  return instance;
}

export interface ManagedArray extends Omit<Array<unknown>, '[]'> {
  [MUTATE]?(
    target: unknown[],
    receiver: typeof Proxy<unknown[]>,
    prop: string,
    args: unknown[],
    _SIGNAL: Signal
  ): unknown;
}

export class ManagedArray {
  [SOURCE]: unknown[];
  declare address: StableRecordIdentifier;
  declare path: string[];
  declare owner: SchemaRecord;
  declare [ARRAY_SIGNAL]: Signal;

  constructor(
    store: Store,
    schema: SchemaService,
    cache: Cache,
    field: ArrayField | SchemaArrayField,
    data: unknown[],
    address: StableRecordIdentifier,
    path: string[],
    owner: SchemaRecord,
    isSchemaArray: boolean
  ) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    this[SOURCE] = data?.slice();
    this[ARRAY_SIGNAL] = createSignal(this, 'length');
    const _SIGNAL = this[ARRAY_SIGNAL];
    const boundFns = new Map<KeyType, ProxiedMethod>();
    this.address = address;
    this.path = path;
    this.owner = owner;
    let transaction = false;
    const ManagedRecordRefs = isSchemaArray ? new WeakMap<object, SchemaRecord>() : null;

    const proxy = new Proxy(this[SOURCE], {
      get<R extends typeof Proxy<unknown[]>>(target: unknown[], prop: keyof R, receiver: R) {
        if (prop === ARRAY_SIGNAL) {
          return _SIGNAL;
        }
        if (prop === 'address') {
          return self.address;
        }
        if (prop === 'owner') {
          return self.owner;
        }

        const index = convertToInt(prop);
        debugger;
        if (_SIGNAL.shouldReset && (index !== null || SYNC_PROPS.has(prop) || isArrayGetter(prop))) {
          _SIGNAL.t = false;
          _SIGNAL.shouldReset = false;
          const newData = cache.getAttr(address, path);
          if (newData && newData !== self[SOURCE]) {
            self[SOURCE].length = 0;
            self[SOURCE].push(...(newData as ArrayValue));
          }
        }

        if (index !== null) {
          const val = target[index];
          if (isSchemaArray) {
            if (!transaction) {
              subscribe(_SIGNAL);
            }

            if (val) {
              let record = ManagedRecordRefs!.get(val);

              if (!record) {
                const recordPath = path.slice();
                // this is a dirty lie since path is string[] but really we
                // should change the types for paths to `Array<string | number>`
                // TODO we should allow the schema for the field to define a "key"
                // for stability. Default should be `@identity` which means that
                // same object reference from cache should result in same SchemaRecord
                // embedded object.
                recordPath.push(index as unknown as string);
                record = new SchemaRecord(
                  store,
                  self.owner[Identifier],
                  { [Editable]: self.owner[Editable], [Legacy]: self.owner[Legacy] },
                  true,
                  field.type,
                  recordPath
                );
                ManagedRecordRefs!.set(val, record);
              } else {
                // TODO update embeddedPath if required
              }
              return record;
            }

            return val;
          }

          if (!transaction) {
            subscribe(_SIGNAL);
          }
          if (field.type) {
            const transform = schema.transforms.get(field.type);
            if (!transform) {
              throw new Error(`No '${field.type}' transform defined for use by ${address.type}.${String(prop)}`);
            }
            return transform.hydrate(val as Value, field.options ?? null, self.owner);
          }
          return val;
        }

        if (isArrayGetter(prop)) {
          let fn = boundFns.get(prop);

          if (fn === undefined) {
            if (prop === 'forEach') {
              fn = function () {
                subscribe(_SIGNAL);
                transaction = true;
                const result = safeForEach(receiver, target, store, arguments[0] as ForEachCB, arguments[1]);
                transaction = false;
                return result;
              };
            } else {
              fn = function () {
                subscribe(_SIGNAL);
                // array functions must run through Reflect to work properly
                // binding via other means will not work.
                transaction = true;
                const result = Reflect.apply(target[prop] as ProxiedMethod, receiver, arguments) as unknown;
                transaction = false;
                return result;
              };
            }
            boundFns.set(prop, fn);
          }
          return fn;
        }

        return Reflect.get(target, prop, receiver);
      },
      set(target, prop: KeyType, value, receiver) {
        if (prop === 'address') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          self.address = value;
          return true;
        }
        if (prop === 'owner') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          self.owner = value;
          return true;
        }
        const reflect = Reflect.set(target, prop, value, receiver);

        if (reflect) {
          if (!field.type) {
            cache.setAttr(address, path, self[SOURCE] as Value);
            _SIGNAL.shouldReset = true;
            return true;
          }

          let rawValue = self[SOURCE] as ArrayValue;
          if (!isSchemaArray) {
            const transform = schema.transforms.get(field.type);
            if (!transform) {
              throw new Error(`No '${field.type}' transform defined for use by ${address.type}.${String(prop)}`);
            }
            rawValue = (self[SOURCE] as ArrayValue).map((item) =>
              transform.serialize(item, field.options ?? null, self.owner)
            );
          }
          cache.setAttr(address, path, rawValue as Value);
          _SIGNAL.shouldReset = true;
        }
        return reflect;
      },
    }) as ManagedArray;

    return proxy;
  }
}
