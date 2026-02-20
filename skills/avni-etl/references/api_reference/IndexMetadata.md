# API Reference: IndexMetadata.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/metadata/IndexMetadata.java`

---

## Classes

### IndexMetadata

**Inherits from**: Model

#### Methods

##### IndexMetadata(column: ColumnMetadata) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| column | ColumnMetadata | - | - |

**Returns**: `public`


##### IndexMetadata(id: Integer, name: String, column: ColumnMetadata) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| name | String | - | - |
| column | ColumnMetadata | - | - |

**Returns**: `public`


##### makeIndexName() → String

**Returns**: `String`


##### getName() → String

**Returns**: `String`


##### matches(indexMetadata: IndexMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadata | IndexMetadata | - | - |

**Returns**: `boolean`


##### createIndex(tableName: String) → Diff

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | String | - | - |

**Returns**: `Diff`


##### AddIndex(unknown: name, unknown: tableName, unknown: column.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | tableName | - | - |
| unknown | column.getName( | - | - |

**Returns**: `new`


##### getColumnId() → Integer

**Returns**: `Integer`


##### getColumnName() → String

**Returns**: `String`


##### mergeWith(oldIndexMetadata: IndexMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oldIndexMetadata | IndexMetadata | - | - |

**Returns**: `void`




## Functions

### IndexMetadata(column: ColumnMetadata) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| column | ColumnMetadata | - | - |

**Returns**: `public`



### IndexMetadata(id: Integer, name: String, column: ColumnMetadata) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| name | String | - | - |
| column | ColumnMetadata | - | - |

**Returns**: `public`



### makeIndexName() → String

**Returns**: `String`



### getName() → String

**Returns**: `String`



### matches(indexMetadata: IndexMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadata | IndexMetadata | - | - |

**Returns**: `boolean`



### createIndex(tableName: String) → Diff

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableName | String | - | - |

**Returns**: `Diff`



### AddIndex(unknown: name, unknown: tableName, unknown: column.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | tableName | - | - |
| unknown | column.getName( | - | - |

**Returns**: `new`



### getColumnId() → Integer

**Returns**: `Integer`



### getColumnName() → String

**Returns**: `String`



### mergeWith(oldIndexMetadata: IndexMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oldIndexMetadata | IndexMetadata | - | - |

**Returns**: `void`


