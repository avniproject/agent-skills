# API Reference: ConceptService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ConceptService.java`

---

## Classes

### ConceptService

**Inherits from**: NonScopeAwareService

#### Methods

##### ConceptService(conceptRepository: ConceptRepository, conceptAnswerRepository: ConceptAnswerRepository, formElementRepository: FormElementRepository, answerConceptMigrationRepository: AnswerConceptMigrationRepository, locationRepository: LocationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptAnswerRepository | ConceptAnswerRepository | - | - |
| formElementRepository | FormElementRepository | - | - |
| answerConceptMigrationRepository | AnswerConceptMigrationRepository | - | - |
| locationRepository | LocationRepository | - | - |

**Returns**: `public`


##### readMap(concepts: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concepts | String | - | - |

**Returns**: `Map<String, String>`


##### fetchOrCreateConcept(conceptRequest: ConceptContract, ignoreAnswerConceptUUIDAbsence: boolean) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |
| ignoreAnswerConceptUUIDAbsence | boolean | - | - |

**Returns**: `Concept`


##### BadRequestError(request: "Concept) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | "Concept | - | - |

**Returns**: `new`


##### BadRequestError(with: String.format("Concept, unknown: name.trim() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | name.trim( | - | - |

**Returns**: `new`


##### createConcept(uuid: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `Concept`


##### Concept() → new

**Returns**: `new`


##### conceptExistsWithSameNameAndDifferentUUID(conceptRequest: ConceptContract) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |

**Returns**: `boolean`


##### fetchOrCreateConceptAnswer(concept: Concept, answerConceptRequest: ConceptContract, answerOrder: double) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| answerConceptRequest | ConceptContract | - | - |
| answerOrder | double | - | - |

**Returns**: `ConceptAnswer`


##### ConceptAnswer() → new

**Returns**: `new`


##### createCodedConcept(concept: Concept, conceptRequest: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| conceptRequest | ConceptContract | - | - |

**Returns**: `void`


##### AtomicInteger(unknown: 0) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 0 | - | - |

**Returns**: `new`


##### setRangeValues(concept: Concept, conceptRequest: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| conceptRequest | ConceptContract | - | - |

**Returns**: `void`


##### getDataType(conceptContract: ConceptContract, concept: Concept) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptContract | ConceptContract | - | - |
| concept | Concept | - | - |

**Returns**: `String`


##### addToMigrationIfRequired(conceptRequest: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |

**Returns**: `void`


##### AnswerConceptMigration() → new

**Returns**: `new`


##### updateMediaInfo(conceptRequest: ConceptContract, concept: Concept, ignoreConceptRequestMediaAbsence: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |
| concept | Concept | - | - |
| ignoreConceptRequestMediaAbsence | boolean | - | - |

**Returns**: `void`


##### saveOrUpdateConcepts(conceptRequests: List<ConceptContract>, requestType: ConceptContract.RequestType) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequests | List<ConceptContract> | - | - |
| requestType | ConceptContract.RequestType | - | - |

**Returns**: `List<String>`


##### assertNotDuplicate(conceptRequest: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |

**Returns**: `void`


##### BadRequestError(with: String.format("Concept, unknown: conceptRequest.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | conceptRequest.getName( | - | - |

**Returns**: `new`


##### getAnswerConcepts(conceptRequest: ConceptContract) → List<ConceptContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |

**Returns**: `List<ConceptContract>`


##### get(uuid: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `Concept`


##### getByName(name: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Concept`


##### getAnswer(conceptUUID: String, conceptAnswerUUID: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUUID | String | - | - |
| conceptAnswerUUID | String | - | - |

**Returns**: `ConceptAnswer`


##### getObservationValue(questionConcept: Concept, value: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionConcept | Concept | - | - |
| value | Object | - | - |

**Returns**: `Object`


##### getNameWithDefaultValue(unknown: answerConcept, unknown: answersItem) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerConcept | - | - |
| unknown | answersItem | - | - |

**Returns**: `return`


##### ObservationCollection(unknown: (HashMap<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (HashMap<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`


##### checkAndReturnLocationAddress(unknown: value) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | value | - | - |

**Returns**: `return`


##### getNameWithDefaultValue(unknown: answerConcept, unknown: value) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerConcept | - | - |
| unknown | value | - | - |

**Returns**: `return`


##### getNameWithDefaultValue(answerConcept: Concept, obsRawValue: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConcept | Concept | - | - |
| obsRawValue | Object | - | - |

**Returns**: `Object`


##### checkAndReturnLocationAddress(value: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | Object | - | - |

**Returns**: `Object`


##### putAddressLevel(unknown: Map<String, map: String>, addressLevel: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | String> | - | - |
| addressLevel | AddressLevel | - | - |

**Returns**: `void`


##### addDependentConcepts(conceptUsageContract: ConceptUsageContract, answerConcept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUsageContract | ConceptUsageContract | - | - |
| answerConcept | Concept | - | - |

**Returns**: `void`


##### ReferenceDataContract() → new

**Returns**: `new`


##### addDependentFormDetails(conceptUsageContract: ConceptUsageContract, concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUsageContract | ConceptUsageContract | - | - |
| concept | Concept | - | - |

**Returns**: `void`


##### readConceptsFromJsonObject(jsonObject: String) → Map<Concept, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | String | - | - |

**Returns**: `Map<Concept, String>`


##### BadRequestError(Request:: "Bad) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Request: | "Bad | - | - |

**Returns**: `new`


##### BadRequestError(Request:: "Bad) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Request: | "Bad | - | - |

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### findContactNumberConcept() → Optional<Concept>

**Returns**: `Optional<Concept>`


##### getAllowedValuesForSyncConcept(concept: Concept) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `String`


##### getExampleValuesForSyncConcept(concept: Concept) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `String`




## Functions

### ConceptService(conceptRepository: ConceptRepository, conceptAnswerRepository: ConceptAnswerRepository, formElementRepository: FormElementRepository, answerConceptMigrationRepository: AnswerConceptMigrationRepository, locationRepository: LocationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptAnswerRepository | ConceptAnswerRepository | - | - |
| formElementRepository | FormElementRepository | - | - |
| answerConceptMigrationRepository | AnswerConceptMigrationRepository | - | - |
| locationRepository | LocationRepository | - | - |

**Returns**: `public`



### readMap(concepts: String) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concepts | String | - | - |

**Returns**: `Map<String, String>`



### fetchOrCreateConcept(conceptRequest: ConceptContract, ignoreAnswerConceptUUIDAbsence: boolean) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |
| ignoreAnswerConceptUUIDAbsence | boolean | - | - |

**Returns**: `Concept`



### BadRequestError(request: "Concept) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | "Concept | - | - |

**Returns**: `new`



### BadRequestError(with: String.format("Concept, unknown: name.trim() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | name.trim( | - | - |

**Returns**: `new`



### createConcept(uuid: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `Concept`



### Concept() → new

**Returns**: `new`



### conceptExistsWithSameNameAndDifferentUUID(conceptRequest: ConceptContract) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |

**Returns**: `boolean`



### fetchOrCreateConceptAnswer(concept: Concept, answerConceptRequest: ConceptContract, answerOrder: double) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| answerConceptRequest | ConceptContract | - | - |
| answerOrder | double | - | - |

**Returns**: `ConceptAnswer`



### ConceptAnswer() → new

**Returns**: `new`



### createCodedConcept(concept: Concept, conceptRequest: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| conceptRequest | ConceptContract | - | - |

**Returns**: `void`



### AtomicInteger(unknown: 0) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 0 | - | - |

**Returns**: `new`



### setRangeValues(concept: Concept, conceptRequest: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| conceptRequest | ConceptContract | - | - |

**Returns**: `void`



### getDataType(conceptContract: ConceptContract, concept: Concept) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptContract | ConceptContract | - | - |
| concept | Concept | - | - |

**Returns**: `String`



### addToMigrationIfRequired(conceptRequest: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |

**Returns**: `void`



### AnswerConceptMigration() → new

**Returns**: `new`



### updateMediaInfo(conceptRequest: ConceptContract, concept: Concept, ignoreConceptRequestMediaAbsence: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |
| concept | Concept | - | - |
| ignoreConceptRequestMediaAbsence | boolean | - | - |

**Returns**: `void`



### saveOrUpdateConcepts(conceptRequests: List<ConceptContract>, requestType: ConceptContract.RequestType) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequests | List<ConceptContract> | - | - |
| requestType | ConceptContract.RequestType | - | - |

**Returns**: `List<String>`



### assertNotDuplicate(conceptRequest: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |

**Returns**: `void`



### BadRequestError(with: String.format("Concept, unknown: conceptRequest.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | conceptRequest.getName( | - | - |

**Returns**: `new`



### getAnswerConcepts(conceptRequest: ConceptContract) → List<ConceptContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRequest | ConceptContract | - | - |

**Returns**: `List<ConceptContract>`



### get(uuid: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `Concept`



### getByName(name: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Concept`



### getAnswer(conceptUUID: String, conceptAnswerUUID: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUUID | String | - | - |
| conceptAnswerUUID | String | - | - |

**Returns**: `ConceptAnswer`



### getObservationValue(questionConcept: Concept, value: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionConcept | Concept | - | - |
| value | Object | - | - |

**Returns**: `Object`



### getNameWithDefaultValue(unknown: answerConcept, unknown: answersItem) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerConcept | - | - |
| unknown | answersItem | - | - |

**Returns**: `return`



### ObservationCollection(unknown: (HashMap<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (HashMap<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`



### checkAndReturnLocationAddress(unknown: value) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | value | - | - |

**Returns**: `return`



### getNameWithDefaultValue(unknown: answerConcept, unknown: value) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | answerConcept | - | - |
| unknown | value | - | - |

**Returns**: `return`



### getNameWithDefaultValue(answerConcept: Concept, obsRawValue: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConcept | Concept | - | - |
| obsRawValue | Object | - | - |

**Returns**: `Object`



### checkAndReturnLocationAddress(value: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | Object | - | - |

**Returns**: `Object`



### putAddressLevel(unknown: Map<String, map: String>, addressLevel: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | String> | - | - |
| addressLevel | AddressLevel | - | - |

**Returns**: `void`



### addDependentConcepts(conceptUsageContract: ConceptUsageContract, answerConcept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUsageContract | ConceptUsageContract | - | - |
| answerConcept | Concept | - | - |

**Returns**: `void`



### ReferenceDataContract() → new

**Returns**: `new`



### addDependentFormDetails(conceptUsageContract: ConceptUsageContract, concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUsageContract | ConceptUsageContract | - | - |
| concept | Concept | - | - |

**Returns**: `void`



### readConceptsFromJsonObject(jsonObject: String) → Map<Concept, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | String | - | - |

**Returns**: `Map<Concept, String>`



### BadRequestError(Request:: "Bad) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Request: | "Bad | - | - |

**Returns**: `new`



### BadRequestError(Request:: "Bad) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Request: | "Bad | - | - |

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### findContactNumberConcept() → Optional<Concept>

**Returns**: `Optional<Concept>`



### getAllowedValuesForSyncConcept(concept: Concept) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `String`



### getExampleValuesForSyncConcept(concept: Concept) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `String`


