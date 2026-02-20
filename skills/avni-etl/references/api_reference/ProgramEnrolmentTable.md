# API Reference: ProgramEnrolmentTable.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/rowMappers/tableMappers/ProgramEnrolmentTable.java`

---

## Classes

### ProgramEnrolmentTable

**Inherits from**: Table

#### Methods

##### name(unknown: Map<String, tableDetails: Object>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `String`


##### generateTableName(unknown: "ProgramEnrolment", unknown: null, unknown: tableDetails, unknown: "subject_type_name", unknown: "program_name") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ProgramEnrolment" | - | - |
| unknown | null | - | - |
| unknown | tableDetails | - | - |
| unknown | "subject_type_name" | - | - |
| unknown | "program_name" | - | - |

**Returns**: `return`


##### columns() → List<Column>

**Returns**: `List<Column>`


##### Columns() → new

**Returns**: `new`


##### Column(unknown: "individual_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "individual_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "address_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "address_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "enrolment_date_time", unknown: Column.Type.timestampWithTimezone, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "enrolment_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "program_exit_date_time", unknown: Column.Type.timestampWithTimezone, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "program_exit_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "enrolment_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "enrolment_location" | - | - |
| unknown | Column.Type.point | - | - |

**Returns**: `new`


##### Column(unknown: "exit_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "exit_location" | - | - |
| unknown | Column.Type.point | - | - |

**Returns**: `new`


##### Column(unknown: "legacy_id", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "legacy_id" | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`


##### Column(unknown: "latest_approval_status", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "latest_approval_status" | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`




## Functions

### name(unknown: Map<String, tableDetails: Object>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `String`



### generateTableName(unknown: "ProgramEnrolment", unknown: null, unknown: tableDetails, unknown: "subject_type_name", unknown: "program_name") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "ProgramEnrolment" | - | - |
| unknown | null | - | - |
| unknown | tableDetails | - | - |
| unknown | "subject_type_name" | - | - |
| unknown | "program_name" | - | - |

**Returns**: `return`



### columns() → List<Column>

**Returns**: `List<Column>`



### Columns() → new

**Returns**: `new`



### Column(unknown: "individual_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "individual_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "address_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "address_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "enrolment_date_time", unknown: Column.Type.timestampWithTimezone, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "enrolment_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "program_exit_date_time", unknown: Column.Type.timestampWithTimezone, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "program_exit_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "enrolment_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "enrolment_location" | - | - |
| unknown | Column.Type.point | - | - |

**Returns**: `new`



### Column(unknown: "exit_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "exit_location" | - | - |
| unknown | Column.Type.point | - | - |

**Returns**: `new`



### Column(unknown: "legacy_id", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "legacy_id" | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`



### Column(unknown: "latest_approval_status", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "latest_approval_status" | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`


