# API Reference: ProgramEncounterConstructionService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/rules/constructWrappers/ProgramEncounterConstructionService.java`

---

## Classes

### ProgramEncounterConstructionService

**Inherits from**: (none)

#### Methods

##### ProgramEncounterConstructionService(observationConstructionService: ObservationConstructionService, observationService: ObservationService, programEnrolmentRepository: ProgramEnrolmentRepository, encounterTypeRepository: EncounterTypeRepository, programEnrolmentConstructionService: ProgramEnrolmentConstructionService, individualRepository: IndividualRepository, individualConstructionService: IndividualConstructionService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationConstructionService | ObservationConstructionService | - | - |
| observationService | ObservationService | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programEnrolmentConstructionService | ProgramEnrolmentConstructionService | - | - |
| individualRepository | IndividualRepository | - | - |
| individualConstructionService | IndividualConstructionService | - | - |

**Returns**: `public`


##### constructProgramEncounterContract(request: ProgramEncounterRequestEntity) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ProgramEncounterRequestEntity | - | - |

**Returns**: `ProgramEncounterContract`


##### ProgramEncounterContract() → new

**Returns**: `new`


##### constructProgramEnrolmentVisitScheduleContract(requestEntity: ProgramEncounterRequestEntity) → List<VisitSchedule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestEntity | ProgramEncounterRequestEntity | - | - |

**Returns**: `List<VisitSchedule>`


##### VisitSchedule() → new

**Returns**: `new`


##### constructIndividualVisitScheduleContract(requestEntity: EncounterRequestEntity) → List<VisitSchedule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestEntity | EncounterRequestEntity | - | - |

**Returns**: `List<VisitSchedule>`


##### VisitSchedule() → new

**Returns**: `new`


##### constructEncounterType(encounterTypeUuid: String) → EntityTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUuid | String | - | - |

**Returns**: `EntityTypeContract`


##### EntityTypeContract() → new

**Returns**: `new`


##### constructEncountersExcludingSelf(encounters: Set<ProgramEncounter>, selfEncounterUuid: String) → Set<ProgramEncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounters | Set<ProgramEncounter> | - | - |
| selfEncounterUuid | String | - | - |

**Returns**: `Set<ProgramEncounterContract>`


##### programEnrolmentWrapperForMessageSchedule(encounter: ProgramEncounter) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ProgramEncounter | - | - |

**Returns**: `ProgramEncounterContract`


##### constructProgramEncounterContractWrapper(encounter: ProgramEncounter) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ProgramEncounter | - | - |

**Returns**: `ProgramEncounterContract`


##### ProgramEncounterContract() → new

**Returns**: `new`


##### EntityTypeContract() → new

**Returns**: `new`


##### constructEnrolments(programEnrolment: ProgramEnrolment, currentProgramEncounterUUID: String) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| currentProgramEncounterUUID | String | - | - |

**Returns**: `ProgramEnrolmentContract`


##### ProgramEnrolmentContract() → new

**Returns**: `new`


##### getObservationModelContracts(observationContracts: List<ObservationContract>) → List<ObservationModelContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationContracts | List<ObservationContract> | - | - |

**Returns**: `List<ObservationModelContract>`


##### constructEncounterContract(encounterRequestEntity: EncounterRequestEntity) → EncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterRequestEntity | EncounterRequestEntity | - | - |

**Returns**: `EncounterContract`


##### EncounterContract() → new

**Returns**: `new`


##### mapEnrolments(programEnrolments: Set<ProgramEnrolment>) → List<ProgramEnrolmentContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolments | Set<ProgramEnrolment> | - | - |

**Returns**: `List<ProgramEnrolmentContract>`


##### ProgramEnrolmentContract() → new

**Returns**: `new`


##### mapEncounters(encounters: Set<Encounter>) → List<EncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounters | Set<Encounter> | - | - |

**Returns**: `List<EncounterContract>`


##### EncounterContract() → new

**Returns**: `new`




## Functions

### ProgramEncounterConstructionService(observationConstructionService: ObservationConstructionService, observationService: ObservationService, programEnrolmentRepository: ProgramEnrolmentRepository, encounterTypeRepository: EncounterTypeRepository, programEnrolmentConstructionService: ProgramEnrolmentConstructionService, individualRepository: IndividualRepository, individualConstructionService: IndividualConstructionService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationConstructionService | ObservationConstructionService | - | - |
| observationService | ObservationService | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programEnrolmentConstructionService | ProgramEnrolmentConstructionService | - | - |
| individualRepository | IndividualRepository | - | - |
| individualConstructionService | IndividualConstructionService | - | - |

**Returns**: `public`



### constructProgramEncounterContract(request: ProgramEncounterRequestEntity) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ProgramEncounterRequestEntity | - | - |

**Returns**: `ProgramEncounterContract`



### ProgramEncounterContract() → new

**Returns**: `new`



### constructProgramEnrolmentVisitScheduleContract(requestEntity: ProgramEncounterRequestEntity) → List<VisitSchedule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestEntity | ProgramEncounterRequestEntity | - | - |

**Returns**: `List<VisitSchedule>`



### VisitSchedule() → new

**Returns**: `new`



### constructIndividualVisitScheduleContract(requestEntity: EncounterRequestEntity) → List<VisitSchedule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestEntity | EncounterRequestEntity | - | - |

**Returns**: `List<VisitSchedule>`



### VisitSchedule() → new

**Returns**: `new`



### constructEncounterType(encounterTypeUuid: String) → EntityTypeContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUuid | String | - | - |

**Returns**: `EntityTypeContract`



### EntityTypeContract() → new

**Returns**: `new`



### constructEncountersExcludingSelf(encounters: Set<ProgramEncounter>, selfEncounterUuid: String) → Set<ProgramEncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounters | Set<ProgramEncounter> | - | - |
| selfEncounterUuid | String | - | - |

**Returns**: `Set<ProgramEncounterContract>`



### programEnrolmentWrapperForMessageSchedule(encounter: ProgramEncounter) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ProgramEncounter | - | - |

**Returns**: `ProgramEncounterContract`



### constructProgramEncounterContractWrapper(encounter: ProgramEncounter) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ProgramEncounter | - | - |

**Returns**: `ProgramEncounterContract`



### ProgramEncounterContract() → new

**Returns**: `new`



### EntityTypeContract() → new

**Returns**: `new`



### constructEnrolments(programEnrolment: ProgramEnrolment, currentProgramEncounterUUID: String) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| currentProgramEncounterUUID | String | - | - |

**Returns**: `ProgramEnrolmentContract`



### ProgramEnrolmentContract() → new

**Returns**: `new`



### getObservationModelContracts(observationContracts: List<ObservationContract>) → List<ObservationModelContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationContracts | List<ObservationContract> | - | - |

**Returns**: `List<ObservationModelContract>`



### constructEncounterContract(encounterRequestEntity: EncounterRequestEntity) → EncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterRequestEntity | EncounterRequestEntity | - | - |

**Returns**: `EncounterContract`



### EncounterContract() → new

**Returns**: `new`



### mapEnrolments(programEnrolments: Set<ProgramEnrolment>) → List<ProgramEnrolmentContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolments | Set<ProgramEnrolment> | - | - |

**Returns**: `List<ProgramEnrolmentContract>`



### ProgramEnrolmentContract() → new

**Returns**: `new`



### mapEncounters(encounters: Set<Encounter>) → List<EncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounters | Set<Encounter> | - | - |

**Returns**: `List<EncounterContract>`



### EncounterContract() → new

**Returns**: `new`


