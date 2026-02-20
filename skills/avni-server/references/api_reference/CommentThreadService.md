# API Reference: CommentThreadService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/CommentThreadService.java`

---

## Functions

### CommentThreadService(commentThreadRepository: CommentThreadRepository, individualRepository: IndividualRepository, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentThreadRepository | CommentThreadRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`



### createNewThread(threadContract: CommentThreadContract) → CommentThread

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| threadContract | CommentThreadContract | - | - |

**Returns**: `CommentThread`



### CommentThread() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### Comment() → new

**Returns**: `new`



### resolveThread(commentThread: CommentThread) → CommentThread

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentThread | CommentThread | - | - |

**Returns**: `CommentThread`



### DateTime() → new

**Returns**: `new`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, subjectTypeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| subjectTypeUUID | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<CommentThread>

**Returns**: `OperatingIndividualScopeAwareRepository<CommentThread>`


