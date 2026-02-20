# API Reference: AuthService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/framework/security/AuthService.java`

---

## Classes

### AuthService

**Inherits from**: (none)

#### Methods

##### SimpleGrantedAuthority(unknown: User.USER) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | User.USER | - | - |

**Returns**: `new`


##### AuthService(userRepository: UserRepository, organisationRepository: OrganisationRepository, accountAdminRepository: AccountAdminRepository, idpServiceFactory: IdpServiceFactory, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| accountAdminRepository | AccountAdminRepository | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| userService | UserService | - | - |

**Returns**: `public`


##### authenticateByUserName(username: String, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`


##### changeUser(unknown: userRepository.findByUsername(username) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository.findByUsername(username | - | - |

**Returns**: `return`


##### authenticateByToken(authToken: String, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authToken | String | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`


##### AvniNoUserSessionException(unknown: exception) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exception | - | - |

**Returns**: `new`


##### tryAuthenticateByToken(authToken: String, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authToken | String | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`


##### authenticateByUserId(userId: Long, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`


##### changeUser(unknown: user.get() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user.get( | - | - |

**Returns**: `return`


##### RuntimeException(found:: String.format("Not, unknown: userId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| found: | String.format("Not | - | - |
| unknown | userId | - | - |

**Returns**: `new`


##### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`


##### AvniNoUserSessionException(unknown: exception) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exception | - | - |

**Returns**: `new`


##### attemptAuthentication(user: User, organisationUUID: String) → Authentication

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationUUID | String | - | - |

**Returns**: `Authentication`


##### UserContext() → new

**Returns**: `new`


##### createTempAuth(unknown: authorities) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authorities | - | - |

**Returns**: `return`


##### changeUser(user: User, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`


##### AvniNoUserSessionException(user: "No, not: or) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | "No | - | - |
| not | or | - | - |

**Returns**: `new`


##### becomeSuperUser() → void

**Returns**: `void`


##### createTempAuth(authorities: List<SimpleGrantedAuthority>) → Authentication

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authorities | List<SimpleGrantedAuthority> | - | - |

**Returns**: `Authentication`


##### AnonymousAuthenticationToken(unknown: token, unknown: token, unknown: authorities) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | token | - | - |
| unknown | token | - | - |
| unknown | authorities | - | - |

**Returns**: `new`




## Functions

### SimpleGrantedAuthority(unknown: User.USER) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | User.USER | - | - |

**Returns**: `new`



### AuthService(userRepository: UserRepository, organisationRepository: OrganisationRepository, accountAdminRepository: AccountAdminRepository, idpServiceFactory: IdpServiceFactory, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| accountAdminRepository | AccountAdminRepository | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### authenticateByUserName(username: String, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`



### changeUser(unknown: userRepository.findByUsername(username) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository.findByUsername(username | - | - |

**Returns**: `return`



### authenticateByToken(authToken: String, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authToken | String | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`



### AvniNoUserSessionException(unknown: exception) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exception | - | - |

**Returns**: `new`



### tryAuthenticateByToken(authToken: String, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authToken | String | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`



### authenticateByUserId(userId: Long, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`



### changeUser(unknown: user.get() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user.get( | - | - |

**Returns**: `return`



### RuntimeException(found:: String.format("Not, unknown: userId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| found: | String.format("Not | - | - |
| unknown | userId | - | - |

**Returns**: `new`



### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`



### AvniNoUserSessionException(unknown: exception) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exception | - | - |

**Returns**: `new`



### attemptAuthentication(user: User, organisationUUID: String) → Authentication

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationUUID | String | - | - |

**Returns**: `Authentication`



### UserContext() → new

**Returns**: `new`



### createTempAuth(unknown: authorities) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authorities | - | - |

**Returns**: `return`



### changeUser(user: User, organisationUUID: String) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationUUID | String | - | - |

**Returns**: `UserContext`



### AvniNoUserSessionException(user: "No, not: or) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | "No | - | - |
| not | or | - | - |

**Returns**: `new`



### becomeSuperUser() → void

**Returns**: `void`



### createTempAuth(authorities: List<SimpleGrantedAuthority>) → Authentication

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authorities | List<SimpleGrantedAuthority> | - | - |

**Returns**: `Authentication`



### AnonymousAuthenticationToken(unknown: token, unknown: token, unknown: authorities) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | token | - | - |
| unknown | token | - | - |
| unknown | authorities | - | - |

**Returns**: `new`


