# API Reference: NextIdentifierUserAssignment.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/identifier/NextIdentifierUserAssignment.java`

---

## Classes

### NextIdentifierUserAssignment

**Inherits from**: (none)

#### Methods

##### NextIdentifierUserAssignment(identifierUserAssignments: List<IdentifierUserAssignment>, initialBatchSize: Long) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierUserAssignments | List<IdentifierUserAssignment> | - | - |
| initialBatchSize | Long | - | - |

**Returns**: `public`


##### next() → IdentifierUserAssignment

**Returns**: `IdentifierUserAssignment`


##### updateCursor() → IdentifierUserAssignment

**Returns**: `IdentifierUserAssignment`


##### hasReachedIdentifierEnd(assignment: IdentifierUserAssignment) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignment | IdentifierUserAssignment | - | - |

**Returns**: `boolean`


##### hasNext() → boolean

**Returns**: `boolean`


##### getAllAssignments() → Iterator<IdentifierUserAssignment>

**Returns**: `Iterator<IdentifierUserAssignment>`




## Functions

### NextIdentifierUserAssignment(identifierUserAssignments: List<IdentifierUserAssignment>, initialBatchSize: Long) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierUserAssignments | List<IdentifierUserAssignment> | - | - |
| initialBatchSize | Long | - | - |

**Returns**: `public`



### next() → IdentifierUserAssignment

**Returns**: `IdentifierUserAssignment`



### updateCursor() → IdentifierUserAssignment

**Returns**: `IdentifierUserAssignment`



### hasReachedIdentifierEnd(assignment: IdentifierUserAssignment) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignment | IdentifierUserAssignment | - | - |

**Returns**: `boolean`



### hasNext() → boolean

**Returns**: `boolean`



### getAllAssignments() → Iterator<IdentifierUserAssignment>

**Returns**: `Iterator<IdentifierUserAssignment>`


