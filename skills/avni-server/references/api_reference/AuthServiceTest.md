# API Reference: AuthServiceTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/AuthServiceTest.java`

---

## Classes

### AuthServiceTest

**Inherits from**: (none)

#### Methods

##### setup() → void

**Returns**: `void`


##### AuthService(unknown: userRepository, unknown: organisationRepository, unknown: accountAdminRepository, IdpServiceFactory(organisationRepository: new, unknown: null, unknown: null, unknown: cognitoAuthService, unknown: keycloakAuthService, unknown: IdpType.cognito, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository | - | - |
| unknown | organisationRepository | - | - |
| unknown | accountAdminRepository | - | - |
| IdpServiceFactory(organisationRepository | new | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | cognitoAuthService | - | - |
| unknown | keycloakAuthService | - | - |
| unknown | IdpType.cognito | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### User() → new

**Returns**: `new`


##### AccountAdmin() → new

**Returns**: `new`


##### shouldThrowExceptionIfUserNotFound() → void

**Returns**: `void`


##### shouldThrowExceptionIfTokenExpired() → void

**Returns**: `void`


##### TokenExpiredException(expired": "token) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expired" | "token | - | - |

**Returns**: `new`


##### shouldAddOrganisationToContext() → void

**Returns**: `void`


##### Organisation() → new

**Returns**: `new`


##### shouldAddRolesToContext() → void

**Returns**: `void`


##### Organisation() → new

**Returns**: `new`


##### shouldSetContextBasedOnUserId() → void

**Returns**: `void`


##### Organisation() → new

**Returns**: `new`




## Functions

### setup() → void

**Returns**: `void`



### AuthService(unknown: userRepository, unknown: organisationRepository, unknown: accountAdminRepository, IdpServiceFactory(organisationRepository: new, unknown: null, unknown: null, unknown: cognitoAuthService, unknown: keycloakAuthService, unknown: IdpType.cognito, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository | - | - |
| unknown | organisationRepository | - | - |
| unknown | accountAdminRepository | - | - |
| IdpServiceFactory(organisationRepository | new | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | cognitoAuthService | - | - |
| unknown | keycloakAuthService | - | - |
| unknown | IdpType.cognito | - | - |
| unknown | null | - | - |

**Returns**: `new`



### User() → new

**Returns**: `new`



### AccountAdmin() → new

**Returns**: `new`



### shouldThrowExceptionIfUserNotFound() → void

**Returns**: `void`



### shouldThrowExceptionIfTokenExpired() → void

**Returns**: `void`



### TokenExpiredException(expired": "token) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expired" | "token | - | - |

**Returns**: `new`



### shouldAddOrganisationToContext() → void

**Returns**: `void`



### Organisation() → new

**Returns**: `new`



### shouldAddRolesToContext() → void

**Returns**: `void`



### Organisation() → new

**Returns**: `new`



### shouldSetContextBasedOnUserId() → void

**Returns**: `void`



### Organisation() → new

**Returns**: `new`


