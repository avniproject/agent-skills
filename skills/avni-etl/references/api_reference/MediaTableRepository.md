# API Reference: MediaTableRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/MediaTableRepository.java`

---

## Classes

### MediaTableRepository

**Inherits from**: (none)

#### Methods

##### MediaTableRepository(jdbcTemplate: JdbcTemplate, mediaTableRepositoryService: MediaTableRepositoryService, schemaMetadataRepository: SchemaMetadataRepository) → Autowired

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| mediaTableRepositoryService | MediaTableRepositoryService | - | - |
| schemaMetadataRepository | SchemaMetadataRepository | - | - |

**Returns**: `Autowired`


##### determineConceptFilterTablesAndColumns(conceptFilters: List<ConceptFilter>) → List<ConceptFilterSearch>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptFilters | List<ConceptFilter> | - | - |

**Returns**: `List<ConceptFilterSearch>`


##### ConceptFilterSearch(unknown: table.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | table.getName( | - | - |

**Returns**: `new`


##### ConceptFilterSearch(unknown: tableName, unknown: columnName, unknown: combinedValues, unknown: firstFilter.getFrom() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tableName | - | - |
| unknown | columnName | - | - |
| unknown | combinedValues | - | - |
| unknown | firstFilter.getFrom( | - | - |

**Returns**: `new`


##### search(mediaSearchRequest: MediaSearchRequest, page: Page) → List<MediaDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |
| page | Page | - | - |

**Returns**: `List<MediaDTO>`


##### searchInternal(unknown: mediaSearchRequest, unknown: page, unknown: (rs, unknown: rowNum) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaSearchRequest | - | - |
| unknown | page | - | - |
| unknown | (rs | - | - |
| unknown | rowNum | - | - |

**Returns**: `return`


##### searchResultCount(mediaSearchRequest: MediaSearchRequest) → BigInteger

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |

**Returns**: `BigInteger`


##### MediaSearchQueryBuilder() → new

**Returns**: `new`


##### runInSchemaUserContext(unknown: () → return

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


##### searchInternal(mediaSearchRequest: MediaSearchRequest, page: Page, rowMapper: RowMapper<T>) → List<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |
| page | Page | - | - |
| rowMapper | RowMapper<T> | - | - |

**Returns**: `List<T>`


##### MediaSearchQueryBuilder() → new

**Returns**: `new`


##### runInSchemaUserContext(unknown: () → return

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


##### getImageData(mediaSearchRequest: MediaSearchRequest, page: Page) → List<ImageData>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |
| page | Page | - | - |

**Returns**: `List<ImageData>`


##### searchInternal(unknown: mediaSearchRequest, unknown: page, unknown: (rs, unknown: rowNum) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaSearchRequest | - | - |
| unknown | page | - | - |
| unknown | (rs | - | - |
| unknown | rowNum | - | - |

**Returns**: `return`


##### getAllMedia() → List<MediaCompactDTO>

**Returns**: `List<MediaCompactDTO>`


##### MediaSearchQueryBuilder() → new

**Returns**: `new`


##### runInSchemaUserContext(unknown: () → return

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




## Functions

### MediaTableRepository(jdbcTemplate: JdbcTemplate, mediaTableRepositoryService: MediaTableRepositoryService, schemaMetadataRepository: SchemaMetadataRepository) → Autowired

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| mediaTableRepositoryService | MediaTableRepositoryService | - | - |
| schemaMetadataRepository | SchemaMetadataRepository | - | - |

**Returns**: `Autowired`



### determineConceptFilterTablesAndColumns(conceptFilters: List<ConceptFilter>) → List<ConceptFilterSearch>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptFilters | List<ConceptFilter> | - | - |

**Returns**: `List<ConceptFilterSearch>`



### ConceptFilterSearch(unknown: table.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | table.getName( | - | - |

**Returns**: `new`



### ConceptFilterSearch(unknown: tableName, unknown: columnName, unknown: combinedValues, unknown: firstFilter.getFrom() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tableName | - | - |
| unknown | columnName | - | - |
| unknown | combinedValues | - | - |
| unknown | firstFilter.getFrom( | - | - |

**Returns**: `new`



### search(mediaSearchRequest: MediaSearchRequest, page: Page) → List<MediaDTO>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |
| page | Page | - | - |

**Returns**: `List<MediaDTO>`



### searchInternal(unknown: mediaSearchRequest, unknown: page, unknown: (rs, unknown: rowNum) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaSearchRequest | - | - |
| unknown | page | - | - |
| unknown | (rs | - | - |
| unknown | rowNum | - | - |

**Returns**: `return`



### searchResultCount(mediaSearchRequest: MediaSearchRequest) → BigInteger

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |

**Returns**: `BigInteger`



### MediaSearchQueryBuilder() → new

**Returns**: `new`



### runInSchemaUserContext(unknown: () → return

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



### searchInternal(mediaSearchRequest: MediaSearchRequest, page: Page, rowMapper: RowMapper<T>) → List<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |
| page | Page | - | - |
| rowMapper | RowMapper<T> | - | - |

**Returns**: `List<T>`



### MediaSearchQueryBuilder() → new

**Returns**: `new`



### runInSchemaUserContext(unknown: () → return

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



### getImageData(mediaSearchRequest: MediaSearchRequest, page: Page) → List<ImageData>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaSearchRequest | MediaSearchRequest | - | - |
| page | Page | - | - |

**Returns**: `List<ImageData>`



### searchInternal(unknown: mediaSearchRequest, unknown: page, unknown: (rs, unknown: rowNum) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | mediaSearchRequest | - | - |
| unknown | page | - | - |
| unknown | (rs | - | - |
| unknown | rowNum | - | - |

**Returns**: `return`



### getAllMedia() → List<MediaCompactDTO>

**Returns**: `List<MediaCompactDTO>`



### MediaSearchQueryBuilder() → new

**Returns**: `new`



### runInSchemaUserContext(unknown: () → return

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


