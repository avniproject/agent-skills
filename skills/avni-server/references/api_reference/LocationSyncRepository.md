# API Reference: LocationSyncRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/LocationSyncRepository.java`

---

## Functions

### LocationSyncRepository(entityManager: EntityManager, locationRepository: LocationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| locationRepository | LocationRepository | - | - |

**Returns**: `public`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### getSyncResultsAsSlice(syncParameters: SyncParameters) → Slice<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Slice<AddressLevel>`



### getSyncResults(syncParameters: SyncParameters) → Page<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Page<AddressLevel>`


