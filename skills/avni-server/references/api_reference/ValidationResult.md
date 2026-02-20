# API Reference: ValidationResult.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/common/ValidationResult.java`

---

## Classes

### ValidationResult

**Inherits from**: (none)

#### Methods

##### ValidationResult(unknown: ValidationResultType.Success) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ValidationResultType.Success | - | - |

**Returns**: `new`


##### Failure(message: String) → ValidationResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `ValidationResult`


##### ValidationResult(unknown: ValidationResultType.Failure, unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ValidationResultType.Failure | - | - |
| unknown | message | - | - |

**Returns**: `new`


##### ValidationResult(validationResultType: ValidationResultType) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResultType | ValidationResultType | - | - |

**Returns**: `private`


##### ValidationResult(validationResultType: ValidationResultType, message: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResultType | ValidationResultType | - | - |
| message | String | - | - |

**Returns**: `public`


##### getMessage() → String

**Returns**: `String`


##### isFailure() → boolean

**Returns**: `boolean`


##### hasType(unknown: ValidationResultType.Failure) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ValidationResultType.Failure | - | - |

**Returns**: `return`


##### isSuccess() → boolean

**Returns**: `boolean`


##### hasType(unknown: ValidationResultType.Success) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ValidationResultType.Success | - | - |

**Returns**: `return`


##### hasType(validationResultType: ValidationResultType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResultType | ValidationResultType | - | - |

**Returns**: `boolean`




## Functions

### ValidationResult(unknown: ValidationResultType.Success) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ValidationResultType.Success | - | - |

**Returns**: `new`



### Failure(message: String) → ValidationResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `ValidationResult`



### ValidationResult(unknown: ValidationResultType.Failure, unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ValidationResultType.Failure | - | - |
| unknown | message | - | - |

**Returns**: `new`



### ValidationResult(validationResultType: ValidationResultType) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResultType | ValidationResultType | - | - |

**Returns**: `private`



### ValidationResult(validationResultType: ValidationResultType, message: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResultType | ValidationResultType | - | - |
| message | String | - | - |

**Returns**: `public`



### getMessage() → String

**Returns**: `String`



### isFailure() → boolean

**Returns**: `boolean`



### hasType(unknown: ValidationResultType.Failure) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ValidationResultType.Failure | - | - |

**Returns**: `return`



### isSuccess() → boolean

**Returns**: `boolean`



### hasType(unknown: ValidationResultType.Success) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ValidationResultType.Success | - | - |

**Returns**: `return`



### hasType(validationResultType: ValidationResultType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResultType | ValidationResultType | - | - |

**Returns**: `boolean`


