# API Reference: MediaUploader.jsx

**Language**: JavaScript

**Source**: `src/dataEntryApp/components/MediaUploader.jsx`

---

## Functions

### addObsResultsToPreview(observationValue, setPreview)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationValue | None | - | - |
| setPreview | None | - | - |

**Returns**: (none)



### removeFileFromPreview(fileName, preview, setPreview)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | None | - | - |
| preview | None | - | - |
| setPreview | None | - | - |

**Returns**: (none)



### invokeUpdate(update, mediaUrl)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| update | None | - | - |
| mediaUrl | None | - | - |

**Returns**: (none)



### addMediaUrlToLocalObsValue(update, fileName, isMultiSelect, localObsValue, setLocalObsValue)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| update | None | - | - |
| fileName | None | - | - |
| isMultiSelect | None | - | - |
| localObsValue | None | - | - |
| setLocalObsValue | None | - | - |

**Returns**: (none)



### removeMediaUrlFromLocalObsValue(update, fileName, isMultiSelect, localObsValue, setLocalObsValue)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| update | None | - | - |
| fileName | None | - | - |
| isMultiSelect | None | - | - |
| localObsValue | None | - | - |
| setLocalObsValue | None | - | - |

**Returns**: (none)



### consolidateAlerts(etFiles, formElement, isFileDataType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| etFiles | None | - | - |
| formElement | None | - | - |
| isFileDataType | None | - | - |

**Returns**: (none)



### uploadMediaAndUpdateObservationValue(etFiles, setUploadButtonClicked, setLocalObsValue, isMultiSelect, localObsValue, update, onDelete)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| etFiles | None | - | - |
| setUploadButtonClicked | None | - | - |
| setLocalObsValue | None | - | - |
| isMultiSelect | None | - | - |
| localObsValue | None | - | - |
| update | None | - | - |
| onDelete | None | - | - |

**Returns**: (none)



### getFileMimeType(formElement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |

**Returns**: (none)



### isBiggerFile(formElement, size)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| size | None | - | - |

**Returns**: (none)



### isValidFile(allowedTypes, type)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowedTypes | None | - | - |
| type | None | - | - |

**Returns**: (none)



### isValidType(formElement, type, isFile)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| type | None | - | - |
| isFile | None | - | - |

**Returns**: (none)



### MediaUploader({
  label, obsValue, mediaType, update, formElement, })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  label | None | - | - |
| obsValue | None | - | - |
| mediaType | None | - | - |
| update | None | - | - |
| formElement | None | - | - |
| } | None | - | - |

**Returns**: (none)



### onMediaSelect(event)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| event | None | - | - |

**Returns**: (none)



### onDelete(fileName)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | None | - | - |

**Returns**: (none)



### mediaPreviewMap(fileToPreview, label, previewValue)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileToPreview | None | - | - |
| label | None | - | - |
| previewValue | None | - | - |

**Returns**: (none)



### renderMedia(fileName)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | None | - | - |

**Returns**: (none)



### previewImage()

**Returns**: (none)


