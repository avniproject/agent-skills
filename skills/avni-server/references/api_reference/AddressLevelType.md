# API Reference: AddressLevelType.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/AddressLevelType.java`

---

## Classes

### AddressLevelType

**Inherits from**: OrganisationAwareEntity

#### Methods

##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getLevel() → Double

**Returns**: `Double`


##### setLevel(level: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| level | Double | - | - |

**Returns**: `void`


##### getParent() → AddressLevelType

**Returns**: `AddressLevelType`


##### setParent(parent: AddressLevelType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | AddressLevelType | - | - |

**Returns**: `void`


##### getParentId() → Long

**Returns**: `Long`


##### getSubTypes() → Set<AddressLevelType>

**Returns**: `Set<AddressLevelType>`


##### setSubTypes(subTypes: Set<AddressLevelType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subTypes | Set<AddressLevelType> | - | - |

**Returns**: `void`


##### getAddressLevels() → Set<AddressLevel>

**Returns**: `Set<AddressLevel>`


##### setAddressLevels(addressLevels: Set<AddressLevel>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevels | Set<AddressLevel> | - | - |

**Returns**: `void`


##### addChildAddressLevelType(addressLevelType: AddressLevelType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelType | AddressLevelType | - | - |

**Returns**: `void`


##### isVoidable() → Boolean

**Returns**: `Boolean`


##### getName() → String

**Returns**: `String`


##### toString() → String

**Returns**: `String`




## Functions

### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getLevel() → Double

**Returns**: `Double`



### setLevel(level: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| level | Double | - | - |

**Returns**: `void`



### getParent() → AddressLevelType

**Returns**: `AddressLevelType`



### setParent(parent: AddressLevelType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | AddressLevelType | - | - |

**Returns**: `void`



### getParentId() → Long

**Returns**: `Long`



### getSubTypes() → Set<AddressLevelType>

**Returns**: `Set<AddressLevelType>`



### setSubTypes(subTypes: Set<AddressLevelType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subTypes | Set<AddressLevelType> | - | - |

**Returns**: `void`



### getAddressLevels() → Set<AddressLevel>

**Returns**: `Set<AddressLevel>`



### setAddressLevels(addressLevels: Set<AddressLevel>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevels | Set<AddressLevel> | - | - |

**Returns**: `void`



### addChildAddressLevelType(addressLevelType: AddressLevelType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelType | AddressLevelType | - | - |

**Returns**: `void`



### isVoidable() → Boolean

**Returns**: `Boolean`



### getName() → String

**Returns**: `String`



### toString() → String

**Returns**: `String`


