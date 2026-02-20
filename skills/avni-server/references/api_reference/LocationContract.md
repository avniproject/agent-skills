# API Reference: LocationContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/LocationContract.java`

---

## Classes

### LocationContract

**Inherits from**: ReferenceDataContract

#### Methods

##### ObservationCollection() → new

**Returns**: `new`


##### LocationContract() → public

**Returns**: `public`


##### LocationContract(uuid: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `public`


##### LocationContract(title: String, typeUuid: String, parentUuid: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| typeUuid | String | - | - |
| parentUuid | String | - | - |

**Returns**: `public`


##### ReferenceDataContract() → new

**Returns**: `new`


##### getLevel() → Double

**Returns**: `Double`


##### setLevel(level: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| level | Double | - | - |

**Returns**: `void`


##### getType() → String

**Returns**: `String`


##### setType(type: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `void`


##### getParents() → List<LocationContract>

**Returns**: `List<LocationContract>`


##### setParents(parents: List<LocationContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parents | List<LocationContract> | - | - |

**Returns**: `void`


##### setParent(parent: ReferenceDataContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | ReferenceDataContract | - | - |

**Returns**: `void`


##### getOrganisationUUID() → String

**Returns**: `String`


##### setOrganisationUUID(organisationUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |

**Returns**: `void`


##### getParent() → ReferenceDataContract

**Returns**: `ReferenceDataContract`


##### getParents() → return

**Returns**: `return`


##### getAddressLevelTypeUUID() → String

**Returns**: `String`


##### setAddressLevelTypeUUID(addressLevelTypeUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelTypeUUID | String | - | - |

**Returns**: `void`


##### getLegacyId() → String

**Returns**: `String`


##### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`


##### getGpsCoordinates() → Point

**Returns**: `Point`


##### setGpsCoordinates(gpsCoordinates: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gpsCoordinates | Point | - | - |

**Returns**: `void`


##### getLocationProperties() → ObservationCollection

**Returns**: `ObservationCollection`


##### setLocationProperties(locationProperties: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationProperties | ObservationCollection | - | - |

**Returns**: `void`


##### fromAddressLevel(addressLevel: AddressLevel) → LocationContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `LocationContract`


##### LocationContract() → new

**Returns**: `new`


##### ReferenceDataContract() → new

**Returns**: `new`




## Functions

### ObservationCollection() → new

**Returns**: `new`



### LocationContract() → public

**Returns**: `public`



### LocationContract(uuid: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `public`



### LocationContract(title: String, typeUuid: String, parentUuid: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| typeUuid | String | - | - |
| parentUuid | String | - | - |

**Returns**: `public`



### ReferenceDataContract() → new

**Returns**: `new`



### getLevel() → Double

**Returns**: `Double`



### setLevel(level: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| level | Double | - | - |

**Returns**: `void`



### getType() → String

**Returns**: `String`



### setType(type: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `void`



### getParents() → List<LocationContract>

**Returns**: `List<LocationContract>`



### setParents(parents: List<LocationContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parents | List<LocationContract> | - | - |

**Returns**: `void`



### setParent(parent: ReferenceDataContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | ReferenceDataContract | - | - |

**Returns**: `void`



### getOrganisationUUID() → String

**Returns**: `String`



### setOrganisationUUID(organisationUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |

**Returns**: `void`



### getParent() → ReferenceDataContract

**Returns**: `ReferenceDataContract`



### getParents() → return

**Returns**: `return`



### getAddressLevelTypeUUID() → String

**Returns**: `String`



### setAddressLevelTypeUUID(addressLevelTypeUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelTypeUUID | String | - | - |

**Returns**: `void`



### getLegacyId() → String

**Returns**: `String`



### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`



### getGpsCoordinates() → Point

**Returns**: `Point`



### setGpsCoordinates(gpsCoordinates: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gpsCoordinates | Point | - | - |

**Returns**: `void`



### getLocationProperties() → ObservationCollection

**Returns**: `ObservationCollection`



### setLocationProperties(locationProperties: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationProperties | ObservationCollection | - | - |

**Returns**: `void`



### fromAddressLevel(addressLevel: AddressLevel) → LocationContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `LocationContract`



### LocationContract() → new

**Returns**: `new`



### ReferenceDataContract() → new

**Returns**: `new`


