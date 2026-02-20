# API Reference: LocationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/LocationService.java`

---

## Functions

### LocationService(locationRepository: LocationRepository, addressLevelTypeRepository: AddressLevelTypeRepository, organisationRepository: OrganisationRepository, locationMappingRepository: LocationMappingRepository, resetSyncService: ResetSyncService, organisationConfigService: OrganisationConfigService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRepository | LocationRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| locationMappingRepository | LocationMappingRepository | - | - |
| resetSyncService | ResetSyncService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |

**Returns**: `public`



### saveAll(locationContracts: List<LocationContract>) → List<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationContracts | List<LocationContract> | - | - |

**Returns**: `List<AddressLevel>`



### save(locationContract: LocationContract) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationContract | LocationContract | - | - |

**Returns**: `AddressLevel`



### saveLocation(unknown: locationContract, unknown: type) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationContract | - | - |
| unknown | type | - | - |

**Returns**: `return`



### setParent(locationContract: LocationContract, addressLevelType: AddressLevelType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationContract | LocationContract | - | - |
| addressLevelType | AddressLevelType | - | - |

**Returns**: `void`



### getTypeByUuidOrName(locationContract: LocationContract) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationContract | LocationContract | - | - |

**Returns**: `AddressLevelType`



### createType(locationContract: LocationContract) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationContract | LocationContract | - | - |

**Returns**: `AddressLevelType`



### AddressLevelType() → new

**Returns**: `new`



### saveLocation(contract: LocationContract, type: AddressLevelType) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contract | LocationContract | - | - |
| type | AddressLevelType | - | - |

**Returns**: `AddressLevel`



### LocationBuilder(unknown: locationRepository.findByUuid(contract.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationRepository.findByUuid(contract.getUuid( | - | - |

**Returns**: `new`



### BuilderException(with: String.format("Location, unknown: contract.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Location | - | - |
| unknown | contract.getName( | - | - |

**Returns**: `new`



### BuilderException(to: String.format("Unable, unknown: level='%s', unknown: orgUUID='%s', '%s'": ..}:, unknown: contract.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | String.format("Unable | - | - |
| unknown | level='%s' | - | - |
| unknown | orgUUID='%s' | - | - |
| '%s'" | ..}: | - | - |
| unknown | contract.getName( | - | - |

**Returns**: `new`



### BuilderException(to: String.format("Unable, unknown: location.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | String.format("Unable | - | - |
| unknown | location.getId( | - | - |

**Returns**: `new`



### updateOrganisationIfNeeded(location: AddressLevel, LocationContract: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |
| LocationContract | @NotNull | - | - |

**Returns**: `void`



### RuntimeException(not: String.format("Organisation, unknown: organisationUuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Organisation | - | - |
| unknown | organisationUuid | - | - |

**Returns**: `new`



### update(locationEditContract: LocationEditContract, id: Long) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationEditContract | LocationEditContract | - | - |
| id | Long | - | - |

**Returns**: `AddressLevel`



### RuntimeException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`



### RuntimeException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`



### RuntimeException('title': "Empty) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 'title' | "Empty | - | - |

**Returns**: `new`



### RuntimeException(with: "Location) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | "Location | - | - |

**Returns**: `new`



### RuntimeException(unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | message | - | - |

**Returns**: `new`



### updateParent(location: AddressLevel, newParent: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |
| newParent | AddressLevel | - | - |

**Returns**: `void`



### updateParent(location: AddressLevel, newParentId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |
| newParentId | Long | - | - |

**Returns**: `void`



### updateLocationMapping(location: AddressLevel, newParent: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |
| newParent | AddressLevel | - | - |

**Returns**: `void`



### updateLineage(location: AddressLevel, parentLineage: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |
| parentLineage | String | - | - |

**Returns**: `String`



### updateDescendantLocationLineage(children: List<AddressLevel>, parentLineage: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| children | List<AddressLevel> | - | - |
| parentLineage | String | - | - |

**Returns**: `void`



### titleIsValid(location: AddressLevel, title: String, type: AddressLevelType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |
| title | String | - | - |
| type | AddressLevelType | - | - |

**Returns**: `boolean`



### titleIsValid(location: AddressLevel, parent: AddressLevel, title: String, type: AddressLevelType) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | AddressLevel | - | - |
| parent | AddressLevel | - | - |
| title | String | - | - |
| type | AddressLevelType | - | - |

**Returns**: `boolean`



### findAddressLevelTypeByName(name: String, excludeUuid: String) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| excludeUuid | String | - | - |

**Returns**: `AddressLevelType`



### createAddressLevelType(organisation: Organisation, contract: AddressLevelTypeContract) → AddressLevelType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| contract | AddressLevelTypeContract | - | - |

**Returns**: `AddressLevelType`



### AddressLevelType() → new

**Returns**: `new`



### ValidationException(Location: String.format("Invalid, unknown: contract.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | String.format("Invalid | - | - |
| unknown | contract.getName( | - | - |

**Returns**: `new`



### ValidationException(Location: String.format("Invalid, unknown: contract.getLevel() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Location | String.format("Invalid | - | - |
| unknown | contract.getLevel( | - | - |

**Returns**: `new`



### getAllWithChildrenForUUIDs(locationUUIDs: List<String>) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUUIDs | List<String> | - | - |

**Returns**: `List<Long>`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, typeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| typeUUID | String | - | - |

**Returns**: `boolean`



### isChangedByCatchment(unknown: user, unknown: lastModifiedDateTime, unknown: SyncEntityName.Location) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |
| unknown | lastModifiedDateTime | - | - |
| unknown | SyncEntityName.Location | - | - |

**Returns**: `return`



### repository() → OperatingIndividualScopeAwareRepository<AddressLevel>

**Returns**: `OperatingIndividualScopeAwareRepository<AddressLevel>`



### getObservationValueForUpload(formElement: FormElement, answerValue: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| answerValue | String | - | - |

**Returns**: `Object`



### find(searchRequest: LocationSearchRequest) → Page<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | LocationSearchRequest | - | - |

**Returns**: `Page<LocationProjection>`



### getParents(uuid: String, maxLevelTypeId: Long) → List<LocationProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| maxLevelTypeId | Long | - | - |

**Returns**: `List<LocationProjection>`



### createAddressLevelTypes(organisation: Organisation, addressLevelTypeContracts: AddressLevelTypeContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| addressLevelTypeContracts | AddressLevelTypeContract[] | - | - |

**Returns**: `void`



### ValidationException(location: String.format("Duplicate, unknown: name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| location | String.format("Duplicate | - | - |
| unknown | name | - | - |

**Returns**: `new`



### database(the: excluding) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| the | excluding | - | - |

**Returns**: `the`



### ValidationException(type: String.format("Location, unknown: name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String.format("Location | - | - |
| unknown | name | - | - |

**Returns**: `new`


