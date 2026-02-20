# API Reference: KeycloakAuthService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/KeycloakAuthService.java`

---

## Classes

### KeycloakAuthService

**Inherits from**: BaseIAMService

#### Methods

##### KeycloakAuthService(userRepository: UserRepository, avniKeycloakConfig: AvniKeycloakConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| avniKeycloakConfig | AvniKeycloakConfig | - | - |

**Returns**: `public`


##### logConfiguration() → void

**Returns**: `void`


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

### KeycloakAuthService(userRepository: UserRepository, avniKeycloakConfig: AvniKeycloakConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| avniKeycloakConfig | AvniKeycloakConfig | - | - |

**Returns**: `public`



### logConfiguration() → void

**Returns**: `void`



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


