# API Reference: CannedAnalyticsSetupTasklet.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/metabase/CannedAnalyticsSetupTasklet.java`

---

## Classes

### CannedAnalyticsSetupTasklet

**Inherits from**: Tasklet

#### Methods

##### CannedAnalyticsSetupTasklet(organisationConfigService: OrganisationConfigService, organisationRepository: OrganisationRepository, groupsService: GroupsService, metabaseService: MetabaseService, databaseService: DatabaseService, avniSpringBatchJobHelper: AvniSpringBatchJobHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigService | OrganisationConfigService | - | - |
| organisationRepository | OrganisationRepository | - | - |
| groupsService | GroupsService | - | - |
| metabaseService | MetabaseService | - | - |
| databaseService | DatabaseService | - | - |
| avniSpringBatchJobHelper | AvniSpringBatchJobHelper | - | - |

**Returns**: `public`


##### setup(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### GroupContract() → new

**Returns**: `new`


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

### CannedAnalyticsSetupTasklet(organisationConfigService: OrganisationConfigService, organisationRepository: OrganisationRepository, groupsService: GroupsService, metabaseService: MetabaseService, databaseService: DatabaseService, avniSpringBatchJobHelper: AvniSpringBatchJobHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigService | OrganisationConfigService | - | - |
| organisationRepository | OrganisationRepository | - | - |
| groupsService | GroupsService | - | - |
| metabaseService | MetabaseService | - | - |
| databaseService | DatabaseService | - | - |
| avniSpringBatchJobHelper | AvniSpringBatchJobHelper | - | - |

**Returns**: `public`



### setup(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### GroupContract() → new

**Returns**: `new`



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


