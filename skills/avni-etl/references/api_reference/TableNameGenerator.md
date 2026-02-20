# API Reference: TableNameGenerator.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/rowMappers/TableNameGenerator.java`

---

## Classes

### TableNameGenerator

**Inherits from**: (none)

#### Methods

##### buildProperTableName(entities: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |

**Returns**: `String`


##### generateName(entities: List<String>, tableType: String, suffix: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| tableType | String | - | - |
| suffix | String | - | - |

**Returns**: `String`


##### getTrimmedTableName(entities: List<String>, tableType: String, suffix: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| tableType | String | - | - |
| suffix | String | - | - |

**Returns**: `String`


##### StringBuilder() → new

**Returns**: `new`


##### buildProperTableName(unknown: trimmedNameList) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | trimmedNameList | - | - |

**Returns**: `return`


##### getTrimmedName(entities: List<String>, sb: StringBuilder, trimmingList: List<Integer>, i: int, suffix: String) → StringBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| sb | StringBuilder | - | - |
| trimmingList | List<Integer> | - | - |
| i | int | - | - |
| suffix | String | - | - |

**Returns**: `StringBuilder`




## Functions

### buildProperTableName(entities: List<String>) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |

**Returns**: `String`



### generateName(entities: List<String>, tableType: String, suffix: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| tableType | String | - | - |
| suffix | String | - | - |

**Returns**: `String`



### getTrimmedTableName(entities: List<String>, tableType: String, suffix: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| tableType | String | - | - |
| suffix | String | - | - |

**Returns**: `String`



### StringBuilder() → new

**Returns**: `new`



### buildProperTableName(unknown: trimmedNameList) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | trimmedNameList | - | - |

**Returns**: `return`



### getTrimmedName(entities: List<String>, sb: StringBuilder, trimmingList: List<Integer>, i: int, suffix: String) → StringBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entities | List<String> | - | - |
| sb | StringBuilder | - | - |
| trimmingList | List<Integer> | - | - |
| i | int | - | - |
| suffix | String | - | - |

**Returns**: `StringBuilder`


