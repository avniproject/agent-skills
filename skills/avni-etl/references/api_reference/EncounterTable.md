# API Reference: EncounterTable.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/rowMappers/tableMappers/EncounterTable.java`

---

## Classes

### EncounterTable

**Inherits from**: Table

#### Methods

##### columns() → List<Column>

**Returns**: `List<Column>`


##### Columns() → new

**Returns**: `new`


##### Column(unknown: "name", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "name" | - | - |
| unknown | Column.Type.text | - | - |

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


##### Column(unknown: "earliest_visit_date_time", unknown: Column.Type.timestampWithTimezone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "earliest_visit_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |

**Returns**: `new`


##### Column(unknown: "max_visit_date_time", unknown: Column.Type.timestampWithTimezone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "max_visit_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |

**Returns**: `new`


##### Column(unknown: "encounter_date_time", unknown: Column.Type.timestampWithTimezone, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "encounter_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "encounter_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "encounter_location" | - | - |
| unknown | Column.Type.point | - | - |

**Returns**: `new`


##### Column(unknown: "cancel_date_time", unknown: Column.Type.timestampWithTimezone, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "cancel_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "cancel_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "cancel_location" | - | - |
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


##### Column(unknown: "filled_by_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "filled_by_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### name(unknown: Map<String, tableDetails: Object>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `String`


##### generateTableName(unknown: "Encounter", unknown: null, unknown: tableDetails, unknown: "subject_type_name", unknown: "encounter_type_name") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Encounter" | - | - |
| unknown | null | - | - |
| unknown | tableDetails | - | - |
| unknown | "subject_type_name" | - | - |
| unknown | "encounter_type_name" | - | - |

**Returns**: `return`




## Functions

### columns() → List<Column>

**Returns**: `List<Column>`



### Columns() → new

**Returns**: `new`



### Column(unknown: "name", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "name" | - | - |
| unknown | Column.Type.text | - | - |

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



### Column(unknown: "earliest_visit_date_time", unknown: Column.Type.timestampWithTimezone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "earliest_visit_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |

**Returns**: `new`



### Column(unknown: "max_visit_date_time", unknown: Column.Type.timestampWithTimezone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "max_visit_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |

**Returns**: `new`



### Column(unknown: "encounter_date_time", unknown: Column.Type.timestampWithTimezone, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "encounter_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "encounter_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "encounter_location" | - | - |
| unknown | Column.Type.point | - | - |

**Returns**: `new`



### Column(unknown: "cancel_date_time", unknown: Column.Type.timestampWithTimezone, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "cancel_date_time" | - | - |
| unknown | Column.Type.timestampWithTimezone | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "cancel_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "cancel_location" | - | - |
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



### Column(unknown: "filled_by_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "filled_by_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### name(unknown: Map<String, tableDetails: Object>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `String`



### generateTableName(unknown: "Encounter", unknown: null, unknown: tableDetails, unknown: "subject_type_name", unknown: "encounter_type_name") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Encounter" | - | - |
| unknown | null | - | - |
| unknown | tableDetails | - | - |
| unknown | "subject_type_name" | - | - |
| unknown | "encounter_type_name" | - | - |

**Returns**: `return`


