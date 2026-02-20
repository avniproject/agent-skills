# API Reference: ResetSyncService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ResetSyncService.java`

---

## Classes

### ResetSyncService

**Inherits from**: (none)

#### Methods

##### ResetSyncService(resetSyncRepository: ResetSyncRepository, userRepository: UserRepository, individualRepository: IndividualRepository, subjectTypeRepository: SubjectTypeRepository, locationRepository: LocationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resetSyncRepository | ResetSyncRepository | - | - |
| userRepository | UserRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |

**Returns**: `public`


##### recordCatchmentChange(savedCatchment: Catchment, request: CatchmentContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedCatchment | Catchment | - | - |
| request | CatchmentContract | - | - |

**Returns**: `void`


##### recordSyncAttributeChange(savedSubjectType: SubjectType, request: SubjectTypeContractWeb) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedSubjectType | SubjectType | - | - |
| request | SubjectTypeContractWeb | - | - |

**Returns**: `void`


##### recordLocationParentChange(addressLevel: AddressLevel, oldParentId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |
| oldParentId | Long | - | - |

**Returns**: `void`


##### anySyncAttributeChanged(savedSubjectType: SubjectType, request: SubjectTypeContractWeb) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedSubjectType | SubjectType | - | - |
| request | SubjectTypeContractWeb | - | - |

**Returns**: `boolean`


##### isChanged(unknown: savedSubjectType.getSyncRegistrationConcept1() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | savedSubjectType.getSyncRegistrationConcept1( | - | - |

**Returns**: `return`


##### recordSyncAttributeValueChangeForUser(savedUser: User, userContract: UserContract, newSyncSettings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedUser | User | - | - |
| userContract | UserContract | - | - |
| newSyncSettings | JsonObject | - | - |

**Returns**: `void`


##### recordSyncAttributeValueChangeForUser(savedUser: User, newCatchmentId: Long, newSyncSettings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedUser | User | - | - |
| newCatchmentId | Long | - | - |
| newSyncSettings | JsonObject | - | - |

**Returns**: `void`


##### getChangedSubjectTypes(olderSettings: JsonObject, newSettings: JsonObject) → List<SubjectType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| olderSettings | JsonObject | - | - |
| newSettings | JsonObject | - | - |

**Returns**: `List<SubjectType>`


##### isSyncConcept1Changed(olderSettings: UserSyncSettings, newSettings: UserSyncSettings) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| olderSettings | UserSyncSettings | - | - |
| newSettings | UserSyncSettings | - | - |

**Returns**: `boolean`


##### isChanged(unknown: olderSettings.getSyncConcept1() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | olderSettings.getSyncConcept1( | - | - |

**Returns**: `return`


##### isSyncConcept2Changed(olderSettings: UserSyncSettings, newSettings: UserSyncSettings) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| olderSettings | UserSyncSettings | - | - |
| newSettings | UserSyncSettings | - | - |

**Returns**: `boolean`


##### isChanged(unknown: olderSettings.getSyncConcept2() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | olderSettings.getSyncConcept2( | - | - |

**Returns**: `return`


##### isCatchmentChanged(savedLocationIds: List<Long>, locationIdsPassedInRequest: List<Long>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedLocationIds | List<Long> | - | - |
| locationIdsPassedInRequest | List<Long> | - | - |

**Returns**: `boolean`


##### hasSubjectsInNewLocation(savedLocationIds: List<Long>, locationIdsPassedInRequest: List<Long>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedLocationIds | List<Long> | - | - |
| locationIdsPassedInRequest | List<Long> | - | - |

**Returns**: `boolean`


##### buildNewResetSync() → ResetSync

**Returns**: `ResetSync`


##### ResetSync() → new

**Returns**: `new`


##### isConceptValueChanged(syncValue1List: List<String>, syncValue2List: List<String>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncValue1List | List<String> | - | - |
| syncValue2List | List<String> | - | - |

**Returns**: `boolean`


##### isChanged(str1: Object, str2: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str1 | Object | - | - |
| str2 | Object | - | - |

**Returns**: `boolean`


##### getByLastModifiedForUser(lastModifiedDateTime: DateTime, now: DateTime, user: User, pageable: Pageable) → Page<ResetSync>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| user | User | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ResetSync>`




## Functions

### ResetSyncService(resetSyncRepository: ResetSyncRepository, userRepository: UserRepository, individualRepository: IndividualRepository, subjectTypeRepository: SubjectTypeRepository, locationRepository: LocationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resetSyncRepository | ResetSyncRepository | - | - |
| userRepository | UserRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| locationRepository | LocationRepository | - | - |

**Returns**: `public`



### recordCatchmentChange(savedCatchment: Catchment, request: CatchmentContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedCatchment | Catchment | - | - |
| request | CatchmentContract | - | - |

**Returns**: `void`



### recordSyncAttributeChange(savedSubjectType: SubjectType, request: SubjectTypeContractWeb) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedSubjectType | SubjectType | - | - |
| request | SubjectTypeContractWeb | - | - |

**Returns**: `void`



### recordLocationParentChange(addressLevel: AddressLevel, oldParentId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |
| oldParentId | Long | - | - |

**Returns**: `void`



### anySyncAttributeChanged(savedSubjectType: SubjectType, request: SubjectTypeContractWeb) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedSubjectType | SubjectType | - | - |
| request | SubjectTypeContractWeb | - | - |

**Returns**: `boolean`



### isChanged(unknown: savedSubjectType.getSyncRegistrationConcept1() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | savedSubjectType.getSyncRegistrationConcept1( | - | - |

**Returns**: `return`



### recordSyncAttributeValueChangeForUser(savedUser: User, userContract: UserContract, newSyncSettings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedUser | User | - | - |
| userContract | UserContract | - | - |
| newSyncSettings | JsonObject | - | - |

**Returns**: `void`



### recordSyncAttributeValueChangeForUser(savedUser: User, newCatchmentId: Long, newSyncSettings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedUser | User | - | - |
| newCatchmentId | Long | - | - |
| newSyncSettings | JsonObject | - | - |

**Returns**: `void`



### getChangedSubjectTypes(olderSettings: JsonObject, newSettings: JsonObject) → List<SubjectType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| olderSettings | JsonObject | - | - |
| newSettings | JsonObject | - | - |

**Returns**: `List<SubjectType>`



### isSyncConcept1Changed(olderSettings: UserSyncSettings, newSettings: UserSyncSettings) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| olderSettings | UserSyncSettings | - | - |
| newSettings | UserSyncSettings | - | - |

**Returns**: `boolean`



### isChanged(unknown: olderSettings.getSyncConcept1() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | olderSettings.getSyncConcept1( | - | - |

**Returns**: `return`



### isSyncConcept2Changed(olderSettings: UserSyncSettings, newSettings: UserSyncSettings) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| olderSettings | UserSyncSettings | - | - |
| newSettings | UserSyncSettings | - | - |

**Returns**: `boolean`



### isChanged(unknown: olderSettings.getSyncConcept2() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | olderSettings.getSyncConcept2( | - | - |

**Returns**: `return`



### isCatchmentChanged(savedLocationIds: List<Long>, locationIdsPassedInRequest: List<Long>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedLocationIds | List<Long> | - | - |
| locationIdsPassedInRequest | List<Long> | - | - |

**Returns**: `boolean`



### hasSubjectsInNewLocation(savedLocationIds: List<Long>, locationIdsPassedInRequest: List<Long>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| savedLocationIds | List<Long> | - | - |
| locationIdsPassedInRequest | List<Long> | - | - |

**Returns**: `boolean`



### buildNewResetSync() → ResetSync

**Returns**: `ResetSync`



### ResetSync() → new

**Returns**: `new`



### isConceptValueChanged(syncValue1List: List<String>, syncValue2List: List<String>) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncValue1List | List<String> | - | - |
| syncValue2List | List<String> | - | - |

**Returns**: `boolean`



### isChanged(str1: Object, str2: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str1 | Object | - | - |
| str2 | Object | - | - |

**Returns**: `boolean`



### getByLastModifiedForUser(lastModifiedDateTime: DateTime, now: DateTime, user: User, pageable: Pageable) → Page<ResetSync>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| user | User | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<ResetSync>`


