# API Reference: ReportService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/report/ReportService.java`

---

## Classes

### ReportService

**Inherits from**: (none)

#### Methods

##### ReportService(avniReportRepository: AvniReportRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| avniReportRepository | AvniReportRepository | - | - |

**Returns**: `public`


##### allRegistrations(startDate: String, endDate: String, subjectTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| subjectTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### allEnrolments(startDate: String, endDate: String, programIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| programIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### completedVisits(startDate: String, endDate: String, encounterTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| encounterTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### dailyActivities(startDate: String, endDate: String, subjectTypeIds: List<Long>, programIds: List<Long>, encounterTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| subjectTypeIds | List<Long> | - | - |
| programIds | List<Long> | - | - |
| encounterTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`


##### DateTime() → new

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### cancelledVisits(startDate: String, endDate: String, encounterTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| encounterTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### onTimeVisits(startDate: String, endDate: String, encounterTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| encounterTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### programExits(startDate: String, endDate: String, programIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| programIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### getDateDynamicWhere(startDate: String, endDate: String, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| columnName | String | - | - |

**Returns**: `String`


##### format(%s::date: "and, unknown: columnName, unknown: startDate, unknown: endDate) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s::date | "and | - | - |
| unknown | columnName | - | - |
| unknown | startDate | - | - |
| unknown | endDate | - | - |

**Returns**: `return`


##### getDynamicUserWhere(userIds: List<Long>, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userIds | List<Long> | - | - |
| columnName | String | - | - |

**Returns**: `String`


##### format(%s: "and) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | "and | - | - |

**Returns**: `return`


##### getTotalCount(aggregateReportResults: List<AggregateReportResult>) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aggregateReportResults | List<AggregateReportResult> | - | - |

**Returns**: `Long`


##### getApplicableSubjectWheres(startDate: String, endDate: String, subjectTypeIds: List<Long>, locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| subjectTypeIds | List<Long> | - | - |
| locationIds | List<Long> | - | - |

**Returns**: `String`


##### in(unknown: %s) → subject_type_id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `subject_type_id`


##### in(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### getApplicableEnrolmentWheres(startDate: String, endDate: String, programIds: List<Long>, locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| programIds | List<Long> | - | - |
| locationIds | List<Long> | - | - |

**Returns**: `String`


##### in(unknown: %s) → program_id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `program_id`


##### in(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### getApplicableEncounterWheres(startDate: String, endDate: String, encounterTypeIds: List<Long>, locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| encounterTypeIds | List<Long> | - | - |
| locationIds | List<Long> | - | - |

**Returns**: `String`


##### in(unknown: %s) → encounter_type_id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `encounter_type_id`


##### in(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`


##### getSubjectJoins(locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |

**Returns**: `String`


##### getEnrolmentOrEncounterJoins(locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |

**Returns**: `String`


##### getProgramEncounterJoins(locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |

**Returns**: `String`




## Functions

### ReportService(avniReportRepository: AvniReportRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| avniReportRepository | AvniReportRepository | - | - |

**Returns**: `public`



### allRegistrations(startDate: String, endDate: String, subjectTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| subjectTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### allEnrolments(startDate: String, endDate: String, programIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| programIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### completedVisits(startDate: String, endDate: String, encounterTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| encounterTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### dailyActivities(startDate: String, endDate: String, subjectTypeIds: List<Long>, programIds: List<Long>, encounterTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| subjectTypeIds | List<Long> | - | - |
| programIds | List<Long> | - | - |
| encounterTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`



### DateTime() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### cancelledVisits(startDate: String, endDate: String, encounterTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| encounterTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### onTimeVisits(startDate: String, endDate: String, encounterTypeIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| encounterTypeIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### programExits(startDate: String, endDate: String, programIds: List<Long>, lowestLocationIds: List<Long>) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| programIds | List<Long> | - | - |
| lowestLocationIds | List<Long> | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### getDateDynamicWhere(startDate: String, endDate: String, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| columnName | String | - | - |

**Returns**: `String`



### format(%s::date: "and, unknown: columnName, unknown: startDate, unknown: endDate) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s::date | "and | - | - |
| unknown | columnName | - | - |
| unknown | startDate | - | - |
| unknown | endDate | - | - |

**Returns**: `return`



### getDynamicUserWhere(userIds: List<Long>, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userIds | List<Long> | - | - |
| columnName | String | - | - |

**Returns**: `String`



### format(%s: "and) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | "and | - | - |

**Returns**: `return`



### getTotalCount(aggregateReportResults: List<AggregateReportResult>) → Long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aggregateReportResults | List<AggregateReportResult> | - | - |

**Returns**: `Long`



### getApplicableSubjectWheres(startDate: String, endDate: String, subjectTypeIds: List<Long>, locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| subjectTypeIds | List<Long> | - | - |
| locationIds | List<Long> | - | - |

**Returns**: `String`



### in(unknown: %s) → subject_type_id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `subject_type_id`



### in(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### getApplicableEnrolmentWheres(startDate: String, endDate: String, programIds: List<Long>, locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| programIds | List<Long> | - | - |
| locationIds | List<Long> | - | - |

**Returns**: `String`



### in(unknown: %s) → program_id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `program_id`



### in(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### getApplicableEncounterWheres(startDate: String, endDate: String, encounterTypeIds: List<Long>, locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| encounterTypeIds | List<Long> | - | - |
| locationIds | List<Long> | - | - |

**Returns**: `String`



### in(unknown: %s) → encounter_type_id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `encounter_type_id`



### in(unknown: %s) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | %s | - | - |

**Returns**: `id`



### getSubjectJoins(locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |

**Returns**: `String`



### getEnrolmentOrEncounterJoins(locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |

**Returns**: `String`



### getProgramEncounterJoins(locationIds: List<Long>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |

**Returns**: `String`


