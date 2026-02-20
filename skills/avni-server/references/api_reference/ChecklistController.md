# API Reference: ChecklistController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ChecklistController.java`

---

## Functions

### ChecklistController(checklistRepository: ChecklistRepository, programEnrolmentRepository: ProgramEnrolmentRepository, checklistDetailRepository: ChecklistDetailRepository, userService: UserService, scopeBasedSyncService: ScopeBasedSyncService<Checklist>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistRepository | ChecklistRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| userService | UserService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<Checklist> | - | - |

**Returns**: `public`



### save(ChecklistRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ChecklistRequest | @RequestBody | - | - |

**Returns**: `void`



### Checklist() → new

**Returns**: `new`



### saveOld(Object: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Object | @RequestBody | - | - |

**Returns**: `void`



### wrap(unknown: checklistRepository.findByProgramEnrolmentIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklistRepository.findByProgramEnrolmentIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId | - | - |
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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(checklistRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(checklistRepository | - | - |
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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(checklistRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(checklistRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### process(resource: EntityModel<Checklist>) → EntityModel<Checklist>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<Checklist> | - | - |

**Returns**: `EntityModel<Checklist>`


