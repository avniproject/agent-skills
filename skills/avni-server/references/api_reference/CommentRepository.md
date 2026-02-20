# API Reference: CommentRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/CommentRepository.java`

---

## Functions

### findByIsVoidedFalseAndCommentThreadIdOrderByLastModifiedDateTimeAscIdAsc(threadId: Long) → List<Comment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| threadId | Long | - | - |

**Returns**: `List<Comment>`



### syncStrategySpecification(syncParameters: SyncParameters) → Specification<Comment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification<Comment>`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### count(unknown: syncEntityChangedAuditSpecification(syncParameters) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncEntityChangedAuditSpecification(syncParameters | - | - |

**Returns**: `return`



### voidSubjectItemsAt(addressId: Long, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressId | Long | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### voidSubjectItemsAt(address: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| address | AddressLevel | - | - |

**Returns**: `void`


