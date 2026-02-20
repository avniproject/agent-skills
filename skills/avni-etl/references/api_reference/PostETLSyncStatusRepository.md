# API Reference: PostETLSyncStatusRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/PostETLSyncStatusRepository.java`

---

## Classes

### PostETLSyncStatusRepository

**Inherits from**: (none)

#### Methods

##### PostETLSyncStatusRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### getPreviousCutoffDateTime() → ZonedDateTime

**Returns**: `ZonedDateTime`


##### updateCutoffDateTime(dateTime: ZonedDateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateTime | ZonedDateTime | - | - |

**Returns**: `void`


##### PostETLSyncException(to: "Failed) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |

**Returns**: `new`


##### PostETLSyncException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`




### PostETLSyncException

**Inherits from**: RuntimeException

#### Methods

##### PostETLSyncException(message: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `public`


##### PostETLSyncException(message: String, cause: Throwable) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |
| cause | Throwable | - | - |

**Returns**: `public`




## Functions

### PostETLSyncStatusRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### getPreviousCutoffDateTime() → ZonedDateTime

**Returns**: `ZonedDateTime`



### updateCutoffDateTime(dateTime: ZonedDateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateTime | ZonedDateTime | - | - |

**Returns**: `void`



### PostETLSyncException(to: "Failed) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |

**Returns**: `new`



### PostETLSyncException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`



### PostETLSyncException(message: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `public`



### PostETLSyncException(message: String, cause: Throwable) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |
| cause | Throwable | - | - |

**Returns**: `public`


