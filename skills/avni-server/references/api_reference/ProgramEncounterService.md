# API Reference: ProgramEncounterService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ProgramEncounterService.java`

---

## Functions

### ProgramEncounterService(programEncounterRepository: ProgramEncounterRepository, encounterTypeRepository: EncounterTypeRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository, observationService: ObservationService, programEnrolmentRepository: ProgramEnrolmentRepository, formMappingService: FormMappingService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterRepository | ProgramEncounterRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |
| observationService | ObservationService | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| formMappingService | FormMappingService | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### getProgramEncounterByUuid(uuid: String) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `ProgramEncounterContract`



### constructProgramEncounters(unknown: programEncounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEncounter | - | - |

**Returns**: `return`



### constructProgramEncounters(programEncounter: ProgramEncounter) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |

**Returns**: `ProgramEncounterContract`



### ProgramEncounterContract() → new

**Returns**: `new`



### EntityTypeContract() → new

**Returns**: `new`



### scheduledEncountersByType(programEnrolment: ProgramEnrolment, encounterTypeName: String, currentProgramEncounterUuid: String) → List<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| encounterTypeName | String | - | - |
| currentProgramEncounterUuid | String | - | - |

**Returns**: `List<ProgramEncounter>`



### saveVisitSchedules(programEnrolmentUuid: String, visitSchedules: List<VisitSchedule>, currentProgramEncounterUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolmentUuid | String | - | - |
| visitSchedules | List<VisitSchedule> | - | - |
| currentProgramEncounterUuid | String | - | - |

**Returns**: `void`



### saveVisitSchedule(programEnrolment: ProgramEnrolment, visitSchedule: VisitSchedule, currentProgramEncounterUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| visitSchedule | VisitSchedule | - | - |
| currentProgramEncounterUuid | String | - | - |

**Returns**: `void`



### BadRequestError(scheduled: "Next, unknown: visitSchedule.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduled | "Next | - | - |
| unknown | visitSchedule.getEncounterType( | - | - |

**Returns**: `new`



### BadRequestError(scheduled: "Next, unknown: visitSchedule.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduled | "Next | - | - |
| unknown | visitSchedule.getEncounterType( | - | - |

**Returns**: `new`



### updateProgramEncounterWithVisitSchedule(programEncounter: ProgramEncounter, visitSchedule: VisitSchedule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |
| visitSchedule | VisitSchedule | - | - |

**Returns**: `void`



### createEmptyProgramEncounter(programEnrolment: ProgramEnrolment, operationalEncounterType: OperationalEncounterType) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| operationalEncounterType | OperationalEncounterType | - | - |

**Returns**: `ProgramEncounter`



### ProgramEncounter() → new

**Returns**: `new`



### ObservationCollection() → new

**Returns**: `new`



### ObservationCollection() → new

**Returns**: `new`



### saveProgramEncounter(request: ProgramEncounterRequest) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ProgramEncounterRequest | - | - |

**Returns**: `ProgramEncounter`



### ProgramEncounter() → new

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



### checkForSchedulingCompleteConstraintViolation(request: ProgramEncounterRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ProgramEncounterRequest | - | - |

**Returns**: `void`



### Exception(violating: String.format("ProgramEncounter, unknown: request.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| violating | String.format("ProgramEncounter | - | - |
| unknown | request.getUuid( | - | - |

**Returns**: `new`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, encounterTypeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| encounterTypeUUID | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<ProgramEncounter>

**Returns**: `OperatingIndividualScopeAwareRepository<ProgramEncounter>`



### save(programEncounter: ProgramEncounter) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |

**Returns**: `ProgramEncounter`



### getFormMapping(programEncounter: ProgramEncounter) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |

**Returns**: `FormMapping`



### getFormType(programEncounter: ProgramEncounter) → FormType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |

**Returns**: `FormType`


