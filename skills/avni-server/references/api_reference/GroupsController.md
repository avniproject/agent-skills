# API Reference: GroupsController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/GroupsController.java`

---

## Functions

### GroupsController(groupRepository: GroupRepository, groupsService: GroupsService, accessControlService: AccessControlService, userGroupRepository: UserGroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRepository | GroupRepository | - | - |
| groupsService | GroupsService | - | - |
| accessControlService | AccessControlService | - | - |
| userGroupRepository | UserGroupRepository | - | - |

**Returns**: `public`



### wrap(unknown: groupContracts) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupContracts | - | - |

**Returns**: `return`



### findAllById(unknown: @Param("ids") → List<GroupContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `List<GroupContract>`



### wrap(unknown: groupContracts) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupContracts | - | - |

**Returns**: `return`



### getAll() → List<Group>

**Returns**: `List<Group>`



### saveGroup(GroupContract: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| GroupContract | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### updateGroup(Group: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Group | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### voidGroup(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`


