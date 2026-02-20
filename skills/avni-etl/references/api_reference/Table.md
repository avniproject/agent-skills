# API Reference: Table.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/rowMappers/tableMappers/Table.java`

---

## Classes

### Table

**Inherits from**: (none)

#### Methods

##### name(unknown: Map<String, tableDetails: Object>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `String`


##### columns() → List<Column>

**Returns**: `List<Column>`


##### generateTableName(tableType: String, suffix: String, unknown: Map<String, tableDetails: Object>, partKeys: String...) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableType | String | - | - |
| suffix | String | - | - |
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |
| partKeys | String... | - | - |

**Returns**: `String`


##### TableNameGenerator() → new

**Returns**: `new`




## Functions

### name(unknown: Map<String, tableDetails: Object>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |

**Returns**: `String`



### columns() → List<Column>

**Returns**: `List<Column>`



### generateTableName(tableType: String, suffix: String, unknown: Map<String, tableDetails: Object>, partKeys: String...) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableType | String | - | - |
| suffix | String | - | - |
| unknown | Map<String | - | - |
| tableDetails | Object> | - | - |
| partKeys | String... | - | - |

**Returns**: `String`



### TableNameGenerator() → new

**Returns**: `new`


