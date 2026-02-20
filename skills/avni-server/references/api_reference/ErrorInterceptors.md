# API Reference: ErrorInterceptors.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ErrorInterceptors.java`

---

## Classes

### ErrorInterceptors

**Inherits from**: ResponseEntityExceptionHandler

#### Methods

##### ApiError(field: String, message: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | String | - | - |
| message | String | - | - |

**Returns**: `public`


##### getField() → String

**Returns**: `String`


##### setField(field: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | String | - | - |

**Returns**: `void`


##### getMessage() → String

**Returns**: `String`


##### setMessage(message: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `void`


##### ErrorInterceptors(unknown: @Value("${spring.servlet.multipart.max-file-size}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${spring.servlet.multipart.max-file-size}" | - | - |

**Returns**: `public`


##### handleMethodArgumentNotValid(ex: MethodArgumentNotValidException, headers: HttpHeaders, status: HttpStatusCode, request: WebRequest) → ResponseEntity<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ex | MethodArgumentNotValidException | - | - |
| headers | HttpHeaders | - | - |
| status | HttpStatusCode | - | - |
| request | WebRequest | - | - |

**Returns**: `ResponseEntity<Object>`


##### ApiError(unknown: x.getField() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | x.getField( | - | - |

**Returns**: `new`


##### ResponseEntity(RestControllerErrorResponse(errorBodyBuilder.getErrorBody(message: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| RestControllerErrorResponse(errorBodyBuilder.getErrorBody(message | new | - | - |

**Returns**: `new`


##### fileUploadSizeLimitExceededError(e: Exception) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `ResponseEntity`


##### entityUpsertErrorDueToDataConstraintViolation(e: Exception) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `ResponseEntity`


##### unknownException(e: Exception) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `ResponseEntity`


##### error(unknown: e, unknown: HttpStatus.BAD_REQUEST) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |
| unknown | HttpStatus.BAD_REQUEST | - | - |

**Returns**: `return`


##### handleExceptionInternal(ex: Exception, body: Object, headers: HttpHeaders, statusCode: HttpStatusCode, request: WebRequest) → ResponseEntity<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ex | Exception | - | - |
| body | Object | - | - |
| headers | HttpHeaders | - | - |
| statusCode | HttpStatusCode | - | - |
| request | WebRequest | - | - |

**Returns**: `ResponseEntity<Object>`




### ApiError

**Inherits from**: (none)

#### Methods

##### ApiError(field: String, message: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | String | - | - |
| message | String | - | - |

**Returns**: `public`


##### getField() → String

**Returns**: `String`


##### setField(field: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | String | - | - |

**Returns**: `void`


##### getMessage() → String

**Returns**: `String`


##### setMessage(message: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `void`




## Functions

### ApiError(field: String, message: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | String | - | - |
| message | String | - | - |

**Returns**: `public`



### getField() → String

**Returns**: `String`



### setField(field: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | String | - | - |

**Returns**: `void`



### getMessage() → String

**Returns**: `String`



### setMessage(message: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `void`



### ErrorInterceptors(unknown: @Value("${spring.servlet.multipart.max-file-size}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("${spring.servlet.multipart.max-file-size}" | - | - |

**Returns**: `public`



### handleMethodArgumentNotValid(ex: MethodArgumentNotValidException, headers: HttpHeaders, status: HttpStatusCode, request: WebRequest) → ResponseEntity<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ex | MethodArgumentNotValidException | - | - |
| headers | HttpHeaders | - | - |
| status | HttpStatusCode | - | - |
| request | WebRequest | - | - |

**Returns**: `ResponseEntity<Object>`



### ApiError(unknown: x.getField() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | x.getField( | - | - |

**Returns**: `new`



### ResponseEntity(RestControllerErrorResponse(errorBodyBuilder.getErrorBody(message: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| RestControllerErrorResponse(errorBodyBuilder.getErrorBody(message | new | - | - |

**Returns**: `new`



### fileUploadSizeLimitExceededError(e: Exception) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `ResponseEntity`



### entityUpsertErrorDueToDataConstraintViolation(e: Exception) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `ResponseEntity`



### unknownException(e: Exception) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `ResponseEntity`



### error(unknown: e, unknown: HttpStatus.BAD_REQUEST) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |
| unknown | HttpStatus.BAD_REQUEST | - | - |

**Returns**: `return`



### handleExceptionInternal(ex: Exception, body: Object, headers: HttpHeaders, statusCode: HttpStatusCode, request: WebRequest) → ResponseEntity<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ex | Exception | - | - |
| body | Object | - | - |
| headers | HttpHeaders | - | - |
| statusCode | HttpStatusCode | - | - |
| request | WebRequest | - | - |

**Returns**: `ResponseEntity<Object>`


