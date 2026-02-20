# API Reference: IndividualRelationshipRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/individualRelationship/IndividualRelationshipRepository.java`

---

## Functions

### findByIndividualaAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId: long, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<IndividualRelationship>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | long | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<IndividualRelationship>`



### findByIndividual(individual: Individual) → Set<IndividualRelationship>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `Set<IndividualRelationship>`



### syncStrategySpecification(syncParameters: SyncParameters) → Specification<IndividualRelationship>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification<IndividualRelationship>`



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



### findByIndividualaAndIndividualBAndIsVoidedFalse(individualA: Individual, individualB: Individual) → List<IndividualRelationship>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualA | Individual | - | - |
| individualB | Individual | - | - |

**Returns**: `List<IndividualRelationship>`



### setChangedForSync(individualId: Long, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualId | Long | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### setChangedForSync(individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

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


