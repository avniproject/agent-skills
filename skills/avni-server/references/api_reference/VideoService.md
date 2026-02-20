# API Reference: VideoService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/VideoService.java`

---

## Classes

### VideoService

**Inherits from**: NonScopeAwareService

#### Methods

##### VideoService(videoRepository: VideoRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoRepository | VideoRepository | - | - |

**Returns**: `public`


##### getAllVideos() → List<VideoContract>

**Returns**: `List<VideoContract>`


##### saveVideo(videoContract: VideoContract) → Video

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoContract | VideoContract | - | - |

**Returns**: `Video`


##### Video() → new

**Returns**: `new`


##### editVideo(videoContract: VideoContract, video: Video) → Video

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoContract | VideoContract | - | - |
| video | Video | - | - |

**Returns**: `Video`


##### populateVideo(videoContract: VideoContract, video: Video) → Video

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoContract | VideoContract | - | - |
| video | Video | - | - |

**Returns**: `Video`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`




## Functions

### VideoService(videoRepository: VideoRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoRepository | VideoRepository | - | - |

**Returns**: `public`



### getAllVideos() → List<VideoContract>

**Returns**: `List<VideoContract>`



### saveVideo(videoContract: VideoContract) → Video

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoContract | VideoContract | - | - |

**Returns**: `Video`



### Video() → new

**Returns**: `new`



### editVideo(videoContract: VideoContract, video: Video) → Video

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoContract | VideoContract | - | - |
| video | Video | - | - |

**Returns**: `Video`



### populateVideo(videoContract: VideoContract, video: Video) → Video

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoContract | VideoContract | - | - |
| video | Video | - | - |

**Returns**: `Video`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


