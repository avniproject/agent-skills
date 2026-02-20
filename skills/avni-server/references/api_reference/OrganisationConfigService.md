# API Reference: OrganisationConfigService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/OrganisationConfigService.java`

---

## Classes

### OrganisationConfigService

**Inherits from**: NonScopeAwareService

#### Methods

##### OrganisationConfigService(organisationConfigRepository: OrganisationConfigRepository, projectionFactory: ProjectionFactory, conceptRepository: ConceptRepository, LocationHierarchyService: @Lazy, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigRepository | OrganisationConfigRepository | - | - |
| projectionFactory | ProjectionFactory | - | - |
| conceptRepository | ConceptRepository | - | - |
| LocationHierarchyService | @Lazy | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`


##### saveOrganisationConfig(request: OrganisationConfigRequest, organisation: Organisation) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | OrganisationConfigRequest | - | - |
| organisation | Organisation | - | - |

**Returns**: `OrganisationConfig`


##### OrganisationConfig() → new

**Returns**: `new`


##### createDefaultOrganisationConfig(organisation: Organisation) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `OrganisationConfig`


##### OrganisationConfig() → new

**Returns**: `new`


##### JsonObject(unknown: settings) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | settings | - | - |

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### getOrganisationConfig(organisation: Organisation) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `OrganisationConfig`


##### getOrganisationConfigByOrgId(organisationId: Long) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `OrganisationConfig`


##### getOrganisationSettings(organisationId: Long) → LinkedHashMap<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `LinkedHashMap<String, Object>`


##### JsonObject(unknown: organisationConfig.getSettings() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationConfig.getSettings( | - | - |

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### JSONObject(unknown: searchFilters.toString() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchFilters.toString( | - | - |

**Returns**: `new`


##### getOrganisationSettingsJson(organisationId: Long) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `JsonObject`


##### getOrganisationSettingsValue(organisation: Organisation, settingKey: OrganisationConfigSettingKey) → Optional<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| settingKey | OrganisationConfigSettingKey | - | - |

**Returns**: `Optional<Object>`


##### updateLowestAddressLevelTypeSetting(locationConceptUuids: HashSet<String>) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationConceptUuids | HashSet<String> | - | - |

**Returns**: `OrganisationConfig`


##### JsonObject() → new

**Returns**: `new`


##### updateOrganisationSettings(unknown: settings) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | settings | - | - |

**Returns**: `return`


##### updateSettings(key: String, settingObject: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | String | - | - |
| settingObject | Object | - | - |

**Returns**: `void`


##### OrganisationConfig() → new

**Returns**: `new`


##### updateOrganisationSettings(settings: JsonObject) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `OrganisationConfig`


##### OrganisationConfig() → new

**Returns**: `new`


##### updateOrganisationConfigSettings(newSettings: JsonObject, currentSettings: JsonObject) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newSettings | JsonObject | - | - |
| currentSettings | JsonObject | - | - |

**Returns**: `JsonObject`


##### updateOrganisationConfig(request: OrganisationConfigRequest, organisationConfig: OrganisationConfig) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | OrganisationConfigRequest | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `OrganisationConfig`


##### getSettingsByKey(key: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | String | - | - |

**Returns**: `Object`


##### getCurrentOrganisationConfig() → OrganisationConfig

**Returns**: `OrganisationConfig`


##### saveRegistrationLocation(addressLevelType: AddressLevelType, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelType | AddressLevelType | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### saveRegistrationLocations(locationTypeUUIDs: List<String>, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationTypeUUIDs | List<String> | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### getUpdatedCustomRegistrationLocations(locationTypeUUIDs: List<String>, subjectType: SubjectType, organisationConfig: OrganisationConfig) → List<SubjectTypeSetting>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationTypeUUIDs | List<String> | - | - |
| subjectType | SubjectType | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `List<SubjectTypeSetting>`


##### SubjectTypeSetting() → new

**Returns**: `new`


##### filterSubjectTypeSettingsBasedOn(unknown: otherSubjectTypeSettings, ->: setting) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | otherSubjectTypeSettings | - | - |
| -> | setting | - | - |

**Returns**: `return`


##### filterSubjectTypeSettingsBasedOn(subjectTypeSettings: List<SubjectTypeSetting>, predicate: Predicate<SubjectTypeSetting>) → List<SubjectTypeSetting>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeSettings | List<SubjectTypeSetting> | - | - |
| predicate | Predicate<SubjectTypeSetting> | - | - |

**Returns**: `List<SubjectTypeSetting>`


##### isFeatureEnabled(feature: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| feature | String | - | - |

**Returns**: `Boolean`


##### findAllWithFeatureEnabled(feature: String) → List<OrganisationConfig>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| feature | String | - | - |

**Returns**: `List<OrganisationConfig>`


##### isCommentEnabled() → boolean

**Returns**: `boolean`


##### isFeatureEnabled(unknown: "enableComments") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "enableComments" | - | - |

**Returns**: `return`


##### isMessagingEnabled() → boolean

**Returns**: `boolean`


##### isFeatureEnabled(unknown: OrganisationConfigSettingKey.enableMessaging.name() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | OrganisationConfigSettingKey.enableMessaging.name( | - | - |

**Returns**: `return`


##### isFailOnValidationErrorEnabled() → boolean

**Returns**: `boolean`


##### isFeatureEnabled(unknown: OrganisationConfigSettingKey.failOnValidationError.name() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | OrganisationConfigSettingKey.failOnValidationError.name( | - | - |

**Returns**: `return`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getExportSettings() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### saveExportSettings(unknown: name, unknown: request, unknown: false) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | request | - | - |
| unknown | false | - | - |

**Returns**: `return`


##### saveExportSettings(unknown: name, unknown: request, unknown: true) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | request | - | - |
| unknown | true | - | - |

**Returns**: `return`


##### OrganisationConfig() → new

**Returns**: `new`


##### getOrganisationConfig() → Optional<OrganisationConfig>

**Returns**: `Optional<OrganisationConfig>`


##### getExportSettings(organisationConfig: OrganisationConfig) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### OrganisationConfig() → new

**Returns**: `new`


##### deleteMetadataRelatedSettings() → OrganisationConfig

**Returns**: `OrganisationConfig`


##### JsonObject() → new

**Returns**: `new`


##### getMetadataConfigSettingsAfterReset() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### setMetabaseSetupEnabled(organisation: Organisation, isEnabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| isEnabled | boolean | - | - |

**Returns**: `void`


##### isMetabaseSetupEnabled(organisation: Organisation) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `boolean`


##### getMetabaseSyncStatus(organisation: Organisation) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `String`


##### setMetabaseSyncStatus(organisation: Organisation, status: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| status | String | - | - |

**Returns**: `void`


##### removeVoidedAddressLevelTypeFromCustomRegistrationLocations(organisation: Organisation, voidedAddressLevelTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| voidedAddressLevelTypeUuid | String | - | - |

**Returns**: `void`




## Functions

### OrganisationConfigService(organisationConfigRepository: OrganisationConfigRepository, projectionFactory: ProjectionFactory, conceptRepository: ConceptRepository, LocationHierarchyService: @Lazy, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigRepository | OrganisationConfigRepository | - | - |
| projectionFactory | ProjectionFactory | - | - |
| conceptRepository | ConceptRepository | - | - |
| LocationHierarchyService | @Lazy | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`



### saveOrganisationConfig(request: OrganisationConfigRequest, organisation: Organisation) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | OrganisationConfigRequest | - | - |
| organisation | Organisation | - | - |

**Returns**: `OrganisationConfig`



### OrganisationConfig() → new

**Returns**: `new`



### createDefaultOrganisationConfig(organisation: Organisation) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `OrganisationConfig`



### OrganisationConfig() → new

**Returns**: `new`



### JsonObject(unknown: settings) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | settings | - | - |

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### getOrganisationConfig(organisation: Organisation) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `OrganisationConfig`



### getOrganisationConfigByOrgId(organisationId: Long) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `OrganisationConfig`



### getOrganisationSettings(organisationId: Long) → LinkedHashMap<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `LinkedHashMap<String, Object>`



### JsonObject(unknown: organisationConfig.getSettings() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisationConfig.getSettings( | - | - |

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### JSONObject(unknown: searchFilters.toString() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchFilters.toString( | - | - |

**Returns**: `new`



### getOrganisationSettingsJson(organisationId: Long) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `JsonObject`



### getOrganisationSettingsValue(organisation: Organisation, settingKey: OrganisationConfigSettingKey) → Optional<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| settingKey | OrganisationConfigSettingKey | - | - |

**Returns**: `Optional<Object>`



### updateLowestAddressLevelTypeSetting(locationConceptUuids: HashSet<String>) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationConceptUuids | HashSet<String> | - | - |

**Returns**: `OrganisationConfig`



### JsonObject() → new

**Returns**: `new`



### updateOrganisationSettings(unknown: settings) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | settings | - | - |

**Returns**: `return`



### updateSettings(key: String, settingObject: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | String | - | - |
| settingObject | Object | - | - |

**Returns**: `void`



### OrganisationConfig() → new

**Returns**: `new`



### updateOrganisationSettings(settings: JsonObject) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `OrganisationConfig`



### OrganisationConfig() → new

**Returns**: `new`



### updateOrganisationConfigSettings(newSettings: JsonObject, currentSettings: JsonObject) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newSettings | JsonObject | - | - |
| currentSettings | JsonObject | - | - |

**Returns**: `JsonObject`



### updateOrganisationConfig(request: OrganisationConfigRequest, organisationConfig: OrganisationConfig) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | OrganisationConfigRequest | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `OrganisationConfig`



### getSettingsByKey(key: String) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | String | - | - |

**Returns**: `Object`



### getCurrentOrganisationConfig() → OrganisationConfig

**Returns**: `OrganisationConfig`



### saveRegistrationLocation(addressLevelType: AddressLevelType, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelType | AddressLevelType | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`



### saveRegistrationLocations(locationTypeUUIDs: List<String>, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationTypeUUIDs | List<String> | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`



### getUpdatedCustomRegistrationLocations(locationTypeUUIDs: List<String>, subjectType: SubjectType, organisationConfig: OrganisationConfig) → List<SubjectTypeSetting>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationTypeUUIDs | List<String> | - | - |
| subjectType | SubjectType | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `List<SubjectTypeSetting>`



### SubjectTypeSetting() → new

**Returns**: `new`



### filterSubjectTypeSettingsBasedOn(unknown: otherSubjectTypeSettings, ->: setting) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | otherSubjectTypeSettings | - | - |
| -> | setting | - | - |

**Returns**: `return`



### filterSubjectTypeSettingsBasedOn(subjectTypeSettings: List<SubjectTypeSetting>, predicate: Predicate<SubjectTypeSetting>) → List<SubjectTypeSetting>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeSettings | List<SubjectTypeSetting> | - | - |
| predicate | Predicate<SubjectTypeSetting> | - | - |

**Returns**: `List<SubjectTypeSetting>`



### isFeatureEnabled(feature: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| feature | String | - | - |

**Returns**: `Boolean`



### findAllWithFeatureEnabled(feature: String) → List<OrganisationConfig>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| feature | String | - | - |

**Returns**: `List<OrganisationConfig>`



### isCommentEnabled() → boolean

**Returns**: `boolean`



### isFeatureEnabled(unknown: "enableComments") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "enableComments" | - | - |

**Returns**: `return`



### isMessagingEnabled() → boolean

**Returns**: `boolean`



### isFeatureEnabled(unknown: OrganisationConfigSettingKey.enableMessaging.name() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | OrganisationConfigSettingKey.enableMessaging.name( | - | - |

**Returns**: `return`



### isFailOnValidationErrorEnabled() → boolean

**Returns**: `boolean`



### isFeatureEnabled(unknown: OrganisationConfigSettingKey.failOnValidationError.name() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | OrganisationConfigSettingKey.failOnValidationError.name( | - | - |

**Returns**: `return`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getExportSettings() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### saveExportSettings(unknown: name, unknown: request, unknown: false) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | request | - | - |
| unknown | false | - | - |

**Returns**: `return`



### saveExportSettings(unknown: name, unknown: request, unknown: true) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | request | - | - |
| unknown | true | - | - |

**Returns**: `return`



### OrganisationConfig() → new

**Returns**: `new`



### getOrganisationConfig() → Optional<OrganisationConfig>

**Returns**: `Optional<OrganisationConfig>`



### getExportSettings(organisationConfig: OrganisationConfig) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### OrganisationConfig() → new

**Returns**: `new`



### deleteMetadataRelatedSettings() → OrganisationConfig

**Returns**: `OrganisationConfig`



### JsonObject() → new

**Returns**: `new`



### getMetadataConfigSettingsAfterReset() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### setMetabaseSetupEnabled(organisation: Organisation, isEnabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| isEnabled | boolean | - | - |

**Returns**: `void`



### isMetabaseSetupEnabled(organisation: Organisation) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `boolean`



### getMetabaseSyncStatus(organisation: Organisation) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `String`



### setMetabaseSyncStatus(organisation: Organisation, status: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| status | String | - | - |

**Returns**: `void`



### removeVoidedAddressLevelTypeFromCustomRegistrationLocations(organisation: Organisation, voidedAddressLevelTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| voidedAddressLevelTypeUuid | String | - | - |

**Returns**: `void`


