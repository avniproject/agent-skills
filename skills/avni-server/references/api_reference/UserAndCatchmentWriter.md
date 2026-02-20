# API Reference: UserAndCatchmentWriter.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/UserAndCatchmentWriter.java`

---

## Functions

### UserAndCatchmentWriter(catchmentService: CatchmentService, locationRepository: LocationRepository, userService: UserService, userRepository: UserRepository, organisationConfigService: OrganisationConfigService, idpServiceFactory: IdpServiceFactory, subjectTypeService: SubjectTypeService, conceptService: ConceptService, resetSyncService: ResetSyncService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentService | CatchmentService | - | - |
| locationRepository | LocationRepository | - | - |
| userService | UserService | - | - |
| userRepository | UserRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| subjectTypeService | SubjectTypeService | - | - |
| conceptService | ConceptService | - | - |
| resetSyncService | ResetSyncService | - | - |

**Returns**: `public`



### write(extends: Chunk<?) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extends | Chunk<? | - | - |

**Returns**: `void`



### validateHeaders(headers: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |

**Returns**: `void`



### UsersAndCatchmentsHeaders() → new

**Returns**: `new`



### RuntimeException(unknown: createMultiErrorMessage(allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | createMultiErrorMessage(allErrorMsgs | - | - |

**Returns**: `new`



### checkForUnknownHeaders(headerList: List<String>, allErrorMsgs: List<String>, expectedStandardHeaders: List<String>, syncAttributeHeadersForSubjectTypes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |
| expectedStandardHeaders | List<String> | - | - |
| syncAttributeHeadersForSubjectTypes | List<String> | - | - |

**Returns**: `void`



### checkForMissingHeaders(headerList: List<String>, allErrorMsgs: List<String>, expectedStandardHeaders: List<String>, expectedSyncAttributeHeadersForSubjectTypes: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headerList | List<String> | - | - |
| allErrorMsgs | List<String> | - | - |
| expectedStandardHeaders | List<String> | - | - |
| expectedSyncAttributeHeadersForSubjectTypes | List<String> | - | - |

**Returns**: `void`



### write(row: Row) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |

**Returns**: `void`



### User() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### validateRowAndAssimilateErrors(rowValidationErrorMsgs: List<String>, fullAddress: String, catchmentName: String, nameOfUser: String, username: String, email: String, phoneNumber: String, language: String, datePickerMode: String, location: AddressLevel, locale: Locale, userSuffix: String, trackLocation: Boolean, trackLocationValueProvidedByUser: String, beneficiaryMode: Boolean, beneficiaryModeValueProvidedByUser: String, active: Boolean, activeValueProvidedByUser: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rowValidationErrorMsgs | List<String> | - | - |
| fullAddress | String | - | - |
| catchmentName | String | - | - |
| nameOfUser | String | - | - |
| username | String | - | - |
| email | String | - | - |
| phoneNumber | String | - | - |
| language | String | - | - |
| datePickerMode | String | - | - |
| location | AddressLevel | - | - |
| locale | Locale | - | - |
| userSuffix | String | - | - |
| trackLocation | Boolean | - | - |
| trackLocationValueProvidedByUser | String | - | - |
| beneficiaryMode | Boolean | - | - |
| beneficiaryModeValueProvidedByUser | String | - | - |
| active | Boolean | - | - |
| activeValueProvidedByUser | String | - | - |

**Returns**: `void`



### RuntimeException(unknown: createMultiErrorMessage(rowValidationErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | createMultiErrorMessage(rowValidationErrorMsgs | - | - |

**Returns**: `new`



### createMultiErrorMessage(errorMsgs: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorMsgs | List<String> | - | - |

**Returns**: `String`



### extractUserNameValidationErrMsg(rowValidationErrorMsgs: List<String>, nameOfUser: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rowValidationErrorMsgs | List<String> | - | - |
| nameOfUser | String | - | - |

**Returns**: `void`



### extractUserEmailValidationErrMsg(rowValidationErrorMsgs: List<String>, email: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rowValidationErrorMsgs | List<String> | - | - |
| email | String | - | - |

**Returns**: `void`



### extractUserUsernameValidationErrMsg(rowValidationErrorMsgs: List<String>, username: String, userSuffix: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rowValidationErrorMsgs | List<String> | - | - |
| username | String | - | - |
| userSuffix | String | - | - |

**Returns**: `void`



### addErrMsgIfValidationFails(validationCheckResult: boolean, rowValidationErrorMsgs: List<String>, validationErrorMessage: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationCheckResult | boolean | - | - |
| rowValidationErrorMsgs | List<String> | - | - |
| validationErrorMessage | String | - | - |

**Returns**: `boolean`



### constructSyncSettings(row: Row, rowValidationErrorMsgs: List<String>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| rowValidationErrorMsgs | List<String> | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### updateSyncSettingsFor(saHeader: String, row: Row, unknown: Map<String, syncSettingsMap: UserSyncSettings>, rowValidationErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| saHeader | String | - | - |
| row | Row | - | - |
| unknown | Map<String | - | - |
| syncSettingsMap | UserSyncSettings> | - | - |
| rowValidationErrorMsgs | List<String> | - | - |

**Returns**: `void`



### UserSyncSettings() → new

**Returns**: `new`



### updateSyncSubjectTypeSettings(subjectType: SubjectType, userSyncSettings: UserSyncSettings) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| userSyncSettings | UserSyncSettings | - | - |

**Returns**: `void`



### updateSyncConceptSettings(subjectType: SubjectType, conceptName: String, conceptValues: String, userSyncSettings: UserSyncSettings, rowValidationErrorMsgs: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| conceptName | String | - | - |
| conceptValues | String | - | - |
| userSyncSettings | UserSyncSettings | - | - |
| rowValidationErrorMsgs | List<String> | - | - |

**Returns**: `void`



### findSyncSettingCodedConceptValues(syncSettingsValues: List<String>, concept: Concept, rowValidationErrorMsgs: List<String>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncSettingsValues | List<String> | - | - |
| concept | Concept | - | - |
| rowValidationErrorMsgs | List<String> | - | - |

**Returns**: `List<String>`


