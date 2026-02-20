# API Reference: KeycloakAuthService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/KeycloakAuthService.java`

---

## Classes

### KeycloakAuthService

**Inherits from**: BaseIAMService

#### Methods

##### KeycloakAuthService(userRepository: UserRepository, adapterConfig: AdapterConfig, avniKeycloakConfig: AvniKeycloakConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| adapterConfig | AdapterConfig | - | - |
| avniKeycloakConfig | AvniKeycloakConfig | - | - |

**Returns**: `public`


##### logConfiguration() → void

**Returns**: `void`


##### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`


##### RestTemplate() → new

**Returns**: `new`


##### HttpHeaders() → new

**Returns**: `new`


##### getJwkProviderUrl() → String

**Returns**: `String`


##### getIssuer() → String

**Returns**: `String`


##### getUserUuidField() → String

**Returns**: `String`


##### getUsernameField() → String

**Returns**: `String`


##### addClaim(verification: Verification) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| verification | Verification | - | - |

**Returns**: `void`


##### getAudience() → String

**Returns**: `String`




## Functions

### KeycloakAuthService(userRepository: UserRepository, adapterConfig: AdapterConfig, avniKeycloakConfig: AvniKeycloakConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| adapterConfig | AdapterConfig | - | - |
| avniKeycloakConfig | AvniKeycloakConfig | - | - |

**Returns**: `public`



### logConfiguration() → void

**Returns**: `void`



### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`



### RestTemplate() → new

**Returns**: `new`



### HttpHeaders() → new

**Returns**: `new`



### getJwkProviderUrl() → String

**Returns**: `String`



### getIssuer() → String

**Returns**: `String`



### getUserUuidField() → String

**Returns**: `String`



### getUsernameField() → String

**Returns**: `String`



### addClaim(verification: Verification) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| verification | Verification | - | - |

**Returns**: `void`



### getAudience() → String

**Returns**: `String`


