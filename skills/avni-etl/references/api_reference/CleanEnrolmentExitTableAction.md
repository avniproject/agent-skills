# API Reference: CleanEnrolmentExitTableAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/CleanEnrolmentExitTableAction.java`

---

## Classes

### CleanEnrolmentExitTableAction

**Inherits from**: EntitySyncAction

#### Methods

##### CleanEnrolmentExitTableAction(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


##### cleanInvalidExits(tableMetadata: TableMetadata, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


##### ST(unknown: deleteInvalidExitsSqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | deleteInvalidExitsSqlTemplate | - | - |

**Returns**: `new`


##### getPrimaryTableName(tableMetadata: TableMetadata, currentSchemaMetadata: SchemaMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `String`


##### RuntimeException(Primary: String.format("Corresponding, unknown: tableMetadata.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Primary | String.format("Corresponding | - | - |
| unknown | tableMetadata.getName( | - | - |

**Returns**: `new`


##### supports(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`


##### doesntSupport(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`




## Functions

### CleanEnrolmentExitTableAction(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`



### cleanInvalidExits(tableMetadata: TableMetadata, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`



### ST(unknown: deleteInvalidExitsSqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | deleteInvalidExitsSqlTemplate | - | - |

**Returns**: `new`



### getPrimaryTableName(tableMetadata: TableMetadata, currentSchemaMetadata: SchemaMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `String`



### RuntimeException(Primary: String.format("Corresponding, unknown: tableMetadata.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Primary | String.format("Corresponding | - | - |
| unknown | tableMetadata.getName( | - | - |

**Returns**: `new`



### supports(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`



### doesntSupport(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`


