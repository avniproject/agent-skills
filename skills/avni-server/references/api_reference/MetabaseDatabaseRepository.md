# API Reference: MetabaseDatabaseRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/metabase/MetabaseDatabaseRepository.java`

---

## Classes

### MetabaseDatabaseRepository

**Inherits from**: MetabaseConnector

#### Methods

##### MetabaseDatabaseRepository(restTemplateBuilder: RestTemplateBuilder, collectionRepository: CollectionRepository, metabaseDbConnectionFactory: MetabaseDbConnectionFactory, selfServiceBatchConfig: SelfServiceBatchConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |
| collectionRepository | CollectionRepository | - | - |
| metabaseDbConnectionFactory | MetabaseDbConnectionFactory | - | - |
| selfServiceBatchConfig | SelfServiceBatchConfig | - | - |

**Returns**: `public`


##### save(database: Database) → Database

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `Database`


##### getDatabase(organisation: Organisation) → Database

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Database`


##### getDatabase(unknown: organisation.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation.getName( | - | - |

**Returns**: `return`


##### getCollectionForDatabase(database: Database) → CollectionInfoResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `CollectionInfoResponse`


##### RuntimeException(to: String.format("Failed, unknown: database.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | String.format("Failed | - | - |
| unknown | database.getName( | - | - |

**Returns**: `new`


##### getDatabase(organisationName: String, organisationDbUser: String) → Database

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationName | String | - | - |
| organisationDbUser | String | - | - |

**Returns**: `Database`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### getDatabaseDetails(database: Database) → MetabaseDatabaseInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `MetabaseDatabaseInfo`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### getSchemas(database: Database) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<String>`


##### getTables(database: Database, schema: String) → List<TableDetails>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| schema | String | - | - |

**Returns**: `List<TableDetails>`


##### findTableDetailsByName(database: Database, targetTable: TableDetails) → TableDetails

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| targetTable | TableDetails | - | - |

**Returns**: `TableDetails`


##### RuntimeException(with: "Table) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | "Table | - | - |

**Returns**: `new`


##### getInitialSyncStatus(database: Database) → DatabaseSyncStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `DatabaseSyncStatus`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### getDataset(requestBody: DatasetRequestBody) → DatasetResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestBody | DatasetRequestBody | - | - |

**Returns**: `DatasetResponse`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### findAll(table: TableDetails, database: Database) → DatasetResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | TableDetails | - | - |
| database | Database | - | - |

**Returns**: `DatasetResponse`


##### getDataset(unknown: requestBody) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | requestBody | - | - |

**Returns**: `return`


##### createRequestBodyForDataset(database: Database, table: TableDetails) → DatasetRequestBody

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| table | TableDetails | - | - |

**Returns**: `DatasetRequestBody`


##### DatasetRequestBody(unknown: database, unknown: table) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database | - | - |
| unknown | table | - | - |

**Returns**: `new`


##### delete(database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `void`


##### reSyncSchema(database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `void`


##### rescanFieldValues(database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `void`


##### getFields(table: TableDetails) → List<FieldDetails>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | TableDetails | - | - |

**Returns**: `List<FieldDetails>`


##### getOrgSchemaField(database: Database, tableName: String, fieldName: String) → FieldDetails

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| tableName | String | - | - |
| fieldName | String | - | - |

**Returns**: `FieldDetails`


##### getOrgSchemaField(database: Database, tableName: String, field: FieldDetails) → FieldDetails

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| tableName | String | - | - |
| field | FieldDetails | - | - |

**Returns**: `FieldDetails`


##### getField(database: Database, schemaName: String, tableName: String, fieldName: String) → FieldDetails

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| schemaName | String | - | - |
| tableName | String | - | - |
| fieldName | String | - | - |

**Returns**: `FieldDetails`


##### RuntimeException(not: "Table) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Table | - | - |

**Returns**: `new`


##### RuntimeException(": "Field:) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| " | "Field: | - | - |

**Returns**: `new`


##### clearThreadLocalContext() → void

**Returns**: `void`


##### moveDatabaseScanningToFarFuture(database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `void`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### isSyncRunning(database: Database) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `boolean`


##### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`


##### in(unknown: 'sync-fields', unknown: 'sync-tables') → task

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 'sync-fields' | - | - |
| unknown | 'sync-tables' | - | - |

**Returns**: `task`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### safeClose(...: AutoCloseable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ... | AutoCloseable | - | - |

**Returns**: `void`




## Functions

### MetabaseDatabaseRepository(restTemplateBuilder: RestTemplateBuilder, collectionRepository: CollectionRepository, metabaseDbConnectionFactory: MetabaseDbConnectionFactory, selfServiceBatchConfig: SelfServiceBatchConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |
| collectionRepository | CollectionRepository | - | - |
| metabaseDbConnectionFactory | MetabaseDbConnectionFactory | - | - |
| selfServiceBatchConfig | SelfServiceBatchConfig | - | - |

**Returns**: `public`



### save(database: Database) → Database

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `Database`



### getDatabase(organisation: Organisation) → Database

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Database`



### getDatabase(unknown: organisation.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation.getName( | - | - |

**Returns**: `return`



### getCollectionForDatabase(database: Database) → CollectionInfoResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `CollectionInfoResponse`



### RuntimeException(to: String.format("Failed, unknown: database.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | String.format("Failed | - | - |
| unknown | database.getName( | - | - |

**Returns**: `new`



### getDatabase(organisationName: String, organisationDbUser: String) → Database

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationName | String | - | - |
| organisationDbUser | String | - | - |

**Returns**: `Database`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### getDatabaseDetails(database: Database) → MetabaseDatabaseInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `MetabaseDatabaseInfo`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### getSchemas(database: Database) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<String>`



### getTables(database: Database, schema: String) → List<TableDetails>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| schema | String | - | - |

**Returns**: `List<TableDetails>`



### findTableDetailsByName(database: Database, targetTable: TableDetails) → TableDetails

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| targetTable | TableDetails | - | - |

**Returns**: `TableDetails`



### RuntimeException(with: "Table) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | "Table | - | - |

**Returns**: `new`



### getInitialSyncStatus(database: Database) → DatabaseSyncStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `DatabaseSyncStatus`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### getDataset(requestBody: DatasetRequestBody) → DatasetResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestBody | DatasetRequestBody | - | - |

**Returns**: `DatasetResponse`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### findAll(table: TableDetails, database: Database) → DatasetResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | TableDetails | - | - |
| database | Database | - | - |

**Returns**: `DatasetResponse`



### getDataset(unknown: requestBody) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | requestBody | - | - |

**Returns**: `return`



### createRequestBodyForDataset(database: Database, table: TableDetails) → DatasetRequestBody

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| table | TableDetails | - | - |

**Returns**: `DatasetRequestBody`



### DatasetRequestBody(unknown: database, unknown: table) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database | - | - |
| unknown | table | - | - |

**Returns**: `new`



### delete(database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `void`



### reSyncSchema(database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `void`



### rescanFieldValues(database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `void`



### getFields(table: TableDetails) → List<FieldDetails>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | TableDetails | - | - |

**Returns**: `List<FieldDetails>`



### getOrgSchemaField(database: Database, tableName: String, fieldName: String) → FieldDetails

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| tableName | String | - | - |
| fieldName | String | - | - |

**Returns**: `FieldDetails`



### getOrgSchemaField(database: Database, tableName: String, field: FieldDetails) → FieldDetails

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| tableName | String | - | - |
| field | FieldDetails | - | - |

**Returns**: `FieldDetails`



### getField(database: Database, schemaName: String, tableName: String, fieldName: String) → FieldDetails

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| schemaName | String | - | - |
| tableName | String | - | - |
| fieldName | String | - | - |

**Returns**: `FieldDetails`



### RuntimeException(not: "Table) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Table | - | - |

**Returns**: `new`



### RuntimeException(": "Field:) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| " | "Field: | - | - |

**Returns**: `new`



### clearThreadLocalContext() → void

**Returns**: `void`



### moveDatabaseScanningToFarFuture(database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `void`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### isSyncRunning(database: Database) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `boolean`



### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`



### in(unknown: 'sync-fields', unknown: 'sync-tables') → task

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 'sync-fields' | - | - |
| unknown | 'sync-tables' | - | - |

**Returns**: `task`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### safeClose(...: AutoCloseable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ... | AutoCloseable | - | - |

**Returns**: `void`


