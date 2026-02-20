# API Reference: AuthTokenManager.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/security/AuthTokenManager.java`

---

## Classes

### AuthTokenManager

**Inherits from**: (none)

#### Methods

##### getInstance() → AuthTokenManager

**Returns**: `AuthTokenManager`


##### AuthTokenManager() → new

**Returns**: `new`


##### getDerivedAuthToken(request: HttpServletRequest, queryString: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| queryString | String | - | - |

**Returns**: `String`


##### setAuthCookie(request: HttpServletRequest, response: HttpServletResponse, authToken: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| authToken | String | - | - |

**Returns**: `void`


##### getCookieMaxAge(authToken: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authToken | String | - | - |

**Returns**: `int`


##### Date() → new

**Returns**: `new`


##### makeCookie(value: String, age: int) → Cookie

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |
| age | int | - | - |

**Returns**: `Cookie`


##### Cookie(unknown: AUTH_TOKEN_COOKIE, unknown: value) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | AUTH_TOKEN_COOKIE | - | - |
| unknown | value | - | - |

**Returns**: `new`


##### getAuthTokenFromQueryString(authToken: String, queryString: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authToken | String | - | - |
| queryString | String | - | - |

**Returns**: `String`


##### parseAuthToken(unknown: queryString) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | queryString | - | - |

**Returns**: `return`


##### parseAuthToken(query: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | String | - | - |

**Returns**: `String`




## Functions

### getInstance() → AuthTokenManager

**Returns**: `AuthTokenManager`



### AuthTokenManager() → new

**Returns**: `new`



### getDerivedAuthToken(request: HttpServletRequest, queryString: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| queryString | String | - | - |

**Returns**: `String`



### setAuthCookie(request: HttpServletRequest, response: HttpServletResponse, authToken: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| authToken | String | - | - |

**Returns**: `void`



### getCookieMaxAge(authToken: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authToken | String | - | - |

**Returns**: `int`



### Date() → new

**Returns**: `new`



### makeCookie(value: String, age: int) → Cookie

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |
| age | int | - | - |

**Returns**: `Cookie`



### Cookie(unknown: AUTH_TOKEN_COOKIE, unknown: value) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | AUTH_TOKEN_COOKIE | - | - |
| unknown | value | - | - |

**Returns**: `new`



### getAuthTokenFromQueryString(authToken: String, queryString: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authToken | String | - | - |
| queryString | String | - | - |

**Returns**: `String`



### parseAuthToken(unknown: queryString) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | queryString | - | - |

**Returns**: `return`



### parseAuthToken(query: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | String | - | - |

**Returns**: `String`


