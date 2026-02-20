# API Reference: ScheduledJobService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/backgroundJob/ScheduledJobService.java`

---

## Classes

### ScheduledJobService

**Inherits from**: (none)

#### Methods

##### from(unnest(string_to_array(?: SELECT, unknown: ', unknown: ') → job_name

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unnest(string_to_array(? | SELECT | - | - |
| unknown | ' | - | - |
| unknown | ' | - | - |

**Returns**: `job_name`


##### ScheduledJobService(jdbcTemplate: JdbcTemplate, scheduler: Scheduler, scheduledJobConfig: ScheduledJobConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| scheduler | Scheduler | - | - |
| scheduledJobConfig | ScheduledJobConfig | - | - |

**Returns**: `public`


##### getJobs(organisationUUIDs: List<String>, jobGroup: JobGroup) → List<EtlJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUIDs | List<String> | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `List<EtlJobStatus>`


##### EtlJobStatusMapper() → new

**Returns**: `new`


##### getLatestJobRun(organisationUUID: String, jobGroup: JobGroup) → EtlJobSummary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `EtlJobSummary`


##### EtlJobLatestStatusResponseMapper() → new

**Returns**: `new`


##### getJobHistory(organisationUUID: String, jobGroup: JobGroup) → List<EtlJobHistoryItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `List<EtlJobHistoryItem>`


##### EtlJobHistoryItemMapper() → new

**Returns**: `new`


##### mapRow(rs: ResultSet, rowNum: int) → EtlJobSummary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| rowNum | int | - | - |

**Returns**: `EtlJobSummary`


##### EtlJobSummary() → new

**Returns**: `new`


##### mapRow(rs: ResultSet, rowNum: int) → EtlJobHistoryItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| rowNum | int | - | - |

**Returns**: `EtlJobHistoryItem`


##### EtlJobHistoryItem() → new

**Returns**: `new`


##### mapRow(rs: ResultSet, rowNum: int) → EtlJobStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| rowNum | int | - | - |

**Returns**: `EtlJobStatus`


##### EtlJobStatus() → new

**Returns**: `new`




## Functions

### from(unnest(string_to_array(?: SELECT, unknown: ', unknown: ') → job_name

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unnest(string_to_array(? | SELECT | - | - |
| unknown | ' | - | - |
| unknown | ' | - | - |

**Returns**: `job_name`



### ScheduledJobService(jdbcTemplate: JdbcTemplate, scheduler: Scheduler, scheduledJobConfig: ScheduledJobConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| scheduler | Scheduler | - | - |
| scheduledJobConfig | ScheduledJobConfig | - | - |

**Returns**: `public`



### getJobs(organisationUUIDs: List<String>, jobGroup: JobGroup) → List<EtlJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUIDs | List<String> | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `List<EtlJobStatus>`



### EtlJobStatusMapper() → new

**Returns**: `new`



### getLatestJobRun(organisationUUID: String, jobGroup: JobGroup) → EtlJobSummary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `EtlJobSummary`



### EtlJobLatestStatusResponseMapper() → new

**Returns**: `new`



### getJobHistory(organisationUUID: String, jobGroup: JobGroup) → List<EtlJobHistoryItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `List<EtlJobHistoryItem>`



### EtlJobHistoryItemMapper() → new

**Returns**: `new`



### mapRow(rs: ResultSet, rowNum: int) → EtlJobSummary

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| rowNum | int | - | - |

**Returns**: `EtlJobSummary`



### EtlJobSummary() → new

**Returns**: `new`



### mapRow(rs: ResultSet, rowNum: int) → EtlJobHistoryItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| rowNum | int | - | - |

**Returns**: `EtlJobHistoryItem`



### EtlJobHistoryItem() → new

**Returns**: `new`



### mapRow(rs: ResultSet, rowNum: int) → EtlJobStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| rowNum | int | - | - |

**Returns**: `EtlJobStatus`



### EtlJobStatus() → new

**Returns**: `new`


