# API Reference: LocationMappingRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/LocationMappingRepository.java`

---

## Functions

### getSyncResults(catchmentId: long, lastModifiedDateTime: Date, now: Date, organisationId: long, pageable: Pageable) → Page<ParentLocationMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | long | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| organisationId | long | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ParentLocationMapping>`



### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`



### getChangedRowCount(catchmentId: long, lastModifiedDateTime: Date) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | long | - | - |
| lastModifiedDateTime | Date | - | - |

**Returns**: `Long`



### getSyncResults(syncParameters: SyncParameters) → Page<ParentLocationMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Page<ParentLocationMapping>`



### getSyncResults(unknown: syncParameters.getCatchment() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncParameters.getCatchment( | - | - |

**Returns**: `return`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### getChangedRowCount(unknown: syncParameters.getCatchment() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncParameters.getCatchment( | - | - |

**Returns**: `return`



### findByName(name: String) → ParentLocationMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ParentLocationMapping`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → ParentLocationMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ParentLocationMapping`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findAllByLocation(location: AddressLevel) → List<ParentLocationMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |

**Returns**: `List<ParentLocationMapping>`


