# API Reference: EntitySyncStatusRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/EntitySyncStatusRepository.java`

---

## Classes

### EntitySyncStatusRepository

**Inherits from**: (none)

#### Methods

##### EntitySyncStatusRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### getSyncStatus() → SchemaDataSyncStatus

**Returns**: `SchemaDataSyncStatus`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### EntitySyncStatus(unknown: rs.getInt("id") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getInt("id" | - | - |

**Returns**: `new`


##### SchemaDataSyncStatus(unknown: entitySyncStatuses) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entitySyncStatuses | - | - |

**Returns**: `new`


##### save(entitySyncStatus: EntitySyncStatus) → EntitySyncStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatus | EntitySyncStatus | - | - |

**Returns**: `EntitySyncStatus`


##### update(entitySyncStatus: EntitySyncStatus) → EntitySyncStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatus | EntitySyncStatus | - | - |

**Returns**: `EntitySyncStatus`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### insert(entitySyncStatus: EntitySyncStatus) → EntitySyncStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatus | EntitySyncStatus | - | - |

**Returns**: `EntitySyncStatus`


##### SimpleJdbcInsert(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`




## Functions

### EntitySyncStatusRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### getSyncStatus() → SchemaDataSyncStatus

**Returns**: `SchemaDataSyncStatus`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### EntitySyncStatus(unknown: rs.getInt("id") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getInt("id" | - | - |

**Returns**: `new`



### SchemaDataSyncStatus(unknown: entitySyncStatuses) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entitySyncStatuses | - | - |

**Returns**: `new`



### save(entitySyncStatus: EntitySyncStatus) → EntitySyncStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatus | EntitySyncStatus | - | - |

**Returns**: `EntitySyncStatus`



### update(entitySyncStatus: EntitySyncStatus) → EntitySyncStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatus | EntitySyncStatus | - | - |

**Returns**: `EntitySyncStatus`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### insert(entitySyncStatus: EntitySyncStatus) → EntitySyncStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatus | EntitySyncStatus | - | - |

**Returns**: `EntitySyncStatus`



### SimpleJdbcInsert(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


