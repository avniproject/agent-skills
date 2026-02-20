# API Reference: ProgramEnrolmentService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ProgramEnrolmentService.java`

---

## Functions

### ProgramEnrolmentService(programEnrolmentRepository: ProgramEnrolmentRepository, programEncounterService: ProgramEncounterService, programEncounterRepository: ProgramEncounterRepository, programRepository: ProgramRepository, observationService: ObservationService, individualRepository: IndividualRepository, checklistDetailRepository: ChecklistDetailRepository, checklistItemDetailRepository: ChecklistItemDetailRepository, checklistRepository: ChecklistRepository, checklistItemRepository: ChecklistItemRepository, identifierAssignmentRepository: IdentifierAssignmentRepository, accessControlService: AccessControlService, formMappingService: FormMappingService, bugsnag: Bugsnag) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| programEncounterService | ProgramEncounterService | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| programRepository | ProgramRepository | - | - |
| observationService | ObservationService | - | - |
| individualRepository | IndividualRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| checklistItemDetailRepository | ChecklistItemDetailRepository | - | - |
| checklistRepository | ChecklistRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| identifierAssignmentRepository | IdentifierAssignmentRepository | - | - |
| accessControlService | AccessControlService | - | - |
| formMappingService | FormMappingService | - | - |
| bugsnag | Bugsnag | - | - |

**Returns**: `public`



### constructEnrolments(uuid: String) → EnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `EnrolmentContract`



### EnrolmentContract() → new

**Returns**: `new`



### getAllCompletedEncounters(uuid: String, encounterTypeUuids: String, encounterDateTime: DateTime, earliestVisitDateTime: DateTime, pageable: Pageable) → Page<ProgramEncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| encounterTypeUuids | String | - | - |
| encounterDateTime | DateTime | - | - |
| earliestVisitDateTime | DateTime | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ProgramEncounterContract>`



### validateProgramEnrolmentSave(request: ProgramEnrolmentRequest, programEnrolment: ProgramEnrolment, program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ProgramEnrolmentRequest | - | - |
| programEnrolment | ProgramEnrolment | - | - |
| program | Program | - | - |

**Returns**: `void`



### ValidationException(unknown: "alreadyEnrolledInProgram") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "alreadyEnrolledInProgram" | - | - |

**Returns**: `new`



### programEnrolmentSave(request: ProgramEnrolmentRequest, validate: boolean) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ProgramEnrolmentRequest | - | - |
| validate | boolean | - | - |

**Returns**: `ProgramEnrolment`



### ProgramEnrolment() → new

**Returns**: `new`



### Point(unknown: enrolmentLocation.getX() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enrolmentLocation.getX( | - | - |

**Returns**: `new`



### Point(unknown: exitLocation.getX() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exitLocation.getX( | - | - |

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



### save(programEnrolment: ProgramEnrolment) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `ProgramEnrolment`



### addSyncAttributes(enrolment: ProgramEnrolment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolment | ProgramEnrolment | - | - |

**Returns**: `void`



### saveIdentifierAssignments(programEnrolment: ProgramEnrolment, programEnrolmentRequest: ProgramEnrolmentRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| programEnrolmentRequest | ProgramEnrolmentRequest | - | - |

**Returns**: `void`



### saveChecklist(checklistContract: ChecklistContract, programEnrolmentUUID: String) → Checklist

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistContract | ChecklistContract | - | - |
| programEnrolmentUUID | String | - | - |

**Returns**: `Checklist`



### Checklist() → new

**Returns**: `new`



### ChecklistItem() → new

**Returns**: `new`



### voidEnrolment(programEnrolment: ProgramEnrolment) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `ProgramEnrolment`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, programUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| programUUID | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<ProgramEnrolment>

**Returns**: `OperatingIndividualScopeAwareRepository<ProgramEnrolment>`



### getFormMapping(programEnrolment: ProgramEnrolment) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `FormMapping`



### alreadyEnrolled(individual: Individual, program: Program) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| program | Program | - | - |

**Returns**: `boolean`


