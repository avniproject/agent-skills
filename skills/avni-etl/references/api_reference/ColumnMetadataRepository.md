# API Reference: ColumnMetadataRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/ColumnMetadataRepository.java`

---

## Classes

### ColumnMetadataRepository

**Inherits from**: (none)

#### Methods

##### ColumnMetadataRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### saveColumns(tableMetadata: TableMetadata) → List<ColumnMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `List<ColumnMetadata>`


##### saveColumn(tableId: Integer, columnMetadata: ColumnMetadata) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `ColumnMetadata`


##### update(tableId: Integer, columnMetadata: ColumnMetadata) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `ColumnMetadata`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### insert(tableId: Integer, columnMetadata: ColumnMetadata) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `ColumnMetadata`


##### SimpleJdbcInsert(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### addParameters(tableId: Integer, columnMetadata: ColumnMetadata) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `Map<String, Object>`


##### findByName(name: String) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ColumnMetadata`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### ColumnMetadataMapper() → new

**Returns**: `new`


##### findByUuid(conceptUuid: String) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuid | String | - | - |

**Returns**: `ColumnMetadata`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### ColumnMetadataMapper() → new

**Returns**: `new`




## Functions

### ColumnMetadataRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### saveColumns(tableMetadata: TableMetadata) → List<ColumnMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `List<ColumnMetadata>`



### saveColumn(tableId: Integer, columnMetadata: ColumnMetadata) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `ColumnMetadata`



### update(tableId: Integer, columnMetadata: ColumnMetadata) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `ColumnMetadata`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### insert(tableId: Integer, columnMetadata: ColumnMetadata) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `ColumnMetadata`



### SimpleJdbcInsert(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### addParameters(tableId: Integer, columnMetadata: ColumnMetadata) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `Map<String, Object>`



### findByName(name: String) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `ColumnMetadata`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### ColumnMetadataMapper() → new

**Returns**: `new`



### findByUuid(conceptUuid: String) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuid | String | - | - |

**Returns**: `ColumnMetadata`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### ColumnMetadataMapper() → new

**Returns**: `new`


