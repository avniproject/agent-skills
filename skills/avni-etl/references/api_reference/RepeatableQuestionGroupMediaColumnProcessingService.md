# API Reference: RepeatableQuestionGroupMediaColumnProcessingService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/RepeatableQuestionGroupMediaColumnProcessingService.java`

---

## Classes

### RepeatableQuestionGroupMediaColumnProcessingService

**Inherits from**: (none)

#### Methods

##### RepeatableQuestionGroupMediaColumnProcessingService(jdbcTemplate: JdbcTemplate, mediaService: MediaService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| mediaService | MediaService | - | - |

**Returns**: `public`


##### processMediaColumn(mediaTableMetadata: TableMetadata, tableData: TableMetadata, mediaColumn: ColumnMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableData | TableMetadata | - | - |
| mediaColumn | ColumnMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`


##### syncMediaFromRepeatableQuestionGroup(unknown: mediaTableMetadata, unknown: tableData, unknown: mediaColumn, unknown: lastSyncTime, unknown: dataSyncBoundaryTime) → column

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaTableMetadata | - | - |
| unknown | tableData | - | - |
| unknown | mediaColumn | - | - |
| unknown | lastSyncTime | - | - |
| unknown | dataSyncBoundaryTime | - | - |

**Returns**: `column`


##### syncMediaFromRepeatableQuestionGroup(mediaTableMetadata: TableMetadata, tableMetadata: TableMetadata, mediaColumn: ColumnMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableMetadata | TableMetadata | - | - |
| mediaColumn | ColumnMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`


##### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSSX") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSSX" | - | - |

**Returns**: `new`


##### ST(unknown: sqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sqlTemplate | - | - |

**Returns**: `new`


##### determineSubjectTableName(subjectTypeName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `String`


##### IllegalArgumentException(type: "Subject) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | "Subject | - | - |

**Returns**: `new`


##### SubjectTable() → new

**Returns**: `new`


##### determineParentTable(tableMetadata: TableMetadata) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `Map<String, Object>`


##### ProgramEncounterTable() → new

**Returns**: `new`


##### EncounterTable() → new

**Returns**: `new`


##### ProgramEnrolmentTable() → new

**Returns**: `new`


##### SubjectTable() → new

**Returns**: `new`


##### IllegalStateException(parent: "Unsupported) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | "Unsupported | - | - |

**Returns**: `new`


##### determineParentIdColumn(tableMetadata: TableMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `String`


##### IllegalArgumentException(parent: "Unknown) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | "Unknown | - | - |

**Returns**: `new`




## Functions

### RepeatableQuestionGroupMediaColumnProcessingService(jdbcTemplate: JdbcTemplate, mediaService: MediaService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| mediaService | MediaService | - | - |

**Returns**: `public`



### processMediaColumn(mediaTableMetadata: TableMetadata, tableData: TableMetadata, mediaColumn: ColumnMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableData | TableMetadata | - | - |
| mediaColumn | ColumnMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`



### syncMediaFromRepeatableQuestionGroup(unknown: mediaTableMetadata, unknown: tableData, unknown: mediaColumn, unknown: lastSyncTime, unknown: dataSyncBoundaryTime) → column

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaTableMetadata | - | - |
| unknown | tableData | - | - |
| unknown | mediaColumn | - | - |
| unknown | lastSyncTime | - | - |
| unknown | dataSyncBoundaryTime | - | - |

**Returns**: `column`



### syncMediaFromRepeatableQuestionGroup(mediaTableMetadata: TableMetadata, tableMetadata: TableMetadata, mediaColumn: ColumnMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableMetadata | TableMetadata | - | - |
| mediaColumn | ColumnMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`



### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSSX") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSSX" | - | - |

**Returns**: `new`



### ST(unknown: sqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sqlTemplate | - | - |

**Returns**: `new`



### determineSubjectTableName(subjectTypeName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `String`



### IllegalArgumentException(type: "Subject) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | "Subject | - | - |

**Returns**: `new`



### SubjectTable() → new

**Returns**: `new`



### determineParentTable(tableMetadata: TableMetadata) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `Map<String, Object>`



### ProgramEncounterTable() → new

**Returns**: `new`



### EncounterTable() → new

**Returns**: `new`



### ProgramEnrolmentTable() → new

**Returns**: `new`



### SubjectTable() → new

**Returns**: `new`



### IllegalStateException(parent: "Unsupported) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | "Unsupported | - | - |

**Returns**: `new`



### determineParentIdColumn(tableMetadata: TableMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `String`



### IllegalArgumentException(parent: "Unknown) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parent | "Unknown | - | - |

**Returns**: `new`


