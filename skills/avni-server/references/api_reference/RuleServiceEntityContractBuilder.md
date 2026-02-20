# API Reference: RuleServiceEntityContractBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/rules/constructWrappers/RuleServiceEntityContractBuilder.java`

---

## Classes

### RuleServiceEntityContractBuilder

**Inherits from**: (none)

#### Methods

##### RuleServiceEntityContractBuilder(observationService: ObservationService, entityApprovalStatusService: EntityApprovalStatusService, programEncounterConstructionService: ProgramEncounterConstructionService, individualConstructionService: IndividualConstructionService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationService | ObservationService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| programEncounterConstructionService | ProgramEncounterConstructionService | - | - |
| individualConstructionService | IndividualConstructionService | - | - |

**Returns**: `public`


##### toContract(programEnrolment: ProgramEnrolment) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `ProgramEnrolmentContract`


##### toContract(individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `IndividualContract`


##### toContract(programEncounter: ProgramEncounter) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |

**Returns**: `ProgramEncounterContract`


##### toContract(encounter: Encounter) → EncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |

**Returns**: `EncounterContract`


##### toContract(entityType: String, entity: CHSEntity) → RuleServerEntityContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entity | CHSEntity | - | - |

**Returns**: `RuleServerEntityContract`


##### toContract(unknown: (Individual) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Individual | - | - |

**Returns**: `return`


##### toContract(unknown: (ProgramEnrolment) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (ProgramEnrolment | - | - |

**Returns**: `return`


##### toContract(unknown: (Encounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Encounter | - | - |

**Returns**: `return`


##### toContract(unknown: (ProgramEncounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (ProgramEncounter | - | - |

**Returns**: `return`


##### IllegalArgumentException(entityType: "Unknown) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | "Unknown | - | - |

**Returns**: `new`




## Functions

### RuleServiceEntityContractBuilder(observationService: ObservationService, entityApprovalStatusService: EntityApprovalStatusService, programEncounterConstructionService: ProgramEncounterConstructionService, individualConstructionService: IndividualConstructionService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationService | ObservationService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| programEncounterConstructionService | ProgramEncounterConstructionService | - | - |
| individualConstructionService | IndividualConstructionService | - | - |

**Returns**: `public`



### toContract(programEnrolment: ProgramEnrolment) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `ProgramEnrolmentContract`



### toContract(individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `IndividualContract`



### toContract(programEncounter: ProgramEncounter) → ProgramEncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |

**Returns**: `ProgramEncounterContract`



### toContract(encounter: Encounter) → EncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |

**Returns**: `EncounterContract`



### toContract(entityType: String, entity: CHSEntity) → RuleServerEntityContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entity | CHSEntity | - | - |

**Returns**: `RuleServerEntityContract`



### toContract(unknown: (Individual) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Individual | - | - |

**Returns**: `return`



### toContract(unknown: (ProgramEnrolment) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (ProgramEnrolment | - | - |

**Returns**: `return`



### toContract(unknown: (Encounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Encounter | - | - |

**Returns**: `return`



### toContract(unknown: (ProgramEncounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (ProgramEncounter | - | - |

**Returns**: `return`



### IllegalArgumentException(entityType: "Unknown) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | "Unknown | - | - |

**Returns**: `new`


