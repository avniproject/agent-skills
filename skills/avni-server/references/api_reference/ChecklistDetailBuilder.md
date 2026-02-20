# API Reference: ChecklistDetailBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/builder/ChecklistDetailBuilder.java`

---

## Functions

### ChecklistDetailBuilder(existingEntity: ChecklistDetail) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingEntity | ChecklistDetail | - | - |

**Returns**: `public`



### ChecklistDetail() → new

**Returns**: `new`



### withName(name: String) → ChecklistDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ChecklistDetailBuilder`



### getExistingChecklistItemDetail(checklistDetail: ChecklistDetail, item: ChecklistItemDetailRequest) → ChecklistItemDetail

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetail | ChecklistDetail | - | - |
| item | ChecklistItemDetailRequest | - | - |

**Returns**: `ChecklistItemDetail`



### withItems(items: List<ChecklistItemDetailRequest>) → ChecklistDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| items | List<ChecklistItemDetailRequest> | - | - |

**Returns**: `ChecklistDetailBuilder`



### ChecklistItemDetailBuilder(unknown: this.get() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.get( | - | - |

**Returns**: `new`



### getConcept(conceptUUID: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUUID | String | - | - |

**Returns**: `Concept`



### IllegalArgumentException(concept: String.format("No, unknown: conceptUUID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | String.format("No | - | - |
| unknown | conceptUUID | - | - |

**Returns**: `new`



### getChecklistForm(formUUID: String) → Form

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUUID | String | - | - |

**Returns**: `Form`



### IllegalArgumentException(form: String.format("No, unknown: formUUID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | formUUID | - | - |

**Returns**: `new`



### withVoided(voided: Boolean) → ChecklistDetailBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| voided | Boolean | - | - |

**Returns**: `ChecklistDetailBuilder`


