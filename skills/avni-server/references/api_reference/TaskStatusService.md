# API Reference: TaskStatusService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/TaskStatusService.java`

---

## Classes

### TaskStatusService

**Inherits from**: NonScopeAwareService

#### Methods

##### TaskStatusService(taskStatusRepository: TaskStatusRepository, taskTypeRepository: TaskTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskStatusRepository | TaskStatusRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |

**Returns**: `public`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getAll() → List<TaskStatusContract>

**Returns**: `List<TaskStatusContract>`


##### saveTaskStatus(request: TaskStatusContract) → TaskStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TaskStatusContract | - | - |

**Returns**: `TaskStatus`


##### importTaskStatus(request: TaskStatusContract) → TaskStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TaskStatusContract | - | - |

**Returns**: `TaskStatus`


##### buildTaskStatus(request: TaskStatusContract) → TaskStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TaskStatusContract | - | - |

**Returns**: `TaskStatus`


##### TaskStatus() → new

**Returns**: `new`


##### saveTaskStatuses(taskStatusContracts: TaskStatusContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskStatusContracts | TaskStatusContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: taskStatusContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskStatusContract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### TaskStatusService(taskStatusRepository: TaskStatusRepository, taskTypeRepository: TaskTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskStatusRepository | TaskStatusRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |

**Returns**: `public`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getAll() → List<TaskStatusContract>

**Returns**: `List<TaskStatusContract>`



### saveTaskStatus(request: TaskStatusContract) → TaskStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TaskStatusContract | - | - |

**Returns**: `TaskStatus`



### importTaskStatus(request: TaskStatusContract) → TaskStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TaskStatusContract | - | - |

**Returns**: `TaskStatus`



### buildTaskStatus(request: TaskStatusContract) → TaskStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TaskStatusContract | - | - |

**Returns**: `TaskStatus`



### TaskStatus() → new

**Returns**: `new`



### saveTaskStatuses(taskStatusContracts: TaskStatusContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskStatusContracts | TaskStatusContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: taskStatusContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskStatusContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


