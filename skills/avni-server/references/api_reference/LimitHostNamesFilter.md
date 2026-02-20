# API Reference: LimitHostNamesFilter.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/security/LimitHostNamesFilter.java`

---

## Classes

### LimitHostNamesFilter

**Inherits from**: OncePerRequestFilter

#### Methods

##### LimitHostNamesFilter(unknown: @Value("${avni.web.validHosts}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${avni.web.validHosts}" | - | - |

**Returns**: `public`


##### doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| filterChain | FilterChain | - | - |

**Returns**: `void`


##### validate(hostHeader: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hostHeader | String | - | - |

**Returns**: `String`




## Functions

### LimitHostNamesFilter(unknown: @Value("${avni.web.validHosts}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${avni.web.validHosts}" | - | - |

**Returns**: `public`



### doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| filterChain | FilterChain | - | - |

**Returns**: `void`



### validate(hostHeader: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hostHeader | String | - | - |

**Returns**: `String`


