# API Reference: GlificRestClient.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/external/GlificRestClient.java`

---

## Classes

### GlificRestClient

**Inherits from**: (none)

#### Methods

##### GlificRestClient(builder: RestTemplateBuilder, externalSystemConfigRepository: ExternalSystemConfigRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| builder | RestTemplateBuilder | - | - |
| externalSystemConfigRepository | ExternalSystemConfigRepository | - | - |

**Returns**: `public`


##### authenticate() → GlificAuth

**Returns**: `GlificAuth`


##### RequestObjectBuilder() → new

**Returns**: `new`


##### GlificAuthRequest(GlificUser(getSystemConfig(: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| GlificUser(getSystemConfig( | new | - | - |

**Returns**: `new`


##### makeCall(unknown: AUTH_URL, unknown: request, ParameterizedTypeReference<GlificResponse<GlificAuth>>(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | AUTH_URL | - | - |
| unknown | request | - | - |
| ParameterizedTypeReference<GlificResponse<GlificAuth>>( | new | - | - |

**Returns**: `return`


##### callAPI(requestObject: Object, responseType: ParameterizedTypeReference<GlificResponse<T>>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestObject | Object | - | - |
| responseType | ParameterizedTypeReference<GlificResponse<T>> | - | - |

**Returns**: `T`


##### callAPI(unknown: requestObject, unknown: responseType, unknown: this.authenticate() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | requestObject | - | - |
| unknown | responseType | - | - |
| unknown | this.authenticate( | - | - |

**Returns**: `return`


##### callAPI(requestObject: Object, responseType: ParameterizedTypeReference<GlificResponse<T>>, auth: GlificAuth) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestObject | Object | - | - |
| responseType | ParameterizedTypeReference<GlificResponse<T>> | - | - |
| auth | GlificAuth | - | - |

**Returns**: `T`


##### RequestObjectBuilder() → new

**Returns**: `new`


##### makeCall(unknown: REQUEST_URL, unknown: request, unknown: responseType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | REQUEST_URL | - | - |
| unknown | request | - | - |
| unknown | responseType | - | - |

**Returns**: `return`


##### makeCall(url: String, request: HttpEntity<Object>, responseType: ParameterizedTypeReference<GlificResponse<T>>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| request | HttpEntity<Object> | - | - |
| responseType | ParameterizedTypeReference<GlificResponse<T>> | - | - |

**Returns**: `T`


##### GlificConnectException(unknown: response.getErrors() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | response.getErrors( | - | - |

**Returns**: `new`


##### getSystemConfig() → GlificSystemConfig

**Returns**: `GlificSystemConfig`


##### GlificNotConfiguredException(system: "External) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| system | "External | - | - |

**Returns**: `new`


##### GlificSystemConfig(unknown: externalSystemConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | externalSystemConfig | - | - |

**Returns**: `new`


##### RequestObjectBuilder() → public

**Returns**: `public`


##### HttpHeaders() → new

**Returns**: `new`


##### withJsonContent() → RequestObjectBuilder

**Returns**: `RequestObjectBuilder`


##### withAccept() → RequestObjectBuilder

**Returns**: `RequestObjectBuilder`


##### withAuth(glificAuth: GlificAuth) → RequestObjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificAuth | GlificAuth | - | - |

**Returns**: `RequestObjectBuilder`


##### build() → HttpEntity<Object>

**Returns**: `HttpEntity<Object>`


##### withRequestObject(requestObject: Object) → RequestObjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestObject | Object | - | - |

**Returns**: `RequestObjectBuilder`




### RequestObjectBuilder

**Inherits from**: (none)

#### Methods

##### RequestObjectBuilder() → public

**Returns**: `public`


##### HttpHeaders() → new

**Returns**: `new`


##### withJsonContent() → RequestObjectBuilder

**Returns**: `RequestObjectBuilder`


##### withAccept() → RequestObjectBuilder

**Returns**: `RequestObjectBuilder`


##### withAuth(glificAuth: GlificAuth) → RequestObjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificAuth | GlificAuth | - | - |

**Returns**: `RequestObjectBuilder`


##### build() → HttpEntity<Object>

**Returns**: `HttpEntity<Object>`


##### withRequestObject(requestObject: Object) → RequestObjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestObject | Object | - | - |

**Returns**: `RequestObjectBuilder`




## Functions

### GlificRestClient(builder: RestTemplateBuilder, externalSystemConfigRepository: ExternalSystemConfigRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| builder | RestTemplateBuilder | - | - |
| externalSystemConfigRepository | ExternalSystemConfigRepository | - | - |

**Returns**: `public`



### authenticate() → GlificAuth

**Returns**: `GlificAuth`



### RequestObjectBuilder() → new

**Returns**: `new`



### GlificAuthRequest(GlificUser(getSystemConfig(: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| GlificUser(getSystemConfig( | new | - | - |

**Returns**: `new`



### makeCall(unknown: AUTH_URL, unknown: request, ParameterizedTypeReference<GlificResponse<GlificAuth>>(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | AUTH_URL | - | - |
| unknown | request | - | - |
| ParameterizedTypeReference<GlificResponse<GlificAuth>>( | new | - | - |

**Returns**: `return`



### callAPI(requestObject: Object, responseType: ParameterizedTypeReference<GlificResponse<T>>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestObject | Object | - | - |
| responseType | ParameterizedTypeReference<GlificResponse<T>> | - | - |

**Returns**: `T`



### callAPI(unknown: requestObject, unknown: responseType, unknown: this.authenticate() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | requestObject | - | - |
| unknown | responseType | - | - |
| unknown | this.authenticate( | - | - |

**Returns**: `return`



### callAPI(requestObject: Object, responseType: ParameterizedTypeReference<GlificResponse<T>>, auth: GlificAuth) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestObject | Object | - | - |
| responseType | ParameterizedTypeReference<GlificResponse<T>> | - | - |
| auth | GlificAuth | - | - |

**Returns**: `T`



### RequestObjectBuilder() → new

**Returns**: `new`



### makeCall(unknown: REQUEST_URL, unknown: request, unknown: responseType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | REQUEST_URL | - | - |
| unknown | request | - | - |
| unknown | responseType | - | - |

**Returns**: `return`



### makeCall(url: String, request: HttpEntity<Object>, responseType: ParameterizedTypeReference<GlificResponse<T>>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| request | HttpEntity<Object> | - | - |
| responseType | ParameterizedTypeReference<GlificResponse<T>> | - | - |

**Returns**: `T`



### GlificConnectException(unknown: response.getErrors() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | response.getErrors( | - | - |

**Returns**: `new`



### getSystemConfig() → GlificSystemConfig

**Returns**: `GlificSystemConfig`



### GlificNotConfiguredException(system: "External) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| system | "External | - | - |

**Returns**: `new`



### GlificSystemConfig(unknown: externalSystemConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | externalSystemConfig | - | - |

**Returns**: `new`



### RequestObjectBuilder() → public

**Returns**: `public`



### HttpHeaders() → new

**Returns**: `new`



### withJsonContent() → RequestObjectBuilder

**Returns**: `RequestObjectBuilder`



### withAccept() → RequestObjectBuilder

**Returns**: `RequestObjectBuilder`



### withAuth(glificAuth: GlificAuth) → RequestObjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificAuth | GlificAuth | - | - |

**Returns**: `RequestObjectBuilder`



### build() → HttpEntity<Object>

**Returns**: `HttpEntity<Object>`



### withRequestObject(requestObject: Object) → RequestObjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestObject | Object | - | - |

**Returns**: `RequestObjectBuilder`


