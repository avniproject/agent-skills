# API Reference: IdentifierUserAssignmentWebController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/IdentifierUserAssignmentWebController.java`

---

## Functions

### IdentifierUserAssignmentWebController(identifierUserAssignmentRepository: IdentifierUserAssignmentRepository, userRepository: UserRepository, identifierSourceRepository: IdentifierSourceRepository, accessControlService: AccessControlService, identifierUserAssignmentService: IdentifierUserAssignmentService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierUserAssignmentRepository | IdentifierUserAssignmentRepository | - | - |
| userRepository | UserRepository | - | - |
| identifierSourceRepository | IdentifierSourceRepository | - | - |
| accessControlService | AccessControlService | - | - |
| identifierUserAssignmentService | IdentifierUserAssignmentService | - | - |

**Returns**: `public`



### wrap(unknown: response) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | response | - | - |

**Returns**: `return`



### mapSort(sort: Sort) → Sort

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sort | Sort | - | - |

**Returns**: `Sort`



### getOne(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### saveIdentifierAssignment(IdentifierUserAssignmentContractWeb: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IdentifierUserAssignmentContractWeb | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### updateIdAssignment(IdentifierUserAssignmentContractWeb: @RequestBody, unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IdentifierUserAssignmentContractWeb | @RequestBody | - | - |
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### voidIdentifierUserAssignment(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### getIdentifierUserAssignment(request: IdentifierUserAssignmentContractWeb) → IdentifierUserAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | IdentifierUserAssignmentContractWeb | - | - |

**Returns**: `IdentifierUserAssignment`



### IdentifierUserAssignment() → new

**Returns**: `new`


