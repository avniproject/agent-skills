# API Reference: UserSubjectAssignmentController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/UserSubjectAssignmentController.java`

---

## Functions

### UserSubjectAssignmentController(userSubjectAssignmentRepository: UserSubjectAssignmentRepository, userSubjectAssignmentService: UserSubjectAssignmentService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignmentRepository | UserSubjectAssignmentRepository | - | - |
| userSubjectAssignmentService | UserSubjectAssignmentService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### wrap(unknown: userSubjectAssignmentRepository.findByUserAndIsVoidedTrueAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userSubjectAssignmentRepository.findByUserAndIsVoidedTrueAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### wrap(unknown: userSubjectAssignmentRepository.findSliceByUserAndIsVoidedTrueAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userSubjectAssignmentRepository.findSliceByUserAndIsVoidedTrueAndLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(user | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### getSubjectAssignmentMetadataForSearch() → JsonObject

**Returns**: `JsonObject`



### subject(unknown: s) → assign

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s | - | - |

**Returns**: `assign`



### process(resource: EntityModel<UserSubjectAssignment>) → EntityModel<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<UserSubjectAssignment> | - | - |

**Returns**: `EntityModel<UserSubjectAssignment>`


