# API Reference: EncounterRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/EncounterRepository.java`

---

## Functions

### findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Encounter>`



### findByIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId: long, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | long | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Encounter>`



### syncTypeIdSpecification(typeId: Long) → Specification<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| typeId | Long | - | - |

**Returns**: `Specification<Encounter>`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### count(unknown: syncEntityChangedAuditSpecification(syncParameters) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncEntityChangedAuditSpecification(syncParameters | - | - |

**Returns**: `return`



### count(unknown: enc.id) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enc.id | - | - |

**Returns**: `select`



### and(notnull: enc.encounter_date_time) → encounterTypeUUID

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| notnull | enc.encounter_date_time | - | - |

**Returns**: `encounterTypeUUID`



### getMaxEncounterCountBetween(encounterTypeUUID: String, startDate: Calendar, endDate: Calendar) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUUID | String | - | - |
| startDate | Calendar | - | - |
| endDate | Calendar | - | - |

**Returns**: `Long`



### count(unknown: enc.id) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enc.id | - | - |

**Returns**: `select`



### and(notnull: enc.encounter_date_time) → encounterTypeUUID

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| notnull | enc.encounter_date_time | - | - |

**Returns**: `encounterTypeUUID`



### getMaxEncounterCount(encounterTypeUUID: String) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUUID | String | - | - |

**Returns**: `Long`



### getMaxEncounterCount(encounterTypeUUID: String, startDate: Calendar, endDate: Calendar) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUUID | String | - | - |
| startDate | Calendar | - | - |
| endDate | Calendar | - | - |

**Returns**: `Long`



### findByLegacyIdOrUuid(id: String) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `Encounter`



### findByLegacyId(id: String) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `Encounter`



### withIndividualId(id: Long) → Specification<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `Specification<Encounter>`



### withEncounterEarliestVisitDateTime(earliestVisitDateTime: DateTime) → Specification<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| earliestVisitDateTime | DateTime | - | - |

**Returns**: `Specification<Encounter>`



### withEncounterDateTime(encounterDateTime: DateTime) → Specification<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDateTime | DateTime | - | - |

**Returns**: `Specification<Encounter>`



### withNotNullEncounterDateTime() → Specification<Encounter>

**Returns**: `Specification<Encounter>`



### withVoidedFalse() → Specification<Encounter>

**Returns**: `Specification<Encounter>`



### withNotNullCancelDateTime() → Specification<Encounter>

**Returns**: `Specification<Encounter>`



### withEncounterTypeIdUuids(encounterTypeUuids: List<String>) → Specification<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUuids | List<String> | - | - |

**Returns**: `Specification<Encounter>`



### findByEncounterTypeSpec(encounterType: String) → Specification<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | String | - | - |

**Returns**: `Specification<Encounter>`



### findBySubjectUUIDSpec(subjectUUID: String) → Specification<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectUUID | String | - | - |

**Returns**: `Specification<Encounter>`



### findByConcepts(lastModifiedDateTime: Date, now: Date, unknown: Map<Concept, concepts: String>, pageable: Pageable) → Page<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| unknown | Map<Concept | - | - |
| concepts | String> | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Encounter>`



### findAll(unknown: lastModifiedBetween(lastModifiedDateTime, unknown: now) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedBetween(lastModifiedDateTime | - | - |
| unknown | now | - | - |

**Returns**: `return`



### findByConceptsAndEncounterType(lastModifiedDateTime: Date, now: Date, unknown: Map<Concept, concepts: String>, encounterType: String, pageable: Pageable) → Page<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| unknown | Map<Concept | - | - |
| concepts | String> | - | - |
| encounterType | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Encounter>`



### findAll(unknown: lastModifiedBetween(lastModifiedDateTime, unknown: now) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedBetween(lastModifiedDateTime | - | - |
| unknown | now | - | - |

**Returns**: `return`



### findByConceptsAndEncounterTypeAndSubject(lastModifiedDateTime: Date, now: Date, unknown: Map<Concept, concepts: String>, encounterType: String, subjectUUID: String, pageable: Pageable) → Page<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| unknown | Map<Concept | - | - |
| concepts | String> | - | - |
| encounterType | String | - | - |
| subjectUUID | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Encounter>`



### findAll(unknown: lastModifiedBetween(lastModifiedDateTime, unknown: now) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedBetween(lastModifiedDateTime | - | - |
| unknown | now | - | - |

**Returns**: `return`



### updateSyncAttributesForIndividual(individualId: Long, addressId: Long, syncAttribute1Value: String, syncAttribute2Value: String, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualId | Long | - | - |
| addressId | Long | - | - |
| syncAttribute1Value | String | - | - |
| syncAttribute2Value | String | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### updateSyncAttributesForIndividual(individualId: Long, addressId: Long, syncAttribute1Value: String, syncAttribute2Value: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualId | Long | - | - |
| addressId | Long | - | - |
| syncAttribute1Value | String | - | - |
| syncAttribute2Value | String | - | - |

**Returns**: `void`



### updateConceptSyncAttributesForSubjectType(subjectTypeId: Long, syncAttribute1: String, syncAttribute2: String, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| syncAttribute1 | String | - | - |
| syncAttribute2 | String | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### updateConceptSyncAttributesForSubjectType(subjectTypeId: Long, syncAttribute1: String, syncAttribute2: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| syncAttribute1 | String | - | - |
| syncAttribute2 | String | - | - |

**Returns**: `void`



### voidSubjectItemsAt(addressId: Long, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressId | Long | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### voidSubjectItemsAt(address: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| address | AddressLevel | - | - |

**Returns**: `void`


