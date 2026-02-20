# API Reference: BulkSubjectMigrationJobListener.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/sync/attributes/bulkmigration/BulkSubjectMigrationJobListener.java`

---

## Classes

### BulkSubjectMigrationJobListener

**Inherits from**: JobExecutionListenerSupport

#### Methods

##### BulkSubjectMigrationJobListener(authService: AuthService, s3Service: BulkUploadS3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| s3Service | BulkUploadS3Service | - | - |

**Returns**: `public`


##### beforeJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`


##### RuntimeException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### afterJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`


##### writeFailuresToFileAndUploadToS3(unknown: Map<String, failedMigrations: String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| failedMigrations | String> | - | - |

**Returns**: `void`


##### File(unknown: format("%s/%s", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/%s" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`




## Functions

### BulkSubjectMigrationJobListener(authService: AuthService, s3Service: BulkUploadS3Service) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authService | AuthService | - | - |
| s3Service | BulkUploadS3Service | - | - |

**Returns**: `public`



### beforeJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`



### RuntimeException(to: "Failed, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Failed | - | - |
| unknown | e | - | - |

**Returns**: `new`



### afterJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`



### writeFailuresToFileAndUploadToS3(unknown: Map<String, failedMigrations: String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| failedMigrations | String> | - | - |

**Returns**: `void`



### File(unknown: format("%s/%s", unknown: System.getProperty("java.io.tmpdir") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | format("%s/%s" | - | - |
| unknown | System.getProperty("java.io.tmpdir" | - | - |

**Returns**: `new`


