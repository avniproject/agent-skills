# API Reference: OrganisationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/OrganisationService.java`

---

## Classes

### OrganisationService

**Inherits from**: (none)

#### Methods

##### OrganisationService(formRepository: FormRepository, addressLevelTypeRepository: AddressLevelTypeRepository, locationRepository: LocationRepository, catchmentRepository: CatchmentRepository, subjectTypeRepository: SubjectTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository, encounterTypeRepository: EncounterTypeRepository, programRepository: ProgramRepository, operationalProgramRepository: OperationalProgramRepository, formMappingRepository: FormMappingRepository, organisationConfigRepository: OrganisationConfigRepository, identifierSourceRepository: IdentifierSourceRepository, conceptRepository: ConceptRepository, individualRelationService: IndividualRelationService, individualRelationshipTypeService: IndividualRelationshipTypeService, checklistDetailService: ChecklistDetailService, groupRepository: GroupRepository, groupRoleRepository: GroupRoleRepository, groupPrivilegeRepository: GroupPrivilegeRepository, userGroupRepository: UserGroupRepository, checklistItemDetailRepository: ChecklistItemDetailRepository, checklistDetailRepository: ChecklistDetailRepository, identifierUserAssignmentRepository: IdentifierUserAssignmentRepository, individualRelationGenderMappingRepository: IndividualRelationGenderMappingRepository, individualRelationshipTypeRepository: IndividualRelationshipTypeRepository, individualRelationRepository: IndividualRelationRepository, formElementRepository: FormElementRepository, formElementGroupRepository: FormElementGroupRepository, conceptAnswerRepository: ConceptAnswerRepository, translationRepository: TranslationRepository, videoRepository: VideoRepository, videoService: VideoService, cardService: CardService, dashboardService: DashboardService, menuItemService: MenuItemService, messagingService: MessagingService, cardRepository: CardRepository, dashboardRepository: DashboardRepository, dashboardSectionCardMappingRepository: DashboardSectionCardMappingRepository, dashboardFilterRepository: DashboardFilterRepository, dashboardSectionRepository: DashboardSectionRepository, groupDashboardRepository: GroupDashboardRepository, msg91ConfigRepository: Msg91ConfigRepository, s3Service: S3Service, userService: UserService, ruleFailureTelemetryRepository: RuleFailureTelemetryRepository, identifierAssignmentRepository: IdentifierAssignmentRepository, syncTelemetryRepository: SyncTelemetryRepository, videoTelemetricRepository: VideoTelemetricRepository, groupSubjectRepository: GroupSubjectRepository, individualRelationshipRepository: IndividualRelationshipRepository, checklistItemRepository: ChecklistItemRepository, checklistRepository: ChecklistRepository, programEncounterRepository: ProgramEncounterRepository, programEnrolmentRepository: ProgramEnrolmentRepository, encounterRepository: EncounterRepository, individualRepository: IndividualRepository, entityApprovalStatusRepository: EntityApprovalStatusRepository, commentRepository: CommentRepository, commentThreadRepository: CommentThreadRepository, newsRepository: NewsRepository, subjectMigrationRepository: SubjectMigrationRepository, documentationService: DocumentationService, taskTypeService: TaskTypeService, taskStatusService: TaskStatusService, entityTypeRetrieverService: EntityTypeRetrieverService, ruleDependencyRepository: RuleDependencyRepository, ruleRepository: RuleRepository, userSubjectAssignmentRepository: UserSubjectAssignmentRepository, subjectProgramEligibilityRepository: SubjectProgramEligibilityRepository, taskRepository: TaskRepository, messageRequestQueueRepository: MessageRequestQueueRepository, messageReceiverRepository: MessageReceiverRepository, organisationConfigService: OrganisationConfigService, genderRepository: GenderRepository, organisationRepository: OrganisationRepository, userSubjectRepository: UserSubjectRepository, answerConceptMigrationRepository: AnswerConceptMigrationRepository, customQueryRepository: CustomQueryRepository, documentationRepository: DocumentationRepository, documentationItemRepository: DocumentationItemRepository, exportJobParametersRepository: ExportJobParametersRepository, externalSystemConfigRepository: ExternalSystemConfigRepository, locationMappingRepository: LocationMappingRepository, menuItemRepository: MenuItemRepository, manualMessageRepository: ManualMessageRepository, messageRuleRepository: MessageRuleRepository, resetSyncRepository: ResetSyncRepository, ruleFailureLogRepository: RuleFailureLogRepository, taskStatusRepository: TaskStatusRepository, taskTypeRepository: TaskTypeRepository, taskUnAssignmentRepository: TaskUnAssignmentRepository, userRepository: UserRepository, jdbcTemplate: JdbcTemplate, reportCardMapper: ReportCardMapper, dashboardMapper: DashboardMapper, groupDashboardService: GroupDashboardService, customQueryService: CustomQueryService, storageManagementConfigRepository: StorageManagementConfigRepository, locationService: LocationService, catchmentService: CatchmentService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRepository | FormRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |
| catchmentRepository | CatchmentRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| organisationConfigRepository | OrganisationConfigRepository | - | - |
| identifierSourceRepository | IdentifierSourceRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| individualRelationService | IndividualRelationService | - | - |
| individualRelationshipTypeService | IndividualRelationshipTypeService | - | - |
| checklistDetailService | ChecklistDetailService | - | - |
| groupRepository | GroupRepository | - | - |
| groupRoleRepository | GroupRoleRepository | - | - |
| groupPrivilegeRepository | GroupPrivilegeRepository | - | - |
| userGroupRepository | UserGroupRepository | - | - |
| checklistItemDetailRepository | ChecklistItemDetailRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| identifierUserAssignmentRepository | IdentifierUserAssignmentRepository | - | - |
| individualRelationGenderMappingRepository | IndividualRelationGenderMappingRepository | - | - |
| individualRelationshipTypeRepository | IndividualRelationshipTypeRepository | - | - |
| individualRelationRepository | IndividualRelationRepository | - | - |
| formElementRepository | FormElementRepository | - | - |
| formElementGroupRepository | FormElementGroupRepository | - | - |
| conceptAnswerRepository | ConceptAnswerRepository | - | - |
| translationRepository | TranslationRepository | - | - |
| videoRepository | VideoRepository | - | - |
| videoService | VideoService | - | - |
| cardService | CardService | - | - |
| dashboardService | DashboardService | - | - |
| menuItemService | MenuItemService | - | - |
| messagingService | MessagingService | - | - |
| cardRepository | CardRepository | - | - |
| dashboardRepository | DashboardRepository | - | - |
| dashboardSectionCardMappingRepository | DashboardSectionCardMappingRepository | - | - |
| dashboardFilterRepository | DashboardFilterRepository | - | - |
| dashboardSectionRepository | DashboardSectionRepository | - | - |
| groupDashboardRepository | GroupDashboardRepository | - | - |
| msg91ConfigRepository | Msg91ConfigRepository | - | - |
| s3Service | S3Service | - | - |
| userService | UserService | - | - |
| ruleFailureTelemetryRepository | RuleFailureTelemetryRepository | - | - |
| identifierAssignmentRepository | IdentifierAssignmentRepository | - | - |
| syncTelemetryRepository | SyncTelemetryRepository | - | - |
| videoTelemetricRepository | VideoTelemetricRepository | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| individualRelationshipRepository | IndividualRelationshipRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| checklistRepository | ChecklistRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| encounterRepository | EncounterRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| commentRepository | CommentRepository | - | - |
| commentThreadRepository | CommentThreadRepository | - | - |
| newsRepository | NewsRepository | - | - |
| subjectMigrationRepository | SubjectMigrationRepository | - | - |
| documentationService | DocumentationService | - | - |
| taskTypeService | TaskTypeService | - | - |
| taskStatusService | TaskStatusService | - | - |
| entityTypeRetrieverService | EntityTypeRetrieverService | - | - |
| ruleDependencyRepository | RuleDependencyRepository | - | - |
| ruleRepository | RuleRepository | - | - |
| userSubjectAssignmentRepository | UserSubjectAssignmentRepository | - | - |
| subjectProgramEligibilityRepository | SubjectProgramEligibilityRepository | - | - |
| taskRepository | TaskRepository | - | - |
| messageRequestQueueRepository | MessageRequestQueueRepository | - | - |
| messageReceiverRepository | MessageReceiverRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| genderRepository | GenderRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| userSubjectRepository | UserSubjectRepository | - | - |
| answerConceptMigrationRepository | AnswerConceptMigrationRepository | - | - |
| customQueryRepository | CustomQueryRepository | - | - |
| documentationRepository | DocumentationRepository | - | - |
| documentationItemRepository | DocumentationItemRepository | - | - |
| exportJobParametersRepository | ExportJobParametersRepository | - | - |
| externalSystemConfigRepository | ExternalSystemConfigRepository | - | - |
| locationMappingRepository | LocationMappingRepository | - | - |
| menuItemRepository | MenuItemRepository | - | - |
| manualMessageRepository | ManualMessageRepository | - | - |
| messageRuleRepository | MessageRuleRepository | - | - |
| resetSyncRepository | ResetSyncRepository | - | - |
| ruleFailureLogRepository | RuleFailureLogRepository | - | - |
| taskStatusRepository | TaskStatusRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| taskUnAssignmentRepository | TaskUnAssignmentRepository | - | - |
| userRepository | UserRepository | - | - |
| jdbcTemplate | JdbcTemplate | - | - |
| reportCardMapper | ReportCardMapper | - | - |
| dashboardMapper | DashboardMapper | - | - |
| groupDashboardService | GroupDashboardService | - | - |
| customQueryService | CustomQueryService | - | - |
| storageManagementConfigRepository | StorageManagementConfigRepository | - | - |
| locationService | LocationService | - | - |
| catchmentService | CatchmentService | - | - |

**Returns**: `public`


##### getTxCrudTableList() → List<String>

**Returns**: `List<String>`


##### getTxJpaTableList() → List<String>

**Returns**: `List<String>`


##### getMetadataCrudTableList() → List<String>

**Returns**: `List<String>`


##### getMetadataJpaTableList() → List<String>

**Returns**: `List<String>`


##### getAdminConfigCrudTableList() → List<String>

**Returns**: `List<String>`


##### getAdminConfigJPATableList() → List<String>

**Returns**: `List<String>`


##### addOrganisationConfig(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addVideoJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addRelationJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addRelationShipTypeJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addIdentifierSourceJson(zos: ZipOutputStream, includeLocations: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| includeLocations | boolean | - | - |

**Returns**: `void`


##### addChecklistDetailJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addGroupsJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addGroupPrivilegeJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addGroupRoleJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addFormMappingsJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addOperationalProgramsJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### OperationalProgramsContract() → new

**Returns**: `new`


##### addProgramsJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addOperationalEncounterTypesJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### OperationalEncounterTypesContract() → new

**Returns**: `new`


##### addEncounterTypesJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addOperationalSubjectTypesJson(org: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| org | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### OperationalSubjectTypesContract() → new

**Returns**: `new`


##### addSubjectTypesJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addCatchmentsJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### CatchmentsExport() → new

**Returns**: `new`


##### addAddressLevelsJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addAddressLevel(theNode: AddressLevel, allAddressLevels: List<AddressLevel>, contracts: List<LocationContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| theNode | AddressLevel | - | - |
| allAddressLevels | List<AddressLevel> | - | - |
| contracts | List<LocationContract> | - | - |

**Returns**: `void`


##### addAddressLevelTypesJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addAddressLevelType(theNode: AddressLevelType, allAddressLevelTypes: List<AddressLevelType>, contracts: List<AddressLevelTypeContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| theNode | AddressLevelType | - | - |
| allAddressLevelTypes | List<AddressLevelType> | - | - |
| contracts | List<AddressLevelTypeContract> | - | - |

**Returns**: `void`


##### addConceptsJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addFormsJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addSubjectTypeIcons(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addReportCardIcons(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addConceptMedia(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addReportCards(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addReportDashboard(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addDocumentation(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addTaskType(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addTaskStatus(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addApplicationMenus(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addMessageRules(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### MessageRuleContract(unknown: messageRule, unknown: entityTypeRetrieverService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | messageRule | - | - |
| unknown | entityTypeRetrieverService | - | - |

**Returns**: `new`


##### addTranslations(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addOldRuleDependency(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addOldRules(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### addFileToZip(zos: ZipOutputStream, fileName: String, file: File) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| fileName | String | - | - |
| file | File | - | - |

**Returns**: `void`


##### ZipEntry(unknown: fileName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |

**Returns**: `new`


##### addFileToZip(zos: ZipOutputStream, fileName: String, fileContent: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| fileName | String | - | - |
| fileContent | Object | - | - |

**Returns**: `void`


##### ZipEntry(unknown: fileName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |

**Returns**: `new`


##### DefaultPrettyPrinter() → new

**Returns**: `new`


##### addMediaToZip(zos: ZipOutputStream, fileName: String, bytes: byte[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| fileName | String | - | - |
| bytes | byte[] | - | - |

**Returns**: `void`


##### ZipEntry(unknown: fileName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |

**Returns**: `new`


##### addDirectoryToZip(zos: ZipOutputStream, directoryName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| directoryName | String | - | - |

**Returns**: `void`


##### ZipEntry(unknown: String.format("%s/", unknown: directoryName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format("%s/" | - | - |
| unknown | directoryName | - | - |

**Returns**: `new`


##### deleteTransactionalData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### deleteMetadata(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### JsonObject() → new

**Returns**: `new`


##### deleteNonRepositoryTransactionalData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### deleteDataFromPublicTableForOrg(tableName: String, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | String | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### deleteNonRepositoryMetadata(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### deleteAdminConfigData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### deleteNonDefaultGroupsAndTheirMappings() → void

**Returns**: `void`


##### removeCatchmentAssignmentAndDeleteNonAdminUsers(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### deleteNonRepositoryAdminConfigData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### deleteAll(repository: JpaRepository) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | JpaRepository | - | - |

**Returns**: `void`


##### deleteAll(repository: CrudRepository) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | CrudRepository | - | - |

**Returns**: `void`


##### deleteMediaContent(deleteMetadata: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |

**Returns**: `void`


##### deleteETLData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### delete_etl_metadata_for_schema(unknown: '$impl_schema', unknown: '$impl_db_user', unknown: '$impl_db_owner') → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | '$impl_schema' | - | - |
| unknown | '$impl_db_user' | - | - |
| unknown | '$impl_db_owner' | - | - |

**Returns**: `select`


##### addGroupDashboardJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`


##### createGender(genderName: String, org: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderName | String | - | - |
| org | Organisation | - | - |

**Returns**: `void`


##### Gender() → new

**Returns**: `new`


##### addDefaultGroupIfNotPresent(organisationId: Long, groupType: String) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |
| groupType | String | - | - |

**Returns**: `Group`


##### Group() → new

**Returns**: `new`


##### createDefaultGenders(org: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| org | Organisation | - | - |

**Returns**: `void`


##### setupBaseOrganisationData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### setupBaseOrganisationAdminConfig(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### setupBaseOrganisationMetadata(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### setupSampleOrganisationData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### setupSampleOrganisationMetadata(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### AddressLevelTypeContract(State": "Sample, unknown: 3.0, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| State" | "Sample | - | - |
| unknown | 3.0 | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### AddressLevelTypeContract(District": "Sample, unknown: 2.0, unknown: stateType.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| District" | "Sample | - | - |
| unknown | 2.0 | - | - |
| unknown | stateType.getId( | - | - |

**Returns**: `new`


##### AddressLevelTypeContract(Village": "Sample, unknown: 1.0, unknown: districtType.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Village" | "Sample | - | - |
| unknown | 1.0 | - | - |
| unknown | districtType.getId( | - | - |

**Returns**: `new`


##### LocationContract(unknown: "Karnataka", unknown: stateType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Karnataka" | - | - |
| unknown | stateType.getUuid( | - | - |

**Returns**: `new`


##### LocationContract(unknown: "Bengaluru", unknown: districtType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Bengaluru" | - | - |
| unknown | districtType.getUuid( | - | - |

**Returns**: `new`


##### LocationContract(unknown: "Nallur", unknown: villageType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Nallur" | - | - |
| unknown | villageType.getUuid( | - | - |

**Returns**: `new`


##### Catchment() → new

**Returns**: `new`


##### getCurrentOrganisation() → Organisation

**Returns**: `Organisation`


##### addCustomQueries(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`




## Functions

### OrganisationService(formRepository: FormRepository, addressLevelTypeRepository: AddressLevelTypeRepository, locationRepository: LocationRepository, catchmentRepository: CatchmentRepository, subjectTypeRepository: SubjectTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository, encounterTypeRepository: EncounterTypeRepository, programRepository: ProgramRepository, operationalProgramRepository: OperationalProgramRepository, formMappingRepository: FormMappingRepository, organisationConfigRepository: OrganisationConfigRepository, identifierSourceRepository: IdentifierSourceRepository, conceptRepository: ConceptRepository, individualRelationService: IndividualRelationService, individualRelationshipTypeService: IndividualRelationshipTypeService, checklistDetailService: ChecklistDetailService, groupRepository: GroupRepository, groupRoleRepository: GroupRoleRepository, groupPrivilegeRepository: GroupPrivilegeRepository, userGroupRepository: UserGroupRepository, checklistItemDetailRepository: ChecklistItemDetailRepository, checklistDetailRepository: ChecklistDetailRepository, identifierUserAssignmentRepository: IdentifierUserAssignmentRepository, individualRelationGenderMappingRepository: IndividualRelationGenderMappingRepository, individualRelationshipTypeRepository: IndividualRelationshipTypeRepository, individualRelationRepository: IndividualRelationRepository, formElementRepository: FormElementRepository, formElementGroupRepository: FormElementGroupRepository, conceptAnswerRepository: ConceptAnswerRepository, translationRepository: TranslationRepository, videoRepository: VideoRepository, videoService: VideoService, cardService: CardService, dashboardService: DashboardService, menuItemService: MenuItemService, messagingService: MessagingService, cardRepository: CardRepository, dashboardRepository: DashboardRepository, dashboardSectionCardMappingRepository: DashboardSectionCardMappingRepository, dashboardFilterRepository: DashboardFilterRepository, dashboardSectionRepository: DashboardSectionRepository, groupDashboardRepository: GroupDashboardRepository, msg91ConfigRepository: Msg91ConfigRepository, s3Service: S3Service, userService: UserService, ruleFailureTelemetryRepository: RuleFailureTelemetryRepository, identifierAssignmentRepository: IdentifierAssignmentRepository, syncTelemetryRepository: SyncTelemetryRepository, videoTelemetricRepository: VideoTelemetricRepository, groupSubjectRepository: GroupSubjectRepository, individualRelationshipRepository: IndividualRelationshipRepository, checklistItemRepository: ChecklistItemRepository, checklistRepository: ChecklistRepository, programEncounterRepository: ProgramEncounterRepository, programEnrolmentRepository: ProgramEnrolmentRepository, encounterRepository: EncounterRepository, individualRepository: IndividualRepository, entityApprovalStatusRepository: EntityApprovalStatusRepository, commentRepository: CommentRepository, commentThreadRepository: CommentThreadRepository, newsRepository: NewsRepository, subjectMigrationRepository: SubjectMigrationRepository, documentationService: DocumentationService, taskTypeService: TaskTypeService, taskStatusService: TaskStatusService, entityTypeRetrieverService: EntityTypeRetrieverService, ruleDependencyRepository: RuleDependencyRepository, ruleRepository: RuleRepository, userSubjectAssignmentRepository: UserSubjectAssignmentRepository, subjectProgramEligibilityRepository: SubjectProgramEligibilityRepository, taskRepository: TaskRepository, messageRequestQueueRepository: MessageRequestQueueRepository, messageReceiverRepository: MessageReceiverRepository, organisationConfigService: OrganisationConfigService, genderRepository: GenderRepository, organisationRepository: OrganisationRepository, userSubjectRepository: UserSubjectRepository, answerConceptMigrationRepository: AnswerConceptMigrationRepository, customQueryRepository: CustomQueryRepository, documentationRepository: DocumentationRepository, documentationItemRepository: DocumentationItemRepository, exportJobParametersRepository: ExportJobParametersRepository, externalSystemConfigRepository: ExternalSystemConfigRepository, locationMappingRepository: LocationMappingRepository, menuItemRepository: MenuItemRepository, manualMessageRepository: ManualMessageRepository, messageRuleRepository: MessageRuleRepository, resetSyncRepository: ResetSyncRepository, ruleFailureLogRepository: RuleFailureLogRepository, taskStatusRepository: TaskStatusRepository, taskTypeRepository: TaskTypeRepository, taskUnAssignmentRepository: TaskUnAssignmentRepository, userRepository: UserRepository, jdbcTemplate: JdbcTemplate, reportCardMapper: ReportCardMapper, dashboardMapper: DashboardMapper, groupDashboardService: GroupDashboardService, customQueryService: CustomQueryService, storageManagementConfigRepository: StorageManagementConfigRepository, locationService: LocationService, catchmentService: CatchmentService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRepository | FormRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |
| catchmentRepository | CatchmentRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| organisationConfigRepository | OrganisationConfigRepository | - | - |
| identifierSourceRepository | IdentifierSourceRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| individualRelationService | IndividualRelationService | - | - |
| individualRelationshipTypeService | IndividualRelationshipTypeService | - | - |
| checklistDetailService | ChecklistDetailService | - | - |
| groupRepository | GroupRepository | - | - |
| groupRoleRepository | GroupRoleRepository | - | - |
| groupPrivilegeRepository | GroupPrivilegeRepository | - | - |
| userGroupRepository | UserGroupRepository | - | - |
| checklistItemDetailRepository | ChecklistItemDetailRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| identifierUserAssignmentRepository | IdentifierUserAssignmentRepository | - | - |
| individualRelationGenderMappingRepository | IndividualRelationGenderMappingRepository | - | - |
| individualRelationshipTypeRepository | IndividualRelationshipTypeRepository | - | - |
| individualRelationRepository | IndividualRelationRepository | - | - |
| formElementRepository | FormElementRepository | - | - |
| formElementGroupRepository | FormElementGroupRepository | - | - |
| conceptAnswerRepository | ConceptAnswerRepository | - | - |
| translationRepository | TranslationRepository | - | - |
| videoRepository | VideoRepository | - | - |
| videoService | VideoService | - | - |
| cardService | CardService | - | - |
| dashboardService | DashboardService | - | - |
| menuItemService | MenuItemService | - | - |
| messagingService | MessagingService | - | - |
| cardRepository | CardRepository | - | - |
| dashboardRepository | DashboardRepository | - | - |
| dashboardSectionCardMappingRepository | DashboardSectionCardMappingRepository | - | - |
| dashboardFilterRepository | DashboardFilterRepository | - | - |
| dashboardSectionRepository | DashboardSectionRepository | - | - |
| groupDashboardRepository | GroupDashboardRepository | - | - |
| msg91ConfigRepository | Msg91ConfigRepository | - | - |
| s3Service | S3Service | - | - |
| userService | UserService | - | - |
| ruleFailureTelemetryRepository | RuleFailureTelemetryRepository | - | - |
| identifierAssignmentRepository | IdentifierAssignmentRepository | - | - |
| syncTelemetryRepository | SyncTelemetryRepository | - | - |
| videoTelemetricRepository | VideoTelemetricRepository | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| individualRelationshipRepository | IndividualRelationshipRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| checklistRepository | ChecklistRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| encounterRepository | EncounterRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| commentRepository | CommentRepository | - | - |
| commentThreadRepository | CommentThreadRepository | - | - |
| newsRepository | NewsRepository | - | - |
| subjectMigrationRepository | SubjectMigrationRepository | - | - |
| documentationService | DocumentationService | - | - |
| taskTypeService | TaskTypeService | - | - |
| taskStatusService | TaskStatusService | - | - |
| entityTypeRetrieverService | EntityTypeRetrieverService | - | - |
| ruleDependencyRepository | RuleDependencyRepository | - | - |
| ruleRepository | RuleRepository | - | - |
| userSubjectAssignmentRepository | UserSubjectAssignmentRepository | - | - |
| subjectProgramEligibilityRepository | SubjectProgramEligibilityRepository | - | - |
| taskRepository | TaskRepository | - | - |
| messageRequestQueueRepository | MessageRequestQueueRepository | - | - |
| messageReceiverRepository | MessageReceiverRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| genderRepository | GenderRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |
| userSubjectRepository | UserSubjectRepository | - | - |
| answerConceptMigrationRepository | AnswerConceptMigrationRepository | - | - |
| customQueryRepository | CustomQueryRepository | - | - |
| documentationRepository | DocumentationRepository | - | - |
| documentationItemRepository | DocumentationItemRepository | - | - |
| exportJobParametersRepository | ExportJobParametersRepository | - | - |
| externalSystemConfigRepository | ExternalSystemConfigRepository | - | - |
| locationMappingRepository | LocationMappingRepository | - | - |
| menuItemRepository | MenuItemRepository | - | - |
| manualMessageRepository | ManualMessageRepository | - | - |
| messageRuleRepository | MessageRuleRepository | - | - |
| resetSyncRepository | ResetSyncRepository | - | - |
| ruleFailureLogRepository | RuleFailureLogRepository | - | - |
| taskStatusRepository | TaskStatusRepository | - | - |
| taskTypeRepository | TaskTypeRepository | - | - |
| taskUnAssignmentRepository | TaskUnAssignmentRepository | - | - |
| userRepository | UserRepository | - | - |
| jdbcTemplate | JdbcTemplate | - | - |
| reportCardMapper | ReportCardMapper | - | - |
| dashboardMapper | DashboardMapper | - | - |
| groupDashboardService | GroupDashboardService | - | - |
| customQueryService | CustomQueryService | - | - |
| storageManagementConfigRepository | StorageManagementConfigRepository | - | - |
| locationService | LocationService | - | - |
| catchmentService | CatchmentService | - | - |

**Returns**: `public`



### getTxCrudTableList() → List<String>

**Returns**: `List<String>`



### getTxJpaTableList() → List<String>

**Returns**: `List<String>`



### getMetadataCrudTableList() → List<String>

**Returns**: `List<String>`



### getMetadataJpaTableList() → List<String>

**Returns**: `List<String>`



### getAdminConfigCrudTableList() → List<String>

**Returns**: `List<String>`



### getAdminConfigJPATableList() → List<String>

**Returns**: `List<String>`



### addOrganisationConfig(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addVideoJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addRelationJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addRelationShipTypeJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addIdentifierSourceJson(zos: ZipOutputStream, includeLocations: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| includeLocations | boolean | - | - |

**Returns**: `void`



### addChecklistDetailJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addGroupsJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addGroupPrivilegeJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addGroupRoleJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addFormMappingsJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addOperationalProgramsJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### OperationalProgramsContract() → new

**Returns**: `new`



### addProgramsJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addOperationalEncounterTypesJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### OperationalEncounterTypesContract() → new

**Returns**: `new`



### addEncounterTypesJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addOperationalSubjectTypesJson(org: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| org | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### OperationalSubjectTypesContract() → new

**Returns**: `new`



### addSubjectTypesJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addCatchmentsJson(organisation: Organisation, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### CatchmentsExport() → new

**Returns**: `new`



### addAddressLevelsJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addAddressLevel(theNode: AddressLevel, allAddressLevels: List<AddressLevel>, contracts: List<LocationContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| theNode | AddressLevel | - | - |
| allAddressLevels | List<AddressLevel> | - | - |
| contracts | List<LocationContract> | - | - |

**Returns**: `void`



### addAddressLevelTypesJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addAddressLevelType(theNode: AddressLevelType, allAddressLevelTypes: List<AddressLevelType>, contracts: List<AddressLevelTypeContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| theNode | AddressLevelType | - | - |
| allAddressLevelTypes | List<AddressLevelType> | - | - |
| contracts | List<AddressLevelTypeContract> | - | - |

**Returns**: `void`



### addConceptsJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addFormsJson(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addSubjectTypeIcons(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addReportCardIcons(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addConceptMedia(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addReportCards(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addReportDashboard(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addDocumentation(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addTaskType(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addTaskStatus(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addApplicationMenus(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addMessageRules(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### MessageRuleContract(unknown: messageRule, unknown: entityTypeRetrieverService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | messageRule | - | - |
| unknown | entityTypeRetrieverService | - | - |

**Returns**: `new`



### addTranslations(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addOldRuleDependency(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addOldRules(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### addFileToZip(zos: ZipOutputStream, fileName: String, file: File) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| fileName | String | - | - |
| file | File | - | - |

**Returns**: `void`



### ZipEntry(unknown: fileName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |

**Returns**: `new`



### addFileToZip(zos: ZipOutputStream, fileName: String, fileContent: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| fileName | String | - | - |
| fileContent | Object | - | - |

**Returns**: `void`



### ZipEntry(unknown: fileName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |

**Returns**: `new`



### DefaultPrettyPrinter() → new

**Returns**: `new`



### addMediaToZip(zos: ZipOutputStream, fileName: String, bytes: byte[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| fileName | String | - | - |
| bytes | byte[] | - | - |

**Returns**: `void`



### ZipEntry(unknown: fileName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | fileName | - | - |

**Returns**: `new`



### addDirectoryToZip(zos: ZipOutputStream, directoryName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |
| directoryName | String | - | - |

**Returns**: `void`



### ZipEntry(unknown: String.format("%s/", unknown: directoryName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format("%s/" | - | - |
| unknown | directoryName | - | - |

**Returns**: `new`



### deleteTransactionalData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### deleteMetadata(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### JsonObject() → new

**Returns**: `new`



### deleteNonRepositoryTransactionalData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### deleteDataFromPublicTableForOrg(tableName: String, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | String | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### deleteNonRepositoryMetadata(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### deleteAdminConfigData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### deleteNonDefaultGroupsAndTheirMappings() → void

**Returns**: `void`



### removeCatchmentAssignmentAndDeleteNonAdminUsers(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### deleteNonRepositoryAdminConfigData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### deleteAll(repository: JpaRepository) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | JpaRepository | - | - |

**Returns**: `void`



### deleteAll(repository: CrudRepository) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | CrudRepository | - | - |

**Returns**: `void`



### deleteMediaContent(deleteMetadata: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deleteMetadata | boolean | - | - |

**Returns**: `void`



### deleteETLData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### delete_etl_metadata_for_schema(unknown: '$impl_schema', unknown: '$impl_db_user', unknown: '$impl_db_owner') → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | '$impl_schema' | - | - |
| unknown | '$impl_db_user' | - | - |
| unknown | '$impl_db_owner' | - | - |

**Returns**: `select`



### addGroupDashboardJson(zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zos | ZipOutputStream | - | - |

**Returns**: `void`



### createGender(genderName: String, org: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderName | String | - | - |
| org | Organisation | - | - |

**Returns**: `void`



### Gender() → new

**Returns**: `new`



### addDefaultGroupIfNotPresent(organisationId: Long, groupType: String) → Group

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |
| groupType | String | - | - |

**Returns**: `Group`



### Group() → new

**Returns**: `new`



### createDefaultGenders(org: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| org | Organisation | - | - |

**Returns**: `void`



### setupBaseOrganisationData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### setupBaseOrganisationAdminConfig(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### setupBaseOrganisationMetadata(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### setupSampleOrganisationData(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### setupSampleOrganisationMetadata(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### AddressLevelTypeContract(State": "Sample, unknown: 3.0, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| State" | "Sample | - | - |
| unknown | 3.0 | - | - |
| unknown | null | - | - |

**Returns**: `new`



### AddressLevelTypeContract(District": "Sample, unknown: 2.0, unknown: stateType.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| District" | "Sample | - | - |
| unknown | 2.0 | - | - |
| unknown | stateType.getId( | - | - |

**Returns**: `new`



### AddressLevelTypeContract(Village": "Sample, unknown: 1.0, unknown: districtType.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Village" | "Sample | - | - |
| unknown | 1.0 | - | - |
| unknown | districtType.getId( | - | - |

**Returns**: `new`



### LocationContract(unknown: "Karnataka", unknown: stateType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Karnataka" | - | - |
| unknown | stateType.getUuid( | - | - |

**Returns**: `new`



### LocationContract(unknown: "Bengaluru", unknown: districtType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Bengaluru" | - | - |
| unknown | districtType.getUuid( | - | - |

**Returns**: `new`



### LocationContract(unknown: "Nallur", unknown: villageType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Nallur" | - | - |
| unknown | villageType.getUuid( | - | - |

**Returns**: `new`



### Catchment() → new

**Returns**: `new`



### getCurrentOrganisation() → Organisation

**Returns**: `Organisation`



### addCustomQueries(orgId: Long, zos: ZipOutputStream) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | Long | - | - |
| zos | ZipOutputStream | - | - |

**Returns**: `void`


