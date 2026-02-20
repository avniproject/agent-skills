# API Reference: MediaController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/MediaController.java`

---

## Classes

### MediaController

**Inherits from**: (none)

#### Methods

##### MediaController(s3Service: S3Service, accessControlService: AccessControlService, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3Service | S3Service | - | - |
| accessControlService | AccessControlService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`


##### generateUploadUrl(String: @PathVariable) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ResponseEntity<String>`


##### getFileUrlResponse(unknown: fileName, unknown: HttpMethod.PUT) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |
| unknown | HttpMethod.PUT | - | - |

**Returns**: `return`


##### getFileUrlResponse(fileName: String, method: HttpMethod) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| method | HttpMethod | - | - |

**Returns**: `ResponseEntity<String>`


##### generateMobileDatabaseBackupUploadUrl() → ResponseEntity<String>

**Returns**: `ResponseEntity<String>`


##### getFileUrlResponse(unknown: mobileDatabaseBackupFile() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mobileDatabaseBackupFile( | - | - |

**Returns**: `return`


##### mobileDatabaseBackupFile() → String

**Returns**: `String`


##### ValidationException(unknown: "NoCatchmentFound") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "NoCatchmentFound" | - | - |

**Returns**: `new`


##### format(unknown: "MobileDbBackup-%s", unknown: catchmentUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "MobileDbBackup-%s" | - | - |
| unknown | catchmentUuid | - | - |

**Returns**: `return`


##### generateMobileDatabaseBackupDownloadUrl() → ResponseEntity<String>

**Returns**: `ResponseEntity<String>`


##### getFileUrlResponse(unknown: mobileDatabaseBackupFile() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mobileDatabaseBackupFile( | - | - |

**Returns**: `return`


##### mobileDatabaseBackupExists() → ResponseEntity<String>

**Returns**: `ResponseEntity<String>`


##### generateDownloadUrl(String: @RequestParam) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `ResponseEntity<String>`


##### generateDownloadUrls(List<String>: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<String> | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### downloadFile(String: @RequestParam, request: HttpServletRequest, response: HttpServletResponse) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |

**Returns**: `void`


##### isInvalidImageSize(file: MultipartFile) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |

**Returns**: `boolean`


##### isInvalidDimension(tempSourceFile: File, imageType: AvniFiles.ImageType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| imageType | AvniFiles.ImageType | - | - |

**Returns**: `boolean`


##### downloadFile(String: @RequestParam, String: @RequestParam) → ResponseEntity<InputStreamResource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| String | @RequestParam | - | - |

**Returns**: `ResponseEntity<InputStreamResource>`


##### InputStreamResource(unknown: s3Service.getObjectContentFromUrl(s3Url) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s3Service.getObjectContentFromUrl(s3Url | - | - |

**Returns**: `new`




## Functions

### MediaController(s3Service: S3Service, accessControlService: AccessControlService, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3Service | S3Service | - | - |
| accessControlService | AccessControlService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`



### generateUploadUrl(String: @PathVariable) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ResponseEntity<String>`



### getFileUrlResponse(unknown: fileName, unknown: HttpMethod.PUT) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |
| unknown | HttpMethod.PUT | - | - |

**Returns**: `return`



### getFileUrlResponse(fileName: String, method: HttpMethod) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| method | HttpMethod | - | - |

**Returns**: `ResponseEntity<String>`



### generateMobileDatabaseBackupUploadUrl() → ResponseEntity<String>

**Returns**: `ResponseEntity<String>`



### getFileUrlResponse(unknown: mobileDatabaseBackupFile() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mobileDatabaseBackupFile( | - | - |

**Returns**: `return`



### mobileDatabaseBackupFile() → String

**Returns**: `String`



### ValidationException(unknown: "NoCatchmentFound") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "NoCatchmentFound" | - | - |

**Returns**: `new`



### format(unknown: "MobileDbBackup-%s", unknown: catchmentUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "MobileDbBackup-%s" | - | - |
| unknown | catchmentUuid | - | - |

**Returns**: `return`



### generateMobileDatabaseBackupDownloadUrl() → ResponseEntity<String>

**Returns**: `ResponseEntity<String>`



### getFileUrlResponse(unknown: mobileDatabaseBackupFile() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mobileDatabaseBackupFile( | - | - |

**Returns**: `return`



### mobileDatabaseBackupExists() → ResponseEntity<String>

**Returns**: `ResponseEntity<String>`



### generateDownloadUrl(String: @RequestParam) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `ResponseEntity<String>`



### generateDownloadUrls(List<String>: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<String> | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### downloadFile(String: @RequestParam, request: HttpServletRequest, response: HttpServletResponse) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |

**Returns**: `void`



### isInvalidImageSize(file: MultipartFile) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |

**Returns**: `boolean`



### isInvalidDimension(tempSourceFile: File, imageType: AvniFiles.ImageType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| imageType | AvniFiles.ImageType | - | - |

**Returns**: `boolean`



### downloadFile(String: @RequestParam, String: @RequestParam) → ResponseEntity<InputStreamResource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| String | @RequestParam | - | - |

**Returns**: `ResponseEntity<InputStreamResource>`



### InputStreamResource(unknown: s3Service.getObjectContentFromUrl(s3Url) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s3Service.getObjectContentFromUrl(s3Url | - | - |

**Returns**: `new`


