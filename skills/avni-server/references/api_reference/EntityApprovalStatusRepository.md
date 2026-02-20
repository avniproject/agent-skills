# API Reference: EntityApprovalStatusRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/EntityApprovalStatusRepository.java`

---

## Functions

### findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<EntityApprovalStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<EntityApprovalStatus>`



### findEntityApprovalStatuses(searchParams: EntityApprovalStatusSearchParams, pageable: Pageable) → Page<EntityApprovalStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchParams | EntityApprovalStatusSearchParams | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<EntityApprovalStatus>`



### DateTime() → new

**Returns**: `new`



### findAll(unknown: specification, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | specification | - | - |
| unknown | pageable | - | - |

**Returns**: `return`



### findByEntityTypeSpec(entityType: EntityApprovalStatus.EntityType) → Specification<EntityApprovalStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |

**Returns**: `Specification<EntityApprovalStatus>`



### findByEntityTypeUuidSpec(entityTypeUuid: String) → Specification<EntityApprovalStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityTypeUuid | String | - | - |

**Returns**: `Specification<EntityApprovalStatus>`



### findByEntityIdAndEntityTypeAndIsVoidedFalse(entityId: Long, entityType: EntityApprovalStatus.EntityType) → List<EntityApprovalStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| entityType | EntityApprovalStatus.EntityType | - | - |

**Returns**: `List<EntityApprovalStatus>`



### findFirstByEntityIdAndEntityTypeAndIsVoidedFalseOrderByStatusDateTimeDesc(entityId: Long, entityType: EntityApprovalStatus.EntityType) → EntityApprovalStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| entityType | EntityApprovalStatus.EntityType | - | - |

**Returns**: `EntityApprovalStatus`



### syncTypeIdSpecification(uuid: String, syncEntityName: SyncEntityName) → Specification<EntityApprovalStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `Specification<EntityApprovalStatus>`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### count(unknown: syncDisabledSpecification() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncDisabledSpecification( | - | - |

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



### saveEAS(entityToSave: EntityApprovalStatus) → EntityApprovalStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityToSave | EntityApprovalStatus | - | - |

**Returns**: `EntityApprovalStatus`



### RuntimeException(latest: String.format("The, unknown: entityToSave.getEntityType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| latest | String.format("The | - | - |
| unknown | entityToSave.getEntityType( | - | - |

**Returns**: `new`



### voidSubjectsAt(addressId: Long, lastModifiedById: Long) → void

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


