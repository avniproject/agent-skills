# API Reference: GroupToMemberTable.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/rowMappers/tableMappers/GroupToMemberTable.java`

---

## Classes

### GroupToMemberTable

**Inherits from**: Table

#### Methods

##### name(unknown: Map<String, tableDetails: Object>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `String`


##### generateTableName(unknown: "Registration", unknown: null, unknown: tableDetails, unknown: "group_subject_type_name", unknown: "member_subject_type_name") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Registration" | - | - |
| unknown | null | - | - |
| unknown | tableDetails | - | - |
| unknown | "group_subject_type_name" | - | - |
| unknown | "member_subject_type_name" | - | - |

**Returns**: `return`


##### columns() → List<Column>

**Returns**: `List<Column>`


##### Columns() → new

**Returns**: `new`


##### Column(unknown: "group_subject_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "group_subject_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "member_subject_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "member_subject_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### Column(unknown: "role", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "role" | - | - |
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



### generateTableName(unknown: "Registration", unknown: null, unknown: tableDetails, unknown: "group_subject_type_name", unknown: "member_subject_type_name") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "Registration" | - | - |
| unknown | null | - | - |
| unknown | tableDetails | - | - |
| unknown | "group_subject_type_name" | - | - |
| unknown | "member_subject_type_name" | - | - |

**Returns**: `return`



### columns() → List<Column>

**Returns**: `List<Column>`



### Columns() → new

**Returns**: `new`



### Column(unknown: "group_subject_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "group_subject_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "member_subject_id", unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "member_subject_id" | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### Column(unknown: "role", unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "role" | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`


