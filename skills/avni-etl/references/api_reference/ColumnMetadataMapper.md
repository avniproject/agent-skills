# API Reference: ColumnMetadataMapper.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/rowMappers/ColumnMetadataMapper.java`

---

## Functions

### create(unknown: Map<String, column: Object>) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| column | Object> | - | - |

**Returns**: `ColumnMetadata`



### ColumnMetadata(unknown: null, unknown: conceptName, unknown: (Integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | conceptName | - | - |
| unknown | (Integer | - | - |

**Returns**: `new`



### ColumnMetadata(unknown: null, unknown: (String) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | (String | - | - |

**Returns**: `new`



### createSyncColumnMetadata(unknown: Map<String, column: Object>, columnType: Column.ColumnType) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| column | Object> | - | - |
| columnType | Column.ColumnType | - | - |

**Returns**: `ColumnMetadata`



### ColumnMetadata(unknown: null, unknown: (String) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | (String | - | - |

**Returns**: `new`



### mapRow(rs: ResultSet, rowNum: int) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| rowNum | int | - | - |

**Returns**: `ColumnMetadata`



### ColumnMetadata(unknown: rs.getInt("id") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getInt("id" | - | - |

**Returns**: `new`



### Column(unknown: rs.getString("name") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getString("name" | - | - |

**Returns**: `new`


