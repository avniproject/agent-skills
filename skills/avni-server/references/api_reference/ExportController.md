# API Reference: ExportController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ExportController.java`

---

## Classes

### ExportController

**Inherits from**: (none)

#### Methods

##### ExportController(exportJobService: ExportJobService, exportS3Service: ExportS3Service, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportJobService | ExportJobService | - | - |
| exportS3Service | ExportS3Service | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### getExportOutput(exportJobRequest: ExportV2JobRequest) → ExportOutput

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportJobRequest | ExportV2JobRequest | - | - |

**Returns**: `ExportOutput`


##### getUploadStatus(pageable: Pageable) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<JobStatus>`


##### ByteArrayResource(unknown: bytes) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bytes | - | - |

**Returns**: `new`


##### getHttpHeaders(filename: String) → HttpHeaders

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filename | String | - | - |

**Returns**: `HttpHeaders`


##### HttpHeaders() → new

**Returns**: `new`


##### validateEntity(entity: CHSBaseEntity, entityType: String, entityUUID: String, errorList: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | CHSBaseEntity | - | - |
| entityType | String | - | - |
| entityUUID | String | - | - |
| errorList | List<String> | - | - |

**Returns**: `void`




## Functions

### ExportController(exportJobService: ExportJobService, exportS3Service: ExportS3Service, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportJobService | ExportJobService | - | - |
| exportS3Service | ExportS3Service | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getExportOutput(exportJobRequest: ExportV2JobRequest) → ExportOutput

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportJobRequest | ExportV2JobRequest | - | - |

**Returns**: `ExportOutput`



### getUploadStatus(pageable: Pageable) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<JobStatus>`



### ByteArrayResource(unknown: bytes) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bytes | - | - |

**Returns**: `new`



### getHttpHeaders(filename: String) → HttpHeaders

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filename | String | - | - |

**Returns**: `HttpHeaders`



### HttpHeaders() → new

**Returns**: `new`



### validateEntity(entity: CHSBaseEntity, entityType: String, entityUUID: String, errorList: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | CHSBaseEntity | - | - |
| entityType | String | - | - |
| entityUUID | String | - | - |
| errorList | List<String> | - | - |

**Returns**: `void`


