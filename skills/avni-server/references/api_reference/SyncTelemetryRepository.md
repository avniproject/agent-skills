# API Reference: SyncTelemetryRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/SyncTelemetryRepository.java`

---

## Functions

### findAllByOrderByIdDesc(pageable: Pageable) → Page<SyncTelemetry>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<SyncTelemetry>`



### findAllByUserIdInOrderByIdDesc(userIds: List<Long>, pageable: Pageable) → Page<SyncTelemetry>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userIds | List<Long> | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<SyncTelemetry>`



### findAllBySyncStartTimeBetweenOrderByIdDesc(startDate: DateTime, endDate: DateTime, pageable: Pageable) → Page<SyncTelemetry>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | DateTime | - | - |
| endDate | DateTime | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<SyncTelemetry>`



### findAllByUserIdInAndSyncStartTimeBetweenOrderByIdDesc(userIds: List<Long>, startDate: DateTime, endDate: DateTime, pageable: Pageable) → Page<SyncTelemetry>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userIds | List<Long> | - | - |
| startDate | DateTime | - | - |
| endDate | DateTime | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<SyncTelemetry>`


