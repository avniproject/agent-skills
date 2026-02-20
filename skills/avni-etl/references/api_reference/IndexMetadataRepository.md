# API Reference: IndexMetadataRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/IndexMetadataRepository.java`

---

## Classes

### IndexMetadataRepository

**Inherits from**: (none)

#### Methods

##### IndexMetadataRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### save(tableMetadata: TableMetadata) → List<IndexMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `List<IndexMetadata>`


##### insert(tableId: Integer, indexMetadata: IndexMetadata) → IndexMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| indexMetadata | IndexMetadata | - | - |

**Returns**: `IndexMetadata`


##### SimpleJdbcInsert(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### addParameters(tableId: Integer, indexMetadata: IndexMetadata) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| indexMetadata | IndexMetadata | - | - |

**Returns**: `Map<String, Object>`




## Functions

### IndexMetadataRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### save(tableMetadata: TableMetadata) → List<IndexMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `List<IndexMetadata>`



### insert(tableId: Integer, indexMetadata: IndexMetadata) → IndexMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| indexMetadata | IndexMetadata | - | - |

**Returns**: `IndexMetadata`



### SimpleJdbcInsert(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### addParameters(tableId: Integer, indexMetadata: IndexMetadata) → Map<String, Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableId | Integer | - | - |
| indexMetadata | IndexMetadata | - | - |

**Returns**: `Map<String, Object>`


