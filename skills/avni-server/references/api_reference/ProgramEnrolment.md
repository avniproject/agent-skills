# API Reference: ProgramEnrolment.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/ProgramEnrolment.java`

---

## Classes

### ProgramEnrolment

**Inherits from**: SyncAttributeEntity, MessageableEntity, SubjectLinkedSyncEntity

#### Methods

##### isExited() → boolean

**Returns**: `boolean`


##### getProgram() → Program

**Returns**: `Program`


##### setProgram(program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |

**Returns**: `void`


##### getIndividual() → Individual

**Returns**: `Individual`


##### setIndividual(individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `void`


##### getProgramEncounters() → Set<ProgramEncounter>

**Returns**: `Set<ProgramEncounter>`


##### getEncounters(removeCancelledEncounters: boolean) → Stream<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| removeCancelledEncounters | boolean | - | - |

**Returns**: `Stream<ProgramEncounter>`


##### getEncountersOfType(encounterTypeName: String, removeCancelledEncounters: boolean) → Stream<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| removeCancelledEncounters | boolean | - | - |

**Returns**: `Stream<ProgramEncounter>`


##### nonVoidedEncounters() → Stream<ProgramEncounter>

**Returns**: `Stream<ProgramEncounter>`


##### scheduledEncounters() → Stream<ProgramEncounter>

**Returns**: `Stream<ProgramEncounter>`


##### scheduledEncountersOfType(encounterTypeName: String) → Stream<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |

**Returns**: `Stream<ProgramEncounter>`


##### setProgramEncounters(programEncounters: Set<ProgramEncounter>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounters | Set<ProgramEncounter> | - | - |

**Returns**: `void`


##### getEnrolmentDateTime() → DateTime

**Returns**: `DateTime`


##### setEnrolmentDateTime(enrolmentDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentDateTime | DateTime | - | - |

**Returns**: `void`


##### getObservations() → ObservationCollection

**Returns**: `ObservationCollection`


##### setObservations(observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

**Returns**: `void`


##### getProgramExitDateTime() → DateTime

**Returns**: `DateTime`


##### setProgramExitDateTime(programExitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programExitDateTime | DateTime | - | - |

**Returns**: `void`


##### getProgramExitObservations() → ObservationCollection

**Returns**: `ObservationCollection`


##### setProgramExitObservations(programExitObservations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programExitObservations | ObservationCollection | - | - |

**Returns**: `void`


##### findEncounter(encounterTypeName: String, encounterName: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| encounterName | String | - | - |

**Returns**: `ProgramEncounter`


##### getEnrolmentLocation() → Point

**Returns**: `Point`


##### setEnrolmentLocation(enrolmentLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentLocation | Point | - | - |

**Returns**: `void`


##### getExitLocation() → Point

**Returns**: `Point`


##### setExitLocation(exitLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exitLocation | Point | - | - |

**Returns**: `void`


##### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`


##### getLegacyId() → String

**Returns**: `String`


##### getAddressId() → Long

**Returns**: `Long`


##### setAddressId(addressId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressId | Long | - | - |

**Returns**: `void`


##### isSyncDisabled() → boolean

**Returns**: `boolean`


##### setSyncDisabled(syncDisabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `void`


##### getSyncDisabledDateTime() → Date

**Returns**: `Date`


##### getEntityTypeId() → Long

**Returns**: `Long`


##### getProgram() → return

**Returns**: `return`


##### getEntityId() → Long

**Returns**: `Long`


##### getId() → return

**Returns**: `return`


##### isActive() → boolean

**Returns**: `boolean`


##### setSyncDisabledDateTime(syncDisabledDateTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabledDateTime | Date | - | - |

**Returns**: `void`


##### beforeSave() → void

**Returns**: `void`


##### beforeUpdate() → void

**Returns**: `void`




## Functions

### isExited() → boolean

**Returns**: `boolean`



### getProgram() → Program

**Returns**: `Program`



### setProgram(program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |

**Returns**: `void`



### getIndividual() → Individual

**Returns**: `Individual`



### setIndividual(individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `void`



### getProgramEncounters() → Set<ProgramEncounter>

**Returns**: `Set<ProgramEncounter>`



### getEncounters(removeCancelledEncounters: boolean) → Stream<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| removeCancelledEncounters | boolean | - | - |

**Returns**: `Stream<ProgramEncounter>`



### getEncountersOfType(encounterTypeName: String, removeCancelledEncounters: boolean) → Stream<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| removeCancelledEncounters | boolean | - | - |

**Returns**: `Stream<ProgramEncounter>`



### nonVoidedEncounters() → Stream<ProgramEncounter>

**Returns**: `Stream<ProgramEncounter>`



### scheduledEncounters() → Stream<ProgramEncounter>

**Returns**: `Stream<ProgramEncounter>`



### scheduledEncountersOfType(encounterTypeName: String) → Stream<ProgramEncounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |

**Returns**: `Stream<ProgramEncounter>`



### setProgramEncounters(programEncounters: Set<ProgramEncounter>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounters | Set<ProgramEncounter> | - | - |

**Returns**: `void`



### getEnrolmentDateTime() → DateTime

**Returns**: `DateTime`



### setEnrolmentDateTime(enrolmentDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentDateTime | DateTime | - | - |

**Returns**: `void`



### getObservations() → ObservationCollection

**Returns**: `ObservationCollection`



### setObservations(observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

**Returns**: `void`



### getProgramExitDateTime() → DateTime

**Returns**: `DateTime`



### setProgramExitDateTime(programExitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programExitDateTime | DateTime | - | - |

**Returns**: `void`



### getProgramExitObservations() → ObservationCollection

**Returns**: `ObservationCollection`



### setProgramExitObservations(programExitObservations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programExitObservations | ObservationCollection | - | - |

**Returns**: `void`



### findEncounter(encounterTypeName: String, encounterName: String) → ProgramEncounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| encounterName | String | - | - |

**Returns**: `ProgramEncounter`



### getEnrolmentLocation() → Point

**Returns**: `Point`



### setEnrolmentLocation(enrolmentLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentLocation | Point | - | - |

**Returns**: `void`



### getExitLocation() → Point

**Returns**: `Point`



### setExitLocation(exitLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exitLocation | Point | - | - |

**Returns**: `void`



### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`



### getLegacyId() → String

**Returns**: `String`



### getAddressId() → Long

**Returns**: `Long`



### setAddressId(addressId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressId | Long | - | - |

**Returns**: `void`



### isSyncDisabled() → boolean

**Returns**: `boolean`



### setSyncDisabled(syncDisabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `void`



### getSyncDisabledDateTime() → Date

**Returns**: `Date`



### getEntityTypeId() → Long

**Returns**: `Long`



### getProgram() → return

**Returns**: `return`



### getEntityId() → Long

**Returns**: `Long`



### getId() → return

**Returns**: `return`



### isActive() → boolean

**Returns**: `boolean`



### setSyncDisabledDateTime(syncDisabledDateTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabledDateTime | Date | - | - |

**Returns**: `void`



### beforeSave() → void

**Returns**: `void`



### beforeUpdate() → void

**Returns**: `void`


