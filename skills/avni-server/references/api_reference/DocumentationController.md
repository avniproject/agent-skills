# API Reference: DocumentationController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/DocumentationController.java`

---

## Functions

### DocumentationController(documentationRepository: DocumentationRepository, documentationService: DocumentationService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationRepository | DocumentationRepository | - | - |
| documentationService | DocumentationService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getAllDocumentNodes() → List<DocumentationContract>

**Returns**: `List<DocumentationContract>`



### saveDocumentation(DocumentationContract: @RequestBody) → ResponseEntity<DocumentationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| DocumentationContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<DocumentationContract>`



### searchDocumentation(String: @RequestParam, pageable: Pageable) → Page<DocumentationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<DocumentationProjection>`



### deleteDocumentation(String: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `void`


