# API Reference: AddressLevelService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/AddressLevelService.java`

---

## Classes

### AddressLevelService

**Inherits from**: (none)

#### Methods

##### AddressLevelService(locationRepository: LocationRepository, addressLevelTypeRepository: AddressLevelTypeRepository, organisationConfigService: OrganisationConfigService, addressLevelCache: AddressLevelCache, locationHierarchyService: LocationHierarchyService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRepository | LocationRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| addressLevelCache | AddressLevelCache | - | - |
| locationHierarchyService | LocationHierarchyService | - | - |

**Returns**: `public`


##### getAddressLevelsByCatchmentAndSubjectType(catchment: Catchment, subjectType: SubjectType) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `List<Long>`


##### filterByCatchmentAndSubjectType(unknown: catchment, unknown: subjectType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | catchment | - | - |
| unknown | subjectType | - | - |

**Returns**: `return`


##### filterByCatchmentAndSubjectType(catchment: Catchment, subjectType: SubjectType) → Stream<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `Stream<CatchmentAddressProjection>`


##### getCustomRegistrationSetting(subjectType: SubjectType) → Optional<SubjectTypeSetting>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `Optional<SubjectTypeSetting>`


##### getRegistrationLocationType(subjectType: SubjectType) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `AddressLevelType`


##### getAllLocations() → List<AddressLevelContract>

**Returns**: `List<AddressLevelContract>`


##### AddressLevelContract() → new

**Returns**: `new`


##### getAllAddressLevelTypeNames() → List<String>

**Returns**: `List<String>`


##### getAllRegistrationAddressIdsBySubjectType(catchment: Catchment, subjectType: SubjectType) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `List<Long>`


##### getAddressLevelsByCatchmentAndSubjectType(unknown: catchment, unknown: subjectType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | catchment | - | - |
| unknown | subjectType | - | - |

**Returns**: `return`


##### getTitleLineage(location: AddressLevel) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |

**Returns**: `String`


##### addTitleLineageToLocation(locationProjections: List<LocationProjection>) → List<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationProjections | List<LocationProjection> | - | - |

**Returns**: `List<AddressLevelContractWeb>`


##### addTitleLineageToLocation(locationProjections: Page<LocationProjection>) → Page<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationProjections | Page<LocationProjection> | - | - |

**Returns**: `Page<AddressLevelContractWeb>`


##### getTitleLineages(addressIds: List<Long>) → Map<Long, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressIds | List<Long> | - | - |

**Returns**: `Map<Long, String>`


##### AssertionError(not: "Address) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Address | - | - |

**Returns**: `new`


##### findByAddressMap(unknown: Map<String, addressMap: String>) → Optional<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| addressMap | String> | - | - |

**Returns**: `Optional<AddressLevel>`


##### getImpliedRegistrationLocationType() → AddressLevelType

**Returns**: `AddressLevelType`




## Functions

### AddressLevelService(locationRepository: LocationRepository, addressLevelTypeRepository: AddressLevelTypeRepository, organisationConfigService: OrganisationConfigService, addressLevelCache: AddressLevelCache, locationHierarchyService: LocationHierarchyService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRepository | LocationRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| addressLevelCache | AddressLevelCache | - | - |
| locationHierarchyService | LocationHierarchyService | - | - |

**Returns**: `public`



### getAddressLevelsByCatchmentAndSubjectType(catchment: Catchment, subjectType: SubjectType) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `List<Long>`



### filterByCatchmentAndSubjectType(unknown: catchment, unknown: subjectType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | catchment | - | - |
| unknown | subjectType | - | - |

**Returns**: `return`



### filterByCatchmentAndSubjectType(catchment: Catchment, subjectType: SubjectType) → Stream<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `Stream<CatchmentAddressProjection>`



### getCustomRegistrationSetting(subjectType: SubjectType) → Optional<SubjectTypeSetting>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `Optional<SubjectTypeSetting>`



### getRegistrationLocationType(subjectType: SubjectType) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `AddressLevelType`



### getAllLocations() → List<AddressLevelContract>

**Returns**: `List<AddressLevelContract>`



### AddressLevelContract() → new

**Returns**: `new`



### getAllAddressLevelTypeNames() → List<String>

**Returns**: `List<String>`



### getAllRegistrationAddressIdsBySubjectType(catchment: Catchment, subjectType: SubjectType) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `List<Long>`



### getAddressLevelsByCatchmentAndSubjectType(unknown: catchment, unknown: subjectType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | catchment | - | - |
| unknown | subjectType | - | - |

**Returns**: `return`



### getTitleLineage(location: AddressLevel) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |

**Returns**: `String`



### addTitleLineageToLocation(locationProjections: List<LocationProjection>) → List<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationProjections | List<LocationProjection> | - | - |

**Returns**: `List<AddressLevelContractWeb>`



### addTitleLineageToLocation(locationProjections: Page<LocationProjection>) → Page<AddressLevelContractWeb>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationProjections | Page<LocationProjection> | - | - |

**Returns**: `Page<AddressLevelContractWeb>`



### getTitleLineages(addressIds: List<Long>) → Map<Long, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressIds | List<Long> | - | - |

**Returns**: `Map<Long, String>`



### AssertionError(not: "Address) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Address | - | - |

**Returns**: `new`



### findByAddressMap(unknown: Map<String, addressMap: String>) → Optional<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| addressMap | String> | - | - |

**Returns**: `Optional<AddressLevel>`



### getImpliedRegistrationLocationType() → AddressLevelType

**Returns**: `AddressLevelType`


