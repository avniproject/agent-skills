# API Reference: ExportV2ValidationHelper.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/v2/ExportV2ValidationHelper.java`

---

## Classes

### ExportV2ValidationHelper

**Inherits from**: LongitudinalExportRequestFieldNameConstants

#### Methods

##### validateFields(errorList: List<String>, entityName: String, requestFields: List<String>, allowedFields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |
| entityName | String | - | - |
| requestFields | List<String> | - | - |
| allowedFields | List<String> | - | - |

**Returns**: `void`


##### isNotUUID(str: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |

**Returns**: `boolean`


##### validateRegistrationHeaders(errorList: List<String>, entityName: String, requestFields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |
| entityName | String | - | - |
| requestFields | List<String> | - | - |

**Returns**: `void`


##### validateEncounterHeaders(errorList: List<String>, entityName: String, requestFields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |
| entityName | String | - | - |
| requestFields | List<String> | - | - |

**Returns**: `void`


##### validateEnrolmentHeaders(errorList: List<String>, entityName: String, requestFields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |
| entityName | String | - | - |
| requestFields | List<String> | - | - |

**Returns**: `void`


##### validateIfDateFilterIsNotSpecified(entityType: ExportEntityType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | ExportEntityType | - | - |

**Returns**: `boolean`


##### validate(exportOutput: ExportOutput) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportOutput | ExportOutput | - | - |

**Returns**: `List<String>`




## Functions

### validateFields(errorList: List<String>, entityName: String, requestFields: List<String>, allowedFields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |
| entityName | String | - | - |
| requestFields | List<String> | - | - |
| allowedFields | List<String> | - | - |

**Returns**: `void`



### isNotUUID(str: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |

**Returns**: `boolean`



### validateRegistrationHeaders(errorList: List<String>, entityName: String, requestFields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |
| entityName | String | - | - |
| requestFields | List<String> | - | - |

**Returns**: `void`



### validateEncounterHeaders(errorList: List<String>, entityName: String, requestFields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |
| entityName | String | - | - |
| requestFields | List<String> | - | - |

**Returns**: `void`



### validateEnrolmentHeaders(errorList: List<String>, entityName: String, requestFields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |
| entityName | String | - | - |
| requestFields | List<String> | - | - |

**Returns**: `void`



### validateIfDateFilterIsNotSpecified(entityType: ExportEntityType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | ExportEntityType | - | - |

**Returns**: `boolean`



### validate(exportOutput: ExportOutput) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportOutput | ExportOutput | - | - |

**Returns**: `List<String>`


