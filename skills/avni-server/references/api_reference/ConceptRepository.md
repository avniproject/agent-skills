# API Reference: ConceptRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/ConceptRepository.java`

---

## Functions

### findByNameAndOrganisationId(name: String, organisationIds: List<Long>) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| organisationIds | List<Long> | - | - |

**Returns**: `Concept`



### buildOrganisationIdList() → List<Long>

**Returns**: `List<Long>`



### addOrganisation(organisationIds: List<Long>, organisation: Organisation, organisationRepository: OrganisationRepository) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIds | List<Long> | - | - |
| organisation | Organisation | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `void`



### findByName(name: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Concept`



### findByIsVoidedFalseAndNameIgnoreCaseContaining(name: String, pageable: Pageable) → Page<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Concept>`



### findAllByDataType(dataType: String) → List<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataType | String | - | - |

**Returns**: `List<Concept>`



### findAllByDataTypeInAndIsVoidedFalse(conceptDataTypes: List<String>) → List<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptDataTypes | List<String> | - | - |

**Returns**: `List<Concept>`



### findByIsVoidedFalseAndDataType(dataType: String) → List<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataType | String | - | - |

**Returns**: `List<Concept>`



### findByIsVoidedFalseAndActiveTrueAndNameIgnoreCaseContains(name: String) → List<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `List<Concept>`



### findByIsVoidedFalseAndActiveTrueAndDataTypeAndNameIgnoreCaseContains(dataType: String, name: String) → List<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataType | String | - | - |
| name | String | - | - |

**Returns**: `List<Concept>`



### findAllByMediaNotNull() → List<Concept>

**Returns**: `List<Concept>`



### findByUuidAndOrganisationId(uuid: String, organisationIds: List<Long>) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| organisationIds | List<Long> | - | - |

**Returns**: `Concept`



### findByUuid(uuid: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `Concept`



### getAllNonVoidedConcepts(pageable: Pageable) → Page<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<Concept>`



### getAllNames() → List<String>

**Returns**: `List<String>`



### getAllConceptByUuidIn(uuid: List<String>) → List<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | List<String> | - | - |

**Returns**: `List<Concept>`



### findByUuidIn([]: String, pageable: Pageable) → Page<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| [] | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Concept>`



### findAllByUuidInAndDataTypeIn(uuids: String[], dataTypes: String[]) → List<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuids | String[] | - | - |
| dataTypes | String[] | - | - |

**Returns**: `List<Concept>`



### findByIsVoidedFalseAndNameIgnoreCaseContainsAndDataTypeIn(name: String, includedDataTypes: List<String>) → List<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| includedDataTypes | List<String> | - | - |

**Returns**: `List<Concept>`



### findDashboardFilterConcepts(namePart: String) → List<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| namePart | String | - | - |

**Returns**: `List<Concept>`



### findByIsVoidedFalseAndNameIgnoreCaseContainsAndDataTypeIn(unknown: namePart, unknown: supportedDataTypes) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | namePart | - | - |
| unknown | supportedDataTypes | - | - |

**Returns**: `return`



### findByNameOrUuid(name: String, uuid: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| uuid | String | - | - |

**Returns**: `Concept`


