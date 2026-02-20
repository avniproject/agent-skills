# API Reference: ProgramController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ProgramController.java`

---

## Functions

### ProgramController(programRepository: ProgramRepository, operationalProgramRepository: OperationalProgramRepository, programService: ProgramService, individualRepository: IndividualRepository, formService: FormService, formMappingService: FormMappingService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRepository | ProgramRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |
| programService | ProgramService | - | - |
| individualRepository | IndividualRepository | - | - |
| formService | FormService | - | - |
| formMappingService | FormMappingService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### save(List<ProgramRequest>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<ProgramRequest> | @RequestBody | - | - |

**Returns**: `void`



### saveProgramForWeb(ProgramContractWeb: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ProgramContractWeb | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### Program() → new

**Returns**: `new`



### OperationalProgram() → new

**Returns**: `new`



### saveFormsAndMapping(ProgramContractWeb: @RequestBody, program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ProgramContractWeb | @RequestBody | - | - |
| program | Program | - | - |

**Returns**: `void`



### FormMappingParameterObject(unknown: request.getSubjectTypeUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | request.getSubjectTypeUuid( | - | - |

**Returns**: `new`



### FormMappingParameterObject(unknown: request.getSubjectTypeUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | request.getSubjectTypeUuid( | - | - |

**Returns**: `new`



### updateProgramForWeb(ProgramContractWeb: @RequestBody, unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ProgramContractWeb | @RequestBody | - | - |
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### voidProgram(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### FormMappingParameterObject(unknown: null, unknown: program.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | program.getUuid( | - | - |

**Returns**: `new`



### wrap(.findPageByIsVoidedFalse(pageable: operationalProgramRepository) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| .findPageByIsVoidedFalse(pageable | operationalProgramRepository | - | - |

**Returns**: `return`



### getAllPrograms(=: @RequestParam(required, =: name) → List<ProgramContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(required | - | - |
| = | name | - | - |

**Returns**: `List<ProgramContract>`



### ProgramContract() → new

**Returns**: `new`



### getEligiblePrograms(String: @RequestParam) → List<ProgramContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `List<ProgramContractWeb>`



### BadRequestError(%s: "Subject, unknown: subjectUuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | "Subject | - | - |
| unknown | subjectUuid | - | - |

**Returns**: `new`



### getAllPrograms() → List<OperationalProgram>

**Returns**: `List<OperationalProgram>`



### getOne(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`


