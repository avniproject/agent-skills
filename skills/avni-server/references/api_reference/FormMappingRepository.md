# API Reference: FormMappingRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/application/FormMappingRepository.java`

---

## Functions

### findByProgramIdAndImplVersion(programId: Long, implVersion: int, pageable: Pageable) → Page<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programId | Long | - | - |
| implVersion | int | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<FormMapping>`



### findByProgramId(programId: Long, pageable: Pageable) → Page<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programId | Long | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<FormMapping>`



### findByFormIdAndImplVersion(formId: Long, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formId | Long | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### findByFormId(formId: Long) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formId | Long | - | - |

**Returns**: `List<FormMapping>`



### findFirstByFormAndImplVersion(form: Form, implVersion: int) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |
| implVersion | int | - | - |

**Returns**: `FormMapping`



### findFirstByForm(form: Form) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |

**Returns**: `FormMapping`



### findByFormIdAndImplVersionAndIsVoidedFalse(formId: Long, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formId | Long | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### findByFormIdAndIsVoidedFalse(formId: Long) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formId | Long | - | - |

**Returns**: `List<FormMapping>`



### findByProgramIdAndEncounterTypeIdAndFormFormTypeAndSubjectTypeIdAndImplVersionAndIsVoidedFalse(programId: Long, encounterTypeId: Long, formType: FormType, subjectTypeId: Long, implVersion: int) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programId | Long | - | - |
| encounterTypeId | Long | - | - |
| formType | FormType | - | - |
| subjectTypeId | Long | - | - |
| implVersion | int | - | - |

**Returns**: `FormMapping`



### findByProgramIdAndEncounterTypeIdAndFormFormTypeAndSubjectTypeIdAndIsVoidedFalse(programId: Long, encounterTypeId: Long, formType: FormType, subjectTypeId: Long) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programId | Long | - | - |
| encounterTypeId | Long | - | - |
| formType | FormType | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeAndFormFormTypeAndImplVersionAndIsVoidedFalse(subjectType: SubjectType, formType: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### findBySubjectTypeAndFormFormTypeAndIsVoidedFalse(subjectType: SubjectType, formType: FormType) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| formType | FormType | - | - |

**Returns**: `List<FormMapping>`



### findBySubjectTypeNameAndFormFormTypeAndIsVoidedFalseAndImplVersion(subjectType: String, formType: FormType, implVersion: int) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | String | - | - |
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeNameAndFormFormTypeAndIsVoidedFalse(subjectType: String, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | String | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`



### findAllOperational() → List<FormMapping>

**Returns**: `List<FormMapping>`



### findByName(name: String) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `FormMapping`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `FormMapping`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findBySubjectTypeAndProgramNullAndEncounterTypeNullAndImplVersionAndIsVoidedFalse(subjectType: SubjectType, implVersion: int) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| implVersion | int | - | - |

**Returns**: `FormMapping`



### getRegistrationFormMapping(subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeAndProgramAndEncounterTypeNullAndFormFormTypeAndImplVersionAndIsVoidedFalse(subjectType: SubjectType, program: Program, formType: FormType, implVersion: int) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `FormMapping`



### getProgramEnrolmentFormMapping(subjectType: SubjectType, program: Program) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeAndProgramAndEncounterTypeNullAndFormFormTypeAndImplVersionAndIsVoidedFalse(unknown: subjectType, unknown: program, unknown: FormType.ProgramEnrolment, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | program | - | - |
| unknown | FormType.ProgramEnrolment | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### getProgramExitFormMapping(subjectType: SubjectType, program: Program) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeAndProgramAndEncounterTypeNullAndFormFormTypeAndImplVersionAndIsVoidedFalse(unknown: subjectType, unknown: program, unknown: FormType.ProgramExit, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | program | - | - |
| unknown | FormType.ProgramExit | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### findAllBySubjectTypeAndProgramNotNullAndEncounterTypeNullAndFormFormTypeAndImplVersionAndIsVoidedFalse(subjectType: SubjectType, formType: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### getAllProgramEnrolmentFormMapping(subjectType: SubjectType) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `List<FormMapping>`



### findAllBySubjectTypeAndProgramNotNullAndEncounterTypeNullAndFormFormTypeAndImplVersionAndIsVoidedFalse(unknown: subjectType, unknown: FormType.ProgramEnrolment, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | FormType.ProgramEnrolment | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### getAllProgramEnrolmentFormMapping(subjectTypes: List<SubjectType>) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypes | List<SubjectType> | - | - |

**Returns**: `List<FormMapping>`



### findAllBySubjectTypeInAndProgramNotNullAndEncounterTypeNullAndFormFormTypeAndImplVersionAndIsVoidedFalse(unknown: subjectTypes, unknown: FormType.ProgramEnrolment, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectTypes | - | - |
| unknown | FormType.ProgramEnrolment | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### findAllBySubjectTypeInAndProgramNotNullAndEncounterTypeNullAndFormFormTypeAndImplVersionAndIsVoidedFalse(subjectTypes: List<SubjectType>, formType: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypes | List<SubjectType> | - | - |
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### findByFormFormTypeAndImplVersionAndIsVoidedFalse(formType: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### findByFormFormTypeAndIsVoidedFalse(formType: FormType) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | FormType | - | - |

**Returns**: `List<FormMapping>`



### findByFormFormTypeAndImplVersionAndIsVoidedFalse(unknown: formType, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formType | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### findByFormFormTypeAndImplVersionAndIsVoidedTrueOrderByLastModifiedDateTimeDesc(formType: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### findByFormFormTypeAndIsVoidedTrueOrderByLastModifiedDateTimeDesc(formType: FormType) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | FormType | - | - |

**Returns**: `List<FormMapping>`



### getAllProgramEnrolmentFormMappings() → List<FormMapping>

**Returns**: `List<FormMapping>`



### findByFormFormTypeAndIsVoidedFalse(unknown: FormType.ProgramEnrolment) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | FormType.ProgramEnrolment | - | - |

**Returns**: `return`



### findBySubjectTypeAndProgramAndEncounterTypeAndIsVoidedFalseAndFormFormTypeAndImplVersion(subjectType: SubjectType, program: Program, encounterType: EncounterType, formType: FormType, implVersion: int) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeAndProgramAndEncounterTypeAndIsVoidedFalseAndFormFormType(subjectType: SubjectType, program: Program, encounterType: EncounterType, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`



### getProgramEncounterFormMapping(subjectType: SubjectType, program: Program, encounterType: EncounterType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeAndProgramAndEncounterTypeAndIsVoidedFalseAndFormFormType(unknown: subjectType, unknown: program, unknown: encounterType, unknown: FormType.ProgramEncounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | program | - | - |
| unknown | encounterType | - | - |
| unknown | FormType.ProgramEncounter | - | - |

**Returns**: `return`



### getProgramEncounterCancelFormMapping(subjectType: SubjectType, program: Program, encounterType: EncounterType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeAndProgramAndEncounterTypeAndIsVoidedFalseAndFormFormType(unknown: subjectType, unknown: program, unknown: encounterType, unknown: FormType.ProgramEncounterCancellation) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | program | - | - |
| unknown | encounterType | - | - |
| unknown | FormType.ProgramEncounterCancellation | - | - |

**Returns**: `return`



### findAllBySubjectTypeAndProgramAndEncounterTypeNotNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(subjectType: SubjectType, program: Program, formType: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### getAllProgramEncounterFormMappings(subjectType: SubjectType, program: Program) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |

**Returns**: `List<FormMapping>`



### findAllBySubjectTypeAndProgramAndEncounterTypeNotNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(unknown: subjectType, unknown: program, unknown: FormType.ProgramEncounter, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | program | - | - |
| unknown | FormType.ProgramEncounter | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### findByEncounterTypeNotNullAndProgramNotNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(programEncounter: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### getAllProgramEncounterFormMappings() → List<FormMapping>

**Returns**: `List<FormMapping>`



### findByEncounterTypeNotNullAndProgramNotNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(unknown: FormType.ProgramEncounter, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | FormType.ProgramEncounter | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### findBySubjectTypeAndProgramNullAndEncounterTypeAndIsVoidedFalseAndFormFormTypeAndImplVersion(subjectType: SubjectType, encounterType: EncounterType, formType: FormType, implVersion: int) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | EncounterType | - | - |
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `FormMapping`



### getGeneralEncounterFormMapping(subjectType: SubjectType, encounterType: EncounterType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | EncounterType | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeAndProgramNullAndEncounterTypeAndIsVoidedFalseAndFormFormTypeAndImplVersion(unknown: subjectType, unknown: encounterType, unknown: FormType.Encounter, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | encounterType | - | - |
| unknown | FormType.Encounter | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### getGeneralEncounterCancelFormMapping(subjectType: SubjectType, encounterType: EncounterType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | EncounterType | - | - |

**Returns**: `FormMapping`



### findBySubjectTypeAndProgramNullAndEncounterTypeAndIsVoidedFalseAndFormFormTypeAndImplVersion(unknown: subjectType, unknown: encounterType, unknown: FormType.IndividualEncounterCancellation, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | encounterType | - | - |
| unknown | FormType.IndividualEncounterCancellation | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### findAllBySubjectTypeAndProgramNullAndEncounterTypeNotNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(subjectType: SubjectType, formType: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### getAllGeneralEncounterFormMappings(subjectType: SubjectType) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `List<FormMapping>`



### findAllBySubjectTypeAndProgramNullAndEncounterTypeNotNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(unknown: subjectType, unknown: FormType.Encounter, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |
| unknown | FormType.Encounter | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### getAllGeneralEncounterFormMappings() → List<FormMapping>

**Returns**: `List<FormMapping>`



### findAllByProgramNullAndEncounterTypeNotNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(unknown: FormType.Encounter, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | FormType.Encounter | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### findAllByProgramNullAndEncounterTypeNotNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(formType: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### findAllByProgramNullAndEncounterTypeNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(formType: FormType, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | FormType | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### getAllRegistrationFormMappings() → List<FormMapping>

**Returns**: `List<FormMapping>`



### findAllByProgramNullAndEncounterTypeNullAndIsVoidedFalseAndFormFormTypeAndImplVersion(unknown: FormType.IndividualProfile, unknown: FormMapping.IMPL_VERSION) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | FormType.IndividualProfile | - | - |
| unknown | FormMapping.IMPL_VERSION | - | - |

**Returns**: `return`



### getRequiredFormMapping(subjectTypeUUID: String, programUUID: String, encounterTypeUUID: String, formType: FormType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| programUUID | String | - | - |
| encounterTypeUUID | String | - | - |
| formType | FormType | - | - |

**Returns**: `FormMapping`



### findRequiredFormMappings(subjectTypeUUID: String, programUUID: String, encounterTypeUUID: String, formType: FormType) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| programUUID | String | - | - |
| encounterTypeUUID | String | - | - |
| formType | FormType | - | - |

**Returns**: `List<FormMapping>`



### on(unknown: subject_type_id, unknown: observations_type_entity_id, unknown: entity_id) → distinct

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subject_type_id | - | - |
| unknown | observations_type_entity_id | - | - |
| unknown | entity_id | - | - |

**Returns**: `distinct`



### findByProgramNullAndEncounterTypeNotNullAndIsVoidedFalse() → List<FormMapping>

**Returns**: `List<FormMapping>`



### on(unknown: subject_type_id, unknown: observations_type_entity_id, unknown: entity_id) → distinct

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subject_type_id | - | - |
| unknown | observations_type_entity_id | - | - |
| unknown | entity_id | - | - |

**Returns**: `distinct`



### findByProgramNotNullAndEncounterTypeNotNullAndIsVoidedFalse() → List<FormMapping>

**Returns**: `List<FormMapping>`



### getSubjectTypesMappedToAForm(unknown: @Param("formUUID") → List<SubjectType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("formUUID" | - | - |

**Returns**: `List<SubjectType>`



### IN(fm.program.id: SELECT) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fm.program.id | SELECT | - | - |

**Returns**: `id`



### getProgramsMappedToAForm(unknown: @Param("formUUID") → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("formUUID" | - | - |

**Returns**: `List<String>`



### saveAll(entities: Iterable<S>) → List<S>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | Iterable<S> | - | - |

**Returns**: `List<S>`



### RuntimeException(supported": "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| supported" | "Not | - | - |

**Returns**: `new`



### saveAndFlush(entity: S) → S

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | S | - | - |

**Returns**: `S`



### RuntimeException(supported": "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| supported" | "Not | - | - |

**Returns**: `new`



### saveFormMapping(formMapping: FormMapping) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |

**Returns**: `FormMapping`



### findAllByOrganisationIdAndImplVersion(organisationId: Long, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### findAllByOrganisationId(organisationId: Long) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `List<FormMapping>`



### getAllProgramEncounterTypeFormMapping(subjectTypes: List<SubjectType>, programs: List<Program>) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypes | List<SubjectType> | - | - |
| programs | List<Program> | - | - |

**Returns**: `List<FormMapping>`



### findAllBySubjectTypeInAndProgramInAndEncounterTypeNotNullAndIsVoidedFalseAndImplVersion(subjectTypes: List<SubjectType>, programs: List<Program>, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypes | List<SubjectType> | - | - |
| programs | List<Program> | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`



### getAllGeneralEncounterTypeFormMapping(subjectTypes: List<SubjectType>) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypes | List<SubjectType> | - | - |

**Returns**: `List<FormMapping>`



### findAllBySubjectTypeInAndProgramNullAndEncounterTypeNotNullAndIsVoidedFalseAndImplVersion(subjectTypes: List<SubjectType>, implVersion: int) → List<FormMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypes | List<SubjectType> | - | - |
| implVersion | int | - | - |

**Returns**: `List<FormMapping>`


