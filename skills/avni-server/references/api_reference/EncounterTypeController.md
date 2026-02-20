# API Reference: EncounterTypeController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/EncounterTypeController.java`

---

## Functions

### EncounterTypeController(encounterTypeRepository: EncounterTypeRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository, encounterTypeService: EncounterTypeService, formService: FormService, formMappingSevice: FormMappingService, formRepository: FormRepository, formMappingRepository: FormMappingRepository, programRepository: ProgramRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeRepository | EncounterTypeRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |
| encounterTypeService | EncounterTypeService | - | - |
| formService | FormService | - | - |
| formMappingSevice | FormMappingService | - | - |
| formRepository | FormRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| programRepository | ProgramRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### save(List<EntityTypeContract>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<EntityTypeContract> | @RequestBody | - | - |

**Returns**: `void`



### wrap(.findPageByIsVoidedFalse(pageable: operationalEncounterTypeRepository) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| .findPageByIsVoidedFalse(pageable | operationalEncounterTypeRepository | - | - |

**Returns**: `return`



### getAllEncounterTypes(=: @RequestParam(required, =: name) → List<EncounterTypeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(required | - | - |
| = | name | - | - |

**Returns**: `List<EncounterTypeContract>`



### EncounterTypeContract() → new

**Returns**: `new`



### encounterTypes() → List<OperationalEncounterType>

**Returns**: `List<OperationalEncounterType>`



### getOne(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### getOne(unknown: @PathVariable("uuid") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("uuid" | - | - |

**Returns**: `ResponseEntity`



### saveEncounterTypeForWeb(EncounterTypeContractWeb: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EncounterTypeContractWeb | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### EncounterType() → new

**Returns**: `new`



### OperationalEncounterType() → new

**Returns**: `new`



### updateEncounterTypeForWeb(EncounterTypeContractWeb: @RequestBody, unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EncounterTypeContractWeb | @RequestBody | - | - |
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### buildEncounter(encounterType: EncounterType, request: EncounterTypeContractWeb) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EncounterType | - | - |
| request | EncounterTypeContractWeb | - | - |

**Returns**: `void`



### saveFormsAndMapping(request: EncounterTypeContractWeb, encounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | EncounterTypeContractWeb | - | - |
| encounterType | EncounterType | - | - |

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



### voidEncounterType(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### FormMappingParameterObject(unknown: null, unknown: null, unknown: encounterType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | encounterType.getUuid( | - | - |

**Returns**: `new`



### validateFormTransition(request: EncounterTypeContractWeb, existingEncounterMapping: FormMapping, existingECancellationMapping: FormMapping, errorMessageTemplate: String) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | EncounterTypeContractWeb | - | - |
| existingEncounterMapping | FormMapping | - | - |
| existingECancellationMapping | FormMapping | - | - |
| errorMessageTemplate | String | - | - |

**Returns**: `ResponseEntity`



### isSharedForm(existingMapping: FormMapping, newFormUuid: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingMapping | FormMapping | - | - |
| newFormUuid | String | - | - |

**Returns**: `boolean`



### handleFormTransition(request: EncounterTypeContractWeb, existingEncounterMapping: FormMapping, existingCancellationMapping: FormMapping, targetEncounterFormType: FormType, targetCancellationFormType: FormType, program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | EncounterTypeContractWeb | - | - |
| existingEncounterMapping | FormMapping | - | - |
| existingCancellationMapping | FormMapping | - | - |
| targetEncounterFormType | FormType | - | - |
| targetCancellationFormType | FormType | - | - |
| program | Program | - | - |

**Returns**: `void`



### convertFormAndUpdateMapping(existingMapping: FormMapping, newFormUuid: String, targetFormType: FormType, program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingMapping | FormMapping | - | - |
| newFormUuid | String | - | - |
| targetFormType | FormType | - | - |
| program | Program | - | - |

**Returns**: `void`


