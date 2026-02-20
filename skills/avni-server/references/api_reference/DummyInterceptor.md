# API Reference: DummyInterceptor.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/hibernate/DummyInterceptor.java`

---

## Classes

### DummyInterceptor

**Inherits from**: HandlerInterceptor

#### Methods

##### DummyInterceptor(genderRepository: GenderRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderRepository | GenderRepository | - | - |

**Returns**: `public`


##### preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| handler | Object | - | - |

**Returns**: `boolean`


##### postHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Object, modelAndView: ModelAndView) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| handler | Object | - | - |
| modelAndView | ModelAndView | - | - |

**Returns**: `void`


##### afterCompletion(request: HttpServletRequest, response: HttpServletResponse, handler: Object, exception: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| handler | Object | - | - |
| exception | Exception | - | - |

**Returns**: `void`




## Functions

### DummyInterceptor(genderRepository: GenderRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderRepository | GenderRepository | - | - |

**Returns**: `public`



### preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| handler | Object | - | - |

**Returns**: `boolean`



### postHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Object, modelAndView: ModelAndView) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| handler | Object | - | - |
| modelAndView | ModelAndView | - | - |

**Returns**: `void`



### afterCompletion(request: HttpServletRequest, response: HttpServletResponse, handler: Object, exception: Exception) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| handler | Object | - | - |
| exception | Exception | - | - |

**Returns**: `void`


