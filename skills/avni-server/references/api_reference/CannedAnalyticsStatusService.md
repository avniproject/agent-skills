# API Reference: CannedAnalyticsStatusService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/metabase/CannedAnalyticsStatusService.java`

---

## Classes

### CannedAnalyticsStatusService

**Inherits from**: (none)

#### Methods

##### CannedAnalyticsStatusService(organisationConfigService: OrganisationConfigService, batchJobService: BatchJobService, unknown: @Value("${avni.reporting.metabase.self.service.enabled}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigService | OrganisationConfigService | - | - |
| batchJobService | BatchJobService | - | - |
| unknown | @Value("${avni.reporting.metabase.self.service.enabled}" | - | - |

**Returns**: `public`


##### getStatus(organisation: Organisation) → CannedAnalyticsStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `CannedAnalyticsStatus`


##### CannedAnalyticsStatus(unknown: cannedAnalyticsLastCompletionStatus, unknown: cannedAnalyticsJobStatus, unknown: resourcesPresent, unknown: avniEnvironment, unknown: selfServiceBatchConfig.getTotalTimeoutInMillis() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cannedAnalyticsLastCompletionStatus | - | - |
| unknown | cannedAnalyticsJobStatus | - | - |
| unknown | resourcesPresent | - | - |
| unknown | avniEnvironment | - | - |
| unknown | selfServiceBatchConfig.getTotalTimeoutInMillis( | - | - |

**Returns**: `new`




## Functions

### CannedAnalyticsStatusService(organisationConfigService: OrganisationConfigService, batchJobService: BatchJobService, unknown: @Value("${avni.reporting.metabase.self.service.enabled}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationConfigService | OrganisationConfigService | - | - |
| batchJobService | BatchJobService | - | - |
| unknown | @Value("${avni.reporting.metabase.self.service.enabled}" | - | - |

**Returns**: `public`



### getStatus(organisation: Organisation) → CannedAnalyticsStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `CannedAnalyticsStatus`



### CannedAnalyticsStatus(unknown: cannedAnalyticsLastCompletionStatus, unknown: cannedAnalyticsJobStatus, unknown: resourcesPresent, unknown: avniEnvironment, unknown: selfServiceBatchConfig.getTotalTimeoutInMillis() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cannedAnalyticsLastCompletionStatus | - | - |
| unknown | cannedAnalyticsJobStatus | - | - |
| unknown | resourcesPresent | - | - |
| unknown | avniEnvironment | - | - |
| unknown | selfServiceBatchConfig.getTotalTimeoutInMillis( | - | - |

**Returns**: `new`


