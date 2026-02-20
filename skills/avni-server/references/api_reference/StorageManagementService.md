# API Reference: StorageManagementService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/StorageManagementService.java`

---

## Classes

### StorageManagementService

**Inherits from**: (none)

#### Methods

##### StorageManagementService(jdbcTemplate: JdbcTemplate, entityManager: EntityManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| entityManager | EntityManager | - | - |

**Returns**: `public`


##### markSyncDisabled(subjectIds: List<Long>, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### getNextSubjectIds(storageManagementConfig: StorageManagementConfig) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| storageManagementConfig | StorageManagementConfig | - | - |

**Returns**: `List<Long>`


##### join(unknown: %s) → ind

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `ind`


##### updateSubjects(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`


##### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### getAsInQueryParam(subjectIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `String`


##### updateSubjectLinkedUpdateQuery(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`


##### updateSubjectLinkedTable(subjectIds: List<Long>, descendantTable: String, columnName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |
| descendantTable | String | - | - |
| columnName | String | - | - |

**Returns**: `void`


##### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### updateCommentThread(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`


##### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### updateChecklistItem(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`


##### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### updateChecklist(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`


##### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### updateIndividualRelationship(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`


##### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### WHERE(=: individual_relationship.individual_a_id) → subject_ids

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | individual_relationship.individual_a_id | - | - |

**Returns**: `subject_ids`


##### updateGroupSubject(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`


##### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### WHERE(=: group_subject.group_subject_id) → subject_ids

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | group_subject.group_subject_id | - | - |

**Returns**: `subject_ids`




## Functions

### StorageManagementService(jdbcTemplate: JdbcTemplate, entityManager: EntityManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| entityManager | EntityManager | - | - |

**Returns**: `public`



### markSyncDisabled(subjectIds: List<Long>, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### getNextSubjectIds(storageManagementConfig: StorageManagementConfig) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| storageManagementConfig | StorageManagementConfig | - | - |

**Returns**: `List<Long>`



### join(unknown: %s) → ind

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `ind`



### updateSubjects(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`



### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### getAsInQueryParam(subjectIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `String`



### updateSubjectLinkedUpdateQuery(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`



### updateSubjectLinkedTable(subjectIds: List<Long>, descendantTable: String, columnName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |
| descendantTable | String | - | - |
| columnName | String | - | - |

**Returns**: `void`



### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### updateCommentThread(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`



### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### updateChecklistItem(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`



### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### updateChecklist(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`



### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### updateIndividualRelationship(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`



### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### WHERE(=: individual_relationship.individual_a_id) → subject_ids

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | individual_relationship.individual_a_id | - | - |

**Returns**: `subject_ids`



### updateGroupSubject(subjectIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |

**Returns**: `void`



### IN(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### WHERE(=: group_subject.group_subject_id) → subject_ids

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | group_subject.group_subject_id | - | - |

**Returns**: `subject_ids`


