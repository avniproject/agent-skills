# API Reference: SubjectMigrationIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/dao/SubjectMigrationIntegrationTest.java`

---

## Classes

### SubjectMigrationIntegrationTest

**Inherits from**: AbstractControllerIntegrationTest

#### Methods

##### getMigrations(subjectType: SubjectType, lastModifiedDateTime: DateTime, now: DateTime) → List<SubjectMigration>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |

**Returns**: `List<SubjectMigration>`


##### hasMigrationFor(subjectType: SubjectType, lastModifiedDateTime: DateTime, now: DateTime, subject: Individual) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| subject | Individual | - | - |

**Returns**: `boolean`


##### getSyncDetails() → List

**Returns**: `List`


##### setup() → void

**Returns**: `void`


##### SubjectTypeBuilder() → new

**Returns**: `new`


##### SubjectTypeBuilder() → new

**Returns**: `new`


##### TestUserSyncSettingsBuilder() → new

**Returns**: `new`


##### UserBuilder(unknown: organisationData.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationData.getUser( | - | - |

**Returns**: `new`


##### checkSyncStrategy() → void

**Returns**: `void`


##### SubjectBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### SubjectTypeBuilder(unknown: subjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |

**Returns**: `new`


##### TestUserSyncSettingsBuilder() → new

**Returns**: `new`


##### UserBuilder(unknown: userRepository.findOne(organisationData.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository.findOne(organisationData.getUser( | - | - |

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### TestUserSyncSettingsBuilder() → new

**Returns**: `new`


##### UserBuilder(unknown: userRepository.findOne(organisationData.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository.findOne(organisationData.getUser( | - | - |

**Returns**: `new`


##### migrations_created_by_one_user_is_returned_for_another_user_even_when_concept_attributes_dont_match() → void

**Returns**: `void`


##### SubjectBuilder() → new

**Returns**: `new`


##### TestUserSyncSettingsBuilder() → new

**Returns**: `new`


##### UserBuilder(unknown: organisationData.getUser2() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationData.getUser2( | - | - |

**Returns**: `new`


##### assertTrue(unknown: getSyncDetails() → markSubjectMigrationIfRequired

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | getSyncDetails( | - | - |

**Returns**: `markSubjectMigrationIfRequired`


##### bulkMigrateTracksFailures() → void

**Returns**: `void`


##### SubjectBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### bulkMigrateByAddressLevelSucceedsForValidDestinationAddress() → void

**Returns**: `void`


##### SubjectBuilder() → new

**Returns**: `new`


##### bulkMigrateProcessesAllRecordsEvenIfOneFails() → void

**Returns**: `void`


##### SubjectBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### AddressLevelBuilder() → new

**Returns**: `new`


##### bulkMigrateBySyncConceptMigratesSyncConcept1ValueIfSyncConcept2IsNotConfiguredForSubjectType() → void

**Returns**: `void`


##### SubjectBuilder() → new

**Returns**: `new`


##### bulkMigrateBySyncConceptMigratesSyncConcept2ValueEvenIfSyncConcept1ValueDoesNotNeedToBeMigrated() → void

**Returns**: `void`


##### SubjectBuilder() → new

**Returns**: `new`


##### ObservationCollectionBuilder() → new

**Returns**: `new`


##### TestUserSyncSettingsBuilder() → new

**Returns**: `new`


##### UserBuilder(unknown: organisationData.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationData.getUser( | - | - |

**Returns**: `new`




## Functions

### getMigrations(subjectType: SubjectType, lastModifiedDateTime: DateTime, now: DateTime) → List<SubjectMigration>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |

**Returns**: `List<SubjectMigration>`



### hasMigrationFor(subjectType: SubjectType, lastModifiedDateTime: DateTime, now: DateTime, subject: Individual) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| subject | Individual | - | - |

**Returns**: `boolean`



### getSyncDetails() → List

**Returns**: `List`



### setup() → void

**Returns**: `void`



### SubjectTypeBuilder() → new

**Returns**: `new`



### SubjectTypeBuilder() → new

**Returns**: `new`



### TestUserSyncSettingsBuilder() → new

**Returns**: `new`



### UserBuilder(unknown: organisationData.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationData.getUser( | - | - |

**Returns**: `new`



### checkSyncStrategy() → void

**Returns**: `void`



### SubjectBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### SubjectTypeBuilder(unknown: subjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |

**Returns**: `new`



### TestUserSyncSettingsBuilder() → new

**Returns**: `new`



### UserBuilder(unknown: userRepository.findOne(organisationData.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository.findOne(organisationData.getUser( | - | - |

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### TestUserSyncSettingsBuilder() → new

**Returns**: `new`



### UserBuilder(unknown: userRepository.findOne(organisationData.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userRepository.findOne(organisationData.getUser( | - | - |

**Returns**: `new`



### migrations_created_by_one_user_is_returned_for_another_user_even_when_concept_attributes_dont_match() → void

**Returns**: `void`



### SubjectBuilder() → new

**Returns**: `new`



### TestUserSyncSettingsBuilder() → new

**Returns**: `new`



### UserBuilder(unknown: organisationData.getUser2() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationData.getUser2( | - | - |

**Returns**: `new`



### assertTrue(unknown: getSyncDetails() → markSubjectMigrationIfRequired

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | getSyncDetails( | - | - |

**Returns**: `markSubjectMigrationIfRequired`



### bulkMigrateTracksFailures() → void

**Returns**: `void`



### SubjectBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### bulkMigrateByAddressLevelSucceedsForValidDestinationAddress() → void

**Returns**: `void`



### SubjectBuilder() → new

**Returns**: `new`



### bulkMigrateProcessesAllRecordsEvenIfOneFails() → void

**Returns**: `void`



### SubjectBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### AddressLevelBuilder() → new

**Returns**: `new`



### bulkMigrateBySyncConceptMigratesSyncConcept1ValueIfSyncConcept2IsNotConfiguredForSubjectType() → void

**Returns**: `void`



### SubjectBuilder() → new

**Returns**: `new`



### bulkMigrateBySyncConceptMigratesSyncConcept2ValueEvenIfSyncConcept1ValueDoesNotNeedToBeMigrated() → void

**Returns**: `void`



### SubjectBuilder() → new

**Returns**: `new`



### ObservationCollectionBuilder() → new

**Returns**: `new`



### TestUserSyncSettingsBuilder() → new

**Returns**: `new`



### UserBuilder(unknown: organisationData.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationData.getUser( | - | - |

**Returns**: `new`


