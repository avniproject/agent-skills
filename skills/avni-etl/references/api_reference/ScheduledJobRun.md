# API Reference: ScheduledJobRun.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/quartz/ScheduledJobRun.java`

---

## Classes

### ScheduledJobRun

**Inherits from**: (none)

#### Methods

##### create(jobDetail: JobDetail, trigger: Trigger) → ScheduledJobRun

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobDetail | JobDetail | - | - |
| trigger | Trigger | - | - |

**Returns**: `ScheduledJobRun`


##### ScheduledJobRun() → new

**Returns**: `new`


##### Date() → new

**Returns**: `new`


##### ended(jobException: JobExecutionException, trigger: Trigger) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobException | JobExecutionException | - | - |
| trigger | Trigger | - | - |

**Returns**: `void`


##### Date() → new

**Returns**: `new`


##### getAppException(throwable: Throwable) → Throwable

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| throwable | Throwable | - | - |

**Returns**: `Throwable`


##### getAppException(unknown: throwable.getCause() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | throwable.getCause( | - | - |

**Returns**: `return`


##### getId() → Long

**Returns**: `Long`


##### getJobName() → String

**Returns**: `String`


##### getStartedAt() → Date

**Returns**: `Date`


##### getEndedAt() → Date

**Returns**: `Date`


##### getErrorMessage() → String

**Returns**: `String`


##### setErrorMessage(errorMessage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMessage | String | - | - |

**Returns**: `void`


##### isSuccess() → boolean

**Returns**: `boolean`


##### setSuccess(success: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| success | boolean | - | - |

**Returns**: `void`




## Functions

### create(jobDetail: JobDetail, trigger: Trigger) → ScheduledJobRun

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobDetail | JobDetail | - | - |
| trigger | Trigger | - | - |

**Returns**: `ScheduledJobRun`



### ScheduledJobRun() → new

**Returns**: `new`



### Date() → new

**Returns**: `new`



### ended(jobException: JobExecutionException, trigger: Trigger) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobException | JobExecutionException | - | - |
| trigger | Trigger | - | - |

**Returns**: `void`



### Date() → new

**Returns**: `new`



### getAppException(throwable: Throwable) → Throwable

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| throwable | Throwable | - | - |

**Returns**: `Throwable`



### getAppException(unknown: throwable.getCause() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | throwable.getCause( | - | - |

**Returns**: `return`



### getId() → Long

**Returns**: `Long`



### getJobName() → String

**Returns**: `String`



### getStartedAt() → Date

**Returns**: `Date`



### getEndedAt() → Date

**Returns**: `Date`



### getErrorMessage() → String

**Returns**: `String`



### setErrorMessage(errorMessage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMessage | String | - | - |

**Returns**: `void`



### isSuccess() → boolean

**Returns**: `boolean`



### setSuccess(success: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| success | boolean | - | - |

**Returns**: `void`


