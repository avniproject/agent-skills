# API Reference: ErrorFileWriterListener.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/ErrorFileWriterListener.java`

---

## Classes

### ErrorFileWriterListener

**Inherits from**: (none)

#### Methods

##### ErrorFileWriterListener(bulkUploadS3Service: BulkUploadS3Service, bugsnagReporter: BugsnagReporter) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkUploadS3Service | BulkUploadS3Service | - | - |
| bugsnagReporter | BugsnagReporter | - | - |

**Returns**: `public`


##### onSkipInWrite(item: Row, t: Throwable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| item | Row | - | - |
| t | Throwable | - | - |

**Returns**: `void`


##### appendToErrorFile(item: Row, t: Throwable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| item | Row | - | - |
| t | Throwable | - | - |

**Returns**: `void`


##### FileWriter(unknown: bulkUploadS3Service.getLocalErrorFile(uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bulkUploadS3Service.getLocalErrorFile(uuid | - | - |

**Returns**: `new`


##### RuntimeException(recording: format("Error, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| recording | format("Error | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`




## Functions

### ErrorFileWriterListener(bulkUploadS3Service: BulkUploadS3Service, bugsnagReporter: BugsnagReporter) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bulkUploadS3Service | BulkUploadS3Service | - | - |
| bugsnagReporter | BugsnagReporter | - | - |

**Returns**: `public`



### onSkipInWrite(item: Row, t: Throwable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| item | Row | - | - |
| t | Throwable | - | - |

**Returns**: `void`



### appendToErrorFile(item: Row, t: Throwable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| item | Row | - | - |
| t | Throwable | - | - |

**Returns**: `void`



### FileWriter(unknown: bulkUploadS3Service.getLocalErrorFile(uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bulkUploadS3Service.getLocalErrorFile(uuid | - | - |

**Returns**: `new`



### RuntimeException(recording: format("Error, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| recording | format("Error | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


