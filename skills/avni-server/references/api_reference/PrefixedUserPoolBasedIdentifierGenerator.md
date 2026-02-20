# API Reference: PrefixedUserPoolBasedIdentifierGenerator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/identifier/PrefixedUserPoolBasedIdentifierGenerator.java`

---

## Classes

### PrefixedUserPoolBasedIdentifierGenerator

**Inherits from**: (none)

#### Methods

##### PrefixedUserPoolBasedIdentifierGenerator(identifierAssignmentRepository: IdentifierAssignmentRepository, identifierUserAssignmentRepository: IdentifierUserAssignmentRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierAssignmentRepository | IdentifierAssignmentRepository | - | - |
| identifierUserAssignmentRepository | IdentifierUserAssignmentRepository | - | - |

**Returns**: `public`


##### generateIdentifiers(identifierSource: IdentifierSource, user: User, prefix: String, deviceId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| prefix | String | - | - |
| deviceId | String | - | - |

**Returns**: `void`


##### generateSingleIdentifier(identifierSource: IdentifierSource, user: User, prefix: String, deviceId: String) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| prefix | String | - | - |
| deviceId | String | - | - |

**Returns**: `IdentifierAssignment`


##### saveIdentifierAssignments(identifierUserAssignments: List<IdentifierUserAssignment>, generatedIdentifiers: List<IdentifierAssignment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierUserAssignments | List<IdentifierUserAssignment> | - | - |
| generatedIdentifiers | List<IdentifierAssignment> | - | - |

**Returns**: `void`


##### addPaddingIfNecessary(identifier: String, identifierSource: IdentifierSource) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifier | String | - | - |
| identifierSource | IdentifierSource | - | - |

**Returns**: `String`


##### String(char[paddingLength]: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| char[paddingLength] | new | - | - |

**Returns**: `new`


##### sortAssignmentsByStartIdentifier(assignments: List<IdentifierUserAssignment>, prefix: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignments | List<IdentifierUserAssignment> | - | - |
| prefix | String | - | - |

**Returns**: `void`


##### prepareIdentifierAssignments(identifierSource: IdentifierSource, user: User, prefix: String) → List<IdentifierUserAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| prefix | String | - | - |

**Returns**: `List<IdentifierUserAssignment>`


##### getExistingIdentifiers(user: User, deviceId: String) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| deviceId | String | - | - |

**Returns**: `List<String>`


##### isAssignmentExhausted(assignment: IdentifierUserAssignment) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignment | IdentifierUserAssignment | - | - |

**Returns**: `boolean`


##### generateSingleIdentifierInternal(identifierSource: IdentifierSource, user: User, prefix: String, deviceId: String) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| prefix | String | - | - |
| deviceId | String | - | - |

**Returns**: `IdentifierAssignment`


##### RuntimeException(enough: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enough | "Not | - | - |

**Returns**: `new`


##### NextIdentifierUserAssignment(unknown: identifierUserAssignments, unknown: 1L) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignments | - | - |
| unknown | 1L | - | - |

**Returns**: `new`


##### RuntimeException(enough: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enough | "Not | - | - |

**Returns**: `new`


##### assignNextIdentifier(identifierUserAssignment: IdentifierUserAssignment, prefix: String, deviceId: String) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierUserAssignment | IdentifierUserAssignment | - | - |
| prefix | String | - | - |
| deviceId | String | - | - |

**Returns**: `IdentifierAssignment`


##### RuntimeException(enough: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enough | "Not | - | - |

**Returns**: `new`


##### createIdentifierAssignment(unknown: identifierSource, unknown: formattedIdentifier, unknown: currentIdentifier, unknown: identifierUserAssignment.getAssignedTo() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSource | - | - |
| unknown | formattedIdentifier | - | - |
| unknown | currentIdentifier | - | - |
| unknown | identifierUserAssignment.getAssignedTo( | - | - |

**Returns**: `return`


##### extractNumericPart(identifier: String, prefix: String) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifier | String | - | - |
| prefix | String | - | - |

**Returns**: `long`


##### determineStartingIdentifier(assignment: IdentifierUserAssignment, prefix: String) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignment | IdentifierUserAssignment | - | - |
| prefix | String | - | - |

**Returns**: `long`


##### extractNumericPart(unknown: assignment.getLastAssignedIdentifier() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | assignment.getLastAssignedIdentifier( | - | - |

**Returns**: `return`


##### extractNumericPart(unknown: assignment.getIdentifierStart() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | assignment.getIdentifierStart( | - | - |

**Returns**: `return`


##### formatIdentifier(numericPart: long, identifierSource: IdentifierSource, prefix: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| numericPart | long | - | - |
| identifierSource | IdentifierSource | - | - |
| prefix | String | - | - |

**Returns**: `String`


##### RuntimeException(%s: String.format("Identifier, unknown: formattedNumber, unknown: identifierSource.getMaxLength() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Identifier | - | - |
| unknown | formattedNumber | - | - |
| unknown | identifierSource.getMaxLength( | - | - |

**Returns**: `new`


##### identifierExists(identifier: String, identifierSource: IdentifierSource) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifier | String | - | - |
| identifierSource | IdentifierSource | - | - |

**Returns**: `boolean`


##### createIdentifierAssignment(identifierSource: IdentifierSource, identifier: String, numericValue: long, assignedTo: User, deviceId: String) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| identifier | String | - | - |
| numericValue | long | - | - |
| assignedTo | User | - | - |
| deviceId | String | - | - |

**Returns**: `IdentifierAssignment`


##### IdentifierAssignment(unknown: identifierSource, unknown: identifier, unknown: numericValue, unknown: assignedTo, unknown: deviceId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSource | - | - |
| unknown | identifier | - | - |
| unknown | numericValue | - | - |
| unknown | assignedTo | - | - |
| unknown | deviceId | - | - |

**Returns**: `new`


##### saveAssignments(userAssignments: List<IdentifierUserAssignment>, identifierAssignments: List<IdentifierAssignment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userAssignments | List<IdentifierUserAssignment> | - | - |
| identifierAssignments | List<IdentifierAssignment> | - | - |

**Returns**: `void`




## Functions

### PrefixedUserPoolBasedIdentifierGenerator(identifierAssignmentRepository: IdentifierAssignmentRepository, identifierUserAssignmentRepository: IdentifierUserAssignmentRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierAssignmentRepository | IdentifierAssignmentRepository | - | - |
| identifierUserAssignmentRepository | IdentifierUserAssignmentRepository | - | - |

**Returns**: `public`



### generateIdentifiers(identifierSource: IdentifierSource, user: User, prefix: String, deviceId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| prefix | String | - | - |
| deviceId | String | - | - |

**Returns**: `void`



### generateSingleIdentifier(identifierSource: IdentifierSource, user: User, prefix: String, deviceId: String) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| prefix | String | - | - |
| deviceId | String | - | - |

**Returns**: `IdentifierAssignment`



### saveIdentifierAssignments(identifierUserAssignments: List<IdentifierUserAssignment>, generatedIdentifiers: List<IdentifierAssignment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierUserAssignments | List<IdentifierUserAssignment> | - | - |
| generatedIdentifiers | List<IdentifierAssignment> | - | - |

**Returns**: `void`



### addPaddingIfNecessary(identifier: String, identifierSource: IdentifierSource) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifier | String | - | - |
| identifierSource | IdentifierSource | - | - |

**Returns**: `String`



### String(char[paddingLength]: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| char[paddingLength] | new | - | - |

**Returns**: `new`



### sortAssignmentsByStartIdentifier(assignments: List<IdentifierUserAssignment>, prefix: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignments | List<IdentifierUserAssignment> | - | - |
| prefix | String | - | - |

**Returns**: `void`



### prepareIdentifierAssignments(identifierSource: IdentifierSource, user: User, prefix: String) → List<IdentifierUserAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| prefix | String | - | - |

**Returns**: `List<IdentifierUserAssignment>`



### getExistingIdentifiers(user: User, deviceId: String) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| deviceId | String | - | - |

**Returns**: `List<String>`



### isAssignmentExhausted(assignment: IdentifierUserAssignment) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignment | IdentifierUserAssignment | - | - |

**Returns**: `boolean`



### generateSingleIdentifierInternal(identifierSource: IdentifierSource, user: User, prefix: String, deviceId: String) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| prefix | String | - | - |
| deviceId | String | - | - |

**Returns**: `IdentifierAssignment`



### RuntimeException(enough: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enough | "Not | - | - |

**Returns**: `new`



### NextIdentifierUserAssignment(unknown: identifierUserAssignments, unknown: 1L) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierUserAssignments | - | - |
| unknown | 1L | - | - |

**Returns**: `new`



### RuntimeException(enough: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enough | "Not | - | - |

**Returns**: `new`



### assignNextIdentifier(identifierUserAssignment: IdentifierUserAssignment, prefix: String, deviceId: String) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierUserAssignment | IdentifierUserAssignment | - | - |
| prefix | String | - | - |
| deviceId | String | - | - |

**Returns**: `IdentifierAssignment`



### RuntimeException(enough: "Not) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enough | "Not | - | - |

**Returns**: `new`



### createIdentifierAssignment(unknown: identifierSource, unknown: formattedIdentifier, unknown: currentIdentifier, unknown: identifierUserAssignment.getAssignedTo() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSource | - | - |
| unknown | formattedIdentifier | - | - |
| unknown | currentIdentifier | - | - |
| unknown | identifierUserAssignment.getAssignedTo( | - | - |

**Returns**: `return`



### extractNumericPart(identifier: String, prefix: String) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifier | String | - | - |
| prefix | String | - | - |

**Returns**: `long`



### determineStartingIdentifier(assignment: IdentifierUserAssignment, prefix: String) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignment | IdentifierUserAssignment | - | - |
| prefix | String | - | - |

**Returns**: `long`



### extractNumericPart(unknown: assignment.getLastAssignedIdentifier() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | assignment.getLastAssignedIdentifier( | - | - |

**Returns**: `return`



### extractNumericPart(unknown: assignment.getIdentifierStart() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | assignment.getIdentifierStart( | - | - |

**Returns**: `return`



### formatIdentifier(numericPart: long, identifierSource: IdentifierSource, prefix: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| numericPart | long | - | - |
| identifierSource | IdentifierSource | - | - |
| prefix | String | - | - |

**Returns**: `String`



### RuntimeException(%s: String.format("Identifier, unknown: formattedNumber, unknown: identifierSource.getMaxLength() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Identifier | - | - |
| unknown | formattedNumber | - | - |
| unknown | identifierSource.getMaxLength( | - | - |

**Returns**: `new`



### identifierExists(identifier: String, identifierSource: IdentifierSource) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifier | String | - | - |
| identifierSource | IdentifierSource | - | - |

**Returns**: `boolean`



### createIdentifierAssignment(identifierSource: IdentifierSource, identifier: String, numericValue: long, assignedTo: User, deviceId: String) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| identifier | String | - | - |
| numericValue | long | - | - |
| assignedTo | User | - | - |
| deviceId | String | - | - |

**Returns**: `IdentifierAssignment`



### IdentifierAssignment(unknown: identifierSource, unknown: identifier, unknown: numericValue, unknown: assignedTo, unknown: deviceId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSource | - | - |
| unknown | identifier | - | - |
| unknown | numericValue | - | - |
| unknown | assignedTo | - | - |
| unknown | deviceId | - | - |

**Returns**: `new`



### saveAssignments(userAssignments: List<IdentifierUserAssignment>, identifierAssignments: List<IdentifierAssignment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userAssignments | List<IdentifierUserAssignment> | - | - |
| identifierAssignments | List<IdentifierAssignment> | - | - |

**Returns**: `void`


