# API Reference: ReportRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/ReportRepository.java`

---

## Classes

### ReportRepository

**Inherits from**: (none)

#### Methods

##### ReportRepository(jdbcTemplate: NamedParameterJdbcTemplate, schemaMetadataRepository: SchemaMetadataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | NamedParameterJdbcTemplate | - | - |
| schemaMetadataRepository | SchemaMetadataRepository | - | - |

**Returns**: `public`


##### generateSummaryTable(orgSchemaName: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |

**Returns**: `List<UserActivityDTO>`


##### SummaryTableMapper() → new

**Returns**: `new`


##### generateUserActivity(orgSchemaName: String, subjectWhere: String, encounterWhere: String, enrolmentWhere: String, userWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| subjectWhere | String | - | - |
| encounterWhere | String | - | - |
| enrolmentWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`


##### ST(registrations: "with, unknown: count(*) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registrations | "with | - | - |
| unknown | count(* | - | - |

**Returns**: `new`


##### as(+: \n", unknown: count(*) → encounters

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | count(* | - | - |

**Returns**: `encounters`


##### as(+: \n", unknown: count(*) → enrolments

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | count(* | - | - |

**Returns**: `enrolments`


##### as(+: \n", unknown: count(*) → program_encounters

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | count(* | - | - |

**Returns**: `program_encounters`


##### as(+: \n", +: \n", unknown: u.username) → activity_table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |
| unknown | u.username | - | - |

**Returns**: `activity_table`


##### coalesce(unknown: coalesce(registration_count, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | coalesce(registration_count | - | - |
| unknown | 0 | - | - |

**Returns**: `and`


##### as(+: \n", unknown: name, ": \n"+) → _table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | name | - | - |
| " | \n"+ | - | - |

**Returns**: `_table`


##### UserActivityMapper() → new

**Returns**: `new`


##### generateUserSyncFailures(orgSchemaName: String, syncTelemetryWhere: String, userWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| syncTelemetryWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`


##### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`


##### UserCountMapper() → new

**Returns**: `new`


##### generateUserAppVersions(orgSchemaName: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`


##### AggregateReportMapper() → new

**Returns**: `new`


##### generateUserDeviceModels(orgSchemaName: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`


##### AggregateReportMapper() → new

**Returns**: `new`


##### generateUserDetails(orgSchemaName: String, userWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`


##### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`


##### UserDetailsMapper() → new

**Returns**: `new`


##### generateLatestSyncs(orgSchemaName: String, syncTelemetryWhere: String, userWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| syncTelemetryWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`


##### coalesce(unknown: u.name, unknown: u.username) → SELECT

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `SELECT`


##### LatestSyncMapper() → new

**Returns**: `new`


##### generateMedianSync(orgSchemaName: String, syncTelemetryWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| syncTelemetryWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`


##### as(+: \n", end_date\n": day::date+6) → weeks

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| end_date\n" | day::date+6 | - | - |

**Returns**: `weeks`


##### group(by: order) → within

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| by | order | - | - |

**Returns**: `within`


##### MedianSyncMapper() → new

**Returns**: `new`


##### generateCompletedVisitsOnTimeByProportion(proportionCondition: String, orgSchemaName: String, encounterWhere: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| proportionCondition | String | - | - |
| orgSchemaName | String | - | - |
| encounterWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`


##### ST(program_enc_data: "with, +: \n") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program_enc_data | "with | - | - |
| + | \n" | - | - |

**Returns**: `new`


##### as(+: \n", +: \n") → general_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `general_enc_data`


##### as(+: \n", unknown: u.username) → total_visits_table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | u.username | - | - |

**Returns**: `total_visits_table`


##### AggregateReportMapper() → new

**Returns**: `new`


##### generateUserCancellingMostVisits(orgSchemaName: String, encounterWhere: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| encounterWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`


##### ST(program_enc_data: "with, +: \n") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program_enc_data | "with | - | - |
| + | \n" | - | - |

**Returns**: `new`


##### as(+: \n", +: \n") → general_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `general_enc_data`


##### as(+: \n", unknown: u.username) → cancelled_visits_table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | u.username | - | - |

**Returns**: `cancelled_visits_table`


##### coalesce(unknown: ged.cancelled_visits, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ged.cancelled_visits | - | - |
| unknown | 0 | - | - |

**Returns**: `and`


##### AggregateReportMapper() → new

**Returns**: `new`




## Functions

### ReportRepository(jdbcTemplate: NamedParameterJdbcTemplate, schemaMetadataRepository: SchemaMetadataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | NamedParameterJdbcTemplate | - | - |
| schemaMetadataRepository | SchemaMetadataRepository | - | - |

**Returns**: `public`



### generateSummaryTable(orgSchemaName: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |

**Returns**: `List<UserActivityDTO>`



### SummaryTableMapper() → new

**Returns**: `new`



### generateUserActivity(orgSchemaName: String, subjectWhere: String, encounterWhere: String, enrolmentWhere: String, userWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| subjectWhere | String | - | - |
| encounterWhere | String | - | - |
| enrolmentWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`



### ST(registrations: "with, unknown: count(*) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registrations | "with | - | - |
| unknown | count(* | - | - |

**Returns**: `new`



### as(+: \n", unknown: count(*) → encounters

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | count(* | - | - |

**Returns**: `encounters`



### as(+: \n", unknown: count(*) → enrolments

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | count(* | - | - |

**Returns**: `enrolments`



### as(+: \n", unknown: count(*) → program_encounters

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | count(* | - | - |

**Returns**: `program_encounters`



### as(+: \n", +: \n", unknown: u.username) → activity_table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |
| unknown | u.username | - | - |

**Returns**: `activity_table`



### coalesce(unknown: coalesce(registration_count, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | coalesce(registration_count | - | - |
| unknown | 0 | - | - |

**Returns**: `and`



### as(+: \n", unknown: name, ": \n"+) → _table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | name | - | - |
| " | \n"+ | - | - |

**Returns**: `_table`



### UserActivityMapper() → new

**Returns**: `new`



### generateUserSyncFailures(orgSchemaName: String, syncTelemetryWhere: String, userWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| syncTelemetryWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`



### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`



### UserCountMapper() → new

**Returns**: `new`



### generateUserAppVersions(orgSchemaName: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`



### AggregateReportMapper() → new

**Returns**: `new`



### generateUserDeviceModels(orgSchemaName: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`



### AggregateReportMapper() → new

**Returns**: `new`



### generateUserDetails(orgSchemaName: String, userWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`



### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`



### UserDetailsMapper() → new

**Returns**: `new`



### generateLatestSyncs(orgSchemaName: String, syncTelemetryWhere: String, userWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| syncTelemetryWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`



### coalesce(unknown: u.name, unknown: u.username) → SELECT

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `SELECT`



### LatestSyncMapper() → new

**Returns**: `new`



### generateMedianSync(orgSchemaName: String, syncTelemetryWhere: String) → List<UserActivityDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| syncTelemetryWhere | String | - | - |

**Returns**: `List<UserActivityDTO>`



### as(+: \n", end_date\n": day::date+6) → weeks

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| end_date\n" | day::date+6 | - | - |

**Returns**: `weeks`



### group(by: order) → within

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| by | order | - | - |

**Returns**: `within`



### MedianSyncMapper() → new

**Returns**: `new`



### generateCompletedVisitsOnTimeByProportion(proportionCondition: String, orgSchemaName: String, encounterWhere: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| proportionCondition | String | - | - |
| orgSchemaName | String | - | - |
| encounterWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`



### ST(program_enc_data: "with, +: \n") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program_enc_data | "with | - | - |
| + | \n" | - | - |

**Returns**: `new`



### as(+: \n", +: \n") → general_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `general_enc_data`



### as(+: \n", unknown: u.username) → total_visits_table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | u.username | - | - |

**Returns**: `total_visits_table`



### AggregateReportMapper() → new

**Returns**: `new`



### generateUserCancellingMostVisits(orgSchemaName: String, encounterWhere: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgSchemaName | String | - | - |
| encounterWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`



### ST(program_enc_data: "with, +: \n") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program_enc_data | "with | - | - |
| + | \n" | - | - |

**Returns**: `new`



### as(+: \n", +: \n") → general_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `general_enc_data`



### as(+: \n", unknown: u.username) → cancelled_visits_table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | u.username | - | - |

**Returns**: `cancelled_visits_table`



### coalesce(unknown: ged.cancelled_visits, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ged.cancelled_visits | - | - |
| unknown | 0 | - | - |

**Returns**: `and`



### AggregateReportMapper() → new

**Returns**: `new`


