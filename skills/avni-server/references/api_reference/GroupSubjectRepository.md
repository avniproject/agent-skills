# API Reference: GroupSubjectRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/GroupSubjectRepository.java`

---

## Functions

### findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<GroupSubject>`



### findByName(name: String) → GroupSubject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `GroupSubject`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → GroupSubject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `GroupSubject`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByGroupSubjectAndMemberSubjectAndIsVoidedFalse(groupSubject: Individual, memberSubject: Individual) → GroupSubject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | Individual | - | - |
| memberSubject | Individual | - | - |

**Returns**: `GroupSubject`



### findAllByGroupSubjectOrMemberSubject(individualId: Long) → List<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualId | Long | - | - |

**Returns**: `List<GroupSubject>`



### findAllByGroupSubjectOrMemberSubject(individual: Individual) → List<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `List<GroupSubject>`



### findByGroupSubjectAndGroupRoleAndIsVoidedFalse(groupSubject: Individual, headOfHousehold: GroupRole) → GroupSubject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | Individual | - | - |
| headOfHousehold | GroupRole | - | - |

**Returns**: `GroupSubject`



### findAllByGroupSubjectAndIsVoidedFalse(groupSubject: Individual) → List<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubject | Individual | - | - |

**Returns**: `List<GroupSubject>`



### findAllByMemberSubjectAndIsVoidedFalse(memberSubject: Individual) → List<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberSubject | Individual | - | - |

**Returns**: `List<GroupSubject>`



### findAllByMemberSubjectAndGroupRoleIsVoidedFalseAndIsVoidedFalse(memberSubject: Individual) → List<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberSubject | Individual | - | - |

**Returns**: `List<GroupSubject>`



### findAllByMemberSubjectIn(memberSubjects: List<Individual>) → List<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberSubjects | List<Individual> | - | - |

**Returns**: `List<GroupSubject>`



### findByGroupSubjectUuidOrderByLastModifiedDateTimeAscIdAsc(groupSubjectUUID: String, pageable: Pageable) → Page<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectUUID | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<GroupSubject>`



### findByMemberSubjectUuidOrderByLastModifiedDateTimeAscIdAsc(memberSubjectUUID: String, pageable: Pageable) → Page<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberSubjectUUID | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<GroupSubject>`



### findNonVoidedGroupSubjects(subjectTypeId: Long, locationIds: List<Long>, startDateTime: LocalDate, endDateTime: LocalDate) → Stream<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| locationIds | List<Long> | - | - |
| startDateTime | LocalDate | - | - |
| endDateTime | LocalDate | - | - |

**Returns**: `Stream<GroupSubject>`



### findAllGroupSubjects(subjectTypeId: Long, locationIds: List<Long>, startDateTime: LocalDate, endDateTime: LocalDate) → Stream<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| locationIds | List<Long> | - | - |
| startDateTime | LocalDate | - | - |
| endDateTime | LocalDate | - | - |

**Returns**: `Stream<GroupSubject>`



### syncStrategySpecification(syncParameters: SyncParameters) → Specification<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification<GroupSubject>`



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



### findAllByMemberSubject(memberSubject: Individual) → List<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberSubject | Individual | - | - |

**Returns**: `List<GroupSubject>`



### updateSyncAttributesForGroupSubject(individualId: Long, addressId: Long, syncAttribute1Value: String, syncAttribute2Value: String, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualId | Long | - | - |
| addressId | Long | - | - |
| syncAttribute1Value | String | - | - |
| syncAttribute2Value | String | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### updateSyncAttributesForGroupSubject(individualId: Long, addressId: Long, syncAttribute1Value: String, syncAttribute2Value: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualId | Long | - | - |
| addressId | Long | - | - |
| syncAttribute1Value | String | - | - |
| syncAttribute2Value | String | - | - |

**Returns**: `void`



### updateSyncAttributesForMemberSubject(individualId: Long, addressId: Long, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualId | Long | - | - |
| addressId | Long | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### updateSyncAttributesForMemberSubject(individualId: Long, addressId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualId | Long | - | - |
| addressId | Long | - | - |

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



### and(=: i.id) → addressId

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | i.id | - | - |

**Returns**: `addressId`



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


