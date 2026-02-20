# API Reference: CommentThreadResponse.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/response/CommentThreadResponse.java`

---

## Classes

### CommentThreadResponse

**Inherits from**: CHSRequest

#### Methods

##### fromEntity(commentThread: CommentThread) → CommentThreadResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentThread | CommentThread | - | - |

**Returns**: `CommentThreadResponse`


##### CommentThreadResponse() → new

**Returns**: `new`


##### getStatus() → String

**Returns**: `String`


##### setStatus(status: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | String | - | - |

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




## Functions

### fromEntity(commentThread: CommentThread) → CommentThreadResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentThread | CommentThread | - | - |

**Returns**: `CommentThreadResponse`



### CommentThreadResponse() → new

**Returns**: `new`



### getStatus() → String

**Returns**: `String`



### setStatus(status: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | String | - | - |

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


