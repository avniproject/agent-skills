# API Reference: AnswerConceptSync.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/AnswerConceptSync.java`

---

## Classes

### AnswerConceptSync

**Inherits from**: EntitySyncAction

#### Methods

##### AnswerConceptSync(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### doesntSupport(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`


##### TransactionalSyncSqlGenerator() → new

**Returns**: `new`


##### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


##### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`


##### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`


##### performMigration(unknown: Map<String, acm: Object>, tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| acm | Object> | - | - |
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`


##### getMultiSelectUpdateQuery(baseQuery: String, oldName: String, newName: String, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseQuery | String | - | - |
| oldName | String | - | - |
| newName | String | - | - |
| columnName | String | - | - |

**Returns**: `String`


##### getSingleSelectUpdateQuery(baseQuery: String, oldName: String, newName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseQuery | String | - | - |
| oldName | String | - | - |
| newName | String | - | - |

**Returns**: `String`




## Functions

### AnswerConceptSync(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### doesntSupport(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`



### TransactionalSyncSqlGenerator() → new

**Returns**: `new`



### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`



### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`



### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`



### performMigration(unknown: Map<String, acm: Object>, tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| acm | Object> | - | - |
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`



### getMultiSelectUpdateQuery(baseQuery: String, oldName: String, newName: String, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseQuery | String | - | - |
| oldName | String | - | - |
| newName | String | - | - |
| columnName | String | - | - |

**Returns**: `String`



### getSingleSelectUpdateQuery(baseQuery: String, oldName: String, newName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseQuery | String | - | - |
| oldName | String | - | - |
| newName | String | - | - |

**Returns**: `String`


