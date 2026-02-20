# API Reference: CannedAnalyticsBatchJobService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/metabase/CannedAnalyticsBatchJobService.java`

---

## Classes

### CannedAnalyticsBatchJobService

**Inherits from**: (none)

#### Methods

##### CannedAnalyticsBatchJobService(bgJobLauncher: JobLauncher, unknown: @Qualifier("cannedAnalyticsSetupJob") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bgJobLauncher | JobLauncher | - | - |
| unknown | @Qualifier("cannedAnalyticsSetupJob" | - | - |

**Returns**: `public`


##### createSetupJob(organisation: Organisation, user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `void`


##### createCreateQuestionOnlyJob(organisation: Organisation, user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `void`


##### createTearDownJob(organisation: Organisation, user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `void`


##### getJobParameters(organisation: Organisation, user: User) → JobParameters

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `JobParameters`


##### JobParametersBuilder() → new

**Returns**: `new`




## Functions

### CannedAnalyticsBatchJobService(bgJobLauncher: JobLauncher, unknown: @Qualifier("cannedAnalyticsSetupJob") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bgJobLauncher | JobLauncher | - | - |
| unknown | @Qualifier("cannedAnalyticsSetupJob" | - | - |

**Returns**: `public`



### createSetupJob(organisation: Organisation, user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `void`



### createCreateQuestionOnlyJob(organisation: Organisation, user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `void`



### createTearDownJob(organisation: Organisation, user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `void`



### getJobParameters(organisation: Organisation, user: User) → JobParameters

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `JobParameters`



### JobParametersBuilder() → new

**Returns**: `new`


