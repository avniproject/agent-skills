# API Reference: UserSubjectAssignmentRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/UserSubjectAssignmentRepository.java`

---

## Functions

### findByUserAndSubjectAndIsVoidedFalse(user: User, subject: Individual) → UserSubjectAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `UserSubjectAssignment`



### findByUserAndSubject(user: User, subject: Individual) → UserSubjectAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `UserSubjectAssignment`



### findAllBySubjectAndIsVoidedFalse(subject: Individual) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |

**Returns**: `List<UserSubjectAssignment>`



### findAllBySubject(subject: Individual) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |

**Returns**: `List<UserSubjectAssignment>`



### findUserSubjectAssignmentBySubject_IdIn(subjectIds: List<Long>) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `List<UserSubjectAssignment>`



### existsByUserAndIsVoidedTrueAndLastModifiedDateTimeGreaterThan(user: User, lastModifiedDateTime: Date) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDateTime | Date | - | - |

**Returns**: `boolean`



### findByUserAndIsVoidedTrueAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user: User, lastModifiedDate: Date, now: Date, pageable: Pageable) → Page<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDate | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<UserSubjectAssignment>`



### findSliceByUserAndIsVoidedTrueAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user: User, lastModifiedDate: Date, now: Date, pageable: Pageable) → Slice<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDate | Date | - | - |
| now | Date | - | - |
| pageable | Pageable | - | - |

**Returns**: `Slice<UserSubjectAssignment>`



### findByName(name: String) → UserSubjectAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `UserSubjectAssignment`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → UserSubjectAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `UserSubjectAssignment`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByOrganisationId(organisationId: Long) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `List<UserSubjectAssignment>`


