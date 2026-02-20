# API Reference: BaseSubjectSearchQueryBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/search/BaseSubjectSearchQueryBuilder.java`

---

## Functions

### in(e.individual_id: select) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e.individual_id | select | - | - |

**Returns**: `id`



### BaseSubjectSearchQueryBuilder() → public

**Returns**: `public`



### buildUsingBaseQuery(baseQuery: String, groupByClause: String) → SqlQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| baseQuery | String | - | - |
| groupByClause | String | - | - |

**Returns**: `SqlQuery`



### StringBuilder() → new

**Returns**: `new`



### count(unknown: *) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | * | - | - |

**Returns**: `select`



### SqlQuery(unknown: queryWithCustomFields, unknown: parameters) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | queryWithCustomFields | - | - |
| unknown | parameters | - | - |

**Returns**: `new`



### addDefaultPaginationFilters() → void

**Returns**: `void`



### removePaginationFilters() → void

**Returns**: `void`



### withPaginationFilters(pageElement: PageDetails) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageElement | PageDetails | - | - |

**Returns**: `T`



### withCustomFields(subjectType: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | String | - | - |

**Returns**: `T`



### addCustomFields(concept: org.avni.server.domain.Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | org.avni.server.domain.Concept | - | - |

**Returns**: `void`



### getSearchFields(subjectTypeUUID: String, customSearchFields: List<CustomSearchFields>) → List<CustomSearchFields>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| customSearchFields | List<CustomSearchFields> | - | - |

**Returns**: `List<CustomSearchFields>`



### withNameFilter(name: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `T`



### StringBuffer() → new

**Returns**: `new`



### withAgeFilter(ageRange: IntegerRange) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ageRange | IntegerRange | - | - |

**Returns**: `T`



### withGenderFilter(genders: List<String>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genders | List<String> | - | - |

**Returns**: `T`



### withRegistrationDateFilter(registrationDateRange: DateRange) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| registrationDateRange | DateRange | - | - |

**Returns**: `T`



### withRangeFilter(unknown: registrationDateRange, unknown: "registrationDate", >=: "i.registration_date) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | registrationDateRange | - | - |
| unknown | "registrationDate" | - | - |
| >= | "i.registration_date | - | - |

**Returns**: `return`



### withIncludeVoidedFilter(includeVoided: Boolean) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| includeVoided | Boolean | - | - |

**Returns**: `T`



### withAddressIdsFilter(addressIds: List<Integer>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressIds | List<Integer> | - | - |

**Returns**: `T`



### withSearchAll(searchString: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchString | String | - | - |

**Returns**: `T`



### cast(as: penr.observations) → or

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| as | penr.observations | - | - |

**Returns**: `or`



### getFilterForSearchScope(searchScope: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| searchScope | String | - | - |

**Returns**: `String`



### generateWhereClause(filterWithDefaultConditions: String, moreConditions: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filterWithDefaultConditions | String | - | - |
| moreConditions | String | - | - |

**Returns**: `String`



### withConceptsFilter(concept: List<Concept>) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | List<Concept> | - | - |

**Returns**: `T`



### JSONB_TYPEOF(+: ") → when

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| + | " | - | - |

**Returns**: `when`



### BigDecimal(unknown: c.getMinValue() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | c.getMinValue( | - | - |

**Returns**: `new`



### BigDecimal(unknown: c.getMaxValue() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | c.getMaxValue( | - | - |

**Returns**: `new`



### BigDecimal(unknown: c.getMinValue() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | c.getMinValue( | - | - |

**Returns**: `new`



### withRangeFilter(rangeFilter: RangeFilter, parameterPrefix: String, minFilter: String, maxFilter: String, filter: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rangeFilter | RangeFilter | - | - |
| parameterPrefix | String | - | - |
| minFilter | String | - | - |
| maxFilter | String | - | - |
| filter | String | - | - |

**Returns**: `T`



### addParameter(name: String, value: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| value | Object | - | - |

**Returns**: `void`



### addWhereClauses(clause: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clause | String | - | - |

**Returns**: `void`



### removeWhereClause(clause: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clause | String | - | - |

**Returns**: `void`



### forCount() → T

**Returns**: `T`


