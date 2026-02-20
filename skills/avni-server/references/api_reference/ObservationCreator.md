# API Reference: ObservationCreator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/creator/ObservationCreator.java`

---

## Classes

### ObservationCreator

**Inherits from**: (none)

#### Methods

##### ObservationCreator(conceptRepository: ConceptRepository, formRepository: FormRepository, observationService: ObservationService, s3Service: S3Service, individualService: IndividualService, locationService: LocationService, formElementRepository: FormElementRepository, enhancedValidationService: EnhancedValidationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| formRepository | FormRepository | - | - |
| observationService | ObservationService | - | - |
| s3Service | S3Service | - | - |
| individualService | IndividualService | - | - |
| locationService | LocationService | - | - |
| formElementRepository | FormElementRepository | - | - |
| enhancedValidationService | EnhancedValidationService | - | - |

**Returns**: `public`


##### getConceptsInHeader(headers: HeaderCreator, formMapping: FormMapping, fileHeaders: String[]) → Set<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | HeaderCreator | - | - |
| formMapping | FormMapping | - | - |
| fileHeaders | String[] | - | - |

**Returns**: `Set<Concept>`


##### findConcept(name: String, isChildQuestionGroup: boolean) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| isChildQuestionGroup | boolean | - | - |

**Returns**: `Concept`


##### getObservations(row: Row, headers: HeaderCreator, errorMsgs: List<String>, formType: FormType, oldObservations: ObservationCollection, formMapping: FormMapping) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| errorMsgs | List<String> | - | - |
| formType | FormType | - | - |
| oldObservations | ObservationCollection | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `ObservationCollection`


##### getRowValue(formElement: FormElement, row: Row, questionGroupIndex: Integer) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| row | Row | - | - |
| questionGroupIndex | Integer | - | - |

**Returns**: `String`


##### constructObservations(row: Row, headers: HeaderCreator, errorMsgs: List<String>, formType: FormType, oldObservations: ObservationCollection, formMapping: FormMapping, fileHeaders: String[], performMandatoryCheck: boolean) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| errorMsgs | List<String> | - | - |
| formType | FormType | - | - |
| oldObservations | ObservationCollection | - | - |
| formMapping | FormMapping | - | - |
| fileHeaders | String[] | - | - |
| performMandatoryCheck | boolean | - | - |

**Returns**: `ObservationCollection`


##### ObservationRequest() → new

**Returns**: `new`


##### constructChildObservations(row: Row, headers: HeaderCreator, errorMsgs: List<String>, parentFormElement: FormElement, formType: FormType, oldObservations: ObservationCollection, mandatoryCheckEnabled: boolean) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| errorMsgs | List<String> | - | - |
| parentFormElement | FormElement | - | - |
| formType | FormType | - | - |
| oldObservations | ObservationCollection | - | - |
| mandatoryCheckEnabled | boolean | - | - |

**Returns**: `Object`


##### getQuestionGroupObservations(unknown: row, unknown: headers, unknown: errorMsgs, unknown: formType, unknown: oldObservations, unknown: allChildQuestions, unknown: null, unknown: mandatoryCheckEnabled) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | headers | - | - |
| unknown | errorMsgs | - | - |
| unknown | formType | - | - |
| unknown | oldObservations | - | - |
| unknown | allChildQuestions | - | - |
| unknown | null | - | - |
| unknown | mandatoryCheckEnabled | - | - |

**Returns**: `return`


##### getQuestionGroupObservations(row: Row, headers: HeaderCreator, errorMsgs: List<String>, formType: FormType, oldObservations: ObservationCollection, allChildQuestions: List<FormElement>, questionGroupIndex: Integer, mandatoryCheckEnabled: boolean) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| errorMsgs | List<String> | - | - |
| formType | FormType | - | - |
| oldObservations | ObservationCollection | - | - |
| allChildQuestions | List<FormElement> | - | - |
| questionGroupIndex | Integer | - | - |
| mandatoryCheckEnabled | boolean | - | - |

**Returns**: `ObservationCollection`


##### ObservationRequest() → new

**Returns**: `new`


##### createDecisionFormElement(concepts: Set<Concept>) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concepts | Set<Concept> | - | - |

**Returns**: `List<FormElement>`


##### FormElement() → new

**Returns**: `new`


##### getFormElementForObservationConcept(concept: Concept, formType: FormType, formMapping: FormMapping) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| formType | FormType | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `FormElement`


##### RuntimeException(forms: String.format("No, unknown: formType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| forms | String.format("No | - | - |
| unknown | formType | - | - |

**Returns**: `new`


##### RuntimeException(form: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | "No | - | - |

**Returns**: `new`


##### getObservationValue(formElement: FormElement, answerValue: String, formType: FormType, errorMsgs: List<String>, row: Row, headers: HeaderCreator, oldObservations: ObservationCollection, mandatoryCheckEnabled: boolean) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| answerValue | String | - | - |
| formType | FormType | - | - |
| errorMsgs | List<String> | - | - |
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| oldObservations | ObservationCollection | - | - |
| mandatoryCheckEnabled | boolean | - | - |

**Returns**: `Object`


##### handleCodedValue(unknown: formElement, unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formElement | - | - |
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`


##### handleNumericValue(unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`


##### handleDateValue(unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`


##### handleDateTimeValue(unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`


##### handleMediaValue(unknown: formElement, unknown: answerValue, unknown: errorMsgs, unknown: oldValue) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formElement | - | - |
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | oldValue | - | - |

**Returns**: `return`


##### handlePhoneNumberValue(unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`


##### handleCodedValue(formElement: FormElement, answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`


##### handleNumericValue(answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`


##### isWithinRange(value: double, lowAbsolute: Double, highAbsolute: Double) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | double | - | - |
| lowAbsolute | Double | - | - |
| highAbsolute | Double | - | - |

**Returns**: `boolean`


##### handleDateValue(answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`


##### handleDateTimeValue(answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`


##### handleMediaValue(formElement: FormElement, answerValue: String, errorMsgs: List<String>, oldValue: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| oldValue | Object | - | - |

**Returns**: `Object`


##### getMediaObservationValue(unknown: answerValue, unknown: errorMsgs, unknown: oldValue) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | oldValue | - | - |

**Returns**: `return`


##### handlePhoneNumberValue(answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`


##### getMediaObservationValue(answerValue: String, errorMsgs: List<String>, oldValue: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| oldValue | Object | - | - |

**Returns**: `Object`


##### toPhoneNumberFormat(phoneNumber: String, errorMsgs: List<String>, conceptName: String) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| errorMsgs | List<String> | - | - |
| conceptName | String | - | - |

**Returns**: `Map<String, Object>`


##### toISODateFormat(dateStr: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateStr | String | - | - |

**Returns**: `String`


##### IllegalArgumentException(to: "Unable, unknown: dd-MM-yyyy, unknown: yyyy-MM-dd") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Unable | - | - |
| unknown | dd-MM-yyyy | - | - |
| unknown | yyyy-MM-dd" | - | - |

**Returns**: `new`


##### tryParseDateTime(dateStr: String) → DateTime

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateStr | String | - | - |

**Returns**: `DateTime`


##### format(unknown: dd-MM-yyyy) → date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dd-MM-yyyy | - | - |

**Returns**: `date`


##### format(unknown: yyyy-MM-dd) → date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | yyyy-MM-dd | - | - |

**Returns**: `date`




## Functions

### ObservationCreator(conceptRepository: ConceptRepository, formRepository: FormRepository, observationService: ObservationService, s3Service: S3Service, individualService: IndividualService, locationService: LocationService, formElementRepository: FormElementRepository, enhancedValidationService: EnhancedValidationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| formRepository | FormRepository | - | - |
| observationService | ObservationService | - | - |
| s3Service | S3Service | - | - |
| individualService | IndividualService | - | - |
| locationService | LocationService | - | - |
| formElementRepository | FormElementRepository | - | - |
| enhancedValidationService | EnhancedValidationService | - | - |

**Returns**: `public`



### getConceptsInHeader(headers: HeaderCreator, formMapping: FormMapping, fileHeaders: String[]) → Set<Concept>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | HeaderCreator | - | - |
| formMapping | FormMapping | - | - |
| fileHeaders | String[] | - | - |

**Returns**: `Set<Concept>`



### findConcept(name: String, isChildQuestionGroup: boolean) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| isChildQuestionGroup | boolean | - | - |

**Returns**: `Concept`



### getObservations(row: Row, headers: HeaderCreator, errorMsgs: List<String>, formType: FormType, oldObservations: ObservationCollection, formMapping: FormMapping) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| errorMsgs | List<String> | - | - |
| formType | FormType | - | - |
| oldObservations | ObservationCollection | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `ObservationCollection`



### getRowValue(formElement: FormElement, row: Row, questionGroupIndex: Integer) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| row | Row | - | - |
| questionGroupIndex | Integer | - | - |

**Returns**: `String`



### constructObservations(row: Row, headers: HeaderCreator, errorMsgs: List<String>, formType: FormType, oldObservations: ObservationCollection, formMapping: FormMapping, fileHeaders: String[], performMandatoryCheck: boolean) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| errorMsgs | List<String> | - | - |
| formType | FormType | - | - |
| oldObservations | ObservationCollection | - | - |
| formMapping | FormMapping | - | - |
| fileHeaders | String[] | - | - |
| performMandatoryCheck | boolean | - | - |

**Returns**: `ObservationCollection`



### ObservationRequest() → new

**Returns**: `new`



### constructChildObservations(row: Row, headers: HeaderCreator, errorMsgs: List<String>, parentFormElement: FormElement, formType: FormType, oldObservations: ObservationCollection, mandatoryCheckEnabled: boolean) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| errorMsgs | List<String> | - | - |
| parentFormElement | FormElement | - | - |
| formType | FormType | - | - |
| oldObservations | ObservationCollection | - | - |
| mandatoryCheckEnabled | boolean | - | - |

**Returns**: `Object`



### getQuestionGroupObservations(unknown: row, unknown: headers, unknown: errorMsgs, unknown: formType, unknown: oldObservations, unknown: allChildQuestions, unknown: null, unknown: mandatoryCheckEnabled) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | headers | - | - |
| unknown | errorMsgs | - | - |
| unknown | formType | - | - |
| unknown | oldObservations | - | - |
| unknown | allChildQuestions | - | - |
| unknown | null | - | - |
| unknown | mandatoryCheckEnabled | - | - |

**Returns**: `return`



### getQuestionGroupObservations(row: Row, headers: HeaderCreator, errorMsgs: List<String>, formType: FormType, oldObservations: ObservationCollection, allChildQuestions: List<FormElement>, questionGroupIndex: Integer, mandatoryCheckEnabled: boolean) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| errorMsgs | List<String> | - | - |
| formType | FormType | - | - |
| oldObservations | ObservationCollection | - | - |
| allChildQuestions | List<FormElement> | - | - |
| questionGroupIndex | Integer | - | - |
| mandatoryCheckEnabled | boolean | - | - |

**Returns**: `ObservationCollection`



### ObservationRequest() → new

**Returns**: `new`



### createDecisionFormElement(concepts: Set<Concept>) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concepts | Set<Concept> | - | - |

**Returns**: `List<FormElement>`



### FormElement() → new

**Returns**: `new`



### getFormElementForObservationConcept(concept: Concept, formType: FormType, formMapping: FormMapping) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| formType | FormType | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `FormElement`



### RuntimeException(forms: String.format("No, unknown: formType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| forms | String.format("No | - | - |
| unknown | formType | - | - |

**Returns**: `new`



### RuntimeException(form: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | "No | - | - |

**Returns**: `new`



### getObservationValue(formElement: FormElement, answerValue: String, formType: FormType, errorMsgs: List<String>, row: Row, headers: HeaderCreator, oldObservations: ObservationCollection, mandatoryCheckEnabled: boolean) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| answerValue | String | - | - |
| formType | FormType | - | - |
| errorMsgs | List<String> | - | - |
| row | Row | - | - |
| headers | HeaderCreator | - | - |
| oldObservations | ObservationCollection | - | - |
| mandatoryCheckEnabled | boolean | - | - |

**Returns**: `Object`



### handleCodedValue(unknown: formElement, unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formElement | - | - |
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`



### handleNumericValue(unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`



### handleDateValue(unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`



### handleDateTimeValue(unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`



### handleMediaValue(unknown: formElement, unknown: answerValue, unknown: errorMsgs, unknown: oldValue) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formElement | - | - |
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | oldValue | - | - |

**Returns**: `return`



### handlePhoneNumberValue(unknown: answerValue, unknown: errorMsgs, unknown: concept) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | concept | - | - |

**Returns**: `return`



### handleCodedValue(formElement: FormElement, answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`



### handleNumericValue(answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`



### isWithinRange(value: double, lowAbsolute: Double, highAbsolute: Double) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | double | - | - |
| lowAbsolute | Double | - | - |
| highAbsolute | Double | - | - |

**Returns**: `boolean`



### handleDateValue(answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`



### handleDateTimeValue(answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`



### handleMediaValue(formElement: FormElement, answerValue: String, errorMsgs: List<String>, oldValue: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| oldValue | Object | - | - |

**Returns**: `Object`



### getMediaObservationValue(unknown: answerValue, unknown: errorMsgs, unknown: oldValue) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerValue | - | - |
| unknown | errorMsgs | - | - |
| unknown | oldValue | - | - |

**Returns**: `return`



### handlePhoneNumberValue(answerValue: String, errorMsgs: List<String>, concept: Concept) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| concept | Concept | - | - |

**Returns**: `Object`



### getMediaObservationValue(answerValue: String, errorMsgs: List<String>, oldValue: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerValue | String | - | - |
| errorMsgs | List<String> | - | - |
| oldValue | Object | - | - |

**Returns**: `Object`



### toPhoneNumberFormat(phoneNumber: String, errorMsgs: List<String>, conceptName: String) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| errorMsgs | List<String> | - | - |
| conceptName | String | - | - |

**Returns**: `Map<String, Object>`



### toISODateFormat(dateStr: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateStr | String | - | - |

**Returns**: `String`



### IllegalArgumentException(to: "Unable, unknown: dd-MM-yyyy, unknown: yyyy-MM-dd") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Unable | - | - |
| unknown | dd-MM-yyyy | - | - |
| unknown | yyyy-MM-dd" | - | - |

**Returns**: `new`



### tryParseDateTime(dateStr: String) → DateTime

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateStr | String | - | - |

**Returns**: `DateTime`



### format(unknown: dd-MM-yyyy) → date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dd-MM-yyyy | - | - |

**Returns**: `date`



### format(unknown: yyyy-MM-dd) → date

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | yyyy-MM-dd | - | - |

**Returns**: `date`


