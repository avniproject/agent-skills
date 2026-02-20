# API Reference: ReportingController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ReportingController.java`

---

## Classes

### ReportingController

**Inherits from**: (none)

#### Methods

##### ReportingController(formMappingRepository: FormMappingRepository, avniReportRepository: AvniReportRepository, reportService: ReportService, formRepository: FormRepository, locationRepository: LocationRepository, userGroupRepository: UserGroupRepository, userRepository: UserRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| avniReportRepository | AvniReportRepository | - | - |
| reportService | ReportService | - | - |
| formRepository | FormRepository | - | - |
| locationRepository | LocationRepository | - | - |
| userGroupRepository | UserGroupRepository | - | - |
| userRepository | UserRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### getReportData(=: @RequestParam(value, =: required) → List<JsonObject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<JsonObject>`


##### BadRequestError(of: "One) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| of | "One | - | - |

**Returns**: `new`


##### EntityNotFoundException(mapping: String.format("Form, unknown: formMappingId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mapping | String.format("Form | - | - |
| unknown | formMappingId | - | - |

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### getRegistrationAggregate(=: @RequestParam(value, =: required) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### getUserWiseActivities(=: @RequestParam(value, =: required) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityResult>`


##### getUserWiseSyncFailures(=: @RequestParam(value, =: required) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityResult>`


##### getUserWiseDeviceModels(=: @RequestParam(value, =: required, =: defaultValue) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<AggregateReportResult>`


##### getUserWiseAppVersions(=: @RequestParam(value, =: required, =: defaultValue) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<AggregateReportResult>`


##### getUserDetails(=: @RequestParam(value, =: required, =: defaultValue) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<UserActivityResult>`


##### getChampionUsers(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`


##### getNonPerformingUsers(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`


##### getUsersCancellingMostVisits(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`


##### getCommonsUsersByLocationAndGroup(=: @RequestParam(value, =: required) → Set<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Set<Long>`


##### getLocations(addressIds: List<Long>) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressIds | List<Long> | - | - |

**Returns**: `List<Long>`


##### findLowestAddresses(selectedAddress: AddressLevel, allAddresses: List<AddressLevel>) → Stream<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selectedAddress | AddressLevel | - | - |
| allAddresses | List<AddressLevel> | - | - |

**Returns**: `Stream<AddressLevel>`




## Functions

### ReportingController(formMappingRepository: FormMappingRepository, avniReportRepository: AvniReportRepository, reportService: ReportService, formRepository: FormRepository, locationRepository: LocationRepository, userGroupRepository: UserGroupRepository, userRepository: UserRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| avniReportRepository | AvniReportRepository | - | - |
| reportService | ReportService | - | - |
| formRepository | FormRepository | - | - |
| locationRepository | LocationRepository | - | - |
| userGroupRepository | UserGroupRepository | - | - |
| userRepository | UserRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getReportData(=: @RequestParam(value, =: required) → List<JsonObject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<JsonObject>`



### BadRequestError(of: "One) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| of | "One | - | - |

**Returns**: `new`



### EntityNotFoundException(mapping: String.format("Form, unknown: formMappingId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mapping | String.format("Form | - | - |
| unknown | formMappingId | - | - |

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### getRegistrationAggregate(=: @RequestParam(value, =: required) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### getUserWiseActivities(=: @RequestParam(value, =: required) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityResult>`



### getUserWiseSyncFailures(=: @RequestParam(value, =: required) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityResult>`



### getUserWiseDeviceModels(=: @RequestParam(value, =: required, =: defaultValue) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<AggregateReportResult>`



### getUserWiseAppVersions(=: @RequestParam(value, =: required, =: defaultValue) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<AggregateReportResult>`



### getUserDetails(=: @RequestParam(value, =: required, =: defaultValue) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<UserActivityResult>`



### getChampionUsers(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`



### getNonPerformingUsers(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`



### getUsersCancellingMostVisits(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`



### getCommonsUsersByLocationAndGroup(=: @RequestParam(value, =: required) → Set<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Set<Long>`



### getLocations(addressIds: List<Long>) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressIds | List<Long> | - | - |

**Returns**: `List<Long>`



### findLowestAddresses(selectedAddress: AddressLevel, allAddresses: List<AddressLevel>) → Stream<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selectedAddress | AddressLevel | - | - |
| allAddresses | List<AddressLevel> | - | - |

**Returns**: `Stream<AddressLevel>`


