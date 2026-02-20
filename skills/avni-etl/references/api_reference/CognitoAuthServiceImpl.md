# API Reference: CognitoAuthServiceImpl.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/CognitoAuthServiceImpl.java`

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

### CognitoAuthServiceImpl(userRepository: UserRepository, cognitoConfig: CognitoConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| cognitoConfig | CognitoConfig | - | - |

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


