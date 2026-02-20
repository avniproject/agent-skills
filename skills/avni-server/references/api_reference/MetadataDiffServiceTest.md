# API Reference: MetadataDiffServiceTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/MetadataDiffServiceTest.java`

---

## Classes

### MetadataDiffServiceTest

**Inherits from**: (none)

#### Methods

##### setUp() → void

**Returns**: `void`


##### MetadataBundleAndFileHandler() → new

**Returns**: `new`


##### MetadataDiffService(unknown: bundleAndFileHandler, unknown: bundleService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bundleAndFileHandler | - | - |
| unknown | bundleService | - | - |

**Returns**: `new`


##### UserContextBuilder() → new

**Returns**: `new`


##### Organisation() → new

**Returns**: `new`


##### shouldFindDiff() → void

**Returns**: `void`


##### sameFileShouldNtHaveChanges() → void

**Returns**: `void`


##### hasNoChangesInSameFile(fileName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `boolean`


##### compareJsons(candidateJson: String, json2: String) → MetadataChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| candidateJson | String | - | - |
| json2 | String | - | - |

**Returns**: `MetadataChangeReport`


##### currentJson(jsonContent: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonContent | String | - | - |

**Returns**: `void`


##### createMultipartFile(jsonContent: String) → MultipartFile

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonContent | String | - | - |

**Returns**: `MultipartFile`


##### MockMultipartFile(unknown: "file", unknown: "test.zip", unknown: "application/zip", unknown: byteArrayOutputStream.toByteArray() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "file" | - | - |
| unknown | "test.zip" | - | - |
| unknown | "application/zip" | - | - |
| unknown | byteArrayOutputStream.toByteArray( | - | - |

**Returns**: `new`


##### createBundleOutputStream(fileName: String, jsonContent: String) → ByteArrayOutputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| jsonContent | String | - | - |

**Returns**: `ByteArrayOutputStream`


##### ByteArrayOutputStream() → new

**Returns**: `new`


##### ZipOutputStream(unknown: byteArrayOutputStream) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | byteArrayOutputStream | - | - |

**Returns**: `new`


##### ZipEntry(unknown: fileName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |

**Returns**: `new`


##### testFindMissingFiles() → void

**Returns**: `void`




## Functions

### setUp() → void

**Returns**: `void`



### MetadataBundleAndFileHandler() → new

**Returns**: `new`



### MetadataDiffService(unknown: bundleAndFileHandler, unknown: bundleService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bundleAndFileHandler | - | - |
| unknown | bundleService | - | - |

**Returns**: `new`



### UserContextBuilder() → new

**Returns**: `new`



### Organisation() → new

**Returns**: `new`



### shouldFindDiff() → void

**Returns**: `void`



### sameFileShouldNtHaveChanges() → void

**Returns**: `void`



### hasNoChangesInSameFile(fileName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `boolean`



### compareJsons(candidateJson: String, json2: String) → MetadataChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| candidateJson | String | - | - |
| json2 | String | - | - |

**Returns**: `MetadataChangeReport`



### currentJson(jsonContent: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonContent | String | - | - |

**Returns**: `void`



### createMultipartFile(jsonContent: String) → MultipartFile

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonContent | String | - | - |

**Returns**: `MultipartFile`



### MockMultipartFile(unknown: "file", unknown: "test.zip", unknown: "application/zip", unknown: byteArrayOutputStream.toByteArray() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "file" | - | - |
| unknown | "test.zip" | - | - |
| unknown | "application/zip" | - | - |
| unknown | byteArrayOutputStream.toByteArray( | - | - |

**Returns**: `new`



### createBundleOutputStream(fileName: String, jsonContent: String) → ByteArrayOutputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| jsonContent | String | - | - |

**Returns**: `ByteArrayOutputStream`



### ByteArrayOutputStream() → new

**Returns**: `new`



### ZipOutputStream(unknown: byteArrayOutputStream) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | byteArrayOutputStream | - | - |

**Returns**: `new`



### ZipEntry(unknown: fileName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |

**Returns**: `new`



### testFindMissingFiles() → void

**Returns**: `void`


