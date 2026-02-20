# API Reference: AuthenticationFilter.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/security/AuthenticationFilter.java`

---

## Classes

### AuthenticationFilter

**Inherits from**: OncePerRequestFilter

#### Methods

##### AuthenticationFilter(authService: AuthService, idpType: IdpType, defaultUserName: String, avniBlacklistedUrlsFile: String, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| idpType | IdpType | - | - |
| defaultUserName | String | - | - |
| avniBlacklistedUrlsFile | String | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`


##### doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| chain | FilterChain | - | - |

**Returns**: `void`


##### logException(request: HttpServletRequest, exception: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| exception | Exception | - | - |

**Returns**: `void`




## Functions

### AuthenticationFilter(authService: AuthService, idpType: IdpType, defaultUserName: String, avniBlacklistedUrlsFile: String, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| idpType | IdpType | - | - |
| defaultUserName | String | - | - |
| avniBlacklistedUrlsFile | String | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`



### doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, chain: FilterChain) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| chain | FilterChain | - | - |

**Returns**: `void`



### logException(request: HttpServletRequest, exception: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| exception | Exception | - | - |

**Returns**: `void`


