# API Reference: ApiConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/api/ApiConfiguration.java`

---

## Classes

### ApiConfiguration

**Inherits from**: WebMvcConfigurer

#### Methods

##### ApiConfiguration(apiResourceInterceptor: ApiResourceInterceptor, dummyInterceptor: DummyInterceptor) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| apiResourceInterceptor | ApiResourceInterceptor | - | - |
| dummyInterceptor | DummyInterceptor | - | - |

**Returns**: `public`


##### mappedApiResourceInterceptor() → MappedInterceptor

**Returns**: `MappedInterceptor`


##### MappedInterceptor(unknown: apiPath, unknown: apiResourceInterceptor) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | apiPath | - | - |
| unknown | apiResourceInterceptor | - | - |

**Returns**: `new`


##### addInterceptors(registry: InterceptorRegistry) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registry | InterceptorRegistry | - | - |

**Returns**: `void`




## Functions

### ApiConfiguration(apiResourceInterceptor: ApiResourceInterceptor, dummyInterceptor: DummyInterceptor) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| apiResourceInterceptor | ApiResourceInterceptor | - | - |
| dummyInterceptor | DummyInterceptor | - | - |

**Returns**: `public`



### mappedApiResourceInterceptor() → MappedInterceptor

**Returns**: `MappedInterceptor`



### MappedInterceptor(unknown: apiPath, unknown: apiResourceInterceptor) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | apiPath | - | - |
| unknown | apiResourceInterceptor | - | - |

**Returns**: `new`



### addInterceptors(registry: InterceptorRegistry) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registry | InterceptorRegistry | - | - |

**Returns**: `void`


