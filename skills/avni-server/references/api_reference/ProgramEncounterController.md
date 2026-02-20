# API Reference: ProgramEncounterController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ProgramEncounterController.java`

---

## Functions

### ProgramEncounterController(encounterTypeRepository: EncounterTypeRepository, programEncounterRepository: ProgramEncounterRepository, programEnrolmentRepository: ProgramEnrolmentRepository, userService: UserService, programEncounterService: ProgramEncounterService, scopeBasedSyncService: ScopeBasedSyncService<ProgramEncounter>, formMappingService: FormMappingService, accessControlService: AccessControlService, entityApprovalStatusService: EntityApprovalStatusService, txDataControllerHelper: TxDataControllerHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| userService | UserService | - | - |
| programEncounterService | ProgramEncounterService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<ProgramEncounter> | - | - |
| formMappingService | FormMappingService | - | - |
| accessControlService | AccessControlService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| txDataControllerHelper | TxDataControllerHelper | - | - |

**Returns**: `public`



### getProgramEncounterByUuid(unknown: @PathVariable("uuid") → ResponseEntity<ProgramEncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("uuid" | - | - |

**Returns**: `ResponseEntity<ProgramEncounterContract>`



### save(ProgramEncounterRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ProgramEncounterRequest | @RequestBody | - | - |

**Returns**: `void`



### saveForWeb(ProgramEncounterRequest: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ProgramEncounterRequest | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: programEncounter) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEncounter | - | - |

**Returns**: `new`



### wrap(unknown: programEncounterRepository.findByProgramEnrolmentIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEncounterRepository.findByProgramEnrolmentIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### wrap(unknown: programEncounterRepository.findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime, unknown: now, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEncounterRepository.findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | pageable | - | - |

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



### Exception(form: String.format("No, unknown: encounterType.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `new`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(programEncounterRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(programEncounterRepository | - | - |
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



### Exception(form: String.format("No, unknown: encounterType.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `new`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(programEncounterRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(programEncounterRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### voidProgramEncounter(String: @PathVariable) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: programEncounter) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEncounter | - | - |

**Returns**: `new`



### process(resource: EntityModel<ProgramEncounter>) → EntityModel<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<ProgramEncounter> | - | - |

**Returns**: `EntityModel<ProgramEncounter>`


