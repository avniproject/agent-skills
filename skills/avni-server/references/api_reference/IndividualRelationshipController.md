# API Reference: IndividualRelationshipController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/IndividualRelationshipController.java`

---

## Functions

### IndividualRelationshipController(individualRelationshipRepository: IndividualRelationshipRepository, individualRepository: IndividualRepository, individualRelationshipTypeRepository: IndividualRelationshipTypeRepository, subjectTypeRepository: SubjectTypeRepository, userService: UserService, scopeBasedSyncService: ScopeBasedSyncService<IndividualRelationship>, accessControlService: AccessControlService, txDataControllerHelper: TxDataControllerHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationshipRepository | IndividualRelationshipRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| individualRelationshipTypeRepository | IndividualRelationshipTypeRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| userService | UserService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<IndividualRelationship> | - | - |
| accessControlService | AccessControlService | - | - |
| txDataControllerHelper | TxDataControllerHelper | - | - |

**Returns**: `public`



### save(IndividualRelationshipRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IndividualRelationshipRequest | @RequestBody | - | - |

**Returns**: `void`



### IndividualRelationship() → new

**Returns**: `new`



### RuntimeException(unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### wrap(unknown: individualRelationshipRepository.findByIndividualaAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualRelationshipRepository.findByIndividualaAddressLevelVirtualCatchmentsIdAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(catchmentId | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### wrap(unknown: individualRelationshipRepository.findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime, unknown: now, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualRelationshipRepository.findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | pageable | - | - |

**Returns**: `return`



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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(individualRelationshipRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(individualRelationshipRepository | - | - |
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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(individualRelationshipRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(individualRelationshipRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### process(resource: EntityModel<IndividualRelationship>) → EntityModel<IndividualRelationship>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<IndividualRelationship> | - | - |

**Returns**: `EntityModel<IndividualRelationship>`



### deleteIndividualRelationShip(Long: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `void`



### RuntimeException(unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e.getMessage( | - | - |

**Returns**: `new`


