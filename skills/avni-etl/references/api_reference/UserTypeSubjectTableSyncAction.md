# API Reference: UserTypeSubjectTableSyncAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/UserTypeSubjectTableSyncAction.java`

---

## Classes

### UserTypeSubjectTableSyncAction

**Inherits from**: EntitySyncAction

#### Methods

##### UserTypeSubjectTableSyncAction(jdbcTemplate: JdbcTemplate) → public

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


##### tables(with: those) → placeholder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | those | - | - |

**Returns**: `placeholder`


##### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


##### syncUserSubjectData(tableName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | String | - | - |

**Returns**: `void`


##### EXISTS(1: SELECT) → NOT

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 1 | SELECT | - | - |

**Returns**: `NOT`




## Functions

### UserTypeSubjectTableSyncAction(jdbcTemplate: JdbcTemplate) → public

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



### tables(with: those) → placeholder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | those | - | - |

**Returns**: `placeholder`



### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`



### syncUserSubjectData(tableName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | String | - | - |

**Returns**: `void`



### EXISTS(1: SELECT) → NOT

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 1 | SELECT | - | - |

**Returns**: `NOT`


