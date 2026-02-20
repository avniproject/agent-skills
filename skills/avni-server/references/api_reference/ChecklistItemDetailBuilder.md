# API Reference: ChecklistItemDetailBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/builder/ChecklistItemDetailBuilder.java`

---

## Functions

### ChecklistItemDetailBuilder(checklistDetail: ChecklistDetail, existingEntity: ChecklistItemDetail) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetail | ChecklistDetail | - | - |
| existingEntity | ChecklistItemDetail | - | - |

**Returns**: `public`



### ChecklistItemDetail() → new

**Returns**: `new`



### withConcept(concept: Concept) → ChecklistItemDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `ChecklistItemDetailBuilder`



### makeStatus(states: List<ChecklistItemStatusRequest>) → ChecklistItemStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| states | List<ChecklistItemStatusRequest> | - | - |

**Returns**: `ChecklistItemStatus`



### ChecklistItemStatus() → new

**Returns**: `new`



### withVoided(voided: Boolean) → ChecklistItemDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| voided | Boolean | - | - |

**Returns**: `ChecklistItemDetailBuilder`



### withScheduleOnExpiryOfDependency(scheduleOnExpiryOfDependency: Boolean) → ChecklistItemDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduleOnExpiryOfDependency | Boolean | - | - |

**Returns**: `ChecklistItemDetailBuilder`



### withMinDaysFromStartDate(minDaysFromStartDate: Integer) → ChecklistItemDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minDaysFromStartDate | Integer | - | - |

**Returns**: `ChecklistItemDetailBuilder`



### withMinDaysFromDependent(minDaysFromDependent: Integer) → ChecklistItemDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minDaysFromDependent | Integer | - | - |

**Returns**: `ChecklistItemDetailBuilder`



### withExpiresAfter(expiresAfter: Integer) → ChecklistItemDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| expiresAfter | Integer | - | - |

**Returns**: `ChecklistItemDetailBuilder`



### withChecklistItemStatus(checklistItemStatuses: List<ChecklistItemStatusRequest>) → ChecklistItemDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistItemStatuses | List<ChecklistItemStatusRequest> | - | - |

**Returns**: `ChecklistItemDetailBuilder`



### withform(form: Form) → ChecklistItemDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |

**Returns**: `ChecklistItemDetailBuilder`



### withLeadItem(checklistItemDetail: ChecklistItemDetail) → ChecklistItemDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistItemDetail | ChecklistItemDetail | - | - |

**Returns**: `ChecklistItemDetailBuilder`


