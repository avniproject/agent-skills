# API Reference: AddressLevel.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/AddressLevel.java`

---

## Classes

### AddressLevel

**Inherits from**: OrganisationAwareEntity

#### Methods

##### getTitle() → String

**Returns**: `String`


##### setTitle(title: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |

**Returns**: `void`


##### getLevel() → Double

**Returns**: `Double`


##### getParent() → AddressLevel

**Returns**: `AddressLevel`


##### getParentId() → Long

**Returns**: `Long`


##### getParentUuid() → String

**Returns**: `String`


##### getTypeUuid() → String

**Returns**: `String`


##### setParent(parent: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | AddressLevel | - | - |

**Returns**: `void`


##### isTopLevel() → boolean

**Returns**: `boolean`


##### getSubLocations() → Set<AddressLevel>

**Returns**: `Set<AddressLevel>`


##### getNonVoidedSubLocations() → Set<AddressLevel>

**Returns**: `Set<AddressLevel>`


##### setSubLocations(subLocations: Set<AddressLevel>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subLocations | Set<AddressLevel> | - | - |

**Returns**: `void`


##### containsSubLocation(title: String, type: AddressLevelType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| type | AddressLevelType | - | - |

**Returns**: `boolean`


##### containsSubLocationExcept(title: String, type: AddressLevelType, exclude: AddressLevel) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| type | AddressLevelType | - | - |
| exclude | AddressLevel | - | - |

**Returns**: `boolean`


##### getCatchments() → Set<Catchment>

**Returns**: `Set<Catchment>`


##### setCatchments(catchments: Set<Catchment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchments | Set<Catchment> | - | - |

**Returns**: `void`


##### getType() → AddressLevelType

**Returns**: `AddressLevelType`


##### setType(type: AddressLevelType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | AddressLevelType | - | - |

**Returns**: `void`


##### getTypeString() → String

**Returns**: `String`


##### addCatchment(catchment: Catchment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `void`


##### removeCatchment(catchment: Catchment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `void`


##### getParentLocationMappings() → Set<ParentLocationMapping>

**Returns**: `Set<ParentLocationMapping>`


##### setParentLocationMappings(parentLocationMappings: Set<ParentLocationMapping>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentLocationMappings | Set<ParentLocationMapping> | - | - |

**Returns**: `void`


##### getVirtualCatchments() → Set<Catchment>

**Returns**: `Set<Catchment>`


##### setVirtualCatchments(virtualCatchments: Set<Catchment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| virtualCatchments | Set<Catchment> | - | - |

**Returns**: `void`


##### setParentLocationMapping(parentLocationMapping: ParentLocationMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentLocationMapping | ParentLocationMapping | - | - |

**Returns**: `void`


##### getParentLocationMapping() → ParentLocationMapping

**Returns**: `ParentLocationMapping`


##### getParentLocation() → AddressLevel

**Returns**: `AddressLevel`


##### getParentLocationMapping() → return

**Returns**: `return`


##### getLineage() → String

**Returns**: `String`


##### setLineage(lineage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String | - | - |

**Returns**: `void`


##### getParentTypeId() → Long

**Returns**: `Long`


##### getTypeId() → Long

**Returns**: `Long`


##### getLocationProperties() → ObservationCollection

**Returns**: `ObservationCollection`


##### setLocationProperties(locationProperties: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationProperties | ObservationCollection | - | - |

**Returns**: `void`


##### getGpsCoordinates() → Point

**Returns**: `Point`


##### setGpsCoordinates(gpsCoordinates: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gpsCoordinates | Point | - | - |

**Returns**: `void`


##### getLegacyId() → String

**Returns**: `String`


##### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`


##### addChild(addressLevel: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `void`


##### getTitle() → String

**Returns**: `String`


##### getParentLocation() → AddressLevelProjection

**Returns**: `AddressLevelProjection`


##### calculateLineage() → void

**Returns**: `void`


##### getLineageAddressIds() → List<Long>

**Returns**: `List<Long>`




## Functions

### getTitle() → String

**Returns**: `String`



### setTitle(title: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |

**Returns**: `void`



### getLevel() → Double

**Returns**: `Double`



### getParent() → AddressLevel

**Returns**: `AddressLevel`



### getParentId() → Long

**Returns**: `Long`



### getParentUuid() → String

**Returns**: `String`



### getTypeUuid() → String

**Returns**: `String`



### setParent(parent: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | AddressLevel | - | - |

**Returns**: `void`



### isTopLevel() → boolean

**Returns**: `boolean`



### getSubLocations() → Set<AddressLevel>

**Returns**: `Set<AddressLevel>`



### getNonVoidedSubLocations() → Set<AddressLevel>

**Returns**: `Set<AddressLevel>`



### setSubLocations(subLocations: Set<AddressLevel>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subLocations | Set<AddressLevel> | - | - |

**Returns**: `void`



### containsSubLocation(title: String, type: AddressLevelType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| type | AddressLevelType | - | - |

**Returns**: `boolean`



### containsSubLocationExcept(title: String, type: AddressLevelType, exclude: AddressLevel) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| type | AddressLevelType | - | - |
| exclude | AddressLevel | - | - |

**Returns**: `boolean`



### getCatchments() → Set<Catchment>

**Returns**: `Set<Catchment>`



### setCatchments(catchments: Set<Catchment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchments | Set<Catchment> | - | - |

**Returns**: `void`



### getType() → AddressLevelType

**Returns**: `AddressLevelType`



### setType(type: AddressLevelType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | AddressLevelType | - | - |

**Returns**: `void`



### getTypeString() → String

**Returns**: `String`



### addCatchment(catchment: Catchment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `void`



### removeCatchment(catchment: Catchment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `void`



### getParentLocationMappings() → Set<ParentLocationMapping>

**Returns**: `Set<ParentLocationMapping>`



### setParentLocationMappings(parentLocationMappings: Set<ParentLocationMapping>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentLocationMappings | Set<ParentLocationMapping> | - | - |

**Returns**: `void`



### getVirtualCatchments() → Set<Catchment>

**Returns**: `Set<Catchment>`



### setVirtualCatchments(virtualCatchments: Set<Catchment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| virtualCatchments | Set<Catchment> | - | - |

**Returns**: `void`



### setParentLocationMapping(parentLocationMapping: ParentLocationMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentLocationMapping | ParentLocationMapping | - | - |

**Returns**: `void`



### getParentLocationMapping() → ParentLocationMapping

**Returns**: `ParentLocationMapping`



### getParentLocation() → AddressLevel

**Returns**: `AddressLevel`



### getParentLocationMapping() → return

**Returns**: `return`



### getLineage() → String

**Returns**: `String`



### setLineage(lineage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lineage | String | - | - |

**Returns**: `void`



### getParentTypeId() → Long

**Returns**: `Long`



### getTypeId() → Long

**Returns**: `Long`



### getLocationProperties() → ObservationCollection

**Returns**: `ObservationCollection`



### setLocationProperties(locationProperties: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationProperties | ObservationCollection | - | - |

**Returns**: `void`



### getGpsCoordinates() → Point

**Returns**: `Point`



### setGpsCoordinates(gpsCoordinates: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gpsCoordinates | Point | - | - |

**Returns**: `void`



### getLegacyId() → String

**Returns**: `String`



### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`



### addChild(addressLevel: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `void`



### getTitle() → String

**Returns**: `String`



### getParentLocation() → AddressLevelProjection

**Returns**: `AddressLevelProjection`



### calculateLineage() → void

**Returns**: `void`



### getLineageAddressIds() → List<Long>

**Returns**: `List<Long>`


