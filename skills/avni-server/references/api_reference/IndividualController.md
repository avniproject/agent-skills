# API Reference: IndividualController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/IndividualController.java`

---

## Functions

### IndividualController(individualRepository: IndividualRepository, locationRepository: LocationRepository, genderRepository: GenderRepository, observationService: ObservationService, userService: UserService, subjectTypeRepository: SubjectTypeRepository, projectionFactory: ProjectionFactory, individualService: IndividualService, encounterService: EncounterService, individualSearchService: IndividualSearchService, identifierAssignmentRepository: IdentifierAssignmentRepository, individualConstructionService: IndividualConstructionService, scopeBasedSyncService: ScopeBasedSyncService<Individual>, subjectMigrationService: SubjectMigrationService, accessControlService: AccessControlService, entityApprovalStatusService: EntityApprovalStatusService, formMappingService: FormMappingService, bugsnag: Bugsnag, txDataControllerHelper: TxDataControllerHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| locationRepository | LocationRepository | - | - |
| genderRepository | GenderRepository | - | - |
| observationService | ObservationService | - | - |
| userService | UserService | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| projectionFactory | ProjectionFactory | - | - |
| individualService | IndividualService | - | - |
| encounterService | EncounterService | - | - |
| individualSearchService | IndividualSearchService | - | - |
| identifierAssignmentRepository | IdentifierAssignmentRepository | - | - |
| individualConstructionService | IndividualConstructionService | - | - |
| scopeBasedSyncService | ScopeBasedSyncService<Individual> | - | - |
| subjectMigrationService | SubjectMigrationService | - | - |
| accessControlService | AccessControlService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| formMappingService | FormMappingService | - | - |
| bugsnag | Bugsnag | - | - |
| txDataControllerHelper | TxDataControllerHelper | - | - |

**Returns**: `public`



### save(IndividualRequest: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IndividualRequest | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: individual) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individual | - | - |

**Returns**: `new`



### markSubjectMigrationIfRequired(individualRequest: IndividualRequest, newObservations: ObservationCollection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRequest | IndividualRequest | - | - |
| newObservations | ObservationCollection | - | - |

**Returns**: `void`



### addObservationsFromDecisions(observations: ObservationCollection, decisions: Decisions) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |
| decisions | Decisions | - | - |

**Returns**: `void`



### saveVisitSchedules(individualRequest: IndividualRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRequest | IndividualRequest | - | - |

**Returns**: `void`



### saveIdentifierAssignments(individual: Individual, individualRequest: IndividualRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| individualRequest | IndividualRequest | - | - |

**Returns**: `void`



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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(individualRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocationAsSlice(individualRepository | - | - |
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



### wrap(unknown: scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(individualRepository, unknown: userService.getCurrentUser() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | scopeBasedSyncService.getSyncResultsBySubjectTypeRegistrationLocation(individualRepository | - | - |
| unknown | userService.getCurrentUser( | - | - |

**Returns**: `return`



### search(=: @RequestParam(value, =: required) → Page<IndividualWebProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Page<IndividualWebProjection>`



### getOneForWeb(String: @PathVariable) → IndividualWebProjection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `IndividualWebProjection`



### getByUUIDs(=: @RequestParam(value) → List<IndividualWebProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |

**Returns**: `List<IndividualWebProjection>`



### getAllCompletedEncounters(String: @PathVariable, =: @RequestParam(value, =: required) → Page<EncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `Page<EncounterContract>`



### voidSubject(String: @PathVariable) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: individual) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individual | - | - |

**Returns**: `new`



### getAllSubjects(String: @RequestParam, String: @RequestParam) → List<IndividualContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @RequestParam | - | - |
| String | @RequestParam | - | - |

**Returns**: `List<IndividualContract>`



### findByIds(unknown: @Param("ids") → Page<SubjectSearchContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `Page<SubjectSearchContract>`



### findByMetadata(=: @Param(value) → ResponseEntity<IndividualWebProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @Param(value | - | - |

**Returns**: `ResponseEntity<IndividualWebProjection>`



### process(resource: EntityModel<Individual>) → EntityModel<Individual>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<Individual> | - | - |

**Returns**: `EntityModel<Individual>`



### saveForWeb(IndividualRequest: @RequestBody) → AvniEntityResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IndividualRequest | @RequestBody | - | - |

**Returns**: `AvniEntityResponse`



### AvniEntityResponse(unknown: individual) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individual | - | - |

**Returns**: `new`



### createIndividual(individualRequest: IndividualRequest) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRequest | IndividualRequest | - | - |

**Returns**: `Individual`



### Exception(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`



### createIndividualWithoutObservations(IndividualRequest: @RequestBody) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IndividualRequest | @RequestBody | - | - |

**Returns**: `Individual`



### Individual() → new

**Returns**: `new`



### Point(unknown: pointRequest.getX() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | pointRequest.getX( | - | - |

**Returns**: `new`



### Point(unknown: coordinates.getX() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | coordinates.getX( | - | - |

**Returns**: `new`



### SubjectLocation(unknown: location, unknown: subjectLocationRequest.getAccuracy() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | location | - | - |
| unknown | subjectLocationRequest.getAccuracy( | - | - |

**Returns**: `new`



### getAddressLevel(IndividualRequest: @RequestBody) → AddressLevel

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| IndividualRequest | @RequestBody | - | - |

**Returns**: `AddressLevel`


