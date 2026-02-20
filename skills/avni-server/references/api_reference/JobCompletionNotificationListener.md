# API Reference: JobCompletionNotificationListener.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/JobCompletionNotificationListener.java`

---

## Classes

### JobCompletionNotificationListener

**Inherits from**: JobExecutionListenerSupport

#### Methods

##### JobCompletionNotificationListener(exportS3Service: ExportS3Service, authService: AuthService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportS3Service | ExportS3Service | - | - |
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

### JobCompletionNotificationListener(exportS3Service: ExportS3Service, authService: AuthService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportS3Service | ExportS3Service | - | - |
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


