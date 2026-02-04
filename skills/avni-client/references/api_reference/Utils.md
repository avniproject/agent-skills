# API Reference: Utils.java

**Language**: Java

**Source**: `packages/openchs-android/patches/Utils.java`

---

## Classes

### Utils

**Inherits from**: (none)

#### Methods

##### createFile(reactContext: Context, fileType: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reactContext | Context | - | - |
| fileType | String | - | - |

**Returns**: `File`


##### File(unknown: fileDir, unknown: filename) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileDir | - | - |
| unknown | filename | - | - |

**Returns**: `new`


##### createUri(file: File, reactContext: Context) → Uri

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | File | - | - |
| reactContext | Context | - | - |

**Returns**: `Uri`


##### saveToPublicDirectory(uri: Uri, context: Context, mediaType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |
| mediaType | String | - | - |

**Returns**: `void`


##### ContentValues() → new

**Returns**: `new`


##### copyUri(fromUri: Uri, toUri: Uri, resolver: ContentResolver) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fromUri | Uri | - | - |
| toUri | Uri | - | - |
| resolver | ContentResolver | - | - |

**Returns**: `void`


##### getAppSpecificStorageUri(sharedStorageUri: Uri, context: Context) → Uri

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sharedStorageUri | Uri | - | - |
| context | Context | - | - |

**Returns**: `Uri`


##### isCameraAvailable(reactContext: Context) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reactContext | Context | - | - |

**Returns**: `boolean`


##### setFrontCamera(intent: Intent) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| intent | Intent | - | - |

**Returns**: `void`


##### hasPermission(activity: Activity) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| activity | Activity | - | - |

**Returns**: `boolean`


##### getBase64String(uri: Uri, reactContext: Context) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| reactContext | Context | - | - |

**Returns**: `String`


##### ByteArrayOutputStream() → new

**Returns**: `new`


##### resizeImage(uri: Uri, context: Context, options: Options) → Uri

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |
| options | Options | - | - |

**Returns**: `Uri`


##### getOrientation(uri: Uri, context: Context) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `String`


##### ExifInterface(unknown: context.getContentResolver() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | context.getContentResolver( | - | - |

**Returns**: `new`


##### setOrientation(file: File, orientation: String, context: Context) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | File | - | - |
| orientation | String | - | - |
| context | Context | - | - |

**Returns**: `void`


##### ExifInterface(unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |

**Returns**: `new`


##### getFileSize(uri: Uri, context: Context) → double

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `double`


##### shouldResizeImage(origWidth: int, origHeight: int, options: Options) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| origWidth | int | - | - |
| origHeight | int | - | - |
| options | Options | - | - |

**Returns**: `boolean`


##### getBitmapCompressFormat(mimeType: String) → CompressFormat

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mimeType | String | - | - |

**Returns**: `CompressFormat`


##### getFileTypeFromMime(mimeType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mimeType | String | - | - |

**Returns**: `String`


##### deleteFile(uri: Uri) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |

**Returns**: `void`


##### File(unknown: uri.getPath() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uri.getPath( | - | - |

**Returns**: `new`


##### getMimeTypeFromFileUri(uri: Uri) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |

**Returns**: `String`


##### isValidRequestCode(requestCode: int) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestCode | int | - | - |

**Returns**: `boolean`


##### isCameraPermissionFulfilled(context: Context, activity: Activity) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | Context | - | - |
| activity | Activity | - | - |

**Returns**: `boolean`


##### isImageType(uri: Uri, context: Context) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `boolean`


##### isVideoType(uri: Uri, context: Context) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `boolean`


##### isContentType(contentMimeType: String, uri: Uri, context: Context) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contentMimeType | String | - | - |
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `boolean`


##### getMimeType(uri: Uri, context: Context) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `String`


##### getMimeTypeFromFileUri(unknown: uri) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uri | - | - |

**Returns**: `return`


##### collectUrisFromData(data: Intent) → List<Uri>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Intent | - | - |

**Returns**: `List<Uri>`


##### getImageResponseMap(uri: Uri, options: Options, context: Context) → ReadableMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| options | Options | - | - |
| context | Context | - | - |

**Returns**: `ReadableMap`


##### ImageMetadata(unknown: uri, unknown: context) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uri | - | - |
| unknown | context | - | - |

**Returns**: `new`


##### getVideoResponseMap(uri: Uri, options: Options, context: Context) → ReadableMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| options | Options | - | - |
| context | Context | - | - |

**Returns**: `ReadableMap`


##### VideoMetadata(unknown: uri, unknown: context) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uri | - | - |
| unknown | context | - | - |

**Returns**: `new`


##### getResponseMap(fileUris: List<Uri>, options: Options, context: Context) → ReadableMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileUris | List<Uri> | - | - |
| options | Options | - | - |
| context | Context | - | - |

**Returns**: `ReadableMap`


##### RuntimeException(file: "Unsupported) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | "Unsupported | - | - |

**Returns**: `new`


##### getErrorMap(errCode: String, errMsg: String) → ReadableMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errCode | String | - | - |
| errMsg | String | - | - |

**Returns**: `ReadableMap`


##### getCancelMap() → ReadableMap

**Returns**: `ReadableMap`




## Functions

### createFile(reactContext: Context, fileType: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reactContext | Context | - | - |
| fileType | String | - | - |

**Returns**: `File`



### File(unknown: fileDir, unknown: filename) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileDir | - | - |
| unknown | filename | - | - |

**Returns**: `new`



### createUri(file: File, reactContext: Context) → Uri

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | File | - | - |
| reactContext | Context | - | - |

**Returns**: `Uri`



### saveToPublicDirectory(uri: Uri, context: Context, mediaType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |
| mediaType | String | - | - |

**Returns**: `void`



### ContentValues() → new

**Returns**: `new`



### copyUri(fromUri: Uri, toUri: Uri, resolver: ContentResolver) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fromUri | Uri | - | - |
| toUri | Uri | - | - |
| resolver | ContentResolver | - | - |

**Returns**: `void`



### getAppSpecificStorageUri(sharedStorageUri: Uri, context: Context) → Uri

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sharedStorageUri | Uri | - | - |
| context | Context | - | - |

**Returns**: `Uri`



### isCameraAvailable(reactContext: Context) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reactContext | Context | - | - |

**Returns**: `boolean`



### setFrontCamera(intent: Intent) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| intent | Intent | - | - |

**Returns**: `void`



### hasPermission(activity: Activity) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| activity | Activity | - | - |

**Returns**: `boolean`



### getBase64String(uri: Uri, reactContext: Context) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| reactContext | Context | - | - |

**Returns**: `String`



### ByteArrayOutputStream() → new

**Returns**: `new`



### resizeImage(uri: Uri, context: Context, options: Options) → Uri

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |
| options | Options | - | - |

**Returns**: `Uri`



### getOrientation(uri: Uri, context: Context) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `String`



### ExifInterface(unknown: context.getContentResolver() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | context.getContentResolver( | - | - |

**Returns**: `new`



### setOrientation(file: File, orientation: String, context: Context) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | File | - | - |
| orientation | String | - | - |
| context | Context | - | - |

**Returns**: `void`



### ExifInterface(unknown: file) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |

**Returns**: `new`



### getFileSize(uri: Uri, context: Context) → double

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `double`



### shouldResizeImage(origWidth: int, origHeight: int, options: Options) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| origWidth | int | - | - |
| origHeight | int | - | - |
| options | Options | - | - |

**Returns**: `boolean`



### getBitmapCompressFormat(mimeType: String) → CompressFormat

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mimeType | String | - | - |

**Returns**: `CompressFormat`



### getFileTypeFromMime(mimeType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mimeType | String | - | - |

**Returns**: `String`



### deleteFile(uri: Uri) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |

**Returns**: `void`



### File(unknown: uri.getPath() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uri.getPath( | - | - |

**Returns**: `new`



### getMimeTypeFromFileUri(uri: Uri) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |

**Returns**: `String`



### isValidRequestCode(requestCode: int) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestCode | int | - | - |

**Returns**: `boolean`



### isCameraPermissionFulfilled(context: Context, activity: Activity) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | Context | - | - |
| activity | Activity | - | - |

**Returns**: `boolean`



### isImageType(uri: Uri, context: Context) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `boolean`



### isVideoType(uri: Uri, context: Context) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `boolean`



### isContentType(contentMimeType: String, uri: Uri, context: Context) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contentMimeType | String | - | - |
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `boolean`



### getMimeType(uri: Uri, context: Context) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| context | Context | - | - |

**Returns**: `String`



### getMimeTypeFromFileUri(unknown: uri) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uri | - | - |

**Returns**: `return`



### collectUrisFromData(data: Intent) → List<Uri>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | Intent | - | - |

**Returns**: `List<Uri>`



### getImageResponseMap(uri: Uri, options: Options, context: Context) → ReadableMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| options | Options | - | - |
| context | Context | - | - |

**Returns**: `ReadableMap`



### ImageMetadata(unknown: uri, unknown: context) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uri | - | - |
| unknown | context | - | - |

**Returns**: `new`



### getVideoResponseMap(uri: Uri, options: Options, context: Context) → ReadableMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | Uri | - | - |
| options | Options | - | - |
| context | Context | - | - |

**Returns**: `ReadableMap`



### VideoMetadata(unknown: uri, unknown: context) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uri | - | - |
| unknown | context | - | - |

**Returns**: `new`



### getResponseMap(fileUris: List<Uri>, options: Options, context: Context) → ReadableMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileUris | List<Uri> | - | - |
| options | Options | - | - |
| context | Context | - | - |

**Returns**: `ReadableMap`



### RuntimeException(file: "Unsupported) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | "Unsupported | - | - |

**Returns**: `new`



### getErrorMap(errCode: String, errMsg: String) → ReadableMap

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errCode | String | - | - |
| errMsg | String | - | - |

**Returns**: `ReadableMap`



### getCancelMap() → ReadableMap

**Returns**: `ReadableMap`


