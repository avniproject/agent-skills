# API Reference: IdpServiceFactory.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/IdpServiceFactory.java`

---

## Classes

### IdpServiceFactory

**Inherits from**: (none)

#### Methods

##### IdpServiceFactory(userRepository: UserRepository, cognitoConfig: CognitoConfig, avniKeycloakConfig: AvniKeycloakConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| cognitoConfig | CognitoConfig | - | - |
| avniKeycloakConfig | AvniKeycloakConfig | - | - |

**Returns**: `public`


##### setCognitoAuthService(cognitoAuthService: CognitoAuthServiceImpl) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cognitoAuthService | CognitoAuthServiceImpl | - | - |

**Returns**: `void`


##### setKeycloakAuthService(keycloakAuthService: KeycloakAuthService) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keycloakAuthService | KeycloakAuthService | - | - |

**Returns**: `void`


##### getAuthService() → IAMAuthService

**Returns**: `IAMAuthService`


##### CompositeIAMAuthService(unknown: cognitoAuthService, unknown: keycloakAuthService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cognitoAuthService | - | - |
| unknown | keycloakAuthService | - | - |

**Returns**: `new`


##### NoIAMAuthService(unknown: userRepository, unknown: cognitoConfig, unknown: avniKeycloakConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository | - | - |
| unknown | cognitoConfig | - | - |
| unknown | avniKeycloakConfig | - | - |

**Returns**: `new`


##### RuntimeException(%s: String.format("IdpType:, unknown: idpType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("IdpType: | - | - |
| unknown | idpType | - | - |

**Returns**: `new`


##### CompositeIAMAuthService(cognitoAuthService: CognitoAuthServiceImpl, keycloakAuthService: KeycloakAuthService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cognitoAuthService | CognitoAuthServiceImpl | - | - |
| keycloakAuthService | KeycloakAuthService | - | - |

**Returns**: `public`


##### getUserFromToken(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`




### CompositeIAMAuthService

**Inherits from**: IAMAuthService

#### Methods

##### CompositeIAMAuthService(cognitoAuthService: CognitoAuthServiceImpl, keycloakAuthService: KeycloakAuthService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cognitoAuthService | CognitoAuthServiceImpl | - | - |
| keycloakAuthService | KeycloakAuthService | - | - |

**Returns**: `public`


##### getUserFromToken(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`




## Functions

### IdpServiceFactory(userRepository: UserRepository, cognitoConfig: CognitoConfig, avniKeycloakConfig: AvniKeycloakConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| cognitoConfig | CognitoConfig | - | - |
| avniKeycloakConfig | AvniKeycloakConfig | - | - |

**Returns**: `public`



### setCognitoAuthService(cognitoAuthService: CognitoAuthServiceImpl) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cognitoAuthService | CognitoAuthServiceImpl | - | - |

**Returns**: `void`



### setKeycloakAuthService(keycloakAuthService: KeycloakAuthService) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keycloakAuthService | KeycloakAuthService | - | - |

**Returns**: `void`



### getAuthService() → IAMAuthService

**Returns**: `IAMAuthService`



### CompositeIAMAuthService(unknown: cognitoAuthService, unknown: keycloakAuthService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cognitoAuthService | - | - |
| unknown | keycloakAuthService | - | - |

**Returns**: `new`



### NoIAMAuthService(unknown: userRepository, unknown: cognitoConfig, unknown: avniKeycloakConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository | - | - |
| unknown | cognitoConfig | - | - |
| unknown | avniKeycloakConfig | - | - |

**Returns**: `new`



### RuntimeException(%s: String.format("IdpType:, unknown: idpType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("IdpType: | - | - |
| unknown | idpType | - | - |

**Returns**: `new`



### CompositeIAMAuthService(cognitoAuthService: CognitoAuthServiceImpl, keycloakAuthService: KeycloakAuthService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cognitoAuthService | CognitoAuthServiceImpl | - | - |
| keycloakAuthService | KeycloakAuthService | - | - |

**Returns**: `public`



### getUserFromToken(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`


