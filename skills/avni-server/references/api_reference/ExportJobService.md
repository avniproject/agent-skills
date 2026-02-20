# API Reference: ExportJobService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/ExportJobService.java`

---

## Classes

### ExportJobService

**Inherits from**: (none)

#### Methods

##### ExportJobService(exportVisitJob: Job, bgJobLauncher: JobLauncher, avniJobRepository: AvniJobRepository, exportV2Job: Job, exportJobParametersRepository: ExportJobParametersRepository, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportVisitJob | Job | - | - |
| bgJobLauncher | JobLauncher | - | - |
| avniJobRepository | AvniJobRepository | - | - |
| exportV2Job | Job | - | - |
| exportJobParametersRepository | ExportJobParametersRepository | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`


##### getAll(Pageable: @NotNull) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Pageable | @NotNull | - | - |

**Returns**: `Page<JobStatus>`


##### getExportOutput(exportJobParamsUUID: String) → ExportOutput

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportJobParamsUUID | String | - | - |

**Returns**: `ExportOutput`


##### launchJob(unknown: jobParametersBuilder.toJobParameters() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jobParametersBuilder.toJobParameters( | - | - |

**Returns**: `return`


##### launchJob(unknown: jobParameters, unknown: exportV2Job) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jobParameters | - | - |
| unknown | exportV2Job | - | - |

**Returns**: `return`


##### getCommonJobParams(userContext: UserContext) → JobParametersBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userContext | UserContext | - | - |

**Returns**: `JobParametersBuilder`


##### JobParametersBuilder() → new

**Returns**: `new`




## Functions

### ExportJobService(exportVisitJob: Job, bgJobLauncher: JobLauncher, avniJobRepository: AvniJobRepository, exportV2Job: Job, exportJobParametersRepository: ExportJobParametersRepository, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportVisitJob | Job | - | - |
| bgJobLauncher | JobLauncher | - | - |
| avniJobRepository | AvniJobRepository | - | - |
| exportV2Job | Job | - | - |
| exportJobParametersRepository | ExportJobParametersRepository | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`



### getAll(Pageable: @NotNull) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Pageable | @NotNull | - | - |

**Returns**: `Page<JobStatus>`



### getExportOutput(exportJobParamsUUID: String) → ExportOutput

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportJobParamsUUID | String | - | - |

**Returns**: `ExportOutput`



### launchJob(unknown: jobParametersBuilder.toJobParameters() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jobParametersBuilder.toJobParameters( | - | - |

**Returns**: `return`



### launchJob(unknown: jobParameters, unknown: exportV2Job) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jobParameters | - | - |
| unknown | exportV2Job | - | - |

**Returns**: `return`



### getCommonJobParams(userContext: UserContext) → JobParametersBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userContext | UserContext | - | - |

**Returns**: `JobParametersBuilder`



### JobParametersBuilder() → new

**Returns**: `new`


