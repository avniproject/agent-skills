# API Reference: SyncAttributesJobListener.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/sync/attributes/SyncAttributesJobListener.java`

---

## Classes

### SyncAttributesJobListener

**Inherits from**: JobExecutionListenerSupport

#### Methods

##### SyncAttributesJobListener(subjectTypeRepository: SubjectTypeRepository, authService: AuthService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
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

### SyncAttributesJobListener(subjectTypeRepository: SubjectTypeRepository, authService: AuthService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
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


