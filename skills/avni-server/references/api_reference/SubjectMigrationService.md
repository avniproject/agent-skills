# API Reference: SubjectMigrationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/SubjectMigrationService.java`

---

## Functions

### SubjectMigrationService(entityApprovalStatusRepository: EntityApprovalStatusRepository, subjectMigrationRepository: SubjectMigrationRepository, subjectTypeRepository: SubjectTypeRepository, individualRepository: IndividualRepository, encounterRepository: EncounterRepository, programEnrolmentRepository: ProgramEnrolmentRepository, programEncounterRepository: ProgramEncounterRepository, groupSubjectRepository: GroupSubjectRepository, addressLevelService: AddressLevelService, checklistRepository: ChecklistRepository, checklistItemRepository: ChecklistItemRepository, individualRelationshipRepository: IndividualRelationshipRepository, accessControlService: AccessControlService, locationRepository: LocationRepository, conceptRepository: ConceptRepository, individualService: IndividualService, avniJobRepository: AvniJobRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| subjectMigrationRepository | SubjectMigrationRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| encounterRepository | EncounterRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| addressLevelService | AddressLevelService | - | - |
| checklistRepository | ChecklistRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| individualRelationshipRepository | IndividualRelationshipRepository | - | - |
| accessControlService | AccessControlService | - | - |
| locationRepository | LocationRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| individualService | IndividualService | - | - |
| avniJobRepository | AvniJobRepository | - | - |

**Returns**: `public`



### repository() → OperatingIndividualScopeAwareRepository<SubjectMigration>

**Returns**: `OperatingIndividualScopeAwareRepository<SubjectMigration>`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, subjectTypeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| subjectTypeUUID | String | - | - |

**Returns**: `boolean`



### null(for: typical) → is

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| for | typical | - | - |

**Returns**: `is`



### level(for: null) → address

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| for | null | - | - |

**Returns**: `address`



### collection(to: null) → observation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | null | - | - |

**Returns**: `observation`



### markSubjectMigrationIfRequired(individualUuid: String, oldAddressLevel: AddressLevel, newAddressLevel: AddressLevel, oldObservations: ObservationCollection, newObservations: ObservationCollection, executingInBulk: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualUuid | String | - | - |
| oldAddressLevel | AddressLevel | - | - |
| newAddressLevel | AddressLevel | - | - |
| oldObservations | ObservationCollection | - | - |
| newObservations | ObservationCollection | - | - |
| executingInBulk | boolean | - | - |

**Returns**: `void`



### SubjectMigration() → new

**Returns**: `new`



### changeSubjectAddressLevel(subject: Individual, destAddressLevel: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| destAddressLevel | AddressLevel | - | - |

**Returns**: `void`



### changeSubjectSyncConceptValues(subject: Individual, destinationSyncConcept1Value: String, destinationSyncConcept2Value: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| destinationSyncConcept1Value | String | - | - |
| destinationSyncConcept2Value | String | - | - |

**Returns**: `void`



### bulkMigrate(mode: BulkSubjectMigrationModes, bulkSubjectMigrationRequest: BulkSubjectMigrationRequest) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mode | BulkSubjectMigrationModes | - | - |
| bulkSubjectMigrationRequest | BulkSubjectMigrationRequest | - | - |

**Returns**: `Map<String, String>`



### bulkMigrateByAddress(unknown: bulkSubjectMigrationRequest.getSubjectIds() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bulkSubjectMigrationRequest.getSubjectIds( | - | - |

**Returns**: `return`



### bulkMigrateBySyncConcept(unknown: bulkSubjectMigrationRequest.getSubjectIds() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bulkSubjectMigrationRequest.getSubjectIds( | - | - |

**Returns**: `return`



### bulkMigrateByAddress(subjectIds: List<Long>, unknown: Map<String, destinationAddresses: String>) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |
| unknown | Map<String | - | - |
| destinationAddresses | String> | - | - |

**Returns**: `Map<String, String>`



### RuntimeException(not: "Subject) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Subject | - | - |

**Returns**: `new`



### RuntimeException(address: "Destination) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| address | "Destination | - | - |

**Returns**: `new`



### bulkMigrateBySyncConcept(subjectIds: List<Long>, unknown: Map<String, destinationSyncConcepts: String>) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectIds | List<Long> | - | - |
| unknown | Map<String | - | - |
| destinationSyncConcepts | String> | - | - |

**Returns**: `Map<String, String>`



### RuntimeException(not: "Subject) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Subject | - | - |

**Returns**: `new`



### RuntimeException(destination: "Valid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| destination | "Valid | - | - |

**Returns**: `new`



### validateSyncConcept(subjectTypeSyncConceptUuid: String, currentValue: String, unknown: Map<String, destinationSyncConcepts: String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeSyncConceptUuid | String | - | - |
| currentValue | String | - | - |
| unknown | Map<String | - | - |
| destinationSyncConcepts | String> | - | - |

**Returns**: `String`



### RuntimeException(value: "Source) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | "Source | - | - |

**Returns**: `new`



### RuntimeException(value: String.format("Invalid, unknown: destinationSyncConceptValue) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String.format("Invalid | - | - |
| unknown | destinationSyncConceptValue | - | - |

**Returns**: `new`



### buildSyncConceptValueObservations(subject: Individual, destinationSyncConcept1Value: String, destinationSyncConcept2Value: String) → ObservationCollection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| destinationSyncConcept1Value | String | - | - |
| destinationSyncConcept2Value | String | - | - |

**Returns**: `ObservationCollection`



### ObservationCollection() → new

**Returns**: `new`



### getBulkSubjectMigrationJobStatus(jobUuid: String) → JobStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobUuid | String | - | - |

**Returns**: `JobStatus`


