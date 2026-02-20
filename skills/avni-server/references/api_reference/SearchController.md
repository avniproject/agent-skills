# API Reference: SearchController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/SearchController.java`

---

## Classes

### SearchController

**Inherits from**: (none)

#### Methods

##### SearchController(conceptRepository: ConceptRepository, locationRepository: LocationRepository, addressLevelTypeRepository: AddressLevelTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| locationRepository | LocationRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |

**Returns**: `public`


##### searchConcept(String: @RequestParam, =: @RequestParam(required) → List<ConceptContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| = | @RequestParam(required | - | - |

**Returns**: `List<ConceptContract>`


##### getConceptContract(unknown: conceptRepository.findByIsVoidedFalseAndActiveTrueAndNameIgnoreCaseContains(name) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptRepository.findByIsVoidedFalseAndActiveTrueAndNameIgnoreCaseContains(name | - | - |

**Returns**: `return`


##### getConceptContract(unknown: conceptRepository.findByIsVoidedFalseAndActiveTrueAndDataTypeAndNameIgnoreCaseContains(dataType, unknown: name) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptRepository.findByIsVoidedFalseAndActiveTrueAndDataTypeAndNameIgnoreCaseContains(dataType | - | - |
| unknown | name | - | - |

**Returns**: `return`


##### searchLocation(String: @RequestParam) → List<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `List<AddressLevelContractWeb>`


##### searchLocationType(String: @RequestParam) → List<AddressLevelTypeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `List<AddressLevelTypeContract>`


##### getConceptContract(concepts: List<Concept>) → List<ConceptContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concepts | List<Concept> | - | - |

**Returns**: `List<ConceptContract>`


##### ConceptMapper() → new

**Returns**: `new`




## Functions

### SearchController(conceptRepository: ConceptRepository, locationRepository: LocationRepository, addressLevelTypeRepository: AddressLevelTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| locationRepository | LocationRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |

**Returns**: `public`



### searchConcept(String: @RequestParam, =: @RequestParam(required) → List<ConceptContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| = | @RequestParam(required | - | - |

**Returns**: `List<ConceptContract>`



### getConceptContract(unknown: conceptRepository.findByIsVoidedFalseAndActiveTrueAndNameIgnoreCaseContains(name) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptRepository.findByIsVoidedFalseAndActiveTrueAndNameIgnoreCaseContains(name | - | - |

**Returns**: `return`



### getConceptContract(unknown: conceptRepository.findByIsVoidedFalseAndActiveTrueAndDataTypeAndNameIgnoreCaseContains(dataType, unknown: name) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptRepository.findByIsVoidedFalseAndActiveTrueAndDataTypeAndNameIgnoreCaseContains(dataType | - | - |
| unknown | name | - | - |

**Returns**: `return`



### searchLocation(String: @RequestParam) → List<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `List<AddressLevelContractWeb>`



### searchLocationType(String: @RequestParam) → List<AddressLevelTypeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `List<AddressLevelTypeContract>`



### getConceptContract(concepts: List<Concept>) → List<ConceptContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concepts | List<Concept> | - | - |

**Returns**: `List<ConceptContract>`



### ConceptMapper() → new

**Returns**: `new`


