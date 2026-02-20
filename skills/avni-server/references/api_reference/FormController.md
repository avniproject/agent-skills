# API Reference: FormController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/FormController.java`

---

## Functions

### FormController(formRepository: FormRepository, programRepository: ProgramRepository, formMappingRepository: FormMappingRepository, operationalProgramRepository: OperationalProgramRepository, entityLinks: RepositoryEntityLinks, projectionFactory: ProjectionFactory, formMappingService: FormMappingService, formService: FormService, userService: UserService, identifierAssignmentService: IdentifierAssignmentService, conceptService: ConceptService, accessControlService: AccessControlService, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRepository | FormRepository | - | - |
| programRepository | ProgramRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |
| entityLinks | RepositoryEntityLinks | - | - |
| projectionFactory | ProjectionFactory | - | - |
| formMappingService | FormMappingService | - | - |
| formService | FormService | - | - |
| userService | UserService | - | - |
| identifierAssignmentService | IdentifierAssignmentService | - | - |
| conceptService | ConceptService | - | - |
| accessControlService | AccessControlService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`



### BasicFormDetails(unknown: form, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | form | - | - |
| unknown | null | - | - |

**Returns**: `new`



### wrap(unknown: basicFormDetailsPage) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | basicFormDetailsPage | - | - |

**Returns**: `return`



### createWeb(CreateUpdateFormRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| CreateUpdateFormRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### FormBuilder(unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |

**Returns**: `new`



### deleteWeb(String: @PathVariable) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ResponseEntity`



### updateMetadata(CreateUpdateFormRequest: @RequestBody, String: @PathVariable) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| CreateUpdateFormRequest | @RequestBody | - | - |
| String | @PathVariable | - | - |

**Returns**: `ResponseEntity`



### FormMappingContract() → new

**Returns**: `new`



### validateUpdateMetadata(request: CreateUpdateFormRequest, requestUUID: String) → Form

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | CreateUpdateFormRequest | - | - |
| requestUUID | String | - | - |

**Returns**: `Form`



### BadRequestError(with: "Form, unknown: requestUUID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | "Form | - | - |
| unknown | requestUUID | - | - |

**Returns**: `new`



### FormBuilder(unknown: existingForm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | existingForm | - | - |

**Returns**: `new`



### export(String: @RequestParam) → FormContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `FormContract`



### FormContract(unknown: formUUID, unknown: form.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formUUID | - | - |
| unknown | form.getName( | - | - |

**Returns**: `new`



### ConceptContract() → new

**Returns**: `new`



### FormElementGroupContract(unknown: formElementGroup.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formElementGroup.getUuid( | - | - |

**Returns**: `new`



### FormElementContract() → new

**Returns**: `new`



### FormatContract(unknown: formElement.getValidFormat() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formElement.getValidFormat( | - | - |

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### getConceptContract(concept: Concept) → ConceptContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `ConceptContract`



### ConceptContract() → new

**Returns**: `new`



### ConceptContract() → new

**Returns**: `new`



### getForms(unknown: @PathVariable("programId") → List<BasicFormDetails>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("programId" | - | - |

**Returns**: `List<BasicFormDetails>`



### ValidationException(program: format("No, unknown: programId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | format("No | - | - |
| unknown | programId | - | - |

**Returns**: `new`



### getFormsByProgram(unknown: program, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | program | - | - |
| unknown | pageable | - | - |

**Returns**: `return`



### getFormsByProgram(program: Program, pageable: Pageable) → List<BasicFormDetails>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| pageable | Pageable | - | - |

**Returns**: `List<BasicFormDetails>`



### BasicFormDetails(unknown: form, unknown: program.getOperationalProgramName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | form | - | - |
| unknown | program.getOperationalProgramName( | - | - |

**Returns**: `new`



### getFormForWeb(String: @PathVariable) → FormWebProjection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `FormWebProjection`



### getFormIdentifiers(String: @PathVariable) → List<IdentifierAssignmentProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `List<IdentifierAssignmentProjection>`


