# API Reference: CHSRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/CHSRepository.java`

---

## Functions

### findByUuid(uuid: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `T`



### findAll() → List<T>

**Returns**: `List<T>`



### findAllByIsVoidedFalse() → List<T>

**Returns**: `List<T>`



### findEntity(id: Long) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `T`



### findById(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`



### findEntity(uuid: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `T`



### findByUuid(unknown: uuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | uuid | - | - |

**Returns**: `return`



### jsonContains(jsonb: Path<?>, pattern: String, builder: CriteriaBuilder) → Predicate

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonb | Path<?> | - | - |
| pattern | String | - | - |
| builder | CriteriaBuilder | - | - |

**Returns**: `Predicate`



### jsonExtractPathText(jsonb: Path<?>, key: String, builder: CriteriaBuilder) → Expression<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonb | Path<?> | - | - |
| key | String | - | - |
| builder | CriteriaBuilder | - | - |

**Returns**: `Expression<String>`



### convertToDate(path: Path<?>, cb: CriteriaBuilder) → Expression<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| path | Path<?> | - | - |
| cb | CriteriaBuilder | - | - |

**Returns**: `Expression<String>`



### lastModifiedBetween(lastModifiedDateTime: Date, now: Date) → Specification

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |
| now | Date | - | - |

**Returns**: `Specification`



### withConceptValues(unknown: Map<Concept, concepts: String>, observationField: String) → Specification

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<Concept | - | - |
| concepts | String> | - | - |
| observationField | String | - | - |

**Returns**: `Specification`



### voidEntity(id: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `void`



### existsByLastModifiedDateTimeGreaterThan(lastModifiedDateTime: Date) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |

**Returns**: `boolean`



### existsByLastModifiedDateTimeGreaterThan(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### existsByLastModifiedDateTimeGreaterThan(==: lastModifiedDateTime) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| == | lastModifiedDateTime | - | - |

**Returns**: `return`


