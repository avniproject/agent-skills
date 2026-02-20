# API Reference: GroupsService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/GroupsService.java`

---

## Classes

### GroupsService

**Inherits from**: NonScopeAwareService

#### Methods

##### GroupsService(groupRepository: GroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRepository | GroupRepository | - | - |

**Returns**: `public`


##### createNewGroup(groupContract: GroupContract, organisation: Organisation) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupContract | GroupContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `Group`


##### Group() → new

**Returns**: `new`


##### saveGroup(groupContract: GroupContract, organisation: Organisation) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupContract | GroupContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `Group`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### saveGroups(groupContracts: GroupContract[], organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupContracts | GroupContract[] | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: groupContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupContract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### GroupsService(groupRepository: GroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupRepository | GroupRepository | - | - |

**Returns**: `public`



### createNewGroup(groupContract: GroupContract, organisation: Organisation) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupContract | GroupContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `Group`



### Group() → new

**Returns**: `new`



### saveGroup(groupContract: GroupContract, organisation: Organisation) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupContract | GroupContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `Group`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### saveGroups(groupContracts: GroupContract[], organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupContracts | GroupContract[] | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: groupContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


