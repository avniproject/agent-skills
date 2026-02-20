# API Reference: MediaSearchQueryBuilder.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sql/MediaSearchQueryBuilder.java`

---

## Classes

### MediaSearchQueryBuilder

**Inherits from**: (none)

#### Methods

##### MediaSearchQueryBuilder() → public

**Returns**: `public`


##### ST(unknown: searchSqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchSqlTemplate | - | - |

**Returns**: `new`


##### ST(unknown: countSqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | countSqlTemplate | - | - |

**Returns**: `new`


##### withMediaSearchRequest(request: MediaSearchRequest) → MediaSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | MediaSearchRequest | - | - |

**Returns**: `MediaSearchQueryBuilder`


##### withSearchConceptFilters(conceptFilters: List<ConceptFilterSearch>) → MediaSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptFilters | List<ConceptFilterSearch> | - | - |

**Returns**: `MediaSearchQueryBuilder`


##### addParameters(request: MediaSearchRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | MediaSearchRequest | - | - |

**Returns**: `void`


##### getConceptNames(imageConcepts: List<ConceptDTO>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| imageConcepts | List<ConceptDTO> | - | - |

**Returns**: `List<String>`


##### withPage(page: Page) → MediaSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| page | Page | - | - |

**Returns**: `MediaSearchQueryBuilder`


##### allWithoutAnyLimitOrOffset() → MediaSearchQueryBuilder

**Returns**: `MediaSearchQueryBuilder`


##### build() → Query

**Returns**: `Query`


##### Query(unknown: str, unknown: parameters) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | str | - | - |
| unknown | parameters | - | - |

**Returns**: `new`


##### buildCountQuery() → Query

**Returns**: `Query`


##### Query(unknown: str, unknown: parameters) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | str | - | - |
| unknown | parameters | - | - |

**Returns**: `new`


##### addParameter(key: String, value: List) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | String | - | - |
| value | List | - | - |

**Returns**: `void`


##### addParameter(key: String, value: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | String | - | - |
| value | Object | - | - |

**Returns**: `void`


##### addDefaultParameters() → void

**Returns**: `void`




## Functions

### MediaSearchQueryBuilder() → public

**Returns**: `public`



### ST(unknown: searchSqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | searchSqlTemplate | - | - |

**Returns**: `new`



### ST(unknown: countSqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | countSqlTemplate | - | - |

**Returns**: `new`



### withMediaSearchRequest(request: MediaSearchRequest) → MediaSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | MediaSearchRequest | - | - |

**Returns**: `MediaSearchQueryBuilder`



### withSearchConceptFilters(conceptFilters: List<ConceptFilterSearch>) → MediaSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptFilters | List<ConceptFilterSearch> | - | - |

**Returns**: `MediaSearchQueryBuilder`



### addParameters(request: MediaSearchRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | MediaSearchRequest | - | - |

**Returns**: `void`



### getConceptNames(imageConcepts: List<ConceptDTO>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| imageConcepts | List<ConceptDTO> | - | - |

**Returns**: `List<String>`



### withPage(page: Page) → MediaSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| page | Page | - | - |

**Returns**: `MediaSearchQueryBuilder`



### allWithoutAnyLimitOrOffset() → MediaSearchQueryBuilder

**Returns**: `MediaSearchQueryBuilder`



### build() → Query

**Returns**: `Query`



### Query(unknown: str, unknown: parameters) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | str | - | - |
| unknown | parameters | - | - |

**Returns**: `new`



### buildCountQuery() → Query

**Returns**: `Query`



### Query(unknown: str, unknown: parameters) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | str | - | - |
| unknown | parameters | - | - |

**Returns**: `new`



### addParameter(key: String, value: List) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | String | - | - |
| value | List | - | - |

**Returns**: `void`



### addParameter(key: String, value: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | String | - | - |
| value | Object | - | - |

**Returns**: `void`



### addDefaultParameters() → void

**Returns**: `void`


