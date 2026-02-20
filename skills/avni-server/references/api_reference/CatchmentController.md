# API Reference: CatchmentController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/CatchmentController.java`

---

## Functions

### CatchmentController(catchmentRepository: CatchmentRepository, locationRepository: LocationRepository, catchmentService: CatchmentService, s3Service: S3Service, resetSyncService: ResetSyncService, accessControlService: AccessControlService, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRepository | CatchmentRepository | - | - |
| locationRepository | LocationRepository | - | - |
| catchmentService | CatchmentService | - | - |
| s3Service | S3Service | - | - |
| resetSyncService | ResetSyncService | - | - |
| accessControlService | AccessControlService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`



### wrap(unknown: catchmentContracts) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | catchmentContracts | - | - |

**Returns**: `return`



### getById(Long: @PathVariable) → EntityModel<CatchmentContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `EntityModel<CatchmentContract>`



### getById(unknown: @Param("ids") → List<CatchmentContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `List<CatchmentContract>`



### wrap(unknown: catchmentContracts) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | catchmentContracts | - | - |

**Returns**: `return`



### Catchment() → new

**Returns**: `new`



### Exception(id: String.format("Location, unknown: locationId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String.format("Location | - | - |
| unknown | locationId | - | - |

**Returns**: `new`



### Exception(id: String.format("Location, unknown: locationId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String.format("Location | - | - |
| unknown | locationId | - | - |

**Returns**: `new`


