# API Reference: SubjectWriter.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/SubjectWriter.java`

---

## Classes

### SubjectWriter

**Inherits from**: EntityWriter

#### Methods

##### SubjectWriter(individualRepository: IndividualRepository, genderRepository: GenderRepository, subjectTypeCreator: SubjectTypeCreator, formMappingRepository: FormMappingRepository, observationCreator: ObservationCreator, individualService: IndividualService, s3Service: S3Service, organisationConfigService: OrganisationConfigService, addressLevelCreator: AddressLevelCreator, subjectMigrationService: SubjectMigrationService, subjectTypeService: SubjectTypeService, subjectHeadersCreator: SubjectHeadersCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| genderRepository | GenderRepository | - | - |
| subjectTypeCreator | SubjectTypeCreator | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| individualService | IndividualService | - | - |
| s3Service | S3Service | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| addressLevelCreator | AddressLevelCreator | - | - |
| subjectMigrationService | SubjectMigrationService | - | - |
| subjectTypeService | SubjectTypeService | - | - |
| subjectHeadersCreator | SubjectHeadersCreator | - | - |

**Returns**: `public`


##### write(extends: Chunk<?, type: String, locationHierarchy: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extends | Chunk<? | - | - |
| type | String | - | - |
| locationHierarchy | String | - | - |

**Returns**: `void`


##### write(row: Row, type: String, locationHierarchy: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| type | String | - | - |
| locationHierarchy | String | - | - |

**Returns**: `void`


##### RuntimeException(form: String.format("No, unknown: subjectType.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | subjectType.getName( | - | - |

**Returns**: `new`


##### LocationCreator() → new

**Returns**: `new`


##### setAddressLevel(row: Row, individual: Individual, registrationLocationTypes: AddressLevelTypes, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| individual | Individual | - | - |
| registrationLocationTypes | AddressLevelTypes | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`


##### setFirstName(row: Row, individual: Individual, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| individual | Individual | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`


##### setSubjectType(row: Row, individual: Individual, allErrorMsgs: List<String>, type: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| individual | Individual | - | - |
| allErrorMsgs | List<String> | - | - |
| type | String | - | - |

**Returns**: `SubjectType`


##### setProfilePicture(subjectType: SubjectType, individual: Individual, row: Row, errorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| individual | Individual | - | - |
| row | Row | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `void`


##### createNewIndividual(externalId: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Individual`


##### Individual() → new

**Returns**: `new`


##### setDateOfBirth(individual: Individual, row: Row, errorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| row | Row | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `void`


##### setRegistrationDate(individual: Individual, row: Row, errorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| row | Row | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `void`


##### setGender(individual: Individual, row: Row, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| row | Row | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`




## Functions

### SubjectWriter(individualRepository: IndividualRepository, genderRepository: GenderRepository, subjectTypeCreator: SubjectTypeCreator, formMappingRepository: FormMappingRepository, observationCreator: ObservationCreator, individualService: IndividualService, s3Service: S3Service, organisationConfigService: OrganisationConfigService, addressLevelCreator: AddressLevelCreator, subjectMigrationService: SubjectMigrationService, subjectTypeService: SubjectTypeService, subjectHeadersCreator: SubjectHeadersCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| genderRepository | GenderRepository | - | - |
| subjectTypeCreator | SubjectTypeCreator | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| individualService | IndividualService | - | - |
| s3Service | S3Service | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| addressLevelCreator | AddressLevelCreator | - | - |
| subjectMigrationService | SubjectMigrationService | - | - |
| subjectTypeService | SubjectTypeService | - | - |
| subjectHeadersCreator | SubjectHeadersCreator | - | - |

**Returns**: `public`



### write(extends: Chunk<?, type: String, locationHierarchy: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extends | Chunk<? | - | - |
| type | String | - | - |
| locationHierarchy | String | - | - |

**Returns**: `void`



### write(row: Row, type: String, locationHierarchy: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| type | String | - | - |
| locationHierarchy | String | - | - |

**Returns**: `void`



### RuntimeException(form: String.format("No, unknown: subjectType.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | String.format("No | - | - |
| unknown | subjectType.getName( | - | - |

**Returns**: `new`



### LocationCreator() → new

**Returns**: `new`



### setAddressLevel(row: Row, individual: Individual, registrationLocationTypes: AddressLevelTypes, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| individual | Individual | - | - |
| registrationLocationTypes | AddressLevelTypes | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`



### setFirstName(row: Row, individual: Individual, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| individual | Individual | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`



### setSubjectType(row: Row, individual: Individual, allErrorMsgs: List<String>, type: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| individual | Individual | - | - |
| allErrorMsgs | List<String> | - | - |
| type | String | - | - |

**Returns**: `SubjectType`



### setProfilePicture(subjectType: SubjectType, individual: Individual, row: Row, errorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| individual | Individual | - | - |
| row | Row | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `void`



### createNewIndividual(externalId: String) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Individual`



### Individual() → new

**Returns**: `new`



### setDateOfBirth(individual: Individual, row: Row, errorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| row | Row | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `void`



### setRegistrationDate(individual: Individual, row: Row, errorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| row | Row | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `void`



### setGender(individual: Individual, row: Row, allErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| row | Row | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `void`


