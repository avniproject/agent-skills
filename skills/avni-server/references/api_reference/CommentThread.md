# API Reference: CommentThread.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/CommentThread.java`

---

## Classes

### CommentThread

**Inherits from**: OrganisationAwareEntity, SubjectLinkedSyncEntity

#### Methods

##### getStatus() → CommentThreadStatus

**Returns**: `CommentThreadStatus`


##### setStatus(status: CommentThreadStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | CommentThreadStatus | - | - |

**Returns**: `void`


##### getOpenDateTime() → DateTime

**Returns**: `DateTime`


##### setOpenDateTime(openDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| openDateTime | DateTime | - | - |

**Returns**: `void`


##### getResolvedDateTime() → DateTime

**Returns**: `DateTime`


##### setResolvedDateTime(resolvedDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resolvedDateTime | DateTime | - | - |

**Returns**: `void`


##### getComments() → Set<Comment>

**Returns**: `Set<Comment>`


##### setComments(comments: Set<Comment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| comments | Set<Comment> | - | - |

**Returns**: `void`


##### getNonVoidedComments() → Set<Comment>

**Returns**: `Set<Comment>`


##### isSyncDisabled() → boolean

**Returns**: `boolean`


##### setSyncDisabledDateTime(syncDisabledDateTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabledDateTime | Date | - | - |

**Returns**: `void`


##### setSyncDisabled(syncDisabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `void`


##### getSyncDisabledDateTime() → Date

**Returns**: `Date`


##### beforeSave() → void

**Returns**: `void`


##### beforeUpdate() → void

**Returns**: `void`




## Functions

### getStatus() → CommentThreadStatus

**Returns**: `CommentThreadStatus`



### setStatus(status: CommentThreadStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | CommentThreadStatus | - | - |

**Returns**: `void`



### getOpenDateTime() → DateTime

**Returns**: `DateTime`



### setOpenDateTime(openDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| openDateTime | DateTime | - | - |

**Returns**: `void`



### getResolvedDateTime() → DateTime

**Returns**: `DateTime`



### setResolvedDateTime(resolvedDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resolvedDateTime | DateTime | - | - |

**Returns**: `void`



### getComments() → Set<Comment>

**Returns**: `Set<Comment>`



### setComments(comments: Set<Comment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| comments | Set<Comment> | - | - |

**Returns**: `void`



### getNonVoidedComments() → Set<Comment>

**Returns**: `Set<Comment>`



### isSyncDisabled() → boolean

**Returns**: `boolean`



### setSyncDisabledDateTime(syncDisabledDateTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabledDateTime | Date | - | - |

**Returns**: `void`



### setSyncDisabled(syncDisabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `void`



### getSyncDisabledDateTime() → Date

**Returns**: `Date`



### beforeSave() → void

**Returns**: `void`



### beforeUpdate() → void

**Returns**: `void`


