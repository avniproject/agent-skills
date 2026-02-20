# API Reference: BulkSubjectMigrationBatchConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/sync/attributes/bulkmigration/BulkSubjectMigrationBatchConfiguration.java`

---

## Classes

### BulkSubjectMigrationBatchConfiguration

**Inherits from**: (none)

#### Methods

##### BulkSubjectMigrationBatchConfiguration(jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `public`


##### bulkSubjectMigrationJobLauncher() → JobLauncher

**Returns**: `JobLauncher`


##### TaskExecutorJobLauncher() → new

**Returns**: `new`


##### ThreadPoolTaskExecutor() → new

**Returns**: `new`


##### bulkSubjectMigrationJob(bulkSubjectMigrationJobListener: BulkSubjectMigrationJobListener, bulkSubjectMigrationStep: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkSubjectMigrationJobListener | BulkSubjectMigrationJobListener | - | - |
| bulkSubjectMigrationStep | Step | - | - |

**Returns**: `Job`


##### JobBuilder(unknown: "bulkSubjectMigrationJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "bulkSubjectMigrationJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### RunIdIncrementer() → new

**Returns**: `new`


##### bulkSubjectMigrationStep(bulkSubjectMigrationTasklet: BulkSubjectMigrationTasklet) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkSubjectMigrationTasklet | BulkSubjectMigrationTasklet | - | - |

**Returns**: `Step`


##### StepBuilder(unknown: "bulkSubjectMigrationStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "bulkSubjectMigrationStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`




## Functions

### BulkSubjectMigrationBatchConfiguration(jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `public`



### bulkSubjectMigrationJobLauncher() → JobLauncher

**Returns**: `JobLauncher`



### TaskExecutorJobLauncher() → new

**Returns**: `new`



### ThreadPoolTaskExecutor() → new

**Returns**: `new`



### bulkSubjectMigrationJob(bulkSubjectMigrationJobListener: BulkSubjectMigrationJobListener, bulkSubjectMigrationStep: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkSubjectMigrationJobListener | BulkSubjectMigrationJobListener | - | - |
| bulkSubjectMigrationStep | Step | - | - |

**Returns**: `Job`



### JobBuilder(unknown: "bulkSubjectMigrationJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "bulkSubjectMigrationJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### RunIdIncrementer() → new

**Returns**: `new`



### bulkSubjectMigrationStep(bulkSubjectMigrationTasklet: BulkSubjectMigrationTasklet) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkSubjectMigrationTasklet | BulkSubjectMigrationTasklet | - | - |

**Returns**: `Step`



### StepBuilder(unknown: "bulkSubjectMigrationStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "bulkSubjectMigrationStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


