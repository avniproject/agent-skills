# API Reference: ChecklistItemRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/ChecklistItemRepository.java`

---

## Functions

### findByChecklistProgramEnrolmentIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId: long, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<ChecklistItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | long | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ChecklistItem>`



### findByChecklistUuidAndChecklistItemDetailUuid(checklistUUID: String, checklistItemDetailUUID: String) → ChecklistItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistUUID | String | - | - |
| checklistItemDetailUUID | String | - | - |

**Returns**: `ChecklistItem`



### findByChecklistProgramEnrolmentIndividual(individual: Individual) → Set<ChecklistItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `Set<ChecklistItem>`



### syncStrategySpecification(syncParameters: SyncParameters) → Specification<ChecklistItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification<ChecklistItem>`



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


