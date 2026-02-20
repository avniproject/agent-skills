# API Reference: TaskController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/task/TaskController.java`

---

## Functions

### TaskController(taskRepository: TaskRepository, taskService: TaskService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskRepository | TaskRepository | - | - |
| taskService | TaskService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### wrap(unknown: taskRepository.findByAssignedToAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskRepository.findByAssignedToAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### wrap(unknown: taskRepository.findSliceByAssignedToAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | taskRepository.findSliceByAssignedToAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### save(TaskRequest: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| TaskRequest | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: savedTask) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | savedTask | - | - |

**Returns**: `new`



### process(resource: EntityModel<Task>) → EntityModel<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<Task> | - | - |

**Returns**: `EntityModel<Task>`


