# API Reference: OrganisationRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/OrganisationRepository.java`

---

## Functions

### findByName(name: String) → Organisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Organisation`



### findByUuid(organisationUuid: String) → Organisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUuid | String | - | - |

**Returns**: `Organisation`



### findOne(organisationId: Long) → Organisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `Organisation`



### findById(unknown: organisationId) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationId | - | - |

**Returns**: `return`



### findAllByIsVoidedFalse() → List<Organisation>

**Returns**: `List<Organisation>`



### findByAccount_AccountAdmin_User_Id(userId: Long) → List<Organisation>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |

**Returns**: `List<Organisation>`



### findByIdAndAccount_AccountAdmin_User_Id(id: Long, userId: Long) → Organisation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| userId | Long | - | - |

**Returns**: `Organisation`



### findAllByIdInAndIsVoidedFalse(ids: Long[], pageable: Pageable) → Page<Organisation>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ids | Long[] | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Organisation>`


