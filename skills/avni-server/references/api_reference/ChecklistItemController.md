# API Reference: ChecklistItemController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ChecklistItemController.java`

---

## Functions

### ChecklistItemController(checklistRepository: ChecklistRepository, checklistItemRepository: ChecklistItemRepository, observationService: ObservationService, checklistItemDetailRepository: ChecklistItemDetailRepository, checklistDetailRepository: ChecklistDetailRepository, userService: UserService, scopeBasedSyncService: ScopeBasedSyncService<ChecklistItem>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistRepository | ChecklistRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| observationService | ObservationService | - | - |
| checklistItemDetailRepository | ChecklistItemDetailRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| userService | UserService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<ChecklistItem> | - | - |

**Returns**: `public`



### saveOld(Object: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Object | @RequestBody | - | - |

**Returns**: `void`



### save(ChecklistItemRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ChecklistItemRequest | @RequestBody | - | - |

**Returns**: `void`



### ChecklistItem() → new

**Returns**: `new`



### wrap(unknown: checklistItemRepository.findByChecklistProgramEnrolmentIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklistItemRepository.findByChecklistProgramEnrolmentIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### wrap(SliceImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(SliceImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(SliceImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(checklistItemRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(checklistItemRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(checklistItemRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(checklistItemRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### process(resource: EntityModel<ChecklistItem>) → EntityModel<ChecklistItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<ChecklistItem> | - | - |

**Returns**: `EntityModel<ChecklistItem>`


