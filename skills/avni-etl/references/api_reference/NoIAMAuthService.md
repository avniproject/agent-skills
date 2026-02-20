# API Reference: NoIAMAuthService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/NoIAMAuthService.java`

---

## Classes

### NoIAMAuthService

**Inherits from**: IAMAuthService

#### Methods

##### NoIAMAuthService(userRepository: UserRepository, cognitoConfig: CognitoConfig, avniKeycloakConfig: AvniKeycloakConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| cognitoConfig | CognitoConfig | - | - |
| avniKeycloakConfig | AvniKeycloakConfig | - | - |

**Returns**: `public`


##### getUserFromToken(userName: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userName | String | - | - |

**Returns**: `User`


##### RuntimeException(improperly: "Server) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| improperly | "Server | - | - |

**Returns**: `new`




## Functions

### NoIAMAuthService(userRepository: UserRepository, cognitoConfig: CognitoConfig, avniKeycloakConfig: AvniKeycloakConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| cognitoConfig | CognitoConfig | - | - |
| avniKeycloakConfig | AvniKeycloakConfig | - | - |

**Returns**: `public`



### getUserFromToken(userName: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userName | String | - | - |

**Returns**: `User`



### RuntimeException(improperly: "Server) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| improperly | "Server | - | - |

**Returns**: `new`


