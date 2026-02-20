# API Reference: SyncTelemetryController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/SyncTelemetryController.java`

---

## Functions

### SyncTelemetryController(syncTelemetryRepository: SyncTelemetryRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncTelemetryRepository | SyncTelemetryRepository | - | - |

**Returns**: `public`



### saveSyncTelemetry(SyncTelemetryRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SyncTelemetryRequest | @RequestBody | - | - |

**Returns**: `void`



### SyncTelemetry() → new

**Returns**: `new`



### wrap(unknown: syncTelemetryRepository.findAllByOrderByIdDesc(pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncTelemetryRepository.findAllByOrderByIdDesc(pageable | - | - |

**Returns**: `return`



### wrap(unknown: syncTelemetryRepository.findAllByUserIdInAndSyncStartTimeBetweenOrderByIdDesc(userIds, unknown: startDate, unknown: endDate, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncTelemetryRepository.findAllByUserIdInAndSyncStartTimeBetweenOrderByIdDesc(userIds | - | - |
| unknown | startDate | - | - |
| unknown | endDate | - | - |
| unknown | pageable | - | - |

**Returns**: `return`



### wrap(unknown: syncTelemetryRepository.findAllByUserIdInOrderByIdDesc(userIds, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncTelemetryRepository.findAllByUserIdInOrderByIdDesc(userIds | - | - |
| unknown | pageable | - | - |

**Returns**: `return`



### wrap(unknown: syncTelemetryRepository.findAllBySyncStartTimeBetweenOrderByIdDesc(startDate, unknown: endDate, unknown: pageable) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncTelemetryRepository.findAllBySyncStartTimeBetweenOrderByIdDesc(startDate | - | - |
| unknown | endDate | - | - |
| unknown | pageable | - | - |

**Returns**: `return`



### process(resource: EntityModel<SyncTelemetry>) → EntityModel<SyncTelemetry>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<SyncTelemetry> | - | - |

**Returns**: `EntityModel<SyncTelemetry>`


