# API Reference: TaskService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/TaskService.java`

---

## Classes

### TaskService

**Inherits from**: NonScopeAwareService

#### Methods

##### TaskService(taskRepository: TaskRepository, observationService: ObservationService, taskTypeRepository: TaskTypeRepository, taskStatusRepository: TaskStatusRepository, individualRepository: IndividualRepository, userRepository: UserRepository, conceptRepository: ConceptRepository, conceptService: ConceptService, taskUnAssigmentService: TaskUnAssigmentService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskRepository | TaskRepository | - | - |
| observationService | ObservationService | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| taskStatusRepository | TaskStatusRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| userRepository | UserRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| taskUnAssigmentService | TaskUnAssigmentService | - | - |

**Returns**: `public`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### save(taskRequest: TaskRequest) → Task

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskRequest | TaskRequest | - | - |

**Returns**: `Task`


##### Task() → new

**Returns**: `new`


##### searchTaskByCriteria(TaskFilterCriteria: @RequestBody, pageable: Pageable) → Page<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| TaskFilterCriteria | @RequestBody | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Task>`


##### TaskSearchCriteria() → new

**Returns**: `new`


##### getTaskMetaData() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### assignTask(taskAssignmentRequest: TaskAssignmentRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskAssignmentRequest | TaskAssignmentRequest | - | - |

**Returns**: `void`


##### assignmentForSelectedAll(taskAssignmentRequest: TaskAssignmentRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskAssignmentRequest | TaskAssignmentRequest | - | - |

**Returns**: `void`


##### assignmentForSelectedTaskIds(taskAssignmentRequest: TaskAssignmentRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskAssignmentRequest | TaskAssignmentRequest | - | - |

**Returns**: `void`


##### performAssignment(users: List<User>, tasksToUpdate: List<Task>, taskAssignmentRequest: TaskAssignmentRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| users | List<User> | - | - |
| tasksToUpdate | List<Task> | - | - |
| taskAssignmentRequest | TaskAssignmentRequest | - | - |

**Returns**: `void`


##### IllegalArgumentException(cannot: "Users) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannot | "Users | - | - |

**Returns**: `new`


##### assignTasksEquallyToUsersAndUpdateStatus(userList: List<User>, tasksToUpdate: List<Task>, taskStatus: TaskStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userList | List<User> | - | - |
| tasksToUpdate | List<Task> | - | - |
| taskStatus | TaskStatus | - | - |

**Returns**: `void`


##### populateTaskUnAssignment(olderUser: User, newUser: User, task: Task) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| olderUser | User | - | - |
| newUser | User | - | - |
| task | Task | - | - |

**Returns**: `void`




## Functions

### TaskService(taskRepository: TaskRepository, observationService: ObservationService, taskTypeRepository: TaskTypeRepository, taskStatusRepository: TaskStatusRepository, individualRepository: IndividualRepository, userRepository: UserRepository, conceptRepository: ConceptRepository, conceptService: ConceptService, taskUnAssigmentService: TaskUnAssigmentService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskRepository | TaskRepository | - | - |
| observationService | ObservationService | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| taskStatusRepository | TaskStatusRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| userRepository | UserRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptService | ConceptService | - | - |
| taskUnAssigmentService | TaskUnAssigmentService | - | - |

**Returns**: `public`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### save(taskRequest: TaskRequest) → Task

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskRequest | TaskRequest | - | - |

**Returns**: `Task`



### Task() → new

**Returns**: `new`



### searchTaskByCriteria(TaskFilterCriteria: @RequestBody, pageable: Pageable) → Page<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| TaskFilterCriteria | @RequestBody | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Task>`



### TaskSearchCriteria() → new

**Returns**: `new`



### getTaskMetaData() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### assignTask(taskAssignmentRequest: TaskAssignmentRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskAssignmentRequest | TaskAssignmentRequest | - | - |

**Returns**: `void`



### assignmentForSelectedAll(taskAssignmentRequest: TaskAssignmentRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskAssignmentRequest | TaskAssignmentRequest | - | - |

**Returns**: `void`



### assignmentForSelectedTaskIds(taskAssignmentRequest: TaskAssignmentRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskAssignmentRequest | TaskAssignmentRequest | - | - |

**Returns**: `void`



### performAssignment(users: List<User>, tasksToUpdate: List<Task>, taskAssignmentRequest: TaskAssignmentRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| users | List<User> | - | - |
| tasksToUpdate | List<Task> | - | - |
| taskAssignmentRequest | TaskAssignmentRequest | - | - |

**Returns**: `void`



### IllegalArgumentException(cannot: "Users) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannot | "Users | - | - |

**Returns**: `new`



### assignTasksEquallyToUsersAndUpdateStatus(userList: List<User>, tasksToUpdate: List<Task>, taskStatus: TaskStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userList | List<User> | - | - |
| tasksToUpdate | List<Task> | - | - |
| taskStatus | TaskStatus | - | - |

**Returns**: `void`



### populateTaskUnAssignment(olderUser: User, newUser: User, task: Task) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| olderUser | User | - | - |
| newUser | User | - | - |
| task | Task | - | - |

**Returns**: `void`


