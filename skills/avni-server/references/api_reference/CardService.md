# API Reference: CardService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/CardService.java`

---

## Classes

### CardService

**Inherits from**: NonScopeAwareService

#### Methods

##### CardService(cardRepository: CardRepository, standardReportCardTypeRepository: StandardReportCardTypeRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cardRepository | CardRepository | - | - |
| standardReportCardTypeRepository | StandardReportCardTypeRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |

**Returns**: `public`


##### saveCard(reportCardRequest: ReportCardWebRequest) → ReportCard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardRequest | ReportCardWebRequest | - | - |

**Returns**: `ReportCard`


##### ReportCard() → new

**Returns**: `new`


##### uploadCard(reportCardRequest: ReportCardBundleRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardRequest | ReportCardBundleRequest | - | - |

**Returns**: `void`


##### ReportCard() → new

**Returns**: `new`


##### editCard(request: ReportCardWebRequest, cardId: Long) → ReportCard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ReportCardWebRequest | - | - |
| cardId | Long | - | - |

**Returns**: `ReportCard`


##### deleteCard(id: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `void`


##### getAll() → List<ReportCard>

**Returns**: `List<ReportCard>`


##### buildStandardReportCardType(reportCardWebRequest: ReportCardWebRequest, reportCard: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardWebRequest | ReportCardWebRequest | - | - |
| reportCard | ReportCard | - | - |

**Returns**: `void`


##### BadRequestError(with: String.format("StandardReportCardType, unknown: standardReportCardTypeId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("StandardReportCardType | - | - |
| unknown | standardReportCardTypeId | - | - |

**Returns**: `new`


##### buildStandardReportCardType(reportCardBundleRequest: ReportCardBundleRequest, reportCard: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardBundleRequest | ReportCardBundleRequest | - | - |
| reportCard | ReportCard | - | - |

**Returns**: `void`


##### BadRequestError(with: String.format("StandardReportCardType, unknown: standardReportCardTypeUUID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("StandardReportCardType | - | - |
| unknown | standardReportCardTypeUUID | - | - |

**Returns**: `new`


##### buildStandardReportCardInputs(type: StandardReportCardType, subjectTypes: List<String>, programs: List<String>, encounterTypes: List<String>, recentDuration: ValueUnit, card: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | StandardReportCardType | - | - |
| subjectTypes | List<String> | - | - |
| programs | List<String> | - | - |
| encounterTypes | List<String> | - | - |
| recentDuration | ValueUnit | - | - |
| card | ReportCard | - | - |

**Returns**: `void`


##### buildStandardReportCardInputRecentDuration(type: StandardReportCardType, recentDuration: ValueUnit, card: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | StandardReportCardType | - | - |
| recentDuration | ValueUnit | - | - |
| card | ReportCard | - | - |

**Returns**: `void`


##### BadRequestError(Duration: "Recent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Duration | "Recent | - | - |

**Returns**: `new`


##### buildCard(reportCardRequest: ReportCardContract, card: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardRequest | ReportCardContract | - | - |
| card | ReportCard | - | - |

**Returns**: `void`


##### BadRequestError(ReportCard: String.format("Nested, unknown: ReportCard.INT_CONSTANT_DEFAULT_COUNT_OF_CARDS, unknown: ReportCard.INT_CONSTANT_MAX_COUNT_OF_CARDS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ReportCard | String.format("Nested | - | - |
| unknown | ReportCard.INT_CONSTANT_DEFAULT_COUNT_OF_CARDS | - | - |
| unknown | ReportCard.INT_CONSTANT_MAX_COUNT_OF_CARDS | - | - |

**Returns**: `new`


##### buildDurationForRecentTypeCards(recentDurationString: String) → ValueUnit

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| recentDurationString | String | - | - |

**Returns**: `ValueUnit`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### assertNewNameIsUnique(newName: String, oldName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newName | String | - | - |
| oldName | String | - | - |

**Returns**: `void`


##### assertNoExistingCardWithName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### BadRequestError(card: String.format("Report) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| card | String.format("Report | - | - |

**Returns**: `new`


##### getStandardReportCardInputSubjectTypes(card: ReportCard) → List<SubjectType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| card | ReportCard | - | - |

**Returns**: `List<SubjectType>`


##### getStandardReportCardInputPrograms(card: ReportCard) → List<Program>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| card | ReportCard | - | - |

**Returns**: `List<Program>`


##### getStandardReportCardInputEncounterTypes(card: ReportCard) → List<EncounterType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| card | ReportCard | - | - |

**Returns**: `List<EncounterType>`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### saveCards(cardContracts: ReportCardBundleRequest[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cardContracts | ReportCardBundleRequest[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: cardContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cardContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### createDefaultDashboardCards(organisation: Organisation) → Map<StandardReportCardTypeType, ReportCard>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Map<StandardReportCardTypeType, ReportCard>`


##### ReportCard() → new

**Returns**: `new`




## Functions

### CardService(cardRepository: CardRepository, standardReportCardTypeRepository: StandardReportCardTypeRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cardRepository | CardRepository | - | - |
| standardReportCardTypeRepository | StandardReportCardTypeRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |

**Returns**: `public`



### saveCard(reportCardRequest: ReportCardWebRequest) → ReportCard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardRequest | ReportCardWebRequest | - | - |

**Returns**: `ReportCard`



### ReportCard() → new

**Returns**: `new`



### uploadCard(reportCardRequest: ReportCardBundleRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardRequest | ReportCardBundleRequest | - | - |

**Returns**: `void`



### ReportCard() → new

**Returns**: `new`



### editCard(request: ReportCardWebRequest, cardId: Long) → ReportCard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ReportCardWebRequest | - | - |
| cardId | Long | - | - |

**Returns**: `ReportCard`



### deleteCard(id: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `void`



### getAll() → List<ReportCard>

**Returns**: `List<ReportCard>`



### buildStandardReportCardType(reportCardWebRequest: ReportCardWebRequest, reportCard: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardWebRequest | ReportCardWebRequest | - | - |
| reportCard | ReportCard | - | - |

**Returns**: `void`



### BadRequestError(with: String.format("StandardReportCardType, unknown: standardReportCardTypeId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("StandardReportCardType | - | - |
| unknown | standardReportCardTypeId | - | - |

**Returns**: `new`



### buildStandardReportCardType(reportCardBundleRequest: ReportCardBundleRequest, reportCard: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardBundleRequest | ReportCardBundleRequest | - | - |
| reportCard | ReportCard | - | - |

**Returns**: `void`



### BadRequestError(with: String.format("StandardReportCardType, unknown: standardReportCardTypeUUID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("StandardReportCardType | - | - |
| unknown | standardReportCardTypeUUID | - | - |

**Returns**: `new`



### buildStandardReportCardInputs(type: StandardReportCardType, subjectTypes: List<String>, programs: List<String>, encounterTypes: List<String>, recentDuration: ValueUnit, card: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | StandardReportCardType | - | - |
| subjectTypes | List<String> | - | - |
| programs | List<String> | - | - |
| encounterTypes | List<String> | - | - |
| recentDuration | ValueUnit | - | - |
| card | ReportCard | - | - |

**Returns**: `void`



### buildStandardReportCardInputRecentDuration(type: StandardReportCardType, recentDuration: ValueUnit, card: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | StandardReportCardType | - | - |
| recentDuration | ValueUnit | - | - |
| card | ReportCard | - | - |

**Returns**: `void`



### BadRequestError(Duration: "Recent) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Duration | "Recent | - | - |

**Returns**: `new`



### buildCard(reportCardRequest: ReportCardContract, card: ReportCard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportCardRequest | ReportCardContract | - | - |
| card | ReportCard | - | - |

**Returns**: `void`



### BadRequestError(ReportCard: String.format("Nested, unknown: ReportCard.INT_CONSTANT_DEFAULT_COUNT_OF_CARDS, unknown: ReportCard.INT_CONSTANT_MAX_COUNT_OF_CARDS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ReportCard | String.format("Nested | - | - |
| unknown | ReportCard.INT_CONSTANT_DEFAULT_COUNT_OF_CARDS | - | - |
| unknown | ReportCard.INT_CONSTANT_MAX_COUNT_OF_CARDS | - | - |

**Returns**: `new`



### buildDurationForRecentTypeCards(recentDurationString: String) → ValueUnit

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| recentDurationString | String | - | - |

**Returns**: `ValueUnit`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### assertNewNameIsUnique(newName: String, oldName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newName | String | - | - |
| oldName | String | - | - |

**Returns**: `void`



### assertNoExistingCardWithName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### BadRequestError(card: String.format("Report) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| card | String.format("Report | - | - |

**Returns**: `new`



### getStandardReportCardInputSubjectTypes(card: ReportCard) → List<SubjectType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| card | ReportCard | - | - |

**Returns**: `List<SubjectType>`



### getStandardReportCardInputPrograms(card: ReportCard) → List<Program>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| card | ReportCard | - | - |

**Returns**: `List<Program>`



### getStandardReportCardInputEncounterTypes(card: ReportCard) → List<EncounterType>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| card | ReportCard | - | - |

**Returns**: `List<EncounterType>`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### saveCards(cardContracts: ReportCardBundleRequest[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cardContracts | ReportCardBundleRequest[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: cardContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cardContract | - | - |
| unknown | e | - | - |

**Returns**: `new`



### createDefaultDashboardCards(organisation: Organisation) → Map<StandardReportCardTypeType, ReportCard>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Map<StandardReportCardTypeType, ReportCard>`



### ReportCard() → new

**Returns**: `new`


