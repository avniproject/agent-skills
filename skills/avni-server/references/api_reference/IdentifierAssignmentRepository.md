# API Reference: IdentifierAssignmentRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/IdentifierAssignmentRepository.java`

---

## Functions

### findByAssignedToAndLastModifiedDateTimeGreaterThanAndIsVoidedFalseAndIndividualIsNullAndProgramEnrolmentIsNullAndDeviceIdEqualsOrderByAssignmentOrderAsc(currentUser: User, lastModifiedDateTime: Date, deviceId: String, pageable: Pageable) → Page<IdentifierAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentUser | User | - | - |
| lastModifiedDateTime | Date | - | - |
| deviceId | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<IdentifierAssignment>`



### findSliceByAssignedToAndLastModifiedDateTimeGreaterThanAndIsVoidedFalseAndIndividualIsNullAndProgramEnrolmentIsNullAndDeviceIdEqualsOrderByAssignmentOrderAsc(currentUser: User, lastModifiedDateTime: Date, deviceId: String, pageable: Pageable) → Slice<IdentifierAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentUser | User | - | - |
| lastModifiedDateTime | Date | - | - |
| deviceId | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Slice<IdentifierAssignment>`



### countIdentifierAssignmentByIdentifierSourceEqualsAndAssignedToEqualsAndIndividualIsNullAndProgramEnrolmentIsNullAndUsedIsFalseAndDeviceIdEquals(identifierSource: IdentifierSource, assignedTo: User, deviceId: String) → Integer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| assignedTo | User | - | - |
| deviceId | String | - | - |

**Returns**: `Integer`



### existsByAssignedToAndLastModifiedDateTimeGreaterThanAndIsVoidedFalseAndIndividualIsNullAndProgramEnrolmentIsNullAndDeviceIdEquals(currentUser: User, lastModifiedDateTime: Date, deviceId: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentUser | User | - | - |
| lastModifiedDateTime | Date | - | - |
| deviceId | String | - | - |

**Returns**: `boolean`



### findByAssignedToAndDeviceIdAndUsedFalseAndIsVoidedFalse(currentUser: User, deviceId: String) → List<IdentifierAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentUser | User | - | - |
| deviceId | String | - | - |

**Returns**: `List<IdentifierAssignment>`



### existsByIdentifierAndIdentifierSourceAndIsVoidedFalse(identifier: String, identifierSource: IdentifierSource) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifier | String | - | - |
| identifierSource | IdentifierSource | - | - |

**Returns**: `boolean`


