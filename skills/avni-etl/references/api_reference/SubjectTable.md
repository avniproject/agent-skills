# API Reference: SubjectTable.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/rowMappers/tableMappers/SubjectTable.java`

---

## Classes

### SubjectTable

**Inherits from**: Table

#### Methods

##### name(unknown: Map<String, tableDetails: Object>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `String`


##### generateTableName(unknown: "Registration", unknown: null, unknown: tableDetails, unknown: "subject_type_name") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Registration" | - | - |
| unknown | null | - | - |
| unknown | tableDetails | - | - |
| unknown | "subject_type_name" | - | - |

**Returns**: `return`


##### columns() → List<Column>

**Returns**: `List<Column>`


##### Columns() → new

**Returns**: `new`


##### Column(unknown: "address_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "address_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "registration_date", unknown: Column.Type.date, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "registration_date" | - | - |
| unknown | Column.Type.date | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "first_name", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "first_name" | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`


##### Column(unknown: "last_name", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "last_name" | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`


##### Column(unknown: "registration_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "registration_location" | - | - |
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



### generateTableName(unknown: "Registration", unknown: null, unknown: tableDetails, unknown: "subject_type_name") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Registration" | - | - |
| unknown | null | - | - |
| unknown | tableDetails | - | - |
| unknown | "subject_type_name" | - | - |

**Returns**: `return`



### columns() → List<Column>

**Returns**: `List<Column>`



### Columns() → new

**Returns**: `new`



### Column(unknown: "address_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "address_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "registration_date", unknown: Column.Type.date, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "registration_date" | - | - |
| unknown | Column.Type.date | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "first_name", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "first_name" | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`



### Column(unknown: "last_name", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "last_name" | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`



### Column(unknown: "registration_location", unknown: Column.Type.point) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "registration_location" | - | - |
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


