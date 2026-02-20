# API Reference: MutableRequestWrapper.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/sync/MutableRequestWrapper.java`

---

## Classes

### MutableRequestWrapper

**Inherits from**: HttpServletRequestWrapper

#### Methods

##### MutableRequestWrapper(wrapped: HttpServletRequest) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| wrapped | HttpServletRequest | - | - |

**Returns**: `public`


##### addParameter(name: String, value: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| value | String | - | - |

**Returns**: `void`


##### getParameter(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`


##### getParameterNames() → Enumeration<String>

**Returns**: `Enumeration<String>`




## Functions

### MutableRequestWrapper(wrapped: HttpServletRequest) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| wrapped | HttpServletRequest | - | - |

**Returns**: `public`



### addParameter(name: String, value: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| value | String | - | - |

**Returns**: `void`



### getParameter(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`



### getParameterNames() → Enumeration<String>

**Returns**: `Enumeration<String>`


