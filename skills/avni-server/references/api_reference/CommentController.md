# API Reference: CommentController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/CommentController.java`

---

## Functions

### CommentController(commentRepository: CommentRepository, individualRepository: IndividualRepository, commentService: CommentService, subjectTypeRepository: SubjectTypeRepository, userService: UserService, commentThreadRepository: CommentThreadRepository, scopeBasedSyncService: ScopeBasedSyncService<Comment>, txDataControllerHelper: TxDataControllerHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commentRepository | CommentRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| commentService | CommentService | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| userService | UserService | - | - |
| commentThreadRepository | CommentThreadRepository | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<Comment> | - | - |
| txDataControllerHelper | TxDataControllerHelper | - | - |

**Returns**: `public`



### getCommentsForSubject(=: @RequestParam(value) → List<Comment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |

**Returns**: `List<Comment>`



### save(CommentContract: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| CommentContract | @RequestBody | - | - |

**Returns**: `void`



### Comment() → new

**Returns**: `new`



### wrap(SliceImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(commentRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(commentRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(commentRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(commentRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### process(resource: EntityModel<Comment>) → EntityModel<Comment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<Comment> | - | - |

**Returns**: `EntityModel<Comment>`


