# API Reference: GeneralEncounterApiController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/api/GeneralEncounterApiController.java`

---

## Classes

### GeneralEncounterApiController

**Inherits from**: (none)

#### Methods

##### GeneralEncounterApiController(conceptService: ConceptService, encounterRepository: EncounterRepository, conceptRepository: ConceptRepository, individualRepository: IndividualRepository, encounterTypeRepository: EncounterTypeRepository, encounterService: EncounterService, mediaObservationService: MediaObservationService, accessControlService: AccessControlService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptService | ConceptService | - | - |
| encounterRepository | EncounterRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| encounterService | EncounterService | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |
| userService | UserService | - | - |

**Returns**: `public`


##### getEncounters(=: @RequestParam(value, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`


##### EncounterSearchRequest(unknown: CHSEntity.toDate(lastModifiedDateTime) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `new`


##### TimeTakenLogger(encounters": "Search, unknown: logger) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounters" | "Search | - | - |
| unknown | logger | - | - |

**Returns**: `new`


##### ResponsePage(unknown: encounterResponses, unknown: encounters.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterResponses | - | - |
| unknown | encounters.getNumberOfElements( | - | - |

**Returns**: `new`


##### get(unknown: @PathVariable("id") → ResponseEntity<EncounterResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<EncounterResponse>`


##### post(ApiEncounterRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiEncounterRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### initializeIndividual(request: ApiEncounterRequest, encounter: Encounter) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ApiEncounterRequest | - | - |
| encounter | Encounter | - | - |

**Returns**: `void`


##### IllegalArgumentException(not: String.format("Individual, unknown: request.getSubjectId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Individual | - | - |
| unknown | request.getSubjectId( | - | - |

**Returns**: `new`


##### put(String: @PathVariable, ApiEncounterRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| ApiEncounterRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### IllegalArgumentException(not: String.format("Encounter, unknown: id, unknown: request.getExternalId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Encounter | - | - |
| unknown | id | - | - |
| unknown | request.getExternalId( | - | - |

**Returns**: `new`


##### patch(String: @PathVariable, Map<String: @RequestBody, request: Object>) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| Map<String | @RequestBody | - | - |
| request | Object> | - | - |

**Returns**: `ResponseEntity`


##### IllegalArgumentException(not: String.format("Encounter, unknown: id, unknown: externalId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Encounter | - | - |
| unknown | id | - | - |
| unknown | externalId | - | - |

**Returns**: `new`


##### delete(unknown: @PathVariable("id") → ResponseEntity<EncounterResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<EncounterResponse>`


##### updateEncounter(encounter: Encounter, request: ApiEncounterRequest) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |
| request | ApiEncounterRequest | - | - |

**Returns**: `Encounter`


##### IllegalArgumentException(type: String.format("Encounter, unknown: request.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String.format("Encounter | - | - |
| unknown | request.getEncounterType( | - | - |

**Returns**: `new`


##### createEncounter(externalId: String) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Encounter`


##### Encounter() → new

**Returns**: `new`




## Functions

### GeneralEncounterApiController(conceptService: ConceptService, encounterRepository: EncounterRepository, conceptRepository: ConceptRepository, individualRepository: IndividualRepository, encounterTypeRepository: EncounterTypeRepository, encounterService: EncounterService, mediaObservationService: MediaObservationService, accessControlService: AccessControlService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptService | ConceptService | - | - |
| encounterRepository | EncounterRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| encounterService | EncounterService | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### getEncounters(=: @RequestParam(value, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`



### EncounterSearchRequest(unknown: CHSEntity.toDate(lastModifiedDateTime) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `new`



### TimeTakenLogger(encounters": "Search, unknown: logger) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounters" | "Search | - | - |
| unknown | logger | - | - |

**Returns**: `new`



### ResponsePage(unknown: encounterResponses, unknown: encounters.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterResponses | - | - |
| unknown | encounters.getNumberOfElements( | - | - |

**Returns**: `new`



### get(unknown: @PathVariable("id") → ResponseEntity<EncounterResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<EncounterResponse>`



### post(ApiEncounterRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiEncounterRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### initializeIndividual(request: ApiEncounterRequest, encounter: Encounter) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ApiEncounterRequest | - | - |
| encounter | Encounter | - | - |

**Returns**: `void`



### IllegalArgumentException(not: String.format("Individual, unknown: request.getSubjectId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Individual | - | - |
| unknown | request.getSubjectId( | - | - |

**Returns**: `new`



### put(String: @PathVariable, ApiEncounterRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| ApiEncounterRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### IllegalArgumentException(not: String.format("Encounter, unknown: id, unknown: request.getExternalId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Encounter | - | - |
| unknown | id | - | - |
| unknown | request.getExternalId( | - | - |

**Returns**: `new`



### patch(String: @PathVariable, Map<String: @RequestBody, request: Object>) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| Map<String | @RequestBody | - | - |
| request | Object> | - | - |

**Returns**: `ResponseEntity`



### IllegalArgumentException(not: String.format("Encounter, unknown: id, unknown: externalId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Encounter | - | - |
| unknown | id | - | - |
| unknown | externalId | - | - |

**Returns**: `new`



### delete(unknown: @PathVariable("id") → ResponseEntity<EncounterResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<EncounterResponse>`



### updateEncounter(encounter: Encounter, request: ApiEncounterRequest) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |
| request | ApiEncounterRequest | - | - |

**Returns**: `Encounter`



### IllegalArgumentException(type: String.format("Encounter, unknown: request.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String.format("Encounter | - | - |
| unknown | request.getEncounterType( | - | - |

**Returns**: `new`



### createEncounter(externalId: String) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Encounter`



### Encounter() → new

**Returns**: `new`


