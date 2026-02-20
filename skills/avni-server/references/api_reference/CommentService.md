# API Reference: CommentService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/CommentService.java`

---

## Functions

### CommentService(commentRepository: CommentRepository, individualRepository: IndividualRepository, commentThreadRepository: CommentThreadRepository, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentRepository | CommentRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| commentThreadRepository | CommentThreadRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`



### saveComment(commentContract: CommentContract) → Comment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentContract | CommentContract | - | - |

**Returns**: `Comment`



### Comment() → new

**Returns**: `new`



### editComment(commentContract: CommentContract, existingComment: Comment) → Comment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentContract | CommentContract | - | - |
| existingComment | Comment | - | - |

**Returns**: `Comment`



### buildComment(commentContract: CommentContract, comment: Comment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentContract | CommentContract | - | - |
| comment | Comment | - | - |

**Returns**: `void`



### deleteComment(comment: Comment) → Comment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| comment | Comment | - | - |

**Returns**: `Comment`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, subjectTypeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| subjectTypeUUID | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<Comment>

**Returns**: `OperatingIndividualScopeAwareRepository<Comment>`


