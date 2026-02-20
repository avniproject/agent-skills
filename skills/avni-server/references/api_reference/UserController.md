# API Reference: UserController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/UserController.java`

---

## Classes

### UserController

**Inherits from**: (none)

#### Methods

##### UserController(catchmentRepository: CatchmentRepository, userRepository: UserRepository, organisationRepository: OrganisationRepository, userService: UserService, idpServiceFactory: IdpServiceFactory, accountAdminService: AccountAdminService, accountRepository: AccountRepository, accountAdminRepository: AccountAdminRepository, resetSyncService: ResetSyncService, subjectTypeRepository: SubjectTypeRepository, accessControlService: AccessControlService, organisationConfigService: OrganisationConfigService, metabaseService: MetabaseService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRepository | CatchmentRepository | - | - |
| userRepository | UserRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| userService | UserService | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| accountAdminService | AccountAdminService | - | - |
| accountRepository | AccountRepository | - | - |
| accountAdminRepository | AccountAdminRepository | - | - |
| resetSyncService | ResetSyncService | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| accessControlService | AccessControlService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| metabaseService | MetabaseService | - | - |

**Returns**: `public`


##### usernameExists(name: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Boolean`


##### createUser(UserContract: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UserContract | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### ValidationException(username: String.format("Invalid, unknown: userContract.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | userContract.getUsername( | - | - |

**Returns**: `new`


##### ValidationException(%s: String.format("Username, unknown: userContract.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Username | - | - |
| unknown | userContract.getUsername( | - | - |

**Returns**: `new`


##### User() → new

**Returns**: `new`


##### getUser(unknown: @PathVariable("id") → UserContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `UserContract`


##### EntityNotFoundException(not: String.format("User, unknown: id) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("User | - | - |
| unknown | id | - | - |

**Returns**: `new`


##### updateUser(UserContract: @RequestBody, unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UserContract | @RequestBody | - | - |
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`


##### getRegionForUser(userContract: UserContract) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userContract | UserContract | - | - |

**Returns**: `String`


##### emailIsValid(email: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `Boolean`


##### isUserNameInvalid(userName: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userName | String | - | - |

**Returns**: `Boolean`


##### isNameInvalid(name: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Boolean`


##### phoneNumberIsValid(phoneNumber: String, region: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `Boolean`


##### setUserAttributes(user: User, userContract: UserContract, userRegion: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| userContract | UserContract | - | - |
| userRegion | String | - | - |

**Returns**: `User`


##### ValidationException(email: String.format("Invalid, unknown: userContract.getEmail() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String.format("Invalid | - | - |
| unknown | userContract.getEmail( | - | - |

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`


##### ValidationException(username: String.format("Invalid, unknown: userContract.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | userContract.getUsername( | - | - |

**Returns**: `new`


##### ValidationException(name: String.format("Invalid, unknown: userContract.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String.format("Invalid | - | - |
| unknown | userContract.getName( | - | - |

**Returns**: `new`


##### deleteUser(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`


##### disableUser(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`


##### DateTime() → new

**Returns**: `new`


##### resetPassword(ResetPasswordRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ResetPasswordRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### changePassword(ChangePasswordRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ChangePasswordRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### find(=: @RequestParam(value, =: required) → Page<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Page<User>`


##### applyUserPredicates(unknown: username, unknown: name, unknown: email, unknown: phoneNumber, unknown: root, unknown: builder, unknown: predicate) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | username | - | - |
| unknown | name | - | - |
| unknown | email | - | - |
| unknown | phoneNumber | - | - |
| unknown | root | - | - |
| unknown | builder | - | - |
| unknown | predicate | - | - |

**Returns**: `return`


##### applyUserPredicates(=: @RequestParam(value, =: required) → Predicate

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Predicate`


##### findOrgAdmin(=: @RequestParam(value, =: required) → Page<UserContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Page<UserContract>`


##### getOne(unknown: @PathVariable("id") → UserContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `UserContract`


##### getAll() → List<UserWebProjection>

**Returns**: `List<UserWebProjection>`


##### getOwnedAccountIds(user: User) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `List<Long>`


##### setAccountIds(uc: UserContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uc | UserContract | - | - |

**Returns**: `void`


##### getOwnedOrganisationIds(user: User) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `List<Long>`


##### getUsersByOrganisation(unknown: @RequestParam("organisationId") → Page<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @RequestParam("organisationId" | - | - |

**Returns**: `Page<User>`


##### findByIdIn(Long[]: @RequestParam) → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long[] | @RequestParam | - | - |

**Returns**: `List<User>`




## Functions

### UserController(catchmentRepository: CatchmentRepository, userRepository: UserRepository, organisationRepository: OrganisationRepository, userService: UserService, idpServiceFactory: IdpServiceFactory, accountAdminService: AccountAdminService, accountRepository: AccountRepository, accountAdminRepository: AccountAdminRepository, resetSyncService: ResetSyncService, subjectTypeRepository: SubjectTypeRepository, accessControlService: AccessControlService, organisationConfigService: OrganisationConfigService, metabaseService: MetabaseService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRepository | CatchmentRepository | - | - |
| userRepository | UserRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| userService | UserService | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| accountAdminService | AccountAdminService | - | - |
| accountRepository | AccountRepository | - | - |
| accountAdminRepository | AccountAdminRepository | - | - |
| resetSyncService | ResetSyncService | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| accessControlService | AccessControlService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| metabaseService | MetabaseService | - | - |

**Returns**: `public`



### usernameExists(name: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Boolean`



### createUser(UserContract: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UserContract | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### ValidationException(username: String.format("Invalid, unknown: userContract.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | userContract.getUsername( | - | - |

**Returns**: `new`



### ValidationException(%s: String.format("Username, unknown: userContract.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Username | - | - |
| unknown | userContract.getUsername( | - | - |

**Returns**: `new`



### User() → new

**Returns**: `new`



### getUser(unknown: @PathVariable("id") → UserContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `UserContract`



### EntityNotFoundException(not: String.format("User, unknown: id) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("User | - | - |
| unknown | id | - | - |

**Returns**: `new`



### updateUser(UserContract: @RequestBody, unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UserContract | @RequestBody | - | - |
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### getRegionForUser(userContract: UserContract) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userContract | UserContract | - | - |

**Returns**: `String`



### emailIsValid(email: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `Boolean`



### isUserNameInvalid(userName: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userName | String | - | - |

**Returns**: `Boolean`



### isNameInvalid(name: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Boolean`



### phoneNumberIsValid(phoneNumber: String, region: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `Boolean`



### setUserAttributes(user: User, userContract: UserContract, userRegion: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| userContract | UserContract | - | - |
| userRegion | String | - | - |

**Returns**: `User`



### ValidationException(email: String.format("Invalid, unknown: userContract.getEmail() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String.format("Invalid | - | - |
| unknown | userContract.getEmail( | - | - |

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### ValidationException(username: String.format("Invalid, unknown: userContract.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | userContract.getUsername( | - | - |

**Returns**: `new`



### ValidationException(name: String.format("Invalid, unknown: userContract.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String.format("Invalid | - | - |
| unknown | userContract.getName( | - | - |

**Returns**: `new`



### deleteUser(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### disableUser(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### DateTime() → new

**Returns**: `new`



### resetPassword(ResetPasswordRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ResetPasswordRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### changePassword(ChangePasswordRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ChangePasswordRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### find(=: @RequestParam(value, =: required) → Page<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Page<User>`



### applyUserPredicates(unknown: username, unknown: name, unknown: email, unknown: phoneNumber, unknown: root, unknown: builder, unknown: predicate) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | username | - | - |
| unknown | name | - | - |
| unknown | email | - | - |
| unknown | phoneNumber | - | - |
| unknown | root | - | - |
| unknown | builder | - | - |
| unknown | predicate | - | - |

**Returns**: `return`



### applyUserPredicates(=: @RequestParam(value, =: required) → Predicate

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Predicate`



### findOrgAdmin(=: @RequestParam(value, =: required) → Page<UserContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Page<UserContract>`



### getOne(unknown: @PathVariable("id") → UserContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `UserContract`



### getAll() → List<UserWebProjection>

**Returns**: `List<UserWebProjection>`



### getOwnedAccountIds(user: User) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `List<Long>`



### setAccountIds(uc: UserContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uc | UserContract | - | - |

**Returns**: `void`



### getOwnedOrganisationIds(user: User) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `List<Long>`



### getUsersByOrganisation(unknown: @RequestParam("organisationId") → Page<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @RequestParam("organisationId" | - | - |

**Returns**: `Page<User>`



### findByIdIn(Long[]: @RequestParam) → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long[] | @RequestParam | - | - |

**Returns**: `List<User>`


