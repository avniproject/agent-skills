# API Reference: IdentifierUserAssignmentRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/IdentifierUserAssignmentRepository.java`

---

## Functions

### getAllNonExhaustedUserAssignments(unknown: @Param("user") → List<IdentifierUserAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("user" | - | - |

**Returns**: `List<IdentifierUserAssignment>`



### findByName(name: String) → IdentifierUserAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `IdentifierUserAssignment`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → IdentifierUserAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `IdentifierUserAssignment`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### cast(unknown: replace(:identifierStart, unknown: :prefix, unknown: '') → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | replace(:identifierStart | - | - |
| unknown | :prefix | - | - |
| unknown | '' | - | - |

**Returns**: `and`



### cast(unknown: replace(:identifierEnd, unknown: :prefix, unknown: '') → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | replace(:identifierEnd | - | - |
| unknown | :prefix | - | - |
| unknown | '' | - | - |

**Returns**: `and`



### getOverlappingAssignment(prefix: String, identifierSourceId: long, identifierStart: String, identifierEnd: String) → List<IdentifierUserAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | String | - | - |
| identifierSourceId | long | - | - |
| identifierStart | String | - | - |
| identifierEnd | String | - | - |

**Returns**: `List<IdentifierUserAssignment>`



### cast(unknown: replace(:identifierStart, unknown: :prefix, unknown: '') → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | replace(:identifierStart | - | - |
| unknown | :prefix | - | - |
| unknown | '' | - | - |

**Returns**: `and`



### cast(unknown: replace(:identifierEnd, unknown: :prefix, unknown: '') → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | replace(:identifierEnd | - | - |
| unknown | :prefix | - | - |
| unknown | '' | - | - |

**Returns**: `and`



### getOverlappingAssignmentWithSamePrefix(prefix: String, identifierSourceId: long, identifierStart: String, identifierEnd: String, userId: long) → List<IdentifierUserAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | String | - | - |
| identifierSourceId | long | - | - |
| identifierStart | String | - | - |
| identifierEnd | String | - | - |
| userId | long | - | - |

**Returns**: `List<IdentifierUserAssignment>`



### getOverlappingAssignmentForPooledIdentifier(identifierUserAssignment: IdentifierUserAssignment) → List<IdentifierUserAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierUserAssignment | IdentifierUserAssignment | - | - |

**Returns**: `List<IdentifierUserAssignment>`



### getOverlappingAssignment(unknown: identifierUserAssignment.getIdentifierSource() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignment.getIdentifierSource( | - | - |

**Returns**: `return`



### getOverlappingAssignmentForNonPooledIdentifier(identifierUserAssignment: IdentifierUserAssignment) → List<IdentifierUserAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierUserAssignment | IdentifierUserAssignment | - | - |

**Returns**: `List<IdentifierUserAssignment>`



### getOverlappingAssignmentWithSamePrefix(unknown: assignedTo.getUserSettings() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | assignedTo.getUserSettings( | - | - |

**Returns**: `return`



### updateExistingWithNew(existingIdentifierUserAssignment: IdentifierUserAssignment, newIdentifierUserAssignment: IdentifierUserAssignment) → IdentifierUserAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingIdentifierUserAssignment | IdentifierUserAssignment | - | - |
| newIdentifierUserAssignment | IdentifierUserAssignment | - | - |

**Returns**: `IdentifierUserAssignment`



### save(unknown: existingIdentifierUserAssignment) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | existingIdentifierUserAssignment | - | - |

**Returns**: `return`


