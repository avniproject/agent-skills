# API Reference: DuplicateRowDeleteAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/DuplicateRowDeleteAction.java`

---

## Classes

### DuplicateRowDeleteAction

**Inherits from**: EntitySyncAction

#### Methods

##### in(+: \n") → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |

**Returns**: `id`


##### in(+: \n") → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |

**Returns**: `id`


##### DuplicateRowDeleteAction(jdbcTemplate: JdbcTemplate) → public

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


##### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


##### deleteDuplicateRows(tableMetadata: TableMetadata, lastSyncTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |

**Returns**: `void`


##### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`


##### supports(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`


##### TransactionalSyncSqlGenerator() → new

**Returns**: `new`


##### RepeatableQuestionGroupSyncSqlGenerator() → new

**Returns**: `new`




## Functions

### in(+: \n") → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |

**Returns**: `id`



### in(+: \n") → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |

**Returns**: `id`



### DuplicateRowDeleteAction(jdbcTemplate: JdbcTemplate) → public

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



### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`



### deleteDuplicateRows(tableMetadata: TableMetadata, lastSyncTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |

**Returns**: `void`



### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`



### supports(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`



### TransactionalSyncSqlGenerator() → new

**Returns**: `new`



### RepeatableQuestionGroupSyncSqlGenerator() → new

**Returns**: `new`


