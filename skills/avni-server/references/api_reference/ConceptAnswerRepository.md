# API Reference: ConceptAnswerRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/ConceptAnswerRepository.java`

---

## Functions

### findByConceptAndAnswerConcept(concept: Concept, answerConcept: Concept) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| answerConcept | Concept | - | - |

**Returns**: `ConceptAnswer`



### findByName(name: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ConceptAnswer`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → ConceptAnswer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ConceptAnswer`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### getAllConceptNames() → List<String>

**Returns**: `List<String>`



### getAllNames() → List<String>

**Returns**: `List<String>`



### findByAnswerConcept(answerConcept: Concept) → List<ConceptAnswer>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answerConcept | Concept | - | - |

**Returns**: `List<ConceptAnswer>`



### findByConceptAndIsVoidedFalse(concept: Concept, pageable: Pageable) → Page<ConceptAnswer>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ConceptAnswer>`


