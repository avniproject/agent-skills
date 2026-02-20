# API Reference: EtlJobListener.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/scheduler/EtlJobListener.java`

---

## Classes

### EtlJobListener

**Inherits from**: JobListener

#### Methods

##### EtlJobListener(scheduledJobRunRepository: ScheduledJobRunRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduledJobRunRepository | ScheduledJobRunRepository | - | - |

**Returns**: `public`


##### getName() → String

**Returns**: `String`


##### jobToBeExecuted(context: JobExecutionContext) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | JobExecutionContext | - | - |

**Returns**: `void`


##### jobExecutionVetoed(context: JobExecutionContext) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | JobExecutionContext | - | - |

**Returns**: `void`


##### jobWasExecuted(context: JobExecutionContext, jobException: JobExecutionException) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | JobExecutionContext | - | - |
| jobException | JobExecutionException | - | - |

**Returns**: `void`




## Functions

### EtlJobListener(scheduledJobRunRepository: ScheduledJobRunRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduledJobRunRepository | ScheduledJobRunRepository | - | - |

**Returns**: `public`



### getName() → String

**Returns**: `String`



### jobToBeExecuted(context: JobExecutionContext) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | JobExecutionContext | - | - |

**Returns**: `void`



### jobExecutionVetoed(context: JobExecutionContext) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | JobExecutionContext | - | - |

**Returns**: `void`



### jobWasExecuted(context: JobExecutionContext, jobException: JobExecutionException) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | JobExecutionContext | - | - |
| jobException | JobExecutionException | - | - |

**Returns**: `void`


