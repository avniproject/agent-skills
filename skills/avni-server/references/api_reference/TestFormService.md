# API Reference: TestFormService.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/builder/TestFormService.java`

---

## Classes

### TestFormService

**Inherits from**: (none)

#### Methods

##### TestFormService(conceptRepository: ConceptRepository, formRepository: FormRepository, formMappingRepository: FormMappingRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, operationalProgramRepository: OperationalProgramRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| formRepository | FormRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |

**Returns**: `public`


##### createEnrolmentForm(subjectType: SubjectType, program: Program, formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |

**Returns**: `FormMapping`


##### FormMappingBuilder() → new

**Returns**: `new`


##### createRegistrationForm(subjectType: SubjectType, formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>, questionGroupConcept: Concept, childQGConcepts: List<Concept>, repeatableQuestionGroupConcept: Concept, childRQGConcepts: List<Concept>) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |
| questionGroupConcept | Concept | - | - |
| childQGConcepts | List<Concept> | - | - |
| repeatableQuestionGroupConcept | Concept | - | - |
| childRQGConcepts | List<Concept> | - | - |

**Returns**: `FormMapping`


##### FormMappingBuilder() → new

**Returns**: `new`


##### createForm(formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>, formType: FormType, questionGroupConcept: Concept, qgChildConcepts: List<Concept>, repeatableQuestionGroupConcept: Concept, childRQGConcepts: List<Concept>) → Form

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |
| formType | FormType | - | - |
| questionGroupConcept | Concept | - | - |
| qgChildConcepts | List<Concept> | - | - |
| repeatableQuestionGroupConcept | Concept | - | - |
| childRQGConcepts | List<Concept> | - | - |

**Returns**: `Form`


##### TestFormBuilder() → new

**Returns**: `new`


##### TestFormElementGroupBuilder() → new

**Returns**: `new`


##### TestFormElementBuilder() → new

**Returns**: `new`


##### TestFormElementBuilder() → new

**Returns**: `new`


##### TestFormElementBuilder() → new

**Returns**: `new`


##### TestFormElementBuilder() → new

**Returns**: `new`


##### TestFormElementBuilder() → new

**Returns**: `new`


##### TestFormElementBuilder() → new

**Returns**: `new`


##### addDecisionConcepts(formId: Long, concepts: Concept...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formId | Long | - | - |
| concepts | Concept... | - | - |

**Returns**: `void`


##### createEncounterFormMapping(subjectType: SubjectType, program: Program, encounterType: EncounterType, form: Form) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| form | Form | - | - |

**Returns**: `FormMapping`


##### OperationalEncounterType() → new

**Returns**: `new`


##### FormMappingBuilder() → new

**Returns**: `new`


##### createEncounterForm(subjectType: SubjectType, encounterType: EncounterType, formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | EncounterType | - | - |
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |

**Returns**: `FormMapping`


##### createEncounterFormMapping(unknown: subjectType, unknown: null, unknown: encounterType, unknown: form) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | null | - | - |
| unknown | encounterType | - | - |
| unknown | form | - | - |

**Returns**: `return`


##### createProgramEncounterForm(subjectType: SubjectType, program: Program, encounterType: EncounterType, formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |

**Returns**: `FormMapping`


##### createEncounterFormMapping(unknown: subjectType, unknown: program, unknown: encounterType, unknown: form) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | program | - | - |
| unknown | encounterType | - | - |
| unknown | form | - | - |

**Returns**: `return`




## Functions

### TestFormService(conceptRepository: ConceptRepository, formRepository: FormRepository, formMappingRepository: FormMappingRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, operationalProgramRepository: OperationalProgramRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| formRepository | FormRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |

**Returns**: `public`



### createEnrolmentForm(subjectType: SubjectType, program: Program, formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |

**Returns**: `FormMapping`



### FormMappingBuilder() → new

**Returns**: `new`



### createRegistrationForm(subjectType: SubjectType, formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>, questionGroupConcept: Concept, childQGConcepts: List<Concept>, repeatableQuestionGroupConcept: Concept, childRQGConcepts: List<Concept>) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |
| questionGroupConcept | Concept | - | - |
| childQGConcepts | List<Concept> | - | - |
| repeatableQuestionGroupConcept | Concept | - | - |
| childRQGConcepts | List<Concept> | - | - |

**Returns**: `FormMapping`



### FormMappingBuilder() → new

**Returns**: `new`



### createForm(formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>, formType: FormType, questionGroupConcept: Concept, qgChildConcepts: List<Concept>, repeatableQuestionGroupConcept: Concept, childRQGConcepts: List<Concept>) → Form

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |
| formType | FormType | - | - |
| questionGroupConcept | Concept | - | - |
| qgChildConcepts | List<Concept> | - | - |
| repeatableQuestionGroupConcept | Concept | - | - |
| childRQGConcepts | List<Concept> | - | - |

**Returns**: `Form`



### TestFormBuilder() → new

**Returns**: `new`



### TestFormElementGroupBuilder() → new

**Returns**: `new`



### TestFormElementBuilder() → new

**Returns**: `new`



### TestFormElementBuilder() → new

**Returns**: `new`



### TestFormElementBuilder() → new

**Returns**: `new`



### TestFormElementBuilder() → new

**Returns**: `new`



### TestFormElementBuilder() → new

**Returns**: `new`



### TestFormElementBuilder() → new

**Returns**: `new`



### addDecisionConcepts(formId: Long, concepts: Concept...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formId | Long | - | - |
| concepts | Concept... | - | - |

**Returns**: `void`



### createEncounterFormMapping(subjectType: SubjectType, program: Program, encounterType: EncounterType, form: Form) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| form | Form | - | - |

**Returns**: `FormMapping`



### OperationalEncounterType() → new

**Returns**: `new`



### FormMappingBuilder() → new

**Returns**: `new`



### createEncounterForm(subjectType: SubjectType, encounterType: EncounterType, formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | EncounterType | - | - |
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |

**Returns**: `FormMapping`



### createEncounterFormMapping(unknown: subjectType, unknown: null, unknown: encounterType, unknown: form) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | null | - | - |
| unknown | encounterType | - | - |
| unknown | form | - | - |

**Returns**: `return`



### createProgramEncounterForm(subjectType: SubjectType, program: Program, encounterType: EncounterType, formName: String, singleSelectedConceptNames: List<String>, multiSelectedConceptNames: List<String>) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| formName | String | - | - |
| singleSelectedConceptNames | List<String> | - | - |
| multiSelectedConceptNames | List<String> | - | - |

**Returns**: `FormMapping`



### createEncounterFormMapping(unknown: subjectType, unknown: program, unknown: encounterType, unknown: form) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | program | - | - |
| unknown | encounterType | - | - |
| unknown | form | - | - |

**Returns**: `return`


