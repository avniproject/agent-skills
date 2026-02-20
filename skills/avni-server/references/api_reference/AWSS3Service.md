# API Reference: AWSS3Service.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/AWSS3Service.java`

---

## Classes

### AWSS3Service

**Inherits from**: StorageService

#### Methods

##### AWSS3Service(unknown: @Value("${avni.bucketName}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${avni.bucketName}" | - | - |

**Returns**: `public`


##### AWSStaticCredentialsProvider(BasicAWSCredentials(accessKeyId: new, unknown: secretAccessKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| BasicAWSCredentials(accessKeyId | new | - | - |
| unknown | secretAccessKey | - | - |

**Returns**: `new`


##### getObjectContentFromUrl(s3url: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3url | String | - | - |

**Returns**: `InputStream`


##### AmazonS3URI(unknown: s3url) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s3url | - | - |

**Returns**: `new`


##### getObjectContent(unknown: objectKey) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | objectKey | - | - |

**Returns**: `return`


##### generateMediaDownloadUrl(url: String) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |

**Returns**: `URL`


##### AmazonS3URI(unknown: url) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |

**Returns**: `new`


##### AccessDeniedException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`


##### GeneratePresignedUrlRequest(unknown: bucketName, unknown: objectKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |

**Returns**: `new`




## Functions

### AWSS3Service(unknown: @Value("${avni.bucketName}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${avni.bucketName}" | - | - |

**Returns**: `public`



### AWSStaticCredentialsProvider(BasicAWSCredentials(accessKeyId: new, unknown: secretAccessKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| BasicAWSCredentials(accessKeyId | new | - | - |
| unknown | secretAccessKey | - | - |

**Returns**: `new`



### getObjectContentFromUrl(s3url: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3url | String | - | - |

**Returns**: `InputStream`



### AmazonS3URI(unknown: s3url) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s3url | - | - |

**Returns**: `new`



### getObjectContent(unknown: objectKey) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | objectKey | - | - |

**Returns**: `return`



### generateMediaDownloadUrl(url: String) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |

**Returns**: `URL`



### AmazonS3URI(unknown: url) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |

**Returns**: `new`



### AccessDeniedException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`



### GeneratePresignedUrlRequest(unknown: bucketName, unknown: objectKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |

**Returns**: `new`


