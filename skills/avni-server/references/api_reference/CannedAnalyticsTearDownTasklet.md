# API Reference: CannedAnalyticsTearDownTasklet.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/metabase/CannedAnalyticsTearDownTasklet.java`

---

## Classes

### CannedAnalyticsTearDownTasklet

**Inherits from**: Tasklet

#### Methods

##### CannedAnalyticsTearDownTasklet(organisationConfigService: OrganisationConfigService, organisationRepository: OrganisationRepository, metabaseService: MetabaseService, avniSpringBatchJobHelper: AvniSpringBatchJobHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigService | OrganisationConfigService | - | - |
| organisationRepository | OrganisationRepository | - | - |
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

### CannedAnalyticsTearDownTasklet(organisationConfigService: OrganisationConfigService, organisationRepository: OrganisationRepository, metabaseService: MetabaseService, avniSpringBatchJobHelper: AvniSpringBatchJobHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigService | OrganisationConfigService | - | - |
| organisationRepository | OrganisationRepository | - | - |
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


