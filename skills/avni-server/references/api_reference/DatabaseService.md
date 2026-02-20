# API Reference: DatabaseService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/metabase/DatabaseService.java`

---

## Classes

### DatabaseService

**Inherits from**: IQuestionCreationService

#### Methods

##### DatabaseService(databaseRepository: MetabaseDatabaseRepository, metabaseService: MetabaseService, collectionRepository: CollectionRepository, questionRepository: QuestionRepository, metabaseDashboardRepository: MetabaseDashboardRepository, addressLevelTypeRepository: AddressLevelTypeRepository, organisationService: OrganisationService, tableMetaDataRepository: TableMetaDataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| databaseRepository | MetabaseDatabaseRepository | - | - |
| metabaseService | MetabaseService | - | - |
| collectionRepository | CollectionRepository | - | - |
| questionRepository | QuestionRepository | - | - |
| metabaseDashboardRepository | MetabaseDashboardRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| organisationService | OrganisationService | - | - |
| tableMetaDataRepository | TableMetaDataRepository | - | - |

**Returns**: `public`


##### getOrgCollection() → CollectionInfoResponse

**Returns**: `CollectionInfoResponse`


##### filterOutExistingQuestions(entityNames: List<String>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityNames | List<String> | - | - |

**Returns**: `List<String>`


##### isQuestionMissing(questionName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionName | String | - | - |

**Returns**: `boolean`


##### getCardIdByQuestionName(questionName: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionName | String | - | - |

**Returns**: `int`


##### RuntimeException(not: "Question) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Question | - | - |

**Returns**: `new`


##### createQuestionForTable(tableDetails: TableDetails, addressTableDetails: TableDetails, addressFieldDetails: FieldDetails, tableFieldDetails: FieldDetails) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableDetails | TableDetails | - | - |
| addressTableDetails | TableDetails | - | - |
| addressFieldDetails | FieldDetails | - | - |
| tableFieldDetails | FieldDetails | - | - |

**Returns**: `void`


##### createQuestionForTable(tableName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | String | - | - |

**Returns**: `void`


##### TableDetails(unknown: tableName, unknown: schemaName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tableName | - | - |
| unknown | schemaName | - | - |

**Returns**: `new`


##### createQuestionsForEntities(entityNames: List<String>, addressFieldDetails: FieldDetails, entityFieldDetails: FieldDetails) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityNames | List<String> | - | - |
| addressFieldDetails | FieldDetails | - | - |
| entityFieldDetails | FieldDetails | - | - |

**Returns**: `void`


##### TableDetails(unknown: ADDRESS_TABLE, unknown: schemaName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ADDRESS_TABLE | - | - |
| unknown | schemaName | - | - |

**Returns**: `new`


##### TableDetails(unknown: entityName, unknown: schemaName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityName | - | - |
| unknown | schemaName | - | - |

**Returns**: `new`


##### createQuestionsForSubjectTypes(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### FieldDetails(unknown: ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ID | - | - |

**Returns**: `new`


##### FieldDetails(unknown: ADDRESS_ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ADDRESS_ID | - | - |

**Returns**: `new`


##### createQuestionsForProgramsAndEncounters(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### FieldDetails(unknown: ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ID | - | - |

**Returns**: `new`


##### FieldDetails(unknown: ADDRESS_ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ADDRESS_ID | - | - |

**Returns**: `new`


##### createQuestionsForMiscSingleTables() → void

**Returns**: `void`


##### createQuestionsForViews() → void

**Returns**: `void`


##### createCustomQuestions() → void

**Returns**: `void`


##### FilterCondition(unknown: ConditionType.IS_NULL, unknown: field.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ConditionType.IS_NULL | - | - |
| unknown | field.getId( | - | - |

**Returns**: `new`


##### updateGlobalDashboardWithCustomQuestions() → void

**Returns**: `void`


##### Dashcard(unknown: -1, unknown: getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -1 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName( | - | - |

**Returns**: `new`


##### Dashcard(unknown: -2, unknown: getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -2 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName( | - | - |

**Returns**: `new`


##### Dashcard(unknown: -3, unknown: getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -3 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName( | - | - |

**Returns**: `new`


##### Dashcard(unknown: -4, unknown: getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -4 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName( | - | - |

**Returns**: `new`


##### Dashcard(unknown: -5, unknown: getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -5 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName( | - | - |

**Returns**: `new`


##### Tabs(unknown: -1, unknown: "Activity") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -1 | - | - |
| unknown | "Activity" | - | - |

**Returns**: `new`


##### DashboardUpdateRequest(unknown: dashCards, unknown: createParametersForDashboard() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dashCards | - | - |
| unknown | createParametersForDashboard( | - | - |

**Returns**: `new`


##### getSchemaName() → String

**Returns**: `String`


##### createDashCardParameterMappingForFirstDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`


##### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(fieldId: new, unknown: FieldType.DATE.getTypeName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(fieldId | new | - | - |
| unknown | FieldType.DATE.getTypeName( | - | - |

**Returns**: `new`


##### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`


##### createDashCardParameterMappingForSecondDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`


##### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(fieldId: new, unknown: FieldType.DATE_TIME_WITH_LOCAL_TZ.getTypeName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(fieldId | new | - | - |
| unknown | FieldType.DATE_TIME_WITH_LOCAL_TZ.getTypeName( | - | - |

**Returns**: `new`


##### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`


##### createDashCardParameterMappingForThirdDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`


##### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`


##### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`


##### createDashCardParameterMappingForFourthDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`


##### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`


##### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`


##### createDashCardParameterMappingForFifthDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`


##### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`


##### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName( | - | - |

**Returns**: `new`


##### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`


##### getFieldId(database: Database, schemaName: String, viewName: String, fieldName: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| schemaName | String | - | - |
| viewName | String | - | - |
| fieldName | String | - | - |

**Returns**: `int`


##### createParametersForDashboard() → List<Parameters>

**Returns**: `List<Parameters>`


##### Parameters(Range": "Date, unknown: "all_options", unknown: "dateTimeId", unknown: "date/all-options", unknown: "date") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Range" | "Date | - | - |
| unknown | "all_options" | - | - |
| unknown | "dateTimeId" | - | - |
| unknown | "date/all-options" | - | - |
| unknown | "date" | - | - |

**Returns**: `new`


##### Parameters(unknown: addressLevelTypeName, unknown: addressLevelTypeName, unknown: addressLevelTypeName, unknown: "string/starts-with", unknown: "string", unknown: "search") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | addressLevelTypeName | - | - |
| unknown | addressLevelTypeName | - | - |
| unknown | "string/starts-with" | - | - |
| unknown | "string" | - | - |
| unknown | "search" | - | - |

**Returns**: `new`


##### addCollectionItems() → void

**Returns**: `void`




## Functions

### DatabaseService(databaseRepository: MetabaseDatabaseRepository, metabaseService: MetabaseService, collectionRepository: CollectionRepository, questionRepository: QuestionRepository, metabaseDashboardRepository: MetabaseDashboardRepository, addressLevelTypeRepository: AddressLevelTypeRepository, organisationService: OrganisationService, tableMetaDataRepository: TableMetaDataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| databaseRepository | MetabaseDatabaseRepository | - | - |
| metabaseService | MetabaseService | - | - |
| collectionRepository | CollectionRepository | - | - |
| questionRepository | QuestionRepository | - | - |
| metabaseDashboardRepository | MetabaseDashboardRepository | - | - |
| addressLevelTypeRepository | AddressLevelTypeRepository | - | - |
| organisationService | OrganisationService | - | - |
| tableMetaDataRepository | TableMetaDataRepository | - | - |

**Returns**: `public`



### getOrgCollection() → CollectionInfoResponse

**Returns**: `CollectionInfoResponse`



### filterOutExistingQuestions(entityNames: List<String>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityNames | List<String> | - | - |

**Returns**: `List<String>`



### isQuestionMissing(questionName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionName | String | - | - |

**Returns**: `boolean`



### getCardIdByQuestionName(questionName: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionName | String | - | - |

**Returns**: `int`



### RuntimeException(not: "Question) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Question | - | - |

**Returns**: `new`



### createQuestionForTable(tableDetails: TableDetails, addressTableDetails: TableDetails, addressFieldDetails: FieldDetails, tableFieldDetails: FieldDetails) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableDetails | TableDetails | - | - |
| addressTableDetails | TableDetails | - | - |
| addressFieldDetails | FieldDetails | - | - |
| tableFieldDetails | FieldDetails | - | - |

**Returns**: `void`



### createQuestionForTable(tableName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | String | - | - |

**Returns**: `void`



### TableDetails(unknown: tableName, unknown: schemaName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tableName | - | - |
| unknown | schemaName | - | - |

**Returns**: `new`



### createQuestionsForEntities(entityNames: List<String>, addressFieldDetails: FieldDetails, entityFieldDetails: FieldDetails) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityNames | List<String> | - | - |
| addressFieldDetails | FieldDetails | - | - |
| entityFieldDetails | FieldDetails | - | - |

**Returns**: `void`



### TableDetails(unknown: ADDRESS_TABLE, unknown: schemaName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ADDRESS_TABLE | - | - |
| unknown | schemaName | - | - |

**Returns**: `new`



### TableDetails(unknown: entityName, unknown: schemaName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityName | - | - |
| unknown | schemaName | - | - |

**Returns**: `new`



### createQuestionsForSubjectTypes(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### FieldDetails(unknown: ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ID | - | - |

**Returns**: `new`



### FieldDetails(unknown: ADDRESS_ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ADDRESS_ID | - | - |

**Returns**: `new`



### createQuestionsForProgramsAndEncounters(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### FieldDetails(unknown: ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ID | - | - |

**Returns**: `new`



### FieldDetails(unknown: ADDRESS_ID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ADDRESS_ID | - | - |

**Returns**: `new`



### createQuestionsForMiscSingleTables() → void

**Returns**: `void`



### createQuestionsForViews() → void

**Returns**: `void`



### createCustomQuestions() → void

**Returns**: `void`



### FilterCondition(unknown: ConditionType.IS_NULL, unknown: field.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ConditionType.IS_NULL | - | - |
| unknown | field.getId( | - | - |

**Returns**: `new`



### updateGlobalDashboardWithCustomQuestions() → void

**Returns**: `void`



### Dashcard(unknown: -1, unknown: getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -1 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName( | - | - |

**Returns**: `new`



### Dashcard(unknown: -2, unknown: getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -2 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName( | - | - |

**Returns**: `new`



### Dashcard(unknown: -3, unknown: getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -3 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName( | - | - |

**Returns**: `new`



### Dashcard(unknown: -4, unknown: getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -4 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName( | - | - |

**Returns**: `new`



### Dashcard(unknown: -5, unknown: getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -5 | - | - |
| unknown | getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName( | - | - |

**Returns**: `new`



### Tabs(unknown: -1, unknown: "Activity") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | -1 | - | - |
| unknown | "Activity" | - | - |

**Returns**: `new`



### DashboardUpdateRequest(unknown: dashCards, unknown: createParametersForDashboard() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dashCards | - | - |
| unknown | createParametersForDashboard( | - | - |

**Returns**: `new`



### getSchemaName() → String

**Returns**: `String`



### createDashCardParameterMappingForFirstDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`



### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(fieldId: new, unknown: FieldType.DATE.getTypeName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(fieldId | new | - | - |
| unknown | FieldType.DATE.getTypeName( | - | - |

**Returns**: `new`



### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonVoidedIndividual.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`



### createDashCardParameterMappingForSecondDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`



### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(fieldId: new, unknown: FieldType.DATE_TIME_WITH_LOCAL_TZ.getTypeName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(fieldId | new | - | - |
| unknown | FieldType.DATE_TIME_WITH_LOCAL_TZ.getTypeName( | - | - |

**Returns**: `new`



### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.NonExitedNonVoidedProgram.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`



### createDashCardParameterMappingForThirdDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`



### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`



### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.DueVisits.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`



### createDashCardParameterMappingForFourthDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`



### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`



### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.CompletedVisits.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`



### createDashCardParameterMappingForFifthDashCard(database: Database) → List<ParameterMapping>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |

**Returns**: `List<ParameterMapping>`



### ParameterMapping(unknown: "dateTimeId", unknown: getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "dateTimeId" | - | - |
| unknown | getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`



### ParameterMapping(unknown: addressLevelTypeName, unknown: getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | getCardIdByQuestionName(QuestionName.OverDueVisits.getQuestionName( | - | - |

**Returns**: `new`



### Target(unknown: MetabaseTargetType.DIMENSION, FieldTarget(getFieldId(database: new, unknown: getSchemaName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MetabaseTargetType.DIMENSION | - | - |
| FieldTarget(getFieldId(database | new | - | - |
| unknown | getSchemaName( | - | - |

**Returns**: `new`



### getFieldId(database: Database, schemaName: String, viewName: String, fieldName: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| schemaName | String | - | - |
| viewName | String | - | - |
| fieldName | String | - | - |

**Returns**: `int`



### createParametersForDashboard() → List<Parameters>

**Returns**: `List<Parameters>`



### Parameters(Range": "Date, unknown: "all_options", unknown: "dateTimeId", unknown: "date/all-options", unknown: "date") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Range" | "Date | - | - |
| unknown | "all_options" | - | - |
| unknown | "dateTimeId" | - | - |
| unknown | "date/all-options" | - | - |
| unknown | "date" | - | - |

**Returns**: `new`



### Parameters(unknown: addressLevelTypeName, unknown: addressLevelTypeName, unknown: addressLevelTypeName, unknown: "string/starts-with", unknown: "string", unknown: "search") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypeName | - | - |
| unknown | addressLevelTypeName | - | - |
| unknown | addressLevelTypeName | - | - |
| unknown | "string/starts-with" | - | - |
| unknown | "string" | - | - |
| unknown | "search" | - | - |

**Returns**: `new`



### addCollectionItems() → void

**Returns**: `void`


