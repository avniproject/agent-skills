# API Reference: CatchmentService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/CatchmentService.java`

---

## Classes

### CatchmentService

**Inherits from**: RoleSwitchableRepository

#### Methods

##### CatchmentService(entityManager: EntityManager, catchmentRepository: CatchmentRepository, locationRepository: LocationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| catchmentRepository | CatchmentRepository | - | - |
| locationRepository | LocationRepository | - | - |

**Returns**: `public`


##### createOrUpdate(catchmentName: String, location: AddressLevel) → Catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentName | String | - | - |
| location | AddressLevel | - | - |

**Returns**: `Catchment`


##### Catchment() → new

**Returns**: `new`


##### saveAllCatchments(catchmentsContract: CatchmentsContract, organisation: Organisation) → List<Catchment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentsContract | CatchmentsContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `List<Catchment>`


##### BuilderException(%s: String.format("Catchment, unknown: catchmentRequest.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Catchment | - | - |
| unknown | catchmentRequest.getName( | - | - |

**Returns**: `new`


##### addAddressLevels(catchmentRequest: CatchmentContract, catchment: Catchment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRequest | CatchmentContract | - | - |
| catchment | Catchment | - | - |

**Returns**: `void`


##### BuilderException(with: String.format("AddressLevel, unknown: addressLevelRequest.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("AddressLevel | - | - |
| unknown | addressLevelRequest.getUuid( | - | - |

**Returns**: `new`


##### removeObsoleteAddressLevelsFromCatchment(catchment: Catchment, catchmentRequest: CatchmentContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| catchmentRequest | CatchmentContract | - | - |

**Returns**: `void`


##### createCatchment(catchmentContract: CatchmentContract) → Catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentContract | CatchmentContract | - | - |

**Returns**: `Catchment`


##### Catchment() → new

**Returns**: `new`


##### catchmentExistsWithSameNameAndDifferentUUID(catchmentRequest: CatchmentContract) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRequest | CatchmentContract | - | - |

**Returns**: `boolean`


##### hasLocation(addressLevel: AddressLevel, catchment: Catchment) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |
| catchment | Catchment | - | - |

**Returns**: `boolean`




## Functions

### CatchmentService(entityManager: EntityManager, catchmentRepository: CatchmentRepository, locationRepository: LocationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |
| catchmentRepository | CatchmentRepository | - | - |
| locationRepository | LocationRepository | - | - |

**Returns**: `public`



### createOrUpdate(catchmentName: String, location: AddressLevel) → Catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentName | String | - | - |
| location | AddressLevel | - | - |

**Returns**: `Catchment`



### Catchment() → new

**Returns**: `new`



### saveAllCatchments(catchmentsContract: CatchmentsContract, organisation: Organisation) → List<Catchment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentsContract | CatchmentsContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `List<Catchment>`



### BuilderException(%s: String.format("Catchment, unknown: catchmentRequest.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Catchment | - | - |
| unknown | catchmentRequest.getName( | - | - |

**Returns**: `new`



### addAddressLevels(catchmentRequest: CatchmentContract, catchment: Catchment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRequest | CatchmentContract | - | - |
| catchment | Catchment | - | - |

**Returns**: `void`



### BuilderException(with: String.format("AddressLevel, unknown: addressLevelRequest.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("AddressLevel | - | - |
| unknown | addressLevelRequest.getUuid( | - | - |

**Returns**: `new`



### removeObsoleteAddressLevelsFromCatchment(catchment: Catchment, catchmentRequest: CatchmentContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| catchmentRequest | CatchmentContract | - | - |

**Returns**: `void`



### createCatchment(catchmentContract: CatchmentContract) → Catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentContract | CatchmentContract | - | - |

**Returns**: `Catchment`



### Catchment() → new

**Returns**: `new`



### catchmentExistsWithSameNameAndDifferentUUID(catchmentRequest: CatchmentContract) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRequest | CatchmentContract | - | - |

**Returns**: `boolean`



### hasLocation(addressLevel: AddressLevel, catchment: Catchment) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |
| catchment | Catchment | - | - |

**Returns**: `boolean`


