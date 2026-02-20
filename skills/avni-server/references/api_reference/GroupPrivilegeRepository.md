# API Reference: GroupPrivilegeRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/GroupPrivilegeRepository.java`

---

## Functions

### findByName(name: String) → GroupPrivilege

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `GroupPrivilege`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → GroupPrivilege

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `GroupPrivilege`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByGroup_IdAndImplVersion(groupId: Long, implVersion: int) → List<GroupPrivilege>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | Long | - | - |
| implVersion | int | - | - |

**Returns**: `List<GroupPrivilege>`



### getAllAllowedPrivilegesForUser(userId: Long) → List<GroupPrivilege>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |

**Returns**: `List<GroupPrivilege>`



### findBySubjectTypeIsNotNullAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<GroupPrivilege>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<GroupPrivilege>`



### existsByLastModifiedDateTimeGreaterThan(unknown: @Param("lastModifiedDateTime") → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `boolean`



### existsByLastModifiedDateTimeGreaterThan(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### existsByLastModifiedDateTimeGreaterThan(==: lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| == | lastModifiedDateTime | - | - |

**Returns**: `return`



### saveGroupPrivilege(groupPrivilege: GroupPrivilege) → GroupPrivilege

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivilege | GroupPrivilege | - | - |

**Returns**: `GroupPrivilege`



### saveAllGroupPrivileges(groupPrivileges: List<GroupPrivilege>) → List<GroupPrivilege>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivileges | List<GroupPrivilege> | - | - |

**Returns**: `List<GroupPrivilege>`



### findByImplVersion(implVersion: int) → List<GroupPrivilege>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implVersion | int | - | - |

**Returns**: `List<GroupPrivilege>`


