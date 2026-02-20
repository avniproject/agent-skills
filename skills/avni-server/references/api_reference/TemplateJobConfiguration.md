# API Reference: TemplateJobConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/template/TemplateJobConfiguration.java`

---

## Classes

### TemplateJobConfiguration

**Inherits from**: (none)

#### Methods

##### TemplateJobConfiguration(jobRepository: JobRepository, templateJobListener: TemplateJobListener, templateJobTasklet: TemplateJobTasklet, platformTransactionManager: PlatformTransactionManager, importZipJob: Job) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| templateJobListener | TemplateJobListener | - | - |
| templateJobTasklet | TemplateJobTasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |
| importZipJob | Job | - | - |

**Returns**: `public`


##### cleanUpStep() → Step

**Returns**: `Step`


##### StepBuilder(unknown: "cleanUpStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "cleanUpStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### importBundleStep() → Step

**Returns**: `Step`


##### StepBuilder(unknown: "importBundleStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importBundleStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### applyTemplateJob() → Job

**Returns**: `Job`


##### JobBuilder(unknown: "applyTemplateJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "applyTemplateJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### RunIdIncrementer() → new

**Returns**: `new`




## Functions

### TemplateJobConfiguration(jobRepository: JobRepository, templateJobListener: TemplateJobListener, templateJobTasklet: TemplateJobTasklet, platformTransactionManager: PlatformTransactionManager, importZipJob: Job) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| templateJobListener | TemplateJobListener | - | - |
| templateJobTasklet | TemplateJobTasklet | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |
| importZipJob | Job | - | - |

**Returns**: `public`



### cleanUpStep() → Step

**Returns**: `Step`



### StepBuilder(unknown: "cleanUpStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "cleanUpStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### importBundleStep() → Step

**Returns**: `Step`



### StepBuilder(unknown: "importBundleStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importBundleStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### applyTemplateJob() → Job

**Returns**: `Job`



### JobBuilder(unknown: "applyTemplateJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "applyTemplateJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### RunIdIncrementer() → new

**Returns**: `new`


