# API Reference: MediaService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/MediaService.java`

---

## Classes

### MediaService

**Inherits from**: (none)

#### Methods

##### MediaService(mediaTableRepository: MediaTableRepository, addressRepository: AddressRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableRepository | MediaTableRepository | - | - |
| addressRepository | AddressRepository | - | - |

**Returns**: `public`


##### RestTemplate() → new

**Returns**: `new`


##### search(mediaSearchRequest: MediaSearchRequest, page: Page) → MediaSearchResponseDTO

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |
| page | Page | - | - |

**Returns**: `MediaSearchResponseDTO`


##### MediaSearchResponseDTO(unknown: page, unknown: mediaTableRepository.search(mediaSearchRequest, unknown: page) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | page | - | - |
| unknown | mediaTableRepository.search(mediaSearchRequest | - | - |
| unknown | page | - | - |

**Returns**: `new`


##### IllegalArgumentException(level: "Address) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| level | "Address | - | - |

**Returns**: `new`


##### createDownloadRequest(downloadAllMediaRequest: DownloadAllMediaRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| downloadAllMediaRequest | DownloadAllMediaRequest | - | - |

**Returns**: `void`


##### Page(unknown: 0, unknown: 1000) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 0 | - | - |
| unknown | 1000 | - | - |

**Returns**: `new`


##### DownloadRequest(unknown: downloadAllMediaRequest.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | downloadAllMediaRequest.getUsername( | - | - |

**Returns**: `new`


##### IllegalArgumentException(level: "Address) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| level | "Address | - | - |

**Returns**: `new`


##### determineSubjectIdColumn(tableMetadata: TableMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `String`




## Functions

### MediaService(mediaTableRepository: MediaTableRepository, addressRepository: AddressRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableRepository | MediaTableRepository | - | - |
| addressRepository | AddressRepository | - | - |

**Returns**: `public`



### RestTemplate() → new

**Returns**: `new`



### search(mediaSearchRequest: MediaSearchRequest, page: Page) → MediaSearchResponseDTO

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |
| page | Page | - | - |

**Returns**: `MediaSearchResponseDTO`



### MediaSearchResponseDTO(unknown: page, unknown: mediaTableRepository.search(mediaSearchRequest, unknown: page) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | page | - | - |
| unknown | mediaTableRepository.search(mediaSearchRequest | - | - |
| unknown | page | - | - |

**Returns**: `new`



### IllegalArgumentException(level: "Address) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| level | "Address | - | - |

**Returns**: `new`



### createDownloadRequest(downloadAllMediaRequest: DownloadAllMediaRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| downloadAllMediaRequest | DownloadAllMediaRequest | - | - |

**Returns**: `void`



### Page(unknown: 0, unknown: 1000) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 0 | - | - |
| unknown | 1000 | - | - |

**Returns**: `new`



### DownloadRequest(unknown: downloadAllMediaRequest.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | downloadAllMediaRequest.getUsername( | - | - |

**Returns**: `new`



### IllegalArgumentException(level: "Address) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| level | "Address | - | - |

**Returns**: `new`



### determineSubjectIdColumn(tableMetadata: TableMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `String`


