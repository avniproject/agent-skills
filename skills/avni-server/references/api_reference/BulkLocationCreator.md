# API Reference: BulkLocationCreator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/BulkLocationCreator.java`

---

## Classes

### BulkLocationCreator

**Inherits from**: BulkLocationModifier

#### Methods

##### BulkLocationCreator(locationService: LocationService, locationRepository: LocationRepository, addressLevelTypeRepository: AddressLevelTypeRepository, observationCreator: ObservationCreator, importService: ImportService, formService: FormService, locationHeaderCreator: LocationHeaderCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationService | LocationService | - | - |
| locationRepository | LocationRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| importService | ImportService | - | - |
| formService | FormService | - | - |
| locationHeaderCreator | LocationHeaderCreator | - | - |

**Returns**: `public`


##### createLocation(row: Row, allErrorMsgs: List<String>, locationTypeNames: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| allErrorMsgs | List<String> | - | - |
| locationTypeNames | List<String> | - | - |

**Returns**: `void`


##### validateHeaders(headers: String[], allErrorMsgs: List<String>, locationHierarchy: String) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| allErrorMsgs | List<String> | - | - |
| locationHierarchy | String | - | - |

**Returns**: `List<String>`


##### checkIfHeaderHasLocationTypesAndInOrderForHierarchy(locationHierarchy: String, headerList: List<String>, allErrorMsgs: List<String>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationHierarchy | String | - | - |
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `List<String>`


##### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`


##### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`


##### checkIfHeaderRowHasUnknownHeaders(additionalHeaders: List<String>, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| additionalHeaders | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`


##### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`


##### createAddressLevel(row: Row, parent: AddressLevel, header: String, locationTypeNames: List<String>) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| parent | AddressLevel | - | - |
| header | String | - | - |
| locationTypeNames | List<String> | - | - |

**Returns**: `AddressLevel`


##### LocationContract() → new

**Returns**: `new`


##### LocationContract(unknown: parent.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | parent.getUuid( | - | - |

**Returns**: `new`


##### isValidLocation(header: String, row: Row, locationTypeNames: List<String>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| header | String | - | - |
| row | Row | - | - |
| locationTypeNames | List<String> | - | - |

**Returns**: `boolean`


##### validateRow(row: Row, hierarchicalLocationTypeNames: List<String>, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| hierarchicalLocationTypeNames | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`


##### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`


##### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`


##### write(extends: List<?, idBasedLocationHierarchy: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extends | List<? | - | - |
| idBasedLocationHierarchy | String | - | - |

**Returns**: `void`


##### skipRow(row: Row, hierarchicalLocationTypeNames: List<String>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| hierarchicalLocationTypeNames | List<String> | - | - |

**Returns**: `boolean`




## Functions

### BulkLocationCreator(locationService: LocationService, locationRepository: LocationRepository, addressLevelTypeRepository: AddressLevelTypeRepository, observationCreator: ObservationCreator, importService: ImportService, formService: FormService, locationHeaderCreator: LocationHeaderCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationService | LocationService | - | - |
| locationRepository | LocationRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| importService | ImportService | - | - |
| formService | FormService | - | - |
| locationHeaderCreator | LocationHeaderCreator | - | - |

**Returns**: `public`



### createLocation(row: Row, allErrorMsgs: List<String>, locationTypeNames: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| allErrorMsgs | List<String> | - | - |
| locationTypeNames | List<String> | - | - |

**Returns**: `void`



### validateHeaders(headers: String[], allErrorMsgs: List<String>, locationHierarchy: String) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| allErrorMsgs | List<String> | - | - |
| locationHierarchy | String | - | - |

**Returns**: `List<String>`



### checkIfHeaderHasLocationTypesAndInOrderForHierarchy(locationHierarchy: String, headerList: List<String>, allErrorMsgs: List<String>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationHierarchy | String | - | - |
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `List<String>`



### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`



### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`



### checkIfHeaderRowHasUnknownHeaders(additionalHeaders: List<String>, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| additionalHeaders | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`



### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`



### createAddressLevel(row: Row, parent: AddressLevel, header: String, locationTypeNames: List<String>) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| parent | AddressLevel | - | - |
| header | String | - | - |
| locationTypeNames | List<String> | - | - |

**Returns**: `AddressLevel`



### LocationContract() → new

**Returns**: `new`



### LocationContract(unknown: parent.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | parent.getUuid( | - | - |

**Returns**: `new`



### isValidLocation(header: String, row: Row, locationTypeNames: List<String>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| header | String | - | - |
| row | Row | - | - |
| locationTypeNames | List<String> | - | - |

**Returns**: `boolean`



### validateRow(row: Row, hierarchicalLocationTypeNames: List<String>, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| hierarchicalLocationTypeNames | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`



### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`



### RuntimeException(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`



### write(extends: List<?, idBasedLocationHierarchy: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extends | List<? | - | - |
| idBasedLocationHierarchy | String | - | - |

**Returns**: `void`



### skipRow(row: Row, hierarchicalLocationTypeNames: List<String>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| hierarchicalLocationTypeNames | List<String> | - | - |

**Returns**: `boolean`


