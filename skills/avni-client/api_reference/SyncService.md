# API Reference: SyncService.js

**Language**: JavaScript

**Source**: `packages/openchs-android/src/service/SyncService.js`

---

## Classes

### SyncService

**Inherits from**: BaseService

#### Methods

##### constructor(db, context)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | None | - | - |
| context | None | - | - |


##### super(db, context)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| db | None | - | - |
| context | None | - | - |


##### bind(this)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| this | None | - | - |




## Functions

### transformResourceToEntity(entityMetaData, entityResources)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityMetaData | None | - | - |
| entityResources | None | - | - |

**Returns**: (none)



### updateProgressSteps(entityMetadata, entitySyncStatus)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityMetadata | None | - | - |
| entitySyncStatus | None | - | - |

**Returns**: (none)



### onProgressPerEntity(entityType, totalNumberOfPages, currentPageNumber)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | None | - | - |
| totalNumberOfPages | None | - | - |
| currentPageNumber | None | - | - |

**Returns**: (none)



### onAfterMediaPush(entityType, numOfPages)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | None | - | - |
| numOfPages | None | - | - |

**Returns**: (none)



### syncCompleted()

**Returns**: (none)



### onCompleteOfIndividualPost(entityMetadata, entityUUID)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityMetadata | None | - | - |
| entityUUID | None | - | - |

**Returns**: (none)



### downloadChunk(chunk)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| chunk | None | - | - |

**Returns**: (none)



### onGetOfFirstPage(entityName, page)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityName | None | - | - |
| page | None | - | - |

**Returns**: (none)



### onCompleteOfIndividualPost(entityMetadata, entityUUID)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityMetadata | None | - | - |
| entityUUID | None | - | - |

**Returns**: (none)


