# API Reference: UserServiceAssociateGroupsTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/UserServiceAssociateGroupsTest.java`

---

## Classes

### UserServiceAssociateGroupsTest

**Inherits from**: (none)

#### Methods

##### setup() → void

**Returns**: `void`


##### UserService(unknown: null, unknown: groupRepository, unknown: userGroupRepository, unknown: null, unknown: null, unknown: null, unknown: idpServiceFactory, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | groupRepository | - | - |
| unknown | userGroupRepository | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | idpServiceFactory | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### UserBuilder() → new

**Returns**: `new`


##### handleNullGroupIds() → void

**Returns**: `void`


##### shouldCreateNewUserGroups() → void

**Returns**: `void`


##### shouldRemoveOldAndCreateNewUserGroup() → void

**Returns**: `void`


##### shouldRemoveTwoGroupsExceptEveryoneUserGroup() → void

**Returns**: `void`


##### shouldRemoveAllExceptEveryoneUserGroup() → void

**Returns**: `void`


##### shouldAddEveryoneByDefaultUserGroup() → void

**Returns**: `void`


##### validateGroupState(isPresent: boolean, targetGrp: UserGroup, userGroupsToSaved: List<UserGroup>, groupId: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isPresent | boolean | - | - |
| targetGrp | UserGroup | - | - |
| userGroupsToSaved | List<UserGroup> | - | - |
| groupId | long | - | - |

**Returns**: `void`


##### findGroup(userGroupsStream: Stream<UserGroup>, groupId: long) → Optional<UserGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroupsStream | Stream<UserGroup> | - | - |
| groupId | long | - | - |

**Returns**: `Optional<UserGroup>`


##### initUserGroup(user: User, group1: Group) → UserGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| group1 | Group | - | - |

**Returns**: `UserGroup`


##### UserGroup() → new

**Returns**: `new`


##### initGroup(id: long) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `Group`


##### Group() → new

**Returns**: `new`




## Functions

### setup() → void

**Returns**: `void`



### UserService(unknown: null, unknown: groupRepository, unknown: userGroupRepository, unknown: null, unknown: null, unknown: null, unknown: idpServiceFactory, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | groupRepository | - | - |
| unknown | userGroupRepository | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | idpServiceFactory | - | - |
| unknown | null | - | - |

**Returns**: `new`



### UserBuilder() → new

**Returns**: `new`



### handleNullGroupIds() → void

**Returns**: `void`



### shouldCreateNewUserGroups() → void

**Returns**: `void`



### shouldRemoveOldAndCreateNewUserGroup() → void

**Returns**: `void`



### shouldRemoveTwoGroupsExceptEveryoneUserGroup() → void

**Returns**: `void`



### shouldRemoveAllExceptEveryoneUserGroup() → void

**Returns**: `void`



### shouldAddEveryoneByDefaultUserGroup() → void

**Returns**: `void`



### validateGroupState(isPresent: boolean, targetGrp: UserGroup, userGroupsToSaved: List<UserGroup>, groupId: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isPresent | boolean | - | - |
| targetGrp | UserGroup | - | - |
| userGroupsToSaved | List<UserGroup> | - | - |
| groupId | long | - | - |

**Returns**: `void`



### findGroup(userGroupsStream: Stream<UserGroup>, groupId: long) → Optional<UserGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroupsStream | Stream<UserGroup> | - | - |
| groupId | long | - | - |

**Returns**: `Optional<UserGroup>`



### initUserGroup(user: User, group1: Group) → UserGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| group1 | Group | - | - |

**Returns**: `UserGroup`



### UserGroup() → new

**Returns**: `new`



### initGroup(id: long) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `Group`



### Group() → new

**Returns**: `new`


