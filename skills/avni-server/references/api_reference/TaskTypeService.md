# API Reference: TaskTypeService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/TaskTypeService.java`

---

## Classes

### TaskTypeService

**Inherits from**: NonScopeAwareService

#### Methods

##### TaskTypeService(taskTypeRepository: TaskTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskTypeRepository | TaskTypeRepository | - | - |

**Returns**: `public`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getAll() → List<TaskTypeContract>

**Returns**: `List<TaskTypeContract>`


##### saveTaskType(request: TaskTypeContract) → TaskType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TaskTypeContract | - | - |

**Returns**: `TaskType`


##### TaskType() → new

**Returns**: `new`


##### saveTaskTypes(taskTypeContracts: TaskTypeContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskTypeContracts | TaskTypeContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: taskTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### TaskTypeService(taskTypeRepository: TaskTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskTypeRepository | TaskTypeRepository | - | - |

**Returns**: `public`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getAll() → List<TaskTypeContract>

**Returns**: `List<TaskTypeContract>`



### saveTaskType(request: TaskTypeContract) → TaskType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | TaskTypeContract | - | - |

**Returns**: `TaskType`



### TaskType() → new

**Returns**: `new`



### saveTaskTypes(taskTypeContracts: TaskTypeContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskTypeContracts | TaskTypeContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: taskTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


