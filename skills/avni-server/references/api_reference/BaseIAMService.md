# API Reference: BaseIAMService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/BaseIAMService.java`

---

## Classes

### BaseIAMService

**Inherits from**: IAMAuthService

#### Methods

##### BaseIAMService(userRepository: UserRepository) → protected

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |

**Returns**: `protected`


##### getValueInToken(jwt: DecodedJWT, name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jwt | DecodedJWT | - | - |
| name | String | - | - |

**Returns**: `String`


##### getUserFromToken(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`


##### verifyAndDecodeToken(token: String) → DecodedJWT

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `DecodedJWT`


##### GuavaCachedJwkProvider(UrlJwkProvider(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UrlJwkProvider(new | new | - | - |

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### AvniNoUserSessionException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### AvniNoUserSessionException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


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


##### getJwkProviderUrl() → String

**Returns**: `String`


##### getIssuer() → String

**Returns**: `String`


##### logConfiguration() → void

**Returns**: `void`




## Functions

### BaseIAMService(userRepository: UserRepository) → protected

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |

**Returns**: `protected`



### getValueInToken(jwt: DecodedJWT, name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jwt | DecodedJWT | - | - |
| name | String | - | - |

**Returns**: `String`



### getUserFromToken(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`



### verifyAndDecodeToken(token: String) → DecodedJWT

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `DecodedJWT`



### GuavaCachedJwkProvider(UrlJwkProvider(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UrlJwkProvider(new | new | - | - |

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### AvniNoUserSessionException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### AvniNoUserSessionException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



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



### getJwkProviderUrl() → String

**Returns**: `String`



### getIssuer() → String

**Returns**: `String`



### logConfiguration() → void

**Returns**: `void`


