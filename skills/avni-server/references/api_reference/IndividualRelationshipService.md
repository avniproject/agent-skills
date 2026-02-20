# API Reference: IndividualRelationshipService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/IndividualRelationshipService.java`

---

## Functions

### IndividualRelationshipService(individualRelationshipRepository: IndividualRelationshipRepository, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationshipRepository | IndividualRelationshipRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, subjectTypeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| subjectTypeUUID | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<IndividualRelationship>

**Returns**: `OperatingIndividualScopeAwareRepository<IndividualRelationship>`



### findByIndividual(individual: Individual) → Set<IndividualRelationship>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `Set<IndividualRelationship>`


