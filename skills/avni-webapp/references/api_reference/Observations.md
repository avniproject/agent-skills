# API Reference: Observations.jsx

**Language**: JavaScript

**Source**: `src/dataEntryApp/components/Observations.jsx`

---

## Classes

### MediaData

**Inherits from**: (none)

#### Methods

##### constructor(url, type, altTag, unsignedUrl)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | None | - | - |
| type | None | - | - |
| altTag | None | - | - |
| unsignedUrl | None | - | - |




## Functions

### includeAdditionalRows(additionalRows, fegIndex, t, renderText, renderFEGView, StyledTableRow)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| additionalRows | None | - | - |
| fegIndex | None | - | - |
| t | None | - | - |
| renderText | None | - | - |
| renderFEGView | None | - | - |
| StyledTableRow | None | - | - |

**Returns**: (none)



### renderSingleQuestionGroup(valueWrapper, index, customKey, t, observation, StyledTableRow, renderValue)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| valueWrapper | None | - | - |
| index | None | - | - |
| customKey | None | - | - |
| t | None | - | - |
| observation | None | - | - |
| StyledTableRow | None | - | - |
| renderValue | None | - | - |

**Returns**: (none)



### initMediaObservations(observations)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | None | - | - |

**Returns**: (none)



### Observations({
  observations, additionalRows, form, customKey, highlight, })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  observations | None | - | - |
| additionalRows | None | - | - |
| form | None | - | - |
| customKey | None | - | - |
| highlight | None | - | - |
| } | None | - | - |

**Returns**: (none)



### renderText(value, isAbnormal)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | None | - | - |
| isAbnormal | None | - | - |

**Returns**: (none)



### renderValue(observation)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observation | None | - | - |

**Returns**: (none)



### renderPhoneNumber(phoneNumber)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | None | - | - |

**Returns**: (none)



### renderSubject(subject, addLineBreak)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | None | - | - |
| addLineBreak | None | - | - |

**Returns**: (none)



### mediaPreviewMap(signedMediaUrl)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| signedMediaUrl | None | - | - |

**Returns**: (none)



### updateOpen(observationValue)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationValue | None | - | - |

**Returns**: (none)



### imageVideoOptions(observationValue, concept)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationValue | None | - | - |
| concept | None | - | - |

**Returns**: (none)



### fileOptions(observationValue, concept)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationValue | None | - | - |
| concept | None | - | - |

**Returns**: (none)



### renderMedia(unsignedMediaUrl, concept)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unsignedMediaUrl | None | - | - |
| concept | None | - | - |

**Returns**: (none)



### getSignedUrl(url)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | None | - | - |

**Returns**: (none)



### refreshSignedUrlsForMedia()

**Async function**

**Returns**: (none)



### showMediaOverlay(unsignedMediaUrl)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unsignedMediaUrl | None | - | - |

**Returns**: (none)



### renderGroupQuestionView(observation, index)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observation | None | - | - |
| index | None | - | - |

**Returns**: (none)



### renderFEGView(fegName, index, fegRows)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fegName | None | - | - |
| index | None | - | - |
| fegRows | None | - | - |

**Returns**: (none)



### renderNormalView(observation, index)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observation | None | - | - |
| index | None | - | - |

**Returns**: (none)



### renderObservationValue(observation, index, isNotAssociatedWithForm)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observation | None | - | - |
| index | None | - | - |
| isNotAssociatedWithForm | None | - | - |

**Returns**: (none)


