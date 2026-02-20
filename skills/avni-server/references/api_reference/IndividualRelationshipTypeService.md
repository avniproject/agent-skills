# API Reference: IndividualRelationshipTypeService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/IndividualRelationshipTypeService.java`

---

## Classes

### IndividualRelationshipTypeService

**Inherits from**: NonScopeAwareService

#### Methods

##### IndividualRelationshipTypeService(individualRelationshipTypeRepository: IndividualRelationshipTypeRepository, individualRelationRepository: IndividualRelationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationshipTypeRepository | IndividualRelationshipTypeRepository | - | - |
| individualRelationRepository | IndividualRelationRepository | - | - |

**Returns**: `public`


##### getAllRelationshipTypes(includeVoided: boolean) → List<IndividualRelationshipTypeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| includeVoided | boolean | - | - |

**Returns**: `List<IndividualRelationshipTypeContract>`


##### saveRelationshipType(relationshipTypeContract: IndividualRelationshipTypeContract) → IndividualRelationshipType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relationshipTypeContract | IndividualRelationshipTypeContract | - | - |

**Returns**: `IndividualRelationshipType`


##### findIndividualRelation(relationContract: IndividualRelationContract) → IndividualRelation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relationContract | IndividualRelationContract | - | - |

**Returns**: `IndividualRelation`


##### createIndividualRelationshipType(aToB: IndividualRelation, bToA: IndividualRelation, requestUUID: String) → IndividualRelationshipType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aToB | IndividualRelation | - | - |
| bToA | IndividualRelation | - | - |
| requestUUID | String | - | - |

**Returns**: `IndividualRelationshipType`


##### IndividualRelationshipType() → new

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### saveRelationshipTypes(individualRelationshipTypeContracts: IndividualRelationshipTypeContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationshipTypeContracts | IndividualRelationshipTypeContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: individualRelationshipTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualRelationshipTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### IndividualRelationshipTypeService(individualRelationshipTypeRepository: IndividualRelationshipTypeRepository, individualRelationRepository: IndividualRelationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationshipTypeRepository | IndividualRelationshipTypeRepository | - | - |
| individualRelationRepository | IndividualRelationRepository | - | - |

**Returns**: `public`



### getAllRelationshipTypes(includeVoided: boolean) → List<IndividualRelationshipTypeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| includeVoided | boolean | - | - |

**Returns**: `List<IndividualRelationshipTypeContract>`



### saveRelationshipType(relationshipTypeContract: IndividualRelationshipTypeContract) → IndividualRelationshipType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relationshipTypeContract | IndividualRelationshipTypeContract | - | - |

**Returns**: `IndividualRelationshipType`



### findIndividualRelation(relationContract: IndividualRelationContract) → IndividualRelation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relationContract | IndividualRelationContract | - | - |

**Returns**: `IndividualRelation`



### createIndividualRelationshipType(aToB: IndividualRelation, bToA: IndividualRelation, requestUUID: String) → IndividualRelationshipType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aToB | IndividualRelation | - | - |
| bToA | IndividualRelation | - | - |
| requestUUID | String | - | - |

**Returns**: `IndividualRelationshipType`



### IndividualRelationshipType() → new

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### saveRelationshipTypes(individualRelationshipTypeContracts: IndividualRelationshipTypeContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationshipTypeContracts | IndividualRelationshipTypeContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: individualRelationshipTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualRelationshipTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


