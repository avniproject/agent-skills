# API Reference: ProgramEnrolmentApiController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/api/ProgramEnrolmentApiController.java`

---

## Classes

### ProgramEnrolmentApiController

**Inherits from**: (none)

#### Methods

##### ProgramEnrolmentApiController(programEnrolmentRepository: ProgramEnrolmentRepository, conceptRepository: ConceptRepository, conceptService: ConceptService, individualRepository: IndividualRepository, programRepository: ProgramRepository, programEnrolmentService: ProgramEnrolmentService, mediaObservationService: MediaObservationService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| individualRepository | IndividualRepository | - | - |
| programRepository | ProgramRepository | - | - |
| programEnrolmentService | ProgramEnrolmentService | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### post(ApiProgramEnrolmentRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiProgramEnrolmentRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### initializeIndividual(request: ApiProgramEnrolmentRequest, programEnrolment: ProgramEnrolment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ApiProgramEnrolmentRequest | - | - |
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `void`


##### put(String: @PathVariable, ApiProgramEnrolmentRequest: @RequestBody) → ResponseEntity<ProgramEnrolmentResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| ApiProgramEnrolmentRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<ProgramEnrolmentResponse>`


##### IllegalArgumentException(not: String.format("ProgramEnrolment, unknown: id, unknown: request.getExternalId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("ProgramEnrolment | - | - |
| unknown | id | - | - |
| unknown | request.getExternalId( | - | - |

**Returns**: `new`


##### updateEnrolment(enrolment: ProgramEnrolment, request: ApiProgramEnrolmentRequest) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolment | ProgramEnrolment | - | - |
| request | ApiProgramEnrolmentRequest | - | - |

**Returns**: `ProgramEnrolment`


##### IllegalArgumentException(not: String.format("Program, unknown: request.getProgram() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Program | - | - |
| unknown | request.getProgram( | - | - |

**Returns**: `new`


##### getEnrolments(=: @RequestParam(name, =: required) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(name | - | - |
| = | required | - | - |

**Returns**: `Object`


##### ResponsePage(unknown: programEnrolmentResponses, unknown: programEnrolments.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEnrolmentResponses | - | - |
| unknown | programEnrolments.getNumberOfElements( | - | - |

**Returns**: `new`


##### get(unknown: @PathVariable("id") → ResponseEntity<ProgramEnrolmentResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<ProgramEnrolmentResponse>`


##### delete(unknown: @PathVariable("id") → ResponseEntity<ProgramEnrolmentResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<ProgramEnrolmentResponse>`


##### createProgramEnrolment(externalId: String) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `ProgramEnrolment`


##### ProgramEnrolment() → new

**Returns**: `new`




## Functions

### ProgramEnrolmentApiController(programEnrolmentRepository: ProgramEnrolmentRepository, conceptRepository: ConceptRepository, conceptService: ConceptService, individualRepository: IndividualRepository, programRepository: ProgramRepository, programEnrolmentService: ProgramEnrolmentService, mediaObservationService: MediaObservationService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| individualRepository | IndividualRepository | - | - |
| programRepository | ProgramRepository | - | - |
| programEnrolmentService | ProgramEnrolmentService | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### post(ApiProgramEnrolmentRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiProgramEnrolmentRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### initializeIndividual(request: ApiProgramEnrolmentRequest, programEnrolment: ProgramEnrolment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ApiProgramEnrolmentRequest | - | - |
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `void`



### put(String: @PathVariable, ApiProgramEnrolmentRequest: @RequestBody) → ResponseEntity<ProgramEnrolmentResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| ApiProgramEnrolmentRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<ProgramEnrolmentResponse>`



### IllegalArgumentException(not: String.format("ProgramEnrolment, unknown: id, unknown: request.getExternalId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("ProgramEnrolment | - | - |
| unknown | id | - | - |
| unknown | request.getExternalId( | - | - |

**Returns**: `new`



### updateEnrolment(enrolment: ProgramEnrolment, request: ApiProgramEnrolmentRequest) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolment | ProgramEnrolment | - | - |
| request | ApiProgramEnrolmentRequest | - | - |

**Returns**: `ProgramEnrolment`



### IllegalArgumentException(not: String.format("Program, unknown: request.getProgram() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Program | - | - |
| unknown | request.getProgram( | - | - |

**Returns**: `new`



### getEnrolments(=: @RequestParam(name, =: required) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(name | - | - |
| = | required | - | - |

**Returns**: `Object`



### ResponsePage(unknown: programEnrolmentResponses, unknown: programEnrolments.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEnrolmentResponses | - | - |
| unknown | programEnrolments.getNumberOfElements( | - | - |

**Returns**: `new`



### get(unknown: @PathVariable("id") → ResponseEntity<ProgramEnrolmentResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<ProgramEnrolmentResponse>`



### delete(unknown: @PathVariable("id") → ResponseEntity<ProgramEnrolmentResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<ProgramEnrolmentResponse>`



### createProgramEnrolment(externalId: String) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `ProgramEnrolment`



### ProgramEnrolment() → new

**Returns**: `new`


