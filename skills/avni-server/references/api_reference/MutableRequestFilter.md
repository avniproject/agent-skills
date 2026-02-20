# API Reference: MutableRequestFilter.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/sync/MutableRequestFilter.java`

---

## Classes

### MutableRequestFilter

**Inherits from**: Filter

#### Methods

##### init(filterConfig: FilterConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filterConfig | FilterConfig | - | - |

**Returns**: `void`


##### doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ServletRequest | - | - |
| response | ServletResponse | - | - |
| chain | FilterChain | - | - |

**Returns**: `void`


##### MutableRequestWrapper(XSSSafeRequest(httpServletRequest: new, unknown: payloadEncoding) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| XSSSafeRequest(httpServletRequest | new | - | - |
| unknown | payloadEncoding | - | - |

**Returns**: `new`


##### destroy() → void

**Returns**: `void`


##### XSSSafeRequest(request: HttpServletRequest, doPayloadEncoding: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| doPayloadEncoding | boolean | - | - |

**Returns**: `public`


##### StringBuilder() → new

**Returns**: `new`


##### BufferedReader(InputStreamReader(inputStream: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(inputStream | new | - | - |

**Returns**: `new`


##### getInputStream() → ServletInputStream

**Returns**: `ServletInputStream`


##### ByteArrayInputStream(unknown: body.getBytes() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | body.getBytes( | - | - |

**Returns**: `new`


##### ServletInputStream() → new

**Returns**: `new`


##### read() → int

**Returns**: `int`


##### isFinished() → boolean

**Returns**: `boolean`


##### isReady() → boolean

**Returns**: `boolean`


##### setReadListener(listener: ReadListener) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | ReadListener | - | - |

**Returns**: `void`


##### isNotProtected() → boolean

**Returns**: `boolean`


##### getParameter(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`




### XSSSafeRequest

**Inherits from**: HttpServletRequestWrapper

#### Methods

##### XSSSafeRequest(request: HttpServletRequest, doPayloadEncoding: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| doPayloadEncoding | boolean | - | - |

**Returns**: `public`


##### StringBuilder() → new

**Returns**: `new`


##### BufferedReader(InputStreamReader(inputStream: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(inputStream | new | - | - |

**Returns**: `new`


##### getInputStream() → ServletInputStream

**Returns**: `ServletInputStream`


##### ByteArrayInputStream(unknown: body.getBytes() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | body.getBytes( | - | - |

**Returns**: `new`


##### ServletInputStream() → new

**Returns**: `new`


##### read() → int

**Returns**: `int`


##### isFinished() → boolean

**Returns**: `boolean`


##### isReady() → boolean

**Returns**: `boolean`


##### setReadListener(listener: ReadListener) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | ReadListener | - | - |

**Returns**: `void`


##### isNotProtected() → boolean

**Returns**: `boolean`


##### getParameter(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`




## Functions

### init(filterConfig: FilterConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filterConfig | FilterConfig | - | - |

**Returns**: `void`



### doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ServletRequest | - | - |
| response | ServletResponse | - | - |
| chain | FilterChain | - | - |

**Returns**: `void`



### MutableRequestWrapper(XSSSafeRequest(httpServletRequest: new, unknown: payloadEncoding) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| XSSSafeRequest(httpServletRequest | new | - | - |
| unknown | payloadEncoding | - | - |

**Returns**: `new`



### destroy() → void

**Returns**: `void`



### XSSSafeRequest(request: HttpServletRequest, doPayloadEncoding: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| doPayloadEncoding | boolean | - | - |

**Returns**: `public`



### StringBuilder() → new

**Returns**: `new`



### BufferedReader(InputStreamReader(inputStream: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(inputStream | new | - | - |

**Returns**: `new`



### getInputStream() → ServletInputStream

**Returns**: `ServletInputStream`



### ByteArrayInputStream(unknown: body.getBytes() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | body.getBytes( | - | - |

**Returns**: `new`



### ServletInputStream() → new

**Returns**: `new`



### read() → int

**Returns**: `int`



### isFinished() → boolean

**Returns**: `boolean`



### isReady() → boolean

**Returns**: `boolean`



### setReadListener(listener: ReadListener) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | ReadListener | - | - |

**Returns**: `void`



### isNotProtected() → boolean

**Returns**: `boolean`



### getParameter(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`


