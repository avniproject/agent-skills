# API Reference: AccessControlService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/accessControl/AccessControlService.java`

---

## Classes

### AccessControlService

**Inherits from**: (none)

#### Methods

##### AccessControlService(userRepository: UserRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, privilegeRepository: PrivilegeRepository, catchmentService: CatchmentService, userSubjectAssignmentService: UserSubjectAssignmentService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| privilegeRepository | PrivilegeRepository | - | - |
| catchmentService | CatchmentService | - | - |
| userSubjectAssignmentService | UserSubjectAssignmentService | - | - |
| userService | UserService | - | - |

**Returns**: `public`


##### checkPrivilege(privilegeType: PrivilegeType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |

**Returns**: `void`


##### checkOrgPrivilege(privilegeType: PrivilegeType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |

**Returns**: `void`


##### checkPrivilege(contextUser: User, privilegeType: PrivilegeType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |

**Returns**: `void`


##### checkHasAnyOfSpecificPrivileges(privilegeTypes: List<PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `void`


##### checkHasAllOfSpecificPrivileges(privilegeTypes: List<PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `void`


##### checkHasAllOfSpecificPrivileges(contextUser: User, privilegeTypes: List<PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `void`


##### checkHasAnyOfSpecificPrivileges(contextUser: User, privilegeTypes: List<PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `void`


##### userExistsAndHasAllPrivileges(contextUser: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |

**Returns**: `boolean`


##### AvniNoUserSessionException(not: "User) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "User | - | - |

**Returns**: `new`


##### checkSubjectPrivilege(privilegeType: PrivilegeType, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### checkSubjectPrivilege(privilegeType: PrivilegeType, groupSubject: GroupSubject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| groupSubject | GroupSubject | - | - |

**Returns**: `void`


##### checkSubjectPrivilege(privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### checkHasAnyOfSpecificSubjectPrivileges(privilegeTypes: List<PrivilegeType>, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeTypes | List<PrivilegeType> | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### checkSubjectPrivilege(privilegeType: PrivilegeType, individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| individual | Individual | - | - |

**Returns**: `void`


##### checkSubjectPrivilege(privilegeType: PrivilegeType, subjectTypeUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjectTypeUUIDs | List<String> | - | - |

**Returns**: `void`


##### checkSubjectPrivileges(privilegeType: PrivilegeType, subjects: Individual...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjects | Individual... | - | - |

**Returns**: `void`


##### checkSubjectPrivileges(privilegeType: PrivilegeType, subjects: List<Individual>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjects | List<Individual> | - | - |

**Returns**: `void`


##### checkGroupSubjectPrivileges(privilegeType: PrivilegeType, groupSubjects: List<GroupSubject>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| groupSubjects | List<GroupSubject> | - | - |

**Returns**: `void`


##### checkSubjectPrivilege(contextUser: User, privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### checkHasAnyOfSpecificSubjectPrivileges(contextUser: User, privilegeTypes: List<PrivilegeType>, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeTypes | List<PrivilegeType> | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### checkProgramPrivilege(privilegeType: PrivilegeType, programEnrolment: ProgramEnrolment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `void`


##### checkProgramPrivilege(privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### checkProgramPrivileges(privilegeType: PrivilegeType, programEnrolments: List<ProgramEnrolment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programEnrolments | List<ProgramEnrolment> | - | - |

**Returns**: `void`


##### checkProgramPrivilege(privilegeType: PrivilegeType, programUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programUUIDs | List<String> | - | - |

**Returns**: `void`


##### checkProgramPrivilege(contextUser: User, privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### checkProgramEncounterPrivilege(privilegeType: PrivilegeType, programEncounter: ProgramEncounter) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programEncounter | ProgramEncounter | - | - |

**Returns**: `void`


##### checkProgramEncounterPrivilege(contextUser: User, privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### hasProgramEncounterPrivilege(String: @NotNull) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @NotNull | - | - |

**Returns**: `boolean`


##### hasProgramEncounterPrivilege(contextUser: User, String: @NotNull) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| String | @NotNull | - | - |

**Returns**: `boolean`


##### checkProgramEncounterPrivilege(privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### checkProgramEncounterPrivilege(privilegeType: PrivilegeType, encounterTypeUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| encounterTypeUUIDs | List<String> | - | - |

**Returns**: `void`


##### checkProgramEncounterPrivileges(privilegeType: PrivilegeType, programEncounters: List<ProgramEncounter>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programEncounters | List<ProgramEncounter> | - | - |

**Returns**: `void`


##### checkEncounterPrivilege(privilegeType: PrivilegeType, encounter: Encounter) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| encounter | Encounter | - | - |

**Returns**: `void`


##### checkEncounterPrivilege(privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### checkEncounterPrivilege(contextUser: User, privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`


##### checkEncounterPrivilege(privilegeType: PrivilegeType, encounterTypeUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| encounterTypeUUIDs | List<String> | - | - |

**Returns**: `void`


##### checkEncounterPrivileges(privilegeType: PrivilegeType, encounters: List<Encounter>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| encounters | List<Encounter> | - | - |

**Returns**: `void`


##### assertIsSuperAdmin() → void

**Returns**: `void`


##### assertIsNotSuperAdmin() → void

**Returns**: `void`


##### checkApprovePrivilegeOnEntityApprovalStatus(entityType: String, entityTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityTypeUuid | String | - | - |

**Returns**: `void`


##### checkApprovePrivilegeOnEntityApprovalStatuses(entityApprovalStatuses: List<EntityApprovalStatus>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatuses | List<EntityApprovalStatus> | - | - |

**Returns**: `void`


##### checkSubjectAccess(subject: Individual, previousPartitionState: SubjectPartitionData) → SubjectPartitionCheckStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| previousPartitionState | SubjectPartitionData | - | - |

**Returns**: `SubjectPartitionCheckStatus`


##### getSyncSettingsList(syncSettings: JsonObject) → List<UserSyncSettings>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncSettings | JsonObject | - | - |

**Returns**: `List<UserSyncSettings>`




## Functions

### AccessControlService(userRepository: UserRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, privilegeRepository: PrivilegeRepository, catchmentService: CatchmentService, userSubjectAssignmentService: UserSubjectAssignmentService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| privilegeRepository | PrivilegeRepository | - | - |
| catchmentService | CatchmentService | - | - |
| userSubjectAssignmentService | UserSubjectAssignmentService | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### checkPrivilege(privilegeType: PrivilegeType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |

**Returns**: `void`



### checkOrgPrivilege(privilegeType: PrivilegeType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |

**Returns**: `void`



### checkPrivilege(contextUser: User, privilegeType: PrivilegeType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |

**Returns**: `void`



### checkHasAnyOfSpecificPrivileges(privilegeTypes: List<PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `void`



### checkHasAllOfSpecificPrivileges(privilegeTypes: List<PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `void`



### checkHasAllOfSpecificPrivileges(contextUser: User, privilegeTypes: List<PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `void`



### checkHasAnyOfSpecificPrivileges(contextUser: User, privilegeTypes: List<PrivilegeType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `void`



### userExistsAndHasAllPrivileges(contextUser: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |

**Returns**: `boolean`



### AvniNoUserSessionException(not: "User) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "User | - | - |

**Returns**: `new`



### checkSubjectPrivilege(privilegeType: PrivilegeType, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`



### checkSubjectPrivilege(privilegeType: PrivilegeType, groupSubject: GroupSubject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| groupSubject | GroupSubject | - | - |

**Returns**: `void`



### checkSubjectPrivilege(privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### checkHasAnyOfSpecificSubjectPrivileges(privilegeTypes: List<PrivilegeType>, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeTypes | List<PrivilegeType> | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### checkSubjectPrivilege(privilegeType: PrivilegeType, individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| individual | Individual | - | - |

**Returns**: `void`



### checkSubjectPrivilege(privilegeType: PrivilegeType, subjectTypeUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjectTypeUUIDs | List<String> | - | - |

**Returns**: `void`



### checkSubjectPrivileges(privilegeType: PrivilegeType, subjects: Individual...) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjects | Individual... | - | - |

**Returns**: `void`



### checkSubjectPrivileges(privilegeType: PrivilegeType, subjects: List<Individual>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjects | List<Individual> | - | - |

**Returns**: `void`



### checkGroupSubjectPrivileges(privilegeType: PrivilegeType, groupSubjects: List<GroupSubject>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| groupSubjects | List<GroupSubject> | - | - |

**Returns**: `void`



### checkSubjectPrivilege(contextUser: User, privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### checkHasAnyOfSpecificSubjectPrivileges(contextUser: User, privilegeTypes: List<PrivilegeType>, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeTypes | List<PrivilegeType> | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### checkProgramPrivilege(privilegeType: PrivilegeType, programEnrolment: ProgramEnrolment) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `void`



### checkProgramPrivilege(privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### checkProgramPrivileges(privilegeType: PrivilegeType, programEnrolments: List<ProgramEnrolment>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programEnrolments | List<ProgramEnrolment> | - | - |

**Returns**: `void`



### checkProgramPrivilege(privilegeType: PrivilegeType, programUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programUUIDs | List<String> | - | - |

**Returns**: `void`



### checkProgramPrivilege(contextUser: User, privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### checkProgramEncounterPrivilege(privilegeType: PrivilegeType, programEncounter: ProgramEncounter) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programEncounter | ProgramEncounter | - | - |

**Returns**: `void`



### checkProgramEncounterPrivilege(contextUser: User, privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### hasProgramEncounterPrivilege(String: @NotNull) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @NotNull | - | - |

**Returns**: `boolean`



### hasProgramEncounterPrivilege(contextUser: User, String: @NotNull) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| String | @NotNull | - | - |

**Returns**: `boolean`



### checkProgramEncounterPrivilege(privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### checkProgramEncounterPrivilege(privilegeType: PrivilegeType, encounterTypeUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| encounterTypeUUIDs | List<String> | - | - |

**Returns**: `void`



### checkProgramEncounterPrivileges(privilegeType: PrivilegeType, programEncounters: List<ProgramEncounter>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| programEncounters | List<ProgramEncounter> | - | - |

**Returns**: `void`



### checkEncounterPrivilege(privilegeType: PrivilegeType, encounter: Encounter) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| encounter | Encounter | - | - |

**Returns**: `void`



### checkEncounterPrivilege(privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### checkEncounterPrivilege(contextUser: User, privilegeType: PrivilegeType, String: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextUser | User | - | - |
| privilegeType | PrivilegeType | - | - |
| String | @NotNull | - | - |

**Returns**: `void`



### checkEncounterPrivilege(privilegeType: PrivilegeType, encounterTypeUUIDs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| encounterTypeUUIDs | List<String> | - | - |

**Returns**: `void`



### checkEncounterPrivileges(privilegeType: PrivilegeType, encounters: List<Encounter>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| encounters | List<Encounter> | - | - |

**Returns**: `void`



### assertIsSuperAdmin() → void

**Returns**: `void`



### assertIsNotSuperAdmin() → void

**Returns**: `void`



### checkApprovePrivilegeOnEntityApprovalStatus(entityType: String, entityTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityTypeUuid | String | - | - |

**Returns**: `void`



### checkApprovePrivilegeOnEntityApprovalStatuses(entityApprovalStatuses: List<EntityApprovalStatus>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatuses | List<EntityApprovalStatus> | - | - |

**Returns**: `void`



### checkSubjectAccess(subject: Individual, previousPartitionState: SubjectPartitionData) → SubjectPartitionCheckStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| previousPartitionState | SubjectPartitionData | - | - |

**Returns**: `SubjectPartitionCheckStatus`



### getSyncSettingsList(syncSettings: JsonObject) → List<UserSyncSettings>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncSettings | JsonObject | - | - |

**Returns**: `List<UserSyncSettings>`


