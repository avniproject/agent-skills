# API Reference: LocationController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/LocationController.java`

---

## Functions

### LocationController(locationRepository: LocationRepository, userService: UserService, locationService: LocationService, scopeBasedSyncService: ScopeBasedSyncService<AddressLevel>, accessControlService: AccessControlService, locationSyncRepository: LocationSyncRepository, addressLevelService: AddressLevelService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRepository | LocationRepository | - | - |
| userService | UserService | - | - |
| locationService | LocationService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<AddressLevel> | - | - |
| accessControlService | AccessControlService | - | - |
| locationSyncRepository | LocationSyncRepository | - | - |
| addressLevelService | AddressLevelService | - | - |

**Returns**: `public`



### getAll(pageable: Pageable) → Page<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<AddressLevelContractWeb>`



### find(=: @RequestParam(value, =: defaultValue) → Page<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | defaultValue | - | - |

**Returns**: `Page<AddressLevelContractWeb>`



### LocationSearchRequest(unknown: title, unknown: typeId, unknown: parentId, unknown: pageable) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | title | - | - |
| unknown | typeId | - | - |
| unknown | parentId | - | - |
| unknown | pageable | - | - |

**Returns**: `new`



### findAsList(=: @RequestParam(value, =: defaultValue) → List<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | defaultValue | - | - |

**Returns**: `List<AddressLevelContractWeb>`



### findByIdIn(unknown: @Param("ids") → List<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `List<AddressLevelContractWeb>`



### wrap(unknown: scopeBasedSyncService.getSyncResultsByCatchment(locationSyncRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsByCatchment(locationSyncRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### updateLocation(LocationEditContract: @RequestBody, unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| LocationEditContract | @RequestBody | - | - |
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### voidLocation(unknown: @PathVariable("id") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity`



### getLocationsByTypeId(unknown: @PathVariable("typeId") → List<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("typeId" | - | - |

**Returns**: `List<AddressLevelContractWeb>`



### getParents(unknown: @PathVariable("uuid") → List<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("uuid" | - | - |

**Returns**: `List<AddressLevelContractWeb>`



### getLocationByParam(unknown: @RequestParam("uuid") → ResponseEntity<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @RequestParam("uuid" | - | - |

**Returns**: `ResponseEntity<AddressLevelContractWeb>`


