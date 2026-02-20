# API Reference: FormMappingService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/FormMappingService.java`

---

## Classes

### FormMappingService

**Inherits from**: NonScopeAwareService

#### Methods

##### FormMappingService(formMappingRepository: FormMappingRepository, encounterTypeRepository: EncounterTypeRepository, programRepository: ProgramRepository, subjectTypeRepository: SubjectTypeRepository, formRepository: FormRepository, taskTypeRepository: TaskTypeRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| formRepository | FormRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### saveFormMapping(parametersForNewMapping: FormMappingParameterObject, form: Form, enableApproval: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parametersForNewMapping | FormMappingParameterObject | - | - |
| form | Form | - | - |
| enableApproval | boolean | - | - |

**Returns**: `void`


##### FormMapping() → new

**Returns**: `new`


##### voidExistingFormMappings(mappingsToVoid: FormMappingParameterObject, form: Form) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mappingsToVoid | FormMappingParameterObject | - | - |
| form | Form | - | - |

**Returns**: `void`


##### createOrUpdateFormMapping(formMappingRequest: FormMappingContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRequest | FormMappingContract | - | - |

**Returns**: `void`


##### RuntimeException(without: "FormMappingRequest) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| without | "FormMappingRequest | - | - |

**Returns**: `new`


##### RuntimeException(not: "Form) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Form | - | - |

**Returns**: `new`


##### FormMapping() → new

**Returns**: `new`


##### ValidationException(associate: "Cannot) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| associate | "Cannot | - | - |

**Returns**: `new`


##### createOrUpdateEmptyFormMapping(formMappingRequest: FormMappingContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRequest | FormMappingContract | - | - |

**Returns**: `void`


##### FormMapping() → new

**Returns**: `new`


##### setEncounterTypeIfRequired(formMapping: FormMapping, formType: FormType, encounterTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| formType | FormType | - | - |
| encounterTypeUuid | String | - | - |

**Returns**: `void`


##### BadRequestError(Type: "Encounter, unknown: encounterTypeUuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Type | "Encounter | - | - |
| unknown | encounterTypeUuid | - | - |

**Returns**: `new`


##### setProgramIfRequired(formMapping: FormMapping, formType: FormType, programUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| formType | FormType | - | - |
| programUuid | String | - | - |

**Returns**: `void`


##### setSubjectTypeIfRequired(formMapping: FormMapping, requestSubjectType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| requestSubjectType | String | - | - |

**Returns**: `void`


##### BadRequestError(type: "Subject, unknown: requestSubjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | "Subject | - | - |
| unknown | requestSubjectType | - | - |

**Returns**: `new`


##### getAllFormElementsAndDecisionMap(subjectTypeUUID: String, programUUID: String, encounterTypeUUID: String, formType: FormType) → LinkedHashMap<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| programUUID | String | - | - |
| encounterTypeUUID | String | - | - |
| formType | FormType | - | - |

**Returns**: `LinkedHashMap<String, FormElement>`


##### getEntityConceptMap(unknown: formMappingRepository.getRequiredFormMapping(subjectTypeUUID, unknown: programUUID, unknown: encounterTypeUUID, unknown: formType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMappingRepository.getRequiredFormMapping(subjectTypeUUID | - | - |
| unknown | programUUID | - | - |
| unknown | encounterTypeUUID | - | - |
| unknown | formType | - | - |

**Returns**: `return`


##### getEntityConceptMap(formMapping: FormMapping, includeVoidedFormElements: boolean) → LinkedHashMap<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| includeVoidedFormElements | boolean | - | - |

**Returns**: `LinkedHashMap<String, FormElement>`


##### getEntityConceptMapForSpecificQuestionGroupFormElement(questionGroupFormElement: FormElement, formMapping: FormMapping, includeVoidedFormElements: boolean) → LinkedHashMap<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionGroupFormElement | FormElement | - | - |
| formMapping | FormMapping | - | - |
| includeVoidedFormElements | boolean | - | - |

**Returns**: `LinkedHashMap<String, FormElement>`


##### getDecisionFormElements(formMapping: FormMapping) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |

**Returns**: `List<FormElement>`


##### FormElement() → new

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### find(encounterType: EncounterType, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EncounterType | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`


##### find(program: Program, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`


##### find(subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`


##### findForSubject(subjectTypeUUID: String) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `FormMapping`


##### findForEncounter(encounterUuid: String, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterUuid | String | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`


##### findForProgram(programUuid: String, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUuid | String | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`


##### findBy(subjectType: SubjectType, program: Program, encounterType: EncounterType, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`


##### getAllPrograms(subjectTypeUuids: List<String>) → List<Program>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUuids | List<String> | - | - |

**Returns**: `List<Program>`


##### getUniqueEncounterTypes(formMappings: List<FormMapping>, formType: FormType) → List<EncounterType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappings | List<FormMapping> | - | - |
| formType | FormType | - | - |

**Returns**: `List<EncounterType>`


##### getEncounterTypes(subjectTypeUuids: List<String>) → List<EncounterType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUuids | List<String> | - | - |

**Returns**: `List<EncounterType>`


##### getUniqueEncounterTypes(unknown: formMappingRepository.getAllGeneralEncounterTypeFormMapping(subjectTypes) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMappingRepository.getAllGeneralEncounterTypeFormMapping(subjectTypes | - | - |

**Returns**: `return`


##### getEncounterTypes(subjectTypeUuids: List<String>, programUuids: List<String>) → List<EncounterType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUuids | List<String> | - | - |
| programUuids | List<String> | - | - |

**Returns**: `List<EncounterType>`


##### getUniqueEncounterTypes(unknown: formMappingRepository.getAllProgramEncounterTypeFormMapping(subjectTypes, unknown: programs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMappingRepository.getAllProgramEncounterTypeFormMapping(subjectTypes | - | - |
| unknown | programs | - | - |

**Returns**: `return`




## Functions

### FormMappingService(formMappingRepository: FormMappingRepository, encounterTypeRepository: EncounterTypeRepository, programRepository: ProgramRepository, subjectTypeRepository: SubjectTypeRepository, formRepository: FormRepository, taskTypeRepository: TaskTypeRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| formRepository | FormRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### saveFormMapping(parametersForNewMapping: FormMappingParameterObject, form: Form, enableApproval: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parametersForNewMapping | FormMappingParameterObject | - | - |
| form | Form | - | - |
| enableApproval | boolean | - | - |

**Returns**: `void`



### FormMapping() → new

**Returns**: `new`



### voidExistingFormMappings(mappingsToVoid: FormMappingParameterObject, form: Form) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mappingsToVoid | FormMappingParameterObject | - | - |
| form | Form | - | - |

**Returns**: `void`



### createOrUpdateFormMapping(formMappingRequest: FormMappingContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRequest | FormMappingContract | - | - |

**Returns**: `void`



### RuntimeException(without: "FormMappingRequest) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| without | "FormMappingRequest | - | - |

**Returns**: `new`



### RuntimeException(not: "Form) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Form | - | - |

**Returns**: `new`



### FormMapping() → new

**Returns**: `new`



### ValidationException(associate: "Cannot) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| associate | "Cannot | - | - |

**Returns**: `new`



### createOrUpdateEmptyFormMapping(formMappingRequest: FormMappingContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRequest | FormMappingContract | - | - |

**Returns**: `void`



### FormMapping() → new

**Returns**: `new`



### setEncounterTypeIfRequired(formMapping: FormMapping, formType: FormType, encounterTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| formType | FormType | - | - |
| encounterTypeUuid | String | - | - |

**Returns**: `void`



### BadRequestError(Type: "Encounter, unknown: encounterTypeUuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Type | "Encounter | - | - |
| unknown | encounterTypeUuid | - | - |

**Returns**: `new`



### setProgramIfRequired(formMapping: FormMapping, formType: FormType, programUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| formType | FormType | - | - |
| programUuid | String | - | - |

**Returns**: `void`



### setSubjectTypeIfRequired(formMapping: FormMapping, requestSubjectType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| requestSubjectType | String | - | - |

**Returns**: `void`



### BadRequestError(type: "Subject, unknown: requestSubjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | "Subject | - | - |
| unknown | requestSubjectType | - | - |

**Returns**: `new`



### getAllFormElementsAndDecisionMap(subjectTypeUUID: String, programUUID: String, encounterTypeUUID: String, formType: FormType) → LinkedHashMap<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| programUUID | String | - | - |
| encounterTypeUUID | String | - | - |
| formType | FormType | - | - |

**Returns**: `LinkedHashMap<String, FormElement>`



### getEntityConceptMap(unknown: formMappingRepository.getRequiredFormMapping(subjectTypeUUID, unknown: programUUID, unknown: encounterTypeUUID, unknown: formType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMappingRepository.getRequiredFormMapping(subjectTypeUUID | - | - |
| unknown | programUUID | - | - |
| unknown | encounterTypeUUID | - | - |
| unknown | formType | - | - |

**Returns**: `return`



### getEntityConceptMap(formMapping: FormMapping, includeVoidedFormElements: boolean) → LinkedHashMap<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| includeVoidedFormElements | boolean | - | - |

**Returns**: `LinkedHashMap<String, FormElement>`



### getEntityConceptMapForSpecificQuestionGroupFormElement(questionGroupFormElement: FormElement, formMapping: FormMapping, includeVoidedFormElements: boolean) → LinkedHashMap<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionGroupFormElement | FormElement | - | - |
| formMapping | FormMapping | - | - |
| includeVoidedFormElements | boolean | - | - |

**Returns**: `LinkedHashMap<String, FormElement>`



### getDecisionFormElements(formMapping: FormMapping) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |

**Returns**: `List<FormElement>`



### FormElement() → new

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### find(encounterType: EncounterType, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EncounterType | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`



### find(program: Program, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`



### find(subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`



### findForSubject(subjectTypeUUID: String) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `FormMapping`



### findForEncounter(encounterUuid: String, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterUuid | String | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`



### findForProgram(programUuid: String, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUuid | String | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`



### findBy(subjectType: SubjectType, program: Program, encounterType: EncounterType, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`



### getAllPrograms(subjectTypeUuids: List<String>) → List<Program>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUuids | List<String> | - | - |

**Returns**: `List<Program>`



### getUniqueEncounterTypes(formMappings: List<FormMapping>, formType: FormType) → List<EncounterType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappings | List<FormMapping> | - | - |
| formType | FormType | - | - |

**Returns**: `List<EncounterType>`



### getEncounterTypes(subjectTypeUuids: List<String>) → List<EncounterType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUuids | List<String> | - | - |

**Returns**: `List<EncounterType>`



### getUniqueEncounterTypes(unknown: formMappingRepository.getAllGeneralEncounterTypeFormMapping(subjectTypes) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMappingRepository.getAllGeneralEncounterTypeFormMapping(subjectTypes | - | - |

**Returns**: `return`



### getEncounterTypes(subjectTypeUuids: List<String>, programUuids: List<String>) → List<EncounterType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUuids | List<String> | - | - |
| programUuids | List<String> | - | - |

**Returns**: `List<EncounterType>`



### getUniqueEncounterTypes(unknown: formMappingRepository.getAllProgramEncounterTypeFormMapping(subjectTypes, unknown: programs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMappingRepository.getAllProgramEncounterTypeFormMapping(subjectTypes | - | - |
| unknown | programs | - | - |

**Returns**: `return`


