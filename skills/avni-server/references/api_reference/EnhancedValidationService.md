# API Reference: EnhancedValidationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/EnhancedValidationService.java`

---

## Classes

### EnhancedValidationService

**Inherits from**: (none)

#### Methods

##### EnhancedValidationService(formMappingService: FormMappingService, organisationConfigService: OrganisationConfigService, bugsnagReporter: BugsnagReporter, conceptRepository: ConceptRepository, subjectTypeRepository: SubjectTypeRepository, individualRepository: IndividualRepository, addressLevelTypeRepository: AddressLevelTypeRepository, s3Service: S3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingService | FormMappingService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| bugsnagReporter | BugsnagReporter | - | - |
| conceptRepository | ConceptRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| s3Service | S3Service | - | - |

**Returns**: `public`


##### validateObservationsAndDecisionsAgainstFormMapping(observationRequests: List<ObservationRequest>, decisions: List<Decision>, formMapping: FormMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |
| decisions | List<Decision> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `void`


##### checkForInvalidConceptUUIDAndNames(observationRequests: List<ObservationRequest>, decisions: List<Decision>, formMapping: FormMapping, unknown: LinkedHashMap<String, formElements: FormElement>, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |
| decisions | List<Decision> | - | - |
| formMapping | FormMapping | - | - |
| unknown | LinkedHashMap<String | - | - |
| formElements | FormElement> | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateConceptValuesAreOfRequiredType(observationRequests: List<ObservationRequest>, unknown: LinkedHashMap<String, formElements: FormElement>, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |
| unknown | LinkedHashMap<String | - | - |
| formElements | FormElement> | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### EnhancedValidationDTO(unknown: conceptRepository.findByUuid(observationRequest.getConceptUUID() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptRepository.findByUuid(observationRequest.getConceptUUID( | - | - |

**Returns**: `new`


##### handleValidationFailure(errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### ValidationException(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`


##### getObservationConceptUuidsFromRequest(observationRequests: List<ObservationRequest>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |

**Returns**: `List<String>`


##### Concept() → new

**Returns**: `new`


##### getDecisionConceptUuidsFromRequest(decisions: List<Decision>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisions | List<Decision> | - | - |

**Returns**: `List<String>`


##### validate(enhancedValidationDTO: EnhancedValidationDTO, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enhancedValidationDTO | EnhancedValidationDTO | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateAnswer(question: Concept, formElement: FormElement, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| formElement | FormElement | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateCodedValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateNumericValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateTextValue(question: Concept, formElement: FormElement, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| formElement | FormElement | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateDateTimeValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateDurationValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateTimeValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateSubjectValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateLocationValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validatePhoneNumberValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateImageValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### URI(unknown: value.toString() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | value.toString( | - | - |

**Returns**: `new`


##### validateQuestionGroupConcept(question: Concept, formElement: FormElement, qGroupValue: Object, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| formElement | FormElement | - | - |
| qGroupValue | Object | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### splitQuestionGroupValueIfRequiredAndThenValidate(formElement: FormElement, qGroupValue: Object, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| qGroupValue | Object | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateChildObservation(questionGroupFormElement: FormElement, unknown: Map<String, qGroupValueInstance: Object>, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionGroupFormElement | FormElement | - | - |
| unknown | Map<String | - | - |
| qGroupValueInstance | Object> | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### validateCollectionItem(formElement: FormElement, item: Object, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| item | Object | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`


##### createObservationRequest(unknown: Map.Entry<String, stringObjectEntry: Object>) → ObservationRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map.Entry<String | - | - |
| stringObjectEntry | Object> | - | - |

**Returns**: `ObservationRequest`


##### ObservationRequest() → new

**Returns**: `new`


##### formatErrorMessage(question: Concept, value: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |

**Returns**: `String`




## Functions

### EnhancedValidationService(formMappingService: FormMappingService, organisationConfigService: OrganisationConfigService, bugsnagReporter: BugsnagReporter, conceptRepository: ConceptRepository, subjectTypeRepository: SubjectTypeRepository, individualRepository: IndividualRepository, addressLevelTypeRepository: AddressLevelTypeRepository, s3Service: S3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingService | FormMappingService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| bugsnagReporter | BugsnagReporter | - | - |
| conceptRepository | ConceptRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| s3Service | S3Service | - | - |

**Returns**: `public`



### validateObservationsAndDecisionsAgainstFormMapping(observationRequests: List<ObservationRequest>, decisions: List<Decision>, formMapping: FormMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |
| decisions | List<Decision> | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `void`



### checkForInvalidConceptUUIDAndNames(observationRequests: List<ObservationRequest>, decisions: List<Decision>, formMapping: FormMapping, unknown: LinkedHashMap<String, formElements: FormElement>, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |
| decisions | List<Decision> | - | - |
| formMapping | FormMapping | - | - |
| unknown | LinkedHashMap<String | - | - |
| formElements | FormElement> | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateConceptValuesAreOfRequiredType(observationRequests: List<ObservationRequest>, unknown: LinkedHashMap<String, formElements: FormElement>, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |
| unknown | LinkedHashMap<String | - | - |
| formElements | FormElement> | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### EnhancedValidationDTO(unknown: conceptRepository.findByUuid(observationRequest.getConceptUUID() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptRepository.findByUuid(observationRequest.getConceptUUID( | - | - |

**Returns**: `new`



### handleValidationFailure(errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMessages | List<String> | - | - |

**Returns**: `void`



### ValidationException(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`



### getObservationConceptUuidsFromRequest(observationRequests: List<ObservationRequest>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequests | List<ObservationRequest> | - | - |

**Returns**: `List<String>`



### Concept() → new

**Returns**: `new`



### getDecisionConceptUuidsFromRequest(decisions: List<Decision>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisions | List<Decision> | - | - |

**Returns**: `List<String>`



### validate(enhancedValidationDTO: EnhancedValidationDTO, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enhancedValidationDTO | EnhancedValidationDTO | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateAnswer(question: Concept, formElement: FormElement, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| formElement | FormElement | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateCodedValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateNumericValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateTextValue(question: Concept, formElement: FormElement, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| formElement | FormElement | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateDateTimeValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateDurationValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateTimeValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateSubjectValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateLocationValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validatePhoneNumberValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateImageValue(question: Concept, value: Object, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### URI(unknown: value.toString() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | value.toString( | - | - |

**Returns**: `new`



### validateQuestionGroupConcept(question: Concept, formElement: FormElement, qGroupValue: Object, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| formElement | FormElement | - | - |
| qGroupValue | Object | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### splitQuestionGroupValueIfRequiredAndThenValidate(formElement: FormElement, qGroupValue: Object, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| qGroupValue | Object | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateChildObservation(questionGroupFormElement: FormElement, unknown: Map<String, qGroupValueInstance: Object>, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionGroupFormElement | FormElement | - | - |
| unknown | Map<String | - | - |
| qGroupValueInstance | Object> | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### validateCollectionItem(formElement: FormElement, item: Object, formMapping: FormMapping, errorMessages: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| item | Object | - | - |
| formMapping | FormMapping | - | - |
| errorMessages | List<String> | - | - |

**Returns**: `void`



### createObservationRequest(unknown: Map.Entry<String, stringObjectEntry: Object>) → ObservationRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map.Entry<String | - | - |
| stringObjectEntry | Object> | - | - |

**Returns**: `ObservationRequest`



### ObservationRequest() → new

**Returns**: `new`



### formatErrorMessage(question: Concept, value: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| question | Concept | - | - |
| value | Object | - | - |

**Returns**: `String`


