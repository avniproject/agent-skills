# API Reference: PruneMedia.js

**Language**: JavaScript

**Source**: `packages/openchs-android/src/task/PruneMedia.js`

---

## Classes

### PruneMedia

**Inherits from**: BaseTask

#### Methods

##### execute()


##### initDependencies()


##### getInstance()


##### pruneObservationMedia(globalContext.db, FileSystem.getImagesDir()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| globalContext.db | None | - | - |
| FileSystem.getImagesDir( | None | - | - |


##### pruneObservationMedia(globalContext.db, FileSystem.getVideosDir()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| globalContext.db | None | - | - |
| FileSystem.getVideosDir( | None | - | - |


##### pruneConceptMedia(globalContext.db, FileSystem.getMetadataDir()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| globalContext.db | None | - | - |
| FileSystem.getMetadataDir( | None | - | - |


##### all([pruneImageDir, pruneVideoDir, pruneMetadataDir])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| [pruneImageDir | None | - | - |
| pruneVideoDir | None | - | - |
| pruneMetadataDir] | None | - | - |


##### catch((e)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| (e | None | - | - |


##### postScheduledJobError(e)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | None | - | - |




## Functions

### pruneObservationMedia(db, directory)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | None | - | - |
| directory | None | - | - |

**Returns**: (none)



### pruneConceptMedia(db, directory)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | None | - | - |
| directory | None | - | - |

**Returns**: (none)



### pruneMedia(db, directory, orphanDetector)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | None | - | - |
| directory | None | - | - |
| orphanDetector | None | - | - |

**Returns**: (none)



### imageObservationDoesNotExist(db)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | None | - | - |

**Returns**: (none)



### conceptMediaDoesNotExist(db)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | None | - | - |

**Returns**: (none)



### deleteFile(file)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | None | - | - |

**Returns**: (none)


