# API Reference: ProgramEncounterRuleInput.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/adapter/contract/encounter/ProgramEncounterRuleInput.java`

---

## Classes

### ProgramEncounterRuleInput

**Inherits from**: (none)

#### Methods

##### ProgramEncounterRuleInput(programEnrolment: ProgramEnrolment, conceptRepository: ConceptRepository, programEncounterRequest: ProgramEncounterRequest, observationService: ObservationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| conceptRepository | ConceptRepository | - | - |
| programEncounterRequest | ProgramEncounterRequest | - | - |
| observationService | ObservationService | - | - |

**Returns**: `public`


##### ProgramEnrolmentForProgramEncounterRuleInput(unknown: programEnrolment, unknown: conceptRepository, unknown: observationService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEnrolment | - | - |
| unknown | conceptRepository | - | - |
| unknown | observationService | - | - |

**Returns**: `new`


##### getEncounterType() → EncounterType

**Returns**: `EncounterType`


##### getName() → String

**Returns**: `String`


##### getEncounterDateTime() → Date

**Returns**: `Date`


##### getProgramEnrolment() → ProgramEnrolmentForProgramEncounterRuleInput

**Returns**: `ProgramEnrolmentForProgramEncounterRuleInput`


##### getObservationValue(conceptName: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `Object`




## Functions

### ProgramEncounterRuleInput(programEnrolment: ProgramEnrolment, conceptRepository: ConceptRepository, programEncounterRequest: ProgramEncounterRequest, observationService: ObservationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| conceptRepository | ConceptRepository | - | - |
| programEncounterRequest | ProgramEncounterRequest | - | - |
| observationService | ObservationService | - | - |

**Returns**: `public`



### ProgramEnrolmentForProgramEncounterRuleInput(unknown: programEnrolment, unknown: conceptRepository, unknown: observationService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEnrolment | - | - |
| unknown | conceptRepository | - | - |
| unknown | observationService | - | - |

**Returns**: `new`



### getEncounterType() → EncounterType

**Returns**: `EncounterType`



### getName() → String

**Returns**: `String`



### getEncounterDateTime() → Date

**Returns**: `Date`



### getProgramEnrolment() → ProgramEnrolmentForProgramEncounterRuleInput

**Returns**: `ProgramEnrolmentForProgramEncounterRuleInput`



### getObservationValue(conceptName: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `Object`


