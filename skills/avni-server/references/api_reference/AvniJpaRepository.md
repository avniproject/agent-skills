# API Reference: AvniJpaRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/AvniJpaRepository.java`

---

## Functions

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


