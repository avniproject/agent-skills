# API Reference: VideoController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/VideoController.java`

---

## Classes

### VideoController

**Inherits from**: (none)

#### Methods

##### VideoController(videoRepository: VideoRepository, videoService: VideoService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoRepository | VideoRepository | - | - |
| videoService | VideoService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### save(VideoContract[]: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| VideoContract[] | @RequestBody | - | - |

**Returns**: `void`


##### getAll() → List<VideoContract>

**Returns**: `List<VideoContract>`


##### getById(Long: @PathVariable) → ResponseEntity<VideoContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `ResponseEntity<VideoContract>`


##### voidVideo(Long: @PathVariable) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `ResponseEntity`


##### createVideo(contract: VideoContract) → Video

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contract | VideoContract | - | - |

**Returns**: `Video`


##### VideoBuilder(unknown: existing) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | existing | - | - |

**Returns**: `new`




## Functions

### VideoController(videoRepository: VideoRepository, videoService: VideoService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| videoRepository | VideoRepository | - | - |
| videoService | VideoService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### save(VideoContract[]: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| VideoContract[] | @RequestBody | - | - |

**Returns**: `void`



### getAll() → List<VideoContract>

**Returns**: `List<VideoContract>`



### getById(Long: @PathVariable) → ResponseEntity<VideoContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `ResponseEntity<VideoContract>`



### voidVideo(Long: @PathVariable) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `ResponseEntity`



### createVideo(contract: VideoContract) → Video

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contract | VideoContract | - | - |

**Returns**: `Video`



### VideoBuilder(unknown: existing) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | existing | - | - |

**Returns**: `new`


