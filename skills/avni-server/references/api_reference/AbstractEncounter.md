# API Reference: AbstractEncounter.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/AbstractEncounter.java`

---

## Classes

### AbstractEncounter

**Inherits from**: SyncAttributeEntity

#### Methods

##### getEncounterType() → EncounterType

**Returns**: `EncounterType`


##### setEncounterType(encounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EncounterType | - | - |

**Returns**: `void`


##### getEncounterDateTime() → DateTime

**Returns**: `DateTime`


##### setEncounterDateTime(encounterDateTime: DateTime, currentUser: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDateTime | DateTime | - | - |
| currentUser | User | - | - |

**Returns**: `void`


##### getObservations() → ObservationCollection

**Returns**: `ObservationCollection`


##### setObservations(observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getEarliestVisitDateTime() → DateTime

**Returns**: `DateTime`


##### setEarliestVisitDateTime(earliestVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| earliestVisitDateTime | DateTime | - | - |

**Returns**: `void`


##### getMaxVisitDateTime() → DateTime

**Returns**: `DateTime`


##### setMaxVisitDateTime(maxVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxVisitDateTime | DateTime | - | - |

**Returns**: `void`


##### getCancelDateTime() → DateTime

**Returns**: `DateTime`


##### isCancelled() → boolean

**Returns**: `boolean`


##### setCancelDateTime(cancelDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelDateTime | DateTime | - | - |

**Returns**: `void`


##### getCancelObservations() → ObservationCollection

**Returns**: `ObservationCollection`


##### setCancelObservations(cancelObservations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelObservations | ObservationCollection | - | - |

**Returns**: `void`


##### getEncounterLocation() → Point

**Returns**: `Point`


##### setEncounterLocation(encounterLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterLocation | Point | - | - |

**Returns**: `void`


##### getCancelLocation() → Point

**Returns**: `Point`


##### setCancelLocation(cancelLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelLocation | Point | - | - |

**Returns**: `void`


##### isCompleted() → boolean

**Returns**: `boolean`


##### getEncounterDateTime() → return

**Returns**: `return`


##### matches(encounterTypeName: String, encounterName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| encounterName | String | - | - |

**Returns**: `boolean`


##### dateFallsWithIn(encounterDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDateTime | DateTime | - | - |

**Returns**: `boolean`


##### isEncounteredOrCancelledBetween(startDate: DateTime, endDate: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | DateTime | - | - |
| endDate | DateTime | - | - |

**Returns**: `boolean`


##### isAfterOrEqual(d1: DateTime, d2: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| d1 | DateTime | - | - |
| d2 | DateTime | - | - |

**Returns**: `boolean`


##### isBeforeOrEqual(d1: DateTime, d2: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| d1 | DateTime | - | - |
| d2 | DateTime | - | - |

**Returns**: `boolean`


##### getLegacyId() → String

**Returns**: `String`


##### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`


##### validate() → void

**Returns**: `void`


##### ValidationException(encounter: "Both) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | "Both | - | - |

**Returns**: `new`


##### getAddressId() → Long

**Returns**: `Long`


##### setAddressId(addressId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressId | Long | - | - |

**Returns**: `void`


##### getFilledBy() → User

**Returns**: `User`


##### setFilledBy(filledBy: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filledBy | User | - | - |

**Returns**: `void`


##### isSyncDisabled() → boolean

**Returns**: `boolean`


##### setSyncDisabled(syncDisabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `void`




## Functions

### getEncounterType() → EncounterType

**Returns**: `EncounterType`



### setEncounterType(encounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EncounterType | - | - |

**Returns**: `void`



### getEncounterDateTime() → DateTime

**Returns**: `DateTime`



### setEncounterDateTime(encounterDateTime: DateTime, currentUser: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDateTime | DateTime | - | - |
| currentUser | User | - | - |

**Returns**: `void`



### getObservations() → ObservationCollection

**Returns**: `ObservationCollection`



### setObservations(observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getEarliestVisitDateTime() → DateTime

**Returns**: `DateTime`



### setEarliestVisitDateTime(earliestVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| earliestVisitDateTime | DateTime | - | - |

**Returns**: `void`



### getMaxVisitDateTime() → DateTime

**Returns**: `DateTime`



### setMaxVisitDateTime(maxVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxVisitDateTime | DateTime | - | - |

**Returns**: `void`



### getCancelDateTime() → DateTime

**Returns**: `DateTime`



### isCancelled() → boolean

**Returns**: `boolean`



### setCancelDateTime(cancelDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelDateTime | DateTime | - | - |

**Returns**: `void`



### getCancelObservations() → ObservationCollection

**Returns**: `ObservationCollection`



### setCancelObservations(cancelObservations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelObservations | ObservationCollection | - | - |

**Returns**: `void`



### getEncounterLocation() → Point

**Returns**: `Point`



### setEncounterLocation(encounterLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterLocation | Point | - | - |

**Returns**: `void`



### getCancelLocation() → Point

**Returns**: `Point`



### setCancelLocation(cancelLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelLocation | Point | - | - |

**Returns**: `void`



### isCompleted() → boolean

**Returns**: `boolean`



### getEncounterDateTime() → return

**Returns**: `return`



### matches(encounterTypeName: String, encounterName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| encounterName | String | - | - |

**Returns**: `boolean`



### dateFallsWithIn(encounterDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDateTime | DateTime | - | - |

**Returns**: `boolean`



### isEncounteredOrCancelledBetween(startDate: DateTime, endDate: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | DateTime | - | - |
| endDate | DateTime | - | - |

**Returns**: `boolean`



### isAfterOrEqual(d1: DateTime, d2: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| d1 | DateTime | - | - |
| d2 | DateTime | - | - |

**Returns**: `boolean`



### isBeforeOrEqual(d1: DateTime, d2: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| d1 | DateTime | - | - |
| d2 | DateTime | - | - |

**Returns**: `boolean`



### getLegacyId() → String

**Returns**: `String`



### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`



### validate() → void

**Returns**: `void`



### ValidationException(encounter: "Both) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | "Both | - | - |

**Returns**: `new`



### getAddressId() → Long

**Returns**: `Long`



### setAddressId(addressId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressId | Long | - | - |

**Returns**: `void`



### getFilledBy() → User

**Returns**: `User`



### setFilledBy(filledBy: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filledBy | User | - | - |

**Returns**: `void`



### isSyncDisabled() → boolean

**Returns**: `boolean`



### setSyncDisabled(syncDisabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `void`


