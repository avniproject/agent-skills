# API Reference: SubjectBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/domain/factory/txn/SubjectBuilder.java`

---

## Classes

### SubjectBuilder

**Inherits from**: (none)

#### Methods

##### Individual() → new

**Returns**: `new`


##### SubjectBuilder() → public

**Returns**: `public`


##### build() → Individual

**Returns**: `Individual`


##### withUUID(uuid: String) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `SubjectBuilder`


##### setId(id: int) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | int | - | - |

**Returns**: `SubjectBuilder`


##### addEnrolment(programEnrolment: ProgramEnrolment) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `SubjectBuilder`


##### withSubjectType(subjectType: SubjectType) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectBuilder`


##### withAuditUser(user: User) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `SubjectBuilder`


##### withObservations(observations: ObservationCollection) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

**Returns**: `SubjectBuilder`


##### withFirstName(firstName: String) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| firstName | String | - | - |

**Returns**: `SubjectBuilder`


##### withLocation(addressLevel: AddressLevel) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `SubjectBuilder`


##### withRegistrationDate(date: LocalDate) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| date | LocalDate | - | - |

**Returns**: `SubjectBuilder`


##### withMandatoryFieldsForNewEntity() → SubjectBuilder

**Returns**: `SubjectBuilder`


##### withUUID(unknown: s) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s | - | - |

**Returns**: `return`


##### ObservationCollection() → new

**Returns**: `new`


##### withSyncConcept1Value(value: Object) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | Object | - | - |

**Returns**: `SubjectBuilder`


##### withLegacyId(legacyId: String) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `SubjectBuilder`


##### withSyncDisabled(syncDisabled: boolean) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `SubjectBuilder`




## Functions

### Individual() → new

**Returns**: `new`



### SubjectBuilder() → public

**Returns**: `public`



### build() → Individual

**Returns**: `Individual`



### withUUID(uuid: String) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `SubjectBuilder`



### setId(id: int) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | int | - | - |

**Returns**: `SubjectBuilder`



### addEnrolment(programEnrolment: ProgramEnrolment) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `SubjectBuilder`



### withSubjectType(subjectType: SubjectType) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectBuilder`



### withAuditUser(user: User) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `SubjectBuilder`



### withObservations(observations: ObservationCollection) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

**Returns**: `SubjectBuilder`



### withFirstName(firstName: String) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| firstName | String | - | - |

**Returns**: `SubjectBuilder`



### withLocation(addressLevel: AddressLevel) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `SubjectBuilder`



### withRegistrationDate(date: LocalDate) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| date | LocalDate | - | - |

**Returns**: `SubjectBuilder`



### withMandatoryFieldsForNewEntity() → SubjectBuilder

**Returns**: `SubjectBuilder`



### withUUID(unknown: s) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s | - | - |

**Returns**: `return`



### ObservationCollection() → new

**Returns**: `new`



### withSyncConcept1Value(value: Object) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | Object | - | - |

**Returns**: `SubjectBuilder`



### withLegacyId(legacyId: String) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `SubjectBuilder`



### withSyncDisabled(syncDisabled: boolean) → SubjectBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `SubjectBuilder`


