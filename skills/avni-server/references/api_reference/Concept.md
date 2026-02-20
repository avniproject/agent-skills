# API Reference: Concept.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/Concept.java`

---

## Classes

### Concept

**Inherits from**: OrganisationAwareEntity

#### Methods

##### create(name: String, dataType: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| dataType | String | - | - |

**Returns**: `Concept`


##### create(unknown: name, unknown: dataType, unknown: UUID.randomUUID() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | dataType | - | - |
| unknown | UUID.randomUUID( | - | - |

**Returns**: `return`


##### create(name: String, dataType: String, uuid: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| dataType | String | - | - |
| uuid | String | - | - |

**Returns**: `Concept`


##### Concept() → new

**Returns**: `new`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getDataType() → String

**Returns**: `String`


##### setDataType(dataType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataType | String | - | - |

**Returns**: `void`


##### getLowAbsolute() → Double

**Returns**: `Double`


##### setLowAbsolute(lowAbsolute: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowAbsolute | Double | - | - |

**Returns**: `void`


##### getHighAbsolute() → Double

**Returns**: `Double`


##### setHighAbsolute(highAbsolute: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| highAbsolute | Double | - | - |

**Returns**: `void`


##### getLowNormal() → Double

**Returns**: `Double`


##### setLowNormal(lowNormal: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowNormal | Double | - | - |

**Returns**: `void`


##### getHighNormal() → Double

**Returns**: `Double`


##### setHighNormal(highNormal: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| highNormal | Double | - | - |

**Returns**: `void`


##### getConceptAnswers() → Set<ConceptAnswer>

**Returns**: `Set<ConceptAnswer>`


##### getConceptAnswer(answerConceptUUID: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptUUID | String | - | - |

**Returns**: `ConceptAnswer`


##### setConceptAnswers(conceptAnswers: Set<ConceptAnswer>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptAnswers | Set<ConceptAnswer> | - | - |

**Returns**: `void`


##### getKeyValues() → KeyValues

**Returns**: `KeyValues`


##### setKeyValues(keyValues: KeyValues) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValues | KeyValues | - | - |

**Returns**: `void`


##### findConceptAnswerByName(answerConceptName: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptName | String | - | - |

**Returns**: `ConceptAnswer`


##### findConceptAnswerByAnswerUuid(conceptAnswerUuid: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptAnswerUuid | String | - | - |

**Returns**: `ConceptAnswer`


##### findConceptAnswerByConceptUUID(answerConceptUUID: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptUUID | String | - | - |

**Returns**: `ConceptAnswer`


##### findConceptAnswerByConceptUUIDOrName(answerConceptUUID: String, name: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptUUID | String | - | - |
| name | String | - | - |

**Returns**: `ConceptAnswer`


##### addAnswer(conceptAnswer: ConceptAnswer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptAnswer | ConceptAnswer | - | - |

**Returns**: `void`


##### addAll(newConceptAnswers: List<ConceptAnswer>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newConceptAnswers | List<ConceptAnswer> | - | - |

**Returns**: `void`


##### getUnit() → String

**Returns**: `String`


##### setUnit(unit: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unit | String | - | - |

**Returns**: `void`


##### findAnswerConcept(answerConceptName: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptName | String | - | - |

**Returns**: `Concept`


##### toString() → String

**Returns**: `String`


##### getDbValue(value: Object, isSingleSelect: Boolean) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | Object | - | - |
| isSingleSelect | Boolean | - | - |

**Returns**: `Object`


##### NullPointerException(concept: String.format("Answer, unknown: value, unknown: this.name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | String.format("Answer | - | - |
| unknown | value | - | - |
| unknown | this.name | - | - |

**Returns**: `new`


##### getSortedAnswers() → Stream<ConceptAnswer>

**Returns**: `Stream<ConceptAnswer>`


##### getActive() → Boolean

**Returns**: `Boolean`


##### setActive(active: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `void`


##### isCoded() → boolean

**Returns**: `boolean`


##### isQuestionGroup() → boolean

**Returns**: `boolean`


##### getViewColumnName() → String

**Returns**: `String`


##### isViewColumnNameTruncated() → boolean

**Returns**: `boolean`


##### getAnswerConcept(answerConceptName: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptName | String | - | - |

**Returns**: `Concept`


##### RuntimeException(a: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | "Not | - | - |

**Returns**: `new`


##### getMediaUrl() → String

**Returns**: `String`


##### getMediaType() → MediaType

**Returns**: `MediaType`


##### getMediaUrl() → return

**Returns**: `return`


##### getMedia() → List<ConceptMedia>

**Returns**: `List<ConceptMedia>`


##### setMedia(media: List<ConceptMedia>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| media | List<ConceptMedia> | - | - |

**Returns**: `void`


##### removeAnswer(conceptAnswer: ConceptAnswer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptAnswer | ConceptAnswer | - | - |

**Returns**: `void`




## Functions

### create(name: String, dataType: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| dataType | String | - | - |

**Returns**: `Concept`



### create(unknown: name, unknown: dataType, unknown: UUID.randomUUID() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | dataType | - | - |
| unknown | UUID.randomUUID( | - | - |

**Returns**: `return`



### create(name: String, dataType: String, uuid: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| dataType | String | - | - |
| uuid | String | - | - |

**Returns**: `Concept`



### Concept() → new

**Returns**: `new`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getDataType() → String

**Returns**: `String`



### setDataType(dataType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataType | String | - | - |

**Returns**: `void`



### getLowAbsolute() → Double

**Returns**: `Double`



### setLowAbsolute(lowAbsolute: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowAbsolute | Double | - | - |

**Returns**: `void`



### getHighAbsolute() → Double

**Returns**: `Double`



### setHighAbsolute(highAbsolute: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| highAbsolute | Double | - | - |

**Returns**: `void`



### getLowNormal() → Double

**Returns**: `Double`



### setLowNormal(lowNormal: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowNormal | Double | - | - |

**Returns**: `void`



### getHighNormal() → Double

**Returns**: `Double`



### setHighNormal(highNormal: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| highNormal | Double | - | - |

**Returns**: `void`



### getConceptAnswers() → Set<ConceptAnswer>

**Returns**: `Set<ConceptAnswer>`



### getConceptAnswer(answerConceptUUID: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptUUID | String | - | - |

**Returns**: `ConceptAnswer`



### setConceptAnswers(conceptAnswers: Set<ConceptAnswer>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptAnswers | Set<ConceptAnswer> | - | - |

**Returns**: `void`



### getKeyValues() → KeyValues

**Returns**: `KeyValues`



### setKeyValues(keyValues: KeyValues) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValues | KeyValues | - | - |

**Returns**: `void`



### findConceptAnswerByName(answerConceptName: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptName | String | - | - |

**Returns**: `ConceptAnswer`



### findConceptAnswerByAnswerUuid(conceptAnswerUuid: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptAnswerUuid | String | - | - |

**Returns**: `ConceptAnswer`



### findConceptAnswerByConceptUUID(answerConceptUUID: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptUUID | String | - | - |

**Returns**: `ConceptAnswer`



### findConceptAnswerByConceptUUIDOrName(answerConceptUUID: String, name: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptUUID | String | - | - |
| name | String | - | - |

**Returns**: `ConceptAnswer`



### addAnswer(conceptAnswer: ConceptAnswer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptAnswer | ConceptAnswer | - | - |

**Returns**: `void`



### addAll(newConceptAnswers: List<ConceptAnswer>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newConceptAnswers | List<ConceptAnswer> | - | - |

**Returns**: `void`



### getUnit() → String

**Returns**: `String`



### setUnit(unit: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unit | String | - | - |

**Returns**: `void`



### findAnswerConcept(answerConceptName: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptName | String | - | - |

**Returns**: `Concept`



### toString() → String

**Returns**: `String`



### getDbValue(value: Object, isSingleSelect: Boolean) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | Object | - | - |
| isSingleSelect | Boolean | - | - |

**Returns**: `Object`



### NullPointerException(concept: String.format("Answer, unknown: value, unknown: this.name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | String.format("Answer | - | - |
| unknown | value | - | - |
| unknown | this.name | - | - |

**Returns**: `new`



### getSortedAnswers() → Stream<ConceptAnswer>

**Returns**: `Stream<ConceptAnswer>`



### getActive() → Boolean

**Returns**: `Boolean`



### setActive(active: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `void`



### isCoded() → boolean

**Returns**: `boolean`



### isQuestionGroup() → boolean

**Returns**: `boolean`



### getViewColumnName() → String

**Returns**: `String`



### isViewColumnNameTruncated() → boolean

**Returns**: `boolean`



### getAnswerConcept(answerConceptName: String) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConceptName | String | - | - |

**Returns**: `Concept`



### RuntimeException(a: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | "Not | - | - |

**Returns**: `new`



### getMediaUrl() → String

**Returns**: `String`



### getMediaType() → MediaType

**Returns**: `MediaType`



### getMediaUrl() → return

**Returns**: `return`



### getMedia() → List<ConceptMedia>

**Returns**: `List<ConceptMedia>`



### setMedia(media: List<ConceptMedia>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| media | List<ConceptMedia> | - | - |

**Returns**: `void`



### removeAnswer(conceptAnswer: ConceptAnswer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptAnswer | ConceptAnswer | - | - |

**Returns**: `void`


