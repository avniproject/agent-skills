# API Reference: AddressTableSyncAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/AddressTableSyncAction.java`

---

## Classes

### AddressTableSyncAction

**Inherits from**: EntitySyncAction

#### Methods

##### AddressTableSyncAction(jdbcTemplate: JdbcTemplate) → public

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


##### insertLowestLevelAddresses(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`


##### TransactionalSyncSqlGenerator() → new

**Returns**: `new`


##### insertParents(childLevelId: Integer, childLevelName: String, parentLevelId: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| childLevelId | Integer | - | - |
| childLevelName | String | - | - |
| parentLevelId | Integer | - | - |

**Returns**: `void`


##### runAddressQuery(query: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | String | - | - |

**Returns**: `void`




## Functions

### AddressTableSyncAction(jdbcTemplate: JdbcTemplate) → public

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



### insertLowestLevelAddresses(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`



### TransactionalSyncSqlGenerator() → new

**Returns**: `new`



### insertParents(childLevelId: Integer, childLevelName: String, parentLevelId: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| childLevelId | Integer | - | - |
| childLevelName | String | - | - |
| parentLevelId | Integer | - | - |

**Returns**: `void`



### runAddressQuery(query: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | String | - | - |

**Returns**: `void`


