# API Reference: LocationMappingService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/LocationMappingService.java`

---

## Functions

### LocationMappingService(locationMappingRepository: LocationMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationMappingRepository | LocationMappingRepository | - | - |

**Returns**: `public`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, typeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| typeUUID | String | - | - |

**Returns**: `boolean`



### isChangedByCatchment(unknown: user, unknown: lastModifiedDateTime, unknown: SyncEntityName.LocationMapping) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |
| unknown | lastModifiedDateTime | - | - |
| unknown | SyncEntityName.LocationMapping | - | - |

**Returns**: `return`



### repository() → OperatingIndividualScopeAwareRepository<ParentLocationMapping>

**Returns**: `OperatingIndividualScopeAwareRepository<ParentLocationMapping>`


