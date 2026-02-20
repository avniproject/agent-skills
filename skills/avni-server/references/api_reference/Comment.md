# API Reference: Comment.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/Comment.java`

---

## Classes

### Comment

**Inherits from**: OrganisationAwareEntity, SubjectLinkedSyncEntity

#### Methods

##### getText() → String

**Returns**: `String`


##### setText(text: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | String | - | - |

**Returns**: `void`


##### getSubject() → Individual

**Returns**: `Individual`


##### setSubject(subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |

**Returns**: `void`


##### getSubjectUUID() → String

**Returns**: `String`


##### getCommentThread() → CommentThread

**Returns**: `CommentThread`


##### setCommentThread(commentThread: CommentThread) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentThread | CommentThread | - | - |

**Returns**: `void`


##### getDisplayUsername() → String

**Returns**: `String`


##### getCommentThreadUUID() → String

**Returns**: `String`


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

### getText() → String

**Returns**: `String`



### setText(text: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | String | - | - |

**Returns**: `void`



### getSubject() → Individual

**Returns**: `Individual`



### setSubject(subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |

**Returns**: `void`



### getSubjectUUID() → String

**Returns**: `String`



### getCommentThread() → CommentThread

**Returns**: `CommentThread`



### setCommentThread(commentThread: CommentThread) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentThread | CommentThread | - | - |

**Returns**: `void`



### getDisplayUsername() → String

**Returns**: `String`



### getCommentThreadUUID() → String

**Returns**: `String`



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


