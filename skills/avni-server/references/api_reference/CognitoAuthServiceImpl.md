# API Reference: CognitoAuthServiceImpl.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/CognitoAuthServiceImpl.java`

---

## Classes

### CognitoAuthServiceImpl

**Inherits from**: BaseIAMService

#### Methods

##### CognitoAuthServiceImpl(userRepository: UserRepository, cognitoConfig: CognitoConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| cognitoConfig | CognitoConfig | - | - |

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


##### AuthenticationHelper(unknown: cognitoConfig.getPoolId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cognitoConfig.getPoolId( | - | - |

**Returns**: `new`


##### getJwkProviderUrl() → String

**Returns**: `String`


##### getIssuer() → String

**Returns**: `String`


##### getCognitoUrl() → return

**Returns**: `return`


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


##### getCognitoUrl() → String

**Returns**: `String`




## Functions

### CognitoAuthServiceImpl(userRepository: UserRepository, cognitoConfig: CognitoConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| cognitoConfig | CognitoConfig | - | - |

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



### AuthenticationHelper(unknown: cognitoConfig.getPoolId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cognitoConfig.getPoolId( | - | - |

**Returns**: `new`



### getJwkProviderUrl() → String

**Returns**: `String`



### getIssuer() → String

**Returns**: `String`



### getCognitoUrl() → return

**Returns**: `return`



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



### getCognitoUrl() → String

**Returns**: `String`


