# API Reference: MetabaseConnector.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/metabase/MetabaseConnector.java`

---

## Classes

### MetabaseConnector

**Inherits from**: (none)

#### Methods

##### MetabaseConnector(restTemplateBuilder: RestTemplateBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |

**Returns**: `public`


##### getHeaders() → HttpHeaders

**Returns**: `HttpHeaders`


##### HttpHeaders() → new

**Returns**: `new`


##### createHttpEntity(body: T) → HttpEntity<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| body | T | - | - |

**Returns**: `HttpEntity<T>`


##### sendPutRequest(url: String, requestBody: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| requestBody | Object | - | - |

**Returns**: `void`


##### RuntimeException(serializing: "Error, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| serializing | "Error | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### postForObject(url: String, request: Object, responseType: Class<T>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| request | Object | - | - |
| responseType | Class<T> | - | - |

**Returns**: `T`


##### getForObject(url: String, responseType: Class<T>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| responseType | Class<T> | - | - |

**Returns**: `T`


##### getForObject(url: String, responseTypeReference: ParameterizedTypeReference) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| responseTypeReference | ParameterizedTypeReference | - | - |

**Returns**: `T`


##### deleteForObject(url: String, responseType: Class<T>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| responseType | Class<T> | - | - |

**Returns**: `T`


##### getMapResponse(url: String) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |

**Returns**: `Map<String, Object>`


##### getObjectMapper() → return

**Returns**: `return`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### getObject(url: String, clazz: TypeReference) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| clazz | TypeReference | - | - |

**Returns**: `Object`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`




## Functions

### MetabaseConnector(restTemplateBuilder: RestTemplateBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |

**Returns**: `public`



### getHeaders() → HttpHeaders

**Returns**: `HttpHeaders`



### HttpHeaders() → new

**Returns**: `new`



### createHttpEntity(body: T) → HttpEntity<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| body | T | - | - |

**Returns**: `HttpEntity<T>`



### sendPutRequest(url: String, requestBody: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| requestBody | Object | - | - |

**Returns**: `void`



### RuntimeException(serializing: "Error, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| serializing | "Error | - | - |
| unknown | e | - | - |

**Returns**: `new`



### postForObject(url: String, request: Object, responseType: Class<T>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| request | Object | - | - |
| responseType | Class<T> | - | - |

**Returns**: `T`



### getForObject(url: String, responseType: Class<T>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| responseType | Class<T> | - | - |

**Returns**: `T`



### getForObject(url: String, responseTypeReference: ParameterizedTypeReference) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| responseTypeReference | ParameterizedTypeReference | - | - |

**Returns**: `T`



### deleteForObject(url: String, responseType: Class<T>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| responseType | Class<T> | - | - |

**Returns**: `T`



### getMapResponse(url: String) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |

**Returns**: `Map<String, Object>`



### getObjectMapper() → return

**Returns**: `return`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### getObject(url: String, clazz: TypeReference) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| clazz | TypeReference | - | - |

**Returns**: `Object`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


