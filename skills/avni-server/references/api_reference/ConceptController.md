# API Reference: ConceptController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ConceptController.java`

---

## Functions

### ConceptController(conceptRepository: ConceptRepository, conceptService: ConceptService, projectionFactory: ProjectionFactory, conceptAnswerRepository: ConceptAnswerRepository, accessControlService: AccessControlService, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| projectionFactory | ProjectionFactory | - | - |
| conceptAnswerRepository | ConceptAnswerRepository | - | - |
| accessControlService | AccessControlService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`



### save(ConceptContract: @RequestBody) → ConceptProjection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ConceptContract | @RequestBody | - | - |

**Returns**: `ConceptProjection`



### tests(use: tests) → in

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| use | tests | - | - |

**Returns**: `in`



### save(List<ConceptContract>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<ConceptContract> | @RequestBody | - | - |

**Returns**: `void`



### getOneForWeb(String: @PathVariable) → ConceptProjection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ConceptProjection`



### getOneForWebByName(String: @RequestParam) → ResponseEntity<ConceptProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `ResponseEntity<ConceptProjection>`



### wrap(unknown: conceptRepository.getAllNonVoidedConcepts(pageRequest) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptRepository.getAllNonVoidedConcepts(pageRequest | - | - |

**Returns**: `return`



### wrap(unknown: conceptRepository.findByIsVoidedFalseAndNameIgnoreCaseContaining(name, unknown: pageRequest) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptRepository.findByIsVoidedFalseAndNameIgnoreCaseContaining(name | - | - |
| unknown | pageRequest | - | - |

**Returns**: `return`



### getConceptUsage(String: @PathVariable) → ResponseEntity<ConceptUsageContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ResponseEntity<ConceptUsageContract>`



### ConceptUsageContract() → new

**Returns**: `new`



### getAllCodedConcepts() → List<CodedConceptProjection>

**Returns**: `List<CodedConceptProjection>`



### getDataTypes() → List<String>

**Returns**: `List<String>`



### deleteWeb(String: @PathVariable) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ResponseEntity`



### getAnswerConcept(=: @RequestParam(value, =: required) → Page<ConceptSyncAttributeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Page<ConceptSyncAttributeContract>`



### findByIds(unknown: @Param("ids") → Page<ConceptSyncAttributeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `Page<ConceptSyncAttributeContract>`



### dashboardFilterSearch(String: @RequestParam) → List<ConceptContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |

**Returns**: `List<ConceptContract>`



### getMediaConcepts() → List<ConceptContract>

**Returns**: `List<ConceptContract>`


