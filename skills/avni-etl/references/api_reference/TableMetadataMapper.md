# API Reference: TableMetadataMapper.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/rowMappers/TableMetadataMapper.java`

---

## Classes

### TableMetadataMapper

**Inherits from**: (none)

#### Methods

##### createColumnMetaData(unknown: Map<String, map: Object>) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | Object> | - | - |

**Returns**: `ColumnMetadata`


##### ColumnMetadata(unknown: (Integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Integer | - | - |

**Returns**: `new`


##### Column(unknown: (String) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (String | - | - |

**Returns**: `new`


##### createFromExistingSchemaMetaData(unknown: List<Map<String, columns: Object>>, unknown: List<Map<String, indices: Object>>) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | List<Map<String | - | - |
| columns | Object>> | - | - |
| unknown | List<Map<String | - | - |
| indices | Object>> | - | - |

**Returns**: `TableMetadata`


##### TableMetadata() → new

**Returns**: `new`


##### IndexMetadata(unknown: (Integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Integer | - | - |

**Returns**: `new`


##### create(unknown: List<Map<String, columns: Object>>) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | List<Map<String | - | - |
| columns | Object>> | - | - |

**Returns**: `TableMetadata`


##### TableMetadata() → new

**Returns**: `new`


##### ColumnMetadata(unknown: column, unknown: null, unknown: null, unknown: null, unknown: false) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | column | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | false | - | - |

**Returns**: `new`


##### ColumnMetadataMapper() → new

**Returns**: `new`


##### populateCommonColumns(tableMetadata: TableMetadata, unknown: Map<String, tableDetails: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `void`


##### getTableType(unknown: Map<String, tableDetails: Object>) → Type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `Type`


##### getTableStructure(type: TableMetadata.Type, unknown: Map<String, tableDetails: Object>) → Table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | TableMetadata.Type | - | - |
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `Table`


##### SubjectTable() → new

**Returns**: `new`


##### GroupToMemberTable() → new

**Returns**: `new`


##### PersonTable(unknown: (Boolean) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Boolean | - | - |

**Returns**: `new`


##### ProgramEnrolmentTable() → new

**Returns**: `new`


##### ProgramExitTable() → new

**Returns**: `new`


##### ProgramEncounterTable() → new

**Returns**: `new`


##### ProgramEncounterCancellationTable() → new

**Returns**: `new`


##### EncounterTable() → new

**Returns**: `new`


##### EncounterCancellationTable() → new

**Returns**: `new`


##### SubjectProgramEligibilityTable() → new

**Returns**: `new`


##### RuntimeException(create: "Cannot) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| create | "Cannot | - | - |

**Returns**: `new`




## Functions

### createColumnMetaData(unknown: Map<String, map: Object>) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | Object> | - | - |

**Returns**: `ColumnMetadata`



### ColumnMetadata(unknown: (Integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Integer | - | - |

**Returns**: `new`



### Column(unknown: (String) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (String | - | - |

**Returns**: `new`



### createFromExistingSchemaMetaData(unknown: List<Map<String, columns: Object>>, unknown: List<Map<String, indices: Object>>) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | List<Map<String | - | - |
| columns | Object>> | - | - |
| unknown | List<Map<String | - | - |
| indices | Object>> | - | - |

**Returns**: `TableMetadata`



### TableMetadata() → new

**Returns**: `new`



### IndexMetadata(unknown: (Integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Integer | - | - |

**Returns**: `new`



### create(unknown: List<Map<String, columns: Object>>) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | List<Map<String | - | - |
| columns | Object>> | - | - |

**Returns**: `TableMetadata`



### TableMetadata() → new

**Returns**: `new`



### ColumnMetadata(unknown: column, unknown: null, unknown: null, unknown: null, unknown: false) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | column | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | false | - | - |

**Returns**: `new`



### ColumnMetadataMapper() → new

**Returns**: `new`



### populateCommonColumns(tableMetadata: TableMetadata, unknown: Map<String, tableDetails: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `void`



### getTableType(unknown: Map<String, tableDetails: Object>) → Type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `Type`



### getTableStructure(type: TableMetadata.Type, unknown: Map<String, tableDetails: Object>) → Table

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | TableMetadata.Type | - | - |
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `Table`



### SubjectTable() → new

**Returns**: `new`



### GroupToMemberTable() → new

**Returns**: `new`



### PersonTable(unknown: (Boolean) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Boolean | - | - |

**Returns**: `new`



### ProgramEnrolmentTable() → new

**Returns**: `new`



### ProgramExitTable() → new

**Returns**: `new`



### ProgramEncounterTable() → new

**Returns**: `new`



### ProgramEncounterCancellationTable() → new

**Returns**: `new`



### EncounterTable() → new

**Returns**: `new`



### EncounterCancellationTable() → new

**Returns**: `new`



### SubjectProgramEligibilityTable() → new

**Returns**: `new`



### RuntimeException(create: "Cannot) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| create | "Cannot | - | - |

**Returns**: `new`


