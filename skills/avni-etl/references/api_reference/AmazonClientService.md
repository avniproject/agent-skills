# API Reference: AmazonClientService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/config/AmazonClientService.java`

---

## Classes

### AmazonClientService

**Inherits from**: (none)

#### Methods

##### AmazonClientService(unknown: @Value("${aws.access.key}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${aws.access.key}" | - | - |

**Returns**: `public`


##### AWSStaticCredentialsProvider(BasicAWSCredentials(accessKeyId: new, unknown: secretAccessKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| BasicAWSCredentials(accessKeyId | new | - | - |
| unknown | secretAccessKey | - | - |

**Returns**: `new`


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


##### S3FileDoesNotExist(does: "File) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| does | "File | - | - |

**Returns**: `new`


##### GeneratePresignedUrlRequest(unknown: bucketName, unknown: objectKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |

**Returns**: `new`


##### getExpireDate(expireDuration: long) → Date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expireDuration | long | - | - |

**Returns**: `Date`


##### Date() → new

**Returns**: `new`


##### listObjectsInBucket(s3PathPrefix: String) → ArrayList<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3PathPrefix | String | - | - |

**Returns**: `ArrayList<String>`


##### ListObjectsV2Request() → new

**Returns**: `new`




## Functions

### AmazonClientService(unknown: @Value("${aws.access.key}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${aws.access.key}" | - | - |

**Returns**: `public`



### AWSStaticCredentialsProvider(BasicAWSCredentials(accessKeyId: new, unknown: secretAccessKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| BasicAWSCredentials(accessKeyId | new | - | - |
| unknown | secretAccessKey | - | - |

**Returns**: `new`



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



### S3FileDoesNotExist(does: "File) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| does | "File | - | - |

**Returns**: `new`



### GeneratePresignedUrlRequest(unknown: bucketName, unknown: objectKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |

**Returns**: `new`



### getExpireDate(expireDuration: long) → Date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expireDuration | long | - | - |

**Returns**: `Date`



### Date() → new

**Returns**: `new`



### listObjectsInBucket(s3PathPrefix: String) → ArrayList<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3PathPrefix | String | - | - |

**Returns**: `ArrayList<String>`



### ListObjectsV2Request() → new

**Returns**: `new`


