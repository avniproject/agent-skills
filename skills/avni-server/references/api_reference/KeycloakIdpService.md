# API Reference: KeycloakIdpService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/KeycloakIdpService.java`

---

## Classes

### KeycloakIdpService

**Inherits from**: IdpServiceImpl

#### Methods

##### EventRepresentation() → new

**Returns**: `new`


##### KeycloakIdpService(springProfiles: SpringProfiles, adapterConfig: AdapterConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| springProfiles | SpringProfiles | - | - |
| adapterConfig | AdapterConfig | - | - |

**Returns**: `public`


##### KeycloakIdpService(realmResource: RealmResource, adapterConfig: AdapterConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| realmResource | RealmResource | - | - |
| adapterConfig | AdapterConfig | - | - |

**Returns**: `public`


##### init() → void

**Returns**: `void`


##### getAuthServerUrl() → set

**Returns**: `set`


##### ResteasyClientBuilderImpl() → new

**Returns**: `new`


##### createUser(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`


##### createInActiveUser(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`


##### UnsupportedOperationException(implemented": "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implemented" | "Not | - | - |

**Returns**: `new`


##### createUserWithPassword(user: User, password: String, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`


##### createSuperAdmin(user: User, password: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `void`


##### createUserWithPassword(user: User, password: String) → UserCreateStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `UserCreateStatus`


##### UserCreateStatus(unknown: user, unknown: UserContextHolder.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |
| unknown | UserContextHolder.getUser( | - | - |

**Returns**: `new`


##### updateUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### disableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### deleteUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### resetPassword(user: User, password: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `boolean`


##### IDPException(unknown: reason, unknown: ex) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | reason | - | - |
| unknown | ex | - | - |

**Returns**: `new`


##### tryReadResponse(ex: BadRequestException) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ex | BadRequestException | - | - |

**Returns**: `String`


##### exists(user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `boolean`


##### getLastLoginTime(user: User) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `long`


##### latest(unknown: current) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | current | - | - |

**Returns**: `the`


##### enableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### resendPassword(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### UnsupportedOperationException(implemented": "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implemented" | "Not | - | - |

**Returns**: `new`


##### getCredentialRepresentation(password: String) → CredentialRepresentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| password | String | - | - |

**Returns**: `CredentialRepresentation`


##### CredentialRepresentation() → new

**Returns**: `new`


##### getUserRepresentation(user: User) → UserRepresentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `UserRepresentation`


##### UserRepresentation() → new

**Returns**: `new`


##### updateUserRepresentation(user: User, userRep: UserRepresentation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| userRep | UserRepresentation | - | - |

**Returns**: `void`


##### enableOrDisableUser(user: User, enable: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| enable | boolean | - | - |

**Returns**: `void`


##### updateThroughUserRepresentation(userRep: UserRepresentation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRep | UserRepresentation | - | - |

**Returns**: `void`


##### getUser(user: User) → UserRepresentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `UserRepresentation`


##### defaultPassword(user: User) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `String`


##### specialChars(unknown: 1) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |

**Returns**: `and`


##### upperCase(unknown: 1) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |

**Returns**: `and`


##### lowerCase(unknown: 1) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |

**Returns**: `and`


##### digits(unknown: 1) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |

**Returns**: `and`


##### notUsername(unknown: undefined) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | undefined | - | - |

**Returns**: `and`


##### notEmail(unknown: undefined) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | undefined | - | - |

**Returns**: `and`


##### CharacterData() → new

**Returns**: `new`


##### getErrorCode() → String

**Returns**: `String`


##### getCharacters() → String

**Returns**: `String`


##### PasswordGenerator() → new

**Returns**: `new`


##### CharacterRule(unknown: EnglishCharacterData.LowerCase, unknown: 1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EnglishCharacterData.LowerCase | - | - |
| unknown | 1 | - | - |

**Returns**: `new`


##### CharacterRule(unknown: EnglishCharacterData.UpperCase, unknown: 1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EnglishCharacterData.UpperCase | - | - |
| unknown | 1 | - | - |

**Returns**: `new`


##### CharacterRule(unknown: EnglishCharacterData.Digit, unknown: 1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EnglishCharacterData.Digit | - | - |
| unknown | 1 | - | - |

**Returns**: `new`


##### CharacterRule(unknown: asciiSpecialCharacters, unknown: 1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | asciiSpecialCharacters | - | - |
| unknown | 1 | - | - |

**Returns**: `new`




## Functions

### EventRepresentation() → new

**Returns**: `new`



### KeycloakIdpService(springProfiles: SpringProfiles, adapterConfig: AdapterConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| springProfiles | SpringProfiles | - | - |
| adapterConfig | AdapterConfig | - | - |

**Returns**: `public`



### KeycloakIdpService(realmResource: RealmResource, adapterConfig: AdapterConfig) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| realmResource | RealmResource | - | - |
| adapterConfig | AdapterConfig | - | - |

**Returns**: `public`



### init() → void

**Returns**: `void`



### getAuthServerUrl() → set

**Returns**: `set`



### ResteasyClientBuilderImpl() → new

**Returns**: `new`



### createUser(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`



### createInActiveUser(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`



### UnsupportedOperationException(implemented": "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implemented" | "Not | - | - |

**Returns**: `new`



### createUserWithPassword(user: User, password: String, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`



### createSuperAdmin(user: User, password: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `void`



### createUserWithPassword(user: User, password: String) → UserCreateStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `UserCreateStatus`



### UserCreateStatus(unknown: user, unknown: UserContextHolder.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |
| unknown | UserContextHolder.getUser( | - | - |

**Returns**: `new`



### updateUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### disableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### deleteUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### resetPassword(user: User, password: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `boolean`



### IDPException(unknown: reason, unknown: ex) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | reason | - | - |
| unknown | ex | - | - |

**Returns**: `new`



### tryReadResponse(ex: BadRequestException) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ex | BadRequestException | - | - |

**Returns**: `String`



### exists(user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `boolean`



### getLastLoginTime(user: User) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `long`



### latest(unknown: current) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | current | - | - |

**Returns**: `the`



### enableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### resendPassword(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### UnsupportedOperationException(implemented": "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implemented" | "Not | - | - |

**Returns**: `new`



### getCredentialRepresentation(password: String) → CredentialRepresentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| password | String | - | - |

**Returns**: `CredentialRepresentation`



### CredentialRepresentation() → new

**Returns**: `new`



### getUserRepresentation(user: User) → UserRepresentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `UserRepresentation`



### UserRepresentation() → new

**Returns**: `new`



### updateUserRepresentation(user: User, userRep: UserRepresentation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| userRep | UserRepresentation | - | - |

**Returns**: `void`



### enableOrDisableUser(user: User, enable: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| enable | boolean | - | - |

**Returns**: `void`



### updateThroughUserRepresentation(userRep: UserRepresentation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRep | UserRepresentation | - | - |

**Returns**: `void`



### getUser(user: User) → UserRepresentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `UserRepresentation`



### defaultPassword(user: User) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `String`



### specialChars(unknown: 1) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |

**Returns**: `and`



### upperCase(unknown: 1) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |

**Returns**: `and`



### lowerCase(unknown: 1) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |

**Returns**: `and`



### digits(unknown: 1) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |

**Returns**: `and`



### notUsername(unknown: undefined) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | undefined | - | - |

**Returns**: `and`



### notEmail(unknown: undefined) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | undefined | - | - |

**Returns**: `and`



### CharacterData() → new

**Returns**: `new`



### getErrorCode() → String

**Returns**: `String`



### getCharacters() → String

**Returns**: `String`



### PasswordGenerator() → new

**Returns**: `new`



### CharacterRule(unknown: EnglishCharacterData.LowerCase, unknown: 1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EnglishCharacterData.LowerCase | - | - |
| unknown | 1 | - | - |

**Returns**: `new`



### CharacterRule(unknown: EnglishCharacterData.UpperCase, unknown: 1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EnglishCharacterData.UpperCase | - | - |
| unknown | 1 | - | - |

**Returns**: `new`



### CharacterRule(unknown: EnglishCharacterData.Digit, unknown: 1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EnglishCharacterData.Digit | - | - |
| unknown | 1 | - | - |

**Returns**: `new`



### CharacterRule(unknown: asciiSpecialCharacters, unknown: 1) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | asciiSpecialCharacters | - | - |
| unknown | 1 | - | - |

**Returns**: `new`


