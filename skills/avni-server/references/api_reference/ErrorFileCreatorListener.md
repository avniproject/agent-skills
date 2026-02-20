# API Reference: ErrorFileCreatorListener.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/ErrorFileCreatorListener.java`

---

## Classes

### ErrorFileCreatorListener

**Inherits from**: JobExecutionListener

#### Methods

##### ErrorFileCreatorListener(unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`


##### init() → void

**Returns**: `void`


##### beforeJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`


##### BufferedReader(InputStreamReader(s3Service.getObjectContent(s3Key: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(s3Service.getObjectContent(s3Key | new | - | - |

**Returns**: `new`


##### FileWriter(unknown: errorFile, unknown: true) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorFile | - | - |
| unknown | true | - | - |

**Returns**: `new`


##### RuntimeException(to: "Unable) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Unable | - | - |

**Returns**: `new`


##### afterJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`




## Functions

### ErrorFileCreatorListener(unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`



### init() → void

**Returns**: `void`



### beforeJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`



### BufferedReader(InputStreamReader(s3Service.getObjectContent(s3Key: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| InputStreamReader(s3Service.getObjectContent(s3Key | new | - | - |

**Returns**: `new`



### FileWriter(unknown: errorFile, unknown: true) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorFile | - | - |
| unknown | true | - | - |

**Returns**: `new`



### RuntimeException(to: "Unable) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Unable | - | - |

**Returns**: `new`



### afterJob(jobExecution: JobExecution) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobExecution | JobExecution | - | - |

**Returns**: `void`


