# API Reference: BatchJobService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/batch/BatchJobService.java`

---

## Classes

### BatchJobService

**Inherits from**: (none)

#### Methods

##### BatchJobService(jobRepository: AvniJobRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | AvniJobRepository | - | - |

**Returns**: `public`


##### getLastSyncAttributesJobStatus(subjectType: SubjectType) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `String`


##### getCannedAnalyticsJobStatus(organisation: Organisation) → Map<String, BatchJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Map<String, BatchJobStatus>`


##### getApplyTemplateJobStatus(organisation: Organisation) → Map<String, BatchJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Map<String, BatchJobStatus>`




## Functions

### BatchJobService(jobRepository: AvniJobRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | AvniJobRepository | - | - |

**Returns**: `public`



### getLastSyncAttributesJobStatus(subjectType: SubjectType) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `String`



### getCannedAnalyticsJobStatus(organisation: Organisation) → Map<String, BatchJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Map<String, BatchJobStatus>`



### getApplyTemplateJobStatus(organisation: Organisation) → Map<String, BatchJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Map<String, BatchJobStatus>`


