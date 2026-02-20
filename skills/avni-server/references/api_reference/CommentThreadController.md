# API Reference: CommentThreadController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/CommentThreadController.java`

---

## Functions

### CommentThreadController(commentThreadRepository: CommentThreadRepository, subjectTypeRepository: SubjectTypeRepository, userService: UserService, individualRepository: IndividualRepository, commentThreadService: CommentThreadService, scopeBasedSyncService: ScopeBasedSyncService<CommentThread>, txDataControllerHelper: TxDataControllerHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentThreadRepository | CommentThreadRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| userService | UserService | - | - |
| individualRepository | IndividualRepository | - | - |
| commentThreadService | CommentThreadService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<CommentThread> | - | - |
| txDataControllerHelper | TxDataControllerHelper | - | - |

**Returns**: `public`



### wrap(SliceImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(commentThreadRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(commentThreadRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(commentThreadRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(commentThreadRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### save(CommentThreadContract: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| CommentThreadContract | @RequestBody | - | - |

**Returns**: `void`



### CommentThread() → new

**Returns**: `new`



### getAllThreads(=: @RequestParam(value) → List<CommentThreadResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |

**Returns**: `List<CommentThreadResponse>`


