# API Reference: TaskSearchCriteria.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/task/TaskSearchCriteria.java`

---

## Classes

### TaskSearchCriteria

**Inherits from**: (none)

#### Methods

##### getTaskType() → TaskType

**Returns**: `TaskType`


##### setTaskType(taskType: TaskType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskType | TaskType | - | - |

**Returns**: `void`


##### getTaskStatus() → TaskStatus

**Returns**: `TaskStatus`


##### setTaskStatus(taskStatus: TaskStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskStatus | TaskStatus | - | - |

**Returns**: `void`


##### getAssignedTo() → User

**Returns**: `User`


##### setAssignedTo(assignedTo: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignedTo | User | - | - |

**Returns**: `void`


##### addMetadata(concept: Concept, value: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| value | Object | - | - |

**Returns**: `void`


##### getMetadata() → Map<Concept, Object>

**Returns**: `Map<Concept, Object>`


##### getCompletedOn() → DateTime

**Returns**: `DateTime`


##### setCompletedOn(completedOn: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| completedOn | DateTime | - | - |

**Returns**: `void`


##### getCreatedOn() → DateTime

**Returns**: `DateTime`


##### setCreatedOn(createdOn: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createdOn | DateTime | - | - |

**Returns**: `void`


##### getScheduledOn() → DateTime

**Returns**: `DateTime`


##### setScheduledOn(scheduledOn: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduledOn | DateTime | - | - |

**Returns**: `void`


##### getFormattedCreatedOn() → String

**Returns**: `String`


##### getFormattedScheduledOn() → String

**Returns**: `String`


##### getFormattedCompletedOn() → String

**Returns**: `String`




## Functions

### getTaskType() → TaskType

**Returns**: `TaskType`



### setTaskType(taskType: TaskType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskType | TaskType | - | - |

**Returns**: `void`



### getTaskStatus() → TaskStatus

**Returns**: `TaskStatus`



### setTaskStatus(taskStatus: TaskStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskStatus | TaskStatus | - | - |

**Returns**: `void`



### getAssignedTo() → User

**Returns**: `User`



### setAssignedTo(assignedTo: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignedTo | User | - | - |

**Returns**: `void`



### addMetadata(concept: Concept, value: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| value | Object | - | - |

**Returns**: `void`



### getMetadata() → Map<Concept, Object>

**Returns**: `Map<Concept, Object>`



### getCompletedOn() → DateTime

**Returns**: `DateTime`



### setCompletedOn(completedOn: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| completedOn | DateTime | - | - |

**Returns**: `void`



### getCreatedOn() → DateTime

**Returns**: `DateTime`



### setCreatedOn(createdOn: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createdOn | DateTime | - | - |

**Returns**: `void`



### getScheduledOn() → DateTime

**Returns**: `DateTime`



### setScheduledOn(scheduledOn: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduledOn | DateTime | - | - |

**Returns**: `void`



### getFormattedCreatedOn() → String

**Returns**: `String`



### getFormattedScheduledOn() → String

**Returns**: `String`



### getFormattedCompletedOn() → String

**Returns**: `String`


