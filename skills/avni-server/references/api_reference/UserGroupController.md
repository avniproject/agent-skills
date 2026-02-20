# API Reference: UserGroupController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/UserGroupController.java`

---

## Functions

### UserGroupController(userGroupRepository: UserGroupRepository, userRepository: UserRepository, groupRepository: GroupRepository, accessControlService: AccessControlService, organisationConfigService: OrganisationConfigService, metabaseService: MetabaseService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroupRepository | UserGroupRepository | - | - |
| userRepository | UserRepository | - | - |
| groupRepository | GroupRepository | - | - |
| accessControlService | AccessControlService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| metabaseService | MetabaseService | - | - |

**Returns**: `public`



### wrap(unknown: userGroupRepository.findByUserIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user.getId() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userGroupRepository.findByUserIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user.getId( | - | - |

**Returns**: `return`



### getById(unknown: @PathVariable("id") → List<UserGroupContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `List<UserGroupContract>`



### getByOrganisationId() → List<UserGroupContract>

**Returns**: `List<UserGroupContract>`



### addUsersToGroup(List<UserGroupContract>: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<UserGroupContract> | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### removeUserFromGroup(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`


