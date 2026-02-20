# API Reference: IndividualRelationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/IndividualRelationService.java`

---

## Classes

### IndividualRelationService

**Inherits from**: NonScopeAwareService

#### Methods

##### IndividualRelationService(individualRelationRepository: IndividualRelationRepository, genderMappingRepository: IndividualRelationGenderMappingRepository, genderRepository: GenderRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationRepository | IndividualRelationRepository | - | - |
| genderMappingRepository | IndividualRelationGenderMappingRepository | - | - |
| genderRepository | GenderRepository | - | - |

**Returns**: `public`


##### getAll() → List<IndividualRelationContract>

**Returns**: `List<IndividualRelationContract>`


##### saveRelation(individualRelationContract: IndividualRelationContract) → IndividualRelation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationContract | IndividualRelationContract | - | - |

**Returns**: `IndividualRelation`


##### uploadRelation(individualRelationContract: IndividualRelationContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationContract | IndividualRelationContract | - | - |

**Returns**: `void`


##### IndividualRelation() → new

**Returns**: `new`


##### toResponseObject(relation: IndividualRelation) → IndividualRelationContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relation | IndividualRelation | - | - |

**Returns**: `IndividualRelationContract`


##### IndividualRelationContract(unknown: relation.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | relation.getId( | - | - |

**Returns**: `new`


##### getGenders(relation: IndividualRelation) → List<GenderContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relation | IndividualRelation | - | - |

**Returns**: `List<GenderContract>`


##### GenderContract(unknown: genderMapping.getGender() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | genderMapping.getGender( | - | - |

**Returns**: `new`


##### saveGenderMappings(individualRelationContract: IndividualRelationContract, relation: IndividualRelation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationContract | IndividualRelationContract | - | - |
| relation | IndividualRelation | - | - |

**Returns**: `void`


##### IndividualRelationGenderMapping(unknown: relation, unknown: genderRepository.findByName(genderContract.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | relation | - | - |
| unknown | genderRepository.findByName(genderContract.getName( | - | - |

**Returns**: `new`


##### createRelation(name: String) → IndividualRelation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `IndividualRelation`


##### IndividualRelation() → new

**Returns**: `new`


##### assertNoExistingRelation(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### BadRequestError(%s: String.format("Relation, unknown: name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Relation | - | - |
| unknown | name | - | - |

**Returns**: `new`


##### deleteRelation(id: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `void`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### saveRelations(individualRelationContracts: IndividualRelationContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationContracts | IndividualRelationContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: individualRelationContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualRelationContract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### IndividualRelationService(individualRelationRepository: IndividualRelationRepository, genderMappingRepository: IndividualRelationGenderMappingRepository, genderRepository: GenderRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationRepository | IndividualRelationRepository | - | - |
| genderMappingRepository | IndividualRelationGenderMappingRepository | - | - |
| genderRepository | GenderRepository | - | - |

**Returns**: `public`



### getAll() → List<IndividualRelationContract>

**Returns**: `List<IndividualRelationContract>`



### saveRelation(individualRelationContract: IndividualRelationContract) → IndividualRelation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationContract | IndividualRelationContract | - | - |

**Returns**: `IndividualRelation`



### uploadRelation(individualRelationContract: IndividualRelationContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationContract | IndividualRelationContract | - | - |

**Returns**: `void`



### IndividualRelation() → new

**Returns**: `new`



### toResponseObject(relation: IndividualRelation) → IndividualRelationContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relation | IndividualRelation | - | - |

**Returns**: `IndividualRelationContract`



### IndividualRelationContract(unknown: relation.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | relation.getId( | - | - |

**Returns**: `new`



### getGenders(relation: IndividualRelation) → List<GenderContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relation | IndividualRelation | - | - |

**Returns**: `List<GenderContract>`



### GenderContract(unknown: genderMapping.getGender() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | genderMapping.getGender( | - | - |

**Returns**: `new`



### saveGenderMappings(individualRelationContract: IndividualRelationContract, relation: IndividualRelation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationContract | IndividualRelationContract | - | - |
| relation | IndividualRelation | - | - |

**Returns**: `void`



### IndividualRelationGenderMapping(unknown: relation, unknown: genderRepository.findByName(genderContract.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | relation | - | - |
| unknown | genderRepository.findByName(genderContract.getName( | - | - |

**Returns**: `new`



### createRelation(name: String) → IndividualRelation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `IndividualRelation`



### IndividualRelation() → new

**Returns**: `new`



### assertNoExistingRelation(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### BadRequestError(%s: String.format("Relation, unknown: name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Relation | - | - |
| unknown | name | - | - |

**Returns**: `new`



### deleteRelation(id: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `void`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### saveRelations(individualRelationContracts: IndividualRelationContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationContracts | IndividualRelationContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: individualRelationContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualRelationContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


