# API Reference: TranslationController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/TranslationController.java`

---

## Functions

### TranslationController(translationRepository: TranslationRepository, formElementGroupRepository: FormElementGroupRepository, formElementRepository: FormElementRepository, conceptRepository: ConceptRepository, conceptAnswerRepository: ConceptAnswerRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository, encounterTypeRepository: EncounterTypeRepository, operationalProgramRepository: OperationalProgramRepository, programRepository: ProgramRepository, checklistDetailRepository: ChecklistDetailRepository, catchmentRepository: CatchmentRepository, locationRepository: LocationRepository, organisationConfigRepository: OrganisationConfigRepository, formRepository: FormRepository, platformTranslationRepository: PlatformTranslationRepository, addressLevelTypeRepository: AddressLevelTypeRepository, operationalSubjectTypeRepository: OperationalSubjectTypeRepository, cardRepository: CardRepository, dashboardRepository: DashboardRepository, accessControlService: AccessControlService) → Autowired

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| translationRepository | TranslationRepository | - | - |
| formElementGroupRepository | FormElementGroupRepository | - | - |
| formElementRepository | FormElementRepository | - | - |
| conceptRepository | ConceptRepository | - | - |
| conceptAnswerRepository | ConceptAnswerRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |
| programRepository | ProgramRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| catchmentRepository | CatchmentRepository | - | - |
| locationRepository | LocationRepository | - | - |
| organisationConfigRepository | OrganisationConfigRepository | - | - |
| formRepository | FormRepository | - | - |
| platformTranslationRepository | PlatformTranslationRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| operationalSubjectTypeRepository | OperationalSubjectTypeRepository | - | - |
| cardRepository | CardRepository | - | - |
| dashboardRepository | DashboardRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `Autowired`



### Translation() → new

**Returns**: `new`



### generateTranslations(organisationConfig: OrganisationConfig, translations: List<Translation>, platform: Platform, valueForEmptyKey: String, organisation: Organisation, includeLocations: boolean) → List<TranslationContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfig | OrganisationConfig | - | - |
| translations | List<Translation> | - | - |
| platform | Platform | - | - |
| valueForEmptyKey | String | - | - |
| organisation | Organisation | - | - |
| includeLocations | boolean | - | - |

**Returns**: `List<TranslationContract>`



### TranslationContract() → new

**Returns**: `new`



### JsonObject(unknown: generateTranslationsWithValue(valueForEmptyKey, unknown: includeLocations) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | generateTranslationsWithValue(valueForEmptyKey | - | - |
| unknown | includeLocations | - | - |

**Returns**: `new`



### generateTranslationsWithValue(valueForEmptyKey: String, includeLocations: boolean) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| valueForEmptyKey | String | - | - |
| includeLocations | boolean | - | - |

**Returns**: `Map<String, Object>`



### generatePlatformTranslations(platform: Platform, language: Locale, valueForEmptyKey: String) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| platform | Platform | - | - |
| language | Locale | - | - |
| valueForEmptyKey | String | - | - |

**Returns**: `Map<String, Object>`



### JsonObject(unknown: emptyEnglishTranslation) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | emptyEnglishTranslation | - | - |

**Returns**: `new`



### addRegistrationAndEnrolmentStrings() → Map<String, String>

**Returns**: `Map<String, String>`


