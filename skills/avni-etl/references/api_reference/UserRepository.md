# API Reference: UserRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/UserRepository.java`

---

## Classes

### UserRepository

**Inherits from**: (none)

#### Methods

##### UserRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### findByUsername(username: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `User`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### findByUuid(userUUID: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userUUID | String | - | - |

**Returns**: `User`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### setUser(rs: ResultSet) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `Object`


##### User(unknown: rs.getLong("id") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getLong("id" | - | - |

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`




## Functions

### UserRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### findByUsername(username: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `User`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### findByUuid(userUUID: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userUUID | String | - | - |

**Returns**: `User`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### setUser(rs: ResultSet) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rs | ResultSet | - | - |

**Returns**: `Object`



### User(unknown: rs.getLong("id") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rs.getLong("id" | - | - |

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


