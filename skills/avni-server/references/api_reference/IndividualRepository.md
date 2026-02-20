# API Reference: IndividualRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/IndividualRepository.java`

---

## Functions

### syncTypeIdSpecification(typeId: Long) → Specification<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| typeId | Long | - | - |

**Returns**: `Specification<Individual>`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### count(.and(subjectType: audit) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| .and(subjectType | audit | - | - |

**Returns**: `return`



### getFilterSpecForVoid(includeVoided: Boolean) → Specification<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| includeVoided | Boolean | - | - |

**Returns**: `Specification<Individual>`



### findByName(name: String, pageable: Pageable) → Page<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Individual>`



### findAll(unknown: getFilterSpecForName(name) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | getFilterSpecForName(name | - | - |

**Returns**: `return`



### findByIdIn(ids: Long[], pageable: Pageable) → Page<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ids | Long[] | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Individual>`



### getFilterSpecForName(value: String) → Specification<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |

**Returns**: `Specification<Individual>`



### getFilterSpecForSubjectTypeId(subjectTypeUUID: String) → Specification<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `Specification<Individual>`



### getFilterSpecForObs(value: String) → Specification<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |

**Returns**: `Specification<Individual>`



### findByConceptWithMatchingPattern(concept: Concept, pattern: String) → Optional<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| pattern | String | - | - |

**Returns**: `Optional<Individual>`



### getFilterSpecForLocationIds(locationIds: List<Long>) → Specification<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |

**Returns**: `Specification<Individual>`



### getFilterSpecForAddress(locationName: String) → Specification<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationName | String | - | - |

**Returns**: `Specification<Individual>`



### findNonVoidedIndividuals(subjectTypeId: Long, locationIds: List<Long>, startDateTime: LocalDate, endDateTime: LocalDate) → Stream<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| locationIds | List<Long> | - | - |
| startDateTime | LocalDate | - | - |
| endDateTime | LocalDate | - | - |

**Returns**: `Stream<Individual>`



### findAllIndividuals(subjectTypeId: Long, locationIds: List<Long>, startDateTime: LocalDate, endDateTime: LocalDate) → Stream<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| locationIds | List<Long> | - | - |
| startDateTime | LocalDate | - | - |
| endDateTime | LocalDate | - | - |

**Returns**: `Stream<Individual>`



### coalesce(unknown: enc.encounterDateTime, unknown: enc.cancelDateTime) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enc.encounterDateTime | - | - |
| unknown | enc.cancelDateTime | - | - |

**Returns**: `and`



### findNonVoidedEncounters(locationIds: List<Long>, startDateTime: DateTime, endDateTime: DateTime, encounterTypeId: Long) → Stream<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |
| encounterTypeId | Long | - | - |

**Returns**: `Stream<Individual>`



### coalesce(unknown: enc.encounterDateTime, unknown: enc.cancelDateTime) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enc.encounterDateTime | - | - |
| unknown | enc.cancelDateTime | - | - |

**Returns**: `and`



### findAllEncounters(locationIds: List<Long>, startDateTime: DateTime, endDateTime: DateTime, encounterTypeId: Long) → Stream<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |
| encounterTypeId | Long | - | - |

**Returns**: `Stream<Individual>`



### findByLegacyIdOrUuid(id: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `Individual`



### findByLegacyId(id: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `Individual`



### where(=:id: i.uuid) → i

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| =:id | i.uuid | - | - |

**Returns**: `i`



### findByLegacyIdOrUuidAndSubjectType(id: String, subjectType: SubjectType) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `Individual`



### web_search_function(unknown: :jsonSearch, unknown: :dbUser) → from

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :jsonSearch | - | - |
| unknown | :dbUser | - | - |

**Returns**: `from`



### getWebSearchResults(jsonSearch: String, dbUser: String) → List<WebSearchResultProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonSearch | String | - | - |
| dbUser | String | - | - |

**Returns**: `List<WebSearchResultProjection>`



### findBySubjectTypeSpec(subjectTypeName: String) → Specification<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `Specification<Individual>`



### findInLocationSpec(addressIds: List<Long>) → Specification<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressIds | List<Long> | - | - |

**Returns**: `Specification<Individual>`



### findSubjects(individualSearchParams: IndividualSearchParams, pageable: Pageable) → Page<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualSearchParams | IndividualSearchParams | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Individual>`



### findAll(unknown: specification, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | specification | - | - |
| unknown | pageable | - | - |

**Returns**: `return`



### findAllByAddressLevelAndSubjectTypeAndIsVoidedFalse(addressLevel: AddressLevel, subjectType: SubjectType) → List<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `List<Individual>`



### findAllByAddressLevelAndSubjectType(addressLevel: AddressLevel, subjectType: SubjectType) → List<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `List<Individual>`



### findAllIndividualWebProjectionByUuidIn(uuids: List<String>) → List<IndividualWebProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuids | List<String> | - | - |

**Returns**: `List<IndividualWebProjection>`



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



### existsByAddressLevelIdIn(addressIds: List<Long>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressIds | List<Long> | - | - |

**Returns**: `boolean`



### hasSubjectsInLocations(addressIds: List<Long>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressIds | List<Long> | - | - |

**Returns**: `boolean`



### existsBySubjectTypeUuid(subjectTypeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `boolean`



### existsBySubjectTypeId(subjectTypeId: Long) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |

**Returns**: `boolean`



### getSubject(uuid: String, legacyId: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| legacyId | String | - | - |

**Returns**: `Individual`



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



### countBySyncDisabled(syncDisabled: boolean) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `int`


