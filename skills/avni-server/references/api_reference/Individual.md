# API Reference: Individual.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/Individual.java`

---

## Classes

### Individual

**Inherits from**: SyncAttributeEntity, MessageableEntity

#### Methods

##### create(firstName: String, lastName: String, profilePicture: String, dateOfBirth: LocalDate, dateOfBirthVerified: boolean, gender: Gender, address: AddressLevel, registrationDate: LocalDate) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| firstName | String | - | - |
| lastName | String | - | - |
| profilePicture | String | - | - |
| dateOfBirth | LocalDate | - | - |
| dateOfBirthVerified | boolean | - | - |
| gender | Gender | - | - |
| address | AddressLevel | - | - |
| registrationDate | LocalDate | - | - |

**Returns**: `Individual`


##### Individual() → new

**Returns**: `new`


##### getDateOfBirth() → LocalDate

**Returns**: `LocalDate`


##### setDateOfBirth(dateOfBirth: LocalDate) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateOfBirth | LocalDate | - | - |

**Returns**: `void`


##### isDateOfBirthVerified() → boolean

**Returns**: `boolean`


##### setDateOfBirthVerified(dateOfBirthVerified: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateOfBirthVerified | boolean | - | - |

**Returns**: `void`


##### getGender() → Gender

**Returns**: `Gender`


##### getGenderName() → String

**Returns**: `String`


##### setGender(gender: Gender) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gender | Gender | - | - |

**Returns**: `void`


##### getProgramEnrolments() → Set<ProgramEnrolment>

**Returns**: `Set<ProgramEnrolment>`


##### setProgramEnrolments(programEnrolments: Set<ProgramEnrolment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolments | Set<ProgramEnrolment> | - | - |

**Returns**: `void`


##### getAddressLevel() → AddressLevel

**Returns**: `AddressLevel`


##### setAddressLevel(addressLevel: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `void`


##### getEncounters() → Set<Encounter>

**Returns**: `Set<Encounter>`


##### setEncounters(encounters: Set<Encounter>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounters | Set<Encounter> | - | - |

**Returns**: `void`


##### getUserSubjectAssignments() → Set<UserSubjectAssignment>

**Returns**: `Set<UserSubjectAssignment>`


##### setUserSubjectAssignments(userSubjectAssignments: Set<UserSubjectAssignment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignments | Set<UserSubjectAssignment> | - | - |

**Returns**: `void`


##### getObservations() → ObservationCollection

**Returns**: `ObservationCollection`


##### setObservations(observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

**Returns**: `void`


##### getRegistrationDate() → LocalDate

**Returns**: `LocalDate`


##### setRegistrationDate(registrationDate: LocalDate) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registrationDate | LocalDate | - | - |

**Returns**: `void`


##### addEnrolment(programEnrolment: ProgramEnrolment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `void`


##### getFirstName() → String

**Returns**: `String`


##### setFirstName(firstName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| firstName | String | - | - |

**Returns**: `void`


##### getMiddleName() → String

**Returns**: `String`


##### setMiddleName(middleName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| middleName | String | - | - |

**Returns**: `void`


##### getLastName() → String

**Returns**: `String`


##### setLastName(lastName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastName | String | - | - |

**Returns**: `void`


##### getProfilePicture() → String

**Returns**: `String`


##### setProfilePicture(profilePicture: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| profilePicture | String | - | - |

**Returns**: `void`


##### getRegistrationLocation() → Point

**Returns**: `Point`


##### setRegistrationLocation(registrationLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registrationLocation | Point | - | - |

**Returns**: `void`


##### getSubjectLocation() → SubjectLocation

**Returns**: `SubjectLocation`


##### setSubjectLocation(subjectLocation: SubjectLocation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectLocation | SubjectLocation | - | - |

**Returns**: `void`


##### getSubjectType() → SubjectType

**Returns**: `SubjectType`


##### setSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### getLegacyId() → String

**Returns**: `String`


##### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`


##### getRelationshipsFromSelfToOthers() → Set<IndividualRelationship>

**Returns**: `Set<IndividualRelationship>`


##### setRelationshipsFromSelfToOthers(relationshipsFromSelfToOthers: Set<IndividualRelationship>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relationshipsFromSelfToOthers | Set<IndividualRelationship> | - | - |

**Returns**: `void`


##### getRelationshipsFromOthersToSelf() → Set<IndividualRelationship>

**Returns**: `Set<IndividualRelationship>`


##### setRelationshipsFromOthersToSelf(relationshipsFromOthersToSelf: Set<IndividualRelationship>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relationshipsFromOthersToSelf | Set<IndividualRelationship> | - | - |

**Returns**: `void`


##### getGroupSubjects() → Set<GroupSubject>

**Returns**: `Set<GroupSubject>`


##### setGroupSubjects(groupSubjects: Set<GroupSubject>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjects | Set<GroupSubject> | - | - |

**Returns**: `void`


##### getMemberGroupSubjects() → Set<GroupSubject>

**Returns**: `Set<GroupSubject>`


##### setMemberGroupSubjects(memberGroupSubjects: Set<GroupSubject>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberGroupSubjects | Set<GroupSubject> | - | - |

**Returns**: `void`


##### getActivePrograms() → List<Program>

**Returns**: `List<Program>`


##### getEncounters(removeCancelledEncounters: boolean) → Stream<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| removeCancelledEncounters | boolean | - | - |

**Returns**: `Stream<Encounter>`


##### getEncountersOfType(encounterTypeName: String, removeCancelledEncounters: boolean) → Stream<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| removeCancelledEncounters | boolean | - | - |

**Returns**: `Stream<Encounter>`


##### nonVoidedEncounters() → Stream<Encounter>

**Returns**: `Stream<Encounter>`


##### scheduledEncounters() → Stream<Encounter>

**Returns**: `Stream<Encounter>`


##### scheduledEncountersOfType(encounterTypeName: String) → Stream<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |

**Returns**: `Stream<Encounter>`


##### validate() → void

**Returns**: `void`


##### ValidationException(name: "First) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | "First | - | - |

**Returns**: `new`


##### ValidationException(cannot: "Gender) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannot | "Gender | - | - |

**Returns**: `new`


##### ValidationException(date: "Registration) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| date | "Registration | - | - |

**Returns**: `new`


##### getProgramEncounters() → Set<ProgramEncounter>

**Returns**: `Set<ProgramEncounter>`


##### getEntityTypeId() → Long

**Returns**: `Long`


##### getSubjectType() → return

**Returns**: `return`


##### getEntityId() → Long

**Returns**: `Long`


##### getId() → return

**Returns**: `return`


##### getIndividual() → Individual

**Returns**: `Individual`


##### getFullName() → String

**Returns**: `String`


##### addObservations(observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

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

### create(firstName: String, lastName: String, profilePicture: String, dateOfBirth: LocalDate, dateOfBirthVerified: boolean, gender: Gender, address: AddressLevel, registrationDate: LocalDate) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| firstName | String | - | - |
| lastName | String | - | - |
| profilePicture | String | - | - |
| dateOfBirth | LocalDate | - | - |
| dateOfBirthVerified | boolean | - | - |
| gender | Gender | - | - |
| address | AddressLevel | - | - |
| registrationDate | LocalDate | - | - |

**Returns**: `Individual`



### Individual() → new

**Returns**: `new`



### getDateOfBirth() → LocalDate

**Returns**: `LocalDate`



### setDateOfBirth(dateOfBirth: LocalDate) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateOfBirth | LocalDate | - | - |

**Returns**: `void`



### isDateOfBirthVerified() → boolean

**Returns**: `boolean`



### setDateOfBirthVerified(dateOfBirthVerified: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateOfBirthVerified | boolean | - | - |

**Returns**: `void`



### getGender() → Gender

**Returns**: `Gender`



### getGenderName() → String

**Returns**: `String`



### setGender(gender: Gender) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| gender | Gender | - | - |

**Returns**: `void`



### getProgramEnrolments() → Set<ProgramEnrolment>

**Returns**: `Set<ProgramEnrolment>`



### setProgramEnrolments(programEnrolments: Set<ProgramEnrolment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolments | Set<ProgramEnrolment> | - | - |

**Returns**: `void`



### getAddressLevel() → AddressLevel

**Returns**: `AddressLevel`



### setAddressLevel(addressLevel: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |

**Returns**: `void`



### getEncounters() → Set<Encounter>

**Returns**: `Set<Encounter>`



### setEncounters(encounters: Set<Encounter>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounters | Set<Encounter> | - | - |

**Returns**: `void`



### getUserSubjectAssignments() → Set<UserSubjectAssignment>

**Returns**: `Set<UserSubjectAssignment>`



### setUserSubjectAssignments(userSubjectAssignments: Set<UserSubjectAssignment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignments | Set<UserSubjectAssignment> | - | - |

**Returns**: `void`



### getObservations() → ObservationCollection

**Returns**: `ObservationCollection`



### setObservations(observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

**Returns**: `void`



### getRegistrationDate() → LocalDate

**Returns**: `LocalDate`



### setRegistrationDate(registrationDate: LocalDate) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registrationDate | LocalDate | - | - |

**Returns**: `void`



### addEnrolment(programEnrolment: ProgramEnrolment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `void`



### getFirstName() → String

**Returns**: `String`



### setFirstName(firstName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| firstName | String | - | - |

**Returns**: `void`



### getMiddleName() → String

**Returns**: `String`



### setMiddleName(middleName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| middleName | String | - | - |

**Returns**: `void`



### getLastName() → String

**Returns**: `String`



### setLastName(lastName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastName | String | - | - |

**Returns**: `void`



### getProfilePicture() → String

**Returns**: `String`



### setProfilePicture(profilePicture: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| profilePicture | String | - | - |

**Returns**: `void`



### getRegistrationLocation() → Point

**Returns**: `Point`



### setRegistrationLocation(registrationLocation: Point) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registrationLocation | Point | - | - |

**Returns**: `void`



### getSubjectLocation() → SubjectLocation

**Returns**: `SubjectLocation`



### setSubjectLocation(subjectLocation: SubjectLocation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectLocation | SubjectLocation | - | - |

**Returns**: `void`



### getSubjectType() → SubjectType

**Returns**: `SubjectType`



### setSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



### getLegacyId() → String

**Returns**: `String`



### setLegacyId(legacyId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| legacyId | String | - | - |

**Returns**: `void`



### getRelationshipsFromSelfToOthers() → Set<IndividualRelationship>

**Returns**: `Set<IndividualRelationship>`



### setRelationshipsFromSelfToOthers(relationshipsFromSelfToOthers: Set<IndividualRelationship>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relationshipsFromSelfToOthers | Set<IndividualRelationship> | - | - |

**Returns**: `void`



### getRelationshipsFromOthersToSelf() → Set<IndividualRelationship>

**Returns**: `Set<IndividualRelationship>`



### setRelationshipsFromOthersToSelf(relationshipsFromOthersToSelf: Set<IndividualRelationship>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relationshipsFromOthersToSelf | Set<IndividualRelationship> | - | - |

**Returns**: `void`



### getGroupSubjects() → Set<GroupSubject>

**Returns**: `Set<GroupSubject>`



### setGroupSubjects(groupSubjects: Set<GroupSubject>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjects | Set<GroupSubject> | - | - |

**Returns**: `void`



### getMemberGroupSubjects() → Set<GroupSubject>

**Returns**: `Set<GroupSubject>`



### setMemberGroupSubjects(memberGroupSubjects: Set<GroupSubject>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberGroupSubjects | Set<GroupSubject> | - | - |

**Returns**: `void`



### getActivePrograms() → List<Program>

**Returns**: `List<Program>`



### getEncounters(removeCancelledEncounters: boolean) → Stream<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| removeCancelledEncounters | boolean | - | - |

**Returns**: `Stream<Encounter>`



### getEncountersOfType(encounterTypeName: String, removeCancelledEncounters: boolean) → Stream<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| removeCancelledEncounters | boolean | - | - |

**Returns**: `Stream<Encounter>`



### nonVoidedEncounters() → Stream<Encounter>

**Returns**: `Stream<Encounter>`



### scheduledEncounters() → Stream<Encounter>

**Returns**: `Stream<Encounter>`



### scheduledEncountersOfType(encounterTypeName: String) → Stream<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |

**Returns**: `Stream<Encounter>`



### validate() → void

**Returns**: `void`



### ValidationException(name: "First) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | "First | - | - |

**Returns**: `new`



### ValidationException(cannot: "Gender) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannot | "Gender | - | - |

**Returns**: `new`



### ValidationException(date: "Registration) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| date | "Registration | - | - |

**Returns**: `new`



### getProgramEncounters() → Set<ProgramEncounter>

**Returns**: `Set<ProgramEncounter>`



### getEntityTypeId() → Long

**Returns**: `Long`



### getSubjectType() → return

**Returns**: `return`



### getEntityId() → Long

**Returns**: `Long`



### getId() → return

**Returns**: `return`



### getIndividual() → Individual

**Returns**: `Individual`



### getFullName() → String

**Returns**: `String`



### addObservations(observations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |

**Returns**: `void`



### isSyncDisabled() → boolean

**Returns**: `boolean`



### setSyncDisabled(syncDisabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncDisabled | boolean | - | - |

**Returns**: `void`


