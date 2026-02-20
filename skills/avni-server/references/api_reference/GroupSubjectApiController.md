# API Reference: GroupSubjectApiController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/api/GroupSubjectApiController.java`

---

## Classes

### GroupSubjectApiController

**Inherits from**: (none)

#### Methods

##### GroupSubjectApiController(groupSubjectRepository: GroupSubjectRepository, conceptRepository: ConceptRepository, conceptService: ConceptService, s3Service: S3Service, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectRepository | GroupSubjectRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| s3Service | S3Service | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### getSubjects(=: @RequestParam(value, =: required) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Object`


##### ResponsePage(unknown: groupSubjectResponses, unknown: groupSubjects.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupSubjectResponses | - | - |
| unknown | groupSubjects.getNumberOfElements( | - | - |

**Returns**: `new`




## Functions

### GroupSubjectApiController(groupSubjectRepository: GroupSubjectRepository, conceptRepository: ConceptRepository, conceptService: ConceptService, s3Service: S3Service, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectRepository | GroupSubjectRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| s3Service | S3Service | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getSubjects(=: @RequestParam(value, =: required) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Object`



### ResponsePage(unknown: groupSubjectResponses, unknown: groupSubjects.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupSubjectResponses | - | - |
| unknown | groupSubjects.getNumberOfElements( | - | - |

**Returns**: `new`


