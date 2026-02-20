# API Reference: IndividualRelationGenderMappingRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/individualRelationship/IndividualRelationGenderMappingRepository.java`

---

## Functions

### findByName(name: String) → IndividualRelationGenderMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `IndividualRelationGenderMapping`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → IndividualRelationGenderMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `IndividualRelationGenderMapping`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findAllByRelation(relation: IndividualRelation) → List<IndividualRelationGenderMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relation | IndividualRelation | - | - |

**Returns**: `List<IndividualRelationGenderMapping>`



### findByRelationAndIsVoidedFalse(relation: IndividualRelation) → List<IndividualRelationGenderMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relation | IndividualRelation | - | - |

**Returns**: `List<IndividualRelationGenderMapping>`



### findAllByGenderAndIsVoidedFalse(gender: Gender) → List<IndividualRelationGenderMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gender | Gender | - | - |

**Returns**: `List<IndividualRelationGenderMapping>`


