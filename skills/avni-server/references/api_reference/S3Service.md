# API Reference: S3Service.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/S3Service.java`

---

## Functions

### getContentType(fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `String`



### generateMediaUploadUrl(fileName: String, method: HttpMethod) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| method | HttpMethod | - | - |

**Returns**: `URL`



### getGeneratePresignedUrlRequest(fileName: String, method: HttpMethod) → GeneratePresignedUrlRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| method | HttpMethod | - | - |

**Returns**: `GeneratePresignedUrlRequest`



### getS3KeyForMediaUpload(fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `String`



### getS3KeyForMediaUpload(parentFolder: String, fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| fileName | String | - | - |

**Returns**: `String`



### fileExists(fileName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `boolean`



### generateMediaDownloadUrl(url: String) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |

**Returns**: `URL`



### uploadFile(tempSourceFile: File, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`



### getS3Key(destFileName: String, directory: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `String`



### uploadFile(source: MultipartFile, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`



### uploadZipFile(source: MultipartFile, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`



### uploadImageFile(tempSourceFile: File, targetFilePath: String) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| targetFilePath | String | - | - |

**Returns**: `URL`



### listExtensionFiles(modifiedSince: Optional<DateTime>) → List<S3ExtensionFile>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modifiedSince | Optional<DateTime> | - | - |

**Returns**: `List<S3ExtensionFile>`



### uploadExtensionFiles(tempDirectory: File, targetFilePath: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempDirectory | File | - | - |
| targetFilePath | String | - | - |

**Returns**: `void`



### getObjectContent(s3Key: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3Key | String | - | - |

**Returns**: `InputStream`



### getExtensionContent(fileName: String, organisation: Organisation) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| organisation | Organisation | - | - |

**Returns**: `InputStream`



### getURLForExtensions(fileName: String, organisation: Organisation) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| organisation | Organisation | - | - |

**Returns**: `URL`



### getFileStream(s3File: S3File) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3File | S3File | - | - |

**Returns**: `InputStream`



### downloadFile(s3File: S3File) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3File | S3File | - | - |

**Returns**: `File`



### uploadFileToS3(file: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | File | - | - |

**Returns**: `String`



### uploadFileToS3(parentFolder: String, file: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| file | File | - | - |

**Returns**: `String`



### deleteObject(objectName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| objectName | String | - | - |

**Returns**: `void`



### deleteKeys(keysList: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keysList | String[] | - | - |

**Returns**: `void`



### deleteDirectory(prefix: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | String | - | - |

**Returns**: `void`



### deleteOrgMedia(deleteMetadata: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |

**Returns**: `void`



### uploadZip(tempSourceFile: File, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`



### getExpireDate(expireDuration: long) → Date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expireDuration | long | - | - |

**Returns**: `Date`



### authorizeUser() → UserContext

**Returns**: `UserContext`



### getOrgDirectoryName() → String

**Returns**: `String`



### putObject(objectKey: String, tempFile: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| objectKey | String | - | - |
| tempFile | File | - | - |

**Returns**: `String`



### uploadByteArray(fileName: String, extension: String, objectPath: String, content: byte[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| extension | String | - | - |
| objectPath | String | - | - |
| content | byte[] | - | - |

**Returns**: `String`



### uploadInOrganisation(filePath: String, content: byte[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | String | - | - |
| content | byte[] | - | - |

**Returns**: `String`



### getObjectURL(parentFolder: String, file: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| file | File | - | - |

**Returns**: `String`



### getObservationValueForUpload(mediaURL: String, oldValue: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaURL | String | - | - |
| oldValue | Object | - | - |

**Returns**: `String`



### processMediaObservation(mediaURL: String, oldValue: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaURL | String | - | - |
| oldValue | Object | - | - |

**Returns**: `String`



### uploadProfilePic(profilePicURL: String, oldValue: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| profilePicURL | String | - | - |
| oldValue | Object | - | - |

**Returns**: `String`



### uploadMediaFileInDir(parentFolder: String, mediaUrl: String, oldValue: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| mediaUrl | String | - | - |
| oldValue | Object | - | - |

**Returns**: `String`



### extractFileExtension(mediaURL: String, fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaURL | String | - | - |
| fileName | String | - | - |

**Returns**: `String`



### downloadExternalFile(mediaURL: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaURL | String | - | - |

**Returns**: `File`



### getObjectContentFromUrl(s3Url: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3Url | String | - | - |

**Returns**: `InputStream`



### isInternalUrl(url: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |

**Returns**: `boolean`


