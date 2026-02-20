# API Reference: GenderRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/GenderRepository.java`

---

## Functions

### findByName(name: String) → Gender

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Gender`



### findByNameAndOrganisationId(name: String, organisationId: Long) → Gender

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| organisationId | Long | - | - |

**Returns**: `Gender`



### findByNameIgnoreCase(name: String) → Gender

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Gender`



### save(gender: Gender) → Gender

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gender | Gender | - | - |

**Returns**: `Gender`



### findOne(id: long) → Gender

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `Gender`



### findById(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`



### findByUuidOrName(name: String, uuid: String) → Gender

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| uuid | String | - | - |

**Returns**: `Gender`


