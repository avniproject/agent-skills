# API Reference: CannedAnalyticsStatus.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/domain/metabase/CannedAnalyticsStatus.java`

---

## Classes

### CannedAnalyticsStatus

**Inherits from**: (none)

#### Methods

##### CannedAnalyticsStatus(status: CannedAnalyticsLastCompletionStatus, unknown: Map<String, jobStatuses: BatchJobStatus>, resources: List<String>, avniEnvironment: String, timeoutInMillis: int) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | CannedAnalyticsLastCompletionStatus | - | - |
| unknown | Map<String | - | - |
| jobStatuses | BatchJobStatus> | - | - |
| resources | List<String> | - | - |
| avniEnvironment | String | - | - |
| timeoutInMillis | int | - | - |

**Returns**: `public`


##### getStatus() → CannedAnalyticsLastCompletionStatus

**Returns**: `CannedAnalyticsLastCompletionStatus`


##### getJobStatuses() → Map<String, BatchJobStatus>

**Returns**: `Map<String, BatchJobStatus>`


##### isCreateQuestionAllowed() → boolean

**Returns**: `boolean`


##### getResources() → List<String>

**Returns**: `List<String>`


##### getAvniEnvironment() → String

**Returns**: `String`


##### getTimeoutInMillis() → int

**Returns**: `int`




## Functions

### CannedAnalyticsStatus(status: CannedAnalyticsLastCompletionStatus, unknown: Map<String, jobStatuses: BatchJobStatus>, resources: List<String>, avniEnvironment: String, timeoutInMillis: int) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| status | CannedAnalyticsLastCompletionStatus | - | - |
| unknown | Map<String | - | - |
| jobStatuses | BatchJobStatus> | - | - |
| resources | List<String> | - | - |
| avniEnvironment | String | - | - |
| timeoutInMillis | int | - | - |

**Returns**: `public`



### getStatus() → CannedAnalyticsLastCompletionStatus

**Returns**: `CannedAnalyticsLastCompletionStatus`



### getJobStatuses() → Map<String, BatchJobStatus>

**Returns**: `Map<String, BatchJobStatus>`



### isCreateQuestionAllowed() → boolean

**Returns**: `boolean`



### getResources() → List<String>

**Returns**: `List<String>`



### getAvniEnvironment() → String

**Returns**: `String`



### getTimeoutInMillis() → int

**Returns**: `int`


