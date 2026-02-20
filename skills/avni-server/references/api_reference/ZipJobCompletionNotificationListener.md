# API Reference: ZipJobCompletionNotificationListener.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/zip/ZipJobCompletionNotificationListener.java`

---

## Classes

### ZipJobCompletionNotificationListener

**Inherits from**: JobExecutionListenerSupport

#### Methods

##### ZipJobCompletionNotificationListener(bulkUploadS3Service: BulkUploadS3Service, authService: AuthService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkUploadS3Service | BulkUploadS3Service | - | - |
| authService | AuthService | - | - |

**Returns**: `public`


##### afterJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`


##### beforeJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`




## Functions

### ZipJobCompletionNotificationListener(bulkUploadS3Service: BulkUploadS3Service, authService: AuthService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkUploadS3Service | BulkUploadS3Service | - | - |
| authService | AuthService | - | - |

**Returns**: `public`



### afterJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`



### beforeJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`


