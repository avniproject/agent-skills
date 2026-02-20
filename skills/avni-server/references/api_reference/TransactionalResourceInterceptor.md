# API Reference: TransactionalResourceInterceptor.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/sync/TransactionalResourceInterceptor.java`

---

## Classes

### TransactionalResourceInterceptor

**Inherits from**: HandlerInterceptor

#### Methods

##### TransactionalResourceInterceptor(userUtil: UserUtil, environment: Environment) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userUtil | UserUtil | - | - |
| environment | Environment | - | - |

**Returns**: `public`


##### preHandle(request: HttpServletRequest, response: HttpServletResponse, object: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| object | Object | - | - |

**Returns**: `boolean`


##### getNowMinus10Seconds() → DateTime

**Returns**: `DateTime`


##### DateTime() → new

**Returns**: `new`




## Functions

### TransactionalResourceInterceptor(userUtil: UserUtil, environment: Environment) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userUtil | UserUtil | - | - |
| environment | Environment | - | - |

**Returns**: `public`



### preHandle(request: HttpServletRequest, response: HttpServletResponse, object: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | HttpServletRequest | - | - |
| response | HttpServletResponse | - | - |
| object | Object | - | - |

**Returns**: `boolean`



### getNowMinus10Seconds() → DateTime

**Returns**: `DateTime`



### DateTime() → new

**Returns**: `new`


