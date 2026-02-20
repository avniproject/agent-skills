# API Reference: CustomJpaRepositoryImpl.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/CustomJpaRepositoryImpl.java`

---

## Functions

### CustomJpaRepositoryImpl(unknown: JpaEntityInformation<T, entityInformation: ?>, entityManager: EntityManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | JpaEntityInformation<T | - | - |
| entityInformation | ?> | - | - |
| entityManager | EntityManager | - | - |

**Returns**: `public`



### findAllAsSlice(specification: Specification<T>, pageable: Pageable) → Slice<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| specification | Specification<T> | - | - |
| pageable | Pageable | - | - |

**Returns**: `Slice<T>`



### deleteInBatch(entities: Iterable<T>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | Iterable<T> | - | - |

**Returns**: `void`



### readSlice(query: TypedQuery<T>, pageable: Pageable, specification: Specification<T>) → Slice<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | TypedQuery<T> | - | - |
| pageable | Pageable | - | - |
| specification | Specification<T> | - | - |

**Returns**: `Slice<T>`


