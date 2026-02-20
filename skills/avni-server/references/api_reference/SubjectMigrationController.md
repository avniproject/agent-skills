# API Reference: SubjectMigrationController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/SubjectMigrationController.java`

---

## Functions

### SubjectMigrationController(subjectMigrationRepository: SubjectMigrationRepository, subjectTypeRepository: SubjectTypeRepository, userService: UserService, scopeBasedSyncService: ScopeBasedSyncService<SubjectMigration>, subjectMigrationService: SubjectMigrationService, individualRepository: IndividualRepository, locationRepository: LocationRepository, accessControlService: AccessControlService, bulkSubjectMigrationJob: Job, bulkSubjectMigrationJobLauncher: JobLauncher) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectMigrationRepository | SubjectMigrationRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| userService | UserService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<SubjectMigration> | - | - |
| subjectMigrationService | SubjectMigrationService | - | - |
| individualRepository | IndividualRepository | - | - |
| locationRepository | LocationRepository | - | - |
| accessControlService | AccessControlService | - | - |
| bulkSubjectMigrationJob | Job | - | - |
| bulkSubjectMigrationJobLauncher | JobLauncher | - | - |

**Returns**: `public`



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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(subjectMigrationRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(subjectMigrationRepository | - | - |
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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(subjectMigrationRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(subjectMigrationRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### process(resource: EntityModel<SubjectMigration>) → EntityModel<SubjectMigration>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<SubjectMigration> | - | - |

**Returns**: `EntityModel<SubjectMigration>`



### migrate(=: @RequestParam(value, =: defaultValue) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | defaultValue | - | - |

**Returns**: `ResponseEntity`



### BadRequestError(is: "subjectIds) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | "subjectIds | - | - |

**Returns**: `new`



### BadRequestError(is: "destinationAddresses) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | "destinationAddresses | - | - |

**Returns**: `new`



### BadRequestError(is: "destinationSyncConcepts) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | "destinationSyncConcepts | - | - |

**Returns**: `new`



### RuntimeException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`



### JobParametersBuilder() → new

**Returns**: `new`



### RuntimeException(while: String.format("Error, unknown: %s", unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| while | String.format("Error | - | - |
| unknown | %s" | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### migrationStatus(unknown: @PathVariable("jobUuid") → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("jobUuid" | - | - |

**Returns**: `ResponseEntity`


