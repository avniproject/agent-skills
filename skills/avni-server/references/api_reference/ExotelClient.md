# API Reference: ExotelClient.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/external/ExotelClient.java`

---

## Classes

### ExotelClient

**Inherits from**: (none)

#### Methods

##### ExotelClient(builder: RestTemplateBuilder, bugsnag: Bugsnag) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| builder | RestTemplateBuilder | - | - |
| bugsnag | Bugsnag | - | - |

**Returns**: `public`


##### callMasking(exotelConfig: JsonObject, exotelRequest: ExotelRequest) → ExotelResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exotelConfig | JsonObject | - | - |
| exotelRequest | ExotelRequest | - | - |

**Returns**: `ExotelResponse`


##### HttpHeaders() → new

**Returns**: `new`


##### StringBuilder(unknown: "https://") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "https://" | - | - |

**Returns**: `new`


##### ExotelResponse(unknown: true, masking: "Call) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| masking | "Call | - | - |

**Returns**: `new`


##### ExotelResponse(unknown: false, masking: "Call) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| masking | "Call | - | - |

**Returns**: `new`


##### ConnectException(unknown: baseErrorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | baseErrorMessage | - | - |

**Returns**: `new`


##### ConnectException(connecting: format("Error, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| connecting | format("Error | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### getErrorMessageString(responseBody: String, baseErrorMessage: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| responseBody | String | - | - |
| baseErrorMessage | String | - | - |

**Returns**: `String`


##### format(%s": "%s, unknown: baseErrorMessage, unknown: message) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s" | "%s | - | - |
| unknown | baseErrorMessage | - | - |
| unknown | message | - | - |

**Returns**: `return`




## Functions

### ExotelClient(builder: RestTemplateBuilder, bugsnag: Bugsnag) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| builder | RestTemplateBuilder | - | - |
| bugsnag | Bugsnag | - | - |

**Returns**: `public`



### callMasking(exotelConfig: JsonObject, exotelRequest: ExotelRequest) → ExotelResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exotelConfig | JsonObject | - | - |
| exotelRequest | ExotelRequest | - | - |

**Returns**: `ExotelResponse`



### HttpHeaders() → new

**Returns**: `new`



### StringBuilder(unknown: "https://") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "https://" | - | - |

**Returns**: `new`



### ExotelResponse(unknown: true, masking: "Call) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| masking | "Call | - | - |

**Returns**: `new`



### ExotelResponse(unknown: false, masking: "Call) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| masking | "Call | - | - |

**Returns**: `new`



### ConnectException(unknown: baseErrorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | baseErrorMessage | - | - |

**Returns**: `new`



### ConnectException(connecting: format("Error, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| connecting | format("Error | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### getErrorMessageString(responseBody: String, baseErrorMessage: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| responseBody | String | - | - |
| baseErrorMessage | String | - | - |

**Returns**: `String`



### format(%s": "%s, unknown: baseErrorMessage, unknown: message) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s" | "%s | - | - |
| unknown | baseErrorMessage | - | - |
| unknown | message | - | - |

**Returns**: `return`


