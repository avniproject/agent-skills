# API Reference: AuthService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/AuthService.java`

---

## Classes

### AuthService

**Inherits from**: (none)

#### Methods

##### SimpleGrantedAuthority(unknown: User.ANALYTICS_USER) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | User.ANALYTICS_USER | - | - |

**Returns**: `new`


##### SimpleGrantedAuthority(unknown: User.USER) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | User.USER | - | - |

**Returns**: `new`


##### SimpleGrantedAuthority(unknown: User.ADMIN) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | User.ADMIN | - | - |

**Returns**: `new`


##### AuthService(idpServiceFactory: IdpServiceFactory) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| idpServiceFactory | IdpServiceFactory | - | - |

**Returns**: `public`


##### authenticate(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`


##### RuntimeException(unknown: signingKeyNotFoundException) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | signingKeyNotFoundException | - | - |

**Returns**: `new`


##### setupUserContext(user: User) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `UserContext`


##### UserContext() → new

**Returns**: `new`


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

### SimpleGrantedAuthority(unknown: User.ANALYTICS_USER) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | User.ANALYTICS_USER | - | - |

**Returns**: `new`



### SimpleGrantedAuthority(unknown: User.USER) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | User.USER | - | - |

**Returns**: `new`



### SimpleGrantedAuthority(unknown: User.ADMIN) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | User.ADMIN | - | - |

**Returns**: `new`



### AuthService(idpServiceFactory: IdpServiceFactory) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| idpServiceFactory | IdpServiceFactory | - | - |

**Returns**: `public`



### authenticate(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`



### RuntimeException(unknown: signingKeyNotFoundException) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | signingKeyNotFoundException | - | - |

**Returns**: `new`



### setupUserContext(user: User) → UserContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `UserContext`



### UserContext() → new

**Returns**: `new`



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


