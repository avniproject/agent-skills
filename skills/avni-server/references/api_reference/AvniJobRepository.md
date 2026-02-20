# API Reference: AvniJobRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/AvniJobRepository.java`

---

## Classes

### AvniJobRepository

**Inherits from**: (none)

#### Methods

##### AvniJobRepository(jdbcTemplate: NamedParameterJdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | NamedParameterJdbcTemplate | - | - |

**Returns**: `public`


##### getJobStatuses(user: User, jobFilterCondition: String, pageable: Pageable) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| jobFilterCondition | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<JobStatus>`


##### JobStatusMapper() → new

**Returns**: `new`


##### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`


##### getJobStatus(jobName: String, parameterName: String, parameterValue: String) → BatchJobStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobName | String | - | - |
| parameterName | String | - | - |
| parameterValue | String | - | - |

**Returns**: `BatchJobStatus`


##### BatchJobStatus(unknown: rs.getString(1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getString(1 | - | - |

**Returns**: `new`


##### BatchJobStatus(unknown: "NOT_FOUND", unknown: null, unknown: null, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "NOT_FOUND" | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`




## Functions

### AvniJobRepository(jdbcTemplate: NamedParameterJdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | NamedParameterJdbcTemplate | - | - |

**Returns**: `public`



### getJobStatuses(user: User, jobFilterCondition: String, pageable: Pageable) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| jobFilterCondition | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<JobStatus>`



### JobStatusMapper() → new

**Returns**: `new`



### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`



### getJobStatus(jobName: String, parameterName: String, parameterValue: String) → BatchJobStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobName | String | - | - |
| parameterName | String | - | - |
| parameterValue | String | - | - |

**Returns**: `BatchJobStatus`



### BatchJobStatus(unknown: rs.getString(1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getString(1 | - | - |

**Returns**: `new`



### BatchJobStatus(unknown: "NOT_FOUND", unknown: null, unknown: null, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "NOT_FOUND" | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


