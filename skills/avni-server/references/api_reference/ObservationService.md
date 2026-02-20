# API Reference: ObservationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ObservationService.java`

---

## Classes

### ObservationService

**Inherits from**: (none)

#### Methods

##### ObservationService(conceptRepository: ConceptRepository, individualRepository: IndividualRepository, locationRepository: LocationRepository, jdbcTemplate: NamedParameterJdbcTemplate, enhancedValidationService: EnhancedValidationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| locationRepository | LocationRepository | - | - |
| jdbcTemplate | NamedParameterJdbcTemplate | - | - |
| enhancedValidationService | EnhancedValidationService | - | - |

**Returns**: `public`


##### createObservations(observationRequests: List<ObservationRequest>) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |

**Returns**: `ObservationCollection`


##### NullPointerException(with: String.format("Concept, unknown: observationRequest.getConceptUUID() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | observationRequest.getConceptUUID( | - | - |

**Returns**: `new`


##### ObservationCollection(unknown: completedObservationRequests) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | completedObservationRequests | - | - |

**Returns**: `new`


##### validateObservationsAndDecisions(observationRequests: List<ObservationRequest>, decisions: List<Decision>, formMapping: FormMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |
| decisions | List<Decision> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `void`


##### createObservationsFromDecisions(decisions: List<Decision>) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisions | List<Decision> | - | - |

**Returns**: `ObservationCollection`


##### ObservationCollection(unknown: observations) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | observations | - | - |

**Returns**: `new`


##### createObservationContractsFromKeyValueResponse(keyValueResponses: List<KeyValueResponse>, workflow: WorkFlowTypeEnum) → List<ObservationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValueResponses | List<KeyValueResponse> | - | - |
| workflow | WorkFlowTypeEnum | - | - |

**Returns**: `List<ObservationContract>`


##### ObservationContract() → new

**Returns**: `new`


##### BadRequestError(with: String.format("Concept, unknown: conceptName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | conceptName | - | - |

**Returns**: `new`


##### BadRequestError(concept: String.format("Answer, unknown: answerConceptName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | String.format("Answer | - | - |
| unknown | answerConceptName | - | - |

**Returns**: `new`


##### BadRequestError(concept: String.format("Answer, unknown: answerConceptName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | String.format("Answer | - | - |
| unknown | answerConceptName | - | - |

**Returns**: `new`


##### ConceptMapper() → new

**Returns**: `new`


##### getConceptForValue(conceptValue: String, workflow: WorkFlowTypeEnum) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptValue | String | - | - |
| workflow | WorkFlowTypeEnum | - | - |

**Returns**: `Concept`


##### getObservationValue(conceptName: String, individual: Individual) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |
| individual | Individual | - | - |

**Returns**: `Object`


##### getObservationValue(unknown: concept, unknown: individual.getObservations() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | concept | - | - |
| unknown | individual.getObservations( | - | - |

**Returns**: `return`


##### getObservationValue(programEncounter: ProgramEncounter, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |
| concept | Concept | - | - |

**Returns**: `Object`


##### getObservationValue(unknown: concept, unknown: observations) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | concept | - | - |
| unknown | observations | - | - |

**Returns**: `return`


##### getObservationValue(concept: Concept, observations: ObservationCollection) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `Object`


##### getObservationValue(conceptName: String, enrolment: ProgramEnrolment) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |
| enrolment | ProgramEnrolment | - | - |

**Returns**: `Object`


##### getObservationValue(unknown: encounterWithObs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterWithObs | - | - |
| unknown | concept | - | - |

**Returns**: `return`


##### constructObservationModelContracts(observationCollection: ObservationCollection) → List<ObservationModelContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationCollection | ObservationCollection | - | - |

**Returns**: `List<ObservationModelContract>`


##### constructObservation(observationContract: ObservationContract) → ObservationModelContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationContract | ObservationContract | - | - |

**Returns**: `ObservationModelContract`


##### ObservationModelContract() → new

**Returns**: `new`


##### constructQuestionGroupValue(questionGroupEntries: List<ObservationContract>) → List<ObservationModelContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionGroupEntries | List<ObservationContract> | - | - |

**Returns**: `List<ObservationModelContract>`


##### constructObservations(ObservationCollection: @NotNull) → List<ObservationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ObservationCollection | @NotNull | - | - |

**Returns**: `List<ObservationContract>`


##### getObservationContract(unknown: Map.Entry<String, entry: Object>) → ObservationContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map.Entry<String | - | - |
| entry | Object> | - | - |

**Returns**: `ObservationContract`


##### ObservationContract() → new

**Returns**: `new`


##### ObservationCollection(unknown: values) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | values | - | - |

**Returns**: `new`


##### ObservationCollection(unknown: values) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | values | - | - |

**Returns**: `new`


##### convertIndividualToContract(individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `IndividualContract`


##### IndividualContract() → new

**Returns**: `new`


##### filterObservationsByDataType(conceptDataTypes: List<ConceptDataType>, observations: ObservationCollection) → Map<Concept, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptDataTypes | List<ConceptDataType> | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `Map<Concept, Object>`


##### max(unknown: json_array_length((%s->>'%s') → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | json_array_length((%s->>'%s' | - | - |

**Returns**: `select`


##### max(unknown: json_array_length((%s->>'%s') → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | json_array_length((%s->>'%s' | - | - |

**Returns**: `select`


##### and(between: %s) → null

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| between | %s | - | - |

**Returns**: `null`


##### mapRow(rs: ResultSet, rowNum: int) → Integer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| rowNum | int | - | - |

**Returns**: `Integer`


##### getMaxNumberOfQuestionGroupObservations(unknown: Map<Form, formFilters: ExportFilters>, timeZone: String) → Map<FormElement, Integer>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<Form | - | - |
| formFilters | ExportFilters> | - | - |
| timeZone | String | - | - |

**Returns**: `Map<FormElement, Integer>`


##### CountMapper() → new

**Returns**: `new`




## Functions

### ObservationService(conceptRepository: ConceptRepository, individualRepository: IndividualRepository, locationRepository: LocationRepository, jdbcTemplate: NamedParameterJdbcTemplate, enhancedValidationService: EnhancedValidationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| locationRepository | LocationRepository | - | - |
| jdbcTemplate | NamedParameterJdbcTemplate | - | - |
| enhancedValidationService | EnhancedValidationService | - | - |

**Returns**: `public`



### createObservations(observationRequests: List<ObservationRequest>) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |

**Returns**: `ObservationCollection`



### NullPointerException(with: String.format("Concept, unknown: observationRequest.getConceptUUID() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | observationRequest.getConceptUUID( | - | - |

**Returns**: `new`



### ObservationCollection(unknown: completedObservationRequests) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | completedObservationRequests | - | - |

**Returns**: `new`



### validateObservationsAndDecisions(observationRequests: List<ObservationRequest>, decisions: List<Decision>, formMapping: FormMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |
| decisions | List<Decision> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `void`



### createObservationsFromDecisions(decisions: List<Decision>) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisions | List<Decision> | - | - |

**Returns**: `ObservationCollection`



### ObservationCollection(unknown: observations) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | observations | - | - |

**Returns**: `new`



### createObservationContractsFromKeyValueResponse(keyValueResponses: List<KeyValueResponse>, workflow: WorkFlowTypeEnum) → List<ObservationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValueResponses | List<KeyValueResponse> | - | - |
| workflow | WorkFlowTypeEnum | - | - |

**Returns**: `List<ObservationContract>`



### ObservationContract() → new

**Returns**: `new`



### BadRequestError(with: String.format("Concept, unknown: conceptName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | conceptName | - | - |

**Returns**: `new`



### BadRequestError(concept: String.format("Answer, unknown: answerConceptName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | String.format("Answer | - | - |
| unknown | answerConceptName | - | - |

**Returns**: `new`



### BadRequestError(concept: String.format("Answer, unknown: answerConceptName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | String.format("Answer | - | - |
| unknown | answerConceptName | - | - |

**Returns**: `new`



### ConceptMapper() → new

**Returns**: `new`



### getConceptForValue(conceptValue: String, workflow: WorkFlowTypeEnum) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptValue | String | - | - |
| workflow | WorkFlowTypeEnum | - | - |

**Returns**: `Concept`



### getObservationValue(conceptName: String, individual: Individual) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |
| individual | Individual | - | - |

**Returns**: `Object`



### getObservationValue(unknown: concept, unknown: individual.getObservations() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | concept | - | - |
| unknown | individual.getObservations( | - | - |

**Returns**: `return`



### getObservationValue(programEncounter: ProgramEncounter, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |
| concept | Concept | - | - |

**Returns**: `Object`



### getObservationValue(unknown: concept, unknown: observations) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | concept | - | - |
| unknown | observations | - | - |

**Returns**: `return`



### getObservationValue(concept: Concept, observations: ObservationCollection) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `Object`



### getObservationValue(conceptName: String, enrolment: ProgramEnrolment) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |
| enrolment | ProgramEnrolment | - | - |

**Returns**: `Object`



### getObservationValue(unknown: encounterWithObs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterWithObs | - | - |
| unknown | concept | - | - |

**Returns**: `return`



### constructObservationModelContracts(observationCollection: ObservationCollection) → List<ObservationModelContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationCollection | ObservationCollection | - | - |

**Returns**: `List<ObservationModelContract>`



### constructObservation(observationContract: ObservationContract) → ObservationModelContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationContract | ObservationContract | - | - |

**Returns**: `ObservationModelContract`



### ObservationModelContract() → new

**Returns**: `new`



### constructQuestionGroupValue(questionGroupEntries: List<ObservationContract>) → List<ObservationModelContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionGroupEntries | List<ObservationContract> | - | - |

**Returns**: `List<ObservationModelContract>`



### constructObservations(ObservationCollection: @NotNull) → List<ObservationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ObservationCollection | @NotNull | - | - |

**Returns**: `List<ObservationContract>`



### getObservationContract(unknown: Map.Entry<String, entry: Object>) → ObservationContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map.Entry<String | - | - |
| entry | Object> | - | - |

**Returns**: `ObservationContract`



### ObservationContract() → new

**Returns**: `new`



### ObservationCollection(unknown: values) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | values | - | - |

**Returns**: `new`



### ObservationCollection(unknown: values) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | values | - | - |

**Returns**: `new`



### convertIndividualToContract(individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `IndividualContract`



### IndividualContract() → new

**Returns**: `new`



### filterObservationsByDataType(conceptDataTypes: List<ConceptDataType>, observations: ObservationCollection) → Map<Concept, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptDataTypes | List<ConceptDataType> | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `Map<Concept, Object>`



### max(unknown: json_array_length((%s->>'%s') → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | json_array_length((%s->>'%s' | - | - |

**Returns**: `select`



### max(unknown: json_array_length((%s->>'%s') → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | json_array_length((%s->>'%s' | - | - |

**Returns**: `select`



### and(between: %s) → null

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| between | %s | - | - |

**Returns**: `null`



### mapRow(rs: ResultSet, rowNum: int) → Integer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| rowNum | int | - | - |

**Returns**: `Integer`



### getMaxNumberOfQuestionGroupObservations(unknown: Map<Form, formFilters: ExportFilters>, timeZone: String) → Map<FormElement, Integer>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<Form | - | - |
| formFilters | ExportFilters> | - | - |
| timeZone | String | - | - |

**Returns**: `Map<FormElement, Integer>`



### CountMapper() → new

**Returns**: `new`


