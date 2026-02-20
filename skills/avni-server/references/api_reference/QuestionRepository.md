# API Reference: QuestionRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/metabase/QuestionRepository.java`

---

## Classes

### QuestionRepository

**Inherits from**: MetabaseConnector

#### Methods

##### QuestionRepository(restTemplateBuilder: RestTemplateBuilder, databaseRepository: MetabaseDatabaseRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |
| databaseRepository | MetabaseDatabaseRepository | - | - |

**Returns**: `public`


##### createCustomQuestionOfVisualization(database: Database, question: QuestionName, visualizationType: VisualizationType, additionalFilterConditions: List<FilterCondition>, withoutFilters: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| question | QuestionName | - | - |
| visualizationType | VisualizationType | - | - |
| additionalFilterConditions | List<FilterCondition> | - | - |
| withoutFilters | boolean | - | - |

**Returns**: `void`


##### QuestionConfig() → new

**Returns**: `new`


##### getFilterConditions(additionalFilterConditions: List<FilterCondition>, database: Database, question: QuestionName) → List<FilterCondition>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| additionalFilterConditions | List<FilterCondition> | - | - |
| database | Database | - | - |
| question | QuestionName | - | - |

**Returns**: `List<FilterCondition>`


##### FilterCondition(unknown: ConditionType.EQUAL, unknown: field.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ConditionType.EQUAL | - | - |
| unknown | field.getId( | - | - |

**Returns**: `new`


##### postQuestion(questionName: String, query: MetabaseQuery, config: QuestionConfig, collectionId: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionName | String | - | - |
| query | MetabaseQuery | - | - |
| config | QuestionConfig | - | - |
| collectionId | int | - | - |

**Returns**: `void`


##### MetabaseRequestBody(unknown: questionName, unknown: query, unknown: config.getVisualizationType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | questionName | - | - |
| unknown | query | - | - |
| unknown | config.getVisualizationType( | - | - |

**Returns**: `new`


##### createQuestionForTable(database: Database, tableDetails: TableDetails, addressTableDetails: TableDetails, originField: FieldDetails, destinationField: FieldDetails, fieldsToShow: List<FieldDetails>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| tableDetails | TableDetails | - | - |
| addressTableDetails | TableDetails | - | - |
| originField | FieldDetails | - | - |
| destinationField | FieldDetails | - | - |
| fieldsToShow | List<FieldDetails> | - | - |

**Returns**: `void`


##### MetabaseQueryBuilder(unknown: database, unknown: joinsArray) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database | - | - |
| unknown | joinsArray | - | - |

**Returns**: `new`


##### MetabaseRequestBody(unknown: tableDetails.getDisplayName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tableDetails.getDisplayName( | - | - |

**Returns**: `new`


##### createQuestionForASingleTable(database: Database, tableDetails: TableDetails) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| tableDetails | TableDetails | - | - |

**Returns**: `void`


##### MetabaseQueryBuilder(unknown: database, unknown: ObjectMapperSingleton.getObjectMapper() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database | - | - |
| unknown | ObjectMapperSingleton.getObjectMapper( | - | - |

**Returns**: `new`


##### MetabaseRequestBody(unknown: tableDetails.getDisplayName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tableDetails.getDisplayName( | - | - |

**Returns**: `new`


##### createAdvancedQuery(primaryTableName: String, config: QuestionConfig, database: Database) → MetabaseQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| primaryTableName | String | - | - |
| config | QuestionConfig | - | - |
| database | Database | - | - |

**Returns**: `MetabaseQuery`


##### TableDetails(unknown: primaryTableName, unknown: schemaName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | primaryTableName | - | - |
| unknown | schemaName | - | - |

**Returns**: `new`


##### FieldDetails(unknown: config.getBreakoutField() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | config.getBreakoutField( | - | - |

**Returns**: `new`


##### MetabaseQueryBuilder(unknown: database, unknown: ObjectMapperSingleton.getObjectMapper() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database | - | - |
| unknown | ObjectMapperSingleton.getObjectMapper( | - | - |

**Returns**: `new`




## Functions

### QuestionRepository(restTemplateBuilder: RestTemplateBuilder, databaseRepository: MetabaseDatabaseRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |
| databaseRepository | MetabaseDatabaseRepository | - | - |

**Returns**: `public`



### createCustomQuestionOfVisualization(database: Database, question: QuestionName, visualizationType: VisualizationType, additionalFilterConditions: List<FilterCondition>, withoutFilters: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| question | QuestionName | - | - |
| visualizationType | VisualizationType | - | - |
| additionalFilterConditions | List<FilterCondition> | - | - |
| withoutFilters | boolean | - | - |

**Returns**: `void`



### QuestionConfig() → new

**Returns**: `new`



### getFilterConditions(additionalFilterConditions: List<FilterCondition>, database: Database, question: QuestionName) → List<FilterCondition>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| additionalFilterConditions | List<FilterCondition> | - | - |
| database | Database | - | - |
| question | QuestionName | - | - |

**Returns**: `List<FilterCondition>`



### FilterCondition(unknown: ConditionType.EQUAL, unknown: field.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ConditionType.EQUAL | - | - |
| unknown | field.getId( | - | - |

**Returns**: `new`



### postQuestion(questionName: String, query: MetabaseQuery, config: QuestionConfig, collectionId: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| questionName | String | - | - |
| query | MetabaseQuery | - | - |
| config | QuestionConfig | - | - |
| collectionId | int | - | - |

**Returns**: `void`



### MetabaseRequestBody(unknown: questionName, unknown: query, unknown: config.getVisualizationType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | questionName | - | - |
| unknown | query | - | - |
| unknown | config.getVisualizationType( | - | - |

**Returns**: `new`



### createQuestionForTable(database: Database, tableDetails: TableDetails, addressTableDetails: TableDetails, originField: FieldDetails, destinationField: FieldDetails, fieldsToShow: List<FieldDetails>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| tableDetails | TableDetails | - | - |
| addressTableDetails | TableDetails | - | - |
| originField | FieldDetails | - | - |
| destinationField | FieldDetails | - | - |
| fieldsToShow | List<FieldDetails> | - | - |

**Returns**: `void`



### MetabaseQueryBuilder(unknown: database, unknown: joinsArray) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database | - | - |
| unknown | joinsArray | - | - |

**Returns**: `new`



### MetabaseRequestBody(unknown: tableDetails.getDisplayName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tableDetails.getDisplayName( | - | - |

**Returns**: `new`



### createQuestionForASingleTable(database: Database, tableDetails: TableDetails) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| tableDetails | TableDetails | - | - |

**Returns**: `void`



### MetabaseQueryBuilder(unknown: database, unknown: ObjectMapperSingleton.getObjectMapper() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database | - | - |
| unknown | ObjectMapperSingleton.getObjectMapper( | - | - |

**Returns**: `new`



### MetabaseRequestBody(unknown: tableDetails.getDisplayName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tableDetails.getDisplayName( | - | - |

**Returns**: `new`



### createAdvancedQuery(primaryTableName: String, config: QuestionConfig, database: Database) → MetabaseQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| primaryTableName | String | - | - |
| config | QuestionConfig | - | - |
| database | Database | - | - |

**Returns**: `MetabaseQuery`



### TableDetails(unknown: primaryTableName, unknown: schemaName) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | primaryTableName | - | - |
| unknown | schemaName | - | - |

**Returns**: `new`



### FieldDetails(unknown: config.getBreakoutField() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | config.getBreakoutField( | - | - |

**Returns**: `new`



### MetabaseQueryBuilder(unknown: database, unknown: ObjectMapperSingleton.getObjectMapper() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database | - | - |
| unknown | ObjectMapperSingleton.getObjectMapper( | - | - |

**Returns**: `new`


