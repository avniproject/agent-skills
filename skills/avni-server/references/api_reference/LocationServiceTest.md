# API Reference: LocationServiceTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/LocationServiceTest.java`

---

## Classes

### LocationServiceTest

**Inherits from**: (none)

#### Methods

##### before() → void

**Returns**: `void`


##### LocationService(unknown: locationRepository, unknown: addressLevelTypeRepository, unknown: organisationRepository, unknown: locationMappingRepository, unknown: resetSyncService, unknown: organisationConfigService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationRepository | - | - |
| unknown | addressLevelTypeRepository | - | - |
| unknown | organisationRepository | - | - |
| unknown | locationMappingRepository | - | - |
| unknown | resetSyncService | - | - |
| unknown | organisationConfigService | - | - |

**Returns**: `new`


##### shouldSearchByIdAloneIfAddressLevelAndParentNotAvailable() → void

**Returns**: `void`


##### LocationSearchRequest(unknown: searchString, unknown: null, unknown: null, unknown: mock(Pageable.class) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchString | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | mock(Pageable.class | - | - |

**Returns**: `new`


##### shouldSearchByAddressLevelTypeIfAvailable() → void

**Returns**: `void`


##### LocationSearchRequest(unknown: searchString, unknown: addressLevelTypeId, unknown: null, unknown: mock(Pageable.class) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchString | - | - |
| unknown | addressLevelTypeId | - | - |
| unknown | null | - | - |
| unknown | mock(Pageable.class | - | - |

**Returns**: `new`


##### shouldSearchByAddressLevelTypeAndParentIfAvailable() → void

**Returns**: `void`


##### LocationSearchRequest(unknown: searchString, unknown: addressLevelTypeId, unknown: parentId, unknown: mock(Pageable.class) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchString | - | - |
| unknown | addressLevelTypeId | - | - |
| unknown | parentId | - | - |
| unknown | mock(Pageable.class | - | - |

**Returns**: `new`




## Functions

### before() → void

**Returns**: `void`



### LocationService(unknown: locationRepository, unknown: addressLevelTypeRepository, unknown: organisationRepository, unknown: locationMappingRepository, unknown: resetSyncService, unknown: organisationConfigService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationRepository | - | - |
| unknown | addressLevelTypeRepository | - | - |
| unknown | organisationRepository | - | - |
| unknown | locationMappingRepository | - | - |
| unknown | resetSyncService | - | - |
| unknown | organisationConfigService | - | - |

**Returns**: `new`



### shouldSearchByIdAloneIfAddressLevelAndParentNotAvailable() → void

**Returns**: `void`



### LocationSearchRequest(unknown: searchString, unknown: null, unknown: null, unknown: mock(Pageable.class) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchString | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | mock(Pageable.class | - | - |

**Returns**: `new`



### shouldSearchByAddressLevelTypeIfAvailable() → void

**Returns**: `void`



### LocationSearchRequest(unknown: searchString, unknown: addressLevelTypeId, unknown: null, unknown: mock(Pageable.class) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchString | - | - |
| unknown | addressLevelTypeId | - | - |
| unknown | null | - | - |
| unknown | mock(Pageable.class | - | - |

**Returns**: `new`



### shouldSearchByAddressLevelTypeAndParentIfAvailable() → void

**Returns**: `void`



### LocationSearchRequest(unknown: searchString, unknown: addressLevelTypeId, unknown: parentId, unknown: mock(Pageable.class) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchString | - | - |
| unknown | addressLevelTypeId | - | - |
| unknown | parentId | - | - |
| unknown | mock(Pageable.class | - | - |

**Returns**: `new`


