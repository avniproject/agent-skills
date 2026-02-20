# API Reference: TransactionDataSyncHelper.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sql/TransactionDataSyncHelper.java`

---

## Classes

### TransactionDataSyncHelper

**Inherits from**: (none)

#### Methods

##### getConceptMapName(tableMetadata: TableMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `String`


##### getConceptMaps(tableMetadata: TableMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `String`


##### getListOfObservations(tableMetadata: TableMetadata) → StringBuffer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `StringBuffer`


##### StringBuffer() → new

**Returns**: `new`


##### wrapInQuotes(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`


##### wrapInSingleQuotes(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`


##### buildObservationSelection(tableMetadata: TableMetadata, obsColumnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| obsColumnName | String | - | - |

**Returns**: `String`




## Functions

### getConceptMapName(tableMetadata: TableMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `String`



### getConceptMaps(tableMetadata: TableMetadata) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `String`



### getListOfObservations(tableMetadata: TableMetadata) → StringBuffer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `StringBuffer`



### StringBuffer() → new

**Returns**: `new`



### wrapInQuotes(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`



### wrapInSingleQuotes(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`



### buildObservationSelection(tableMetadata: TableMetadata, obsColumnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| obsColumnName | String | - | - |

**Returns**: `String`


