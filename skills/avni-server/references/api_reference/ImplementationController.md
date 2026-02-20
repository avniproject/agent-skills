# API Reference: ImplementationController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ImplementationController.java`

---

## Functions

### ImplementationController(implementationService: ImplementationService, accessControlService: AccessControlService, bundleService: BundleService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implementationService | ImplementationService | - | - |
| accessControlService | AccessControlService | - | - |
| bundleService | BundleService | - | - |

**Returns**: `public`



### export(boolean: @PathVariable) → ResponseEntity<ByteArrayResource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| boolean | @PathVariable | - | - |

**Returns**: `ResponseEntity<ByteArrayResource>`



### ByteArrayResource(unknown: baosByteArray) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | baosByteArray | - | - |

**Returns**: `new`



### delete(unknown: @RequestParam("deleteMetadata") → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @RequestParam("deleteMetadata" | - | - |

**Returns**: `ResponseEntity<String>`



### getHttpHeaders() → HttpHeaders

**Returns**: `HttpHeaders`



### HttpHeaders() → new

**Returns**: `new`


