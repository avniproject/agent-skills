# API Reference: SyncAttributesBatchConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/sync/attributes/SyncAttributesBatchConfiguration.java`

---

## Classes

### SyncAttributesBatchConfiguration

**Inherits from**: (none)

#### Methods

##### SyncAttributesBatchConfiguration(jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `public`


##### syncAttributesJobLauncher() → JobLauncher

**Returns**: `JobLauncher`


##### TaskExecutorJobLauncher() → new

**Returns**: `new`


##### ThreadPoolTaskExecutor() → new

**Returns**: `new`


##### syncAttributesJob(listener: SyncAttributesJobListener, updateSyncAttributesStep: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | SyncAttributesJobListener | - | - |
| updateSyncAttributesStep | Step | - | - |

**Returns**: `Job`


##### JobBuilder(unknown: "syncAttributesJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "syncAttributesJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### RunIdIncrementer() → new

**Returns**: `new`


##### updateSyncAttributesStep(tasklet: UpdateSyncAttributesTasklet) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tasklet | UpdateSyncAttributesTasklet | - | - |

**Returns**: `Step`


##### StepBuilder(unknown: "updateSyncAttributesStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "updateSyncAttributesStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`




## Functions

### SyncAttributesBatchConfiguration(jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `public`



### syncAttributesJobLauncher() → JobLauncher

**Returns**: `JobLauncher`



### TaskExecutorJobLauncher() → new

**Returns**: `new`



### ThreadPoolTaskExecutor() → new

**Returns**: `new`



### syncAttributesJob(listener: SyncAttributesJobListener, updateSyncAttributesStep: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | SyncAttributesJobListener | - | - |
| updateSyncAttributesStep | Step | - | - |

**Returns**: `Job`



### JobBuilder(unknown: "syncAttributesJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "syncAttributesJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### RunIdIncrementer() → new

**Returns**: `new`



### updateSyncAttributesStep(tasklet: UpdateSyncAttributesTasklet) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tasklet | UpdateSyncAttributesTasklet | - | - |

**Returns**: `Step`



### StepBuilder(unknown: "updateSyncAttributesStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "updateSyncAttributesStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


