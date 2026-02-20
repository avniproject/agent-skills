# API Reference: BulkLocationModifier.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/BulkLocationModifier.java`

---

## Classes

### BulkLocationModifier

**Inherits from**: (none)

#### Methods

##### BulkLocationModifier(locationRepository: LocationRepository, observationCreator: ObservationCreator, headerCreator: HeaderCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRepository | LocationRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| headerCreator | HeaderCreator | - | - |

**Returns**: `public`


##### updateLocationProperties(row: Row, allErrorMsgs: List<String>, location: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| allErrorMsgs | List<String> | - | - |
| location | AddressLevel | - | - |

**Returns**: `void`


##### LocationCreator() → new

**Returns**: `new`




## Functions

### BulkLocationModifier(locationRepository: LocationRepository, observationCreator: ObservationCreator, headerCreator: HeaderCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationRepository | LocationRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| headerCreator | HeaderCreator | - | - |

**Returns**: `public`



### updateLocationProperties(row: Row, allErrorMsgs: List<String>, location: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| allErrorMsgs | List<String> | - | - |
| location | AddressLevel | - | - |

**Returns**: `void`



### LocationCreator() → new

**Returns**: `new`


