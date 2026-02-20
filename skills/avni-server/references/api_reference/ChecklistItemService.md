# API Reference: ChecklistItemService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ChecklistItemService.java`

---

## Functions

### ChecklistItemService(checklistDetailRepository: ChecklistDetailRepository, checklistItemRepository: ChecklistItemRepository, checklistRepository: ChecklistRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| checklistRepository | ChecklistRepository | - | - |

**Returns**: `public`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, checklistDetailUuid: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| checklistDetailUuid | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<ChecklistItem>

**Returns**: `OperatingIndividualScopeAwareRepository<ChecklistItem>`



### findChecklistItemsByIndividual(individual: Individual) → Set<ChecklistItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `Set<ChecklistItem>`


