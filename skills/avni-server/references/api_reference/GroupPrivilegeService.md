# API Reference: GroupPrivilegeService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/accessControl/GroupPrivilegeService.java`

---

## Classes

### GroupPrivilegeService

**Inherits from**: NonScopeAwareService

#### Methods

##### GroupPrivilegeService(groupRepository: GroupRepository, privilegeRepository: PrivilegeRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, checklistDetailRepository: ChecklistDetailRepository, formMappingRepository: FormMappingRepository, groupPrivilegeRepository: GroupPrivilegeRepository, userGroupRepository: UserGroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRepository | GroupRepository | - | - |
| privilegeRepository | PrivilegeRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| groupPrivilegeRepository | GroupPrivilegeRepository | - | - |
| userGroupRepository | UserGroupRepository | - | - |

**Returns**: `public`


##### isGroupSubjectTypePrivilege(subjectType: SubjectType, privilege: Privilege) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| privilege | Privilege | - | - |

**Returns**: `boolean`


##### getAllGroupPrivileges(groupId: long) → List<GroupPrivilege>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | long | - | - |

**Returns**: `List<GroupPrivilege>`


##### GroupPrivilege() → new

**Returns**: `new`


##### GroupPrivilege() → new

**Returns**: `new`


##### GroupPrivilege() → new

**Returns**: `new`


##### GroupPrivilege() → new

**Returns**: `new`


##### GroupPrivilege() → new

**Returns**: `new`


##### GroupPrivilege() → new

**Returns**: `new`


##### GroupPrivilege() → new

**Returns**: `new`


##### savePrivilegesFromBundle(groupPrivilegeBundleContracts: GroupPrivilegeBundleContract[], organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivilegeBundleContracts | GroupPrivilegeBundleContract[] | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### GroupPrivilege() → new

**Returns**: `new`


##### BulkItemSaveException(unknown: groupPrivilegeBundleContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupPrivilegeBundleContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### getGroup(request: GroupPrivilegeContractWeb, organisation: Organisation, groups: List<Group>) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | GroupPrivilegeContractWeb | - | - |
| organisation | Organisation | - | - |
| groups | List<Group> | - | - |

**Returns**: `Group`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getExplicitGroupPrivileges(user: User) → GroupPrivileges

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `GroupPrivileges`


##### GroupPrivileges(unknown: false, unknown: privileges) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | privileges | - | - |

**Returns**: `new`


##### getGroupPrivileges() → GroupPrivileges

**Returns**: `GroupPrivileges`


##### GroupPrivileges() → new

**Returns**: `new`


##### GroupPrivileges(unknown: false, unknown: privileges) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | privileges | - | - |

**Returns**: `new`


##### userHasAllPrivileges() → boolean

**Returns**: `boolean`




## Functions

### GroupPrivilegeService(groupRepository: GroupRepository, privilegeRepository: PrivilegeRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, checklistDetailRepository: ChecklistDetailRepository, formMappingRepository: FormMappingRepository, groupPrivilegeRepository: GroupPrivilegeRepository, userGroupRepository: UserGroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRepository | GroupRepository | - | - |
| privilegeRepository | PrivilegeRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| groupPrivilegeRepository | GroupPrivilegeRepository | - | - |
| userGroupRepository | UserGroupRepository | - | - |

**Returns**: `public`



### isGroupSubjectTypePrivilege(subjectType: SubjectType, privilege: Privilege) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| privilege | Privilege | - | - |

**Returns**: `boolean`



### getAllGroupPrivileges(groupId: long) → List<GroupPrivilege>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | long | - | - |

**Returns**: `List<GroupPrivilege>`



### GroupPrivilege() → new

**Returns**: `new`



### GroupPrivilege() → new

**Returns**: `new`



### GroupPrivilege() → new

**Returns**: `new`



### GroupPrivilege() → new

**Returns**: `new`



### GroupPrivilege() → new

**Returns**: `new`



### GroupPrivilege() → new

**Returns**: `new`



### GroupPrivilege() → new

**Returns**: `new`



### savePrivilegesFromBundle(groupPrivilegeBundleContracts: GroupPrivilegeBundleContract[], organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivilegeBundleContracts | GroupPrivilegeBundleContract[] | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### GroupPrivilege() → new

**Returns**: `new`



### BulkItemSaveException(unknown: groupPrivilegeBundleContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupPrivilegeBundleContract | - | - |
| unknown | e | - | - |

**Returns**: `new`



### getGroup(request: GroupPrivilegeContractWeb, organisation: Organisation, groups: List<Group>) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | GroupPrivilegeContractWeb | - | - |
| organisation | Organisation | - | - |
| groups | List<Group> | - | - |

**Returns**: `Group`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getExplicitGroupPrivileges(user: User) → GroupPrivileges

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `GroupPrivileges`



### GroupPrivileges(unknown: false, unknown: privileges) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | privileges | - | - |

**Returns**: `new`



### getGroupPrivileges() → GroupPrivileges

**Returns**: `GroupPrivileges`



### GroupPrivileges() → new

**Returns**: `new`



### GroupPrivileges(unknown: false, unknown: privileges) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | privileges | - | - |

**Returns**: `new`



### userHasAllPrivileges() → boolean

**Returns**: `boolean`


