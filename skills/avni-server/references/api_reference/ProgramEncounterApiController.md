# API Reference: ProgramEncounterApiController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/api/ProgramEncounterApiController.java`

---

## Classes

### ProgramEncounterApiController

**Inherits from**: (none)

#### Methods

##### ProgramEncounterApiController(programEncounterRepository: ProgramEncounterRepository, conceptRepository: ConceptRepository, conceptService: ConceptService, programEnrolmentRepository: ProgramEnrolmentRepository, encounterTypeRepository: EncounterTypeRepository, programEncounterService: ProgramEncounterService, mediaObservationService: MediaObservationService, accessControlService: AccessControlService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterRepository | ProgramEncounterRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programEncounterService | ProgramEncounterService | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |
| userService | UserService | - | - |

**Returns**: `public`


##### getEncounters(=: @RequestParam(name, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(name | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`


##### TimeTakenLogger(program: "Search, unknown: logger) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | "Search | - | - |
| unknown | logger | - | - |

**Returns**: `new`


##### ResponsePage(unknown: programEncounterResponses, unknown: programEncounters.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEncounterResponses | - | - |
| unknown | programEncounters.getNumberOfElements( | - | - |

**Returns**: `new`


##### createSearchParams(lastModifiedDateTime: DateTime, now: DateTime, encounterTypeStr: String, concepts: String, programEnrolmentUuid: String) → SearchParams

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| encounterTypeStr | String | - | - |
| concepts | String | - | - |
| programEnrolmentUuid | String | - | - |

**Returns**: `SearchParams`


##### get(unknown: @PathVariable("id") → ResponseEntity<EncounterResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<EncounterResponse>`


##### post(ApiProgramEncounterRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiProgramEncounterRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### getProgramEnrolment(request: ApiProgramEncounterRequest) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ApiProgramEncounterRequest | - | - |

**Returns**: `ProgramEnrolment`


##### IllegalArgumentException(not: String.format("ProgramEnrolment, unknown: request.getEnrolmentId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("ProgramEnrolment | - | - |
| unknown | request.getEnrolmentId( | - | - |

**Returns**: `new`


##### put(String: @PathVariable, ApiProgramEncounterRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| ApiProgramEncounterRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### IllegalArgumentException(not: String.format("Encounter, unknown: id, unknown: request.getExternalId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Encounter | - | - |
| unknown | id | - | - |
| unknown | request.getExternalId( | - | - |

**Returns**: `new`


##### delete(unknown: @PathVariable("id") → ResponseEntity<EncounterResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<EncounterResponse>`


##### updateEncounter(encounter: ProgramEncounter, request: ApiProgramEncounterRequest) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ProgramEncounter | - | - |
| request | ApiProgramEncounterRequest | - | - |

**Returns**: `ProgramEncounter`


##### IllegalArgumentException(type: String.format("Encounter, unknown: request.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String.format("Encounter | - | - |
| unknown | request.getEncounterType( | - | - |

**Returns**: `new`


##### createEncounter(externalId: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `ProgramEncounter`


##### ProgramEncounter() → new

**Returns**: `new`




## Functions

### ProgramEncounterApiController(programEncounterRepository: ProgramEncounterRepository, conceptRepository: ConceptRepository, conceptService: ConceptService, programEnrolmentRepository: ProgramEnrolmentRepository, encounterTypeRepository: EncounterTypeRepository, programEncounterService: ProgramEncounterService, mediaObservationService: MediaObservationService, accessControlService: AccessControlService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterRepository | ProgramEncounterRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programEncounterService | ProgramEncounterService | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### getEncounters(=: @RequestParam(name, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(name | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`



### TimeTakenLogger(program: "Search, unknown: logger) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | "Search | - | - |
| unknown | logger | - | - |

**Returns**: `new`



### ResponsePage(unknown: programEncounterResponses, unknown: programEncounters.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEncounterResponses | - | - |
| unknown | programEncounters.getNumberOfElements( | - | - |

**Returns**: `new`



### createSearchParams(lastModifiedDateTime: DateTime, now: DateTime, encounterTypeStr: String, concepts: String, programEnrolmentUuid: String) → SearchParams

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| encounterTypeStr | String | - | - |
| concepts | String | - | - |
| programEnrolmentUuid | String | - | - |

**Returns**: `SearchParams`



### get(unknown: @PathVariable("id") → ResponseEntity<EncounterResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<EncounterResponse>`



### post(ApiProgramEncounterRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiProgramEncounterRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### getProgramEnrolment(request: ApiProgramEncounterRequest) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ApiProgramEncounterRequest | - | - |

**Returns**: `ProgramEnrolment`



### IllegalArgumentException(not: String.format("ProgramEnrolment, unknown: request.getEnrolmentId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("ProgramEnrolment | - | - |
| unknown | request.getEnrolmentId( | - | - |

**Returns**: `new`



### put(String: @PathVariable, ApiProgramEncounterRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| ApiProgramEncounterRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### IllegalArgumentException(not: String.format("Encounter, unknown: id, unknown: request.getExternalId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Encounter | - | - |
| unknown | id | - | - |
| unknown | request.getExternalId( | - | - |

**Returns**: `new`



### delete(unknown: @PathVariable("id") → ResponseEntity<EncounterResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<EncounterResponse>`



### updateEncounter(encounter: ProgramEncounter, request: ApiProgramEncounterRequest) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ProgramEncounter | - | - |
| request | ApiProgramEncounterRequest | - | - |

**Returns**: `ProgramEncounter`



### IllegalArgumentException(type: String.format("Encounter, unknown: request.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String.format("Encounter | - | - |
| unknown | request.getEncounterType( | - | - |

**Returns**: `new`



### createEncounter(externalId: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `ProgramEncounter`



### ProgramEncounter() → new

**Returns**: `new`


