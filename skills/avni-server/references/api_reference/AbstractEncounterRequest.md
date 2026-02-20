# API Reference: AbstractEncounterRequest.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/AbstractEncounterRequest.java`

---

## Classes

### AbstractEncounterRequest

**Inherits from**: CommonAbstractEncounterRequest

#### Methods

##### getObservations() → List<ObservationRequest>

**Returns**: `List<ObservationRequest>`


##### setObservations(observations: List<ObservationRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationRequest> | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getMaxDateTime() → DateTime

**Returns**: `DateTime`


##### setMaxDateTime(maxDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxDateTime | DateTime | - | - |

**Returns**: `void`


##### getEarliestVisitDateTime() → DateTime

**Returns**: `DateTime`


##### setEarliestVisitDateTime(earliestVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| earliestVisitDateTime | DateTime | - | - |

**Returns**: `void`


##### getCancelDateTime() → DateTime

**Returns**: `DateTime`


##### setCancelDateTime(cancelDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelDateTime | DateTime | - | - |

**Returns**: `void`


##### getCancelObservations() → List<ObservationRequest>

**Returns**: `List<ObservationRequest>`


##### setCancelObservations(cancelObservations: List<ObservationRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelObservations | List<ObservationRequest> | - | - |

**Returns**: `void`


##### getMaxVisitDateTime() → DateTime

**Returns**: `DateTime`


##### setMaxVisitDateTime(maxVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxVisitDateTime | DateTime | - | - |

**Returns**: `void`


##### findObservation(conceptName: String) → ObservationRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `ObservationRequest`


##### addObservation(observationRequest: ObservationRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequest | ObservationRequest | - | - |

**Returns**: `void`


##### getObservationValue(conceptName: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `Object`


##### findObservation(unknown: conceptName) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptName | - | - |

**Returns**: `return`


##### getEncounterLocation() → PointRequest

**Returns**: `PointRequest`


##### setEncounterLocation(encounterLocation: PointRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterLocation | PointRequest | - | - |

**Returns**: `void`


##### getCancelLocation() → PointRequest

**Returns**: `PointRequest`


##### setCancelLocation(cancelLocation: PointRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelLocation | PointRequest | - | - |

**Returns**: `void`


##### isPlanned() → boolean

**Returns**: `boolean`


##### getEncounterDateTime() → return

**Returns**: `return`




## Functions

### getObservations() → List<ObservationRequest>

**Returns**: `List<ObservationRequest>`



### setObservations(observations: List<ObservationRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationRequest> | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getMaxDateTime() → DateTime

**Returns**: `DateTime`



### setMaxDateTime(maxDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxDateTime | DateTime | - | - |

**Returns**: `void`



### getEarliestVisitDateTime() → DateTime

**Returns**: `DateTime`



### setEarliestVisitDateTime(earliestVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| earliestVisitDateTime | DateTime | - | - |

**Returns**: `void`



### getCancelDateTime() → DateTime

**Returns**: `DateTime`



### setCancelDateTime(cancelDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelDateTime | DateTime | - | - |

**Returns**: `void`



### getCancelObservations() → List<ObservationRequest>

**Returns**: `List<ObservationRequest>`



### setCancelObservations(cancelObservations: List<ObservationRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelObservations | List<ObservationRequest> | - | - |

**Returns**: `void`



### getMaxVisitDateTime() → DateTime

**Returns**: `DateTime`



### setMaxVisitDateTime(maxVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxVisitDateTime | DateTime | - | - |

**Returns**: `void`



### findObservation(conceptName: String) → ObservationRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `ObservationRequest`



### addObservation(observationRequest: ObservationRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequest | ObservationRequest | - | - |

**Returns**: `void`



### getObservationValue(conceptName: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `Object`



### findObservation(unknown: conceptName) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptName | - | - |

**Returns**: `return`



### getEncounterLocation() → PointRequest

**Returns**: `PointRequest`



### setEncounterLocation(encounterLocation: PointRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterLocation | PointRequest | - | - |

**Returns**: `void`



### getCancelLocation() → PointRequest

**Returns**: `PointRequest`



### setCancelLocation(cancelLocation: PointRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelLocation | PointRequest | - | - |

**Returns**: `void`



### isPlanned() → boolean

**Returns**: `boolean`



### getEncounterDateTime() → return

**Returns**: `return`


