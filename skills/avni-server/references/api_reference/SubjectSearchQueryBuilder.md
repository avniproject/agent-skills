# API Reference: SubjectSearchQueryBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/search/SubjectSearchQueryBuilder.java`

---

## Functions

### build(subjectType: SubjectType) → SqlQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SqlQuery`



### withSubjectSearchFilter(request: SubjectSearchRequest, subjectType: SubjectType) → SubjectSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | SubjectSearchRequest | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `SubjectSearchQueryBuilder`



### withSubjectTypeFilter(subjectType: SubjectType) → SubjectSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `SubjectSearchQueryBuilder`



### withEncounterDateFilter(encounterDateRange: DateRange) → SubjectSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDateRange | DateRange | - | - |

**Returns**: `SubjectSearchQueryBuilder`



### withRangeFilter(unknown: encounterDateRange, unknown: "encounterDate", >=: "e.encounter_date_time) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterDateRange | - | - |
| unknown | "encounterDate" | - | - |
| >= | "e.encounter_date_time | - | - |

**Returns**: `return`



### withProgramEncounterDateFilter(dateRange: DateRange) → SubjectSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateRange | DateRange | - | - |

**Returns**: `SubjectSearchQueryBuilder`



### withRangeFilter(unknown: dateRange, unknown: "programEncounterDate", >=: "pe.encounter_date_time) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dateRange | - | - |
| unknown | "programEncounterDate" | - | - |
| >= | "pe.encounter_date_time | - | - |

**Returns**: `return`



### withProgramEnrolmentDateFilter(dateRange: DateRange) → SubjectSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateRange | DateRange | - | - |

**Returns**: `SubjectSearchQueryBuilder`



### withRangeFilter(unknown: dateRange, unknown: "programEnrolmentDate", >=: "penr.enrolment_date_time) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dateRange | - | - |
| unknown | "programEnrolmentDate" | - | - |
| >= | "penr.enrolment_date_time | - | - |

**Returns**: `return`



### getSQLResultQuery(searchRequest: SubjectSearchRequest, subjectType: SubjectType) → SqlQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | SubjectSearchRequest | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `SqlQuery`



### getSQLCountQuery(searchRequest: SubjectSearchRequest, subjectType: SubjectType) → SqlQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchRequest | SubjectSearchRequest | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `SqlQuery`


