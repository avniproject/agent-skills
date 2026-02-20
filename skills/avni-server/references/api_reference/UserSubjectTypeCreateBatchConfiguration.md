# API Reference: UserSubjectTypeCreateBatchConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/userSubjectType/UserSubjectTypeCreateBatchConfiguration.java`

---

## Classes

### UserSubjectTypeCreateBatchConfiguration

**Inherits from**: (none)

#### Methods

##### UserSubjectTypeCreateBatchConfiguration(jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `public`


##### userSubjectTypeCreateJobLauncher() → JobLauncher

**Returns**: `JobLauncher`


##### TaskExecutorJobLauncher() → new

**Returns**: `new`


##### ThreadPoolTaskExecutor() → new

**Returns**: `new`


##### userSubjectTypeCreateJob(listener: UserSubjectTypeCreateJobListener, userSubjectTypeCreateStep: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | UserSubjectTypeCreateJobListener | - | - |
| userSubjectTypeCreateStep | Step | - | - |

**Returns**: `Job`


##### JobBuilder(unknown: "userSubjectTypeCreateJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "userSubjectTypeCreateJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### RunIdIncrementer() → new

**Returns**: `new`


##### userSubjectTypeCreateStep(tasklet: UserSubjectTypeCreateTasklet) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tasklet | UserSubjectTypeCreateTasklet | - | - |

**Returns**: `Step`


##### StepBuilder(unknown: "userSubjectTypeCreateStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "userSubjectTypeCreateStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`




## Functions

### UserSubjectTypeCreateBatchConfiguration(jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `public`



### userSubjectTypeCreateJobLauncher() → JobLauncher

**Returns**: `JobLauncher`



### TaskExecutorJobLauncher() → new

**Returns**: `new`



### ThreadPoolTaskExecutor() → new

**Returns**: `new`



### userSubjectTypeCreateJob(listener: UserSubjectTypeCreateJobListener, userSubjectTypeCreateStep: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | UserSubjectTypeCreateJobListener | - | - |
| userSubjectTypeCreateStep | Step | - | - |

**Returns**: `Job`



### JobBuilder(unknown: "userSubjectTypeCreateJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "userSubjectTypeCreateJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### RunIdIncrementer() → new

**Returns**: `new`



### userSubjectTypeCreateStep(tasklet: UserSubjectTypeCreateTasklet) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tasklet | UserSubjectTypeCreateTasklet | - | - |

**Returns**: `Step`



### StepBuilder(unknown: "userSubjectTypeCreateStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "userSubjectTypeCreateStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


