# API Reference: CustomCHSJpaRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/CustomCHSJpaRepository.java`

---

## Functions

### findAllAsSlice(specification: Specification<T>, pageable: Pageable) → Slice<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| specification | Specification<T> | - | - |
| pageable | Pageable | - | - |

**Returns**: `Slice<T>`



### save(entity: S) → S

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | S | - | - |

**Returns**: `S`



### delete(entity: T) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | T | - | - |

**Returns**: `void`



### deleteAll() → void

**Returns**: `void`



### saveAll(entities: Iterable<S>) → List<S>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | Iterable<S> | - | - |

**Returns**: `List<S>`



### flush() → void

**Returns**: `void`



### saveAndFlush(entity: S) → S

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | S | - | - |

**Returns**: `S`



### deleteInBatch(entities: Iterable<T>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | Iterable<T> | - | - |

**Returns**: `void`



### deleteAllInBatch() → void

**Returns**: `void`


