# API Reference: UserInfoController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/UserInfoController.java`

---

## Functions

### UserInfoController(catchmentRepository: CatchmentRepository, userRepository: UserRepository, organisationRepository: OrganisationRepository, userService: UserService, idpServiceFactory: IdpServiceFactory, organisationConfigService: OrganisationConfigService, groupPrivilegeService: GroupPrivilegeService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRepository | CatchmentRepository | - | - |
| userRepository | UserRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| userService | UserService | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| groupPrivilegeService | GroupPrivilegeService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getUserInfo() → ResponseEntity<UserInfoContract>

**Returns**: `ResponseEntity<UserInfoContract>`



### UserInfoClientContract() → new

**Returns**: `new`



### Organisation() → new

**Returns**: `new`



### getMyProfileOld() → ResponseEntity<UserInfoContract>

**Returns**: `ResponseEntity<UserInfoContract>`



### getUserInfo() → return

**Returns**: `return`



### wrap(PageImpl<>(Arrays.asList(getUserInfoObject(organisation: new, unknown: user) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Arrays.asList(getUserInfoObject(organisation | new | - | - |
| unknown | user | - | - |

**Returns**: `return`



### wrap(SliceImpl<>(Arrays.asList(getUserInfoObject(organisation: new, unknown: user) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Arrays.asList(getUserInfoObject(organisation | new | - | - |
| unknown | user | - | - |

**Returns**: `return`



### getUserInfoObject(organisation: Organisation, user: User) → UserInfoContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `UserInfoContract`



### UserInfoClientContract(unknown: user.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user.getUsername( | - | - |

**Returns**: `new`



### saveMyProfile(UserInfoContract: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UserInfoContract | @RequestBody | - | - |

**Returns**: `void`



### save(UserBulkUploadContract[]: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| UserBulkUploadContract[] | @RequestBody | - | - |

**Returns**: `void`



### User() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### getOrganisationId(userContract: UserBulkUploadContract) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userContract | UserBulkUploadContract | - | - |

**Returns**: `Long`



### RuntimeException(found:: "Not, unknown: id=null}") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| found: | "Not | - | - |
| unknown | id=null}" | - | - |

**Returns**: `new`



### RuntimeException(found:: String.format("Not, unknown: uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| found: | String.format("Not | - | - |
| unknown | uuid | - | - |

**Returns**: `new`


