# API Reference: OperatingIndividualScopeAwareRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/OperatingIndividualScopeAwareRepository.java`

---

## Functions

### getSpecification(syncParameters: SyncParameters) → Specification

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification`



### syncDisabledSpecification() → Specification<T>

**Returns**: `Specification<T>`



### getSyncResultsAsSlice(syncParameters: SyncParameters) → Slice<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Slice<T>`



### findAllAsSlice(unknown: specification, unknown: syncParameters.getPageable() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | specification | - | - |
| unknown | syncParameters.getPageable( | - | - |

**Returns**: `return`



### getSyncResults(syncParameters: SyncParameters) → Page<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Page<T>`



### findAll(unknown: specification, unknown: syncParameters.getPageable() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | specification | - | - |
| unknown | syncParameters.getPageable( | - | - |

**Returns**: `return`



### isEntityChanged(syncParameters: SyncParameters) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `boolean`



### getAuditSpecification(syncParameters: SyncParameters) → Specification<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification<T>`



### syncTypeIdSpecification(typeId: Long) → Specification<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| typeId | Long | - | - |

**Returns**: `Specification<T>`



### syncTypeIdSpecification(uuid: String, syncEntityName: SyncEntityName) → Specification<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `Specification<T>`



### syncEntityChangedAuditSpecification(syncParameters: SyncParameters) → Specification<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification<T>`



### syncStrategySpecification(syncParameters: SyncParameters) → Specification<A>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |

**Returns**: `Specification<A>`



### addSyncStrategyPredicates(syncParameters: SyncParameters, cb: CriteriaBuilder, predicates: List<Predicate>, unknown: From<A, from: B>, query: CriteriaQuery<?>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncParameters | SyncParameters | - | - |
| cb | CriteriaBuilder | - | - |
| predicates | List<Predicate> | - | - |
| unknown | From<A | - | - |
| from | B> | - | - |
| query | CriteriaQuery<?> | - | - |

**Returns**: `void`



### addSyncAttributeConceptPredicate(cb: CriteriaBuilder, predicates: List<Predicate>, unknown: From<A, from: B>, syncParameters: SyncParameters, syncConcept1Column: String, syncConcept2Column: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cb | CriteriaBuilder | - | - |
| predicates | List<Predicate> | - | - |
| unknown | From<A | - | - |
| from | B> | - | - |
| syncParameters | SyncParameters | - | - |
| syncConcept1Column | String | - | - |
| syncConcept2Column | String | - | - |

**Returns**: `void`



### addPredicate(cb: CriteriaBuilder, predicates: List<Predicate>, unknown: From<A, from: B>, conceptValues: List<String>, syncAttributeColumn: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cb | CriteriaBuilder | - | - |
| predicates | List<Predicate> | - | - |
| unknown | From<A | - | - |
| from | B> | - | - |
| conceptValues | List<String> | - | - |
| syncAttributeColumn | String | - | - |

**Returns**: `void`



### saveEntity(entity: S) → S

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | S | - | - |

**Returns**: `S`



### save(unknown: entity) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entity | - | - |

**Returns**: `return`



### ConstraintViolationExceptionAcrossOrganisations(ID:: String.format("Entity=>, %s: UUID:, unknown: Type:%s, unknown: User:%s, %s": Msg:, unknown: entity.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ID: | String.format("Entity=> | - | - |
| %s | UUID: | - | - |
| unknown | Type:%s | - | - |
| unknown | User:%s | - | - |
| %s" | Msg: | - | - |
| unknown | entity.getId( | - | - |

**Returns**: `new`


