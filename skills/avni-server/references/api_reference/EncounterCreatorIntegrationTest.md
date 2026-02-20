# API Reference: EncounterCreatorIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/importer/batch/csv/writer/EncounterCreatorIntegrationTest.java`

---

## Classes

### EncounterCreatorIntegrationTest

**Inherits from**: BaseCSVImportTest

#### Methods

##### header(unknown: EncounterHeadersCreator.ID, unknown: EncounterHeadersCreator.SUBJECT_ID, unknown: EncounterHeadersCreator.ENCOUNTER_TYPE, unknown: EncounterHeadersCreator.EARLIEST_VISIT_DATE, unknown: EncounterHeadersCreator.MAX_VISIT_DATE) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ID | - | - |
| unknown | EncounterHeadersCreator.SUBJECT_ID | - | - |
| unknown | EncounterHeadersCreator.ENCOUNTER_TYPE | - | - |
| unknown | EncounterHeadersCreator.EARLIEST_VISIT_DATE | - | - |
| unknown | EncounterHeadersCreator.MAX_VISIT_DATE | - | - |

**Returns**: `return`


##### header(unknown: EncounterHeadersCreator.ID, unknown: EncounterHeadersCreator.SUBJECT_ID, unknown: EncounterHeadersCreator.ENCOUNTER_TYPE, unknown: EncounterHeadersCreator.VISIT_DATE, unknown: EncounterHeadersCreator.ENCOUNTER_COORDINATES, Select: "\"Single, Select: "\"Multi, Concept\"": "\"Numeric) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ID | - | - |
| unknown | EncounterHeadersCreator.SUBJECT_ID | - | - |
| unknown | EncounterHeadersCreator.ENCOUNTER_TYPE | - | - |
| unknown | EncounterHeadersCreator.VISIT_DATE | - | - |
| unknown | EncounterHeadersCreator.ENCOUNTER_COORDINATES | - | - |
| Select | "\"Single | - | - |
| Select | "\"Multi | - | - |
| Concept\"" | "\"Numeric | - | - |

**Returns**: `return`


##### dataRow(unknown: "ENC-001", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-001" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`


##### dataRow(unknown: "ENC-001", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-001" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`


##### dataRow(unknown: "ENC-001", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-001" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`


##### dataRow(unknown: "ENC-002", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-002" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`


##### dataRow(unknown: "ENC-001", unknown: "SUB-ABC", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-001" | - | - |
| unknown | "SUB-ABC" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`


##### dataRow(unknown: "ENC-002", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-002" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`


##### dataRow(unknown: "ENC-004", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-004" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`


##### dataRow(unknown: "ENC-005", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-005" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`


##### setUp() → void

**Returns**: `void`


##### SubjectTypeBuilder() → new

**Returns**: `new`


##### EncounterTypeBuilder() → new

**Returns**: `new`


##### SubjectBuilder() → new

**Returns**: `new`


##### testScheduleVisit_Failure_ForUploadVisitData() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testUploadVisit_Failure_ForScheduleVisitData() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testScheduleVisit_Success() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testScheduleVisitInFuture_Success() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testUploadVisit_Success() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testUploadVisit_FailsWithFutureDate() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testScheduleVisit_FailsWithMaxDateBeforeEarliestDate() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testUploadVisit_FailsWithInvalidConcepts() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testDuplicateEncounter_Fails() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testScheduleVisit_FailsWithSubjectNotFound() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### testUploadVisit_FailsWithDuplicateId() → void

**Returns**: `void`


##### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`


##### Row(unknown: headers, unknown: duplicateDataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | duplicateDataRow | - | - |

**Returns**: `new`




## Functions

### header(unknown: EncounterHeadersCreator.ID, unknown: EncounterHeadersCreator.SUBJECT_ID, unknown: EncounterHeadersCreator.ENCOUNTER_TYPE, unknown: EncounterHeadersCreator.EARLIEST_VISIT_DATE, unknown: EncounterHeadersCreator.MAX_VISIT_DATE) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ID | - | - |
| unknown | EncounterHeadersCreator.SUBJECT_ID | - | - |
| unknown | EncounterHeadersCreator.ENCOUNTER_TYPE | - | - |
| unknown | EncounterHeadersCreator.EARLIEST_VISIT_DATE | - | - |
| unknown | EncounterHeadersCreator.MAX_VISIT_DATE | - | - |

**Returns**: `return`



### header(unknown: EncounterHeadersCreator.ID, unknown: EncounterHeadersCreator.SUBJECT_ID, unknown: EncounterHeadersCreator.ENCOUNTER_TYPE, unknown: EncounterHeadersCreator.VISIT_DATE, unknown: EncounterHeadersCreator.ENCOUNTER_COORDINATES, Select: "\"Single, Select: "\"Multi, Concept\"": "\"Numeric) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ID | - | - |
| unknown | EncounterHeadersCreator.SUBJECT_ID | - | - |
| unknown | EncounterHeadersCreator.ENCOUNTER_TYPE | - | - |
| unknown | EncounterHeadersCreator.VISIT_DATE | - | - |
| unknown | EncounterHeadersCreator.ENCOUNTER_COORDINATES | - | - |
| Select | "\"Single | - | - |
| Select | "\"Multi | - | - |
| Concept\"" | "\"Numeric | - | - |

**Returns**: `return`



### dataRow(unknown: "ENC-001", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-001" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`



### dataRow(unknown: "ENC-001", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-001" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`



### dataRow(unknown: "ENC-001", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-001" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`



### dataRow(unknown: "ENC-002", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-002" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`



### dataRow(unknown: "ENC-001", unknown: "SUB-ABC", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-001" | - | - |
| unknown | "SUB-ABC" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`



### dataRow(unknown: "ENC-002", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-002" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`



### dataRow(unknown: "ENC-004", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-004" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`



### dataRow(unknown: "ENC-005", unknown: "SUB-001", unknown: encounterType.getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ENC-005" | - | - |
| unknown | "SUB-001" | - | - |
| unknown | encounterType.getName( | - | - |

**Returns**: `return`



### setUp() → void

**Returns**: `void`



### SubjectTypeBuilder() → new

**Returns**: `new`



### EncounterTypeBuilder() → new

**Returns**: `new`



### SubjectBuilder() → new

**Returns**: `new`



### testScheduleVisit_Failure_ForUploadVisitData() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testUploadVisit_Failure_ForScheduleVisitData() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testScheduleVisit_Success() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testScheduleVisitInFuture_Success() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testUploadVisit_Success() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testUploadVisit_FailsWithFutureDate() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testScheduleVisit_FailsWithMaxDateBeforeEarliestDate() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testUploadVisit_FailsWithInvalidConcepts() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testDuplicateEncounter_Fails() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testScheduleVisit_FailsWithSubjectNotFound() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### testUploadVisit_FailsWithDuplicateId() → void

**Returns**: `void`



### Row(unknown: headers, unknown: dataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | dataRow | - | - |

**Returns**: `new`



### Row(unknown: headers, unknown: duplicateDataRow) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | duplicateDataRow | - | - |

**Returns**: `new`


