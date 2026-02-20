# API Reference: LocationRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/LocationRepository.java`

---

## Functions

### in(unknown: :ids) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :ids | - | - |

**Returns**: `id`



### findByIdIn(ids: Long[]) → List<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ids | Long[] | - | - |

**Returns**: `List<LocationProjection>`



### getSyncResults(catchmentId: long, lastModifiedDateTime: Date, now: Date, organisationId: long, pageable: Pageable) → Page<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | long | - | - |
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |
| organisationId | long | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<AddressLevel>`



### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`



### getChangedRowCount(catchmentId: long, lastModifiedDateTime: Date) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | long | - | - |
| lastModifiedDateTime | Date | - | - |

**Returns**: `Long`



### findByTitleAndCatchmentsUuid(title: String, uuid: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| uuid | String | - | - |

**Returns**: `AddressLevel`



### lower(unknown: al.title) → or

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | al.title | - | - |

**Returns**: `or`



### lower(unknown: concat('%', unknown: :title, unknown: '%') → like

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | concat('%' | - | - |
| unknown | :title | - | - |
| unknown | '%' | - | - |

**Returns**: `like`



### findLocationProjectionByTitleIgnoreCase(title: String, pageable: Pageable) → Page<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<LocationProjection>`



### findLocationProjectionByTitleIgnoreCaseAndTypeId(title: String, typeId: Integer, pageable: Pageable) → Page<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| typeId | Integer | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<LocationProjection>`



### findLocationProjectionByTitleIgnoreCaseAndTypeIdAsList(title: String, typeId: Integer) → List<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| typeId | Integer | - | - |

**Returns**: `List<LocationProjection>`



### findLocationProjectionByTitleIgnoreCaseAndTypeIdAndParentId(title: String, typeId: int, parentId: Integer, pageable: Pageable) → Page<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| typeId | int | - | - |
| parentId | Integer | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<LocationProjection>`



### findByTitleIgnoreCase(title: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |

**Returns**: `AddressLevel`



### findByTitleIgnoreCaseAndTypeAndParentIsNull(title: String, addressLevelType: AddressLevelType) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| addressLevelType | AddressLevelType | - | - |

**Returns**: `AddressLevel`



### findByTitleIgnoreCaseAndTypeIn(title: String, type: Collection<AddressLevelType>) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| type | Collection<AddressLevelType> | - | - |

**Returns**: `AddressLevel`



### findByCatchments(catchment: Catchment) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `List<AddressLevel>`



### findByLastModifiedDateTimeAfterAndTypeIn(lastModifiedDateTime: Date, AddressLevelType>: Collection<@NotNull, pageable: Pageable) → Page<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| AddressLevelType> | Collection<@NotNull | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<AddressLevel>`



### existsByLastModifiedDateTimeAfterAndTypeIn(lastModifiedDateTime: Date, AddressLevelType>: Collection<@NotNull) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| AddressLevelType> | Collection<@NotNull | - | - |

**Returns**: `boolean`



### getSyncResults(syncParameters: SyncParameters) → Page<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Page<AddressLevel>`



### getSyncResults(unknown: syncParameters.getCatchment() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncParameters.getCatchment( | - | - |

**Returns**: `return`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### getChangedRowCount(unknown: syncParameters.getCatchment() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncParameters.getCatchment( | - | - |

**Returns**: `return`



### findByName(name: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `AddressLevel`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `AddressLevel`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### count(unknown: *) → SELECT

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `SELECT`



### getAddressLevelsByLquery(unknown: @Param("lquery") → Page<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lquery" | - | - |

**Returns**: `Page<AddressLevel>`



### findByParentAndTypeAndTitleIgnoreCaseAndIsVoidedFalse(parent: AddressLevel, addressLevelType: AddressLevelType, title: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | AddressLevel | - | - |
| addressLevelType | AddressLevelType | - | - |
| title | String | - | - |

**Returns**: `AddressLevel`



### findChildLocation(parent: AddressLevel, addressLevelType: AddressLevelType, title: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | AddressLevel | - | - |
| addressLevelType | AddressLevelType | - | - |
| title | String | - | - |

**Returns**: `AddressLevel`



### where(=?1: a.uuid) → a

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| =?1 | a.uuid | - | - |

**Returns**: `a`



### findByLegacyIdOrUuidAndOrgId(id: String, organisationId: Long) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |
| organisationId | Long | - | - |

**Returns**: `AddressLevel`



### findByLegacyIdOrUuid(id: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `AddressLevel`



### findLocationByTitleTypeAndParentName(title: String, type: String, parentName: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| type | String | - | - |
| parentName | String | - | - |

**Returns**: `AddressLevel`



### findChildLocation(title: String, type: String, parentName: String) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| type | String | - | - |
| parentName | String | - | - |

**Returns**: `AddressLevel`



### findByTitleIgnoreCaseAndTypeNameIgnoreCaseAndIsVoidedFalse(title: String, type: String) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| type | String | - | - |

**Returns**: `List<AddressLevel>`



### findLocation(title: String, type: String) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| type | String | - | - |

**Returns**: `List<AddressLevel>`



### findByIsVoidedFalseAndParent_Id(unknown: @Param("parentId") → Page<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("parentId" | - | - |

**Returns**: `Page<AddressLevel>`



### findByType_IdAndTitleIgnoreCaseStartingWithAndIsVoidedFalseOrderByTitleAsc(unknown: @Param("typeId") → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("typeId" | - | - |

**Returns**: `List<AddressLevel>`



### getAllNames() → List<String>

**Returns**: `List<String>`



### lower(unknown: title_lineage) → where

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | title_lineage | - | - |

**Returns**: `where`



### getAddressIdByLineage(locationTitleLineage: String) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationTitleLineage | String | - | - |

**Returns**: `Long`



### findByTitleLineageIgnoreCase(locationTitleLineage: String) → Optional<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationTitleLineage | String | - | - |

**Returns**: `Optional<AddressLevel>`



### getAllByIsVoidedFalse() → List<AddressLevel>

**Returns**: `List<AddressLevel>`



### findAllByParent(parent: AddressLevel) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | AddressLevel | - | - |

**Returns**: `List<AddressLevel>`



### findByUuidIn(addressLevelUUIDs: List<String>) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelUUIDs | List<String> | - | - |

**Returns**: `List<AddressLevel>`



### findByIsVoidedFalseAndTitleIgnoreCaseContains(title: String) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |

**Returns**: `List<AddressLevel>`



### getAllChildrenLocationsIds(unknown: @Param("lquery") → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lquery" | - | - |

**Returns**: `List<Long>`



### getAllChildLocations(unknown: @Param("lquery") → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lquery" | - | - |

**Returns**: `List<AddressLevel>`



### row_number() → select

**Returns**: `select`



### getCatchmentAddressesForCatchmentId(unknown: @Param("catchmentId") → List<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("catchmentId" | - | - |

**Returns**: `List<CatchmentAddressProjection>`



### in(unknown: :typeIds) → type_id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :typeIds | - | - |

**Returns**: `type_id`



### getCatchmentAddressesForCatchmentIdAndLocationTypeId(unknown: @Param("catchmentId") → List<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("catchmentId" | - | - |

**Returns**: `List<CatchmentAddressProjection>`



### in(unknown: :addressLevelIds) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :addressLevelIds | - | - |

**Returns**: `id`



### getCatchmentAddressesForAddressLevelIds(unknown: @Param("addressLevelIds") → List<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("addressLevelIds" | - | - |

**Returns**: `List<CatchmentAddressProjection>`



### getCatchmentAddressForCatchmentIdAndAddressLevelId(unknown: @Param("addressLevelId") → List<CatchmentAddressProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("addressLevelId" | - | - |

**Returns**: `List<CatchmentAddressProjection>`



### title_lineage_locations_function(unknown: :addressId) → from

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :addressId | - | - |

**Returns**: `from`



### getTitleLineageById(addressId: Long) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressId | Long | - | - |

**Returns**: `String`



### findNonVoidedLocations(pageable: Pageable) → Page<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<LocationProjection>`



### findNonVoidedLocationsByTypeId(typeId: Long) → List<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| typeId | Long | - | - |

**Returns**: `List<LocationProjection>`



### findNonVoidedLocationsByUuid(uuid: String) → LocationProjection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `LocationProjection`



### getParentsWithMaxLevelTypeId(uuid: String, maxLevelTypeId: Long) → List<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| maxLevelTypeId | Long | - | - |

**Returns**: `List<LocationProjection>`



### getParents(uuid: String) → List<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `List<LocationProjection>`



### findByTitleAndType(title: String, lowestAddressLevelType: AddressLevelType, pageable: Pageable) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| lowestAddressLevelType | AddressLevelType | - | - |
| pageable | Pageable | - | - |

**Returns**: `List<AddressLevel>`



### findByTitleIgnoreCaseAndType(title: String, lowestAddressLevelType: AddressLevelType, pageable: Pageable) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| lowestAddressLevelType | AddressLevelType | - | - |
| pageable | Pageable | - | - |

**Returns**: `List<AddressLevel>`



### findByTitleAndTypeAndIsVoidedFalse(title: String, addressLevelType: AddressLevelType) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | String | - | - |
| addressLevelType | AddressLevelType | - | - |

**Returns**: `AddressLevel`



### findAllByIdIn(addressIds: List<Long>) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressIds | List<Long> | - | - |

**Returns**: `List<AddressLevel>`



### deleteAll() → void

**Returns**: `void`



### UnsupportedOperationException() → new

**Returns**: `new`



### deleteAllInBatch() → void

**Returns**: `void`


