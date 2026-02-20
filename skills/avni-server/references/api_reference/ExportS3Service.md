# API Reference: ExportS3Service.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ExportS3Service.java`

---

## Classes

### ExportS3Service

**Inherits from**: (none)

#### Methods

##### ExportS3Service(unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`


##### getLocalExportFile(uuid: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `File`


##### File(unknown: format("%s/exports/", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/exports/" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`


##### File(unknown: exportDir, unknown: format("%s%s", unknown: uuid, unknown: FILE_NAME_EXTENSION) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exportDir | - | - |
| unknown | format("%s%s" | - | - |
| unknown | uuid | - | - |
| unknown | FILE_NAME_EXTENSION | - | - |

**Returns**: `new`


##### uploadFile(tempSourceFile: File, uuid: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| uuid | String | - | - |

**Returns**: `ObjectInfo`


##### downloadFile(fileName: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `InputStream`




## Functions

### ExportS3Service(unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`



### getLocalExportFile(uuid: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `File`



### File(unknown: format("%s/exports/", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/exports/" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`



### File(unknown: exportDir, unknown: format("%s%s", unknown: uuid, unknown: FILE_NAME_EXTENSION) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exportDir | - | - |
| unknown | format("%s%s" | - | - |
| unknown | uuid | - | - |
| unknown | FILE_NAME_EXTENSION | - | - |

**Returns**: `new`



### uploadFile(tempSourceFile: File, uuid: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| uuid | String | - | - |

**Returns**: `ObjectInfo`



### downloadFile(fileName: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `InputStream`


