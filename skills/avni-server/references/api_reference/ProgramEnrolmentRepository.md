# API Reference: ProgramEnrolmentRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/ProgramEnrolmentRepository.java`

---

## Functions

### findActiveEnrolmentsByIndividualIds(individualIds: List<Long>) → List<SearchSubjectEnrolledProgram>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualIds | List<Long> | - | - |

**Returns**: `List<SearchSubjectEnrolledProgram>`



### coalesce(unknown: enl.enrolmentDateTime, unknown: enl.programExitDateTime) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enl.enrolmentDateTime | - | - |
| unknown | enl.programExitDateTime | - | - |

**Returns**: `and`



### findNonVoidedEnrolments(programId: Long, locationIds: List<Long>, startDateTime: DateTime, endDateTime: DateTime) → Stream<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programId | Long | - | - |
| locationIds | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |

**Returns**: `Stream<ProgramEnrolment>`



### coalesce(unknown: enl.enrolmentDateTime, unknown: enl.programExitDateTime) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enl.enrolmentDateTime | - | - |
| unknown | enl.programExitDateTime | - | - |

**Returns**: `and`



### findAllEnrolments(programId: Long, locationIds: List<Long>, startDateTime: DateTime, endDateTime: DateTime) → Stream<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programId | Long | - | - |
| locationIds | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |

**Returns**: `Stream<ProgramEnrolment>`



### coalesce(unknown: enc.encounterDateTime, unknown: enc.cancelDateTime) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enc.encounterDateTime | - | - |
| unknown | enc.cancelDateTime | - | - |

**Returns**: `and`



### findNonVoidedProgramEncounters(locationIds: List<Long>, startDateTime: DateTime, endDateTime: DateTime, encounterTypeId: Long, programId: Long) → Stream<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |
| encounterTypeId | Long | - | - |
| programId | Long | - | - |

**Returns**: `Stream<ProgramEnrolment>`



### coalesce(unknown: enc.encounterDateTime, unknown: enc.cancelDateTime) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enc.encounterDateTime | - | - |
| unknown | enc.cancelDateTime | - | - |

**Returns**: `and`



### findAllProgramEncounters(locationIds: List<Long>, startDateTime: DateTime, endDateTime: DateTime, encounterTypeId: Long, programId: Long) → Stream<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |
| encounterTypeId | Long | - | - |
| programId | Long | - | - |

**Returns**: `Stream<ProgramEnrolment>`



### findByLastModifiedDateTimeGreaterThanAndLastModifiedDateTimeLessThanAndProgramNameOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime: Date, now: Date, program: String, pageable: Pageable) → Page<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| program | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ProgramEnrolment>`



### findByProgramNameAndIndividualUuidOrderByLastModifiedDateTimeAscIdAsc(program: String, individualUuid: String, pageable: Pageable) → Page<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | String | - | - |
| individualUuid | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ProgramEnrolment>`



### findByLegacyIdOrUuid(id: String) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `ProgramEnrolment`



### findByLegacyId(id: String) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `ProgramEnrolment`



### findByLastModifiedDateTimeGreaterThanAndLastModifiedDateTimeLessThanOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<ProgramEnrolment>`



### syncTypeIdSpecification(typeId: Long) → Specification<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| typeId | Long | - | - |

**Returns**: `Specification<ProgramEnrolment>`



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



### findByIndividualAndProgram(individual: Individual, program: Program) → List<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| program | Program | - | - |

**Returns**: `List<ProgramEnrolment>`



### countBySyncDisabled(syncDisabled: boolean) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `int`


