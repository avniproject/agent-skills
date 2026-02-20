# API Reference: PointType.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/geo/PointType.java`

---

## Functions

### getSqlType() → int

**Returns**: `int`



### returnedClass() → Class

**Returns**: `Class`



### equals(o: Point, o1: Point) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Point | - | - |
| o1 | Point | - | - |

**Returns**: `boolean`



### nullSafeGet(rs: ResultSet, position: int, session: SharedSessionContractImplementor, owner: Object) → Point

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| position | int | - | - |
| session | SharedSessionContractImplementor | - | - |
| owner | Object | - | - |

**Returns**: `Point`



### Point(unknown: value.x, unknown: value.y) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | value.x | - | - |
| unknown | value.y | - | - |

**Returns**: `new`



### nullSafeSet(st: PreparedStatement, value: Point, index: int, session: SharedSessionContractImplementor) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| st | PreparedStatement | - | - |
| value | Point | - | - |
| index | int | - | - |
| session | SharedSessionContractImplementor | - | - |

**Returns**: `void`



### PGpoint(unknown: value.getX() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | value.getX( | - | - |

**Returns**: `new`



### deepCopy(o: Point) → Point

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Point | - | - |

**Returns**: `Point`



### IllegalArgumentException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### isMutable() → boolean

**Returns**: `boolean`



### hashCode(o: Point) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Point | - | - |

**Returns**: `int`



### disassemble(o: Point) → Serializable

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Point | - | - |

**Returns**: `Serializable`



### assemble(cached: Serializable, owner: Object) → Point

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cached | Serializable | - | - |
| owner | Object | - | - |

**Returns**: `Point`



### replace(original: Point, managed: Point, owner: Object) → Point

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| original | Point | - | - |
| managed | Point | - | - |
| owner | Object | - | - |

**Returns**: `Point`


