# API Reference: TxnDataHeaderValidator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/TxnDataHeaderValidator.java`

---

## Classes

### TxnDataHeaderValidator

**Inherits from**: (none)

#### Methods

##### validateHeaders(headers: String[], formMapping: FormMapping, headerCreator: HeaderCreator, mode: Object, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| formMapping | FormMapping | - | - |
| headerCreator | HeaderCreator | - | - |
| mode | Object | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`


##### ValidationException(unknown: createMultiErrorMessage(allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | createMultiErrorMessage(allErrorMsgs | - | - |

**Returns**: `new`


##### validateHeaders(headers: String[], formMapping: FormMapping, headerCreator: HeaderCreator, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| formMapping | FormMapping | - | - |
| headerCreator | HeaderCreator | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`


##### createMultiErrorMessage(errorMsgs: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMsgs | List<String> | - | - |

**Returns**: `String`


##### checkForUnknownHeaders(headerList: List<String>, allErrorMsgs: List<String>, expectedStandardHeaders: List<String>, mode: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |
| expectedStandardHeaders | List<String> | - | - |
| mode | Object | - | - |

**Returns**: `void`


##### checkForDuplicateHeaders(headerList: List<String>, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`


##### checkForMissingHeaders(headerList: List<String>, allErrorMsgs: List<String>, expectedStandardHeaders: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |
| expectedStandardHeaders | List<String> | - | - |

**Returns**: `void`




## Functions

### validateHeaders(headers: String[], formMapping: FormMapping, headerCreator: HeaderCreator, mode: Object, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| formMapping | FormMapping | - | - |
| headerCreator | HeaderCreator | - | - |
| mode | Object | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`



### ValidationException(unknown: createMultiErrorMessage(allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | createMultiErrorMessage(allErrorMsgs | - | - |

**Returns**: `new`



### validateHeaders(headers: String[], formMapping: FormMapping, headerCreator: HeaderCreator, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| formMapping | FormMapping | - | - |
| headerCreator | HeaderCreator | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`



### createMultiErrorMessage(errorMsgs: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMsgs | List<String> | - | - |

**Returns**: `String`



### checkForUnknownHeaders(headerList: List<String>, allErrorMsgs: List<String>, expectedStandardHeaders: List<String>, mode: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |
| expectedStandardHeaders | List<String> | - | - |
| mode | Object | - | - |

**Returns**: `void`



### checkForDuplicateHeaders(headerList: List<String>, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`



### checkForMissingHeaders(headerList: List<String>, allErrorMsgs: List<String>, expectedStandardHeaders: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |
| expectedStandardHeaders | List<String> | - | - |

**Returns**: `void`


