# API Reference: ZipErrorFileWriterListener.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/zip/ZipErrorFileWriterListener.java`

---

## Classes

### ZipErrorFileWriterListener

**Inherits from**: (none)

#### Methods

##### ZipErrorFileWriterListener(bulkUploadS3Service: BulkUploadS3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkUploadS3Service | BulkUploadS3Service | - | - |

**Returns**: `public`


##### onSkipInWrite(bundleFile: BundleFile, throwable: Throwable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleFile | BundleFile | - | - |
| throwable | Throwable | - | - |

**Returns**: `void`


##### onProcessError(bundleFile: BundleFile, e: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleFile | BundleFile | - | - |
| e | Exception | - | - |

**Returns**: `void`


##### onReadError(e: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `void`


##### onWriteError(e: Exception, o: Chunk) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |
| o | Chunk | - | - |

**Returns**: `void`


##### writeError(bundleFile: BundleFile, t: Throwable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleFile | BundleFile | - | - |
| t | Throwable | - | - |

**Returns**: `void`


##### FileWriter(unknown: bulkUploadS3Service.getLocalErrorFile(uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bulkUploadS3Service.getLocalErrorFile(uuid | - | - |

**Returns**: `new`


##### RuntimeException(recording: format("Error, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| recording | format("Error | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`




## Functions

### ZipErrorFileWriterListener(bulkUploadS3Service: BulkUploadS3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkUploadS3Service | BulkUploadS3Service | - | - |

**Returns**: `public`



### onSkipInWrite(bundleFile: BundleFile, throwable: Throwable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleFile | BundleFile | - | - |
| throwable | Throwable | - | - |

**Returns**: `void`



### onProcessError(bundleFile: BundleFile, e: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleFile | BundleFile | - | - |
| e | Exception | - | - |

**Returns**: `void`



### onReadError(e: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `void`



### onWriteError(e: Exception, o: Chunk) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |
| o | Chunk | - | - |

**Returns**: `void`



### writeError(bundleFile: BundleFile, t: Throwable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleFile | BundleFile | - | - |
| t | Throwable | - | - |

**Returns**: `void`



### FileWriter(unknown: bulkUploadS3Service.getLocalErrorFile(uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bulkUploadS3Service.getLocalErrorFile(uuid | - | - |

**Returns**: `new`



### RuntimeException(recording: format("Error, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| recording | format("Error | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


