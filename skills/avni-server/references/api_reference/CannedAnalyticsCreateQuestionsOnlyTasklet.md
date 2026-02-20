# API Reference: CannedAnalyticsCreateQuestionsOnlyTasklet.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/metabase/CannedAnalyticsCreateQuestionsOnlyTasklet.java`

---

## Classes

### CannedAnalyticsCreateQuestionsOnlyTasklet

**Inherits from**: Tasklet

#### Methods

##### CannedAnalyticsCreateQuestionsOnlyTasklet(organisationRepository: OrganisationRepository, databaseService: DatabaseService, metabaseService: MetabaseService, avniSpringBatchJobHelper: AvniSpringBatchJobHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationRepository | OrganisationRepository | - | - |
| databaseService | DatabaseService | - | - |
| metabaseService | MetabaseService | - | - |
| avniSpringBatchJobHelper | AvniSpringBatchJobHelper | - | - |

**Returns**: `public`


##### execute(contribution: StepContribution, chunkContext: ChunkContext) → RepeatStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contribution | StepContribution | - | - |
| chunkContext | ChunkContext | - | - |

**Returns**: `RepeatStatus`


##### RuntimeException(is: "Metabase, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | "Metabase | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### CannedAnalyticsCreateQuestionsOnlyTasklet(organisationRepository: OrganisationRepository, databaseService: DatabaseService, metabaseService: MetabaseService, avniSpringBatchJobHelper: AvniSpringBatchJobHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationRepository | OrganisationRepository | - | - |
| databaseService | DatabaseService | - | - |
| metabaseService | MetabaseService | - | - |
| avniSpringBatchJobHelper | AvniSpringBatchJobHelper | - | - |

**Returns**: `public`



### execute(contribution: StepContribution, chunkContext: ChunkContext) → RepeatStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contribution | StepContribution | - | - |
| chunkContext | ChunkContext | - | - |

**Returns**: `RepeatStatus`



### RuntimeException(is: "Metabase, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | "Metabase | - | - |
| unknown | e | - | - |

**Returns**: `new`


