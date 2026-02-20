# API Reference: JdbcContextWrapper.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/JdbcContextWrapper.java`

---

## Functions

### runInOrgContext(wrapper: JdbcContextWrapper<T>, jdbcTemplate: JdbcTemplate) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| wrapper | JdbcContextWrapper<T> | - | - |
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `T`



### runInSchemaUserContext(wrapper: JdbcContextWrapper<T>, jdbcTemplate: JdbcTemplate) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| wrapper | JdbcContextWrapper<T> | - | - |
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `T`



### execute() → T

**Returns**: `T`



### wrapInOrgContext(jdbcTemplate: JdbcTemplate) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `T`



### wrap(unknown: jdbcTemplate, unknown: dbUser) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |
| unknown | dbUser | - | - |

**Returns**: `return`



### wrapInSchemaContext(jdbcTemplate: JdbcTemplate) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `T`



### wrap(unknown: jdbcTemplate, unknown: dbUser) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |
| unknown | dbUser | - | - |

**Returns**: `return`



### wrap(jdbcTemplate: JdbcTemplate, dbUser: String) → T

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| dbUser | String | - | - |

**Returns**: `T`



### execute() → return

**Returns**: `return`


