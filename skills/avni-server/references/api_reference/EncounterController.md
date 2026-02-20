# API Reference: EncounterController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/EncounterController.java`

---

## Functions

### EncounterController(individualRepository: IndividualRepository, encounterTypeRepository: EncounterTypeRepository, encounterRepository: EncounterRepository, observationService: ObservationService, userService: UserService, bugsnag: Bugsnag, encounterService: EncounterService, scopeBasedSyncService: ScopeBasedSyncService<Encounter>, formMappingService: FormMappingService, accessControlService: AccessControlService, entityApprovalStatusService: EntityApprovalStatusService, txDataControllerHelper: TxDataControllerHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| encounterRepository | EncounterRepository | - | - |
| observationService | ObservationService | - | - |
| userService | UserService | - | - |
| bugsnag | Bugsnag | - | - |
| encounterService | EncounterService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<Encounter> | - | - |
| formMappingService | FormMappingService | - | - |
| accessControlService | AccessControlService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| txDataControllerHelper | TxDataControllerHelper | - | - |

**Returns**: `public`



### getEncounterByUuid(unknown: @PathVariable("uuid") → ResponseEntity<EncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("uuid" | - | - |

**Returns**: `ResponseEntity<EncounterContract>`



### checkForSchedulingCompleteConstraintViolation(request: EncounterRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | EncounterRequest | - | - |

**Returns**: `void`



### Exception(violating: String.format("ProgramEncounter, unknown: request.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| violating | String.format("ProgramEncounter | - | - |
| unknown | request.getUuid( | - | - |

**Returns**: `new`



### save(EncounterRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EncounterRequest | @RequestBody | - | - |

**Returns**: `void`



### saveForWeb(EncounterRequest: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EncounterRequest | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: encounter) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter | - | - |

**Returns**: `new`



### addEntityApprovalStatusIfRequired(encounter: Encounter) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |

**Returns**: `void`



### createEncounter(request: EncounterRequest) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | EncounterRequest | - | - |

**Returns**: `Encounter`



### IllegalArgumentException(not: String.format("Individual, unknown: request.getIndividualUUID() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Individual | - | - |
| unknown | request.getIndividualUUID( | - | - |

**Returns**: `new`



### Encounter() → new

**Returns**: `new`



### Exception(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`



### Exception(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`



### Point(unknown: encounterLocation.getX() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterLocation.getX( | - | - |

**Returns**: `new`



### Point(unknown: cancelLocation.getX() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cancelLocation.getX( | - | - |

**Returns**: `new`



### wrap(unknown: encounterRepository.findByIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterRepository.findByIndividualAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### wrap(unknown: encounterRepository.findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterRepository.findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(CHSEntity.toDate(lastModifiedDateTime | - | - |

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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(encounterRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(encounterRepository | - | - |
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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(encounterRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(encounterRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### voidEncounter(String: @PathVariable) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: encounter) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter | - | - |

**Returns**: `new`



### process(resource: EntityModel<Encounter>) → EntityModel<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<Encounter> | - | - |

**Returns**: `EntityModel<Encounter>`


