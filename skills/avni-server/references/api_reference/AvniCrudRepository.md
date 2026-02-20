# API Reference: AvniCrudRepository.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/AvniCrudRepository.java`

---

## Functions

### save(entity: S) → S

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | S | - | - |

**Returns**: `S`



### saveAll(entities: Iterable<S>) → Iterable<S>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | Iterable<S> | - | - |

**Returns**: `Iterable<S>`



### deleteById(id: ID) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | ID | - | - |

**Returns**: `void`



### delete(entity: T) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | T | - | - |

**Returns**: `void`



### deleteAll(extends: Iterable<?) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extends | Iterable<? | - | - |

**Returns**: `void`



### deleteAll() → void

**Returns**: `void`


