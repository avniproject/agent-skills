# API Reference: MetadataBundleAndFileHandler.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/MetadataBundleAndFileHandler.java`

---

## Classes

### MetadataBundleAndFileHandler

**Inherits from**: (none)

#### Methods

##### extractZip(zipFile: MultipartFile) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zipFile | MultipartFile | - | - |

**Returns**: `File`


##### extractZip(inputStream: InputStream) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputStream | InputStream | - | - |

**Returns**: `File`


##### ZipInputStream(unknown: inputStream) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | inputStream | - | - |

**Returns**: `new`


##### File(unknown: tempDir, unknown: entry.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tempDir | - | - |
| unknown | entry.getName( | - | - |

**Returns**: `new`


##### FileOutputStream(unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |

**Returns**: `new`


##### listJsonFiles(directory: File) → List<File>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directory | File | - | - |

**Returns**: `List<File>`


##### BufferedReader(FileReader(file: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| FileReader(file | new | - | - |

**Returns**: `new`


##### StringBuilder() → new

**Returns**: `new`


##### getRelativePath(file: File, rootDir: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | File | - | - |
| rootDir | File | - | - |

**Returns**: `String`




## Functions

### extractZip(zipFile: MultipartFile) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zipFile | MultipartFile | - | - |

**Returns**: `File`



### extractZip(inputStream: InputStream) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputStream | InputStream | - | - |

**Returns**: `File`



### ZipInputStream(unknown: inputStream) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | inputStream | - | - |

**Returns**: `new`



### File(unknown: tempDir, unknown: entry.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tempDir | - | - |
| unknown | entry.getName( | - | - |

**Returns**: `new`



### FileOutputStream(unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |

**Returns**: `new`



### listJsonFiles(directory: File) → List<File>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directory | File | - | - |

**Returns**: `List<File>`



### BufferedReader(FileReader(file: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| FileReader(file | new | - | - |

**Returns**: `new`



### StringBuilder() → new

**Returns**: `new`



### getRelativePath(file: File, rootDir: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | File | - | - |
| rootDir | File | - | - |

**Returns**: `String`


