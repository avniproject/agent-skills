# API Reference: AvniReportRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/report/AvniReportRepository.java`

---

## Classes

### AvniReportRepository

**Inherits from**: (none)

#### Methods

##### AvniReportRepository(jdbcTemplate: NamedParameterJdbcTemplate, reportHelper: ReportHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | NamedParameterJdbcTemplate | - | - |
| reportHelper | ReportHelper | - | - |

**Returns**: `public`


##### generateAggregatesForCodedConcept(concept: Concept, formMapping: FormMapping, startDate: String, endDate: String, lowestLocationIds: List<Long>) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| formMapping | FormMapping | - | - |
| startDate | String | - | - |
| endDate | String | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `List<AggregateReportResult>`


##### as(+: \n") → base_result

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |

**Returns**: `base_result`


##### TRANSLATE(->: (${obsColumn}) → then

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| -> | (${obsColumn} | - | - |

**Returns**: `then`


##### coalesce(unknown: concept_name(indicator) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | concept_name(indicator | - | - |

**Returns**: `select`


##### AggregateReportMapper() → new

**Returns**: `new`


##### generateAggregatesForEntityByType(entity: String, operationalType: String, operationalTypeIdColumn: String, dynamicWhere: String, dynamicJoin: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | String | - | - |
| operationalType | String | - | - |
| operationalTypeIdColumn | String | - | - |
| dynamicWhere | String | - | - |
| dynamicJoin | String | - | - |

**Returns**: `List<AggregateReportResult>`


##### AggregateReportMapper() → new

**Returns**: `new`


##### generateDayWiseActivities(dynamic_individual_where: String, dynamic_encounter_where: String, dynamic_program_enrolment_where: String, dynamic_individual_join: String, dynamic_encounter_join: String, dynamic_enrolment_encounter_join: String) → List<CountForDay>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dynamic_individual_where | String | - | - |
| dynamic_encounter_where | String | - | - |
| dynamic_program_enrolment_where | String | - | - |
| dynamic_individual_join | String | - | - |
| dynamic_encounter_join | String | - | - |
| dynamic_enrolment_encounter_join | String | - | - |

**Returns**: `List<CountForDay>`


##### date(unknown: encounter_date_time) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter_date_time | - | - |

**Returns**: `select`


##### date(unknown: encounter_date_time) → by

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter_date_time | - | - |

**Returns**: `by`


##### date(unknown: encounter_date_time) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter_date_time | - | - |

**Returns**: `select`


##### date(unknown: encounter_date_time) → by

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter_date_time | - | - |

**Returns**: `by`


##### date(unknown: enrolment_date_time) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enrolment_date_time | - | - |

**Returns**: `select`


##### date(unknown: enrolment_date_time) → by

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enrolment_date_time | - | - |

**Returns**: `by`


##### CountForDayMapper() → new

**Returns**: `new`


##### generateUserActivityResults(subjectWhere: String, encounterWhere: String, enrolmentWhere: String, userWhere: String) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectWhere | String | - | - |
| encounterWhere | String | - | - |
| enrolmentWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityResult>`


##### as(+: \n", unknown: count(*) → registrations

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | count(* | - | - |

**Returns**: `registrations`


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


##### coalesce(unknown: coalesce(registration_count, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | coalesce(registration_count | - | - |
| unknown | 0 | - | - |

**Returns**: `and`


##### UserActivityMapper() → new

**Returns**: `new`


##### generateUserSyncFailures(syncTelemetryWhere: String, userWhere: String) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncTelemetryWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityResult>`


##### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`


##### UserCountMapper() → new

**Returns**: `new`


##### generateUserAppVersions(userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`


##### AggregateReportMapper() → new

**Returns**: `new`


##### generateUserDeviceModels(userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`


##### AggregateReportMapper() → new

**Returns**: `new`


##### generateUserDetails(userWhere: String) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userWhere | String | - | - |

**Returns**: `List<UserActivityResult>`


##### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`


##### UserDetailsMapper() → new

**Returns**: `new`


##### generateCompletedVisitsOnTimeByProportion(proportionCondition: String, encounterWhere: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| proportionCondition | String | - | - |
| encounterWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`


##### as(+: \n", +: \n") → program_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `program_enc_data`


##### as(+: \n", +: \n") → general_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `general_enc_data`


##### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`


##### coalesce(unknown: ged.visits_done_on_time, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ged.visits_done_on_time | - | - |
| unknown | 0 | - | - |

**Returns**: `and`


##### AggregateReportMapper() → new

**Returns**: `new`


##### generateUserCancellingMostVisits(encounterWhere: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`


##### as(+: \n", +: \n") → program_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `program_enc_data`


##### as(+: \n", +: \n") → general_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `general_enc_data`


##### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`


##### coalesce(unknown: ged.cancelled_visits, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ged.cancelled_visits | - | - |
| unknown | 0 | - | - |

**Returns**: `and`


##### coalesce(unknown: ged.cancelled_visits, unknown: 0.0) → by

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ged.cancelled_visits | - | - |
| unknown | 0.0 | - | - |

**Returns**: `by`


##### AggregateReportMapper() → new

**Returns**: `new`




## Functions

### AvniReportRepository(jdbcTemplate: NamedParameterJdbcTemplate, reportHelper: ReportHelper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | NamedParameterJdbcTemplate | - | - |
| reportHelper | ReportHelper | - | - |

**Returns**: `public`



### generateAggregatesForCodedConcept(concept: Concept, formMapping: FormMapping, startDate: String, endDate: String, lowestLocationIds: List<Long>) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| formMapping | FormMapping | - | - |
| startDate | String | - | - |
| endDate | String | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `List<AggregateReportResult>`



### as(+: \n") → base_result

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |

**Returns**: `base_result`



### TRANSLATE(->: (${obsColumn}) → then

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| -> | (${obsColumn} | - | - |

**Returns**: `then`



### coalesce(unknown: concept_name(indicator) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | concept_name(indicator | - | - |

**Returns**: `select`



### AggregateReportMapper() → new

**Returns**: `new`



### generateAggregatesForEntityByType(entity: String, operationalType: String, operationalTypeIdColumn: String, dynamicWhere: String, dynamicJoin: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | String | - | - |
| operationalType | String | - | - |
| operationalTypeIdColumn | String | - | - |
| dynamicWhere | String | - | - |
| dynamicJoin | String | - | - |

**Returns**: `List<AggregateReportResult>`



### AggregateReportMapper() → new

**Returns**: `new`



### generateDayWiseActivities(dynamic_individual_where: String, dynamic_encounter_where: String, dynamic_program_enrolment_where: String, dynamic_individual_join: String, dynamic_encounter_join: String, dynamic_enrolment_encounter_join: String) → List<CountForDay>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dynamic_individual_where | String | - | - |
| dynamic_encounter_where | String | - | - |
| dynamic_program_enrolment_where | String | - | - |
| dynamic_individual_join | String | - | - |
| dynamic_encounter_join | String | - | - |
| dynamic_enrolment_encounter_join | String | - | - |

**Returns**: `List<CountForDay>`



### date(unknown: encounter_date_time) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter_date_time | - | - |

**Returns**: `select`



### date(unknown: encounter_date_time) → by

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter_date_time | - | - |

**Returns**: `by`



### date(unknown: encounter_date_time) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter_date_time | - | - |

**Returns**: `select`



### date(unknown: encounter_date_time) → by

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter_date_time | - | - |

**Returns**: `by`



### date(unknown: enrolment_date_time) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enrolment_date_time | - | - |

**Returns**: `select`



### date(unknown: enrolment_date_time) → by

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | enrolment_date_time | - | - |

**Returns**: `by`



### CountForDayMapper() → new

**Returns**: `new`



### generateUserActivityResults(subjectWhere: String, encounterWhere: String, enrolmentWhere: String, userWhere: String) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectWhere | String | - | - |
| encounterWhere | String | - | - |
| enrolmentWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityResult>`



### as(+: \n", unknown: count(*) → registrations

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| unknown | count(* | - | - |

**Returns**: `registrations`



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



### coalesce(unknown: coalesce(registration_count, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | coalesce(registration_count | - | - |
| unknown | 0 | - | - |

**Returns**: `and`



### UserActivityMapper() → new

**Returns**: `new`



### generateUserSyncFailures(syncTelemetryWhere: String, userWhere: String) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncTelemetryWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<UserActivityResult>`



### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`



### UserCountMapper() → new

**Returns**: `new`



### generateUserAppVersions(userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`



### AggregateReportMapper() → new

**Returns**: `new`



### generateUserDeviceModels(userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`



### AggregateReportMapper() → new

**Returns**: `new`



### generateUserDetails(userWhere: String) → List<UserActivityResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userWhere | String | - | - |

**Returns**: `List<UserActivityResult>`



### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`



### UserDetailsMapper() → new

**Returns**: `new`



### generateCompletedVisitsOnTimeByProportion(proportionCondition: String, encounterWhere: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| proportionCondition | String | - | - |
| encounterWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`



### as(+: \n", +: \n") → program_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `program_enc_data`



### as(+: \n", +: \n") → general_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `general_enc_data`



### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`



### coalesce(unknown: ged.visits_done_on_time, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ged.visits_done_on_time | - | - |
| unknown | 0 | - | - |

**Returns**: `and`



### AggregateReportMapper() → new

**Returns**: `new`



### generateUserCancellingMostVisits(encounterWhere: String, userWhere: String) → List<AggregateReportResult>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterWhere | String | - | - |
| userWhere | String | - | - |

**Returns**: `List<AggregateReportResult>`



### as(+: \n", +: \n") → program_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `program_enc_data`



### as(+: \n", +: \n") → general_enc_data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `general_enc_data`



### coalesce(unknown: u.name, unknown: u.username) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | u.name | - | - |
| unknown | u.username | - | - |

**Returns**: `select`



### coalesce(unknown: ged.cancelled_visits, unknown: 0) → and

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ged.cancelled_visits | - | - |
| unknown | 0 | - | - |

**Returns**: `and`



### coalesce(unknown: ged.cancelled_visits, unknown: 0.0) → by

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ged.cancelled_visits | - | - |
| unknown | 0.0 | - | - |

**Returns**: `by`



### AggregateReportMapper() → new

**Returns**: `new`


