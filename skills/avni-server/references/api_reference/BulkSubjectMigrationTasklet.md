# API Reference: BulkSubjectMigrationTasklet.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/sync/attributes/bulkmigration/BulkSubjectMigrationTasklet.java`

---

## Classes

### BulkSubjectMigrationTasklet

**Inherits from**: Tasklet

#### Methods

##### BulkSubjectMigrationTasklet(subjectMigrationService: SubjectMigrationService, s3Service: BulkUploadS3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectMigrationService | SubjectMigrationService | - | - |
| s3Service | BulkUploadS3Service | - | - |

**Returns**: `public`


##### execute(stepContribution: StepContribution, chunkContext: ChunkContext) → RepeatStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stepContribution | StepContribution | - | - |
| chunkContext | ChunkContext | - | - |

**Returns**: `RepeatStatus`


##### RuntimeException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### BulkSubjectMigrationTasklet(subjectMigrationService: SubjectMigrationService, s3Service: BulkUploadS3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectMigrationService | SubjectMigrationService | - | - |
| s3Service | BulkUploadS3Service | - | - |

**Returns**: `public`



### execute(stepContribution: StepContribution, chunkContext: ChunkContext) → RepeatStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stepContribution | StepContribution | - | - |
| chunkContext | ChunkContext | - | - |

**Returns**: `RepeatStatus`



### RuntimeException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`


