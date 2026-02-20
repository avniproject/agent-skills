# API Reference: AvniFiles.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/util/AvniFiles.java`

---

## Classes

### AvniFiles

**Inherits from**: (none)

#### Methods

##### guessImageType(tempSourceFile: File) → ImageType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |

**Returns**: `ImageType`


##### Tika() → new

**Returns**: `new`


##### guessImageTypeFromStream(tempSourceFile: File) → ImageType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |

**Returns**: `ImageType`


##### FileImageInputStream(unknown: tempSourceFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tempSourceFile | - | - |

**Returns**: `new`


##### getImageDimension(imgFile: File, type: ImageType) → Dimension

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| imgFile | File | - | - |
| type | ImageType | - | - |

**Returns**: `Dimension`


##### FileImageInputStream(unknown: imgFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | imgFile | - | - |

**Returns**: `new`


##### Dimension(unknown: width, unknown: height) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | width | - | - |
| unknown | height | - | - |

**Returns**: `new`


##### IOException(a: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | "Not | - | - |

**Returns**: `new`


##### validateFile(file: MultipartFile, expectedMimeTypes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| expectedMimeTypes | List<String> | - | - |

**Returns**: `void`


##### validateFileName(fileName: String, extension: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| extension | String | - | - |

**Returns**: `void`


##### validateMimeType(file: MultipartFile, expectedMimeType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| expectedMimeType | String | - | - |

**Returns**: `void`


##### validateMimeTypes(file: MultipartFile, expectedMimeTypes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| expectedMimeTypes | List<String> | - | - |

**Returns**: `void`


##### cleanCsv(unverifiedFile: File) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unverifiedFile | File | - | - |

**Returns**: `File`


##### FileReader(unknown: unverifiedFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | unverifiedFile | - | - |

**Returns**: `new`


##### CSVPrinter(FileWriter(outputCsv: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| FileWriter(outputCsv | new | - | - |

**Returns**: `new`


##### format(unknown: "\t%s", unknown: s) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "\t%s" | - | - |
| unknown | s | - | - |

**Returns**: `return`


##### isCsv(extension: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extension | String | - | - |

**Returns**: `boolean`


##### convertMultiPartToFile(file: MultipartFile, ext: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| ext | String | - | - |

**Returns**: `File`


##### isCsv(unknown: ext) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ext | - | - |

**Returns**: `return`


##### convertMultiPartToZip(file: MultipartFile) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |

**Returns**: `File`


##### convertMultiPartToFile(unknown: file, unknown: ".zip") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |
| unknown | ".zip" | - | - |

**Returns**: `return`


##### getSizeInKB(file: MultipartFile) → double

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |

**Returns**: `double`


##### extractFileToPath(file: MultipartFile, tmpPath: Path) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| tmpPath | Path | - | - |

**Returns**: `void`


##### ZipInputStream(ByteArrayInputStream(file.getBytes(: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ByteArrayInputStream(file.getBytes( | new | - | - |

**Returns**: `new`


##### zipSlipProtect(zipEntry: ZipEntry, targetDir: Path) → Path

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zipEntry | ZipEntry | - | - |
| targetDir | Path | - | - |

**Returns**: `Path`


##### IOException(zip: "Bad) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zip | "Bad | - | - |

**Returns**: `new`


##### assertTrue(value: boolean, errorMessage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | boolean | - | - |
| errorMessage | String | - | - |

**Returns**: `void`


##### BadRequestError(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`


##### detectMimeType(file: MultipartFile) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |

**Returns**: `String`


##### Metadata() → new

**Returns**: `new`


##### getFile(file: MultipartFile, tempFile: File) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| tempFile | File | - | - |

**Returns**: `File`


##### FileOutputStream(unknown: tempFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tempFile | - | - |

**Returns**: `new`


##### IOException(to: format("Unable, unknown: file.getOriginalFilename() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | format("Unable | - | - |
| unknown | file.getOriginalFilename( | - | - |

**Returns**: `new`


##### buildVideoTargetFilePath(folderName: String, mimeType: String, uuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| folderName | String | - | - |
| mimeType | String | - | - |
| uuid | String | - | - |

**Returns**: `String`


##### format(unknown: "%s/%s%s", unknown: folderName, unknown: uuid, unknown: fileExtension) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "%s/%s%s" | - | - |
| unknown | folderName | - | - |
| unknown | uuid | - | - |
| unknown | fileExtension | - | - |

**Returns**: `return`




## Functions

### guessImageType(tempSourceFile: File) → ImageType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |

**Returns**: `ImageType`



### Tika() → new

**Returns**: `new`



### guessImageTypeFromStream(tempSourceFile: File) → ImageType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tempSourceFile | File | - | - |

**Returns**: `ImageType`



### FileImageInputStream(unknown: tempSourceFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tempSourceFile | - | - |

**Returns**: `new`



### getImageDimension(imgFile: File, type: ImageType) → Dimension

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| imgFile | File | - | - |
| type | ImageType | - | - |

**Returns**: `Dimension`



### FileImageInputStream(unknown: imgFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | imgFile | - | - |

**Returns**: `new`



### Dimension(unknown: width, unknown: height) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | width | - | - |
| unknown | height | - | - |

**Returns**: `new`



### IOException(a: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | "Not | - | - |

**Returns**: `new`



### validateFile(file: MultipartFile, expectedMimeTypes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| expectedMimeTypes | List<String> | - | - |

**Returns**: `void`



### validateFileName(fileName: String, extension: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| extension | String | - | - |

**Returns**: `void`



### validateMimeType(file: MultipartFile, expectedMimeType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| expectedMimeType | String | - | - |

**Returns**: `void`



### validateMimeTypes(file: MultipartFile, expectedMimeTypes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| expectedMimeTypes | List<String> | - | - |

**Returns**: `void`



### cleanCsv(unverifiedFile: File) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unverifiedFile | File | - | - |

**Returns**: `File`



### FileReader(unknown: unverifiedFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | unverifiedFile | - | - |

**Returns**: `new`



### CSVPrinter(FileWriter(outputCsv: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| FileWriter(outputCsv | new | - | - |

**Returns**: `new`



### format(unknown: "\t%s", unknown: s) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "\t%s" | - | - |
| unknown | s | - | - |

**Returns**: `return`



### isCsv(extension: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extension | String | - | - |

**Returns**: `boolean`



### convertMultiPartToFile(file: MultipartFile, ext: String) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| ext | String | - | - |

**Returns**: `File`



### isCsv(unknown: ext) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ext | - | - |

**Returns**: `return`



### convertMultiPartToZip(file: MultipartFile) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |

**Returns**: `File`



### convertMultiPartToFile(unknown: file, unknown: ".zip") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | file | - | - |
| unknown | ".zip" | - | - |

**Returns**: `return`



### getSizeInKB(file: MultipartFile) → double

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |

**Returns**: `double`



### extractFileToPath(file: MultipartFile, tmpPath: Path) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| tmpPath | Path | - | - |

**Returns**: `void`



### ZipInputStream(ByteArrayInputStream(file.getBytes(: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ByteArrayInputStream(file.getBytes( | new | - | - |

**Returns**: `new`



### zipSlipProtect(zipEntry: ZipEntry, targetDir: Path) → Path

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zipEntry | ZipEntry | - | - |
| targetDir | Path | - | - |

**Returns**: `Path`



### IOException(zip: "Bad) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zip | "Bad | - | - |

**Returns**: `new`



### assertTrue(value: boolean, errorMessage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | boolean | - | - |
| errorMessage | String | - | - |

**Returns**: `void`



### BadRequestError(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`



### detectMimeType(file: MultipartFile) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |

**Returns**: `String`



### Metadata() → new

**Returns**: `new`



### getFile(file: MultipartFile, tempFile: File) → File

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | MultipartFile | - | - |
| tempFile | File | - | - |

**Returns**: `File`



### FileOutputStream(unknown: tempFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tempFile | - | - |

**Returns**: `new`



### IOException(to: format("Unable, unknown: file.getOriginalFilename() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | format("Unable | - | - |
| unknown | file.getOriginalFilename( | - | - |

**Returns**: `new`



### buildVideoTargetFilePath(folderName: String, mimeType: String, uuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| folderName | String | - | - |
| mimeType | String | - | - |
| uuid | String | - | - |

**Returns**: `String`



### format(unknown: "%s/%s%s", unknown: folderName, unknown: uuid, unknown: fileExtension) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "%s/%s%s" | - | - |
| unknown | folderName | - | - |
| unknown | uuid | - | - |
| unknown | fileExtension | - | - |

**Returns**: `return`


