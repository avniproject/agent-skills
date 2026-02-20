# API Reference: TaskUnAssignmentRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/task/TaskUnAssignmentRepository.java`

---

## Functions

### findByUnassignedUserAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user: User, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Page<TaskUnAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<TaskUnAssignment>`



### findSliceByUnassignedUserAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user: User, lastModifiedDateTime: Date, now: Date, pageable: Pageable) → Slice<TaskUnAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Slice<TaskUnAssignment>`



### existsByUnassignedUserAndLastModifiedDateTimeGreaterThan(user: User, lastModifiedDateTime: Date) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDateTime | Date | - | - |

**Returns**: `boolean`


