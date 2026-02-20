# API Reference: IndividualService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/IndividualService.java`

---

## Functions

### IndividualService(individualRepository: IndividualRepository, observationService: ObservationService, groupSubjectRepository: GroupSubjectRepository, conceptRepository: ConceptRepository, groupRoleRepository: GroupRoleRepository, subjectTypeRepository: SubjectTypeRepository, encounterRepository: EncounterRepository, programEncounterRepository: ProgramEncounterRepository, addressLevelService: AddressLevelService, conceptService: ConceptService, accessControlService: AccessControlService, programEnrolmentRepository: ProgramEnrolmentRepository, checklistRepository: ChecklistRepository, checklistItemRepository: ChecklistItemRepository, subjectMigrationRepository: SubjectMigrationRepository, individualRelationshipRepository: IndividualRelationshipRepository, commentRepository: CommentRepository, entityApprovalStatusRepository: EntityApprovalStatusRepository, subjectProgramEligibilityRepository: SubjectProgramEligibilityRepository, commentThreadRepository: CommentThreadRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| observationService | ObservationService | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| groupRoleRepository | GroupRoleRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| encounterRepository | EncounterRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| addressLevelService | AddressLevelService | - | - |
| conceptService | ConceptService | - | - |
| accessControlService | AccessControlService | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| checklistRepository | ChecklistRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| subjectMigrationRepository | SubjectMigrationRepository | - | - |
| individualRelationshipRepository | IndividualRelationshipRepository | - | - |
| commentRepository | CommentRepository | - | - |
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| subjectProgramEligibilityRepository | SubjectProgramEligibilityRepository | - | - |
| commentThreadRepository | CommentThreadRepository | - | - |

**Returns**: `public`



### findByUuid(uuid: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `Individual`



### findById(id: Long) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `Individual`



### findByMetadata(subjectTypeName: String, programName: String, encounterTypeName: String, entityId: long) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |
| programName | String | - | - |
| encounterTypeName | String | - | - |
| entityId | long | - | - |

**Returns**: `Individual`



### getSubjectEncounters(individualUuid: String) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualUuid | String | - | - |

**Returns**: `IndividualContract`



### IndividualContract() → new

**Returns**: `new`



### getSubjectProgramEnrollment(individualUuid: String) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualUuid | String | - | - |

**Returns**: `IndividualContract`



### IndividualContract() → new

**Returns**: `new`



### getSubjectInfo(individualUuid: String) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualUuid | String | - | - |

**Returns**: `IndividualContract`



### IndividualContract() → new

**Returns**: `new`



### constructEnrolmentsMetadata(individual: Individual) → List<EnrolmentContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `List<EnrolmentContract>`



### EnrolmentContract() → new

**Returns**: `new`



### constructEncounters(encounters: Stream<Encounter>) → Set<EncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounters | Stream<Encounter> | - | - |

**Returns**: `Set<EncounterContract>`



### EncounterContract() → new

**Returns**: `new`



### EntityTypeContract() → new

**Returns**: `new`



### constructProgramEncounters(programEncounters: Stream<ProgramEncounter>) → Set<ProgramEncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounters | Stream<ProgramEncounter> | - | - |

**Returns**: `Set<ProgramEncounterContract>`



### ProgramEncounterContract() → new

**Returns**: `new`



### constructEnrolments(individual: Individual) → List<EnrolmentContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `List<EnrolmentContract>`



### EnrolmentContract() → new

**Returns**: `new`



### constructRelationships(individual: Individual) → List<RelationshipContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `List<RelationshipContract>`



### constructCommonRelationship(unknown: individualRelationship, unknown: individualB, unknown: individualRelation, unknown: individualRelationship.getRelationship() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualRelationship | - | - |
| unknown | individualB | - | - |
| unknown | individualRelation | - | - |
| unknown | individualRelationship.getRelationship( | - | - |

**Returns**: `return`



### constructCommonRelationship(unknown: individualRelationship, unknown: individualA, unknown: individualRelation, unknown: individualRelationship.getRelationship() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualRelationship | - | - |
| unknown | individualA | - | - |
| unknown | individualRelation | - | - |
| unknown | individualRelationship.getRelationship( | - | - |

**Returns**: `return`



### constructCommonRelationship(individualRelationship: IndividualRelationship, individual: Individual, individualRelation: IndividualRelation, individualAIsToBRelation: IndividualRelation) → RelationshipContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRelationship | IndividualRelationship | - | - |
| individual | Individual | - | - |
| individualRelation | IndividualRelation | - | - |
| individualAIsToBRelation | IndividualRelation | - | - |

**Returns**: `RelationshipContract`



### RelationshipContract() → new

**Returns**: `new`



### IndividualContract() → new

**Returns**: `new`



### IndividualRelationshipTypeContract() → new

**Returns**: `new`



### createGroupSubjectContractWeb(uuid: String, member: Individual, groupRole: GroupRole) → GroupSubjectContractWeb

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| member | Individual | - | - |
| groupRole | GroupRole | - | - |

**Returns**: `GroupSubjectContractWeb`



### GroupSubjectContractWeb() → new

**Returns**: `new`



### createIndividualContractWeb(individual: Individual) → IndividualContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `IndividualContract`



### IndividualContract() → new

**Returns**: `new`



### createEncounterMetadataContract(individual: Individual) → EncounterMetadataContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `EncounterMetadataContract`



### EncounterMetadataContract() → new

**Returns**: `new`



### voidSubject(individual: Individual) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `Individual`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, subjectTypeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| subjectTypeUUID | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository

**Returns**: `OperatingIndividualScopeAwareRepository`



### getObservationValueForUpload(formElement: FormElement, answerValue: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |
| answerValue | String | - | - |

**Returns**: `Object`



### save(individual: Individual) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `Individual`



### findPhoneNumber(subjectId: long) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectId | long | - | - |

**Returns**: `String`



### findPhoneNumber(unknown: individual) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individual | - | - |

**Returns**: `return`



### getIndividual(subjectId: long) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectId | long | - | - |

**Returns**: `Individual`



### findPhoneNumber(individual: Individual) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `String`



### fetchIndividualPhoneNumber(subjectId: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectId | String | - | - |

**Returns**: `String`



### PhoneNumberNotAvailableOrIncorrectException() → new

**Returns**: `new`



### getIndividual(subjectId: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectId | String | - | - |

**Returns**: `Individual`



### EntityNotFoundException(not: "Subject) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Subject | - | - |

**Returns**: `new`



### findByPhoneNumber(phoneNumber: String) → Optional<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `Optional<Individual>`



### voidSubjectsTree(address: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| address | AddressLevel | - | - |

**Returns**: `void`


