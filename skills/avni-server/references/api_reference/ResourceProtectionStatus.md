# API Reference: ResourceProtectionStatus.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/security/ResourceProtectionStatus.java`

---

## Classes

### ResourceProtectionStatus

**Inherits from**: (none)

#### Methods

##### isProtected(request: HttpServletRequest) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |

**Returns**: `boolean`


##### isUnProtected(request: HttpServletRequest) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |

**Returns**: `boolean`


##### matches(request: HttpServletRequest, pattern: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| pattern | String | - | - |

**Returns**: `boolean`


##### AntPathRequestMatcher(unknown: pattern) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | pattern | - | - |

**Returns**: `new`


##### isPresentIn(request: HttpServletRequest, blacklistedUrls: List<String>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| blacklistedUrls | List<String> | - | - |

**Returns**: `boolean`




## Functions

### isProtected(request: HttpServletRequest) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |

**Returns**: `boolean`



### isUnProtected(request: HttpServletRequest) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |

**Returns**: `boolean`



### matches(request: HttpServletRequest, pattern: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| pattern | String | - | - |

**Returns**: `boolean`



### AntPathRequestMatcher(unknown: pattern) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | pattern | - | - |

**Returns**: `new`



### isPresentIn(request: HttpServletRequest, blacklistedUrls: List<String>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| blacklistedUrls | List<String> | - | - |

**Returns**: `boolean`


