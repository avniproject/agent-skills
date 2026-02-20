# API Reference: SubjectAssignmentSearchQueryBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/search/SubjectAssignmentSearchQueryBuilder.java`

---

## Functions

### build() → SqlQuery

**Returns**: `SqlQuery`



### withSubjectSearchFilter(request: SubjectSearchRequest) → SubjectAssignmentSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | SubjectSearchRequest | - | - |

**Returns**: `SubjectAssignmentSearchQueryBuilder`



### withSubjectTypeFilter(subjectTypeUUID: String) → SubjectAssignmentSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `SubjectAssignmentSearchQueryBuilder`



### withSyncAttributes(subjectTypeUUID: String) → SubjectAssignmentSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `SubjectAssignmentSearchQueryBuilder`



### programFilter(programUUIDs: List<String>) → SubjectAssignmentSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUUIDs | List<String> | - | - |

**Returns**: `SubjectAssignmentSearchQueryBuilder`



### in(unknown: :programUuids) → uuid

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :programUuids | - | - |

**Returns**: `uuid`



### createdOnFilter(createdOn: DateTime) → SubjectAssignmentSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createdOn | DateTime | - | - |

**Returns**: `SubjectAssignmentSearchQueryBuilder`



### DateTime() → new

**Returns**: `new`



### cast(as: :createdOn) → between

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| as | :createdOn | - | - |

**Returns**: `between`



### cast(as: :today) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| as | :today | - | - |

**Returns**: `and`



### assignedToFilter(userUUID: String) → SubjectAssignmentSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userUUID | String | - | - |

**Returns**: `SubjectAssignmentSearchQueryBuilder`



### userGroupFilter(groupUUID: String, userUUID: String) → SubjectAssignmentSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupUUID | String | - | - |
| userUUID | String | - | - |

**Returns**: `SubjectAssignmentSearchQueryBuilder`



### getSQLResultQuery(searchRequest: SubjectSearchRequest, subjectType: SubjectType) → SqlQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | SubjectSearchRequest | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `SqlQuery`



### getSQLCountQuery(searchRequest: SubjectSearchRequest, subjectType: SubjectType) → SqlQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | SubjectSearchRequest | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `SqlQuery`


