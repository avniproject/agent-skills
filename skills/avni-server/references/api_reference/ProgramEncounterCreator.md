# API Reference: ProgramEncounterCreator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/creator/ProgramEncounterCreator.java`

---

## Classes

### ProgramEncounterCreator

**Inherits from**: (none)

#### Methods

##### ProgramEncounterCreator(programEncounterRepository: ProgramEncounterRepository, programEnrolmentCreator: ProgramEnrolmentCreator, basicEncounterCreator: BasicEncounterCreator, formMappingRepository: FormMappingRepository, observationCreator: ObservationCreator, programEncounterService: ProgramEncounterService, strategyFactory: EncounterHeaderStrategyFactory, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterRepository | ProgramEncounterRepository | - | - |
| programEnrolmentCreator | ProgramEnrolmentCreator | - | - |
| basicEncounterCreator | BasicEncounterCreator | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| programEncounterService | ProgramEncounterService | - | - |
| strategyFactory | EncounterHeaderStrategyFactory | - | - |
| userService | UserService | - | - |

**Returns**: `public`


##### create(row: Row, encounterUploadMode: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| encounterUploadMode | String | - | - |

**Returns**: `void`


##### Exception(form: String.format("No, unknown: programEncounter.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | programEncounter.getEncounterType( | - | - |

**Returns**: `new`


##### EncounterHeadersCreator(unknown: strategyFactory) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | strategyFactory | - | - |

**Returns**: `new`


##### ObservationCollection() → new

**Returns**: `new`


##### getOrCreateProgramEncounter(row: Row) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |

**Returns**: `ProgramEncounter`


##### createNewEncounter(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`


##### createNewEncounter(externalId: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `ProgramEncounter`


##### ProgramEncounter() → new

**Returns**: `new`




## Functions

### ProgramEncounterCreator(programEncounterRepository: ProgramEncounterRepository, programEnrolmentCreator: ProgramEnrolmentCreator, basicEncounterCreator: BasicEncounterCreator, formMappingRepository: FormMappingRepository, observationCreator: ObservationCreator, programEncounterService: ProgramEncounterService, strategyFactory: EncounterHeaderStrategyFactory, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterRepository | ProgramEncounterRepository | - | - |
| programEnrolmentCreator | ProgramEnrolmentCreator | - | - |
| basicEncounterCreator | BasicEncounterCreator | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| programEncounterService | ProgramEncounterService | - | - |
| strategyFactory | EncounterHeaderStrategyFactory | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### create(row: Row, encounterUploadMode: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| encounterUploadMode | String | - | - |

**Returns**: `void`



### Exception(form: String.format("No, unknown: programEncounter.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | programEncounter.getEncounterType( | - | - |

**Returns**: `new`



### EncounterHeadersCreator(unknown: strategyFactory) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | strategyFactory | - | - |

**Returns**: `new`



### ObservationCollection() → new

**Returns**: `new`



### getOrCreateProgramEncounter(row: Row) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |

**Returns**: `ProgramEncounter`



### createNewEncounter(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`



### createNewEncounter(externalId: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `ProgramEncounter`



### ProgramEncounter() → new

**Returns**: `new`


