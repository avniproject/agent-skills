# API Reference: TaskTypeWebController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/task/TaskTypeWebController.java`

---

## Classes

### TaskTypeWebController

**Inherits from**: (none)

#### Methods

##### TaskTypeWebController(taskTypeService: TaskTypeService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskTypeService | TaskTypeService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### post(List<TaskTypeContract>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<TaskTypeContract> | @RequestBody | - | - |

**Returns**: `void`


##### post(TaskTypeContract: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| TaskTypeContract | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`


##### AvniEntityResponse(unknown: taskTypeService.saveTaskType(request) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskTypeService.saveTaskType(request | - | - |

**Returns**: `new`




## Functions

### TaskTypeWebController(taskTypeService: TaskTypeService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskTypeService | TaskTypeService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### post(List<TaskTypeContract>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<TaskTypeContract> | @RequestBody | - | - |

**Returns**: `void`



### post(TaskTypeContract: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| TaskTypeContract | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: taskTypeService.saveTaskType(request) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskTypeService.saveTaskType(request | - | - |

**Returns**: `new`


