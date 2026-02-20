# API Reference: TranslationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/TranslationService.java`

---

## Classes

### TranslationService

**Inherits from**: NonScopeAwareService

#### Methods

##### TranslationService(translationRepository: TranslationRepository, platformTranslationRepository: PlatformTranslationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| translationRepository | TranslationRepository | - | - |
| platformTranslationRepository | PlatformTranslationRepository | - | - |

**Returns**: `public`


##### uploadTranslations(translationContract: TranslationContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| translationContract | TranslationContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### Translation() → new

**Returns**: `new`


##### getSingleLanguageTranslation(unknown: languages, unknown: locale, unknown: organisationConfig) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | languages | - | - |
| unknown | locale | - | - |
| unknown | organisationConfig | - | - |

**Returns**: `return`


##### getMergedTranslations(unknown: languages, unknown: organisationConfig) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | languages | - | - |
| unknown | organisationConfig | - | - |

**Returns**: `return`


##### getMergedTranslations(unknown: allLanguages, unknown: organisationConfig) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | allLanguages | - | - |
| unknown | organisationConfig | - | - |

**Returns**: `return`


##### JsonObject() → new

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`




## Functions

### TranslationService(translationRepository: TranslationRepository, platformTranslationRepository: PlatformTranslationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| translationRepository | TranslationRepository | - | - |
| platformTranslationRepository | PlatformTranslationRepository | - | - |

**Returns**: `public`



### uploadTranslations(translationContract: TranslationContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| translationContract | TranslationContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### Translation() → new

**Returns**: `new`



### getSingleLanguageTranslation(unknown: languages, unknown: locale, unknown: organisationConfig) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | languages | - | - |
| unknown | locale | - | - |
| unknown | organisationConfig | - | - |

**Returns**: `return`



### getMergedTranslations(unknown: languages, unknown: organisationConfig) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | languages | - | - |
| unknown | organisationConfig | - | - |

**Returns**: `return`



### getMergedTranslations(unknown: allLanguages, unknown: organisationConfig) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | allLanguages | - | - |
| unknown | organisationConfig | - | - |

**Returns**: `return`



### JsonObject() → new

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


