# API Reference: LocationMappingSyncRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/LocationMappingSyncRepository.java`

---

## Functions

### LocationMappingSyncRepository(entityManager: EntityManager, locationMappingRepository: LocationMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| locationMappingRepository | LocationMappingRepository | - | - |

**Returns**: `public`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### getSyncResultsAsSlice(syncParameters: SyncParameters) → Slice<ParentLocationMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Slice<ParentLocationMapping>`



### getSyncResults(syncParameters: SyncParameters) → Page<ParentLocationMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Page<ParentLocationMapping>`


