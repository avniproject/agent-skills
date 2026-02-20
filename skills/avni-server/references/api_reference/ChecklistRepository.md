# API Reference: ChecklistRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/ChecklistRepository.java`

---

## Functions

### findByProgramEnrolmentIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId: long, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<Checklist>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | long | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Checklist>`



### findByProgramEnrolmentId(programEnrolmentId: long) → Checklist

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolmentId | long | - | - |

**Returns**: `Checklist`



### findByProgramEnrolmentIndividual(individual: Individual) → Set<Checklist>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `Set<Checklist>`



### findByProgramEnrolmentUuidAndChecklistDetailName(enrolmentUUID: String, name: String) → Checklist

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentUUID | String | - | - |
| name | String | - | - |

**Returns**: `Checklist`



### findFirstByChecklistDetail(checklistDetail: ChecklistDetail) → Checklist

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetail | ChecklistDetail | - | - |

**Returns**: `Checklist`



### syncStrategySpecification(syncParameters: SyncParameters) → Specification<Checklist>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification<Checklist>`



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


