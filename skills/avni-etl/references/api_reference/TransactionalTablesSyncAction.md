# API Reference: TransactionalTablesSyncAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/TransactionalTablesSyncAction.java`

---

## Classes

### TransactionalTablesSyncAction

**Inherits from**: EntitySyncAction

#### Methods

##### TransactionalTablesSyncAction(jdbcTemplate: JdbcTemplate) → public

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


##### TransactionalSyncSqlGenerator() → new

**Returns**: `new`




## Functions

### TransactionalTablesSyncAction(jdbcTemplate: JdbcTemplate) → public

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



### TransactionalSyncSqlGenerator() → new

**Returns**: `new`


