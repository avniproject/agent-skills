# API Reference: GroupRoleRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/GroupRoleRepository.java`

---

## Functions

### findByNameIgnoreCase(name: String) → GroupRole

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `GroupRole`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByName(name: String) → GroupRole

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `GroupRole`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByRole(role: String) → GroupRole

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| role | String | - | - |

**Returns**: `GroupRole`



### findByRoleAndGroupSubjectTypeIdAndIsVoidedFalse(role: String, subjectTypeId: Long) → GroupRole

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| role | String | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `GroupRole`



### findByGroupSubjectType_IdAndIsVoidedFalse(groupSubjectTypeId: Long) → List<GroupRole>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectTypeId | Long | - | - |

**Returns**: `List<GroupRole>`



### findByMemberSubjectTypeAndIsVoidedFalse(subjectType: SubjectType) → List<GroupRole>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `List<GroupRole>`


