# API Reference: SubjectApiController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/api/SubjectApiController.java`

---

## Classes

### SubjectApiController

**Inherits from**: (none)

#### Methods

##### SubjectApiController(conceptService: ConceptService, individualRepository: IndividualRepository, conceptRepository: ConceptRepository, groupSubjectRepository: GroupSubjectRepository, locationService: LocationService, subjectTypeRepository: SubjectTypeRepository, locationRepository: LocationRepository, genderRepository: GenderRepository, subjectMigrationService: SubjectMigrationService, individualService: IndividualService, s3Service: S3Service, mediaObservationService: MediaObservationService, accessControlService: AccessControlService, addressLevelService: AddressLevelService, subjectTypeService: SubjectTypeService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptService | ConceptService | - | - |
| individualRepository | IndividualRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| locationService | LocationService | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |
| genderRepository | GenderRepository | - | - |
| subjectMigrationService | SubjectMigrationService | - | - |
| individualService | IndividualService | - | - |
| s3Service | S3Service | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |
| addressLevelService | AddressLevelService | - | - |
| subjectTypeService | SubjectTypeService | - | - |

**Returns**: `public`


##### getSubjects(=: @RequestParam(value, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`


##### IndividualSearchParams(unknown: lastModifiedDateTime, unknown: now, unknown: subjectTypeName, unknown: observations, unknown: allLocationIds) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | subjectTypeName | - | - |
| unknown | observations | - | - |
| unknown | allLocationIds | - | - |

**Returns**: `new`


##### ResponsePage(unknown: subjectResponses, unknown: subjects.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectResponses | - | - |
| unknown | subjects.getNumberOfElements( | - | - |

**Returns**: `new`


##### get(unknown: @PathVariable("id") → ResponseEntity<SubjectResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<SubjectResponse>`


##### post(ApiSubjectRequest: @RequestBody, =: @RequestParam(value, =: required) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiSubjectRequest | @RequestBody | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity`


##### updateSubjectAndSave(unknown: request, unknown: subject, unknown: SubjectResponseOptions.forSubjectUpdate(includeCatchments) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | request | - | - |
| unknown | subject | - | - |
| unknown | SubjectResponseOptions.forSubjectUpdate(includeCatchments | - | - |

**Returns**: `return`


##### updateSubjectAndSave(ApiSubjectRequest: @RequestBody, subject: Individual, options: SubjectResponseOptions) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiSubjectRequest | @RequestBody | - | - |
| subject | Individual | - | - |
| options | SubjectResponseOptions | - | - |

**Returns**: `ResponseEntity`


##### put(String: @PathVariable, ApiSubjectRequest: @RequestBody, =: @RequestParam(value, =: required) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| ApiSubjectRequest | @RequestBody | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity`


##### updateSubjectAndSave(unknown: request, unknown: subject, unknown: SubjectResponseOptions.forSubjectUpdate(includeCatchments) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | request | - | - |
| unknown | subject | - | - |
| unknown | SubjectResponseOptions.forSubjectUpdate(includeCatchments | - | - |

**Returns**: `return`


##### loadSubject(id: String, externalId: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |
| externalId | String | - | - |

**Returns**: `Individual`


##### IllegalArgumentException(not: String.format("Subject, unknown: id, unknown: externalId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Subject | - | - |
| unknown | id | - | - |
| unknown | externalId | - | - |

**Returns**: `new`


##### patch(String: @PathVariable, Map<String: @RequestBody, request: Object>, =: @RequestParam(value, =: required) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| Map<String | @RequestBody | - | - |
| request | Object> | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity`


##### delete(unknown: @PathVariable("id") → ResponseEntity<SubjectResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<SubjectResponse>`


##### deleteSubjectTree(DeleteSubjectCriteria: @RequestBody) → DeleteSubjectsResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| DeleteSubjectCriteria | @RequestBody | - | - |

**Returns**: `DeleteSubjectsResponse`


##### DeleteSubjectsResponse() → new

**Returns**: `new`


##### updateSubjectDetails(subject: Individual, request: ApiSubjectRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| request | ApiSubjectRequest | - | - |

**Returns**: `void`


##### IllegalArgumentException(unknown: V3_REQUIRES_ADDRESS_MAP) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | V3_REQUIRES_ADDRESS_MAP | - | - |

**Returns**: `new`


##### IllegalArgumentException(?: versionGreaterThan2, unknown: request.getAddress() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ? | versionGreaterThan2 | - | - |
| unknown | request.getAddress( | - | - |

**Returns**: `new`


##### IllegalArgumentException(unknown: String.format(INVALID_ADDRESS_TYPE_FOR_SUBJECT_TYPE, ?: versionGreaterThan2) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format(INVALID_ADDRESS_TYPE_FOR_SUBJECT_TYPE | - | - |
| ? | versionGreaterThan2 | - | - |

**Returns**: `new`


##### setProfilePicture(subject: Individual, subjectType: SubjectType, profilePicture: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| subjectType | SubjectType | - | - |
| profilePicture | String | - | - |

**Returns**: `void`


##### setMiddleName(subject: Individual, subjectType: SubjectType, middleName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| subjectType | SubjectType | - | - |
| middleName | String | - | - |

**Returns**: `void`


##### setExternalId(subject: Individual, externalId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| externalId | String | - | - |

**Returns**: `void`


##### getSubjectType(subjectTypeName: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `SubjectType`


##### IllegalArgumentException(type: String.format("Subject, unknown: subjectTypeName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String.format("Subject | - | - |
| unknown | subjectTypeName | - | - |

**Returns**: `new`


##### patchSubject(subject: Individual, unknown: Map<String, request: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| unknown | Map<String | - | - |
| request | Object> | - | - |

**Returns**: `void`


##### IllegalArgumentException(3: String.format("version, unknown: ADDRESS_MAP, unknown: ADDRESS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 3 | String.format("version | - | - |
| unknown | ADDRESS_MAP | - | - |
| unknown | ADDRESS | - | - |

**Returns**: `new`


##### IllegalArgumentException(unknown: ADDRESS_MAP_NO_RESULTS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ADDRESS_MAP_NO_RESULTS | - | - |

**Returns**: `new`


##### IllegalArgumentException('%s': String.format("Address, unknown: locationTitleLineage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s' | String.format("Address | - | - |
| unknown | locationTitleLineage | - | - |

**Returns**: `new`


##### IllegalArgumentException(unknown: String.format(INVALID_ADDRESS_TYPE_FOR_SUBJECT_TYPE, ?: versionGreaterThan2) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format(INVALID_ADDRESS_TYPE_FOR_SUBJECT_TYPE | - | - |
| ? | versionGreaterThan2 | - | - |

**Returns**: `new`


##### findGroupAffiliation(subject: Individual, groupSubjects: List<GroupSubject>) → List<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| groupSubjects | List<GroupSubject> | - | - |

**Returns**: `List<GroupSubject>`


##### getOrCreateSubject(externalId: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Individual`


##### Individual() → new

**Returns**: `new`




## Functions

### SubjectApiController(conceptService: ConceptService, individualRepository: IndividualRepository, conceptRepository: ConceptRepository, groupSubjectRepository: GroupSubjectRepository, locationService: LocationService, subjectTypeRepository: SubjectTypeRepository, locationRepository: LocationRepository, genderRepository: GenderRepository, subjectMigrationService: SubjectMigrationService, individualService: IndividualService, s3Service: S3Service, mediaObservationService: MediaObservationService, accessControlService: AccessControlService, addressLevelService: AddressLevelService, subjectTypeService: SubjectTypeService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptService | ConceptService | - | - |
| individualRepository | IndividualRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| locationService | LocationService | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |
| genderRepository | GenderRepository | - | - |
| subjectMigrationService | SubjectMigrationService | - | - |
| individualService | IndividualService | - | - |
| s3Service | S3Service | - | - |
| mediaObservationService | MediaObservationService | - | - |
| accessControlService | AccessControlService | - | - |
| addressLevelService | AddressLevelService | - | - |
| subjectTypeService | SubjectTypeService | - | - |

**Returns**: `public`



### getSubjects(=: @RequestParam(value, =: required) → ResponsePage

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponsePage`



### IndividualSearchParams(unknown: lastModifiedDateTime, unknown: now, unknown: subjectTypeName, unknown: observations, unknown: allLocationIds) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | subjectTypeName | - | - |
| unknown | observations | - | - |
| unknown | allLocationIds | - | - |

**Returns**: `new`



### ResponsePage(unknown: subjectResponses, unknown: subjects.getNumberOfElements() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectResponses | - | - |
| unknown | subjects.getNumberOfElements( | - | - |

**Returns**: `new`



### get(unknown: @PathVariable("id") → ResponseEntity<SubjectResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<SubjectResponse>`



### post(ApiSubjectRequest: @RequestBody, =: @RequestParam(value, =: required) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiSubjectRequest | @RequestBody | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity`



### updateSubjectAndSave(unknown: request, unknown: subject, unknown: SubjectResponseOptions.forSubjectUpdate(includeCatchments) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | request | - | - |
| unknown | subject | - | - |
| unknown | SubjectResponseOptions.forSubjectUpdate(includeCatchments | - | - |

**Returns**: `return`



### updateSubjectAndSave(ApiSubjectRequest: @RequestBody, subject: Individual, options: SubjectResponseOptions) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ApiSubjectRequest | @RequestBody | - | - |
| subject | Individual | - | - |
| options | SubjectResponseOptions | - | - |

**Returns**: `ResponseEntity`



### put(String: @PathVariable, ApiSubjectRequest: @RequestBody, =: @RequestParam(value, =: required) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| ApiSubjectRequest | @RequestBody | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity`



### updateSubjectAndSave(unknown: request, unknown: subject, unknown: SubjectResponseOptions.forSubjectUpdate(includeCatchments) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | request | - | - |
| unknown | subject | - | - |
| unknown | SubjectResponseOptions.forSubjectUpdate(includeCatchments | - | - |

**Returns**: `return`



### loadSubject(id: String, externalId: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |
| externalId | String | - | - |

**Returns**: `Individual`



### IllegalArgumentException(not: String.format("Subject, unknown: id, unknown: externalId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | String.format("Subject | - | - |
| unknown | id | - | - |
| unknown | externalId | - | - |

**Returns**: `new`



### patch(String: @PathVariable, Map<String: @RequestBody, request: Object>, =: @RequestParam(value, =: required) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| Map<String | @RequestBody | - | - |
| request | Object> | - | - |
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity`



### delete(unknown: @PathVariable("id") → ResponseEntity<SubjectResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `ResponseEntity<SubjectResponse>`



### deleteSubjectTree(DeleteSubjectCriteria: @RequestBody) → DeleteSubjectsResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| DeleteSubjectCriteria | @RequestBody | - | - |

**Returns**: `DeleteSubjectsResponse`



### DeleteSubjectsResponse() → new

**Returns**: `new`



### updateSubjectDetails(subject: Individual, request: ApiSubjectRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| request | ApiSubjectRequest | - | - |

**Returns**: `void`



### IllegalArgumentException(unknown: V3_REQUIRES_ADDRESS_MAP) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | V3_REQUIRES_ADDRESS_MAP | - | - |

**Returns**: `new`



### IllegalArgumentException(?: versionGreaterThan2, unknown: request.getAddress() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ? | versionGreaterThan2 | - | - |
| unknown | request.getAddress( | - | - |

**Returns**: `new`



### IllegalArgumentException(unknown: String.format(INVALID_ADDRESS_TYPE_FOR_SUBJECT_TYPE, ?: versionGreaterThan2) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format(INVALID_ADDRESS_TYPE_FOR_SUBJECT_TYPE | - | - |
| ? | versionGreaterThan2 | - | - |

**Returns**: `new`



### setProfilePicture(subject: Individual, subjectType: SubjectType, profilePicture: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| subjectType | SubjectType | - | - |
| profilePicture | String | - | - |

**Returns**: `void`



### setMiddleName(subject: Individual, subjectType: SubjectType, middleName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| subjectType | SubjectType | - | - |
| middleName | String | - | - |

**Returns**: `void`



### setExternalId(subject: Individual, externalId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| externalId | String | - | - |

**Returns**: `void`



### getSubjectType(subjectTypeName: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `SubjectType`



### IllegalArgumentException(type: String.format("Subject, unknown: subjectTypeName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String.format("Subject | - | - |
| unknown | subjectTypeName | - | - |

**Returns**: `new`



### patchSubject(subject: Individual, unknown: Map<String, request: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| unknown | Map<String | - | - |
| request | Object> | - | - |

**Returns**: `void`



### IllegalArgumentException(3: String.format("version, unknown: ADDRESS_MAP, unknown: ADDRESS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 3 | String.format("version | - | - |
| unknown | ADDRESS_MAP | - | - |
| unknown | ADDRESS | - | - |

**Returns**: `new`



### IllegalArgumentException(unknown: ADDRESS_MAP_NO_RESULTS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ADDRESS_MAP_NO_RESULTS | - | - |

**Returns**: `new`



### IllegalArgumentException('%s': String.format("Address, unknown: locationTitleLineage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s' | String.format("Address | - | - |
| unknown | locationTitleLineage | - | - |

**Returns**: `new`



### IllegalArgumentException(unknown: String.format(INVALID_ADDRESS_TYPE_FOR_SUBJECT_TYPE, ?: versionGreaterThan2) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format(INVALID_ADDRESS_TYPE_FOR_SUBJECT_TYPE | - | - |
| ? | versionGreaterThan2 | - | - |

**Returns**: `new`



### findGroupAffiliation(subject: Individual, groupSubjects: List<GroupSubject>) → List<GroupSubject>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | Individual | - | - |
| groupSubjects | List<GroupSubject> | - | - |

**Returns**: `List<GroupSubject>`



### getOrCreateSubject(externalId: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Individual`



### Individual() → new

**Returns**: `new`


