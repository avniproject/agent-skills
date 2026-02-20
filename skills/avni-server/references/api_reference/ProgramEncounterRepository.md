# API Reference: ProgramEncounterRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/ProgramEncounterRepository.java`

---

## Classes

### SearchParams

**Inherits from**: (none)

#### Methods

##### SearchParams(lastModifiedDateTime: Date, now: Date, unknown: Map<Concept, conceptsMatchingValue: String>, encounterType: EncounterType, programEnrolment: ProgramEnrolment) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| unknown | Map<Concept | - | - |
| conceptsMatchingValue | String> | - | - |
| encounterType | EncounterType | - | - |
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `public`




## Functions

### findByProgramEnrolmentIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId: long, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | long | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ProgramEncounter>`



### syncTypeIdSpecification(typeId: Long) → Specification<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| typeId | Long | - | - |

**Returns**: `Specification<ProgramEncounter>`



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



### and(notnull: enc.encounter_date_time) → programEncounterTypeUUID

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| notnull | enc.encounter_date_time | - | - |

**Returns**: `programEncounterTypeUUID`



### getMaxProgramEncounterCountBetween(programEncounterTypeUUID: String, startDate: Calendar, endDate: Calendar) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterTypeUUID | String | - | - |
| startDate | Calendar | - | - |
| endDate | Calendar | - | - |

**Returns**: `Long`



### count(unknown: enc.id) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enc.id | - | - |

**Returns**: `select`



### and(notnull: enc.encounter_date_time) → programEncounterTypeUUID

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| notnull | enc.encounter_date_time | - | - |

**Returns**: `programEncounterTypeUUID`



### getMaxProgramEncounterCount(programEncounterTypeUUID: String) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterTypeUUID | String | - | - |

**Returns**: `Long`



### getMaxProgramEncounterCount(encounterTypeUUID: String, startDate: Calendar, endDate: Calendar) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUUID | String | - | - |
| startDate | Calendar | - | - |
| endDate | Calendar | - | - |

**Returns**: `Long`



### findByLegacyIdOrUuid(id: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `ProgramEncounter`



### findByLegacyId(id: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `ProgramEncounter`



### withProgramEncounterId(id: Long) → Specification<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `Specification<ProgramEncounter>`



### withProgramEncounterEarliestVisitDateTime(earliestVisitDateTime: DateTime) → Specification<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| earliestVisitDateTime | DateTime | - | - |

**Returns**: `Specification<ProgramEncounter>`



### withProgramEncounterDateTime(encounterDateTime: DateTime) → Specification<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDateTime | DateTime | - | - |

**Returns**: `Specification<ProgramEncounter>`



### withNotNullEncounterDateTime() → Specification<ProgramEncounter>

**Returns**: `Specification<ProgramEncounter>`



### withVoidedFalse() → Specification<ProgramEncounter>

**Returns**: `Specification<ProgramEncounter>`



### withNotNullCancelDateTime() → Specification<ProgramEncounter>

**Returns**: `Specification<ProgramEncounter>`



### withProgramEncounterTypeIdUuids(encounterTypeUuids: List<String>) → Specification<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUuids | List<String> | - | - |

**Returns**: `Specification<ProgramEncounter>`



### withEncounterType(encounterType: EncounterType) → Specification<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EncounterType | - | - |

**Returns**: `Specification<ProgramEncounter>`



### withProgramEnrolment(programEnrolment: ProgramEnrolment) → Specification<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `Specification<ProgramEncounter>`



### search(searchParams: SearchParams, pageable: Pageable) → Page<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchParams | SearchParams | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ProgramEncounter>`



### findAll(unknown: where(lastModifiedBetween(searchParams.lastModifiedDateTime, unknown: searchParams.now) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | where(lastModifiedBetween(searchParams.lastModifiedDateTime | - | - |
| unknown | searchParams.now | - | - |

**Returns**: `return`



### updateSyncAttributes(individualId: Long, addressId: Long, syncAttribute1Value: String, syncAttribute2Value: String, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualId | Long | - | - |
| addressId | Long | - | - |
| syncAttribute1Value | String | - | - |
| syncAttribute2Value | String | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### updateSyncAttributes(individualId: Long, addressId: Long, syncAttribute1Value: String, syncAttribute2Value: String) → void

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



### SearchParams(lastModifiedDateTime: Date, now: Date, unknown: Map<Concept, conceptsMatchingValue: String>, encounterType: EncounterType, programEnrolment: ProgramEnrolment) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| unknown | Map<Concept | - | - |
| conceptsMatchingValue | String> | - | - |
| encounterType | EncounterType | - | - |
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `public`



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


