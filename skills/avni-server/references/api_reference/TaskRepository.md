# API Reference: TaskRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/task/TaskRepository.java`

---

## Functions

### findByAssignedToAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user: User, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Task>`



### findSliceByAssignedToAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user: User, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Slice<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Slice<Task>`



### existsByAssignedToAndLastModifiedDateTimeGreaterThan(user: User, lastModifiedDateTime: Date) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDateTime | Date | - | - |

**Returns**: `boolean`



### search(searchCriteria: TaskSearchCriteria, isUnassigned: boolean, pageable: Pageable) → Page<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchCriteria | TaskSearchCriteria | - | - |
| isUnassigned | boolean | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Task>`



### DateTime() → new

**Returns**: `new`



### findAll(unknown: spec, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | spec | - | - |
| unknown | pageable | - | - |

**Returns**: `return`



### findAllByIdIn(id: List<Long>) → List<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | List<Long> | - | - |

**Returns**: `List<Task>`



### findByLegacyId(id: String) → Task

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `Task`



### findByTaskTypeSpec(taskType: String) → Specification<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskType | String | - | - |

**Returns**: `Specification<Task>`



### findByTaskStatusIsTerminal(isCurrentStatusTerminal: boolean) → Specification<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isCurrentStatusTerminal | boolean | - | - |

**Returns**: `Specification<Task>`



### findByTaskTypeMetadataAndTaskStatus(taskType: String, isTerminalStatus: boolean, unknown: Map<Concept, concepts: String>, pageable: Pageable) → Page<Task>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskType | String | - | - |
| isTerminalStatus | boolean | - | - |
| unknown | Map<Concept | - | - |
| concepts | String> | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<Task>`



### findAll(unknown: withConceptValues(concepts, unknown: "metadata") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | withConceptValues(concepts | - | - |
| unknown | "metadata" | - | - |

**Returns**: `return`


