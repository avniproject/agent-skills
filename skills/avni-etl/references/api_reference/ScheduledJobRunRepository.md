# API Reference: ScheduledJobRunRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/quartz/ScheduledJobRunRepository.java`

---

## Functions

### findFirstByJobNameOrderByIdDesc(jobName: String) → ScheduledJobRun

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobName | String | - | - |

**Returns**: `ScheduledJobRun`



### getLastRun(jobName: String) → ScheduledJobRun

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobName | String | - | - |

**Returns**: `ScheduledJobRun`



### findFirstByJobNameOrderByIdDesc(unknown: jobName) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jobName | - | - |

**Returns**: `return`



### getLatestRuns() → List<ScheduledJobRun>

**Returns**: `List<ScheduledJobRun>`


