# API Reference: MediaService.js

**Language**: JavaScript

**Source**: `packages/openchs-android/src/service/MediaService.js`

---

## Classes

### MediaService

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




## Functions

### categorizeAndThrowAvniError(error, s3Key, type)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | None | - | - |
| s3Key | None | - | - |
| type | None | - | - |

**Returns**: (none)



### cleanUpPartialFiles(filePathInDevice)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePathInDevice | None | - | - |

**Returns**: (none)



### createNetworkAvniErrorDuringMediaDownload(error, url)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | None | - | - |
| url | None | - | - |

**Returns**: (none)



### createMediaDownloadAvniError(res, url)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| res | None | - | - |
| url | None | - | - |

**Returns**: (none)


