# API Reference: AvniFilesTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/util/AvniFilesTest.java`

---

## Classes

### AvniFilesTest

**Inherits from**: (none)

#### Methods

##### validateMimeTypeShouldDetectFilesCorrectly() → void

**Returns**: `void`


##### validateMimeTypeShouldUnderstandZipFiles() → void

**Returns**: `void`


##### validateMimeTypeShouldFailWhenMimeTypesDontMatchFileName() → void

**Returns**: `void`


##### validateMimeTypeDoesNotFailWhenTextFilesMasqueradeAsCsv() → void

**Returns**: `void`


##### vdalidateMimeTypeDoesNotFailForDoubleExtensions() → void

**Returns**: `void`


##### validateMimeTypeShouldFailWhenIncorrectExtensionProvided() → void

**Returns**: `void`


##### validateMimeTypeShouldFailForNonZipFilesProvided() → void

**Returns**: `void`


##### validateMimeTypesShouldFailForNonZipFilesProvided() → void

**Returns**: `void`


##### validateFileNameShouldWorkForGoodFiles() → void

**Returns**: `void`


##### validateFileNameShouldFailForDoubleDotFiles() → void

**Returns**: `void`


##### validateFileNameShouldFailForIncorrectExtension() → void

**Returns**: `void`


##### readFile(fileName: String, expectedMimeType: String) → MultipartFile

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| expectedMimeType | String | - | - |

**Returns**: `MultipartFile`


##### MockMultipartFile(unknown: fileName, +: "/home/users/someName", unknown: expectedMimeType, unknown: getClass() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |
| + | "/home/users/someName" | - | - |
| unknown | expectedMimeType | - | - |
| unknown | getClass( | - | - |

**Returns**: `new`




## Functions

### validateMimeTypeShouldDetectFilesCorrectly() → void

**Returns**: `void`



### validateMimeTypeShouldUnderstandZipFiles() → void

**Returns**: `void`



### validateMimeTypeShouldFailWhenMimeTypesDontMatchFileName() → void

**Returns**: `void`



### validateMimeTypeDoesNotFailWhenTextFilesMasqueradeAsCsv() → void

**Returns**: `void`



### vdalidateMimeTypeDoesNotFailForDoubleExtensions() → void

**Returns**: `void`



### validateMimeTypeShouldFailWhenIncorrectExtensionProvided() → void

**Returns**: `void`



### validateMimeTypeShouldFailForNonZipFilesProvided() → void

**Returns**: `void`



### validateMimeTypesShouldFailForNonZipFilesProvided() → void

**Returns**: `void`



### validateFileNameShouldWorkForGoodFiles() → void

**Returns**: `void`



### validateFileNameShouldFailForDoubleDotFiles() → void

**Returns**: `void`



### validateFileNameShouldFailForIncorrectExtension() → void

**Returns**: `void`



### readFile(fileName: String, expectedMimeType: String) → MultipartFile

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| expectedMimeType | String | - | - |

**Returns**: `MultipartFile`



### MockMultipartFile(unknown: fileName, +: "/home/users/someName", unknown: expectedMimeType, unknown: getClass() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |
| + | "/home/users/someName" | - | - |
| unknown | expectedMimeType | - | - |
| unknown | getClass( | - | - |

**Returns**: `new`


