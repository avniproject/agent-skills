# API Reference: AddressLevelCreatorTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/importer/batch/csv/creator/AddressLevelCreatorTest.java`

---

## Classes

### AddressLevelCreatorTest

**Inherits from**: (none)

#### Methods

##### setup() → void

**Returns**: `void`


##### AddressLevelType() → new

**Returns**: `new`


##### AddressLevelType() → new

**Returns**: `new`


##### AddressLevelCreator(unknown: locationRepository, unknown: addressLevelTypeRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationRepository | - | - |
| unknown | addressLevelTypeRepository | - | - |

**Returns**: `new`


##### shouldFindSingleLocationIfOnlyOneFound() → void

**Returns**: `void`


##### Row(String[]{"GP"}: new, String[]{"gp1"}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String[]{"GP"} | new | - | - |
| String[]{"gp1"} | new | - | - |

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelTypes(unknown: child, unknown: parent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | child | - | - |
| unknown | parent | - | - |

**Returns**: `new`


##### ifNoAddressFound() → void

**Returns**: `void`


##### Row(String[]{"GP"}: new, String[]{"non-existentAddress"}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String[]{"GP"} | new | - | - |
| String[]{"non-existentAddress"} | new | - | - |

**Returns**: `new`


##### AddressLevelTypes(unknown: child, unknown: parent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | child | - | - |
| unknown | parent | - | - |

**Returns**: `new`


##### shouldFetchFromLineageIfMoreThanOneAddressFound() → void

**Returns**: `void`


##### Row(String[]{"Block": new, unknown: "GP"}, String[]{"aParent": new, unknown: "child"}) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String[]{"Block" | new | - | - |
| unknown | "GP"} | - | - |
| String[]{"aParent" | new | - | - |
| unknown | "child"} | - | - |

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelTypes(unknown: child, unknown: parent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | child | - | - |
| unknown | parent | - | - |

**Returns**: `new`


##### shouldFetchFromLineageIfMoreThanOneAddressFoundAndValueForLowestIsEmpty() → void

**Returns**: `void`


##### Row(String[]{"Block": new, unknown: "GP"}, String[]{"aParent": new, "}: ") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String[]{"Block" | new | - | - |
| unknown | "GP"} | - | - |
| String[]{"aParent" | new | - | - |
| "} | " | - | - |

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### AddressLevelTypes(unknown: child, unknown: parent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | child | - | - |
| unknown | parent | - | - |

**Returns**: `new`




## Functions

### setup() → void

**Returns**: `void`



### AddressLevelType() → new

**Returns**: `new`



### AddressLevelType() → new

**Returns**: `new`



### AddressLevelCreator(unknown: locationRepository, unknown: addressLevelTypeRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationRepository | - | - |
| unknown | addressLevelTypeRepository | - | - |

**Returns**: `new`



### shouldFindSingleLocationIfOnlyOneFound() → void

**Returns**: `void`



### Row(String[]{"GP"}: new, String[]{"gp1"}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String[]{"GP"} | new | - | - |
| String[]{"gp1"} | new | - | - |

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelTypes(unknown: child, unknown: parent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | child | - | - |
| unknown | parent | - | - |

**Returns**: `new`



### ifNoAddressFound() → void

**Returns**: `void`



### Row(String[]{"GP"}: new, String[]{"non-existentAddress"}: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String[]{"GP"} | new | - | - |
| String[]{"non-existentAddress"} | new | - | - |

**Returns**: `new`



### AddressLevelTypes(unknown: child, unknown: parent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | child | - | - |
| unknown | parent | - | - |

**Returns**: `new`



### shouldFetchFromLineageIfMoreThanOneAddressFound() → void

**Returns**: `void`



### Row(String[]{"Block": new, unknown: "GP"}, String[]{"aParent": new, unknown: "child"}) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String[]{"Block" | new | - | - |
| unknown | "GP"} | - | - |
| String[]{"aParent" | new | - | - |
| unknown | "child"} | - | - |

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelTypes(unknown: child, unknown: parent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | child | - | - |
| unknown | parent | - | - |

**Returns**: `new`



### shouldFetchFromLineageIfMoreThanOneAddressFoundAndValueForLowestIsEmpty() → void

**Returns**: `void`



### Row(String[]{"Block": new, unknown: "GP"}, String[]{"aParent": new, "}: ") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String[]{"Block" | new | - | - |
| unknown | "GP"} | - | - |
| String[]{"aParent" | new | - | - |
| "} | " | - | - |

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### AddressLevelTypes(unknown: child, unknown: parent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | child | - | - |
| unknown | parent | - | - |

**Returns**: `new`


