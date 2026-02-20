# API Reference: ReportController.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/controller/ReportController.java`

---

## Classes

### ReportController

**Inherits from**: (none)

#### Methods

##### ReportController(reportRepository: ReportRepository, reportUtil: ReportUtil) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportRepository | ReportRepository | - | - |
| reportUtil | ReportUtil | - | - |

**Returns**: `public`


##### getSummaryTable(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`


##### getUserActivity(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`


##### getUserWiseSyncFailures(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`


##### getUserWiseDeviceModels(=: @RequestParam(value, =: required, =: defaultValue) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<AggregateReportResult>`


##### getUserWiseAppVersions(=: @RequestParam(value, =: required, =: defaultValue) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<AggregateReportResult>`


##### getUserDetails(=: @RequestParam(value, =: required, =: defaultValue) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<UserActivityDTO>`


##### getLatestSyncs(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`


##### getMedianSync(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`


##### getChampionUsers(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`


##### getNonPerformingUsers(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`


##### getUsersCancellingMostVisits(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`




## Functions

### ReportController(reportRepository: ReportRepository, reportUtil: ReportUtil) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportRepository | ReportRepository | - | - |
| reportUtil | ReportUtil | - | - |

**Returns**: `public`



### getSummaryTable(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`



### getUserActivity(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`



### getUserWiseSyncFailures(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`



### getUserWiseDeviceModels(=: @RequestParam(value, =: required, =: defaultValue) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<AggregateReportResult>`



### getUserWiseAppVersions(=: @RequestParam(value, =: required, =: defaultValue) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<AggregateReportResult>`



### getUserDetails(=: @RequestParam(value, =: required, =: defaultValue) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `List<UserActivityDTO>`



### getLatestSyncs(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`



### getMedianSync(=: @RequestParam(value, =: required) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<UserActivityDTO>`



### getChampionUsers(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`



### getNonPerformingUsers(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`



### getUsersCancellingMostVisits(=: @RequestParam(value, =: required) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |

**Returns**: `List<AggregateReportResult>`


