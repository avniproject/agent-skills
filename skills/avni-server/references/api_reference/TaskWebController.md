# API Reference: TaskWebController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/task/TaskWebController.java`

---

## Classes

### TaskWebController

**Inherits from**: (none)

#### Methods

##### TaskWebController(conceptRepository: ConceptRepository, conceptService: ConceptService, taskService: TaskService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| taskService | TaskService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### getTasks(TaskFilterCriteria: @RequestBody, pageable: Pageable) → Page<TaskSearchResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| TaskFilterCriteria | @RequestBody | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<TaskSearchResponse>`


##### getTaskMetadataForSearch() → JsonObject

**Returns**: `JsonObject`


##### taskAssignment(TaskAssignmentRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| TaskAssignmentRequest | @RequestBody | - | - |

**Returns**: `void`




## Functions

### TaskWebController(conceptRepository: ConceptRepository, conceptService: ConceptService, taskService: TaskService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| taskService | TaskService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getTasks(TaskFilterCriteria: @RequestBody, pageable: Pageable) → Page<TaskSearchResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| TaskFilterCriteria | @RequestBody | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<TaskSearchResponse>`



### getTaskMetadataForSearch() → JsonObject

**Returns**: `JsonObject`



### taskAssignment(TaskAssignmentRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| TaskAssignmentRequest | @RequestBody | - | - |

**Returns**: `void`


