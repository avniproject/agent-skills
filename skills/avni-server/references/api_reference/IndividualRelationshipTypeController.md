# API Reference: IndividualRelationshipTypeController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/IndividualRelationshipTypeController.java`

---

## Classes

### IndividualRelationshipTypeController

**Inherits from**: (none)

#### Methods

##### IndividualRelationshipTypeController(individualRelationshipTypeRepository: IndividualRelationshipTypeRepository, individualRelationshipTypeService: IndividualRelationshipTypeService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationshipTypeRepository | IndividualRelationshipTypeRepository | - | - |
| individualRelationshipTypeService | IndividualRelationshipTypeService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### getAllIndividualRelationshipTypes() → List<IndividualRelationshipTypeContract>

**Returns**: `List<IndividualRelationshipTypeContract>`


##### newRelationshipType(IndividualRelationshipTypeContract: @RequestBody) → ResponseEntity<IndividualRelationshipTypeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IndividualRelationshipTypeContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<IndividualRelationshipTypeContract>`


##### deleteIndividualRelationshipType(Long: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `void`




## Functions

### IndividualRelationshipTypeController(individualRelationshipTypeRepository: IndividualRelationshipTypeRepository, individualRelationshipTypeService: IndividualRelationshipTypeService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationshipTypeRepository | IndividualRelationshipTypeRepository | - | - |
| individualRelationshipTypeService | IndividualRelationshipTypeService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getAllIndividualRelationshipTypes() → List<IndividualRelationshipTypeContract>

**Returns**: `List<IndividualRelationshipTypeContract>`



### newRelationshipType(IndividualRelationshipTypeContract: @RequestBody) → ResponseEntity<IndividualRelationshipTypeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IndividualRelationshipTypeContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<IndividualRelationshipTypeContract>`



### deleteIndividualRelationshipType(Long: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `void`


