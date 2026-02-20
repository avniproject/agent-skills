# API Reference: ScheduledJobConfig.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/config/ScheduledJobConfig.java`

---

## Classes

### ScheduledJobConfig

**Inherits from**: (none)

#### Methods

##### getTriggerKey(organisationUUID: String, jobGroup: JobGroup) → TriggerKey

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `TriggerKey`


##### TriggerKey(unknown: organisationUUID, unknown: jobGroup.getTriggerName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationUUID | - | - |
| unknown | jobGroup.getTriggerName( | - | - |

**Returns**: `new`


##### getSyncRepeatIntervalInMinutes() → int

**Returns**: `int`


##### getMediaAnalysisRepeatIntervalInMinutes() → int

**Returns**: `int`


##### getJobKey(organisationUUID: String, jobGroup: JobGroup) → JobKey

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `JobKey`


##### JobKey(unknown: organisationUUID, unknown: jobGroup.getGroupName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationUUID | - | - |
| unknown | jobGroup.getGroupName( | - | - |

**Returns**: `new`


##### getEntityId(jobDetail: JobDetail) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobDetail | JobDetail | - | - |

**Returns**: `String`


##### createJobData(jobEntityType: JobEntityType) → JobDataMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobEntityType | JobEntityType | - | - |

**Returns**: `JobDataMap`


##### JobDataMap() → new

**Returns**: `new`


##### Date() → new

**Returns**: `new`




## Functions

### getTriggerKey(organisationUUID: String, jobGroup: JobGroup) → TriggerKey

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `TriggerKey`



### TriggerKey(unknown: organisationUUID, unknown: jobGroup.getTriggerName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationUUID | - | - |
| unknown | jobGroup.getTriggerName( | - | - |

**Returns**: `new`



### getSyncRepeatIntervalInMinutes() → int

**Returns**: `int`



### getMediaAnalysisRepeatIntervalInMinutes() → int

**Returns**: `int`



### getJobKey(organisationUUID: String, jobGroup: JobGroup) → JobKey

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |
| jobGroup | JobGroup | - | - |

**Returns**: `JobKey`



### JobKey(unknown: organisationUUID, unknown: jobGroup.getGroupName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationUUID | - | - |
| unknown | jobGroup.getGroupName( | - | - |

**Returns**: `new`



### getEntityId(jobDetail: JobDetail) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobDetail | JobDetail | - | - |

**Returns**: `String`



### createJobData(jobEntityType: JobEntityType) → JobDataMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobEntityType | JobEntityType | - | - |

**Returns**: `JobDataMap`



### JobDataMap() → new

**Returns**: `new`



### Date() → new

**Returns**: `new`


