# API Reference: Column.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/metadata/Column.java`

---

## Classes

### Column

**Inherits from**: (none)

#### Methods

##### Column(name: String, type: Type) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| type | Type | - | - |

**Returns**: `public`


##### Column(name: String, type: Type, columnType: ColumnType) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| type | Type | - | - |
| columnType | ColumnType | - | - |

**Returns**: `public`


##### getName() → String

**Returns**: `String`


##### getTruncatedName(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`


##### String(unknown: truncatedNameBytes) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | truncatedNameBytes | - | - |

**Returns**: `new`


##### getName(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`


##### isColumnNameTruncated(name: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `boolean`


##### getType() → Type

**Returns**: `Type`


##### isIndexed() → boolean

**Returns**: `boolean`


##### isSyncAttributeColumn() → boolean

**Returns**: `boolean`


##### toString() → String

**Returns**: `String`


##### getClonedColumn(name: String) → Column

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Column`


##### Column(unknown: name, unknown: this.type, unknown: this.columnType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | this.type | - | - |
| unknown | this.columnType | - | - |

**Returns**: `new`


##### typeString() → String

**Returns**: `String`


##### RuntimeException(is: "column_name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | "column_name | - | - |

**Returns**: `new`




## Functions

### Column(name: String, type: Type) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| type | Type | - | - |

**Returns**: `public`



### Column(name: String, type: Type, columnType: ColumnType) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| type | Type | - | - |
| columnType | ColumnType | - | - |

**Returns**: `public`



### getName() → String

**Returns**: `String`



### getTruncatedName(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`



### String(unknown: truncatedNameBytes) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | truncatedNameBytes | - | - |

**Returns**: `new`



### getName(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`



### isColumnNameTruncated(name: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `boolean`



### getType() → Type

**Returns**: `Type`



### isIndexed() → boolean

**Returns**: `boolean`



### isSyncAttributeColumn() → boolean

**Returns**: `boolean`



### toString() → String

**Returns**: `String`



### getClonedColumn(name: String) → Column

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `Column`



### Column(unknown: name, unknown: this.type, unknown: this.columnType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | this.type | - | - |
| unknown | this.columnType | - | - |

**Returns**: `new`



### typeString() → String

**Returns**: `String`



### RuntimeException(is: "column_name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | "column_name | - | - |

**Returns**: `new`


