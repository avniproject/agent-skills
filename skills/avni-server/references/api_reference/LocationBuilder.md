# API Reference: LocationBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/builder/LocationBuilder.java`

---

## Functions

### LocationBuilder(existingEntity: AddressLevel, type: AddressLevelType) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingEntity | AddressLevel | - | - |
| type | AddressLevelType | - | - |

**Returns**: `public`



### AddressLevel() → new

**Returns**: `new`



### copy(locationRequest: LocationContract) → LocationBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRequest | LocationContract | - | - |

**Returns**: `LocationBuilder`



### withParentLocation(locationRequest: LocationContract) → LocationBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRequest | LocationContract | - | - |

**Returns**: `LocationBuilder`



### fetchOrCreateLocationMapping(existing: AddressLevel, parentLocationContract: ReferenceDataContract) → ParentLocationMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existing | AddressLevel | - | - |
| parentLocationContract | ReferenceDataContract | - | - |

**Returns**: `ParentLocationMapping`



### ParentLocationMapping() → new

**Returns**: `new`



### ValidationException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`



### cleanAddressTitle(address: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| address | String | - | - |

**Returns**: `String`


