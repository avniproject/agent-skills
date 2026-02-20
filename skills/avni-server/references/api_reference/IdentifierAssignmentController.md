# API Reference: IdentifierAssignmentController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/IdentifierAssignmentController.java`

---

## Functions

### IdentifierAssignmentController(identifierAssignmentRepository: IdentifierAssignmentRepository, userService: UserService, identifierAssignmentService: IdentifierAssignmentService, individualRepository: IndividualRepository, programEnrolmentRepository: ProgramEnrolmentRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierAssignmentRepository | IdentifierAssignmentRepository | - | - |
| userService | UserService | - | - |
| identifierAssignmentService | IdentifierAssignmentService | - | - |
| individualRepository | IndividualRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |

**Returns**: `public`



### wrap(unknown: identifierAssignmentRepository.findByAssignedToAndLastModifiedDateTimeGreaterThanAndIsVoidedFalseAndIndividualIsNullAndProgramEnrolmentIsNullAndDeviceIdEqualsOrderByAssignmentOrderAsc(currentUser, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierAssignmentRepository.findByAssignedToAndLastModifiedDateTimeGreaterThanAndIsVoidedFalseAndIndividualIsNullAndProgramEnrolmentIsNullAndDeviceIdEqualsOrderByAssignmentOrderAsc(currentUser | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### wrap(unknown: identifierAssignmentRepository.findSliceByAssignedToAndLastModifiedDateTimeGreaterThanAndIsVoidedFalseAndIndividualIsNullAndProgramEnrolmentIsNullAndDeviceIdEqualsOrderByAssignmentOrderAsc(currentUser, unknown: CHSEntity.toDate(lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierAssignmentRepository.findSliceByAssignedToAndLastModifiedDateTimeGreaterThanAndIsVoidedFalseAndIndividualIsNullAndProgramEnrolmentIsNullAndDeviceIdEqualsOrderByAssignmentOrderAsc(currentUser | - | - |
| unknown | CHSEntity.toDate(lastModifiedDateTime | - | - |

**Returns**: `return`



### save(IdentifierAssignmentRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IdentifierAssignmentRequest | @RequestBody | - | - |

**Returns**: `void`



### createIdentifierAssignment(identifierAssignmentRequest: IdentifierAssignmentRequest) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierAssignmentRequest | IdentifierAssignmentRequest | - | - |

**Returns**: `IdentifierAssignment`



### process(resource: EntityModel<IdentifierAssignment>) → EntityModel<IdentifierAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<IdentifierAssignment> | - | - |

**Returns**: `EntityModel<IdentifierAssignment>`


