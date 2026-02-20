# API Reference: PostETLConfig.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/PostETLConfig.java`

---

## Classes

### PostETLConfig

**Inherits from**: (none)

#### Methods

##### getDdl() → List<DDLConfig>

**Returns**: `List<DDLConfig>`


##### setDdl(ddl: List<DDLConfig>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ddl | List<DDLConfig> | - | - |

**Returns**: `void`


##### getDml() → List<DMLConfig>

**Returns**: `List<DMLConfig>`


##### setDml(dml: List<DMLConfig>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dml | List<DMLConfig> | - | - |

**Returns**: `void`


##### getOrder() → int

**Returns**: `int`


##### setOrder(order: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | int | - | - |

**Returns**: `void`


##### getTable() → String

**Returns**: `String`


##### setTable(table: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | String | - | - |

**Returns**: `void`


##### getSql() → String

**Returns**: `String`


##### setSql(sql: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sql | String | - | - |

**Returns**: `void`


##### getExistsCheck() → String

**Returns**: `String`


##### setExistsCheck(existsCheck: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existsCheck | String | - | - |

**Returns**: `void`


##### getOrder() → int

**Returns**: `int`


##### setOrder(order: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | int | - | - |

**Returns**: `void`


##### getTable() → String

**Returns**: `String`


##### setTable(table: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | String | - | - |

**Returns**: `void`


##### getSqls() → List<DMLSourceConfig>

**Returns**: `List<DMLSourceConfig>`


##### setSqls(sqls: List<DMLSourceConfig>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sqls | List<DMLSourceConfig> | - | - |

**Returns**: `void`


##### getOrder() → int

**Returns**: `int`


##### setOrder(order: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | int | - | - |

**Returns**: `void`


##### getSourceTableName() → String

**Returns**: `String`


##### setSourceTableName(sourceTableName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceTableName | String | - | - |

**Returns**: `void`


##### getInsertSql() → String

**Returns**: `String`


##### setInsertSql(insertSql: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| insertSql | String | - | - |

**Returns**: `void`


##### getUpdateSqls() → List<String>

**Returns**: `List<String>`


##### setUpdateSqls(updateSqls: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| updateSqls | List<String> | - | - |

**Returns**: `void`


##### getSqlParams() → List<String>

**Returns**: `List<String>`


##### setSqlParams(sqlParams: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sqlParams | List<String> | - | - |

**Returns**: `void`




### DDLConfig

**Inherits from**: (none)

#### Methods

##### getOrder() → int

**Returns**: `int`


##### setOrder(order: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | int | - | - |

**Returns**: `void`


##### getTable() → String

**Returns**: `String`


##### setTable(table: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | String | - | - |

**Returns**: `void`


##### getSql() → String

**Returns**: `String`


##### setSql(sql: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sql | String | - | - |

**Returns**: `void`


##### getExistsCheck() → String

**Returns**: `String`


##### setExistsCheck(existsCheck: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existsCheck | String | - | - |

**Returns**: `void`




### DMLConfig

**Inherits from**: (none)

#### Methods

##### getOrder() → int

**Returns**: `int`


##### setOrder(order: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | int | - | - |

**Returns**: `void`


##### getTable() → String

**Returns**: `String`


##### setTable(table: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | String | - | - |

**Returns**: `void`


##### getSqls() → List<DMLSourceConfig>

**Returns**: `List<DMLSourceConfig>`


##### setSqls(sqls: List<DMLSourceConfig>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sqls | List<DMLSourceConfig> | - | - |

**Returns**: `void`




### DMLSourceConfig

**Inherits from**: (none)

#### Methods

##### getOrder() → int

**Returns**: `int`


##### setOrder(order: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | int | - | - |

**Returns**: `void`


##### getSourceTableName() → String

**Returns**: `String`


##### setSourceTableName(sourceTableName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceTableName | String | - | - |

**Returns**: `void`


##### getInsertSql() → String

**Returns**: `String`


##### setInsertSql(insertSql: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| insertSql | String | - | - |

**Returns**: `void`


##### getUpdateSqls() → List<String>

**Returns**: `List<String>`


##### setUpdateSqls(updateSqls: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| updateSqls | List<String> | - | - |

**Returns**: `void`


##### getSqlParams() → List<String>

**Returns**: `List<String>`


##### setSqlParams(sqlParams: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sqlParams | List<String> | - | - |

**Returns**: `void`




## Functions

### getDdl() → List<DDLConfig>

**Returns**: `List<DDLConfig>`



### setDdl(ddl: List<DDLConfig>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ddl | List<DDLConfig> | - | - |

**Returns**: `void`



### getDml() → List<DMLConfig>

**Returns**: `List<DMLConfig>`



### setDml(dml: List<DMLConfig>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dml | List<DMLConfig> | - | - |

**Returns**: `void`



### getOrder() → int

**Returns**: `int`



### setOrder(order: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | int | - | - |

**Returns**: `void`



### getTable() → String

**Returns**: `String`



### setTable(table: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | String | - | - |

**Returns**: `void`



### getSql() → String

**Returns**: `String`



### setSql(sql: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sql | String | - | - |

**Returns**: `void`



### getExistsCheck() → String

**Returns**: `String`



### setExistsCheck(existsCheck: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existsCheck | String | - | - |

**Returns**: `void`



### getOrder() → int

**Returns**: `int`



### setOrder(order: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | int | - | - |

**Returns**: `void`



### getTable() → String

**Returns**: `String`



### setTable(table: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| table | String | - | - |

**Returns**: `void`



### getSqls() → List<DMLSourceConfig>

**Returns**: `List<DMLSourceConfig>`



### setSqls(sqls: List<DMLSourceConfig>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sqls | List<DMLSourceConfig> | - | - |

**Returns**: `void`



### getOrder() → int

**Returns**: `int`



### setOrder(order: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | int | - | - |

**Returns**: `void`



### getSourceTableName() → String

**Returns**: `String`



### setSourceTableName(sourceTableName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sourceTableName | String | - | - |

**Returns**: `void`



### getInsertSql() → String

**Returns**: `String`



### setInsertSql(insertSql: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| insertSql | String | - | - |

**Returns**: `void`



### getUpdateSqls() → List<String>

**Returns**: `List<String>`



### setUpdateSqls(updateSqls: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| updateSqls | List<String> | - | - |

**Returns**: `void`



### getSqlParams() → List<String>

**Returns**: `List<String>`



### setSqlParams(sqlParams: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sqlParams | List<String> | - | - |

**Returns**: `void`


