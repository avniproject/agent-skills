# API Reference: IndividualRelationController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/IndividualRelationController.java`

---

## Classes

### IndividualRelationController

**Inherits from**: (none)

#### Methods

##### IndividualRelationController(individualRelationRepository: IndividualRelationRepository, individualRelationService: IndividualRelationService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationRepository | IndividualRelationRepository | - | - |
| individualRelationService | IndividualRelationService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### getAllIndividualRelations() → List<IndividualRelationContract>

**Returns**: `List<IndividualRelationContract>`


##### getIndividualRelation(Long: @PathVariable) → ResponseEntity<IndividualRelationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `ResponseEntity<IndividualRelationContract>`


##### newIndividualRelation(IndividualRelationContract: @RequestBody) → ResponseEntity<IndividualRelationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IndividualRelationContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<IndividualRelationContract>`


##### saveIndividualRelation(Long: @PathVariable, IndividualRelationContract: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |
| IndividualRelationContract | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### deleteIndividualRelation(Long: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `void`




## Functions

### IndividualRelationController(individualRelationRepository: IndividualRelationRepository, individualRelationService: IndividualRelationService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationRepository | IndividualRelationRepository | - | - |
| individualRelationService | IndividualRelationService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getAllIndividualRelations() → List<IndividualRelationContract>

**Returns**: `List<IndividualRelationContract>`



### getIndividualRelation(Long: @PathVariable) → ResponseEntity<IndividualRelationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `ResponseEntity<IndividualRelationContract>`



### newIndividualRelation(IndividualRelationContract: @RequestBody) → ResponseEntity<IndividualRelationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IndividualRelationContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<IndividualRelationContract>`



### saveIndividualRelation(Long: @PathVariable, IndividualRelationContract: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |
| IndividualRelationContract | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### deleteIndividualRelation(Long: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `void`


