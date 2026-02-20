# API Reference: BulkSubjectMigrationTaskletTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/importer/batch/BulkSubjectMigrationTaskletTest.java`

---

## Classes

### BulkSubjectMigrationTaskletTest

**Inherits from**: (none)

#### Methods

##### setup() → void

**Returns**: `void`


##### BulkSubjectMigrationTasklet(unknown: subjectMigrationService, unknown: bulkUploadS3Service) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectMigrationService | - | - |
| unknown | bulkUploadS3Service | - | - |

**Returns**: `new`


##### when(unknown: chunkContext.getStepContext() → ChunkContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | chunkContext.getStepContext( | - | - |

**Returns**: `ChunkContext`


##### execute_shouldMigrateSubjectsByAddress() → void

**Returns**: `void`


##### execute_shouldMigrateSubjectsBySyncConcept() → void

**Returns**: `void`


##### execute_shouldHandleFailedMigrations() → void

**Returns**: `void`


##### execute_shouldHandleJsonDeserializationError() → void

**Returns**: `void`


##### createAddressMigrationRequest() → BulkSubjectMigrationRequest

**Returns**: `BulkSubjectMigrationRequest`


##### BulkSubjectMigrationRequest() → new

**Returns**: `new`


##### createSyncConceptMigrationRequest() → BulkSubjectMigrationRequest

**Returns**: `BulkSubjectMigrationRequest`


##### BulkSubjectMigrationRequest() → new

**Returns**: `new`




## Functions

### setup() → void

**Returns**: `void`



### BulkSubjectMigrationTasklet(unknown: subjectMigrationService, unknown: bulkUploadS3Service) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectMigrationService | - | - |
| unknown | bulkUploadS3Service | - | - |

**Returns**: `new`



### when(unknown: chunkContext.getStepContext() → ChunkContext

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | chunkContext.getStepContext( | - | - |

**Returns**: `ChunkContext`



### execute_shouldMigrateSubjectsByAddress() → void

**Returns**: `void`



### execute_shouldMigrateSubjectsBySyncConcept() → void

**Returns**: `void`



### execute_shouldHandleFailedMigrations() → void

**Returns**: `void`



### execute_shouldHandleJsonDeserializationError() → void

**Returns**: `void`



### createAddressMigrationRequest() → BulkSubjectMigrationRequest

**Returns**: `BulkSubjectMigrationRequest`



### BulkSubjectMigrationRequest() → new

**Returns**: `new`



### createSyncConceptMigrationRequest() → BulkSubjectMigrationRequest

**Returns**: `BulkSubjectMigrationRequest`



### BulkSubjectMigrationRequest() → new

**Returns**: `new`


