# API Reference: EncounterCreator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/creator/EncounterCreator.java`

---

## Classes

### EncounterCreator

**Inherits from**: (none)

#### Methods

##### EncounterCreator(encounterRepository: EncounterRepository, basicEncounterCreator: BasicEncounterCreator, formMappingRepository: FormMappingRepository, observationCreator: ObservationCreator, encounterService: EncounterService, strategyFactory: EncounterHeaderStrategyFactory, userService: UserService, subjectCreator: SubjectCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterRepository | EncounterRepository | - | - |
| basicEncounterCreator | BasicEncounterCreator | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| encounterService | EncounterService | - | - |
| strategyFactory | EncounterHeaderStrategyFactory | - | - |
| userService | UserService | - | - |
| subjectCreator | SubjectCreator | - | - |

**Returns**: `public`


##### create(row: Row, encounterUploadMode: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| encounterUploadMode | String | - | - |

**Returns**: `void`


##### Exception(form: String.format("No, unknown: encounter.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | encounter.getEncounterType( | - | - |

**Returns**: `new`


##### EncounterHeadersCreator(unknown: strategyFactory) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | strategyFactory | - | - |

**Returns**: `new`


##### ObservationCollection() → new

**Returns**: `new`


##### getOrCreateEncounter(row: Row) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |

**Returns**: `Encounter`


##### createNewEncounter(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`


##### createNewEncounter(externalId: String) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Encounter`


##### Encounter() → new

**Returns**: `new`




## Functions

### EncounterCreator(encounterRepository: EncounterRepository, basicEncounterCreator: BasicEncounterCreator, formMappingRepository: FormMappingRepository, observationCreator: ObservationCreator, encounterService: EncounterService, strategyFactory: EncounterHeaderStrategyFactory, userService: UserService, subjectCreator: SubjectCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterRepository | EncounterRepository | - | - |
| basicEncounterCreator | BasicEncounterCreator | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| encounterService | EncounterService | - | - |
| strategyFactory | EncounterHeaderStrategyFactory | - | - |
| userService | UserService | - | - |
| subjectCreator | SubjectCreator | - | - |

**Returns**: `public`



### create(row: Row, encounterUploadMode: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| encounterUploadMode | String | - | - |

**Returns**: `void`



### Exception(form: String.format("No, unknown: encounter.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | encounter.getEncounterType( | - | - |

**Returns**: `new`



### EncounterHeadersCreator(unknown: strategyFactory) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | strategyFactory | - | - |

**Returns**: `new`



### ObservationCollection() → new

**Returns**: `new`



### getOrCreateEncounter(row: Row) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |

**Returns**: `Encounter`



### createNewEncounter(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`



### createNewEncounter(externalId: String) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Encounter`



### Encounter() → new

**Returns**: `new`


