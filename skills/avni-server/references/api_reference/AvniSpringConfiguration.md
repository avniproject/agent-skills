# API Reference: AvniSpringConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/AvniSpringConfiguration.java`

---

## Classes

### AvniSpringConfiguration

**Inherits from**: WebMvcAutoConfiguration

#### Methods

##### AvniSpringConfiguration(environment: Environment, unknown: @Qualifier("dataSource") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| environment | Environment | - | - |
| unknown | @Qualifier("dataSource" | - | - |

**Returns**: `public`


##### adapterConfig() → AdapterConfig

**Returns**: `AdapterConfig`


##### AdapterConfig() → new

**Returns**: `new`


##### auditorProvider() → AuditorAware<User>

**Returns**: `AuditorAware<User>`


##### CHSAuditorAware() → new

**Returns**: `new`


##### projectionFactory() → SpelAwareProxyProjectionFactory

**Returns**: `SpelAwareProxyProjectionFactory`


##### SpelAwareProxyProjectionFactory() → new

**Returns**: `new`


##### isDev() → Boolean

**Returns**: `Boolean`


##### getNamedParameterJdbcTemplate() → NamedParameterJdbcTemplate

**Returns**: `NamedParameterJdbcTemplate`


##### JdbcTemplate(unknown: dataSource) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dataSource | - | - |

**Returns**: `new`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### getExternalQueryJdbcTemplate() → NamedParameterJdbcTemplate

**Returns**: `NamedParameterJdbcTemplate`


##### JdbcTemplate(unknown: dataSource) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dataSource | - | - |

**Returns**: `new`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### keycloakDeployment(adapterConfig: AdapterConfig) → KeycloakDeployment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| adapterConfig | AdapterConfig | - | - |

**Returns**: `KeycloakDeployment`


##### keycloakConfigResolver(keycloakDeployment: KeycloakDeployment) → KeycloakConfigResolver

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keycloakDeployment | KeycloakDeployment | - | - |

**Returns**: `KeycloakConfigResolver`


##### cacheManager() → CacheManager

**Returns**: `CacheManager`


##### ConcurrentMapCacheManager() → new

**Returns**: `new`


##### createConcurrentMapCache(name: String) → Cache

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Cache`


##### getConcurrentMapCacheWithWeightedCapacityForAddressesConfig(unknown: name) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |

**Returns**: `return`


##### getConcurrentMapCacheWithMaxEntriesConfig(unknown: name) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |

**Returns**: `return`


##### getConcurrentMapCacheWithWeightedCapacityForAddressesConfig(name: String) → ConcurrentMapCache

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ConcurrentMapCache`


##### ConcurrentMapCache(unknown: name, unknown: CacheBuilder.newBuilder() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | CacheBuilder.newBuilder( | - | - |

**Returns**: `new`


##### getConcurrentMapCacheWithMaxEntriesConfig(name: String) → ConcurrentMapCache

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ConcurrentMapCache`


##### ConcurrentMapCache(unknown: name, unknown: CacheBuilder.newBuilder() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | CacheBuilder.newBuilder( | - | - |

**Returns**: `new`


##### objectMapper() → ObjectMapper

**Returns**: `ObjectMapper`


##### customRestTemplateCustomizer() → CustomRestTemplateCustomizer

**Returns**: `CustomRestTemplateCustomizer`


##### CustomRestTemplateCustomizer() → new

**Returns**: `new`


##### restTemplateBuilder() → RestTemplateBuilder

**Returns**: `RestTemplateBuilder`


##### RestTemplateBuilder(unknown: customRestTemplateCustomizer() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | customRestTemplateCustomizer( | - | - |

**Returns**: `new`




## Functions

### AvniSpringConfiguration(environment: Environment, unknown: @Qualifier("dataSource") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| environment | Environment | - | - |
| unknown | @Qualifier("dataSource" | - | - |

**Returns**: `public`



### adapterConfig() → AdapterConfig

**Returns**: `AdapterConfig`



### AdapterConfig() → new

**Returns**: `new`



### auditorProvider() → AuditorAware<User>

**Returns**: `AuditorAware<User>`



### CHSAuditorAware() → new

**Returns**: `new`



### projectionFactory() → SpelAwareProxyProjectionFactory

**Returns**: `SpelAwareProxyProjectionFactory`



### SpelAwareProxyProjectionFactory() → new

**Returns**: `new`



### isDev() → Boolean

**Returns**: `Boolean`



### getNamedParameterJdbcTemplate() → NamedParameterJdbcTemplate

**Returns**: `NamedParameterJdbcTemplate`



### JdbcTemplate(unknown: dataSource) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dataSource | - | - |

**Returns**: `new`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### getExternalQueryJdbcTemplate() → NamedParameterJdbcTemplate

**Returns**: `NamedParameterJdbcTemplate`



### JdbcTemplate(unknown: dataSource) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dataSource | - | - |

**Returns**: `new`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### keycloakDeployment(adapterConfig: AdapterConfig) → KeycloakDeployment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| adapterConfig | AdapterConfig | - | - |

**Returns**: `KeycloakDeployment`



### keycloakConfigResolver(keycloakDeployment: KeycloakDeployment) → KeycloakConfigResolver

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keycloakDeployment | KeycloakDeployment | - | - |

**Returns**: `KeycloakConfigResolver`



### cacheManager() → CacheManager

**Returns**: `CacheManager`



### ConcurrentMapCacheManager() → new

**Returns**: `new`



### createConcurrentMapCache(name: String) → Cache

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Cache`



### getConcurrentMapCacheWithWeightedCapacityForAddressesConfig(unknown: name) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |

**Returns**: `return`



### getConcurrentMapCacheWithMaxEntriesConfig(unknown: name) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |

**Returns**: `return`



### getConcurrentMapCacheWithWeightedCapacityForAddressesConfig(name: String) → ConcurrentMapCache

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ConcurrentMapCache`



### ConcurrentMapCache(unknown: name, unknown: CacheBuilder.newBuilder() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | CacheBuilder.newBuilder( | - | - |

**Returns**: `new`



### getConcurrentMapCacheWithMaxEntriesConfig(name: String) → ConcurrentMapCache

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ConcurrentMapCache`



### ConcurrentMapCache(unknown: name, unknown: CacheBuilder.newBuilder() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | CacheBuilder.newBuilder( | - | - |

**Returns**: `new`



### objectMapper() → ObjectMapper

**Returns**: `ObjectMapper`



### customRestTemplateCustomizer() → CustomRestTemplateCustomizer

**Returns**: `CustomRestTemplateCustomizer`



### CustomRestTemplateCustomizer() → new

**Returns**: `new`



### restTemplateBuilder() → RestTemplateBuilder

**Returns**: `RestTemplateBuilder`



### RestTemplateBuilder(unknown: customRestTemplateCustomizer() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | customRestTemplateCustomizer( | - | - |

**Returns**: `new`


