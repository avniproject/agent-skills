# API Reference: OrganisationConfig.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/OrganisationConfig.java`

---

## Classes

### OrganisationConfig

**Inherits from**: OrganisationAwareEntity

#### Methods

##### getSettings() → JsonObject

**Returns**: `JsonObject`


##### getSettingsObject() → Settings

**Returns**: `Settings`


##### Settings(unknown: settings) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | settings | - | - |

**Returns**: `new`


##### setSettings(settings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `void`


##### getWorklistUpdationRule() → String

**Returns**: `String`


##### setWorklistUpdationRule(worklistUpdationRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| worklistUpdationRule | String | - | - |

**Returns**: `void`


##### getConfigValue(organisationConfigSettingKey: OrganisationConfigSettingKey) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigSettingKey | OrganisationConfigSettingKey | - | - |

**Returns**: `Object`


##### getConfigValueOptional(organisationConfigSettingKey: OrganisationConfigSettingKey) → Optional<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigSettingKey | OrganisationConfigSettingKey | - | - |

**Returns**: `Optional<Object>`


##### getBooleanConfigValue(organisationConfigSettingKey: OrganisationConfigSettingKey) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigSettingKey | OrganisationConfigSettingKey | - | - |

**Returns**: `boolean`


##### getExportSettings() → JsonObject

**Returns**: `JsonObject`


##### setExportSettings(exportSettings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportSettings | JsonObject | - | - |

**Returns**: `void`


##### isFeatureEnabled(feature: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| feature | String | - | - |

**Returns**: `Boolean`


##### getCustomRegistrationLocations() → List<SubjectTypeSetting>

**Returns**: `List<SubjectTypeSetting>`


##### getRegistrationSetting(subjectType: SubjectType) → SubjectTypeSetting

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectTypeSetting`


##### Settings(settings: JsonObject) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `public`


##### getExtensions() → List<Extension>

**Returns**: `List<Extension>`


##### Extension(unknown: (Map<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Map<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`


##### useKeycloakAsIdp() → boolean

**Returns**: `boolean`


##### getSupportedLanguages() → Set<String>

**Returns**: `Set<String>`


##### Extension(unknown: Map<String, map: Object>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | Object> | - | - |

**Returns**: `public`


##### getLabel() → String

**Returns**: `String`


##### getStringValue(unknown: "label") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "label" | - | - |

**Returns**: `return`


##### getFileName() → String

**Returns**: `String`


##### getStringValue(unknown: "fileName") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "fileName" | - | - |

**Returns**: `return`


##### getFilePath() → String

**Returns**: `String`


##### getExtensionFilePath(unknown: this.getFileName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.getFileName( | - | - |

**Returns**: `return`


##### getExtensionFilePath(fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `String`


##### isMetabaseSetupEnabled() → boolean

**Returns**: `boolean`


##### setMetabaseSetupEnabled(setupEnabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| setupEnabled | boolean | - | - |

**Returns**: `void`


##### getMetabaseSyncStatus() → String

**Returns**: `String`


##### setMetabaseSyncStatus(status: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | String | - | - |

**Returns**: `void`




### Settings

**Inherits from**: (none)

#### Methods

##### Settings(settings: JsonObject) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `public`


##### getExtensions() → List<Extension>

**Returns**: `List<Extension>`


##### Extension(unknown: (Map<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Map<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`


##### useKeycloakAsIdp() → boolean

**Returns**: `boolean`


##### getSupportedLanguages() → Set<String>

**Returns**: `Set<String>`




### Extension

**Inherits from**: BaseJsonObject

#### Methods

##### Extension(unknown: Map<String, map: Object>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | Object> | - | - |

**Returns**: `public`


##### getLabel() → String

**Returns**: `String`


##### getStringValue(unknown: "label") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "label" | - | - |

**Returns**: `return`


##### getFileName() → String

**Returns**: `String`


##### getStringValue(unknown: "fileName") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "fileName" | - | - |

**Returns**: `return`


##### getFilePath() → String

**Returns**: `String`


##### getExtensionFilePath(unknown: this.getFileName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.getFileName( | - | - |

**Returns**: `return`


##### getExtensionFilePath(fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `String`




## Functions

### getSettings() → JsonObject

**Returns**: `JsonObject`



### getSettingsObject() → Settings

**Returns**: `Settings`



### Settings(unknown: settings) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | settings | - | - |

**Returns**: `new`



### setSettings(settings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `void`



### getWorklistUpdationRule() → String

**Returns**: `String`



### setWorklistUpdationRule(worklistUpdationRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| worklistUpdationRule | String | - | - |

**Returns**: `void`



### getConfigValue(organisationConfigSettingKey: OrganisationConfigSettingKey) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigSettingKey | OrganisationConfigSettingKey | - | - |

**Returns**: `Object`



### getConfigValueOptional(organisationConfigSettingKey: OrganisationConfigSettingKey) → Optional<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigSettingKey | OrganisationConfigSettingKey | - | - |

**Returns**: `Optional<Object>`



### getBooleanConfigValue(organisationConfigSettingKey: OrganisationConfigSettingKey) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigSettingKey | OrganisationConfigSettingKey | - | - |

**Returns**: `boolean`



### getExportSettings() → JsonObject

**Returns**: `JsonObject`



### setExportSettings(exportSettings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportSettings | JsonObject | - | - |

**Returns**: `void`



### isFeatureEnabled(feature: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| feature | String | - | - |

**Returns**: `Boolean`



### getCustomRegistrationLocations() → List<SubjectTypeSetting>

**Returns**: `List<SubjectTypeSetting>`



### getRegistrationSetting(subjectType: SubjectType) → SubjectTypeSetting

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectTypeSetting`



### Settings(settings: JsonObject) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `public`



### getExtensions() → List<Extension>

**Returns**: `List<Extension>`



### Extension(unknown: (Map<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Map<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`



### useKeycloakAsIdp() → boolean

**Returns**: `boolean`



### getSupportedLanguages() → Set<String>

**Returns**: `Set<String>`



### Extension(unknown: Map<String, map: Object>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | Object> | - | - |

**Returns**: `public`



### getLabel() → String

**Returns**: `String`



### getStringValue(unknown: "label") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "label" | - | - |

**Returns**: `return`



### getFileName() → String

**Returns**: `String`



### getStringValue(unknown: "fileName") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "fileName" | - | - |

**Returns**: `return`



### getFilePath() → String

**Returns**: `String`



### getExtensionFilePath(unknown: this.getFileName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.getFileName( | - | - |

**Returns**: `return`



### getExtensionFilePath(fileName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |

**Returns**: `String`



### isMetabaseSetupEnabled() → boolean

**Returns**: `boolean`



### setMetabaseSetupEnabled(setupEnabled: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| setupEnabled | boolean | - | - |

**Returns**: `void`



### getMetabaseSyncStatus() → String

**Returns**: `String`



### setMetabaseSyncStatus(status: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | String | - | - |

**Returns**: `void`


