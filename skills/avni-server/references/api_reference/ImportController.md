# API Reference: ImportController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ImportController.java`

---

## Classes

### ImportController

**Inherits from**: (none)

#### Methods

##### ImportController(jobService: JobService, bulkUploadS3Service: BulkUploadS3Service, importService: ImportService, s3Service: S3Service, individualService: IndividualService, locationService: LocationService, formElementRepository: FormElementRepository, accessControlService: AccessControlService, errorBodyBuilder: ErrorBodyBuilder, locationHierarchyService: LocationHierarchyService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobService | JobService | - | - |
| bulkUploadS3Service | BulkUploadS3Service | - | - |
| importService | ImportService | - | - |
| s3Service | S3Service | - | - |
| individualService | IndividualService | - | - |
| locationService | LocationService | - | - |
| formElementRepository | FormElementRepository | - | - |
| accessControlService | AccessControlService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |
| locationHierarchyService | LocationHierarchyService | - | - |

**Returns**: `public`


##### getSampleImportFile(String: @RequestParam, =: @RequestParam(value, =: required) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `void`


##### checkSampleImportFileIsDownloadable(String: @RequestParam, =: @RequestParam(value, =: required) → ResponseEntity<ImportSampleCheckResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity<ImportSampleCheckResponse>`


##### ImportSampleCheckResponse(unknown: true, import: "Sample) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| import | "Sample | - | - |

**Returns**: `new`


##### ImportSampleCheckResponse(unknown: false, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### getImportTypes() → ResponseEntity

**Returns**: `ResponseEntity`


##### getUploadStats(pageable: Pageable) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<JobStatus>`


##### getDocument(String: @RequestParam) → ResponseEntity<InputStreamResource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `ResponseEntity<InputStreamResource>`


##### InputStreamResource(unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |

**Returns**: `new`


##### getInputDocument(String: @RequestParam) → ResponseEntity<InputStreamResource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `ResponseEntity<InputStreamResource>`


##### InputStreamResource(unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |

**Returns**: `new`


##### uploadMedia(unknown: @RequestParam("url") → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @RequestParam("url" | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### String(unknown: Base64.getDecoder() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Base64.getDecoder( | - | - |

**Returns**: `new`


##### getSubjectOrLocationObsValue(unknown: @RequestParam("type") → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @RequestParam("type" | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### getAllAddressLevelTypeHierarchies() → Map<String, String>

**Returns**: `Map<String, String>`


##### allSubjectsLocationHierarchies() → Map<String, Object>

**Returns**: `Map<String, Object>`




## Functions

### ImportController(jobService: JobService, bulkUploadS3Service: BulkUploadS3Service, importService: ImportService, s3Service: S3Service, individualService: IndividualService, locationService: LocationService, formElementRepository: FormElementRepository, accessControlService: AccessControlService, errorBodyBuilder: ErrorBodyBuilder, locationHierarchyService: LocationHierarchyService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobService | JobService | - | - |
| bulkUploadS3Service | BulkUploadS3Service | - | - |
| importService | ImportService | - | - |
| s3Service | S3Service | - | - |
| individualService | IndividualService | - | - |
| locationService | LocationService | - | - |
| formElementRepository | FormElementRepository | - | - |
| accessControlService | AccessControlService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |
| locationHierarchyService | LocationHierarchyService | - | - |

**Returns**: `public`



### getSampleImportFile(String: @RequestParam, =: @RequestParam(value, =: required) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `void`



### checkSampleImportFileIsDownloadable(String: @RequestParam, =: @RequestParam(value, =: required) → ResponseEntity<ImportSampleCheckResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity<ImportSampleCheckResponse>`



### ImportSampleCheckResponse(unknown: true, import: "Sample) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| import | "Sample | - | - |

**Returns**: `new`



### ImportSampleCheckResponse(unknown: false, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### getImportTypes() → ResponseEntity

**Returns**: `ResponseEntity`



### getUploadStats(pageable: Pageable) → Page<JobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<JobStatus>`



### getDocument(String: @RequestParam) → ResponseEntity<InputStreamResource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `ResponseEntity<InputStreamResource>`



### InputStreamResource(unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |

**Returns**: `new`



### getInputDocument(String: @RequestParam) → ResponseEntity<InputStreamResource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `ResponseEntity<InputStreamResource>`



### InputStreamResource(unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |

**Returns**: `new`



### uploadMedia(unknown: @RequestParam("url") → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @RequestParam("url" | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### String(unknown: Base64.getDecoder() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Base64.getDecoder( | - | - |

**Returns**: `new`



### getSubjectOrLocationObsValue(unknown: @RequestParam("type") → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @RequestParam("type" | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### getAllAddressLevelTypeHierarchies() → Map<String, String>

**Returns**: `Map<String, String>`



### allSubjectsLocationHierarchies() → Map<String, Object>

**Returns**: `Map<String, Object>`


