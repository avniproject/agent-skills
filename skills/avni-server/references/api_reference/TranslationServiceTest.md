# API Reference: TranslationServiceTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/TranslationServiceTest.java`

---

## Classes

### TranslationServiceTest

**Inherits from**: (none)

#### Methods

##### setup() → void

**Returns**: `void`


##### TranslationService(unknown: translationRepository, unknown: platformTranslationRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | translationRepository | - | - |
| unknown | platformTranslationRepository | - | - |

**Returns**: `new`


##### shouldReturnMergedTranslations() → void

**Returns**: `void`


##### shouldReturnNullIfPassedTranslationIsNotInConfig() → void

**Returns**: `void`


##### shouldReturnOnlyPassedLanguageTranslation() → void

**Returns**: `void`


##### mockTranslationRepository(mockedEnglishImplementationTranslations: Translation, en: Locale) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mockedEnglishImplementationTranslations | Translation | - | - |
| en | Locale | - | - |

**Returns**: `void`


##### mockPlatformEng(mockedEnglishPlatformTranslations: PlatformTranslation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mockedEnglishPlatformTranslations | PlatformTranslation | - | - |

**Returns**: `void`


##### getEnglishImplTranslations() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### getEnglishPlatformTranslations() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### getOrganisationConfigWithLanguages(languages: List<String>) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| languages | List<String> | - | - |

**Returns**: `OrganisationConfig`


##### OrganisationConfig() → new

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### getMockedImplementationTranslations(locale: Locale, translationJson: JsonObject) → Translation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locale | Locale | - | - |
| translationJson | JsonObject | - | - |

**Returns**: `Translation`


##### Translation() → new

**Returns**: `new`


##### getMockedPlatformTranslations(locale: Locale, translationJson: JsonObject) → PlatformTranslation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locale | Locale | - | - |
| translationJson | JsonObject | - | - |

**Returns**: `PlatformTranslation`


##### PlatformTranslation() → new

**Returns**: `new`


##### mockPlatformRepository(mockedEnglishPlatformTranslations: PlatformTranslation, en: Locale) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mockedEnglishPlatformTranslations | PlatformTranslation | - | - |
| en | Locale | - | - |

**Returns**: `void`


##### getGujaratiImplTranslations() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### getGujaratiPlatformTranslations() → JsonObject

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`




## Functions

### setup() → void

**Returns**: `void`



### TranslationService(unknown: translationRepository, unknown: platformTranslationRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | translationRepository | - | - |
| unknown | platformTranslationRepository | - | - |

**Returns**: `new`



### shouldReturnMergedTranslations() → void

**Returns**: `void`



### shouldReturnNullIfPassedTranslationIsNotInConfig() → void

**Returns**: `void`



### shouldReturnOnlyPassedLanguageTranslation() → void

**Returns**: `void`



### mockTranslationRepository(mockedEnglishImplementationTranslations: Translation, en: Locale) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mockedEnglishImplementationTranslations | Translation | - | - |
| en | Locale | - | - |

**Returns**: `void`



### mockPlatformEng(mockedEnglishPlatformTranslations: PlatformTranslation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mockedEnglishPlatformTranslations | PlatformTranslation | - | - |

**Returns**: `void`



### getEnglishImplTranslations() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### getEnglishPlatformTranslations() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### getOrganisationConfigWithLanguages(languages: List<String>) → OrganisationConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| languages | List<String> | - | - |

**Returns**: `OrganisationConfig`



### OrganisationConfig() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### getMockedImplementationTranslations(locale: Locale, translationJson: JsonObject) → Translation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locale | Locale | - | - |
| translationJson | JsonObject | - | - |

**Returns**: `Translation`



### Translation() → new

**Returns**: `new`



### getMockedPlatformTranslations(locale: Locale, translationJson: JsonObject) → PlatformTranslation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locale | Locale | - | - |
| translationJson | JsonObject | - | - |

**Returns**: `PlatformTranslation`



### PlatformTranslation() → new

**Returns**: `new`



### mockPlatformRepository(mockedEnglishPlatformTranslations: PlatformTranslation, en: Locale) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mockedEnglishPlatformTranslations | PlatformTranslation | - | - |
| en | Locale | - | - |

**Returns**: `void`



### getGujaratiImplTranslations() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### getGujaratiPlatformTranslations() → JsonObject

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`


