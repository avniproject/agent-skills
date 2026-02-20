# API Reference: LocationApiController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/api/LocationApiController.java`

---

## Classes

### LocationApiController

**Inherits from**: (none)

#### Methods

##### LocationApiController(locationRepository: LocationRepository, conceptRepository: ConceptRepository, conceptService: ConceptService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRepository | LocationRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |

**Returns**: `public`


##### getLocations(=: @RequestParam(value, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`


##### ResponsePage(unknown: locationApiResponses, unknown: addresses.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationApiResponses | - | - |
| unknown | addresses.getNumberOfElements( | - | - |

**Returns**: `new`


##### get(unknown: @PathVariable("id") → ResponseEntity<LocationApiResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<LocationApiResponse>`




## Functions

### LocationApiController(locationRepository: LocationRepository, conceptRepository: ConceptRepository, conceptService: ConceptService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRepository | LocationRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |

**Returns**: `public`



### getLocations(=: @RequestParam(value, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`



### ResponsePage(unknown: locationApiResponses, unknown: addresses.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationApiResponses | - | - |
| unknown | addresses.getNumberOfElements( | - | - |

**Returns**: `new`



### get(unknown: @PathVariable("id") → ResponseEntity<LocationApiResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<LocationApiResponse>`


