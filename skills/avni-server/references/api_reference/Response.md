# API Reference: Response.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/response/Response.java`

---

## Classes

### Response

**Inherits from**: (none)

#### Methods

##### putIfPresent(unknown: Map<String, map: Object>, name: String, value: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | Object> | - | - |
| name | String | - | - |
| value | Object | - | - |

**Returns**: `void`


##### putObservations(conceptRepository: ConceptRepository, conceptService: ConceptService, unknown: Map<String, parentMap: Object>, unknown: LinkedHashMap<String, observationsResponse: Object>, observations: ObservationCollection, observationsResponseKeyName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| unknown | Map<String | - | - |
| parentMap | Object> | - | - |
| unknown | LinkedHashMap<String | - | - |
| observationsResponse | Object> | - | - |
| observations | ObservationCollection | - | - |
| observationsResponseKeyName | String | - | - |

**Returns**: `void`


##### mapObservations(conceptRepository: ConceptRepository, conceptService: ConceptService, unknown: Map<String, observationsResponse: Object>, observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| unknown | Map<String | - | - |
| observationsResponse | Object> | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `void`


##### ObservationCollection() → new

**Returns**: `new`


##### putObservations(conceptRepository: ConceptRepository, conceptService: ConceptService, unknown: Map<String, parentMap: Object>, unknown: LinkedHashMap<String, observationsResponse: Object>, observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| unknown | Map<String | - | - |
| parentMap | Object> | - | - |
| unknown | LinkedHashMap<String | - | - |
| observationsResponse | Object> | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `void`


##### putAudit(avniEntity: CHSEntity, unknown: Map<String, objectMap: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| avniEntity | CHSEntity | - | - |
| unknown | Map<String | - | - |
| objectMap | Object> | - | - |

**Returns**: `void`


##### putChildren(unknown: LinkedHashMap<String, parentMap: Object>, key: String, children: Set<CHSBaseEntity>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | LinkedHashMap<String | - | - |
| parentMap | Object> | - | - |
| key | String | - | - |
| children | Set<CHSBaseEntity> | - | - |

**Returns**: `void`




## Functions

### putIfPresent(unknown: Map<String, map: Object>, name: String, value: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | Object> | - | - |
| name | String | - | - |
| value | Object | - | - |

**Returns**: `void`



### putObservations(conceptRepository: ConceptRepository, conceptService: ConceptService, unknown: Map<String, parentMap: Object>, unknown: LinkedHashMap<String, observationsResponse: Object>, observations: ObservationCollection, observationsResponseKeyName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| unknown | Map<String | - | - |
| parentMap | Object> | - | - |
| unknown | LinkedHashMap<String | - | - |
| observationsResponse | Object> | - | - |
| observations | ObservationCollection | - | - |
| observationsResponseKeyName | String | - | - |

**Returns**: `void`



### mapObservations(conceptRepository: ConceptRepository, conceptService: ConceptService, unknown: Map<String, observationsResponse: Object>, observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| unknown | Map<String | - | - |
| observationsResponse | Object> | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `void`



### ObservationCollection() → new

**Returns**: `new`



### putObservations(conceptRepository: ConceptRepository, conceptService: ConceptService, unknown: Map<String, parentMap: Object>, unknown: LinkedHashMap<String, observationsResponse: Object>, observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| unknown | Map<String | - | - |
| parentMap | Object> | - | - |
| unknown | LinkedHashMap<String | - | - |
| observationsResponse | Object> | - | - |
| observations | ObservationCollection | - | - |

**Returns**: `void`



### putAudit(avniEntity: CHSEntity, unknown: Map<String, objectMap: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| avniEntity | CHSEntity | - | - |
| unknown | Map<String | - | - |
| objectMap | Object> | - | - |

**Returns**: `void`



### putChildren(unknown: LinkedHashMap<String, parentMap: Object>, key: String, children: Set<CHSBaseEntity>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | LinkedHashMap<String | - | - |
| parentMap | Object> | - | - |
| key | String | - | - |
| children | Set<CHSBaseEntity> | - | - |

**Returns**: `void`


