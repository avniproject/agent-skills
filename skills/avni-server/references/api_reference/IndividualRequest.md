# API Reference: IndividualRequest.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/IndividualRequest.java`

---

## Classes

### IndividualRequest

**Inherits from**: CommonIndividualRequest

#### Methods

##### IndividualRequest() → public

**Returns**: `public`


##### IndividualRequest(observations: List<ObservationRequest>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationRequest> | - | - |

**Returns**: `public`


##### getObservations() → List<ObservationRequest>

**Returns**: `List<ObservationRequest>`


##### setObservations(observations: List<ObservationRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationRequest> | - | - |

**Returns**: `void`


##### addObservation(observationRequest: ObservationRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequest | ObservationRequest | - | - |

**Returns**: `void`


##### findObservation(conceptName: String) → ObservationRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `ObservationRequest`


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


##### getVisitSchedules() → List<VisitSchedule>

**Returns**: `List<VisitSchedule>`


##### setVisitSchedules(visitSchedules: List<VisitSchedule>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitSchedules | List<VisitSchedule> | - | - |

**Returns**: `void`


##### getDecisions() → Decisions

**Returns**: `Decisions`


##### setDecisions(decisions: Decisions) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisions | Decisions | - | - |

**Returns**: `void`


##### getIdentifierAssignmentUuids() → List<String>

**Returns**: `List<String>`


##### setIdentifierAssignmentUuids(identifierAssignmentUuids: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierAssignmentUuids | List<String> | - | - |

**Returns**: `void`




## Functions

### IndividualRequest() → public

**Returns**: `public`



### IndividualRequest(observations: List<ObservationRequest>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationRequest> | - | - |

**Returns**: `public`



### getObservations() → List<ObservationRequest>

**Returns**: `List<ObservationRequest>`



### setObservations(observations: List<ObservationRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationRequest> | - | - |

**Returns**: `void`



### addObservation(observationRequest: ObservationRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationRequest | ObservationRequest | - | - |

**Returns**: `void`



### findObservation(conceptName: String) → ObservationRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `ObservationRequest`



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



### getVisitSchedules() → List<VisitSchedule>

**Returns**: `List<VisitSchedule>`



### setVisitSchedules(visitSchedules: List<VisitSchedule>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitSchedules | List<VisitSchedule> | - | - |

**Returns**: `void`



### getDecisions() → Decisions

**Returns**: `Decisions`



### setDecisions(decisions: Decisions) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisions | Decisions | - | - |

**Returns**: `void`



### getIdentifierAssignmentUuids() → List<String>

**Returns**: `List<String>`



### setIdentifierAssignmentUuids(identifierAssignmentUuids: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierAssignmentUuids | List<String> | - | - |

**Returns**: `void`


