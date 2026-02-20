# API Reference: EntityApprovalStatusController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/EntityApprovalStatusController.java`

---

## Functions

### EntityApprovalStatusController(entityApprovalStatusService: EntityApprovalStatusService, entityApprovalStatusRepository: EntityApprovalStatusRepository, subjectTypeRepository: SubjectTypeRepository, userService: UserService, scopeBasedSyncService: ScopeBasedSyncService<EntityApprovalStatus>, encounterTypeRepository: EncounterTypeRepository, programRepository: ProgramRepository, formMappingService: FormMappingService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| userService | UserService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<EntityApprovalStatus> | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| formMappingService | FormMappingService | - | - |

**Returns**: `public`



### save(EntityApprovalStatusRequest: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| EntityApprovalStatusRequest | @RequestBody | - | - |

**Returns**: `void`



### wrap(.findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc(: entityApprovalStatusRepository) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| .findByLastModifiedDateTimeIsBetweenOrderByLastModifiedDateTimeAscIdAsc( | entityApprovalStatusRepository | - | - |

**Returns**: `return`



### getScopeBasedSyncResults(unknown: lastModifiedDateTime, unknown: now, unknown: fetchSubjectTypeForEntityNameAndUuid(entityName, unknown: entityTypeUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | fetchSubjectTypeForEntityNameAndUuid(entityName | - | - |
| unknown | entityTypeUuid | - | - |

**Returns**: `return`



### getScopeBasedSyncResultsAsSlice(unknown: lastModifiedDateTime, unknown: now, unknown: fetchSubjectTypeForEntityNameAndUuid(entityName, unknown: entityTypeUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | fetchSubjectTypeForEntityNameAndUuid(entityName | - | - |
| unknown | entityTypeUuid | - | - |

**Returns**: `return`



### process(resource: EntityModel<EntityApprovalStatus>) → EntityModel<EntityApprovalStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<EntityApprovalStatus> | - | - |

**Returns**: `EntityModel<EntityApprovalStatus>`



### fetchSubjectTypeForEntityNameAndUuid(entityName: SyncEntityName, entityTypeUuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityName | SyncEntityName | - | - |
| entityTypeUuid | String | - | - |

**Returns**: `String`



### getSubjectTypeUuidFromEncounterTypeUuid(unknown: entityTypeUuid, unknown: FormType.Encounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityTypeUuid | - | - |
| unknown | FormType.Encounter | - | - |

**Returns**: `return`



### getSubjectTypeUuidFromEncounterTypeUuid(unknown: entityTypeUuid, unknown: FormType.ProgramEncounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityTypeUuid | - | - |
| unknown | FormType.ProgramEncounter | - | - |

**Returns**: `return`



### getSubjectTypeUuidFromProgramTypeUuid(unknown: entityTypeUuid, unknown: FormType.ProgramEnrolment) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityTypeUuid | - | - |
| unknown | FormType.ProgramEnrolment | - | - |

**Returns**: `return`



### getSubjectTypeUuidFromEncounterTypeUuid(entityTypeUuid: String, formType: FormType) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityTypeUuid | String | - | - |
| formType | FormType | - | - |

**Returns**: `String`



### RuntimeException(form: String.format("No, unknown: encounterType.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `new`



### getSubjectTypeUuidFromProgramTypeUuid(entityTypeUuid: String, formType: FormType) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityTypeUuid | String | - | - |
| formType | FormType | - | - |

**Returns**: `String`



### RuntimeException(form: String.format("No, unknown: program.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | program.getName( | - | - |

**Returns**: `new`



### wrap(SliceImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(SliceImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| SliceImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(entityApprovalStatusRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(entityApprovalStatusRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(entityApprovalStatusRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(entityApprovalStatusRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`


