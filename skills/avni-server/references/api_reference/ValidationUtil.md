# API Reference: ValidationUtil.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/util/ValidationUtil.java`

---

## Classes

### ValidationUtil

**Inherits from**: (none)

#### Methods

##### checkNull(checkObject: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkObject | Object | - | - |

**Returns**: `boolean`


##### checkEmptyString(checkString: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkString | String | - | - |

**Returns**: `boolean`


##### containsDisallowedPattern(checkString: String, pattern: Pattern) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkString | String | - | - |
| pattern | Pattern | - | - |

**Returns**: `boolean`


##### checkNullOrEmpty(checkString: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkString | String | - | - |

**Returns**: `boolean`


##### checkNullOrEmptyOrContainsDisallowedCharacters(checkString: String, pattern: Pattern) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkString | String | - | - |
| pattern | Pattern | - | - |

**Returns**: `boolean`


##### handleErrors(errorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMsgs | List<String> | - | - |

**Returns**: `void`


##### ValidationException(unknown: String.join(", unknown: ", unknown: errorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | errorMsgs | - | - |

**Returns**: `new`


##### fieldMissing(fieldName: String, value: String, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| value | String | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`




## Functions

### checkNull(checkObject: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkObject | Object | - | - |

**Returns**: `boolean`



### checkEmptyString(checkString: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkString | String | - | - |

**Returns**: `boolean`



### containsDisallowedPattern(checkString: String, pattern: Pattern) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkString | String | - | - |
| pattern | Pattern | - | - |

**Returns**: `boolean`



### checkNullOrEmpty(checkString: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkString | String | - | - |

**Returns**: `boolean`



### checkNullOrEmptyOrContainsDisallowedCharacters(checkString: String, pattern: Pattern) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checkString | String | - | - |
| pattern | Pattern | - | - |

**Returns**: `boolean`



### handleErrors(errorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMsgs | List<String> | - | - |

**Returns**: `void`



### ValidationException(unknown: String.join(", unknown: ", unknown: errorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | errorMsgs | - | - |

**Returns**: `new`



### fieldMissing(fieldName: String, value: String, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| value | String | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


