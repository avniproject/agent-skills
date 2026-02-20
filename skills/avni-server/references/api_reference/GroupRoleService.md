# API Reference: GroupRoleService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/GroupRoleService.java`

---

## Classes

### GroupRoleService

**Inherits from**: NonScopeAwareService

#### Methods

##### GroupRoleService(groupRoleRepository: GroupRoleRepository, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoleRepository | GroupRoleRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`


##### saveGroupRole(groupRoleRequest: GroupRoleContract, groupSubjectType: SubjectType, memberSubjectType: SubjectType) → GroupRole

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoleRequest | GroupRoleContract | - | - |
| groupSubjectType | SubjectType | - | - |
| memberSubjectType | SubjectType | - | - |

**Returns**: `GroupRole`


##### GroupRole() → new

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### saveGroupRoles(groupRoleContracts: GroupRoleContract[], organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoleContracts | GroupRoleContract[] | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: groupRoleContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupRoleContract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### GroupRoleService(groupRoleRepository: GroupRoleRepository, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoleRepository | GroupRoleRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`



### saveGroupRole(groupRoleRequest: GroupRoleContract, groupSubjectType: SubjectType, memberSubjectType: SubjectType) → GroupRole

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoleRequest | GroupRoleContract | - | - |
| groupSubjectType | SubjectType | - | - |
| memberSubjectType | SubjectType | - | - |

**Returns**: `GroupRole`



### GroupRole() → new

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### saveGroupRoles(groupRoleContracts: GroupRoleContract[], organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRoleContracts | GroupRoleContract[] | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: groupRoleContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupRoleContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


