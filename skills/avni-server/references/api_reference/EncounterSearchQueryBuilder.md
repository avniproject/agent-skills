# API Reference: EncounterSearchQueryBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/search/EncounterSearchQueryBuilder.java`

---

## Classes

### EncounterSearchQueryBuilder

**Inherits from**: (none)

#### Methods

##### EncounterSearchQueryBuilder() → public

**Returns**: `public`


##### build() → SqlQuery

**Returns**: `SqlQuery`


##### StringBuffer() → new

**Returns**: `new`


##### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`


##### SqlQuery(unknown: finalQuery, unknown: parameters) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | finalQuery | - | - |
| unknown | parameters | - | - |

**Returns**: `new`


##### addDefaultPaginationFilters() → void

**Returns**: `void`


##### removePaginationFilters() → void

**Returns**: `void`


##### withRequest(encounterSearchRequest: EncounterSearchRequest) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterSearchRequest | EncounterSearchRequest | - | - |

**Returns**: `EncounterSearchQueryBuilder`


##### withPaginationFilters(unknown: encounterSearchRequest.getPageable() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterSearchRequest.getPageable( | - | - |

**Returns**: `return`


##### withPaginationFilters(pageElement: Pageable) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageElement | Pageable | - | - |

**Returns**: `EncounterSearchQueryBuilder`


##### withLastModifiedDateTimeBetween(from: Date, to: Date) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| from | Date | - | - |
| to | Date | - | - |

**Returns**: `EncounterSearchQueryBuilder`


##### withEncounterType(encounterType: String) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | String | - | - |

**Returns**: `EncounterSearchQueryBuilder`


##### withSubjectUuid(subjectUuid: String) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectUuid | String | - | - |

**Returns**: `EncounterSearchQueryBuilder`


##### withConceptsMap(unknown: Map<Concept, conceptsMap: String>) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<Concept | - | - |
| conceptsMap | String> | - | - |

**Returns**: `EncounterSearchQueryBuilder`


##### withJoin(joinClause: String) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| joinClause | String | - | - |

**Returns**: `EncounterSearchQueryBuilder`


##### addParameter(name: String, value: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| value | Object | - | - |

**Returns**: `void`


##### forCount() → EncounterSearchQueryBuilder

**Returns**: `EncounterSearchQueryBuilder`




## Functions

### EncounterSearchQueryBuilder() → public

**Returns**: `public`



### build() → SqlQuery

**Returns**: `SqlQuery`



### StringBuffer() → new

**Returns**: `new`



### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`



### SqlQuery(unknown: finalQuery, unknown: parameters) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | finalQuery | - | - |
| unknown | parameters | - | - |

**Returns**: `new`



### addDefaultPaginationFilters() → void

**Returns**: `void`



### removePaginationFilters() → void

**Returns**: `void`



### withRequest(encounterSearchRequest: EncounterSearchRequest) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterSearchRequest | EncounterSearchRequest | - | - |

**Returns**: `EncounterSearchQueryBuilder`



### withPaginationFilters(unknown: encounterSearchRequest.getPageable() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterSearchRequest.getPageable( | - | - |

**Returns**: `return`



### withPaginationFilters(pageElement: Pageable) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageElement | Pageable | - | - |

**Returns**: `EncounterSearchQueryBuilder`



### withLastModifiedDateTimeBetween(from: Date, to: Date) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| from | Date | - | - |
| to | Date | - | - |

**Returns**: `EncounterSearchQueryBuilder`



### withEncounterType(encounterType: String) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | String | - | - |

**Returns**: `EncounterSearchQueryBuilder`



### withSubjectUuid(subjectUuid: String) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectUuid | String | - | - |

**Returns**: `EncounterSearchQueryBuilder`



### withConceptsMap(unknown: Map<Concept, conceptsMap: String>) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<Concept | - | - |
| conceptsMap | String> | - | - |

**Returns**: `EncounterSearchQueryBuilder`



### withJoin(joinClause: String) → EncounterSearchQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| joinClause | String | - | - |

**Returns**: `EncounterSearchQueryBuilder`



### addParameter(name: String, value: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| value | Object | - | - |

**Returns**: `void`



### forCount() → EncounterSearchQueryBuilder

**Returns**: `EncounterSearchQueryBuilder`


