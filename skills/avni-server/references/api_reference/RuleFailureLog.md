# API Reference: RuleFailureLog.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/RuleFailureLog.java`

---

## Classes

### RuleFailureLog

**Inherits from**: OrganisationAwareEntity

#### Methods

##### getFormId() → String

**Returns**: `String`


##### setFormId(formId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formId | String | - | - |

**Returns**: `void`


##### getRuleType() → String

**Returns**: `String`


##### setRuleType(ruleType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleType | String | - | - |

**Returns**: `void`


##### getEntityType() → String

**Returns**: `String`


##### setEntityType(entityType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |

**Returns**: `void`


##### getEntityId() → String

**Returns**: `String`


##### setEntityId(entityId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | String | - | - |

**Returns**: `void`


##### getErrorMessage() → String

**Returns**: `String`


##### setErrorMessage(errorMessage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMessage | String | - | - |

**Returns**: `void`


##### getStacktrace() → String

**Returns**: `String`


##### setStacktrace(stacktrace: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stacktrace | String | - | - |

**Returns**: `void`


##### getSource() → String

**Returns**: `String`


##### setSource(source: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | String | - | - |

**Returns**: `void`


##### getStackTrace(e: Exception) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `String`


##### StringWriter() → new

**Returns**: `new`


##### PrintWriter(unknown: sw) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sw | - | - |

**Returns**: `new`


##### createInstance(formUuid: String, ruleType: String, entityId: String, entityType: String, source: String, e: Exception) → RuleFailureLog

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUuid | String | - | - |
| ruleType | String | - | - |
| entityId | String | - | - |
| entityType | String | - | - |
| source | String | - | - |
| e | Exception | - | - |

**Returns**: `RuleFailureLog`


##### RuleFailureLog() → new

**Returns**: `new`




## Functions

### getFormId() → String

**Returns**: `String`



### setFormId(formId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formId | String | - | - |

**Returns**: `void`



### getRuleType() → String

**Returns**: `String`



### setRuleType(ruleType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleType | String | - | - |

**Returns**: `void`



### getEntityType() → String

**Returns**: `String`



### setEntityType(entityType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |

**Returns**: `void`



### getEntityId() → String

**Returns**: `String`



### setEntityId(entityId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | String | - | - |

**Returns**: `void`



### getErrorMessage() → String

**Returns**: `String`



### setErrorMessage(errorMessage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMessage | String | - | - |

**Returns**: `void`



### getStacktrace() → String

**Returns**: `String`



### setStacktrace(stacktrace: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stacktrace | String | - | - |

**Returns**: `void`



### getSource() → String

**Returns**: `String`



### setSource(source: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| source | String | - | - |

**Returns**: `void`



### getStackTrace(e: Exception) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `String`



### StringWriter() → new

**Returns**: `new`



### PrintWriter(unknown: sw) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sw | - | - |

**Returns**: `new`



### createInstance(formUuid: String, ruleType: String, entityId: String, entityType: String, source: String, e: Exception) → RuleFailureLog

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUuid | String | - | - |
| ruleType | String | - | - |
| entityId | String | - | - |
| entityType | String | - | - |
| source | String | - | - |
| e | Exception | - | - |

**Returns**: `RuleFailureLog`



### RuleFailureLog() → new

**Returns**: `new`


