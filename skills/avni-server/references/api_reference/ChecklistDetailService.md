# API Reference: ChecklistDetailService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ChecklistDetailService.java`

---

## Classes

### ChecklistDetailService

**Inherits from**: NonScopeAwareService

#### Methods

##### ChecklistDetailService(checklistDetailRepository: ChecklistDetailRepository, checklistItemDetailRepository: ChecklistItemDetailRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| checklistItemDetailRepository | ChecklistItemDetailRepository | - | - |

**Returns**: `public`


##### saveChecklist(checklistDetail: ChecklistDetailRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetail | ChecklistDetailRequest | - | - |

**Returns**: `void`


##### IllegalArgumentException(checklist: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklist | "No | - | - |

**Returns**: `new`


##### ChecklistDetailBuilder(unknown: checklist) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklist | - | - |

**Returns**: `new`


##### getAllChecklistDetail() → List<ChecklistDetailRequest>

**Returns**: `List<ChecklistDetailRequest>`


##### voidUnusedItems(checklistItemDetails: List<ChecklistItemDetail>, newChecklistDetailsUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistItemDetails | List<ChecklistItemDetail> | - | - |
| newChecklistDetailsUUIDs | List<String> | - | - |

**Returns**: `void`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getAll() → List<ChecklistDetail>

**Returns**: `List<ChecklistDetail>`


##### saveChecklists(checklistDetailRequests: ChecklistDetailRequest[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetailRequests | ChecklistDetailRequest[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: checklistDetailRequest, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklistDetailRequest | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### ChecklistDetailService(checklistDetailRepository: ChecklistDetailRepository, checklistItemDetailRepository: ChecklistItemDetailRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| checklistItemDetailRepository | ChecklistItemDetailRepository | - | - |

**Returns**: `public`



### saveChecklist(checklistDetail: ChecklistDetailRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetail | ChecklistDetailRequest | - | - |

**Returns**: `void`



### IllegalArgumentException(checklist: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklist | "No | - | - |

**Returns**: `new`



### ChecklistDetailBuilder(unknown: checklist) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklist | - | - |

**Returns**: `new`



### getAllChecklistDetail() → List<ChecklistDetailRequest>

**Returns**: `List<ChecklistDetailRequest>`



### voidUnusedItems(checklistItemDetails: List<ChecklistItemDetail>, newChecklistDetailsUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistItemDetails | List<ChecklistItemDetail> | - | - |
| newChecklistDetailsUUIDs | List<String> | - | - |

**Returns**: `void`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getAll() → List<ChecklistDetail>

**Returns**: `List<ChecklistDetail>`



### saveChecklists(checklistDetailRequests: ChecklistDetailRequest[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetailRequests | ChecklistDetailRequest[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: checklistDetailRequest, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklistDetailRequest | - | - |
| unknown | e | - | - |

**Returns**: `new`


