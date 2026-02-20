# API Reference: ProgramEnrolmentController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ProgramEnrolmentController.java`

---

## Functions

### ProgramEnrolmentController(individualRepository: IndividualRepository, programRepository: ProgramRepository, programEnrolmentRepository: ProgramEnrolmentRepository, userService: UserService, projectionFactory: ProjectionFactory, programEnrolmentService: ProgramEnrolmentService, scopeBasedSyncService: ScopeBasedSyncService<ProgramEnrolment>, formMappingService: FormMappingService, entityApprovalStatusService: EntityApprovalStatusService, txDataControllerHelper: TxDataControllerHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| programRepository | ProgramRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| userService | UserService | - | - |
| projectionFactory | ProjectionFactory | - | - |
| programEnrolmentService | ProgramEnrolmentService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<ProgramEnrolment> | - | - |
| formMappingService | FormMappingService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| txDataControllerHelper | TxDataControllerHelper | - | - |

**Returns**: `public`



### save(ProgramEnrolmentRequest: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ProgramEnrolmentRequest | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: programEnrolment) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEnrolment | - | - |

**Returns**: `new`



### saveForWeb(ProgramEnrolmentRequest: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ProgramEnrolmentRequest | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: programEnrolment) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEnrolment | - | - |

**Returns**: `new`



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



### Exception(form: String.format("No, unknown: program.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | program.getName( | - | - |

**Returns**: `new`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(programEnrolmentRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(programEnrolmentRepository | - | - |
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



### Exception(form: String.format("No, unknown: program.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | program.getName( | - | - |

**Returns**: `new`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(programEnrolmentRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(programEnrolmentRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### getOneForWeb(String: @PathVariable) → ProgramEnrolmentProjection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ProgramEnrolmentProjection`



### getProgramEnrolmentByUuid(String: @PathVariable) → ResponseEntity<EnrolmentContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ResponseEntity<EnrolmentContract>`



### getAllCompletedEncounters(String: @PathVariable, =: @RequestParam(value, =: required) → Page<ProgramEncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Page<ProgramEncounterContract>`



### voidProgramEnrolment(String: @PathVariable) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: programEnrolment) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEnrolment | - | - |

**Returns**: `new`



### process(resource: EntityModel<ProgramEnrolment>) → EntityModel<ProgramEnrolment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<ProgramEnrolment> | - | - |

**Returns**: `EntityModel<ProgramEnrolment>`


