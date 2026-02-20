# API Reference: RequestUtils.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/api/RequestUtils.java`

---

## Classes

### RequestUtils

**Inherits from**: (none)

#### Methods

##### createObservations(unknown: Map<String, observationsRequest: Object>, conceptRepository: ConceptRepository) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| observationsRequest | Object> | - | - |
| conceptRepository | ConceptRepository | - | - |

**Returns**: `ObservationCollection`


##### ObservationCollection(unknown: observations) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | observations | - | - |

**Returns**: `new`


##### patchObservations(unknown: Map<String, observationsRequest: Object>, conceptRepository: ConceptRepository, observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| observationsRequest | Object> | - | - |
| conceptRepository | ConceptRepository | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `void`


##### isObservationRequestValueEmpty(value: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | Object | - | - |

**Returns**: `boolean`


##### putObservation(conceptRepository: ConceptRepository, unknown: Map<String, observations: Object>, unknown: Map.Entry<String, entry: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| unknown | Map<String | - | - |
| observations | Object> | - | - |
| unknown | Map.Entry<String | - | - |
| entry | Object> | - | - |

**Returns**: `void`


##### NullPointerException(with: String.format("Concept, unknown: conceptName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | conceptName | - | - |

**Returns**: `new`


##### getObsValue(conceptRepository: ConceptRepository, conceptDataType: String, newValue: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptDataType | String | - | - |
| newValue | Object | - | - |

**Returns**: `Object`


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


##### isValidUUID(text: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | String | - | - |

**Returns**: `boolean`




## Functions

### createObservations(unknown: Map<String, observationsRequest: Object>, conceptRepository: ConceptRepository) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| observationsRequest | Object> | - | - |
| conceptRepository | ConceptRepository | - | - |

**Returns**: `ObservationCollection`



### ObservationCollection(unknown: observations) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | observations | - | - |

**Returns**: `new`



### patchObservations(unknown: Map<String, observationsRequest: Object>, conceptRepository: ConceptRepository, observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| observationsRequest | Object> | - | - |
| conceptRepository | ConceptRepository | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `void`



### isObservationRequestValueEmpty(value: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | Object | - | - |

**Returns**: `boolean`



### putObservation(conceptRepository: ConceptRepository, unknown: Map<String, observations: Object>, unknown: Map.Entry<String, entry: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| unknown | Map<String | - | - |
| observations | Object> | - | - |
| unknown | Map.Entry<String | - | - |
| entry | Object> | - | - |

**Returns**: `void`



### NullPointerException(with: String.format("Concept, unknown: conceptName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Concept | - | - |
| unknown | conceptName | - | - |

**Returns**: `new`



### getObsValue(conceptRepository: ConceptRepository, conceptDataType: String, newValue: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptDataType | String | - | - |
| newValue | Object | - | - |

**Returns**: `Object`



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



### isValidUUID(text: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | String | - | - |

**Returns**: `boolean`


