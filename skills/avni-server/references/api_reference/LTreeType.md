# API Reference: LTreeType.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/ltree/LTreeType.java`

---

## Functions

### returnedClass() → Class

**Returns**: `Class`



### getSqlType() → int

**Returns**: `int`



### equals(o: String, o1: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | String | - | - |
| o1 | String | - | - |

**Returns**: `boolean`



### hashCode(o: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | String | - | - |

**Returns**: `int`



### nullSafeGet(rs: ResultSet, position: int, session: SharedSessionContractImplementor, owner: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |
| position | int | - | - |
| session | SharedSessionContractImplementor | - | - |
| owner | Object | - | - |

**Returns**: `String`



### nullSafeSet(st: PreparedStatement, value: String, index: int, session: SharedSessionContractImplementor) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| st | PreparedStatement | - | - |
| value | String | - | - |
| index | int | - | - |
| session | SharedSessionContractImplementor | - | - |

**Returns**: `void`



### deepCopy(o: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | String | - | - |

**Returns**: `String`



### disassemble(o: String) → Serializable

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | String | - | - |

**Returns**: `Serializable`



### isMutable() → boolean

**Returns**: `boolean`



### replace(detached: String, managed: String, owner: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| detached | String | - | - |
| managed | String | - | - |
| owner | Object | - | - |

**Returns**: `String`



### deepCopy(unknown: detached) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | detached | - | - |

**Returns**: `return`



### getDefaultSqlLength(dialect: Dialect, jdbcType: JdbcType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dialect | Dialect | - | - |
| jdbcType | JdbcType | - | - |

**Returns**: `long`



### getDefaultSqlPrecision(dialect: Dialect, jdbcType: JdbcType) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dialect | Dialect | - | - |
| jdbcType | JdbcType | - | - |

**Returns**: `int`



### getDefaultSqlScale(dialect: Dialect, jdbcType: JdbcType) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dialect | Dialect | - | - |
| jdbcType | JdbcType | - | - |

**Returns**: `int`



### getJdbcType(typeConfiguration: TypeConfiguration) → JdbcType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| typeConfiguration | TypeConfiguration | - | - |

**Returns**: `JdbcType`



### getValueConverter() → BasicValueConverter<String, Object>

**Returns**: `BasicValueConverter<String, Object>`



### assemble(serializable: Serializable, o: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| serializable | Serializable | - | - |
| o | Object | - | - |

**Returns**: `String`


