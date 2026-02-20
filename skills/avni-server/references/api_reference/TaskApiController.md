# API Reference: TaskApiController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/api/TaskApiController.java`

---

## Classes

### TaskApiController

**Inherits from**: (none)

#### Methods

##### TaskApiController(taskRepository: TaskRepository, taskTypeRepository: TaskTypeRepository, userRepository: UserRepository, taskStatusRepository: TaskStatusRepository, conceptRepository: ConceptRepository, individualRepository: IndividualRepository, conceptService: ConceptService, mediaObservationService: MediaObservationService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskRepository | TaskRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| userRepository | UserRepository | - | - |
| taskStatusRepository | TaskStatusRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| conceptService | ConceptService | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### post(ApiTaskRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiTaskRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### IllegalArgumentException(type: String.format("Task, unknown: request.getTaskTypeName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String.format("Task | - | - |
| unknown | request.getTaskTypeName( | - | - |

**Returns**: `new`


##### IllegalArgumentException(status: String.format("Task, unknown: request.getTaskStatus() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | String.format("Task | - | - |
| unknown | request.getTaskStatus( | - | - |

**Returns**: `new`


##### RuntimeException(type: "Call) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | "Call | - | - |

**Returns**: `new`


##### getTasks(=: @RequestParam(value) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |

**Returns**: `ResponsePage`


##### ResponsePage(unknown: taskResponses, unknown: tasks.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskResponses | - | - |
| unknown | tasks.getNumberOfElements( | - | - |

**Returns**: `new`


##### createTask(externalId: String) → Task

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Task`


##### Task() → new

**Returns**: `new`




## Functions

### TaskApiController(taskRepository: TaskRepository, taskTypeRepository: TaskTypeRepository, userRepository: UserRepository, taskStatusRepository: TaskStatusRepository, conceptRepository: ConceptRepository, individualRepository: IndividualRepository, conceptService: ConceptService, mediaObservationService: MediaObservationService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskRepository | TaskRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| userRepository | UserRepository | - | - |
| taskStatusRepository | TaskStatusRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| conceptService | ConceptService | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### post(ApiTaskRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiTaskRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### IllegalArgumentException(type: String.format("Task, unknown: request.getTaskTypeName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String.format("Task | - | - |
| unknown | request.getTaskTypeName( | - | - |

**Returns**: `new`



### IllegalArgumentException(status: String.format("Task, unknown: request.getTaskStatus() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | String.format("Task | - | - |
| unknown | request.getTaskStatus( | - | - |

**Returns**: `new`



### RuntimeException(type: "Call) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | "Call | - | - |

**Returns**: `new`



### getTasks(=: @RequestParam(value) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |

**Returns**: `ResponsePage`



### ResponsePage(unknown: taskResponses, unknown: tasks.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskResponses | - | - |
| unknown | tasks.getNumberOfElements( | - | - |

**Returns**: `new`



### createTask(externalId: String) → Task

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Task`



### Task() → new

**Returns**: `new`


