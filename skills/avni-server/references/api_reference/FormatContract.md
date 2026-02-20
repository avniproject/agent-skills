# API Reference: FormatContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/FormatContract.java`

---

## Classes

### FormatContract

**Inherits from**: ReferenceDataContract

#### Methods

##### FormatContract() → public

**Returns**: `public`


##### FormatContract(regex: String, descriptionKey: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| regex | String | - | - |
| descriptionKey | String | - | - |

**Returns**: `public`


##### getRegex() → String

**Returns**: `String`


##### setRegex(regex: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| regex | String | - | - |

**Returns**: `void`


##### getDescriptionKey() → String

**Returns**: `String`


##### setDescriptionKey(descriptionKey: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| descriptionKey | String | - | - |

**Returns**: `void`


##### toFormat() → Format

**Returns**: `Format`


##### Format(unknown: this.regex, unknown: this.descriptionKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.regex | - | - |
| unknown | this.descriptionKey | - | - |

**Returns**: `new`


##### fromFormat(format: Format) → FormatContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| format | Format | - | - |

**Returns**: `FormatContract`


##### FormatContract(unknown: format.getRegex() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format.getRegex( | - | - |

**Returns**: `new`




## Functions

### FormatContract() → public

**Returns**: `public`



### FormatContract(regex: String, descriptionKey: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| regex | String | - | - |
| descriptionKey | String | - | - |

**Returns**: `public`



### getRegex() → String

**Returns**: `String`



### setRegex(regex: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| regex | String | - | - |

**Returns**: `void`



### getDescriptionKey() → String

**Returns**: `String`



### setDescriptionKey(descriptionKey: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| descriptionKey | String | - | - |

**Returns**: `void`



### toFormat() → Format

**Returns**: `Format`



### Format(unknown: this.regex, unknown: this.descriptionKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.regex | - | - |
| unknown | this.descriptionKey | - | - |

**Returns**: `new`



### fromFormat(format: Format) → FormatContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| format | Format | - | - |

**Returns**: `FormatContract`



### FormatContract(unknown: format.getRegex() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format.getRegex( | - | - |

**Returns**: `new`


