# API Reference: GroupSubjectController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/GroupSubjectController.java`

---

## Functions

### GroupSubjectController(groupSubjectRepository: GroupSubjectRepository, userService: UserService, individualRepository: IndividualRepository, groupRoleRepository: GroupRoleRepository, subjectTypeRepository: SubjectTypeRepository, individualService: IndividualService, scopeBasedSyncService: ScopeBasedSyncService<GroupSubject>, groupSubjectService: GroupSubjectService, accessControlService: AccessControlService, txDataControllerHelper: TxDataControllerHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectRepository | GroupSubjectRepository | - | - |
| userService | UserService | - | - |
| individualRepository | IndividualRepository | - | - |
| groupRoleRepository | GroupRoleRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| individualService | IndividualService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<GroupSubject> | - | - |
| groupSubjectService | GroupSubjectService | - | - |
| accessControlService | AccessControlService | - | - |
| txDataControllerHelper | TxDataControllerHelper | - | - |

**Returns**: `public`



### wrap(SliceImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(SliceImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(groupSubjectRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(groupSubjectRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(groupSubjectRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(groupSubjectRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### save(GroupSubjectContract: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| GroupSubjectContract | @RequestBody | - | - |

**Returns**: `void`



### GroupSubject() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### RuntimeException(unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### delete(String: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `void`



### BadRequestError(GroupSubject: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| GroupSubject | "Invalid | - | - |

**Returns**: `new`



### RuntimeException(unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### getGroupMembers(String: @PathVariable) → List<GroupSubjectContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `List<GroupSubjectContractWeb>`



### BadRequestError(Group: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Group | "Invalid | - | - |

**Returns**: `new`



### getGroupRoles(String: @PathVariable) → List<GroupRoleContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `List<GroupRoleContract>`



### BadRequestError(Group: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Group | "Invalid | - | - |

**Returns**: `new`



### process(resource: EntityModel<GroupSubject>) → EntityModel<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<GroupSubject> | - | - |

**Returns**: `EntityModel<GroupSubject>`


