# API Reference: TemplateOrganisationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/TemplateOrganisationService.java`

---

## Classes

### TemplateOrganisationService

**Inherits from**: (none)

#### Methods

##### TemplateOrganisationService(templateOrganisationRepository: TemplateOrganisationRepository, organisationRepository: OrganisationRepository, bundleService: BundleService, bulkUploadS3Service: BulkUploadS3Service, applyTemplateJob: Job, bgJobLauncher: JobLauncher, batchJobService: BatchJobService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateOrganisationRepository | TemplateOrganisationRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| bundleService | BundleService | - | - |
| bulkUploadS3Service | BulkUploadS3Service | - | - |
| applyTemplateJob | Job | - | - |
| bgJobLauncher | JobLauncher | - | - |
| batchJobService | BatchJobService | - | - |

**Returns**: `public`


##### save(request: TemplateOrganisationContract) → TemplateOrganisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TemplateOrganisationContract | - | - |

**Returns**: `TemplateOrganisation`


##### TemplateOrganisation() → new

**Returns**: `new`


##### update(id: Long, request: TemplateOrganisationContract) → TemplateOrganisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| request | TemplateOrganisationContract | - | - |

**Returns**: `TemplateOrganisation`


##### IllegalArgumentException(not: String.format("TemplateOrganisation, unknown: id) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("TemplateOrganisation | - | - |
| unknown | id | - | - |

**Returns**: `new`


##### setFields(unknown: templateOrganisation.orElse(null) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | templateOrganisation.orElse(null | - | - |

**Returns**: `return`


##### setFields(templateOrganisation: TemplateOrganisation, request: TemplateOrganisationContract) → TemplateOrganisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateOrganisation | TemplateOrganisation | - | - |
| request | TemplateOrganisationContract | - | - |

**Returns**: `TemplateOrganisation`


##### IllegalArgumentException(not: String.format("Organisation, unknown: request.getOrganisationId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Organisation | - | - |
| unknown | request.getOrganisationId( | - | - |

**Returns**: `new`


##### applyTemplate(templateOrganisation: TemplateOrganisation) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateOrganisation | TemplateOrganisation | - | - |

**Returns**: `String`


##### MockMultipartFile(unknown: fileName, unknown: fileName, unknown: "application/zip", unknown: bundle.toByteArray() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |
| unknown | fileName | - | - |
| unknown | "application/zip" | - | - |
| unknown | bundle.toByteArray( | - | - |

**Returns**: `new`


##### getJobParameters(organisation: Organisation, user: User, storedFileInfo: ObjectInfo, uuid: String) → JobParameters

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |
| storedFileInfo | ObjectInfo | - | - |
| uuid | String | - | - |

**Returns**: `JobParameters`


##### JobParametersBuilder() → new

**Returns**: `new`


##### getApplyTemplateJobStatus(organisation: Organisation) → Map<String, BatchJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Map<String, BatchJobStatus>`




## Functions

### TemplateOrganisationService(templateOrganisationRepository: TemplateOrganisationRepository, organisationRepository: OrganisationRepository, bundleService: BundleService, bulkUploadS3Service: BulkUploadS3Service, applyTemplateJob: Job, bgJobLauncher: JobLauncher, batchJobService: BatchJobService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateOrganisationRepository | TemplateOrganisationRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| bundleService | BundleService | - | - |
| bulkUploadS3Service | BulkUploadS3Service | - | - |
| applyTemplateJob | Job | - | - |
| bgJobLauncher | JobLauncher | - | - |
| batchJobService | BatchJobService | - | - |

**Returns**: `public`



### save(request: TemplateOrganisationContract) → TemplateOrganisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TemplateOrganisationContract | - | - |

**Returns**: `TemplateOrganisation`



### TemplateOrganisation() → new

**Returns**: `new`



### update(id: Long, request: TemplateOrganisationContract) → TemplateOrganisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| request | TemplateOrganisationContract | - | - |

**Returns**: `TemplateOrganisation`



### IllegalArgumentException(not: String.format("TemplateOrganisation, unknown: id) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("TemplateOrganisation | - | - |
| unknown | id | - | - |

**Returns**: `new`



### setFields(unknown: templateOrganisation.orElse(null) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | templateOrganisation.orElse(null | - | - |

**Returns**: `return`



### setFields(templateOrganisation: TemplateOrganisation, request: TemplateOrganisationContract) → TemplateOrganisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateOrganisation | TemplateOrganisation | - | - |
| request | TemplateOrganisationContract | - | - |

**Returns**: `TemplateOrganisation`



### IllegalArgumentException(not: String.format("Organisation, unknown: request.getOrganisationId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Organisation | - | - |
| unknown | request.getOrganisationId( | - | - |

**Returns**: `new`



### applyTemplate(templateOrganisation: TemplateOrganisation) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| templateOrganisation | TemplateOrganisation | - | - |

**Returns**: `String`



### MockMultipartFile(unknown: fileName, unknown: fileName, unknown: "application/zip", unknown: bundle.toByteArray() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |
| unknown | fileName | - | - |
| unknown | "application/zip" | - | - |
| unknown | bundle.toByteArray( | - | - |

**Returns**: `new`



### getJobParameters(organisation: Organisation, user: User, storedFileInfo: ObjectInfo, uuid: String) → JobParameters

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |
| storedFileInfo | ObjectInfo | - | - |
| uuid | String | - | - |

**Returns**: `JobParameters`



### JobParametersBuilder() → new

**Returns**: `new`



### getApplyTemplateJobStatus(organisation: Organisation) → Map<String, BatchJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Map<String, BatchJobStatus>`


