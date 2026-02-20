# API Reference: IdpServiceFactory.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/IdpServiceFactory.java`

---

## Classes

### IdpServiceFactory

**Inherits from**: (none)

#### Methods

##### IdpServiceFactory() → public

**Returns**: `public`


##### IdpServiceFactory(organisationRepository: OrganisationRepository, cognitoIdpService: CognitoIdpService, keycloakIdpService: KeycloakIdpService, cognitoAuthService: CognitoAuthServiceImpl, keycloakAuthService: KeycloakAuthService, idpType: IdpType, organisationConfigService: OrganisationConfigService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationRepository | OrganisationRepository | - | - |
| cognitoIdpService | CognitoIdpService | - | - |
| keycloakIdpService | KeycloakIdpService | - | - |
| cognitoAuthService | CognitoAuthServiceImpl | - | - |
| keycloakAuthService | KeycloakAuthService | - | - |
| idpType | IdpType | - | - |
| organisationConfigService | OrganisationConfigService | - | - |

**Returns**: `public`


##### getIdpService() → IdpService

**Returns**: `IdpService`


##### getIdpService(organisation: Organisation) → IdpService

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `IdpService`


##### getIdpService(user: User, isAdmin: boolean) → IdpService

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| isAdmin | boolean | - | - |

**Returns**: `IdpService`


##### getIdpService() → return

**Returns**: `return`


##### getIdpService(unknown: organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |

**Returns**: `return`


##### getAuthService() → IAMAuthService

**Returns**: `IAMAuthService`


##### CompositeIAMAuthService(unknown: cognitoAuthService, unknown: keycloakAuthService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cognitoAuthService | - | - |
| unknown | keycloakAuthService | - | - |

**Returns**: `new`


##### NoIAMAuthService() → new

**Returns**: `new`


##### RuntimeException(%s: String.format("IdpType:, unknown: idpType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("IdpType: | - | - |
| unknown | idpType | - | - |

**Returns**: `new`


##### getSettings(organisation: Organisation) → Settings

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Settings`


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


##### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`


##### getUserFromToken(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`


##### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`




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


##### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`




### NoIAMAuthService

**Inherits from**: IAMAuthService

#### Methods

##### getUserFromToken(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`


##### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`




## Functions

### IdpServiceFactory() → public

**Returns**: `public`



### IdpServiceFactory(organisationRepository: OrganisationRepository, cognitoIdpService: CognitoIdpService, keycloakIdpService: KeycloakIdpService, cognitoAuthService: CognitoAuthServiceImpl, keycloakAuthService: KeycloakAuthService, idpType: IdpType, organisationConfigService: OrganisationConfigService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationRepository | OrganisationRepository | - | - |
| cognitoIdpService | CognitoIdpService | - | - |
| keycloakIdpService | KeycloakIdpService | - | - |
| cognitoAuthService | CognitoAuthServiceImpl | - | - |
| keycloakAuthService | KeycloakAuthService | - | - |
| idpType | IdpType | - | - |
| organisationConfigService | OrganisationConfigService | - | - |

**Returns**: `public`



### getIdpService() → IdpService

**Returns**: `IdpService`



### getIdpService(organisation: Organisation) → IdpService

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `IdpService`



### getIdpService(user: User, isAdmin: boolean) → IdpService

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| isAdmin | boolean | - | - |

**Returns**: `IdpService`



### getIdpService() → return

**Returns**: `return`



### getIdpService(unknown: organisation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |

**Returns**: `return`



### getAuthService() → IAMAuthService

**Returns**: `IAMAuthService`



### CompositeIAMAuthService(unknown: cognitoAuthService, unknown: keycloakAuthService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cognitoAuthService | - | - |
| unknown | keycloakAuthService | - | - |

**Returns**: `new`



### NoIAMAuthService() → new

**Returns**: `new`



### RuntimeException(%s: String.format("IdpType:, unknown: idpType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("IdpType: | - | - |
| unknown | idpType | - | - |

**Returns**: `new`



### getSettings(organisation: Organisation) → Settings

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Settings`



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



### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`



### getUserFromToken(token: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| token | String | - | - |

**Returns**: `User`



### generateTokenForUser(username: String, password: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `String`


