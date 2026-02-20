# API Reference: SyncController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/SyncController.java`

---

## Classes

### SyncController

**Inherits from**: (none)

#### Methods

##### SyncController(environment: Environment, individualService: IndividualService, encounterService: EncounterService, programEnrolmentService: ProgramEnrolmentService, programEncounterService: ProgramEncounterService, checklistService: ChecklistService, checklistItemService: ChecklistItemService, individualRelationshipService: IndividualRelationshipService, groupSubjectService: GroupSubjectService, commentService: CommentService, commentThreadService: CommentThreadService, addressLevelService: LocationService, locationMappingService: LocationMappingService, identifierAssignmentService: IdentifierAssignmentService, checklistDetailService: ChecklistDetailService, ruleService: RuleService, ruleDependencyService: RuleDependencyService, formService: FormService, formMappingService: FormMappingService, encounterTypeService: EncounterTypeService, programService: ProgramService, genderService: GenderService, individualRelationService: IndividualRelationService, individualRelationGenderMappingService: IndividualRelationGenderMappingService, individualRelationshipTypeService: IndividualRelationshipTypeService, conceptService: ConceptService, videoService: VideoService, subjectTypeService: SubjectTypeService, checklistItemDetailService: ChecklistItemDetailService, formElementGroupService: FormElementGroupService, formElementService: FormElementService, conceptAnswerService: ConceptAnswerService, identifierSourceService: IdentifierSourceService, organisationConfigService: OrganisationConfigService, platformTranslationService: PlatformTranslationService, translationService: TranslationService, groupsService: GroupsService, groupPrivilegeService: GroupPrivilegeService, groupRoleService: GroupRoleService, cardService: CardService, dashboardService: DashboardService, dashboardSectionService: DashboardSectionService, dashboardSectionCardMappingService: DashboardSectionCardMappingService, approvalStatusService: ApprovalStatusService, groupDashboardService: GroupDashboardService, entityApprovalStatusService: EntityApprovalStatusService, newsService: NewsService, userService: UserService, privilegeService: PrivilegeService, standardReportCardTypeService: StandardReportCardTypeService, userGroupService: UserGroupService, locationHierarchyService: LocationHierarchyService, extensionService: ExtensionService, subjectMigrationService: SubjectMigrationService, syncDetailService: SyncDetailsService, documentationService: DocumentationService, documentationItemService: DocumentationItemService, taskService: TaskService, taskTypeService: TaskTypeService, taskStatusService: TaskStatusService, taskUnAssigmentService: TaskUnAssigmentService, subjectProgramEligibilityService: SubjectProgramEligibilityService, menuItemService: MenuItemService, userSubjectAssignmentService: UserSubjectAssignmentService, scopedEntityApprovalStatusService: ScopedEntityApprovalStatusService, dashboardFilterService: DashboardFilterService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| environment | Environment | - | - |
| individualService | IndividualService | - | - |
| encounterService | EncounterService | - | - |
| programEnrolmentService | ProgramEnrolmentService | - | - |
| programEncounterService | ProgramEncounterService | - | - |
| checklistService | ChecklistService | - | - |
| checklistItemService | ChecklistItemService | - | - |
| individualRelationshipService | IndividualRelationshipService | - | - |
| groupSubjectService | GroupSubjectService | - | - |
| commentService | CommentService | - | - |
| commentThreadService | CommentThreadService | - | - |
| addressLevelService | LocationService | - | - |
| locationMappingService | LocationMappingService | - | - |
| identifierAssignmentService | IdentifierAssignmentService | - | - |
| checklistDetailService | ChecklistDetailService | - | - |
| ruleService | RuleService | - | - |
| ruleDependencyService | RuleDependencyService | - | - |
| formService | FormService | - | - |
| formMappingService | FormMappingService | - | - |
| encounterTypeService | EncounterTypeService | - | - |
| programService | ProgramService | - | - |
| genderService | GenderService | - | - |
| individualRelationService | IndividualRelationService | - | - |
| individualRelationGenderMappingService | IndividualRelationGenderMappingService | - | - |
| individualRelationshipTypeService | IndividualRelationshipTypeService | - | - |
| conceptService | ConceptService | - | - |
| videoService | VideoService | - | - |
| subjectTypeService | SubjectTypeService | - | - |
| checklistItemDetailService | ChecklistItemDetailService | - | - |
| formElementGroupService | FormElementGroupService | - | - |
| formElementService | FormElementService | - | - |
| conceptAnswerService | ConceptAnswerService | - | - |
| identifierSourceService | IdentifierSourceService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| platformTranslationService | PlatformTranslationService | - | - |
| translationService | TranslationService | - | - |
| groupsService | GroupsService | - | - |
| groupPrivilegeService | GroupPrivilegeService | - | - |
| groupRoleService | GroupRoleService | - | - |
| cardService | CardService | - | - |
| dashboardService | DashboardService | - | - |
| dashboardSectionService | DashboardSectionService | - | - |
| dashboardSectionCardMappingService | DashboardSectionCardMappingService | - | - |
| approvalStatusService | ApprovalStatusService | - | - |
| groupDashboardService | GroupDashboardService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| newsService | NewsService | - | - |
| userService | UserService | - | - |
| privilegeService | PrivilegeService | - | - |
| standardReportCardTypeService | StandardReportCardTypeService | - | - |
| userGroupService | UserGroupService | - | - |
| locationHierarchyService | LocationHierarchyService | - | - |
| extensionService | ExtensionService | - | - |
| subjectMigrationService | SubjectMigrationService | - | - |
| syncDetailService | SyncDetailsService | - | - |
| documentationService | DocumentationService | - | - |
| documentationItemService | DocumentationItemService | - | - |
| taskService | TaskService | - | - |
| taskTypeService | TaskTypeService | - | - |
| taskStatusService | TaskStatusService | - | - |
| taskUnAssigmentService | TaskUnAssigmentService | - | - |
| subjectProgramEligibilityService | SubjectProgramEligibilityService | - | - |
| menuItemService | MenuItemService | - | - |
| userSubjectAssignmentService | UserSubjectAssignmentService | - | - |
| scopedEntityApprovalStatusService | ScopedEntityApprovalStatusService | - | - |
| dashboardFilterService | DashboardFilterService | - | - |

**Returns**: `public`


##### init() → void

**Returns**: `void`


##### populateScopeAwareRepositoryMap() → void

**Returns**: `void`


##### populateEntityNameToTableMap() → void

**Returns**: `void`


##### populateDeviceAwareServiceMap() → void

**Returns**: `void`


##### DateTime() → new

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### getChangedEntities(clientSyncStatuses: List<EntitySyncStatusContract>, serverSyncableItems: Set<SyncableItem>, scopeAwareEAS: boolean, deviceId: String) → List<EntitySyncStatusContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clientSyncStatuses | List<EntitySyncStatusContract> | - | - |
| serverSyncableItems | Set<SyncableItem> | - | - |
| scopeAwareEAS | boolean | - | - |
| deviceId | String | - | - |

**Returns**: `List<EntitySyncStatusContract>`


##### removeDisabledEntities(entitySyncStatusContracts: List<EntitySyncStatusContract>, allSyncableItems: Set<SyncableItem>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatusContracts | List<EntitySyncStatusContract> | - | - |
| allSyncableItems | Set<SyncableItem> | - | - |

**Returns**: `void`


##### filterChangedEntities(entitySyncStatusContract: EntitySyncStatusContract, scopeAwareEAS: boolean, deviceId: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatusContract | EntitySyncStatusContract | - | - |
| scopeAwareEAS | boolean | - | - |
| deviceId | String | - | - |

**Returns**: `boolean`


##### getNowMinus10Seconds() → DateTime

**Returns**: `DateTime`


##### DateTime() → new

**Returns**: `new`




## Functions

### SyncController(environment: Environment, individualService: IndividualService, encounterService: EncounterService, programEnrolmentService: ProgramEnrolmentService, programEncounterService: ProgramEncounterService, checklistService: ChecklistService, checklistItemService: ChecklistItemService, individualRelationshipService: IndividualRelationshipService, groupSubjectService: GroupSubjectService, commentService: CommentService, commentThreadService: CommentThreadService, addressLevelService: LocationService, locationMappingService: LocationMappingService, identifierAssignmentService: IdentifierAssignmentService, checklistDetailService: ChecklistDetailService, ruleService: RuleService, ruleDependencyService: RuleDependencyService, formService: FormService, formMappingService: FormMappingService, encounterTypeService: EncounterTypeService, programService: ProgramService, genderService: GenderService, individualRelationService: IndividualRelationService, individualRelationGenderMappingService: IndividualRelationGenderMappingService, individualRelationshipTypeService: IndividualRelationshipTypeService, conceptService: ConceptService, videoService: VideoService, subjectTypeService: SubjectTypeService, checklistItemDetailService: ChecklistItemDetailService, formElementGroupService: FormElementGroupService, formElementService: FormElementService, conceptAnswerService: ConceptAnswerService, identifierSourceService: IdentifierSourceService, organisationConfigService: OrganisationConfigService, platformTranslationService: PlatformTranslationService, translationService: TranslationService, groupsService: GroupsService, groupPrivilegeService: GroupPrivilegeService, groupRoleService: GroupRoleService, cardService: CardService, dashboardService: DashboardService, dashboardSectionService: DashboardSectionService, dashboardSectionCardMappingService: DashboardSectionCardMappingService, approvalStatusService: ApprovalStatusService, groupDashboardService: GroupDashboardService, entityApprovalStatusService: EntityApprovalStatusService, newsService: NewsService, userService: UserService, privilegeService: PrivilegeService, standardReportCardTypeService: StandardReportCardTypeService, userGroupService: UserGroupService, locationHierarchyService: LocationHierarchyService, extensionService: ExtensionService, subjectMigrationService: SubjectMigrationService, syncDetailService: SyncDetailsService, documentationService: DocumentationService, documentationItemService: DocumentationItemService, taskService: TaskService, taskTypeService: TaskTypeService, taskStatusService: TaskStatusService, taskUnAssigmentService: TaskUnAssigmentService, subjectProgramEligibilityService: SubjectProgramEligibilityService, menuItemService: MenuItemService, userSubjectAssignmentService: UserSubjectAssignmentService, scopedEntityApprovalStatusService: ScopedEntityApprovalStatusService, dashboardFilterService: DashboardFilterService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| environment | Environment | - | - |
| individualService | IndividualService | - | - |
| encounterService | EncounterService | - | - |
| programEnrolmentService | ProgramEnrolmentService | - | - |
| programEncounterService | ProgramEncounterService | - | - |
| checklistService | ChecklistService | - | - |
| checklistItemService | ChecklistItemService | - | - |
| individualRelationshipService | IndividualRelationshipService | - | - |
| groupSubjectService | GroupSubjectService | - | - |
| commentService | CommentService | - | - |
| commentThreadService | CommentThreadService | - | - |
| addressLevelService | LocationService | - | - |
| locationMappingService | LocationMappingService | - | - |
| identifierAssignmentService | IdentifierAssignmentService | - | - |
| checklistDetailService | ChecklistDetailService | - | - |
| ruleService | RuleService | - | - |
| ruleDependencyService | RuleDependencyService | - | - |
| formService | FormService | - | - |
| formMappingService | FormMappingService | - | - |
| encounterTypeService | EncounterTypeService | - | - |
| programService | ProgramService | - | - |
| genderService | GenderService | - | - |
| individualRelationService | IndividualRelationService | - | - |
| individualRelationGenderMappingService | IndividualRelationGenderMappingService | - | - |
| individualRelationshipTypeService | IndividualRelationshipTypeService | - | - |
| conceptService | ConceptService | - | - |
| videoService | VideoService | - | - |
| subjectTypeService | SubjectTypeService | - | - |
| checklistItemDetailService | ChecklistItemDetailService | - | - |
| formElementGroupService | FormElementGroupService | - | - |
| formElementService | FormElementService | - | - |
| conceptAnswerService | ConceptAnswerService | - | - |
| identifierSourceService | IdentifierSourceService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| platformTranslationService | PlatformTranslationService | - | - |
| translationService | TranslationService | - | - |
| groupsService | GroupsService | - | - |
| groupPrivilegeService | GroupPrivilegeService | - | - |
| groupRoleService | GroupRoleService | - | - |
| cardService | CardService | - | - |
| dashboardService | DashboardService | - | - |
| dashboardSectionService | DashboardSectionService | - | - |
| dashboardSectionCardMappingService | DashboardSectionCardMappingService | - | - |
| approvalStatusService | ApprovalStatusService | - | - |
| groupDashboardService | GroupDashboardService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| newsService | NewsService | - | - |
| userService | UserService | - | - |
| privilegeService | PrivilegeService | - | - |
| standardReportCardTypeService | StandardReportCardTypeService | - | - |
| userGroupService | UserGroupService | - | - |
| locationHierarchyService | LocationHierarchyService | - | - |
| extensionService | ExtensionService | - | - |
| subjectMigrationService | SubjectMigrationService | - | - |
| syncDetailService | SyncDetailsService | - | - |
| documentationService | DocumentationService | - | - |
| documentationItemService | DocumentationItemService | - | - |
| taskService | TaskService | - | - |
| taskTypeService | TaskTypeService | - | - |
| taskStatusService | TaskStatusService | - | - |
| taskUnAssigmentService | TaskUnAssigmentService | - | - |
| subjectProgramEligibilityService | SubjectProgramEligibilityService | - | - |
| menuItemService | MenuItemService | - | - |
| userSubjectAssignmentService | UserSubjectAssignmentService | - | - |
| scopedEntityApprovalStatusService | ScopedEntityApprovalStatusService | - | - |
| dashboardFilterService | DashboardFilterService | - | - |

**Returns**: `public`



### init() → void

**Returns**: `void`



### populateScopeAwareRepositoryMap() → void

**Returns**: `void`



### populateEntityNameToTableMap() → void

**Returns**: `void`



### populateDeviceAwareServiceMap() → void

**Returns**: `void`



### DateTime() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### getChangedEntities(clientSyncStatuses: List<EntitySyncStatusContract>, serverSyncableItems: Set<SyncableItem>, scopeAwareEAS: boolean, deviceId: String) → List<EntitySyncStatusContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clientSyncStatuses | List<EntitySyncStatusContract> | - | - |
| serverSyncableItems | Set<SyncableItem> | - | - |
| scopeAwareEAS | boolean | - | - |
| deviceId | String | - | - |

**Returns**: `List<EntitySyncStatusContract>`



### removeDisabledEntities(entitySyncStatusContracts: List<EntitySyncStatusContract>, allSyncableItems: Set<SyncableItem>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatusContracts | List<EntitySyncStatusContract> | - | - |
| allSyncableItems | Set<SyncableItem> | - | - |

**Returns**: `void`



### filterChangedEntities(entitySyncStatusContract: EntitySyncStatusContract, scopeAwareEAS: boolean, deviceId: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entitySyncStatusContract | EntitySyncStatusContract | - | - |
| scopeAwareEAS | boolean | - | - |
| deviceId | String | - | - |

**Returns**: `boolean`



### getNowMinus10Seconds() → DateTime

**Returns**: `DateTime`



### DateTime() → new

**Returns**: `new`


