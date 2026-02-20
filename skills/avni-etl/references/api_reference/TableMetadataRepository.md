# API Reference: TableMetadataRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/TableMetadataRepository.java`

---

## Classes

### TableMetadataRepository

**Inherits from**: (none)

#### Methods

##### TableMetadataRepository(jdbcTemplate: JdbcTemplate, columnMetadataRepository: ColumnMetadataRepository, indexMetadataRepository: IndexMetadataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| columnMetadataRepository | ColumnMetadataRepository | - | - |
| indexMetadataRepository | IndexMetadataRepository | - | - |

**Returns**: `public`


##### save(tableMetadata: TableMetadata) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `TableMetadata`


##### saveTable(tableMetadata: TableMetadata) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `TableMetadata`


##### update(tableMetadata: TableMetadata) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `TableMetadata`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### insert(tableMetadata: TableMetadata) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `TableMetadata`


##### SimpleJdbcInsert(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### addParameters(tableMetadata: TableMetadata) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `Map<String, Object>`


##### fetchByType(types: List<TableMetadata.Type>) → List<TableMetadataST>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| types | List<TableMetadata.Type> | - | - |

**Returns**: `List<TableMetadataST>`


##### IN(unknown: :types) → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :types | - | - |

**Returns**: `type`


##### runInOrgContext(unknown: () → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ( | - | - |

**Returns**: `return`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### TableMetadataST(unknown: rs.getString("name") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getString("name" | - | - |

**Returns**: `new`




## Functions

### TableMetadataRepository(jdbcTemplate: JdbcTemplate, columnMetadataRepository: ColumnMetadataRepository, indexMetadataRepository: IndexMetadataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| columnMetadataRepository | ColumnMetadataRepository | - | - |
| indexMetadataRepository | IndexMetadataRepository | - | - |

**Returns**: `public`



### save(tableMetadata: TableMetadata) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `TableMetadata`



### saveTable(tableMetadata: TableMetadata) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `TableMetadata`



### update(tableMetadata: TableMetadata) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `TableMetadata`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### insert(tableMetadata: TableMetadata) → TableMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `TableMetadata`



### SimpleJdbcInsert(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### addParameters(tableMetadata: TableMetadata) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `Map<String, Object>`



### fetchByType(types: List<TableMetadata.Type>) → List<TableMetadataST>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| types | List<TableMetadata.Type> | - | - |

**Returns**: `List<TableMetadataST>`



### IN(unknown: :types) → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :types | - | - |

**Returns**: `type`



### runInOrgContext(unknown: () → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ( | - | - |

**Returns**: `return`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### TableMetadataST(unknown: rs.getString("name") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getString("name" | - | - |

**Returns**: `new`


