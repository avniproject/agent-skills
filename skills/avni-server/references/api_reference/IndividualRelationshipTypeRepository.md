# API Reference: IndividualRelationshipTypeRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/individualRelationship/IndividualRelationshipTypeRepository.java`

---

## Functions

### findByIndividualAIsToBAndIndividualBIsToA(individualRelation: IndividualRelation, reverseRelation: IndividualRelation) → IndividualRelationshipType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelation | IndividualRelation | - | - |
| reverseRelation | IndividualRelation | - | - |

**Returns**: `IndividualRelationshipType`



### findAllByIndividualBIsToAAndIsVoidedFalse(reverseRelation: IndividualRelation) → List<IndividualRelationshipType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reverseRelation | IndividualRelation | - | - |

**Returns**: `List<IndividualRelationshipType>`


