# API Reference: AWSMinioService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/AWSMinioService.java`

---

## Classes

### AWSMinioService

**Inherits from**: StorageService

#### Methods

##### AWSMinioService(unknown: @Value("${avni.bucketName}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${avni.bucketName}" | - | - |

**Returns**: `public`


##### ClientConfiguration() → new

**Returns**: `new`


##### AWSStaticCredentialsProvider(BasicAWSCredentials(minioAccessKey: new, unknown: minioSecretAccessKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| BasicAWSCredentials(minioAccessKey | new | - | - |
| unknown | minioSecretAccessKey | - | - |

**Returns**: `new`


##### getObjectContentFromUrl(s3url: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3url | String | - | - |

**Returns**: `InputStream`


##### MinioUri(unknown: s3url) → new

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


##### MinioUri(unknown: url) → new

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

### AWSMinioService(unknown: @Value("${avni.bucketName}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${avni.bucketName}" | - | - |

**Returns**: `public`



### ClientConfiguration() → new

**Returns**: `new`



### AWSStaticCredentialsProvider(BasicAWSCredentials(minioAccessKey: new, unknown: minioSecretAccessKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| BasicAWSCredentials(minioAccessKey | new | - | - |
| unknown | minioSecretAccessKey | - | - |

**Returns**: `new`



### getObjectContentFromUrl(s3url: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3url | String | - | - |

**Returns**: `InputStream`



### MinioUri(unknown: s3url) → new

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



### MinioUri(unknown: url) → new

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


