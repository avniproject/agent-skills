# API Reference: MediaObservationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/MediaObservationService.java`

---

## Classes

### MediaObservationService

**Inherits from**: (none)

#### Methods

##### MediaObservationService(observationService: ObservationService, s3Service: S3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationService | ObservationService | - | - |
| s3Service | S3Service | - | - |

**Returns**: `public`


##### processMediaObservations(allEntityObservations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allEntityObservations | ObservationCollection | - | - |

**Returns**: `void`


##### patchMediaObservations(allEntityObservations: ObservationCollection, conceptsReceived: Set<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allEntityObservations | ObservationCollection | - | - |
| conceptsReceived | Set<String> | - | - |

**Returns**: `void`


##### putObservation(allEntityObservations: ObservationCollection, unknown: Map.Entry<Concept, entry: Object>, concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allEntityObservations | ObservationCollection | - | - |
| unknown | Map.Entry<Concept | - | - |
| entry | Object> | - | - |
| concept | Concept | - | - |

**Returns**: `void`


##### copyMediaToAvni(value: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |

**Returns**: `String`




## Functions

### MediaObservationService(observationService: ObservationService, s3Service: S3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationService | ObservationService | - | - |
| s3Service | S3Service | - | - |

**Returns**: `public`



### processMediaObservations(allEntityObservations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allEntityObservations | ObservationCollection | - | - |

**Returns**: `void`



### patchMediaObservations(allEntityObservations: ObservationCollection, conceptsReceived: Set<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allEntityObservations | ObservationCollection | - | - |
| conceptsReceived | Set<String> | - | - |

**Returns**: `void`



### putObservation(allEntityObservations: ObservationCollection, unknown: Map.Entry<Concept, entry: Object>, concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allEntityObservations | ObservationCollection | - | - |
| unknown | Map.Entry<Concept | - | - |
| entry | Object> | - | - |
| concept | Concept | - | - |

**Returns**: `void`



### copyMediaToAvni(value: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |

**Returns**: `String`


