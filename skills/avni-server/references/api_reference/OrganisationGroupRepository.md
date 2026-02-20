# API Reference: OrganisationGroupRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/OrganisationGroupRepository.java`

---

## Functions

### findByName(orgGroupName: String) → OrganisationGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgGroupName | String | - | - |

**Returns**: `OrganisationGroup`



### findOne(id: Long) → OrganisationGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `OrganisationGroup`



### findById(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`



### findByAccount_AccountAdmin_User_Id(userId: Long, pageable: Pageable) → Page<OrganisationGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<OrganisationGroup>`



### findByIdAndAccount_AccountAdmin_User_Id(id: Long, userId: Long) → OrganisationGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| userId | Long | - | - |

**Returns**: `OrganisationGroup`


