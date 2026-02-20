# API Reference: BulkUploadS3Service.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/BulkUploadS3Service.java`

---

## Classes

### BulkUploadS3Service

**Inherits from**: (none)

#### Methods

##### BulkUploadS3Service(unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`


##### uploadFile(source: MultipartFile, uuid: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| uuid | String | - | - |

**Returns**: `ObjectInfo`


##### uploadZip(source: MultipartFile, uuid: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| uuid | String | - | - |

**Returns**: `ObjectInfo`


##### uploadErrorFile(tempSourceFile: File, uuid: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| uuid | String | - | - |

**Returns**: `ObjectInfo`


##### uploadFile(localFile: File, filename: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| localFile | File | - | - |
| filename | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`


##### getLocalErrorFile(uuid: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `File`


##### File(unknown: format("%s/bulkuploads/error", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/bulkuploads/error" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`


##### File(unknown: errorDir, unknown: format("%s.csv", unknown: uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorDir | - | - |
| unknown | format("%s.csv" | - | - |
| unknown | uuid | - | - |

**Returns**: `new`


##### downloadErrorFile(jobUuid: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobUuid | String | - | - |

**Returns**: `InputStream`


##### downloadInputFile(filePath: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | String | - | - |

**Returns**: `InputStream`




## Functions

### BulkUploadS3Service(unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`



### uploadFile(source: MultipartFile, uuid: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| uuid | String | - | - |

**Returns**: `ObjectInfo`



### uploadZip(source: MultipartFile, uuid: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| uuid | String | - | - |

**Returns**: `ObjectInfo`



### uploadErrorFile(tempSourceFile: File, uuid: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| uuid | String | - | - |

**Returns**: `ObjectInfo`



### uploadFile(localFile: File, filename: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| localFile | File | - | - |
| filename | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`



### getLocalErrorFile(uuid: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `File`



### File(unknown: format("%s/bulkuploads/error", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/bulkuploads/error" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`



### File(unknown: errorDir, unknown: format("%s.csv", unknown: uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorDir | - | - |
| unknown | format("%s.csv" | - | - |
| unknown | uuid | - | - |

**Returns**: `new`



### downloadErrorFile(jobUuid: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobUuid | String | - | - |

**Returns**: `InputStream`



### downloadInputFile(filePath: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | String | - | - |

**Returns**: `InputStream`


