# API Reference: TaskUnAssigmentService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/TaskUnAssigmentService.java`

---

## Classes

### TaskUnAssigmentService

**Inherits from**: NonScopeAwareService

#### Methods

##### TaskUnAssigmentService(taskUnAssignmentRepository: TaskUnAssignmentRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskUnAssignmentRepository | TaskUnAssignmentRepository | - | - |

**Returns**: `public`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### saveTaskUnAssignment(task: Task, user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| task | Task | - | - |
| user | User | - | - |

**Returns**: `void`


##### TaskUnAssignment() → new

**Returns**: `new`




## Functions

### TaskUnAssigmentService(taskUnAssignmentRepository: TaskUnAssignmentRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskUnAssignmentRepository | TaskUnAssignmentRepository | - | - |

**Returns**: `public`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### saveTaskUnAssignment(task: Task, user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| task | Task | - | - |
| user | User | - | - |

**Returns**: `void`



### TaskUnAssignment() → new

**Returns**: `new`


