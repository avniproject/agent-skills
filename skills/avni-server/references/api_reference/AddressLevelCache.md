# API Reference: AddressLevelCache.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/AddressLevelCache.java`

---

## Classes

### AddressLevelCache

**Inherits from**: RoleSwitchableRepository

#### Methods

##### AddressLevelCache(entityManager: EntityManager, locationRepository: LocationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| locationRepository | LocationRepository | - | - |

**Returns**: `public`


##### getAddressLevelsForCatchment(catchment: Catchment) → List<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `List<CatchmentAddressProjection>`


##### getAddressLevelsForCatchmentAndMatchingAddressLevelTypeIds(catchment: Catchment, matchingAddressLevelTypeIds: List<Long>) → List<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| matchingAddressLevelTypeIds | List<Long> | - | - |

**Returns**: `List<CatchmentAddressProjection>`




## Functions

### AddressLevelCache(entityManager: EntityManager, locationRepository: LocationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| locationRepository | LocationRepository | - | - |

**Returns**: `public`



### getAddressLevelsForCatchment(catchment: Catchment) → List<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `List<CatchmentAddressProjection>`



### getAddressLevelsForCatchmentAndMatchingAddressLevelTypeIds(catchment: Catchment, matchingAddressLevelTypeIds: List<Long>) → List<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| matchingAddressLevelTypeIds | List<Long> | - | - |

**Returns**: `List<CatchmentAddressProjection>`


