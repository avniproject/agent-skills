# API Reference: SubjectTypeService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/SubjectTypeService.java`

---

## Classes

### SubjectTypeService

**Inherits from**: NonScopeAwareService

#### Methods

##### SubjectTypeService(subjectTypeRepository: SubjectTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, syncAttributesJob: Job, syncAttributesJobLauncher: JobLauncher, userSubjectTypeCreateJob: Job, userSubjectTypeCreateJobLauncher: JobLauncher, avniJobRepository: AvniJobRepository, conceptService: ConceptService, organisationConfigService: OrganisationConfigService, addressLevelTypeRepository: AddressLevelTypeRepository, userService: UserService, locationHierarchyService: LocationHierarchyService, batchJobService: BatchJobService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| syncAttributesJob | Job | - | - |
| syncAttributesJobLauncher | JobLauncher | - | - |
| userSubjectTypeCreateJob | Job | - | - |
| userSubjectTypeCreateJobLauncher | JobLauncher | - | - |
| avniJobRepository | AvniJobRepository | - | - |
| conceptService | ConceptService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| userService | UserService | - | - |
| locationHierarchyService | LocationHierarchyService | - | - |
| batchJobService | BatchJobService | - | - |

**Returns**: `public`


##### saveSubjectType(subjectTypeRequest: SubjectTypeContract) → SubjectTypeUpsertResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRequest | SubjectTypeContract | - | - |

**Returns**: `SubjectTypeUpsertResponse`


##### SubjectType() → new

**Returns**: `new`


##### SubjectTypeUpsertResponse(unknown: isSubjectTypeNotPresentInDB, unknown: subjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | isSubjectTypeNotPresentInDB | - | - |
| unknown | subjectType | - | - |

**Returns**: `new`


##### createOperationalSubjectType(operationalSubjectTypeContract: OperationalSubjectTypeContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalSubjectTypeContract | OperationalSubjectTypeContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### OperationalSubjectType() → new

**Returns**: `new`


##### createIndividualSubjectType() → SubjectType

**Returns**: `SubjectType`


##### SubjectType() → new

**Returns**: `new`


##### getByName(name: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `SubjectType`


##### saveIndividualOperationalSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### OperationalSubjectType() → new

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getSyncAttributeData() → UserSyncAttributeAssignmentRequest

**Returns**: `UserSyncAttributeAssignmentRequest`


##### UserSyncAttributeAssignmentRequest(unknown: subjectTypesHavingSyncConcepts, unknown: isAnySyncByLocation, unknown: conceptService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectTypesHavingSyncConcepts | - | - |
| unknown | isAnySyncByLocation | - | - |
| unknown | conceptService | - | - |

**Returns**: `new`


##### getAll() → Stream<SubjectType>

**Returns**: `Stream<SubjectType>`


##### updateSyncAttributesIfRequired(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### JobParametersBuilder() → new

**Returns**: `new`


##### RuntimeException(while: String.format("Error, unknown: %s", unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| while | String.format("Error | - | - |
| unknown | %s" | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### launchUserSubjectTypeJob(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### JobParametersBuilder() → new

**Returns**: `new`


##### RuntimeException(while: String.format("Error, unknown: %s", unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| while | String.format("Error | - | - |
| unknown | %s" | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### constructSyncAttributeHeadersForSubjectTypes() → List<String>

**Returns**: `List<String>`


##### constructSyncAttributeHeadersForSubjectType(subjectTypeWithSyncAttribute: SubjectType) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeWithSyncAttribute | SubjectType | - | - |

**Returns**: `List<String>`


##### constructSyncAttributeAllowedValuesForSubjectTypes() → List<String>

**Returns**: `List<String>`


##### constructSyncAttributeAllowedValuesForSubjectType(subjectTypeWithSyncAttribute: SubjectType) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeWithSyncAttribute | SubjectType | - | - |

**Returns**: `List<String>`


##### getDefaultSettings() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### getRegistrableLocationTypes(subjectType: SubjectType) → AddressLevelTypes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `AddressLevelTypes`


##### RuntimeException(address: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| address | "No | - | - |

**Returns**: `new`


##### AddressLevelTypes(unknown: locationTypes.stream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationTypes.stream( | - | - |

**Returns**: `new`


##### AddressLevelTypes(unknown: locationTypes.stream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationTypes.stream( | - | - |

**Returns**: `new`


##### saveSubjectTypesFromBundle(subjectTypeContracts: SubjectTypeContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeContracts | SubjectTypeContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: subjectTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### saveOperationalSubjectTypes(operationalSubjectTypesContract: OperationalSubjectTypesContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalSubjectTypesContract | OperationalSubjectTypesContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: ostc, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ostc | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### SubjectTypeUpsertResponse(isSubjectTypeNotPresentInDB: boolean, subjectType: SubjectType) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isSubjectTypeNotPresentInDB | boolean | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `public`


##### isSubjectTypeNotPresentInDB() → boolean

**Returns**: `boolean`


##### getSubjectType() → SubjectType

**Returns**: `SubjectType`




### SubjectTypeUpsertResponse

**Inherits from**: (none)

#### Methods

##### SubjectTypeUpsertResponse(isSubjectTypeNotPresentInDB: boolean, subjectType: SubjectType) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isSubjectTypeNotPresentInDB | boolean | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `public`


##### isSubjectTypeNotPresentInDB() → boolean

**Returns**: `boolean`


##### getSubjectType() → SubjectType

**Returns**: `SubjectType`




## Functions

### SubjectTypeService(subjectTypeRepository: SubjectTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, syncAttributesJob: Job, syncAttributesJobLauncher: JobLauncher, userSubjectTypeCreateJob: Job, userSubjectTypeCreateJobLauncher: JobLauncher, avniJobRepository: AvniJobRepository, conceptService: ConceptService, organisationConfigService: OrganisationConfigService, addressLevelTypeRepository: AddressLevelTypeRepository, userService: UserService, locationHierarchyService: LocationHierarchyService, batchJobService: BatchJobService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| syncAttributesJob | Job | - | - |
| syncAttributesJobLauncher | JobLauncher | - | - |
| userSubjectTypeCreateJob | Job | - | - |
| userSubjectTypeCreateJobLauncher | JobLauncher | - | - |
| avniJobRepository | AvniJobRepository | - | - |
| conceptService | ConceptService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| userService | UserService | - | - |
| locationHierarchyService | LocationHierarchyService | - | - |
| batchJobService | BatchJobService | - | - |

**Returns**: `public`



### saveSubjectType(subjectTypeRequest: SubjectTypeContract) → SubjectTypeUpsertResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRequest | SubjectTypeContract | - | - |

**Returns**: `SubjectTypeUpsertResponse`



### SubjectType() → new

**Returns**: `new`



### SubjectTypeUpsertResponse(unknown: isSubjectTypeNotPresentInDB, unknown: subjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | isSubjectTypeNotPresentInDB | - | - |
| unknown | subjectType | - | - |

**Returns**: `new`



### createOperationalSubjectType(operationalSubjectTypeContract: OperationalSubjectTypeContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalSubjectTypeContract | OperationalSubjectTypeContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### OperationalSubjectType() → new

**Returns**: `new`



### createIndividualSubjectType() → SubjectType

**Returns**: `SubjectType`



### SubjectType() → new

**Returns**: `new`



### getByName(name: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `SubjectType`



### saveIndividualOperationalSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



### OperationalSubjectType() → new

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getSyncAttributeData() → UserSyncAttributeAssignmentRequest

**Returns**: `UserSyncAttributeAssignmentRequest`



### UserSyncAttributeAssignmentRequest(unknown: subjectTypesHavingSyncConcepts, unknown: isAnySyncByLocation, unknown: conceptService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectTypesHavingSyncConcepts | - | - |
| unknown | isAnySyncByLocation | - | - |
| unknown | conceptService | - | - |

**Returns**: `new`



### getAll() → Stream<SubjectType>

**Returns**: `Stream<SubjectType>`



### updateSyncAttributesIfRequired(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



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



### launchUserSubjectTypeJob(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



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



### constructSyncAttributeHeadersForSubjectTypes() → List<String>

**Returns**: `List<String>`



### constructSyncAttributeHeadersForSubjectType(subjectTypeWithSyncAttribute: SubjectType) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeWithSyncAttribute | SubjectType | - | - |

**Returns**: `List<String>`



### constructSyncAttributeAllowedValuesForSubjectTypes() → List<String>

**Returns**: `List<String>`



### constructSyncAttributeAllowedValuesForSubjectType(subjectTypeWithSyncAttribute: SubjectType) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeWithSyncAttribute | SubjectType | - | - |

**Returns**: `List<String>`



### getDefaultSettings() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### getRegistrableLocationTypes(subjectType: SubjectType) → AddressLevelTypes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `AddressLevelTypes`



### RuntimeException(address: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| address | "No | - | - |

**Returns**: `new`



### AddressLevelTypes(unknown: locationTypes.stream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationTypes.stream( | - | - |

**Returns**: `new`



### AddressLevelTypes(unknown: locationTypes.stream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | locationTypes.stream( | - | - |

**Returns**: `new`



### saveSubjectTypesFromBundle(subjectTypeContracts: SubjectTypeContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeContracts | SubjectTypeContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: subjectTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`



### saveOperationalSubjectTypes(operationalSubjectTypesContract: OperationalSubjectTypesContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalSubjectTypesContract | OperationalSubjectTypesContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: ostc, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ostc | - | - |
| unknown | e | - | - |

**Returns**: `new`



### SubjectTypeUpsertResponse(isSubjectTypeNotPresentInDB: boolean, subjectType: SubjectType) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isSubjectTypeNotPresentInDB | boolean | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `public`



### isSubjectTypeNotPresentInDB() → boolean

**Returns**: `boolean`



### getSubjectType() → SubjectType

**Returns**: `SubjectType`


