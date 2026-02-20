# API Reference: BaseBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/builder/BaseBuilder.java`

---

## Functions

### BaseBuilder(existingEntity: T, newEntity: T) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingEntity | T | - | - |
| newEntity | T | - | - |

**Returns**: `public`



### withUUID(uuid: String) → K

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `K`



### set(key: String, val: Object, clazz: Class) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | String | - | - |
| val | Object | - | - |
| clazz | Class | - | - |

**Returns**: `void`



### set(setter: Consumer<P>, val: P) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| setter | Consumer<P> | - | - |
| val | P | - | - |

**Returns**: `void`



### get() → T

**Returns**: `T`



### build() → T

**Returns**: `T`


