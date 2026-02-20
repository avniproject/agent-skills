# API Reference: CannedAnalyticsBatchFactory.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/metabase/CannedAnalyticsBatchFactory.java`

---

## Classes

### CannedAnalyticsBatchFactory

**Inherits from**: (none)

#### Methods

##### createCannedAnalyticsJob(jobName: String, jobRepository: JobRepository, cannedAnalyticsNotificationListener: CannedAnalyticsNotificationListener, step: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobName | String | - | - |
| jobRepository | JobRepository | - | - |
| cannedAnalyticsNotificationListener | CannedAnalyticsNotificationListener | - | - |
| step | Step | - | - |

**Returns**: `Job`


##### JobBuilder(unknown: jobName, unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jobName | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### RunIdIncrementer() → new

**Returns**: `new`


##### createCannedAnalyticsStep(stepName: String, jobRepository: JobRepository, cannedAnalyticsRunner: Tasklet, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stepName | String | - | - |
| jobRepository | JobRepository | - | - |
| cannedAnalyticsRunner | Tasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`


##### StepBuilder(unknown: stepName, unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | stepName | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`




## Functions

### createCannedAnalyticsJob(jobName: String, jobRepository: JobRepository, cannedAnalyticsNotificationListener: CannedAnalyticsNotificationListener, step: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobName | String | - | - |
| jobRepository | JobRepository | - | - |
| cannedAnalyticsNotificationListener | CannedAnalyticsNotificationListener | - | - |
| step | Step | - | - |

**Returns**: `Job`



### JobBuilder(unknown: jobName, unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jobName | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### RunIdIncrementer() → new

**Returns**: `new`



### createCannedAnalyticsStep(stepName: String, jobRepository: JobRepository, cannedAnalyticsRunner: Tasklet, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stepName | String | - | - |
| jobRepository | JobRepository | - | - |
| cannedAnalyticsRunner | Tasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`



### StepBuilder(unknown: stepName, unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | stepName | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


