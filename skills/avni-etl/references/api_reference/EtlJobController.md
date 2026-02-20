# API Reference: EtlJobController.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/controller/backgroundJob/EtlJobController.java`

---

## Classes

### EtlJobController

**Inherits from**: (none)

#### Methods

##### EtlJobController(scheduler: Scheduler, scheduledJobConfig: ScheduledJobConfig, organisationRepository: OrganisationRepository, scheduledJobService: ScheduledJobService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduler | Scheduler | - | - |
| scheduledJobConfig | ScheduledJobConfig | - | - |
| organisationRepository | OrganisationRepository | - | - |
| scheduledJobService | ScheduledJobService | - | - |

**Returns**: `public`


##### getJob(String: @PathVariable, unknown: @RequestParam(value="jobGroup", =: required) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| unknown | @RequestParam(value="jobGroup" | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity`


##### ResponseEntity(unknown: latestJobRun, unknown: HttpStatus.OK) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | latestJobRun | - | - |
| unknown | HttpStatus.OK | - | - |

**Returns**: `new`


##### getStatuses(List<String>: @RequestBody, unknown: @RequestParam(value="jobGroup", =: required) → List<EtlJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<String> | @RequestBody | - | - |
| unknown | @RequestParam(value="jobGroup" | - | - |
| = | required | - | - |

**Returns**: `List<EtlJobStatus>`


##### getJobHistory(String: @PathVariable, unknown: @RequestParam(value="jobGroup", =: required) → List<EtlJobHistoryItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| unknown | @RequestParam(value="jobGroup" | - | - |
| = | required | - | - |

**Returns**: `List<EtlJobHistoryItem>`


##### createJob(JobScheduleRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| JobScheduleRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`


##### validateRequest(jobScheduleRequest: JobScheduleRequest, organisationIdentity: OrganisationIdentity, organisationIdentitiesInGroup: List<OrganisationIdentity>) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobScheduleRequest | JobScheduleRequest | - | - |
| organisationIdentity | OrganisationIdentity | - | - |
| organisationIdentitiesInGroup | List<OrganisationIdentity> | - | - |

**Returns**: `ResponseEntity<String>`


##### getHigherPriorityTriggerForFirstRun(jobScheduleRequest: JobScheduleRequest, jobDetail: JobDetailImpl) → Trigger

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobScheduleRequest | JobScheduleRequest | - | - |
| jobDetail | JobDetailImpl | - | - |

**Returns**: `Trigger`


##### default(unknown: 5) → than

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 5 | - | - |

**Returns**: `than`


##### getTrigger(jobScheduleRequest: JobScheduleRequest, jobDetail: JobDetailImpl) → Trigger

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobScheduleRequest | JobScheduleRequest | - | - |
| jobDetail | JobDetailImpl | - | - |

**Returns**: `Trigger`


##### getJobDetail(jobScheduleRequest: JobScheduleRequest, organisationIdentity: OrganisationIdentity, organisationIdentitiesInGroup: List<OrganisationIdentity>) → JobDetailImpl

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobScheduleRequest | JobScheduleRequest | - | - |
| organisationIdentity | OrganisationIdentity | - | - |
| organisationIdentitiesInGroup | List<OrganisationIdentity> | - | - |

**Returns**: `JobDetailImpl`


##### JobDetailImpl() → new

**Returns**: `new`


##### getTruncatedDescription(organisationIdentity: OrganisationIdentity, organisationIdentitiesInGroup: List<OrganisationIdentity>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |
| organisationIdentitiesInGroup | List<OrganisationIdentity> | - | - |

**Returns**: `String`


##### deleteJob(String: @PathVariable, unknown: @RequestParam(value="jobGroup", =: required) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| unknown | @RequestParam(value="jobGroup" | - | - |
| = | required | - | - |

**Returns**: `String`




## Functions

### EtlJobController(scheduler: Scheduler, scheduledJobConfig: ScheduledJobConfig, organisationRepository: OrganisationRepository, scheduledJobService: ScheduledJobService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduler | Scheduler | - | - |
| scheduledJobConfig | ScheduledJobConfig | - | - |
| organisationRepository | OrganisationRepository | - | - |
| scheduledJobService | ScheduledJobService | - | - |

**Returns**: `public`



### getJob(String: @PathVariable, unknown: @RequestParam(value="jobGroup", =: required) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| unknown | @RequestParam(value="jobGroup" | - | - |
| = | required | - | - |

**Returns**: `ResponseEntity`



### ResponseEntity(unknown: latestJobRun, unknown: HttpStatus.OK) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | latestJobRun | - | - |
| unknown | HttpStatus.OK | - | - |

**Returns**: `new`



### getStatuses(List<String>: @RequestBody, unknown: @RequestParam(value="jobGroup", =: required) → List<EtlJobStatus>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<String> | @RequestBody | - | - |
| unknown | @RequestParam(value="jobGroup" | - | - |
| = | required | - | - |

**Returns**: `List<EtlJobStatus>`



### getJobHistory(String: @PathVariable, unknown: @RequestParam(value="jobGroup", =: required) → List<EtlJobHistoryItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| unknown | @RequestParam(value="jobGroup" | - | - |
| = | required | - | - |

**Returns**: `List<EtlJobHistoryItem>`



### createJob(JobScheduleRequest: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| JobScheduleRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### validateRequest(jobScheduleRequest: JobScheduleRequest, organisationIdentity: OrganisationIdentity, organisationIdentitiesInGroup: List<OrganisationIdentity>) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobScheduleRequest | JobScheduleRequest | - | - |
| organisationIdentity | OrganisationIdentity | - | - |
| organisationIdentitiesInGroup | List<OrganisationIdentity> | - | - |

**Returns**: `ResponseEntity<String>`



### getHigherPriorityTriggerForFirstRun(jobScheduleRequest: JobScheduleRequest, jobDetail: JobDetailImpl) → Trigger

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobScheduleRequest | JobScheduleRequest | - | - |
| jobDetail | JobDetailImpl | - | - |

**Returns**: `Trigger`



### default(unknown: 5) → than

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 5 | - | - |

**Returns**: `than`



### getTrigger(jobScheduleRequest: JobScheduleRequest, jobDetail: JobDetailImpl) → Trigger

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobScheduleRequest | JobScheduleRequest | - | - |
| jobDetail | JobDetailImpl | - | - |

**Returns**: `Trigger`



### getJobDetail(jobScheduleRequest: JobScheduleRequest, organisationIdentity: OrganisationIdentity, organisationIdentitiesInGroup: List<OrganisationIdentity>) → JobDetailImpl

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobScheduleRequest | JobScheduleRequest | - | - |
| organisationIdentity | OrganisationIdentity | - | - |
| organisationIdentitiesInGroup | List<OrganisationIdentity> | - | - |

**Returns**: `JobDetailImpl`



### JobDetailImpl() → new

**Returns**: `new`



### getTruncatedDescription(organisationIdentity: OrganisationIdentity, organisationIdentitiesInGroup: List<OrganisationIdentity>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationIdentity | OrganisationIdentity | - | - |
| organisationIdentitiesInGroup | List<OrganisationIdentity> | - | - |

**Returns**: `String`



### deleteJob(String: @PathVariable, unknown: @RequestParam(value="jobGroup", =: required) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |
| unknown | @RequestParam(value="jobGroup" | - | - |
| = | required | - | - |

**Returns**: `String`


