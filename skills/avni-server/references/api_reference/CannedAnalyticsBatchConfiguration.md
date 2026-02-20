# API Reference: CannedAnalyticsBatchConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/metabase/CannedAnalyticsBatchConfiguration.java`

---

## Classes

### CannedAnalyticsBatchConfiguration

**Inherits from**: (none)

#### Methods

##### CannedAnalyticsBatchConfiguration(jobRepository: JobRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |

**Returns**: `public`


##### cannedAnalyticsSetupJob(cannedAnalyticsSetupStep: Step, cannedAnalyticsNotificationListener: CannedAnalyticsNotificationListener) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsSetupStep | Step | - | - |
| cannedAnalyticsNotificationListener | CannedAnalyticsNotificationListener | - | - |

**Returns**: `Job`


##### cannedAnalyticsSetupStep(cannedAnalyticsRunner: CannedAnalyticsSetupTasklet, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsRunner | CannedAnalyticsSetupTasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`


##### cannedAnalyticsTearDownJob(cannedAnalyticsTearDownStep: Step, cannedAnalyticsNotificationListener: CannedAnalyticsNotificationListener) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsTearDownStep | Step | - | - |
| cannedAnalyticsNotificationListener | CannedAnalyticsNotificationListener | - | - |

**Returns**: `Job`


##### cannedAnalyticsTearDownStep(cannedAnalyticsRunner: CannedAnalyticsTearDownTasklet, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsRunner | CannedAnalyticsTearDownTasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`


##### cannedAnalyticsCreateQuestionOnlyJob(cannedAnalyticsCreateQuestionOnlyStep: Step, cannedAnalyticsNotificationListener: CannedAnalyticsNotificationListener) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsCreateQuestionOnlyStep | Step | - | - |
| cannedAnalyticsNotificationListener | CannedAnalyticsNotificationListener | - | - |

**Returns**: `Job`


##### cannedAnalyticsCreateQuestionOnlyStep(cannedAnalyticsRunner: CannedAnalyticsCreateQuestionsOnlyTasklet, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsRunner | CannedAnalyticsCreateQuestionsOnlyTasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`




## Functions

### CannedAnalyticsBatchConfiguration(jobRepository: JobRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |

**Returns**: `public`



### cannedAnalyticsSetupJob(cannedAnalyticsSetupStep: Step, cannedAnalyticsNotificationListener: CannedAnalyticsNotificationListener) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsSetupStep | Step | - | - |
| cannedAnalyticsNotificationListener | CannedAnalyticsNotificationListener | - | - |

**Returns**: `Job`



### cannedAnalyticsSetupStep(cannedAnalyticsRunner: CannedAnalyticsSetupTasklet, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsRunner | CannedAnalyticsSetupTasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`



### cannedAnalyticsTearDownJob(cannedAnalyticsTearDownStep: Step, cannedAnalyticsNotificationListener: CannedAnalyticsNotificationListener) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsTearDownStep | Step | - | - |
| cannedAnalyticsNotificationListener | CannedAnalyticsNotificationListener | - | - |

**Returns**: `Job`



### cannedAnalyticsTearDownStep(cannedAnalyticsRunner: CannedAnalyticsTearDownTasklet, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsRunner | CannedAnalyticsTearDownTasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`



### cannedAnalyticsCreateQuestionOnlyJob(cannedAnalyticsCreateQuestionOnlyStep: Step, cannedAnalyticsNotificationListener: CannedAnalyticsNotificationListener) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsCreateQuestionOnlyStep | Step | - | - |
| cannedAnalyticsNotificationListener | CannedAnalyticsNotificationListener | - | - |

**Returns**: `Job`



### cannedAnalyticsCreateQuestionOnlyStep(cannedAnalyticsRunner: CannedAnalyticsCreateQuestionsOnlyTasklet, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannedAnalyticsRunner | CannedAnalyticsCreateQuestionsOnlyTasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`


