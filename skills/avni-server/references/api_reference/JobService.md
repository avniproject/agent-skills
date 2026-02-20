# API Reference: JobService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/JobService.java`

---

## Classes

### JobService

**Inherits from**: (none)

#### Methods

##### JobService(jobExplorer: JobExplorer, jobRepository: JobRepository, importJob: Job, importZipJob: Job, bgJobLauncher: JobLauncher, avniJobRepository: AvniJobRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExplorer | JobExplorer | - | - |
| jobRepository | JobRepository | - | - |
| importJob | Job | - | - |
| importZipJob | Job | - | - |
| bgJobLauncher | JobLauncher | - | - |
| avniJobRepository | AvniJobRepository | - | - |

**Returns**: `public`


##### retryJobsFailedInLast2Hours() → void

**Returns**: `void`


##### create(uuid: String, type: String, fileName: String, s3FileInfo: ObjectInfo, userId: Long, organisationUUID: String, autoApprove: boolean, locationUploadMode: String, locationHierarchy: String, encounterUploadMode: String) → JobExecution

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| type | String | - | - |
| fileName | String | - | - |
| s3FileInfo | ObjectInfo | - | - |
| userId | Long | - | - |
| organisationUUID | String | - | - |
| autoApprove | boolean | - | - |
| locationUploadMode | String | - | - |
| locationHierarchy | String | - | - |
| encounterUploadMode | String | - | - |

**Returns**: `JobExecution`


##### JobParametersBuilder() → new

**Returns**: `new`


##### getAll(Pageable: @NotNull) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Pageable | @NotNull | - | - |

**Returns**: `Page<JobStatus>`




## Functions

### JobService(jobExplorer: JobExplorer, jobRepository: JobRepository, importJob: Job, importZipJob: Job, bgJobLauncher: JobLauncher, avniJobRepository: AvniJobRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExplorer | JobExplorer | - | - |
| jobRepository | JobRepository | - | - |
| importJob | Job | - | - |
| importZipJob | Job | - | - |
| bgJobLauncher | JobLauncher | - | - |
| avniJobRepository | AvniJobRepository | - | - |

**Returns**: `public`



### retryJobsFailedInLast2Hours() → void

**Returns**: `void`



### create(uuid: String, type: String, fileName: String, s3FileInfo: ObjectInfo, userId: Long, organisationUUID: String, autoApprove: boolean, locationUploadMode: String, locationHierarchy: String, encounterUploadMode: String) → JobExecution

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| type | String | - | - |
| fileName | String | - | - |
| s3FileInfo | ObjectInfo | - | - |
| userId | Long | - | - |
| organisationUUID | String | - | - |
| autoApprove | boolean | - | - |
| locationUploadMode | String | - | - |
| locationHierarchy | String | - | - |
| encounterUploadMode | String | - | - |

**Returns**: `JobExecution`



### JobParametersBuilder() → new

**Returns**: `new`



### getAll(Pageable: @NotNull) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Pageable | @NotNull | - | - |

**Returns**: `Page<JobStatus>`


