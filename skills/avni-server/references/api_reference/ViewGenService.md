# API Reference: ViewGenService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/reporting/ViewGenService.java`

---

## Classes

### ViewGenService

**Inherits from**: (none)

#### Methods

##### ViewGenService(operationalProgramRepository: OperationalProgramRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, formMappingRepository: FormMappingRepository, formElementRepository: FormElementRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramRepository | OperationalProgramRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| formElementRepository | FormElementRepository | - | - |

**Returns**: `public`


##### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`


##### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`


##### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`


##### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`


##### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`


##### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`


##### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`


##### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`


##### registrationViews(subjectTypeName: String, spreadMultiSelectObs: boolean) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |
| spreadMultiSelectObs | boolean | - | - |

**Returns**: `Map<String, String>`


##### viewGenConcepts(formElements: List<FormElement>) → List<ViewGenConcept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElements | List<FormElement> | - | - |

**Returns**: `List<ViewGenConcept>`


##### ViewGenConcept(unknown: formElement.getConcept() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formElement.getConcept( | - | - |

**Returns**: `new`


##### ViewGenConcept(unknown: concept, unknown: Names.DecisionConceptMapName, unknown: true, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | concept | - | - |
| unknown | Names.DecisionConceptMapName | - | - |
| unknown | true | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### enrolmentViews(subjectTypeName: String, operationalProgramName: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |
| operationalProgramName | String | - | - |

**Returns**: `Map<String, String>`


##### getSqlsFor(operationalProgramName: String, operationalEncounterTypeName: String, spreadMultiSelectObs: boolean, subjectTypeName: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramName | String | - | - |
| operationalEncounterTypeName | String | - | - |
| spreadMultiSelectObs | boolean | - | - |
| subjectTypeName | String | - | - |

**Returns**: `Map<String, String>`


##### getGeneralEncounterSqls(unknown: operationalEncounterTypes, unknown: spreadMultiSelectObs, unknown: operationalSubjectType.getSubjectType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalEncounterTypes | - | - |
| unknown | spreadMultiSelectObs | - | - |
| unknown | operationalSubjectType.getSubjectType( | - | - |

**Returns**: `return`


##### getProgramEncounterSqls(unknown: operationalProgram, unknown: operationalEncounterTypes, unknown: spreadMultiSelectObs, unknown: operationalSubjectType.getSubjectType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram | - | - |
| unknown | operationalEncounterTypes | - | - |
| unknown | spreadMultiSelectObs | - | - |
| unknown | operationalSubjectType.getSubjectType( | - | - |

**Returns**: `return`


##### IllegalArgumentException(found: String.format("Not, unknown: operationalProgramName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| found | String.format("Not | - | - |
| unknown | operationalProgramName | - | - |

**Returns**: `new`


##### getProgramEncounterSqls(operationalProgram: OperationalProgram, operationalEncounterTypes: List<OperationalEncounterType>, spreadMultiSelectObs: boolean, subjectTypeId: Long, operationalSubjectTypeUUID: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| operationalEncounterTypes | List<OperationalEncounterType> | - | - |
| spreadMultiSelectObs | boolean | - | - |
| subjectTypeId | Long | - | - |
| operationalSubjectTypeUUID | String | - | - |

**Returns**: `Map<String, String>`


##### replaceSubjectAndEnrolmentObsInTemplate(template: String, spreadMultiSelectObs: boolean, operationalSubjectTypeUUID: String, enrolmentFormElements: List<FormElement>, uuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | String | - | - |
| spreadMultiSelectObs | boolean | - | - |
| operationalSubjectTypeUUID | String | - | - |
| enrolmentFormElements | List<FormElement> | - | - |
| uuid | String | - | - |

**Returns**: `String`


##### getGeneralEncounterSqls(types: List<OperationalEncounterType>, spreadMultiSelectObs: boolean, subjectTypeId: Long, operationalSubjectTypeUUID: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| types | List<OperationalEncounterType> | - | - |
| spreadMultiSelectObs | boolean | - | - |
| subjectTypeId | Long | - | - |
| operationalSubjectTypeUUID | String | - | - |

**Returns**: `Map<String, String>`


##### replaceSubjectTypeUUID(template: String, operationalSubjectTypeUUID: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | String | - | - |
| operationalSubjectTypeUUID | String | - | - |

**Returns**: `String`


##### getSqlForProgramEncounter(mainViewQuery: String, operationalEncounterType: OperationalEncounterType, spreadMultiSelectObs: boolean, formElements: List<FormElement>, formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mainViewQuery | String | - | - |
| operationalEncounterType | OperationalEncounterType | - | - |
| spreadMultiSelectObs | boolean | - | - |
| formElements | List<FormElement> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `String`


##### replaceJoinsAndOtherCommonInformation(unknown: formMapping, unknown: programEncounterSql) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMapping | - | - |
| unknown | programEncounterSql | - | - |

**Returns**: `return`


##### replaceJoinsAndOtherCommonInformation(formMapping: FormMapping, sql: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| sql | String | - | - |

**Returns**: `String`


##### getSqlForProgramEncounterCancel(mainViewQuery: String, operationalEncounterType: OperationalEncounterType, spreadMultiSelectObs: boolean, cancelFormElements: List<FormElement>, formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mainViewQuery | String | - | - |
| operationalEncounterType | OperationalEncounterType | - | - |
| spreadMultiSelectObs | boolean | - | - |
| cancelFormElements | List<FormElement> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `String`


##### replaceJoinsAndOtherCommonInformation(unknown: formMapping, unknown: programEncounterCancelSql) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMapping | - | - |
| unknown | programEncounterCancelSql | - | - |

**Returns**: `return`


##### getSqlForGeneralEncounter(mainViewQuery: String, operationalEncounterType: OperationalEncounterType, spreadMultiSelectObs: boolean, formElements: List<FormElement>, formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mainViewQuery | String | - | - |
| operationalEncounterType | OperationalEncounterType | - | - |
| spreadMultiSelectObs | boolean | - | - |
| formElements | List<FormElement> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `String`


##### replaceJoinsAndOtherCommonInformation(unknown: formMapping, unknown: encounterSQL) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMapping | - | - |
| unknown | encounterSQL | - | - |

**Returns**: `return`


##### getSqlForGeneralEncounterCancel(mainViewQuery: String, operationalEncounterType: OperationalEncounterType, spreadMultiSelectObs: boolean, cancelFormElements: List<FormElement>, formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mainViewQuery | String | - | - |
| operationalEncounterType | OperationalEncounterType | - | - |
| spreadMultiSelectObs | boolean | - | - |
| cancelFormElements | List<FormElement> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `String`


##### replaceJoinsAndOtherCommonInformation(unknown: formMapping, unknown: encounterCancelSql) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMapping | - | - |
| unknown | encounterCancelSql | - | - |

**Returns**: `return`


##### getRegistrationFormElements(subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`


##### getFormElements(unknown: null, unknown: null, unknown: FormType.IndividualProfile, unknown: subjectTypeId) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | FormType.IndividualProfile | - | - |
| unknown | subjectTypeId | - | - |

**Returns**: `return`


##### getProgramEnrolmentFormElements(operationalProgram: OperationalProgram, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`


##### getFormElements(unknown: operationalProgram.getProgram() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram.getProgram( | - | - |

**Returns**: `return`


##### getProgramEnrolmentExitFormElements(operationalProgram: OperationalProgram, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`


##### getFormElements(unknown: operationalProgram.getProgram() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram.getProgram( | - | - |

**Returns**: `return`


##### getGeneralEncounterFormElements(subjectTypeId: Long, type: OperationalEncounterType) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| type | OperationalEncounterType | - | - |

**Returns**: `List<FormElement>`


##### getFormElements(unknown: null, unknown: type.getEncounterType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | type.getEncounterType( | - | - |

**Returns**: `return`


##### getGeneralEncounterCancelFormElements(subjectTypeId: Long, type: OperationalEncounterType) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| type | OperationalEncounterType | - | - |

**Returns**: `List<FormElement>`


##### getFormElements(unknown: null, unknown: type.getEncounterType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | type.getEncounterType( | - | - |

**Returns**: `return`


##### getProgramEncounterFormElements(operationalProgram: OperationalProgram, type: OperationalEncounterType, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| type | OperationalEncounterType | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`


##### getFormElements(unknown: operationalProgram.getProgram() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram.getProgram( | - | - |

**Returns**: `return`


##### getProgramEncounterCancelFormElements(operationalProgram: OperationalProgram, type: OperationalEncounterType, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| type | OperationalEncounterType | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`


##### getFormElements(unknown: operationalProgram.getProgram() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram.getProgram( | - | - |

**Returns**: `return`


##### getFormElements(programId: Long, typeId: Long, formType: FormType, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programId | Long | - | - |
| typeId | Long | - | - |
| formType | FormType | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`


##### buildObservationSelection(entity: String, elements: List<FormElement>, spreadMultiSelectObs: boolean) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | String | - | - |
| elements | List<FormElement> | - | - |
| spreadMultiSelectObs | boolean | - | - |

**Returns**: `String`


##### buildObservationSelection(unknown: entity, unknown: elements, unknown: spreadMultiSelectObs, unknown: "observations") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entity | - | - |
| unknown | elements | - | - |
| unknown | spreadMultiSelectObs | - | - |
| unknown | "observations" | - | - |

**Returns**: `return`


##### buildCancelObservationSelection(entity: String, elements: List<FormElement>, spreadMultiSelectObs: boolean) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | String | - | - |
| elements | List<FormElement> | - | - |
| spreadMultiSelectObs | boolean | - | - |

**Returns**: `String`


##### buildObservationSelection(unknown: entity, unknown: elements, unknown: spreadMultiSelectObs, unknown: "cancel_observations") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entity | - | - |
| unknown | elements | - | - |
| unknown | spreadMultiSelectObs | - | - |
| unknown | "cancel_observations" | - | - |

**Returns**: `return`


##### buildExitObservationSelection(elements: List<FormElement>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| elements | List<FormElement> | - | - |

**Returns**: `String`


##### buildObservationSelection(unknown: "programEnrolment", unknown: elements, unknown: false, unknown: "program_exit_observations") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "programEnrolment" | - | - |
| unknown | elements | - | - |
| unknown | false | - | - |
| unknown | "program_exit_observations" | - | - |

**Returns**: `return`


##### buildObservationSelection(entity: String, elements: List<FormElement>, spreadMultiSelectObs: Boolean, obsColumnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | String | - | - |
| elements | List<FormElement> | - | - |
| spreadMultiSelectObs | Boolean | - | - |
| obsColumnName | String | - | - |

**Returns**: `String`


##### spreadMultiSelectSQL(unknown: obsColumn, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | obsColumn | - | - |
| unknown | concept | - | - |

**Returns**: `return`


##### skipConcept(elements: List<FormElement>, viewGenConcept: ViewGenConcept) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| elements | List<FormElement> | - | - |
| viewGenConcept | ViewGenConcept | - | - |

**Returns**: `boolean`


##### spreadMultiSelectSQL(obsColumn: String, concept: Concept) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obsColumn | String | - | - |
| concept | Concept | - | - |

**Returns**: `String`


##### getOperationalSubjectType(subjectTypeName: String) → OperationalSubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `OperationalSubjectType`


##### IllegalArgumentException(found: String.format("Not, unknown: subjectTypeName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| found | String.format("Not | - | - |
| unknown | subjectTypeName | - | - |

**Returns**: `new`




## Functions

### ViewGenService(operationalProgramRepository: OperationalProgramRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, formMappingRepository: FormMappingRepository, formElementRepository: FormElementRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramRepository | OperationalProgramRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| formElementRepository | FormElementRepository | - | - |

**Returns**: `public`



### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`



### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`



### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`



### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`



### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`



### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`



### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`



### BufferedReader(InputStreamReader(new: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(new | new | - | - |

**Returns**: `new`



### registrationViews(subjectTypeName: String, spreadMultiSelectObs: boolean) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |
| spreadMultiSelectObs | boolean | - | - |

**Returns**: `Map<String, String>`



### viewGenConcepts(formElements: List<FormElement>) → List<ViewGenConcept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElements | List<FormElement> | - | - |

**Returns**: `List<ViewGenConcept>`



### ViewGenConcept(unknown: formElement.getConcept() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formElement.getConcept( | - | - |

**Returns**: `new`



### ViewGenConcept(unknown: concept, unknown: Names.DecisionConceptMapName, unknown: true, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | concept | - | - |
| unknown | Names.DecisionConceptMapName | - | - |
| unknown | true | - | - |
| unknown | null | - | - |

**Returns**: `new`



### enrolmentViews(subjectTypeName: String, operationalProgramName: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |
| operationalProgramName | String | - | - |

**Returns**: `Map<String, String>`



### getSqlsFor(operationalProgramName: String, operationalEncounterTypeName: String, spreadMultiSelectObs: boolean, subjectTypeName: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramName | String | - | - |
| operationalEncounterTypeName | String | - | - |
| spreadMultiSelectObs | boolean | - | - |
| subjectTypeName | String | - | - |

**Returns**: `Map<String, String>`



### getGeneralEncounterSqls(unknown: operationalEncounterTypes, unknown: spreadMultiSelectObs, unknown: operationalSubjectType.getSubjectType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalEncounterTypes | - | - |
| unknown | spreadMultiSelectObs | - | - |
| unknown | operationalSubjectType.getSubjectType( | - | - |

**Returns**: `return`



### getProgramEncounterSqls(unknown: operationalProgram, unknown: operationalEncounterTypes, unknown: spreadMultiSelectObs, unknown: operationalSubjectType.getSubjectType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram | - | - |
| unknown | operationalEncounterTypes | - | - |
| unknown | spreadMultiSelectObs | - | - |
| unknown | operationalSubjectType.getSubjectType( | - | - |

**Returns**: `return`



### IllegalArgumentException(found: String.format("Not, unknown: operationalProgramName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| found | String.format("Not | - | - |
| unknown | operationalProgramName | - | - |

**Returns**: `new`



### getProgramEncounterSqls(operationalProgram: OperationalProgram, operationalEncounterTypes: List<OperationalEncounterType>, spreadMultiSelectObs: boolean, subjectTypeId: Long, operationalSubjectTypeUUID: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| operationalEncounterTypes | List<OperationalEncounterType> | - | - |
| spreadMultiSelectObs | boolean | - | - |
| subjectTypeId | Long | - | - |
| operationalSubjectTypeUUID | String | - | - |

**Returns**: `Map<String, String>`



### replaceSubjectAndEnrolmentObsInTemplate(template: String, spreadMultiSelectObs: boolean, operationalSubjectTypeUUID: String, enrolmentFormElements: List<FormElement>, uuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | String | - | - |
| spreadMultiSelectObs | boolean | - | - |
| operationalSubjectTypeUUID | String | - | - |
| enrolmentFormElements | List<FormElement> | - | - |
| uuid | String | - | - |

**Returns**: `String`



### getGeneralEncounterSqls(types: List<OperationalEncounterType>, spreadMultiSelectObs: boolean, subjectTypeId: Long, operationalSubjectTypeUUID: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| types | List<OperationalEncounterType> | - | - |
| spreadMultiSelectObs | boolean | - | - |
| subjectTypeId | Long | - | - |
| operationalSubjectTypeUUID | String | - | - |

**Returns**: `Map<String, String>`



### replaceSubjectTypeUUID(template: String, operationalSubjectTypeUUID: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| template | String | - | - |
| operationalSubjectTypeUUID | String | - | - |

**Returns**: `String`



### getSqlForProgramEncounter(mainViewQuery: String, operationalEncounterType: OperationalEncounterType, spreadMultiSelectObs: boolean, formElements: List<FormElement>, formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mainViewQuery | String | - | - |
| operationalEncounterType | OperationalEncounterType | - | - |
| spreadMultiSelectObs | boolean | - | - |
| formElements | List<FormElement> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `String`



### replaceJoinsAndOtherCommonInformation(unknown: formMapping, unknown: programEncounterSql) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMapping | - | - |
| unknown | programEncounterSql | - | - |

**Returns**: `return`



### replaceJoinsAndOtherCommonInformation(formMapping: FormMapping, sql: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| sql | String | - | - |

**Returns**: `String`



### getSqlForProgramEncounterCancel(mainViewQuery: String, operationalEncounterType: OperationalEncounterType, spreadMultiSelectObs: boolean, cancelFormElements: List<FormElement>, formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mainViewQuery | String | - | - |
| operationalEncounterType | OperationalEncounterType | - | - |
| spreadMultiSelectObs | boolean | - | - |
| cancelFormElements | List<FormElement> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `String`



### replaceJoinsAndOtherCommonInformation(unknown: formMapping, unknown: programEncounterCancelSql) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMapping | - | - |
| unknown | programEncounterCancelSql | - | - |

**Returns**: `return`



### getSqlForGeneralEncounter(mainViewQuery: String, operationalEncounterType: OperationalEncounterType, spreadMultiSelectObs: boolean, formElements: List<FormElement>, formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mainViewQuery | String | - | - |
| operationalEncounterType | OperationalEncounterType | - | - |
| spreadMultiSelectObs | boolean | - | - |
| formElements | List<FormElement> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `String`



### replaceJoinsAndOtherCommonInformation(unknown: formMapping, unknown: encounterSQL) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMapping | - | - |
| unknown | encounterSQL | - | - |

**Returns**: `return`



### getSqlForGeneralEncounterCancel(mainViewQuery: String, operationalEncounterType: OperationalEncounterType, spreadMultiSelectObs: boolean, cancelFormElements: List<FormElement>, formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mainViewQuery | String | - | - |
| operationalEncounterType | OperationalEncounterType | - | - |
| spreadMultiSelectObs | boolean | - | - |
| cancelFormElements | List<FormElement> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `String`



### replaceJoinsAndOtherCommonInformation(unknown: formMapping, unknown: encounterCancelSql) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMapping | - | - |
| unknown | encounterCancelSql | - | - |

**Returns**: `return`



### getRegistrationFormElements(subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`



### getFormElements(unknown: null, unknown: null, unknown: FormType.IndividualProfile, unknown: subjectTypeId) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | FormType.IndividualProfile | - | - |
| unknown | subjectTypeId | - | - |

**Returns**: `return`



### getProgramEnrolmentFormElements(operationalProgram: OperationalProgram, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`



### getFormElements(unknown: operationalProgram.getProgram() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram.getProgram( | - | - |

**Returns**: `return`



### getProgramEnrolmentExitFormElements(operationalProgram: OperationalProgram, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`



### getFormElements(unknown: operationalProgram.getProgram() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram.getProgram( | - | - |

**Returns**: `return`



### getGeneralEncounterFormElements(subjectTypeId: Long, type: OperationalEncounterType) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| type | OperationalEncounterType | - | - |

**Returns**: `List<FormElement>`



### getFormElements(unknown: null, unknown: type.getEncounterType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | type.getEncounterType( | - | - |

**Returns**: `return`



### getGeneralEncounterCancelFormElements(subjectTypeId: Long, type: OperationalEncounterType) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeId | Long | - | - |
| type | OperationalEncounterType | - | - |

**Returns**: `List<FormElement>`



### getFormElements(unknown: null, unknown: type.getEncounterType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | type.getEncounterType( | - | - |

**Returns**: `return`



### getProgramEncounterFormElements(operationalProgram: OperationalProgram, type: OperationalEncounterType, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| type | OperationalEncounterType | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`



### getFormElements(unknown: operationalProgram.getProgram() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram.getProgram( | - | - |

**Returns**: `return`



### getProgramEncounterCancelFormElements(operationalProgram: OperationalProgram, type: OperationalEncounterType, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgram | OperationalProgram | - | - |
| type | OperationalEncounterType | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`



### getFormElements(unknown: operationalProgram.getProgram() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalProgram.getProgram( | - | - |

**Returns**: `return`



### getFormElements(programId: Long, typeId: Long, formType: FormType, subjectTypeId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programId | Long | - | - |
| typeId | Long | - | - |
| formType | FormType | - | - |
| subjectTypeId | Long | - | - |

**Returns**: `List<FormElement>`



### buildObservationSelection(entity: String, elements: List<FormElement>, spreadMultiSelectObs: boolean) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | String | - | - |
| elements | List<FormElement> | - | - |
| spreadMultiSelectObs | boolean | - | - |

**Returns**: `String`



### buildObservationSelection(unknown: entity, unknown: elements, unknown: spreadMultiSelectObs, unknown: "observations") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entity | - | - |
| unknown | elements | - | - |
| unknown | spreadMultiSelectObs | - | - |
| unknown | "observations" | - | - |

**Returns**: `return`



### buildCancelObservationSelection(entity: String, elements: List<FormElement>, spreadMultiSelectObs: boolean) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | String | - | - |
| elements | List<FormElement> | - | - |
| spreadMultiSelectObs | boolean | - | - |

**Returns**: `String`



### buildObservationSelection(unknown: entity, unknown: elements, unknown: spreadMultiSelectObs, unknown: "cancel_observations") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entity | - | - |
| unknown | elements | - | - |
| unknown | spreadMultiSelectObs | - | - |
| unknown | "cancel_observations" | - | - |

**Returns**: `return`



### buildExitObservationSelection(elements: List<FormElement>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| elements | List<FormElement> | - | - |

**Returns**: `String`



### buildObservationSelection(unknown: "programEnrolment", unknown: elements, unknown: false, unknown: "program_exit_observations") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "programEnrolment" | - | - |
| unknown | elements | - | - |
| unknown | false | - | - |
| unknown | "program_exit_observations" | - | - |

**Returns**: `return`



### buildObservationSelection(entity: String, elements: List<FormElement>, spreadMultiSelectObs: Boolean, obsColumnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | String | - | - |
| elements | List<FormElement> | - | - |
| spreadMultiSelectObs | Boolean | - | - |
| obsColumnName | String | - | - |

**Returns**: `String`



### spreadMultiSelectSQL(unknown: obsColumn, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | obsColumn | - | - |
| unknown | concept | - | - |

**Returns**: `return`



### skipConcept(elements: List<FormElement>, viewGenConcept: ViewGenConcept) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| elements | List<FormElement> | - | - |
| viewGenConcept | ViewGenConcept | - | - |

**Returns**: `boolean`



### spreadMultiSelectSQL(obsColumn: String, concept: Concept) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obsColumn | String | - | - |
| concept | Concept | - | - |

**Returns**: `String`



### getOperationalSubjectType(subjectTypeName: String) → OperationalSubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `OperationalSubjectType`



### IllegalArgumentException(found: String.format("Not, unknown: subjectTypeName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| found | String.format("Not | - | - |
| unknown | subjectTypeName | - | - |

**Returns**: `new`


