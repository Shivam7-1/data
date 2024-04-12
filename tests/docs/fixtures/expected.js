module.exports = {
  modules: [
    '@ember-data/active-record/request',
    '@ember-data/adapter',
    '@ember-data/adapter/error',
    '@ember-data/adapter/json-api',
    '@ember-data/adapter/rest',
    '@ember-data/canary-features',
    '@ember-data/debug',
    '@ember-data/deprecations',
    '@ember-data/experimental-preview-types',
    '@ember-data/graph',
    '@ember-data/json-api',
    '@ember-data/json-api/request',
    '@ember-data/legacy-compat',
    '@ember-data/legacy-compat/builders',
    '@ember-data/legacy-compat/utils',
    '@ember-data/model',
    '@ember-data/request',
    '@ember-data/request-utils',
    '@ember-data/request/fetch',
    '@ember-data/rest/request',
    '@ember-data/serializer',
    '@ember-data/serializer/json',
    '@ember-data/serializer/json-api',
    '@ember-data/serializer/rest',
    '@ember-data/store',
    '@ember-data/tracking',
    'ember-data-overview',
  ],
  classitems: [
    '(public) @ember-data/store Document#data',
    '(public) @ember-data/store Document#errors',
    '(public) @ember-data/store Document#fetch',
    '(public) @ember-data/store Document#first',
    '(public) @ember-data/store Document#identifier',
    '(public) @ember-data/store Document#last',
    '(public) @ember-data/store Document#links',
    '(public) @ember-data/store Document#meta',
    '(public) @ember-data/store Document#next',
    '(public) @ember-data/store Document#prev',
    '(public) @ember-data/store Document#toJSON',
    '(public) @ember-data/store RequestStateService#getLastRequestForRecord',
    '(public) @ember-data/store RequestStateService#getPendingRequestsForRecord',
    '(public) @ember-data/store RequestStateService#subscribeForRecord',
    '(public) @ember-data/store IdentifierCache#getOrCreateDocumentIdentifier',
    '(public) @ember-data/store Store#registerSchema',
    '(public) @ember-data/store Store#schema',
    '(public) @ember-data/store <Interface> LifetimesService#didRequest [Optional]',
    '(public) @ember-data/store <Interface> LifetimesService#isHardExpired',
    '(public) @ember-data/store <Interface> LifetimesService#isSoftExpired',
    '(public) @ember-data/store <Interface> LifetimesService#willRequest [Optional]',
    '(private) @ember-data/adapter BuildURLMixin#_buildURL',
    '(private) @ember-data/adapter BuildURLMixin#urlPrefix',
    '(private) @ember-data/adapter/json-api JSONAPIAdapter#ajaxOptions',
    '(private) @ember-data/adapter/rest @ember-data/adapter/rest#fetchOptions',
    '(private) @ember-data/adapter/rest RESTAdapter#_ajaxRequest',
    '(private) @ember-data/adapter/rest RESTAdapter#ajax',
    '(private) @ember-data/adapter/rest RESTAdapter#ajaxOptions',
    '(private) @ember-data/adapter/rest RESTAdapter#generatedDetailedMessage',
    '(private) @ember-data/adapter/rest RESTAdapter#normalizeErrorResponse',
    '(private) @ember-data/adapter/rest RESTAdapter#parseErrorResponse',
    '(private) @ember-data/debug InspectorDataAdapter#columnNameToDesc',
    '(private) @ember-data/debug InspectorDataAdapter#columnsForType',
    '(private) @ember-data/debug InspectorDataAdapter#getFilters',
    '(private) @ember-data/debug InspectorDataAdapter#getRecordColor',
    '(private) @ember-data/debug InspectorDataAdapter#getRecordColumnValues',
    '(private) @ember-data/debug InspectorDataAdapter#getRecordFilterValues',
    '(private) @ember-data/debug InspectorDataAdapter#getRecordKeywords',
    '(private) @ember-data/debug InspectorDataAdapter#getRecords',
    '(private) @ember-data/debug InspectorDataAdapter#observeRecord',
    '(private) @ember-data/debug InspectorDataAdapter#watchModelTypes',
    '(private) @ember-data/debug InspectorDataAdapter#watchTypeIfUnseen',
    '(public) @ember-data/deprecations CurrentDeprecations#DEPRECATE_COMPUTED_CHAINS',
    '(public) @ember-data/deprecations CurrentDeprecations#DEPRECATE_LEGACY_IMPORTS',
    '(public) @ember-data/deprecations CurrentDeprecations#DEPRECATE_MANY_ARRAY_DUPLICATES',
    '(public) @ember-data/deprecations CurrentDeprecations#DEPRECATE_NON_STRICT_ID',
    '(public) @ember-data/deprecations CurrentDeprecations#DEPRECATE_NON_STRICT_TYPES',
    '(public) @ember-data/deprecations CurrentDeprecations#DEPRECATE_NON_UNIQUE_PAYLOADS',
    '(public) @ember-data/deprecations CurrentDeprecations#DEPRECATE_RELATIONSHIP_REMOTE_UPDATE_CLEARING_LOCAL_STATE',
    '(public) @ember-data/legacy-compat/builders @ember-data/legacy-compat/builders#findAll',
    '(public) @ember-data/legacy-compat/builders @ember-data/legacy-compat/builders#findRecord',
    '(public) @ember-data/legacy-compat/builders @ember-data/legacy-compat/builders#query',
    '(public) @ember-data/legacy-compat/builders @ember-data/legacy-compat/builders#queryRecord',
    '(public) @ember-data/legacy-compat/builders @ember-data/legacy-compat/builders#saveRecord',
    '(public) @ember-data/legacy-compat/utils @ember-data/legacy-compat/utils#configureAssertFn',
    '(public) @ember-data/legacy-compat/utils @ember-data/legacy-compat/utils#configureMismatchReporter',
    '(public) @ember-data/legacy-compat/utils @ember-data/legacy-compat/utils#configureTypeNormalization',
    '(public) @ember-data/legacy-compat/utils @ember-data/legacy-compat/utils#formattedId',
    '(public) @ember-data/legacy-compat/utils @ember-data/legacy-compat/utils#formattedType',
    '(public) @ember-data/legacy-compat/utils @ember-data/legacy-compat/utils#isEquivId',
    '(public) @ember-data/legacy-compat/utils @ember-data/legacy-compat/utils#isEquivType',
    '(private) @ember-data/legacy-compat SnapshotRecordArray#_recordArray',
    '(private) @ember-data/legacy-compat SnapshotRecordArray#_snapshots',
    '(private) @ember-data/legacy-compat SnapshotRecordArray#constructor',
    '(private) @ember-data/model Errors#_findOrCreateMessages',
    '(private) @ember-data/model Errors#content',
    '(private) @ember-data/model Errors#errorsByAttributeName',
    '(private) @ember-data/model Errors#unknownProperty',
    '(private) @ember-data/model Model#_createSnapshot',
    '(private) @ember-data/model Model#_debugInfo',
    '(private) @ember-data/model Model#create',
    '(private) @ember-data/model Model#currentState',
    '(private) @ember-data/model PromiseManyArray#forEach',
    '(private) @ember-data/serializer/json JSONSerializer#_canSerialize',
    '(private) @ember-data/serializer/json JSONSerializer#_getMappedKey',
    '(private) @ember-data/serializer/json JSONSerializer#_mustSerialize',
    '(private) @ember-data/serializer/json JSONSerializer#_normalizeResponse',
    '(private) @ember-data/serializer/json JSONSerializer#applyTransforms',
    '(private) @ember-data/serializer/json JSONSerializer#normalizeRelationships',
    '(private) @ember-data/serializer/json JSONSerializer#normalizeUsingDeclaredMapping',
    '(private) @ember-data/serializer/json JSONSerializer#transformFor',
    '(private) @ember-data/serializer/json-api JSONAPISerializer#_extractType',
    '(private) @ember-data/serializer/json-api JSONAPISerializer#_normalizeDocumentHelper',
    '(private) @ember-data/serializer/json-api JSONAPISerializer#_normalizeRelationshipDataHelper',
    '(private) @ember-data/serializer/json-api JSONAPISerializer#_normalizeResourceHelper',
    '(private) @ember-data/serializer/json-api JSONAPISerializer#_normalizeResponse',
    '(private) @ember-data/serializer/rest EmbeddedRecordsMixin#_extractEmbeddedBelongsTo',
    '(private) @ember-data/serializer/rest EmbeddedRecordsMixin#_extractEmbeddedHasMany',
    '(private) @ember-data/serializer/rest EmbeddedRecordsMixin#_extractEmbeddedRecords',
    '(private) @ember-data/serializer/rest EmbeddedRecordsMixin#_normalizeEmbeddedRelationship',
    '(private) @ember-data/serializer/rest RESTSerializer#_normalizeArray',
    '(private) @ember-data/serializer/rest RESTSerializer#_normalizeResponse',
    '(private) @ember-data/store IdentifierCache#__configureMerge',
    '(private) @ember-data/store IdentifierCache#_getRecordIdentifier',
    '(private) @ember-data/store IdentifierCache#_mergeRecordIdentifiers',
    '(private) @ember-data/store IdentifierCache#peekRecordIdentifier',
    '(private) @ember-data/store ManyArray#isPolymorphic',
    '(private) @ember-data/store NotificationManager#notify',
    '(private) @ember-data/store RecordArray#store',
    '(private) @ember-data/store Snapshot#constructor',
    '(private) @ember-data/store Store#_push',
    '(private) @ember-data/store Store#init',
    '(public) @ember-data/active-record/request @ember-data/active-record/request#query',
    '(public) @ember-data/active-record/request @ember-data/active-record/request#findRecord',
    '(public) @ember-data/active-record/request @ember-data/active-record/request#createRecord',
    '(public) @ember-data/active-record/request @ember-data/active-record/request#deleteRecord',
    '(public) @ember-data/active-record/request @ember-data/active-record/request#updateRecord',
    '(public) @ember-data/adapter Adapter#coalesceFindRequests',
    '(public) @ember-data/adapter Adapter#createRecord',
    '(public) @ember-data/adapter Adapter#deleteRecord',
    '(public) @ember-data/adapter Adapter#findAll',
    '(public) @ember-data/adapter Adapter#findMany',
    '(public) @ember-data/adapter Adapter#findRecord',
    '(public) @ember-data/adapter Adapter#generateIdForRecord',
    '(public) @ember-data/adapter Adapter#groupRecordsForFindMany',
    '(public) @ember-data/adapter Adapter#query',
    '(public) @ember-data/adapter Adapter#queryRecord',
    '(public) @ember-data/adapter Adapter#serialize',
    '(public) @ember-data/adapter Adapter#shouldBackgroundReloadAll',
    '(public) @ember-data/adapter Adapter#shouldBackgroundReloadRecord',
    '(public) @ember-data/adapter Adapter#shouldReloadAll',
    '(public) @ember-data/adapter Adapter#shouldReloadRecord',
    '(public) @ember-data/adapter Adapter#updateRecord',
    '(public) @ember-data/adapter BuildURLMixin#buildURL',
    '(public) @ember-data/adapter BuildURLMixin#pathForType',
    '(public) @ember-data/adapter BuildURLMixin#urlForCreateRecord',
    '(public) @ember-data/adapter BuildURLMixin#urlForDeleteRecord',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindAll',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindBelongsTo',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindHasMany',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindMany',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindRecord',
    '(public) @ember-data/adapter BuildURLMixin#urlForQuery',
    '(public) @ember-data/adapter BuildURLMixin#urlForQueryRecord',
    '(public) @ember-data/adapter BuildURLMixin#urlForUpdateRecord',
    '(public) @ember-data/adapter/json-api JSONAPIAdapter#coalesceFindRequests',
    '(public) @ember-data/adapter/rest RESTAdapter#buildQuery',
    '(public) @ember-data/adapter/rest RESTAdapter#coalesceFindRequests',
    '(public) @ember-data/adapter/rest RESTAdapter#createRecord',
    '(public) @ember-data/adapter/rest RESTAdapter#deleteRecord',
    '(public) @ember-data/adapter/rest RESTAdapter#findAll',
    '(public) @ember-data/adapter/rest RESTAdapter#findBelongsTo',
    '(public) @ember-data/adapter/rest RESTAdapter#findHasMany',
    '(public) @ember-data/adapter/rest RESTAdapter#findMany',
    '(public) @ember-data/adapter/rest RESTAdapter#findRecord',
    '(public) @ember-data/adapter/rest RESTAdapter#groupRecordsForFindMany',
    '(public) @ember-data/adapter/rest RESTAdapter#handleResponse',
    '(public) @ember-data/adapter/rest RESTAdapter#headers',
    '(public) @ember-data/adapter/rest RESTAdapter#host',
    '(public) @ember-data/adapter/rest RESTAdapter#isInvalid',
    '(public) @ember-data/adapter/rest RESTAdapter#isSuccess',
    '(public) @ember-data/adapter/rest RESTAdapter#namespace',
    '(public) @ember-data/adapter/rest RESTAdapter#query',
    '(public) @ember-data/adapter/rest RESTAdapter#queryRecord',
    '(public) @ember-data/adapter/rest RESTAdapter#sortQueryParams',
    '(public) @ember-data/adapter/rest RESTAdapter#updateRecord',
    '(public) @ember-data/adapter/rest RESTAdapter#useFetch',
    '(public) @ember-data/debug DebugLogging#LOG_GRAPH',
    '(public) @ember-data/debug DebugLogging#LOG_IDENTIFIERS',
    '(public) @ember-data/debug DebugLogging#LOG_INSTANCE_CACHE',
    '(public) @ember-data/debug DebugLogging#LOG_MUTATIONS',
    '(public) @ember-data/debug DebugLogging#LOG_NOTIFICATIONS',
    '(public) @ember-data/debug DebugLogging#LOG_OPERATIONS',
    '(public) @ember-data/debug DebugLogging#LOG_PAYLOADS',
    '(public) @ember-data/debug DebugLogging#LOG_REQUESTS',
    '(public) @ember-data/debug DebugLogging#LOG_REQUEST_STATUS',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#coalesceFindRequests [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#createRecord',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#deleteRecord',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#destroy [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#findAll',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#findBelongsTo [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#findMany [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#findRecord',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#findhasMany [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#generateIdForRecord [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#groupRecordsForFindMany [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#query',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#queryRecord',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#shouldBackgroundReloadAll [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#shouldBackgroundReloadRecord [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#shouldReloadAll [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#shouldReloadRecord [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Adapter#updateRecord',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#changedAttrs',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#clientDidCreate',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#commitWasRejected',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#didCommit',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#diff',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#dump',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#fork',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#getAttr',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#getErrors',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#getRelationship',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#hasChangedAttrs',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#hydrate',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#isDeleted',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#isDeletionCommitted',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#isEmpty',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#isNew',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#merge',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#mutate',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#patch',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#peek',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#peekRequest',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#put',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#rollbackAttrs',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#setAttr',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#setIsDeleted',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#unloadRecord',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#upsert',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#version',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#willCommit',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#changedRelationships',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#hasChangedRelationships',
    '(public) @ember-data/experimental-preview-types <Interface> Cache#rollbackRelationships',
    '(public) @ember-data/experimental-preview-types <Interface> Serializer#destroy [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Serializer#normalize [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Serializer#normalizeResponse',
    '(public) @ember-data/experimental-preview-types <Interface> Serializer#pushPayload [OPTIONAL]',
    '(public) @ember-data/experimental-preview-types <Interface> Serializer#serialize',
    '(public) @ember-data/experimental-preview-types <Interface> Serializer#serializeIntoHash [OPTIONAL]',
    '(public) @ember-data/json-api Cache#changedAttrs',
    '(public) @ember-data/json-api Cache#clientDidCreate',
    '(public) @ember-data/json-api Cache#commitWasRejected',
    '(public) @ember-data/json-api Cache#didCommit',
    '(public) @ember-data/json-api Cache#diff',
    '(public) @ember-data/json-api Cache#dump',
    '(public) @ember-data/json-api Cache#getAttr',
    '(public) @ember-data/json-api Cache#getErrors',
    '(public) @ember-data/json-api Cache#getRelationship',
    '(public) @ember-data/json-api Cache#hasChangedAttrs',
    '(public) @ember-data/json-api Cache#hydrate',
    '(public) @ember-data/json-api Cache#isDeleted',
    '(public) @ember-data/json-api Cache#isDeletionCommitted',
    '(public) @ember-data/json-api Cache#isEmpty',
    '(public) @ember-data/json-api Cache#isNew',
    '(public) @ember-data/json-api Cache#merge',
    '(public) @ember-data/json-api Cache#mutate',
    '(public) @ember-data/json-api Cache#patch',
    '(public) @ember-data/json-api Cache#peek',
    '(public) @ember-data/json-api Cache#peekRequest',
    '(public) @ember-data/json-api Cache#put',
    '(public) @ember-data/json-api Cache#rollbackAttrs',
    '(public) @ember-data/json-api Cache#setAttr',
    '(public) @ember-data/json-api Cache#setIsDeleted',
    '(public) @ember-data/json-api Cache#unloadRecord',
    '(public) @ember-data/json-api Cache#upsert',
    '(public) @ember-data/json-api Cache#version',
    '(public) @ember-data/json-api Cache#willCommit',
    '(public) @ember-data/json-api Cache#changedRelationships',
    '(public) @ember-data/json-api Cache#hasChangedRelationships',
    '(public) @ember-data/json-api Cache#rollbackRelationships',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#buildQueryParams',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#findRecord',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#query',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#postQuery',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#createRecord',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#deleteRecord',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#updateRecord',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#serializePatch',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#serializeResources',
    '(public) @ember-data/json-api/request @ember-data/json-api/request#setBuildURLConfig',
    '(public) @ember-data/legacy-compat SnapshotRecordArray#adapterOptions',
    '(public) @ember-data/legacy-compat SnapshotRecordArray#include',
    '(public) @ember-data/legacy-compat SnapshotRecordArray#length',
    '(public) @ember-data/legacy-compat SnapshotRecordArray#modelName',
    '(public) @ember-data/legacy-compat SnapshotRecordArray#snapshots',
    '(public) @ember-data/model @ember-data/model#attr',
    '(public) @ember-data/model @ember-data/model#belongsTo',
    '(public) @ember-data/model @ember-data/model#hasMany',
    '(public) @ember-data/model BelongsToReference#id',
    '(public) @ember-data/model BelongsToReference#identifier',
    '(public) @ember-data/model BelongsToReference#key',
    '(public) @ember-data/model BelongsToReference#type',
    '(public) @ember-data/model BelongsToReference#link',
    '(public) @ember-data/model BelongsToReference#links',
    '(public) @ember-data/model BelongsToReference#load',
    '(public) @ember-data/model BelongsToReference#meta',
    '(public) @ember-data/model BelongsToReference#push',
    '(public) @ember-data/model BelongsToReference#reload',
    '(public) @ember-data/model BelongsToReference#remoteType',
    '(public) @ember-data/model BelongsToReference#value',
    '(public) @ember-data/model BelongsToReference#value',
    '(public) @ember-data/model Errors#add',
    '(public) @ember-data/model Errors#clear',
    '(public) @ember-data/model Errors#errorsFor',
    '(public) @ember-data/model Errors#has',
    '(public) @ember-data/model Errors#isEmpty',
    '(public) @ember-data/model Errors#length',
    '(public) @ember-data/model Errors#messages',
    '(public) @ember-data/model Errors#remove',
    '(public) @ember-data/model HasManyReference#identifiers',
    '(public) @ember-data/model HasManyReference#ids',
    '(public) @ember-data/model HasManyReference#key',
    '(public) @ember-data/model HasManyReference#type',
    '(public) @ember-data/model HasManyReference#link',
    '(public) @ember-data/model HasManyReference#links',
    '(public) @ember-data/model HasManyReference#load',
    '(public) @ember-data/model HasManyReference#meta',
    '(public) @ember-data/model HasManyReference#push',
    '(public) @ember-data/model HasManyReference#reload',
    '(public) @ember-data/model HasManyReference#remoteType',
    '(public) @ember-data/model HasManyReference#value',
    '(public) @ember-data/model Model#adapterError',
    '(public) @ember-data/model Model#attributes',
    '(public) @ember-data/model Model#belongsTo',
    '(public) @ember-data/model Model#changedAttributes',
    '(public) @ember-data/model Model#deleteRecord',
    '(public) @ember-data/model Model#destroyRecord',
    '(public) @ember-data/model Model#dirtyType',
    '(public) @ember-data/model Model#eachAttribute',
    '(public) @ember-data/model Model#eachRelatedType',
    '(public) @ember-data/model Model#eachRelationship',
    '(public) @ember-data/model Model#eachTransformedAttribute',
    '(public) @ember-data/model Model#errors',
    '(public) @ember-data/model Model#fields',
    '(public) @ember-data/model Model#hasDirtyAttributes',
    '(public) @ember-data/model Model#hasMany',
    '(public) @ember-data/model Model#id',
    '(public) @ember-data/model Model#inverseFor',
    '(public) @ember-data/model Model#isDeleted',
    '(public) @ember-data/model Model#isEmpty',
    '(public) @ember-data/model Model#isError',
    '(public) @ember-data/model Model#isLoaded',
    '(public) @ember-data/model Model#isLoading',
    '(public) @ember-data/model Model#isNew',
    '(public) @ember-data/model Model#isReloading',
    '(public) @ember-data/model Model#isSaving',
    '(public) @ember-data/model Model#isValid',
    '(public) @ember-data/model Model#modelName',
    '(public) @ember-data/model Model#relatedTypes',
    '(public) @ember-data/model Model#relationshipNames',
    '(public) @ember-data/model Model#relationships',
    '(public) @ember-data/model Model#relationshipsByName',
    '(public) @ember-data/model Model#reload',
    '(public) @ember-data/model Model#rollbackAttributes',
    '(public) @ember-data/model Model#save',
    '(public) @ember-data/model Model#serialize',
    '(public) @ember-data/model Model#store',
    '(public) @ember-data/model Model#toString',
    '(public) @ember-data/model Model#transformedAttributes',
    '(public) @ember-data/model Model#typeForRelationship',
    '(public) @ember-data/model Model#unloadRecord',
    '(public) @ember-data/model PromiseManyArray#catch',
    '(public) @ember-data/model PromiseManyArray#finally',
    '(public) @ember-data/model PromiseManyArray#isFulfilled',
    '(public) @ember-data/model PromiseManyArray#isPending',
    '(public) @ember-data/model PromiseManyArray#isRejected',
    '(public) @ember-data/model PromiseManyArray#isSettled',
    '(public) @ember-data/model PromiseManyArray#length',
    '(public) @ember-data/model PromiseManyArray#links',
    '(public) @ember-data/model PromiseManyArray#meta',
    '(public) @ember-data/model PromiseManyArray#reload',
    '(public) @ember-data/model PromiseManyArray#then',
    '(public) @ember-data/request RequestManager#request',
    '(public) @ember-data/request RequestManager#use',
    '(public) @ember-data/request RequestManager#useCache',
    '(public) @ember-data/request <Interface> CacheHandler#request',
    '(public) @ember-data/request <Interface> Handler#request',
    '(public) @ember-data/request Future#abort',
    '(public) @ember-data/request Future#getStream',
    '(public) @ember-data/request Future#onFinalize',
    '(public) @ember-data/request-utils @ember-data/request-utils#buildBaseURL',
    '(public) @ember-data/request-utils @ember-data/request-utils#buildQueryParams',
    '(public) @ember-data/request-utils @ember-data/request-utils#filterEmpty',
    '(public) @ember-data/request-utils @ember-data/request-utils#parseCacheControl',
    '(public) @ember-data/request-utils @ember-data/request-utils#setBuildURLConfig',
    '(public) @ember-data/request-utils @ember-data/request-utils#sortQueryParams',
    '(public) @ember-data/request-utils LifetimesService#didRequest',
    '(public) @ember-data/request-utils LifetimesService#invalidateRequest',
    '(public) @ember-data/request-utils LifetimesService#invalidateRequestsForType',
    '(public) @ember-data/request-utils LifetimesService#isHardExpired',
    '(public) @ember-data/request-utils LifetimesService#isSoftExpired',
    '(public) @ember-data/rest/request @ember-data/rest/request#findRecord',
    '(public) @ember-data/rest/request @ember-data/rest/request#query',
    '(public) @ember-data/rest/request @ember-data/rest/request#createRecord',
    '(public) @ember-data/rest/request @ember-data/rest/request#deleteRecord',
    '(public) @ember-data/rest/request @ember-data/rest/request#updateRecord',
    '(public) @ember-data/serializer Serializer#normalize',
    '(public) @ember-data/serializer Serializer#normalizeResponse',
    '(public) @ember-data/serializer Serializer#serialize',
    '(public) @ember-data/serializer Serializer#store',
    '(public) @ember-data/serializer Transform#deserialize',
    '(public) @ember-data/serializer Transform#serialize',
    '(public) @ember-data/serializer/json JSONSerializer#attrs',
    '(public) @ember-data/serializer/json JSONSerializer#extractAttributes',
    '(public) @ember-data/serializer/json JSONSerializer#extractErrors',
    '(public) @ember-data/serializer/json JSONSerializer#extractId',
    '(public) @ember-data/serializer/json JSONSerializer#extractMeta',
    '(public) @ember-data/serializer/json JSONSerializer#extractPolymorphicRelationship',
    '(public) @ember-data/serializer/json JSONSerializer#extractRelationship',
    '(public) @ember-data/serializer/json JSONSerializer#extractRelationships',
    '(public) @ember-data/serializer/json JSONSerializer#keyForAttribute',
    '(public) @ember-data/serializer/json JSONSerializer#keyForLink',
    '(public) @ember-data/serializer/json JSONSerializer#keyForRelationship',
    '(public) @ember-data/serializer/json JSONSerializer#modelNameFromPayloadKey',
    '(public) @ember-data/serializer/json JSONSerializer#normalize',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeArrayResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeCreateRecordResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeDeleteRecordResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeFindAllResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeFindBelongsToResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeFindHasManyResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeFindManyResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeFindRecordResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeQueryRecordResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeQueryResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeSaveResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeSingleResponse',
    '(public) @ember-data/serializer/json JSONSerializer#normalizeUpdateRecordResponse',
    '(public) @ember-data/serializer/json JSONSerializer#primaryKey',
    '(public) @ember-data/serializer/json JSONSerializer#serialize',
    '(public) @ember-data/serializer/json JSONSerializer#serializeAttribute',
    '(public) @ember-data/serializer/json JSONSerializer#serializeBelongsTo',
    '(public) @ember-data/serializer/json JSONSerializer#serializeHasMany',
    '(public) @ember-data/serializer/json JSONSerializer#serializeIntoHash',
    '(public) @ember-data/serializer/json JSONSerializer#serializePolymorphicType',
    '(public) @ember-data/serializer/json JSONSerializer#shouldSerializeHasMany',
    '(public) @ember-data/serializer/json-api JSONAPISerializer#extractRelationship',
    '(public) @ember-data/serializer/json-api JSONAPISerializer#extractRelationships',
    '(public) @ember-data/serializer/json-api JSONAPISerializer#keyForAttribute',
    '(public) @ember-data/serializer/json-api JSONAPISerializer#keyForRelationship',
    '(public) @ember-data/serializer/json-api JSONAPISerializer#modelNameFromPayloadKey',
    '(public) @ember-data/serializer/json-api JSONAPISerializer#payloadKeyFromModelName',
    '(public) @ember-data/serializer/json-api JSONAPISerializer#pushPayload',
    '(public) @ember-data/serializer/json-api JSONAPISerializer#serialize',
    '(public) @ember-data/serializer/rest EmbeddedRecordsMixin#normalize',
    '(public) @ember-data/serializer/rest EmbeddedRecordsMixin#removeEmbeddedForeignKey',
    '(public) @ember-data/serializer/rest EmbeddedRecordsMixin#serializeBelongsTo',
    '(public) @ember-data/serializer/rest EmbeddedRecordsMixin#serializeHasMany',
    '(public) @ember-data/serializer/rest RESTSerializer#extractPolymorphicRelationship',
    '(public) @ember-data/serializer/rest RESTSerializer#keyForPolymorphicType',
    '(public) @ember-data/serializer/rest RESTSerializer#modelNameFromPayloadKey',
    '(public) @ember-data/serializer/rest RESTSerializer#normalize',
    '(public) @ember-data/serializer/rest RESTSerializer#payloadKeyFromModelName',
    '(public) @ember-data/serializer/rest RESTSerializer#pushPayload',
    '(public) @ember-data/serializer/rest RESTSerializer#serialize',
    '(public) @ember-data/serializer/rest RESTSerializer#serializeIntoHash',
    '(public) @ember-data/serializer/rest RESTSerializer#serializePolymorphicType',
    '(public) @ember-data/store @ember-data/store#recordIdentifierFor',
    '(public) @ember-data/store @ember-data/store#setIdentifierForgetMethod',
    '(public) @ember-data/store @ember-data/store#setIdentifierGenerationMethod',
    '(public) @ember-data/store @ember-data/store#setIdentifierResetMethod',
    '(public) @ember-data/store @ember-data/store#setIdentifierUpdateMethod',
    '(public) @ember-data/store @ember-data/store#setKeyInfoForResource',
    '(public) @ember-data/store CacheManager#changedAttrs',
    '(public) @ember-data/store CacheManager#clientDidCreate',
    '(public) @ember-data/store CacheManager#commitWasRejected',
    '(public) @ember-data/store CacheManager#didCommit',
    '(public) @ember-data/store CacheManager#diff',
    '(public) @ember-data/store CacheManager#dump',
    '(public) @ember-data/store CacheManager#fork',
    '(public) @ember-data/store CacheManager#getAttr',
    '(public) @ember-data/store CacheManager#getErrors',
    '(public) @ember-data/store CacheManager#getRelationship',
    '(public) @ember-data/store CacheManager#hasChangedAttrs',
    '(public) @ember-data/store CacheManager#hydrate',
    '(public) @ember-data/store CacheManager#isDeleted',
    '(public) @ember-data/store CacheManager#isDeletionCommitted',
    '(public) @ember-data/store CacheManager#isEmpty',
    '(public) @ember-data/store CacheManager#isNew',
    '(public) @ember-data/store CacheManager#merge',
    '(public) @ember-data/store CacheManager#mutate',
    '(public) @ember-data/store CacheManager#patch',
    '(public) @ember-data/store CacheManager#peek',
    '(public) @ember-data/store CacheManager#peekRequest',
    '(public) @ember-data/store CacheManager#put',
    '(public) @ember-data/store CacheManager#rollbackAttrs',
    '(public) @ember-data/store CacheManager#setAttr',
    '(public) @ember-data/store CacheManager#setIsDeleted',
    '(public) @ember-data/store CacheManager#unloadRecord',
    '(public) @ember-data/store CacheManager#upsert',
    '(public) @ember-data/store CacheManager#willCommit',
    '(public) @ember-data/store CacheManager#changedRelationships',
    '(public) @ember-data/store CacheManager#hasChangedRelationships',
    '(public) @ember-data/store CacheManager#rollbackRelationships',
    '(public) @ember-data/store CacheCapabilitiesManager#disconnectRecord',
    '(public) @ember-data/store CacheCapabilitiesManager#getSchemaDefinitionService',
    '(public) @ember-data/store CacheCapabilitiesManager#schema',
    '(public) @ember-data/store CacheCapabilitiesManager#hasRecord',
    '(public) @ember-data/store CacheCapabilitiesManager#identifierCache',
    '(public) @ember-data/store CacheCapabilitiesManager#notifyChange',
    '(public) @ember-data/store CacheCapabilitiesManager#setRecordId',
    '(public) @ember-data/store IdentifierCache#createIdentifierForNewRecord',
    '(public) @ember-data/store IdentifierCache#forgetRecordIdentifier',
    '(public) @ember-data/store IdentifierCache#getOrCreateRecordIdentifier',
    '(public) @ember-data/store IdentifierCache#updateRecordIdentifier',
    '(public) @ember-data/store ManyArray#createRecord',
    '(public) @ember-data/store ManyArray#isLoaded',
    '(public) @ember-data/store ManyArray#links',
    '(public) @ember-data/store ManyArray#links',
    '(public) @ember-data/store ManyArray#meta',
    '(public) @ember-data/store ManyArray#reload',
    '(public) @ember-data/store ManyArray#save',
    '(public) @ember-data/store NotificationManager#subscribe',
    '(public) @ember-data/store NotificationManager#unsubscribe',
    '(public) @ember-data/store RecordArray#isUpdating',
    '(public) @ember-data/store RecordArray#save',
    '(public) @ember-data/store RecordArray#update',
    '(public) @ember-data/store RecordReference#id',
    '(public) @ember-data/store RecordReference#identifier',
    '(public) @ember-data/store RecordReference#load',
    '(public) @ember-data/store RecordReference#push',
    '(public) @ember-data/store RecordReference#reload',
    '(public) @ember-data/store RecordReference#remoteType',
    '(public) @ember-data/store RecordReference#value',
    '(public) @ember-data/store <Interface> SchemaService#attributesDefinitionFor',
    '(public) @ember-data/store <Interface> SchemaService#doesTypeExist',
    '(public) @ember-data/store <Interface> SchemaService#relationshipsDefinitionFor',
    '(public) @ember-data/store Snapshot#adapterOptions',
    '(public) @ember-data/store Snapshot#attr',
    '(public) @ember-data/store Snapshot#attributes',
    '(public) @ember-data/store Snapshot#belongsTo',
    '(public) @ember-data/store Snapshot#changedAttributes',
    '(public) @ember-data/store Snapshot#eachAttribute',
    '(public) @ember-data/store Snapshot#eachRelationship',
    '(public) @ember-data/store Snapshot#hasMany',
    '(public) @ember-data/store Snapshot#id',
    '(public) @ember-data/store Snapshot#identifier',
    '(public) @ember-data/store Snapshot#include',
    '(public) @ember-data/store Snapshot#modelName',
    '(public) @ember-data/store Snapshot#record',
    '(public) @ember-data/store Snapshot#serialize',
    '(public) @ember-data/store StableRecordIdentifier#id',
    '(public) @ember-data/store StableRecordIdentifier#lid',
    '(public) @ember-data/store StableRecordIdentifier#type',
    '(public) @ember-data/store Store#adapterFor',
    '(public) @ember-data/store Store#cache',
    '(public) @ember-data/store Store#createCache (hook)',
    '(public) @ember-data/store Store#createRecord',
    '(public) @ember-data/store Store#deleteRecord',
    '(public) @ember-data/store Store#findAll',
    '(public) @ember-data/store Store#findRecord',
    '(public) @ember-data/store Store#getReference',
    '(public) @ember-data/store Store#getRequestStateService',
    '(public) @ember-data/store Store#getSchemaDefinitionService',
    '(public) @ember-data/store Store#identifierCache',
    '(public) @ember-data/store Store#identifierCache',
    '(public) @ember-data/store Store#instantiateRecord (hook)',
    '(public) @ember-data/store Store#lifetimes',
    '(public) @ember-data/store Store#modelFor',
    '(public) @ember-data/store Store#normalize',
    '(public) @ember-data/store Store#notifications',
    '(public) @ember-data/store Store#peekAll',
    '(public) @ember-data/store Store#peekRecord',
    '(public) @ember-data/store Store#push',
    '(public) @ember-data/store Store#pushPayload',
    '(public) @ember-data/store Store#query',
    '(public) @ember-data/store Store#queryRecord',
    '(public) @ember-data/store Store#registerSchemaDefinitionService',
    '(public) @ember-data/store Store#request',
    '(public) @ember-data/store Store#requestManager',
    '(public) @ember-data/store Store#saveRecord',
    '(public) @ember-data/store Store#serializerFor',
    '(public) @ember-data/store Store#teardownRecord (hook)',
    '(public) @ember-data/store Store#unloadAll',
    '(public) @ember-data/store Store#unloadRecord',
    '(public) @ember-data/tracking @ember-data/tracking#memoTransact',
    '(public) @ember-data/tracking @ember-data/tracking#transact',
    '(public) @ember-data/tracking @ember-data/tracking#untracked',
  ],
};
