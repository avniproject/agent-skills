# API Reference: ImportService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ImportService.java`

---

## Classes

### ImportService

**Inherits from**: ImportLocationsConstants

#### Methods

##### Random() → new

**Returns**: `new`


##### ImportService(subjectTypeRepository: SubjectTypeRepository, formMappingRepository: FormMappingRepository, encounterTypeRepository: EncounterTypeRepository, addressLevelTypeRepository: AddressLevelTypeRepository, organisationConfigRepository: OrganisationConfigRepository, groupRepository: GroupRepository, subjectTypeService: SubjectTypeService, formService: FormService, conceptService: ConceptService, subjectImportService: SubjectImportService, programImportService: ProgramImportService, encounterImportService: EncounterImportService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| organisationConfigRepository | OrganisationConfigRepository | - | - |
| groupRepository | GroupRepository | - | - |
| subjectTypeService | SubjectTypeService | - | - |
| formService | FormService | - | - |
| conceptService | ConceptService | - | - |
| subjectImportService | SubjectImportService | - | - |
| programImportService | ProgramImportService | - | - |
| encounterImportService | EncounterImportService | - | - |

**Returns**: `public`


##### getImportTypes() → HashMap<String, FormMappingInfo>

**Returns**: `HashMap<String, FormMappingInfo>`


##### FormMappingInfo(registration": String.format("%s, unknown: subjectName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registration" | String.format("%s | - | - |
| unknown | subjectName | - | - |

**Returns**: `new`


##### FormMappingInfo(enrolment": String.format("%s, unknown: programName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolment" | String.format("%s | - | - |
| unknown | programName | - | - |

**Returns**: `new`


##### FormMappingInfo(unknown: String.format("%s", unknown: formName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format("%s" | - | - |
| unknown | formName | - | - |

**Returns**: `new`


##### FormMappingInfo(unknown: String.format("%s", unknown: formName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format("%s" | - | - |
| unknown | formName | - | - |

**Returns**: `new`


##### FormMappingInfo(members": String.format("%s, unknown: groupSubjectTypeName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| members" | String.format("%s | - | - |
| unknown | groupSubjectTypeName | - | - |

**Returns**: `new`


##### FormMappingInfo(name: String, isApprovalEnabled: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| isApprovalEnabled | boolean | - | - |

**Returns**: `public`


##### getName() → String

**Returns**: `String`


##### isApprovalEnabled() → boolean

**Returns**: `boolean`


##### getSampleFile(uploadType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadType | String | - | - |

**Returns**: `String`


##### getUsersAndCatchmentsSampleFile() → return

**Returns**: `return`


##### getGroupMembersSampleFile(unknown: uploadSpec, unknown: response, unknown: getSubjectType(uploadSpec[1]) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uploadSpec | - | - |
| unknown | response | - | - |
| unknown | getSubjectType(uploadSpec[1] | - | - |

**Returns**: `return`


##### UnsupportedOperationException(file: String.format("Sample, unknown: uploadType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | String.format("Sample | - | - |
| unknown | uploadType | - | - |

**Returns**: `new`


##### getSampleImportFile(uploadType: String, locationHierarchy: String, locationUploadMode: LocationWriter.LocationUploadMode, encounterUploadMode: EncounterUploadMode, response: HttpServletResponse) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadType | String | - | - |
| locationHierarchy | String | - | - |
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| encounterUploadMode | EncounterUploadMode | - | - |
| response | HttpServletResponse | - | - |

**Returns**: `void`


##### BadRequestError(value: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | "Invalid | - | - |

**Returns**: `new`


##### BadRequestError(value: "Missing) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | "Missing | - | - |

**Returns**: `new`


##### RuntimeException(value: String.format("Invalid, unknown: locationHierarchy) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String.format("Invalid | - | - |
| unknown | locationHierarchy | - | - |

**Returns**: `new`


##### getLocationsSampleFile(locationUploadMode: LocationWriter.LocationUploadMode, locationHierarchy: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| locationHierarchy | String | - | - |

**Returns**: `String`


##### addSampleFileContent(locationUploadMode: LocationWriter.LocationUploadMode, addressLevelTypes: List<AddressLevelType>, formElementNamesForLocationTypeFormElements: List<FormElement>) → StringBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| addressLevelTypes | List<AddressLevelType> | - | - |
| formElementNamesForLocationTypeFormElements | List<FormElement> | - | - |

**Returns**: `StringBuilder`


##### StringBuilder() → new

**Returns**: `new`


##### getAddressLevelTypesForCreateModeSingleHierarchy(locationHierarchy: String) → List<AddressLevelType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationHierarchy | String | - | - |

**Returns**: `List<AddressLevelType>`


##### RuntimeException(value: String.format("Invalid, unknown: locationHierarchy) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String.format("Invalid | - | - |
| unknown | locationHierarchy | - | - |

**Returns**: `new`


##### listAsSeparatedString(rowItems: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rowItems | List<String> | - | - |

**Returns**: `String`


##### buildHeaderRowForLocations(locationUploadMode: LocationWriter.LocationUploadMode, addressLevelTypes: List<AddressLevelType>, formElementNamesForLocationTypeFormElements: List<FormElement>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| addressLevelTypes | List<AddressLevelType> | - | - |
| formElementNamesForLocationTypeFormElements | List<FormElement> | - | - |

**Returns**: `String`


##### listAsSeparatedString(unknown: headers) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |

**Returns**: `return`


##### buildDescriptionRowForLocations(locationUploadMode: LocationWriter.LocationUploadMode, addressLevelTypes: List<AddressLevelType>, formElementNamesForLocationTypeFormElements: List<FormElement>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| addressLevelTypes | List<AddressLevelType> | - | - |
| formElementNamesForLocationTypeFormElements | List<FormElement> | - | - |

**Returns**: `String`


##### listAsSeparatedString(unknown: descriptions) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | descriptions | - | - |

**Returns**: `return`


##### buildSampleValuesRowForLocations(locationUploadMode: LocationWriter.LocationUploadMode, addressLevelTypes: List<AddressLevelType>, formElementNamesForLocationTypeFormElements: List<FormElement>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| addressLevelTypes | List<AddressLevelType> | - | - |
| formElementNamesForLocationTypeFormElements | List<FormElement> | - | - |

**Returns**: `String`


##### listAsSeparatedString(unknown: sampleValues) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sampleValues | - | - |

**Returns**: `return`


##### getUsersAndCatchmentsSampleFile() → String

**Returns**: `String`


##### StringBuilder() → new

**Returns**: `new`


##### BufferedReader(InputStreamReader(csvFileResourceStream: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(csvFileResourceStream | new | - | - |

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### appendDescriptionForUsersAndCatchments(sampleFileBuilder: StringBuilder, csvReader: BufferedReader) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sampleFileBuilder | StringBuilder | - | - |
| csvReader | BufferedReader | - | - |

**Returns**: `void`


##### getSupportedLanguages() → Set<String>

**Returns**: `Set<String>`


##### getGroups() → List<Group>

**Returns**: `List<Group>`


##### appendSampleValuesForUsersAndCatchments(sampleFileBuilder: StringBuilder, csvReader: BufferedReader, headersForSubjectTypesWithSyncAttributes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sampleFileBuilder | StringBuilder | - | - |
| csvReader | BufferedReader | - | - |
| headersForSubjectTypesWithSyncAttributes | List<String> | - | - |

**Returns**: `void`


##### constructSampleSyncAttributeConceptValues(size: int) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| size | int | - | - |

**Returns**: `String`


##### appendHeaderRowForUsersAndCatchments(sampleFileBuilder: StringBuilder, csvReader: BufferedReader) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sampleFileBuilder | StringBuilder | - | - |
| csvReader | BufferedReader | - | - |

**Returns**: `List<String>`


##### getGroupMembersSampleFile(uploadSpec: String[], response: String, subjectType: SubjectType) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadSpec | String[] | - | - |
| response | String | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `String`


##### HouseholdMemberHeaders(unknown: subjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |

**Returns**: `new`


##### GroupMemberHeaders(unknown: subjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |

**Returns**: `new`


##### getEncounterType(encounterTypeName: String) → EncounterType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |

**Returns**: `EncounterType`


##### getSubjectType(subjectTypeName: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `SubjectType`


##### assertNotNull(obj: Object, descriptor: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | Object | - | - |
| descriptor | String | - | - |

**Returns**: `void`


##### UnsupportedOperationException(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`


##### getHeaderName(formElement: FormElement) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |

**Returns**: `String`


##### addToResponse(inputString: String, headers: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputString | String | - | - |
| headers | List<String> | - | - |

**Returns**: `String`


##### addCommaIfNecessary(str: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |

**Returns**: `String`




### FormMappingInfo

**Inherits from**: (none)

#### Methods

##### FormMappingInfo(name: String, isApprovalEnabled: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| isApprovalEnabled | boolean | - | - |

**Returns**: `public`


##### getName() → String

**Returns**: `String`


##### isApprovalEnabled() → boolean

**Returns**: `boolean`




## Functions

### Random() → new

**Returns**: `new`



### ImportService(subjectTypeRepository: SubjectTypeRepository, formMappingRepository: FormMappingRepository, encounterTypeRepository: EncounterTypeRepository, addressLevelTypeRepository: AddressLevelTypeRepository, organisationConfigRepository: OrganisationConfigRepository, groupRepository: GroupRepository, subjectTypeService: SubjectTypeService, formService: FormService, conceptService: ConceptService, subjectImportService: SubjectImportService, programImportService: ProgramImportService, encounterImportService: EncounterImportService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| organisationConfigRepository | OrganisationConfigRepository | - | - |
| groupRepository | GroupRepository | - | - |
| subjectTypeService | SubjectTypeService | - | - |
| formService | FormService | - | - |
| conceptService | ConceptService | - | - |
| subjectImportService | SubjectImportService | - | - |
| programImportService | ProgramImportService | - | - |
| encounterImportService | EncounterImportService | - | - |

**Returns**: `public`



### getImportTypes() → HashMap<String, FormMappingInfo>

**Returns**: `HashMap<String, FormMappingInfo>`



### FormMappingInfo(registration": String.format("%s, unknown: subjectName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registration" | String.format("%s | - | - |
| unknown | subjectName | - | - |

**Returns**: `new`



### FormMappingInfo(enrolment": String.format("%s, unknown: programName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolment" | String.format("%s | - | - |
| unknown | programName | - | - |

**Returns**: `new`



### FormMappingInfo(unknown: String.format("%s", unknown: formName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format("%s" | - | - |
| unknown | formName | - | - |

**Returns**: `new`



### FormMappingInfo(unknown: String.format("%s", unknown: formName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format("%s" | - | - |
| unknown | formName | - | - |

**Returns**: `new`



### FormMappingInfo(members": String.format("%s, unknown: groupSubjectTypeName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| members" | String.format("%s | - | - |
| unknown | groupSubjectTypeName | - | - |

**Returns**: `new`



### FormMappingInfo(name: String, isApprovalEnabled: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| isApprovalEnabled | boolean | - | - |

**Returns**: `public`



### getName() → String

**Returns**: `String`



### isApprovalEnabled() → boolean

**Returns**: `boolean`



### getSampleFile(uploadType: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadType | String | - | - |

**Returns**: `String`



### getUsersAndCatchmentsSampleFile() → return

**Returns**: `return`



### getGroupMembersSampleFile(unknown: uploadSpec, unknown: response, unknown: getSubjectType(uploadSpec[1]) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uploadSpec | - | - |
| unknown | response | - | - |
| unknown | getSubjectType(uploadSpec[1] | - | - |

**Returns**: `return`



### UnsupportedOperationException(file: String.format("Sample, unknown: uploadType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file | String.format("Sample | - | - |
| unknown | uploadType | - | - |

**Returns**: `new`



### getSampleImportFile(uploadType: String, locationHierarchy: String, locationUploadMode: LocationWriter.LocationUploadMode, encounterUploadMode: EncounterUploadMode, response: HttpServletResponse) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadType | String | - | - |
| locationHierarchy | String | - | - |
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| encounterUploadMode | EncounterUploadMode | - | - |
| response | HttpServletResponse | - | - |

**Returns**: `void`



### BadRequestError(value: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | "Invalid | - | - |

**Returns**: `new`



### BadRequestError(value: "Missing) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | "Missing | - | - |

**Returns**: `new`



### RuntimeException(value: String.format("Invalid, unknown: locationHierarchy) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String.format("Invalid | - | - |
| unknown | locationHierarchy | - | - |

**Returns**: `new`



### getLocationsSampleFile(locationUploadMode: LocationWriter.LocationUploadMode, locationHierarchy: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| locationHierarchy | String | - | - |

**Returns**: `String`



### addSampleFileContent(locationUploadMode: LocationWriter.LocationUploadMode, addressLevelTypes: List<AddressLevelType>, formElementNamesForLocationTypeFormElements: List<FormElement>) → StringBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| addressLevelTypes | List<AddressLevelType> | - | - |
| formElementNamesForLocationTypeFormElements | List<FormElement> | - | - |

**Returns**: `StringBuilder`



### StringBuilder() → new

**Returns**: `new`



### getAddressLevelTypesForCreateModeSingleHierarchy(locationHierarchy: String) → List<AddressLevelType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationHierarchy | String | - | - |

**Returns**: `List<AddressLevelType>`



### RuntimeException(value: String.format("Invalid, unknown: locationHierarchy) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String.format("Invalid | - | - |
| unknown | locationHierarchy | - | - |

**Returns**: `new`



### listAsSeparatedString(rowItems: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rowItems | List<String> | - | - |

**Returns**: `String`



### buildHeaderRowForLocations(locationUploadMode: LocationWriter.LocationUploadMode, addressLevelTypes: List<AddressLevelType>, formElementNamesForLocationTypeFormElements: List<FormElement>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| addressLevelTypes | List<AddressLevelType> | - | - |
| formElementNamesForLocationTypeFormElements | List<FormElement> | - | - |

**Returns**: `String`



### listAsSeparatedString(unknown: headers) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |

**Returns**: `return`



### buildDescriptionRowForLocations(locationUploadMode: LocationWriter.LocationUploadMode, addressLevelTypes: List<AddressLevelType>, formElementNamesForLocationTypeFormElements: List<FormElement>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| addressLevelTypes | List<AddressLevelType> | - | - |
| formElementNamesForLocationTypeFormElements | List<FormElement> | - | - |

**Returns**: `String`



### listAsSeparatedString(unknown: descriptions) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | descriptions | - | - |

**Returns**: `return`



### buildSampleValuesRowForLocations(locationUploadMode: LocationWriter.LocationUploadMode, addressLevelTypes: List<AddressLevelType>, formElementNamesForLocationTypeFormElements: List<FormElement>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationUploadMode | LocationWriter.LocationUploadMode | - | - |
| addressLevelTypes | List<AddressLevelType> | - | - |
| formElementNamesForLocationTypeFormElements | List<FormElement> | - | - |

**Returns**: `String`



### listAsSeparatedString(unknown: sampleValues) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sampleValues | - | - |

**Returns**: `return`



### getUsersAndCatchmentsSampleFile() → String

**Returns**: `String`



### StringBuilder() → new

**Returns**: `new`



### BufferedReader(InputStreamReader(csvFileResourceStream: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(csvFileResourceStream | new | - | - |

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### appendDescriptionForUsersAndCatchments(sampleFileBuilder: StringBuilder, csvReader: BufferedReader) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sampleFileBuilder | StringBuilder | - | - |
| csvReader | BufferedReader | - | - |

**Returns**: `void`



### getSupportedLanguages() → Set<String>

**Returns**: `Set<String>`



### getGroups() → List<Group>

**Returns**: `List<Group>`



### appendSampleValuesForUsersAndCatchments(sampleFileBuilder: StringBuilder, csvReader: BufferedReader, headersForSubjectTypesWithSyncAttributes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sampleFileBuilder | StringBuilder | - | - |
| csvReader | BufferedReader | - | - |
| headersForSubjectTypesWithSyncAttributes | List<String> | - | - |

**Returns**: `void`



### constructSampleSyncAttributeConceptValues(size: int) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| size | int | - | - |

**Returns**: `String`



### appendHeaderRowForUsersAndCatchments(sampleFileBuilder: StringBuilder, csvReader: BufferedReader) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sampleFileBuilder | StringBuilder | - | - |
| csvReader | BufferedReader | - | - |

**Returns**: `List<String>`



### getGroupMembersSampleFile(uploadSpec: String[], response: String, subjectType: SubjectType) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadSpec | String[] | - | - |
| response | String | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `String`



### HouseholdMemberHeaders(unknown: subjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |

**Returns**: `new`



### GroupMemberHeaders(unknown: subjectType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |

**Returns**: `new`



### getEncounterType(encounterTypeName: String) → EncounterType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |

**Returns**: `EncounterType`



### getSubjectType(subjectTypeName: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `SubjectType`



### assertNotNull(obj: Object, descriptor: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | Object | - | - |
| descriptor | String | - | - |

**Returns**: `void`



### UnsupportedOperationException(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`



### getHeaderName(formElement: FormElement) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |

**Returns**: `String`



### addToResponse(inputString: String, headers: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputString | String | - | - |
| headers | List<String> | - | - |

**Returns**: `String`



### addCommaIfNecessary(str: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |

**Returns**: `String`


