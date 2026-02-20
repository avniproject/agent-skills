# API Reference: UserGroupRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/UserGroupRepository.java`

---

## Functions

### findByUserIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(userId: Long, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<UserGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<UserGroup>`



### findByName(name: String) → UserGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `UserGroup`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → UserGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `UserGroup`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByUserAndGroupAndIsVoidedFalse(user: User, group: Group) → UserGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| group | Group | - | - |

**Returns**: `UserGroup`



### findByGroup_IdAndIsVoidedFalse(groupId: Long) → List<UserGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | Long | - | - |

**Returns**: `List<UserGroup>`



### findByOrganisationId(organisationId: Long) → List<UserGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `List<UserGroup>`



### deleteAllByGroupIsNotIn(groups: List<Group>) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groups | List<Group> | - | - |

**Returns**: `Long`



### in(unknown: :groups) → group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :groups | - | - |

**Returns**: `group`



### deleteAllByGroupIn(groups: List<Group>) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groups | List<Group> | - | - |

**Returns**: `int`



### existsByUserIdAndLastModifiedDateTimeGreaterThan(userId: Long, lastModifiedDateTime: Date) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |
| lastModifiedDateTime | Date | - | - |

**Returns**: `boolean`



### findByUserAndGroupHasAllPrivilegesTrueAndIsVoidedFalse(user: User) → List<UserGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `List<UserGroup>`


