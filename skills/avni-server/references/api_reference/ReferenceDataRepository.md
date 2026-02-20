# API Reference: ReferenceDataRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/ReferenceDataRepository.java`

---

## Functions

### findByName(name: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `T`



### findByNameIgnoreCase(name: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `T`



### findPageByIsVoidedFalse(pageable: Pageable) → Page<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<T>`



### findByIsVoidedFalse() → List<T>

**Returns**: `List<T>`



### findAllByOrganisationId(organisationId: Long) → List<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `List<T>`



### findAllByOrganisationId(organisationId: Long, pageable: Pageable) → Page<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<T>`



### save(entity: S) → S

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | S | - | - |

**Returns**: `S`



### findOne(id: Long) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `T`



### findById(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`



### findByUuidOrName(uuid: String, name: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| name | String | - | - |

**Returns**: `T`



### findAllByUuidIn(uuids: List<String>) → List<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuids | List<String> | - | - |

**Returns**: `List<T>`


