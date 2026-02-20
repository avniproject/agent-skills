# API Reference: ChecklistService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ChecklistService.java`

---

## Functions

### ChecklistService(checklistRepository: ChecklistRepository, checklistItemRepository: ChecklistItemRepository, checklistDetailRepository: ChecklistDetailRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistRepository | ChecklistRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |

**Returns**: `public`



### findChecklistsByIndividual(individual: Individual) → Set<Checklist>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `Set<Checklist>`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, checklistDetailUuid: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| checklistDetailUuid | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<Checklist>

**Returns**: `OperatingIndividualScopeAwareRepository<Checklist>`


