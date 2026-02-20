# API Reference: ProgramEnrolmentForProgramEncounterRuleInput.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/adapter/contract/encounter/ProgramEnrolmentForProgramEncounterRuleInput.java`

---

## Classes

### ProgramEnrolmentForProgramEncounterRuleInput

**Inherits from**: (none)

#### Methods

##### ProgramEnrolmentForProgramEncounterRuleInput(programEnrolment: ProgramEnrolment, conceptRepository: ConceptRepository, observationService: ObservationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| conceptRepository | ConceptRepository | - | - |
| observationService | ObservationService | - | - |

**Returns**: `public`


##### getProgram() → Program

**Returns**: `Program`


##### getEnrolmentDateTime() → DateTime

**Returns**: `DateTime`


##### getProgramExitDateTime() → DateTime

**Returns**: `DateTime`


##### getObservationValue(conceptName: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `Object`


##### getIndividual() → Individual

**Returns**: `Individual`


##### getObservationReadableValueInEntireEnrolment(conceptName: String, programEncounter: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |
| programEncounter | Object | - | - |

**Returns**: `Object`


##### findEncounter(encounterTypeName: String, encounterName: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| encounterName | String | - | - |

**Returns**: `ProgramEncounter`


##### hasEncounter(encounterTypeName: String, encounterName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| encounterName | String | - | - |

**Returns**: `boolean`




## Functions

### ProgramEnrolmentForProgramEncounterRuleInput(programEnrolment: ProgramEnrolment, conceptRepository: ConceptRepository, observationService: ObservationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |
| conceptRepository | ConceptRepository | - | - |
| observationService | ObservationService | - | - |

**Returns**: `public`



### getProgram() → Program

**Returns**: `Program`



### getEnrolmentDateTime() → DateTime

**Returns**: `DateTime`



### getProgramExitDateTime() → DateTime

**Returns**: `DateTime`



### getObservationValue(conceptName: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `Object`



### getIndividual() → Individual

**Returns**: `Individual`



### getObservationReadableValueInEntireEnrolment(conceptName: String, programEncounter: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |
| programEncounter | Object | - | - |

**Returns**: `Object`



### findEncounter(encounterTypeName: String, encounterName: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| encounterName | String | - | - |

**Returns**: `ProgramEncounter`



### hasEncounter(encounterTypeName: String, encounterName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| encounterName | String | - | - |

**Returns**: `boolean`


