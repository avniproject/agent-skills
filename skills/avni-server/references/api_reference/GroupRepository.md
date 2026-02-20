# API Reference: GroupRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/GroupRepository.java`

---

## Functions

### findByNameAndOrganisationId(name: String, organisationId: Long) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| organisationId | Long | - | - |

**Returns**: `Group`



### findByIdAndOrganisationId(groupId: Long, organisationId: Long) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | Long | - | - |
| organisationId | Long | - | - |

**Returns**: `Group`



### deleteAllByNameNot(name: String) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Long`



### findAllByName(name: String) → List<Group>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `List<Group>`



### findByIdInAndIsVoidedFalse(ids: Long[]) → List<Group>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ids | Long[] | - | - |

**Returns**: `List<Group>`



### findByNameNotAndIsVoidedFalse(name: String, pageable: Pageable) → Page<Group>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Group>`


