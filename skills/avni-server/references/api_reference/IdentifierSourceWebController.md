# API Reference: IdentifierSourceWebController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/IdentifierSourceWebController.java`

---

## Functions

### IdentifierSourceWebController(identifierSourceRepository: IdentifierSourceRepository, identifierSourceService: IdentifierSourceService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSourceRepository | IdentifierSourceRepository | - | - |
| identifierSourceService | IdentifierSourceService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### wrap(unknown: identifierSourceRepository.findByIdIn(id, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSourceRepository.findByIdIn(id | - | - |
| unknown | pageable | - | - |

**Returns**: `return`



### wrap(unknown: identifierSourceRepository.findPageByIsVoidedFalse(pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSourceRepository.findPageByIsVoidedFalse(pageable | - | - |

**Returns**: `return`



### getOne(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### saveProgramForWeb(IdentifierSourceContractWeb: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IdentifierSourceContractWeb | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### updateProgramForWeb(IdentifierSourceContractWeb: @RequestBody, unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IdentifierSourceContractWeb | @RequestBody | - | - |
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### voidProgram(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`


