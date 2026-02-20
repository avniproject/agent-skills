# API Reference: StorageService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/StorageService.java`

---

## Classes

### StorageService

**Inherits from**: S3Service

#### Methods

##### StorageService(bucketName: String, s3InDev: boolean, logger: Logger, isDev: Boolean) → protected

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bucketName | String | - | - |
| s3InDev | boolean | - | - |
| logger | Logger | - | - |
| isDev | Boolean | - | - |

**Returns**: `protected`


##### IllegalStateException(missing.: "Configuration) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| missing. | "Configuration | - | - |

**Returns**: `new`


##### getContentType(fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `String`


##### generateMediaUploadUrl(fileName: String, method: HttpMethod) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| method | HttpMethod | - | - |

**Returns**: `URL`


##### getGeneratePresignedUrlRequest(fileName: String, method: HttpMethod) → GeneratePresignedUrlRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| method | HttpMethod | - | - |

**Returns**: `GeneratePresignedUrlRequest`


##### GeneratePresignedUrlRequest(unknown: bucketName, unknown: objectKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |

**Returns**: `new`


##### getS3KeyForMediaUpload(fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `String`


##### getS3KeyForMediaUpload(unknown: null, unknown: fileName) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | fileName | - | - |

**Returns**: `return`


##### getS3KeyForMediaUpload(parentFolder: String, fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| fileName | String | - | - |

**Returns**: `String`


##### format(unknown: "%s/%s", unknown: mediaDirectory, unknown: fileName) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "%s/%s" | - | - |
| unknown | mediaDirectory | - | - |
| unknown | fileName | - | - |

**Returns**: `return`


##### format(unknown: "%s/%s/%s", unknown: mediaDirectory, unknown: parentFolder, unknown: fileName) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "%s/%s/%s" | - | - |
| unknown | mediaDirectory | - | - |
| unknown | parentFolder | - | - |
| unknown | fileName | - | - |

**Returns**: `return`


##### fileExists(fileName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `boolean`


##### uploadFile(tempSourceFile: File, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`


##### ObjectInfo(unknown: actualS3Key, unknown: noOfLines) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | actualS3Key | - | - |
| unknown | noOfLines | - | - |

**Returns**: `new`


##### getS3Key(destFileName: String, directory: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `String`


##### format(unknown: "%s/%s/%s", unknown: directory, unknown: getOrgDirectoryName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "%s/%s/%s" | - | - |
| unknown | directory | - | - |
| unknown | getOrgDirectoryName( | - | - |

**Returns**: `return`


##### uploadFile(source: MultipartFile, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`


##### uploadFile(unknown: AvniFiles.convertMultiPartToFile(source, unknown: ".csv") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | AvniFiles.convertMultiPartToFile(source | - | - |
| unknown | ".csv" | - | - |

**Returns**: `return`


##### uploadZipFile(source: MultipartFile, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`


##### uploadZip(unknown: AvniFiles.convertMultiPartToZip(source) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | AvniFiles.convertMultiPartToZip(source | - | - |

**Returns**: `return`


##### uploadImageFile(tempSourceFile: File, targetFilePath: String) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| targetFilePath | String | - | - |

**Returns**: `URL`


##### listExtensionFiles(modifiedSince: Optional<DateTime>) → List<S3ExtensionFile>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modifiedSince | Optional<DateTime> | - | - |

**Returns**: `List<S3ExtensionFile>`


##### DateTime(unknown: 0) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 0 | - | - |

**Returns**: `new`


##### ListObjectsRequest() → new

**Returns**: `new`


##### S3ExtensionFile(unknown: S3File.organisationFileFromFullPath(UserContextHolder.getOrganisation() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | S3File.organisationFileFromFullPath(UserContextHolder.getOrganisation( | - | - |

**Returns**: `new`


##### DateTime(unknown: s.getLastModified() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s.getLastModified( | - | - |

**Returns**: `new`


##### uploadExtensionFiles(tempDirectory: File, targetFilePath: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempDirectory | File | - | - |
| targetFilePath | String | - | - |

**Returns**: `void`


##### getObjectContent(s3Key: String) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3Key | String | - | - |

**Returns**: `InputStream`


##### FileInputStream(unknown: s3Key) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s3Key | - | - |

**Returns**: `new`


##### ByteArrayInputStream(byte[]{}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| byte[]{} | new | - | - |

**Returns**: `new`


##### getExtensionContent(fileName: String, organisation: Organisation) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| organisation | Organisation | - | - |

**Returns**: `InputStream`


##### getObjectContent(unknown: objectKey) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | objectKey | - | - |

**Returns**: `return`


##### getURLForExtensions(fileName: String, organisation: Organisation) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| organisation | Organisation | - | - |

**Returns**: `URL`


##### GeneratePresignedUrlRequest(unknown: bucketName, unknown: objectKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |

**Returns**: `new`


##### downloadFile(s3File: S3File) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3File | S3File | - | - |

**Returns**: `File`


##### File(unknown: format("%s/%s", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/%s" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`


##### getFileStream(s3File: S3File) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3File | S3File | - | - |

**Returns**: `InputStream`


##### FileInputStream(unknown: localFilePath) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | localFilePath | - | - |

**Returns**: `new`


##### ByteArrayInputStream(byte[]{}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| byte[]{} | new | - | - |

**Returns**: `new`


##### uploadFileToS3(file: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | File | - | - |

**Returns**: `String`


##### uploadFileToS3(unknown: null, unknown: file) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | file | - | - |

**Returns**: `return`


##### uploadFileToS3(parentFolder: String, file: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| file | File | - | - |

**Returns**: `String`


##### PutObjectRequest(unknown: bucketName, unknown: s3Key, unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | s3Key | - | - |
| unknown | file | - | - |

**Returns**: `new`


##### getObjectURL(unknown: parentFolder, unknown: file) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | parentFolder | - | - |
| unknown | file | - | - |

**Returns**: `return`


##### deleteObject(objectName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| objectName | String | - | - |

**Returns**: `void`


##### DeleteObjectRequest(unknown: bucketName, unknown: s3Key) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | s3Key | - | - |

**Returns**: `new`


##### deleteKeys(keysList: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keysList | String[] | - | - |

**Returns**: `void`


##### DeleteObjectsRequest(unknown: bucketName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |

**Returns**: `new`


##### deleteDirectory(prefix: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | String | - | - |

**Returns**: `void`


##### deleteOrgMedia(deleteMetadata: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |

**Returns**: `void`


##### uploadZip(tempSourceFile: File, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`


##### ObjectInfo(unknown: actualS3Key, unknown: 0L) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | actualS3Key | - | - |
| unknown | 0L | - | - |

**Returns**: `new`


##### getExpireDate(expireDuration: long) → Date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expireDuration | long | - | - |

**Returns**: `Date`


##### Date() → new

**Returns**: `new`


##### authorizeUser() → UserContext

**Returns**: `UserContext`


##### AccessDeniedException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`


##### getOrgDirectoryName() → String

**Returns**: `String`


##### IllegalStateException(missing.: "Information) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| missing. | "Information | - | - |

**Returns**: `new`


##### putObject(objectKey: String, tempFile: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| objectKey | String | - | - |
| tempFile | File | - | - |

**Returns**: `String`


##### ObjectMetadata() → new

**Returns**: `new`


##### PutObjectRequest(unknown: bucketName, unknown: objectKey, unknown: tempFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |
| unknown | tempFile | - | - |

**Returns**: `new`


##### uploadByteArray(fileName: String, extension: String, objectPath: String, content: byte[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| extension | String | - | - |
| objectPath | String | - | - |
| content | byte[] | - | - |

**Returns**: `String`


##### uploadByteArrayUsingObjectKey(unknown: fileName, unknown: extension, unknown: content, unknown: objectKey) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |
| unknown | extension | - | - |
| unknown | content | - | - |
| unknown | objectKey | - | - |

**Returns**: `return`


##### uploadByteArrayUsingObjectKey(fileName: String, extension: String, content: byte[], objectKey: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| extension | String | - | - |
| content | byte[] | - | - |
| objectKey | String | - | - |

**Returns**: `String`


##### FileOutputStream(unknown: tempFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tempFile | - | - |

**Returns**: `new`


##### uploadInOrganisation(filePath: String, content: byte[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | String | - | - |
| content | byte[] | - | - |

**Returns**: `String`


##### uploadByteArrayUsingObjectKey(unknown: filePath, unknown: "", unknown: content, unknown: objectKey) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | filePath | - | - |
| unknown | "" | - | - |
| unknown | content | - | - |
| unknown | objectKey | - | - |

**Returns**: `return`


##### getObjectURL(parentFolder: String, file: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| file | File | - | - |

**Returns**: `String`


##### getObservationValueForUpload(mediaURL: String, oldValue: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaURL | String | - | - |
| oldValue | Object | - | - |

**Returns**: `String`


##### processMediaObservation(mediaURL: String, oldValue: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaURL | String | - | - |
| oldValue | Object | - | - |

**Returns**: `String`


##### uploadProfilePic(profilePicURL: String, oldValue: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| profilePicURL | String | - | - |
| oldValue | Object | - | - |

**Returns**: `String`


##### uploadMediaFileInDir(parentFolder: String, mediaUrl: String, oldValue: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| mediaUrl | String | - | - |
| oldValue | Object | - | - |

**Returns**: `String`


##### extractFileExtension(mediaURL: String, fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaURL | String | - | - |
| fileName | String | - | - |

**Returns**: `String`


##### RuntimeException(file: format("No, unknown: mediaURL) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | format("No | - | - |
| unknown | mediaURL | - | - |

**Returns**: `new`


##### downloadExternalFile(mediaURL: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaURL | String | - | - |

**Returns**: `File`


##### URL(unknown: mediaURL) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaURL | - | - |

**Returns**: `new`


##### File(unknown: format("%s/imports/%s", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/imports/%s" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`


##### RuntimeException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`


##### isInternalUrl(url: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |

**Returns**: `boolean`




## Functions

### StorageService(bucketName: String, s3InDev: boolean, logger: Logger, isDev: Boolean) → protected

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bucketName | String | - | - |
| s3InDev | boolean | - | - |
| logger | Logger | - | - |
| isDev | Boolean | - | - |

**Returns**: `protected`



### IllegalStateException(missing.: "Configuration) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| missing. | "Configuration | - | - |

**Returns**: `new`



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



### GeneratePresignedUrlRequest(unknown: bucketName, unknown: objectKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |

**Returns**: `new`



### getS3KeyForMediaUpload(fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `String`



### getS3KeyForMediaUpload(unknown: null, unknown: fileName) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | fileName | - | - |

**Returns**: `return`



### getS3KeyForMediaUpload(parentFolder: String, fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| fileName | String | - | - |

**Returns**: `String`



### format(unknown: "%s/%s", unknown: mediaDirectory, unknown: fileName) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "%s/%s" | - | - |
| unknown | mediaDirectory | - | - |
| unknown | fileName | - | - |

**Returns**: `return`



### format(unknown: "%s/%s/%s", unknown: mediaDirectory, unknown: parentFolder, unknown: fileName) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "%s/%s/%s" | - | - |
| unknown | mediaDirectory | - | - |
| unknown | parentFolder | - | - |
| unknown | fileName | - | - |

**Returns**: `return`



### fileExists(fileName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `boolean`



### uploadFile(tempSourceFile: File, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`



### ObjectInfo(unknown: actualS3Key, unknown: noOfLines) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | actualS3Key | - | - |
| unknown | noOfLines | - | - |

**Returns**: `new`



### getS3Key(destFileName: String, directory: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `String`



### format(unknown: "%s/%s/%s", unknown: directory, unknown: getOrgDirectoryName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "%s/%s/%s" | - | - |
| unknown | directory | - | - |
| unknown | getOrgDirectoryName( | - | - |

**Returns**: `return`



### uploadFile(source: MultipartFile, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`



### uploadFile(unknown: AvniFiles.convertMultiPartToFile(source, unknown: ".csv") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | AvniFiles.convertMultiPartToFile(source | - | - |
| unknown | ".csv" | - | - |

**Returns**: `return`



### uploadZipFile(source: MultipartFile, destFileName: String, directory: String) → ObjectInfo

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | MultipartFile | - | - |
| destFileName | String | - | - |
| directory | String | - | - |

**Returns**: `ObjectInfo`



### uploadZip(unknown: AvniFiles.convertMultiPartToZip(source) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | AvniFiles.convertMultiPartToZip(source | - | - |

**Returns**: `return`



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



### DateTime(unknown: 0) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 0 | - | - |

**Returns**: `new`



### ListObjectsRequest() → new

**Returns**: `new`



### S3ExtensionFile(unknown: S3File.organisationFileFromFullPath(UserContextHolder.getOrganisation() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | S3File.organisationFileFromFullPath(UserContextHolder.getOrganisation( | - | - |

**Returns**: `new`



### DateTime(unknown: s.getLastModified() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s.getLastModified( | - | - |

**Returns**: `new`



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



### FileInputStream(unknown: s3Key) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s3Key | - | - |

**Returns**: `new`



### ByteArrayInputStream(byte[]{}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| byte[]{} | new | - | - |

**Returns**: `new`



### getExtensionContent(fileName: String, organisation: Organisation) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| organisation | Organisation | - | - |

**Returns**: `InputStream`



### getObjectContent(unknown: objectKey) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | objectKey | - | - |

**Returns**: `return`



### getURLForExtensions(fileName: String, organisation: Organisation) → URL

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| organisation | Organisation | - | - |

**Returns**: `URL`



### GeneratePresignedUrlRequest(unknown: bucketName, unknown: objectKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |

**Returns**: `new`



### downloadFile(s3File: S3File) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3File | S3File | - | - |

**Returns**: `File`



### File(unknown: format("%s/%s", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/%s" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`



### getFileStream(s3File: S3File) → InputStream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s3File | S3File | - | - |

**Returns**: `InputStream`



### FileInputStream(unknown: localFilePath) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | localFilePath | - | - |

**Returns**: `new`



### ByteArrayInputStream(byte[]{}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| byte[]{} | new | - | - |

**Returns**: `new`



### uploadFileToS3(file: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | File | - | - |

**Returns**: `String`



### uploadFileToS3(unknown: null, unknown: file) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | file | - | - |

**Returns**: `return`



### uploadFileToS3(parentFolder: String, file: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFolder | String | - | - |
| file | File | - | - |

**Returns**: `String`



### PutObjectRequest(unknown: bucketName, unknown: s3Key, unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | s3Key | - | - |
| unknown | file | - | - |

**Returns**: `new`



### getObjectURL(unknown: parentFolder, unknown: file) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | parentFolder | - | - |
| unknown | file | - | - |

**Returns**: `return`



### deleteObject(objectName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| objectName | String | - | - |

**Returns**: `void`



### DeleteObjectRequest(unknown: bucketName, unknown: s3Key) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | s3Key | - | - |

**Returns**: `new`



### deleteKeys(keysList: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keysList | String[] | - | - |

**Returns**: `void`



### DeleteObjectsRequest(unknown: bucketName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |

**Returns**: `new`



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



### ObjectInfo(unknown: actualS3Key, unknown: 0L) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | actualS3Key | - | - |
| unknown | 0L | - | - |

**Returns**: `new`



### getExpireDate(expireDuration: long) → Date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expireDuration | long | - | - |

**Returns**: `Date`



### Date() → new

**Returns**: `new`



### authorizeUser() → UserContext

**Returns**: `UserContext`



### AccessDeniedException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`



### getOrgDirectoryName() → String

**Returns**: `String`



### IllegalStateException(missing.: "Information) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| missing. | "Information | - | - |

**Returns**: `new`



### putObject(objectKey: String, tempFile: File) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| objectKey | String | - | - |
| tempFile | File | - | - |

**Returns**: `String`



### ObjectMetadata() → new

**Returns**: `new`



### PutObjectRequest(unknown: bucketName, unknown: objectKey, unknown: tempFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bucketName | - | - |
| unknown | objectKey | - | - |
| unknown | tempFile | - | - |

**Returns**: `new`



### uploadByteArray(fileName: String, extension: String, objectPath: String, content: byte[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| extension | String | - | - |
| objectPath | String | - | - |
| content | byte[] | - | - |

**Returns**: `String`



### uploadByteArrayUsingObjectKey(unknown: fileName, unknown: extension, unknown: content, unknown: objectKey) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |
| unknown | extension | - | - |
| unknown | content | - | - |
| unknown | objectKey | - | - |

**Returns**: `return`



### uploadByteArrayUsingObjectKey(fileName: String, extension: String, content: byte[], objectKey: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| extension | String | - | - |
| content | byte[] | - | - |
| objectKey | String | - | - |

**Returns**: `String`



### FileOutputStream(unknown: tempFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tempFile | - | - |

**Returns**: `new`



### uploadInOrganisation(filePath: String, content: byte[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filePath | String | - | - |
| content | byte[] | - | - |

**Returns**: `String`



### uploadByteArrayUsingObjectKey(unknown: filePath, unknown: "", unknown: content, unknown: objectKey) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | filePath | - | - |
| unknown | "" | - | - |
| unknown | content | - | - |
| unknown | objectKey | - | - |

**Returns**: `return`



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



### RuntimeException(file: format("No, unknown: mediaURL) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | format("No | - | - |
| unknown | mediaURL | - | - |

**Returns**: `new`



### downloadExternalFile(mediaURL: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaURL | String | - | - |

**Returns**: `File`



### URL(unknown: mediaURL) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaURL | - | - |

**Returns**: `new`



### File(unknown: format("%s/imports/%s", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/imports/%s" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`



### RuntimeException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`



### isInternalUrl(url: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |

**Returns**: `boolean`


