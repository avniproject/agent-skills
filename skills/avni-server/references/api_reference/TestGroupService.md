# API Reference: TestGroupService.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/builder/TestGroupService.java`

---

## Classes

### TestGroupService

**Inherits from**: (none)

#### Methods

##### TestGroupService(groupRepository: GroupRepository, groupPrivilegeRepository: GroupPrivilegeRepository, privilegeRepository: PrivilegeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRepository | GroupRepository | - | - |
| groupPrivilegeRepository | GroupPrivilegeRepository | - | - |
| privilegeRepository | PrivilegeRepository | - | - |

**Returns**: `public`


##### updateGroup(group: Group, unknown: Map<GroupPrivilege, groupPrivileges: PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| unknown | Map<GroupPrivilege | - | - |
| groupPrivileges | PrivilegeType> | - | - |

**Returns**: `void`


##### givePrivilege(group: Group, groupPrivilege: GroupPrivilege, privilegeType: PrivilegeType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| groupPrivilege | GroupPrivilege | - | - |
| privilegeType | PrivilegeType | - | - |

**Returns**: `void`


##### giveViewSubjectPrivilegeTo(group: Group, ...: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| ... | SubjectType | - | - |

**Returns**: `void`


##### TestGroupPrivilegeBuilder() → new

**Returns**: `new`


##### giveEditSubjectPrivilegeTo(group: Group, ...: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| ... | SubjectType | - | - |

**Returns**: `void`


##### TestGroupPrivilegeBuilder() → new

**Returns**: `new`


##### giveViewProgramPrivilegeTo(group: Group, subjectType: SubjectType, programs: Program...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| subjectType | SubjectType | - | - |
| programs | Program... | - | - |

**Returns**: `void`


##### TestGroupPrivilegeBuilder() → new

**Returns**: `new`


##### giveMultiTxEntityTypeUpdatePrivilegeTo(group: Group) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |

**Returns**: `void`


##### TestGroupPrivilegeBuilder() → new

**Returns**: `new`




## Functions

### TestGroupService(groupRepository: GroupRepository, groupPrivilegeRepository: GroupPrivilegeRepository, privilegeRepository: PrivilegeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRepository | GroupRepository | - | - |
| groupPrivilegeRepository | GroupPrivilegeRepository | - | - |
| privilegeRepository | PrivilegeRepository | - | - |

**Returns**: `public`



### updateGroup(group: Group, unknown: Map<GroupPrivilege, groupPrivileges: PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| unknown | Map<GroupPrivilege | - | - |
| groupPrivileges | PrivilegeType> | - | - |

**Returns**: `void`



### givePrivilege(group: Group, groupPrivilege: GroupPrivilege, privilegeType: PrivilegeType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| groupPrivilege | GroupPrivilege | - | - |
| privilegeType | PrivilegeType | - | - |

**Returns**: `void`



### giveViewSubjectPrivilegeTo(group: Group, ...: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| ... | SubjectType | - | - |

**Returns**: `void`



### TestGroupPrivilegeBuilder() → new

**Returns**: `new`



### giveEditSubjectPrivilegeTo(group: Group, ...: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| ... | SubjectType | - | - |

**Returns**: `void`



### TestGroupPrivilegeBuilder() → new

**Returns**: `new`



### giveViewProgramPrivilegeTo(group: Group, subjectType: SubjectType, programs: Program...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |
| subjectType | SubjectType | - | - |
| programs | Program... | - | - |

**Returns**: `void`



### TestGroupPrivilegeBuilder() → new

**Returns**: `new`



### giveMultiTxEntityTypeUpdatePrivilegeTo(group: Group) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |

**Returns**: `void`



### TestGroupPrivilegeBuilder() → new

**Returns**: `new`


