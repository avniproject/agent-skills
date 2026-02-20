# API Reference: MetadataDiffService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/MetadataDiffService.java`

---

## Classes

### MetadataDiffService

**Inherits from**: (none)

#### Methods

##### MetadataDiffService(bundleAndFileHandler: MetadataBundleAndFileHandler, bundleService: BundleService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleAndFileHandler | MetadataBundleAndFileHandler | - | - |
| bundleService | BundleService | - | - |

**Returns**: `public`


##### MetadataDiffChecker() → new

**Returns**: `new`


##### findChangesInBundle(candidateBundleFile: MultipartFile) → MetadataChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| candidateBundleFile | MultipartFile | - | - |

**Returns**: `MetadataChangeReport`


##### MetadataChangeReport() → new

**Returns**: `new`


##### ByteArrayInputStream(unknown: bundleOutputStream.toByteArray() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bundleOutputStream.toByteArray( | - | - |

**Returns**: `new`


##### findMissingFiles(candidateJsonFiles: Set<String>, existingJsonFiles: Set<String>) → Set<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| candidateJsonFiles | Set<String> | - | - |
| existingJsonFiles | Set<String> | - | - |

**Returns**: `Set<String>`


##### deleteDirectory(directory: File) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directory | File | - | - |

**Returns**: `void`




## Functions

### MetadataDiffService(bundleAndFileHandler: MetadataBundleAndFileHandler, bundleService: BundleService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleAndFileHandler | MetadataBundleAndFileHandler | - | - |
| bundleService | BundleService | - | - |

**Returns**: `public`



### MetadataDiffChecker() → new

**Returns**: `new`



### findChangesInBundle(candidateBundleFile: MultipartFile) → MetadataChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| candidateBundleFile | MultipartFile | - | - |

**Returns**: `MetadataChangeReport`



### MetadataChangeReport() → new

**Returns**: `new`



### ByteArrayInputStream(unknown: bundleOutputStream.toByteArray() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bundleOutputStream.toByteArray( | - | - |

**Returns**: `new`



### findMissingFiles(candidateJsonFiles: Set<String>, existingJsonFiles: Set<String>) → Set<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| candidateJsonFiles | Set<String> | - | - |
| existingJsonFiles | Set<String> | - | - |

**Returns**: `Set<String>`



### deleteDirectory(directory: File) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directory | File | - | - |

**Returns**: `void`


