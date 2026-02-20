# API Reference: UserApiController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/api/UserApiController.java`

---

## Classes

### UserApiController

**Inherits from**: (none)

#### Methods

##### UserApiController(authService: AuthService, userRepository: UserRepository, idpServiceFactory: IdpServiceFactory, accessControlService: AccessControlService, organisationConfigRepository: OrganisationConfigRepository, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| userRepository | UserRepository | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| accessControlService | AccessControlService | - | - |
| organisationConfigRepository | OrganisationConfigRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`


##### generateTokenForUser(GenerateTokenRequest: @RequestBody) → ResponseEntity<GenerateTokenResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| GenerateTokenRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<GenerateTokenResult>`


##### BadRequestError(has: "User) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| has | "User | - | - |

**Returns**: `new`


##### BadRequestError(has: "User) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| has | "User | - | - |

**Returns**: `new`


##### EntityNotFoundException(not-found: "User) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not-found | "User | - | - |

**Returns**: `new`


##### GenerateTokenResult(unknown: authService.generateTokenForUser(user.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authService.generateTokenForUser(user.getUsername( | - | - |

**Returns**: `new`


##### createInactiveUser(CreateUserRequest: @RequestBody) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| CreateUserRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<String>`


##### User() → new

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### enableUser(EnableUserRequest: @RequestBody) → ResponseEntity<EnableUserResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EnableUserRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<EnableUserResponse>`


##### EnableUserResponse() → new

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`




## Functions

### UserApiController(authService: AuthService, userRepository: UserRepository, idpServiceFactory: IdpServiceFactory, accessControlService: AccessControlService, organisationConfigRepository: OrganisationConfigRepository, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| userRepository | UserRepository | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| accessControlService | AccessControlService | - | - |
| organisationConfigRepository | OrganisationConfigRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`



### generateTokenForUser(GenerateTokenRequest: @RequestBody) → ResponseEntity<GenerateTokenResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| GenerateTokenRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<GenerateTokenResult>`



### BadRequestError(has: "User) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| has | "User | - | - |

**Returns**: `new`



### BadRequestError(has: "User) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| has | "User | - | - |

**Returns**: `new`



### EntityNotFoundException(not-found: "User) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not-found | "User | - | - |

**Returns**: `new`



### GenerateTokenResult(unknown: authService.generateTokenForUser(user.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | authService.generateTokenForUser(user.getUsername( | - | - |

**Returns**: `new`



### createInactiveUser(CreateUserRequest: @RequestBody) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| CreateUserRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<String>`



### User() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### enableUser(EnableUserRequest: @RequestBody) → ResponseEntity<EnableUserResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EnableUserRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<EnableUserResponse>`



### EnableUserResponse() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`


