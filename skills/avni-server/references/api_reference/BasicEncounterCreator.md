# API Reference: BasicEncounterCreator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/creator/BasicEncounterCreator.java`

---

## Classes

### BasicEncounterCreator

**Inherits from**: (none)

#### Methods

##### BasicEncounterCreator(encounterTypeCreator: EncounterTypeCreator, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeCreator | EncounterTypeCreator | - | - |
| userService | UserService | - | - |

**Returns**: `public`


##### LocationCreator() → new

**Returns**: `new`


##### updateEncounterFields(row: Row, basicEncounter: AbstractEncounter, allErrorMsgs: List<String>, mode: EncounterUploadMode) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| basicEncounter | AbstractEncounter | - | - |
| allErrorMsgs | List<String> | - | - |
| mode | EncounterUploadMode | - | - |

**Returns**: `void`


##### DateCreator() → new

**Returns**: `new`




## Functions

### BasicEncounterCreator(encounterTypeCreator: EncounterTypeCreator, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeCreator | EncounterTypeCreator | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### LocationCreator() → new

**Returns**: `new`



### updateEncounterFields(row: Row, basicEncounter: AbstractEncounter, allErrorMsgs: List<String>, mode: EncounterUploadMode) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| basicEncounter | AbstractEncounter | - | - |
| allErrorMsgs | List<String> | - | - |
| mode | EncounterUploadMode | - | - |

**Returns**: `void`



### DateCreator() → new

**Returns**: `new`


