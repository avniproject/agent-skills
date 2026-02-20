# API Reference: UserSubjectAssignmentService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/UserSubjectAssignmentService.java`

---

## Classes

### UserSubjectAssignmentService

**Inherits from**: NonScopeAwareService

#### Methods

##### UserSubjectAssignmentService(userSubjectAssignmentRepository: UserSubjectAssignmentRepository, userRepository: UserRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, groupRepository: GroupRepository, subjectSearchRepository: SubjectSearchRepository, conceptRepository: ConceptRepository, individualRepository: IndividualRepository, checklistService: ChecklistService, checklistItemService: ChecklistItemService, individualRelationshipService: IndividualRelationshipService, groupSubjectRepository: GroupSubjectRepository, privilegeService: GroupPrivilegeService, addressLevelService: AddressLevelService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignmentRepository | UserSubjectAssignmentRepository | - | - |
| userRepository | UserRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| groupRepository | GroupRepository | - | - |
| subjectSearchRepository | SubjectSearchRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| checklistService | ChecklistService | - | - |
| checklistItemService | ChecklistItemService | - | - |
| individualRelationshipService | IndividualRelationshipService | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| privilegeService | GroupPrivilegeService | - | - |
| addressLevelService | AddressLevelService | - | - |

**Returns**: `public`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getUserSubjectAssignmentMetadata() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### addToSyncAttributes(st: String, syncAttributes: List<ConceptContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| st | String | - | - |
| syncAttributes | List<ConceptContract> | - | - |

**Returns**: `void`


##### searchSubjects(subjectSearchRequest: SubjectSearchRequest) → LinkedHashMap<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectSearchRequest | SubjectSearchRequest | - | - |

**Returns**: `LinkedHashMap<String, Object>`


##### SubjectAssignmentSearchQueryBuilder() → new

**Returns**: `new`


##### SpelAwareProxyProjectionFactory() → new

**Returns**: `new`


##### SubjectAssignmentSearchQueryBuilder() → new

**Returns**: `new`


##### assignSubjects(userSubjectAssignmentRequest: UserSubjectAssignmentContract) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignmentRequest | UserSubjectAssignmentContract | - | - |

**Returns**: `List<UserSubjectAssignment>`


##### assignSubjects(unknown: user, unknown: subjectList, unknown: userSubjectAssignmentRequest.isVoided() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |
| unknown | subjectList | - | - |
| unknown | userSubjectAssignmentRequest.isVoided( | - | - |

**Returns**: `return`


##### assignSubjects(user: User, subjectList: List<Individual>, assignmentVoided: boolean) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| subjectList | List<Individual> | - | - |
| assignmentVoided | boolean | - | - |

**Returns**: `List<UserSubjectAssignment>`


##### ValidationException(\n": "Errors:, unknown: errors) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| \n" | "Errors: | - | - |
| unknown | errors | - | - |

**Returns**: `new`


##### validateAndCreateUpdateUserSubjectAssignment(assignmentVoided: boolean, user: User, subject: Individual, userSubjectAssignmentList: List<UserSubjectAssignment>, addressLevels: List<Long>, errors: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| user | User | - | - |
| subject | Individual | - | - |
| userSubjectAssignmentList | List<UserSubjectAssignment> | - | - |
| addressLevels | List<Long> | - | - |
| errors | List<String> | - | - |

**Returns**: `void`


##### checkIfSubjectIsPartOfGroupAssignedToUser(assignmentVoided: boolean, user: User, subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `void`


##### ValidationException((%s: String.format("Individual) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| (%s | String.format("Individual | - | - |

**Returns**: `new`


##### user(unknown: %s) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `the`


##### group(unknown: %s) → since

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `since`


##### member(unknown: %s) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `the`


##### user(unknown: %s) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `the`


##### checkIfSubjectLiesWithinUserCatchment(assignmentVoided: boolean, subject: Individual, addressLevels: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| subject | Individual | - | - |
| addressLevels | List<Long> | - | - |

**Returns**: `void`


##### ValidationException(of: String.format("Assigment) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| of | String.format("Assigment | - | - |

**Returns**: `new`


##### saveAll(userSubjectAssignmentList: List<UserSubjectAssignment>, assignmentVoided: boolean) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignmentList | List<UserSubjectAssignment> | - | - |
| assignmentVoided | boolean | - | - |

**Returns**: `List<UserSubjectAssignment>`


##### save(userSubjectAssignment: UserSubjectAssignment) → UserSubjectAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignment | UserSubjectAssignment | - | - |

**Returns**: `UserSubjectAssignment`


##### createUpdateAssignment(assignmentVoided: boolean, userSubjectAssignmentList: List<UserSubjectAssignment>, user: User, subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| userSubjectAssignmentList | List<UserSubjectAssignment> | - | - |
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `void`


##### onlyIfAssignGroupThenAssignMembersAlsoToUser(assignmentVoided: boolean, userSubjectAssignmentList: List<UserSubjectAssignment>, user: User, subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| userSubjectAssignmentList | List<UserSubjectAssignment> | - | - |
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `void`


##### updateAuditForUserSubjectAssignment(userSubjectAssignment: UserSubjectAssignment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignment | UserSubjectAssignment | - | - |

**Returns**: `void`


##### triggerSyncForSubjectAndItsChildrenForUser(individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `void`


##### isAssignedToUser(subject: Individual, user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| user | User | - | - |

**Returns**: `boolean`




## Functions

### UserSubjectAssignmentService(userSubjectAssignmentRepository: UserSubjectAssignmentRepository, userRepository: UserRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, groupRepository: GroupRepository, subjectSearchRepository: SubjectSearchRepository, conceptRepository: ConceptRepository, individualRepository: IndividualRepository, checklistService: ChecklistService, checklistItemService: ChecklistItemService, individualRelationshipService: IndividualRelationshipService, groupSubjectRepository: GroupSubjectRepository, privilegeService: GroupPrivilegeService, addressLevelService: AddressLevelService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignmentRepository | UserSubjectAssignmentRepository | - | - |
| userRepository | UserRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| groupRepository | GroupRepository | - | - |
| subjectSearchRepository | SubjectSearchRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| checklistService | ChecklistService | - | - |
| checklistItemService | ChecklistItemService | - | - |
| individualRelationshipService | IndividualRelationshipService | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| privilegeService | GroupPrivilegeService | - | - |
| addressLevelService | AddressLevelService | - | - |

**Returns**: `public`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getUserSubjectAssignmentMetadata() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### addToSyncAttributes(st: String, syncAttributes: List<ConceptContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| st | String | - | - |
| syncAttributes | List<ConceptContract> | - | - |

**Returns**: `void`



### searchSubjects(subjectSearchRequest: SubjectSearchRequest) → LinkedHashMap<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectSearchRequest | SubjectSearchRequest | - | - |

**Returns**: `LinkedHashMap<String, Object>`



### SubjectAssignmentSearchQueryBuilder() → new

**Returns**: `new`



### SpelAwareProxyProjectionFactory() → new

**Returns**: `new`



### SubjectAssignmentSearchQueryBuilder() → new

**Returns**: `new`



### assignSubjects(userSubjectAssignmentRequest: UserSubjectAssignmentContract) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignmentRequest | UserSubjectAssignmentContract | - | - |

**Returns**: `List<UserSubjectAssignment>`



### assignSubjects(unknown: user, unknown: subjectList, unknown: userSubjectAssignmentRequest.isVoided() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |
| unknown | subjectList | - | - |
| unknown | userSubjectAssignmentRequest.isVoided( | - | - |

**Returns**: `return`



### assignSubjects(user: User, subjectList: List<Individual>, assignmentVoided: boolean) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| subjectList | List<Individual> | - | - |
| assignmentVoided | boolean | - | - |

**Returns**: `List<UserSubjectAssignment>`



### ValidationException(\n": "Errors:, unknown: errors) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| \n" | "Errors: | - | - |
| unknown | errors | - | - |

**Returns**: `new`



### validateAndCreateUpdateUserSubjectAssignment(assignmentVoided: boolean, user: User, subject: Individual, userSubjectAssignmentList: List<UserSubjectAssignment>, addressLevels: List<Long>, errors: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| user | User | - | - |
| subject | Individual | - | - |
| userSubjectAssignmentList | List<UserSubjectAssignment> | - | - |
| addressLevels | List<Long> | - | - |
| errors | List<String> | - | - |

**Returns**: `void`



### checkIfSubjectIsPartOfGroupAssignedToUser(assignmentVoided: boolean, user: User, subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `void`



### ValidationException((%s: String.format("Individual) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| (%s | String.format("Individual | - | - |

**Returns**: `new`



### user(unknown: %s) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `the`



### group(unknown: %s) → since

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `since`



### member(unknown: %s) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `the`



### user(unknown: %s) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `the`



### checkIfSubjectLiesWithinUserCatchment(assignmentVoided: boolean, subject: Individual, addressLevels: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| subject | Individual | - | - |
| addressLevels | List<Long> | - | - |

**Returns**: `void`



### ValidationException(of: String.format("Assigment) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| of | String.format("Assigment | - | - |

**Returns**: `new`



### saveAll(userSubjectAssignmentList: List<UserSubjectAssignment>, assignmentVoided: boolean) → List<UserSubjectAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignmentList | List<UserSubjectAssignment> | - | - |
| assignmentVoided | boolean | - | - |

**Returns**: `List<UserSubjectAssignment>`



### save(userSubjectAssignment: UserSubjectAssignment) → UserSubjectAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignment | UserSubjectAssignment | - | - |

**Returns**: `UserSubjectAssignment`



### createUpdateAssignment(assignmentVoided: boolean, userSubjectAssignmentList: List<UserSubjectAssignment>, user: User, subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| userSubjectAssignmentList | List<UserSubjectAssignment> | - | - |
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `void`



### onlyIfAssignGroupThenAssignMembersAlsoToUser(assignmentVoided: boolean, userSubjectAssignmentList: List<UserSubjectAssignment>, user: User, subject: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| assignmentVoided | boolean | - | - |
| userSubjectAssignmentList | List<UserSubjectAssignment> | - | - |
| user | User | - | - |
| subject | Individual | - | - |

**Returns**: `void`



### updateAuditForUserSubjectAssignment(userSubjectAssignment: UserSubjectAssignment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userSubjectAssignment | UserSubjectAssignment | - | - |

**Returns**: `void`



### triggerSyncForSubjectAndItsChildrenForUser(individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `void`



### isAssignedToUser(subject: Individual, user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| user | User | - | - |

**Returns**: `boolean`


