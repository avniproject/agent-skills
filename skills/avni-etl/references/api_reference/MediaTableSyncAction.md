# API Reference: MediaTableSyncAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/MediaTableSyncAction.java`

---

## Classes

### MediaTableSyncAction

**Inherits from**: EntitySyncAction

#### Methods

##### MediaTableSyncAction(jdbcTemplate: JdbcTemplate, metadataRepository: AvniMetadataRepository, mediaService: MediaService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| metadataRepository | AvniMetadataRepository | - | - |
| mediaService | MediaService | - | - |

**Returns**: `public`


##### doesntSupport(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`


##### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


##### insertData(mediaTableMetadata: TableMetadata, tableMetadata: TableMetadata, mediaColumn: ColumnMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, version: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableMetadata | TableMetadata | - | - |
| mediaColumn | ColumnMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| version | int | - | - |

**Returns**: `void`


##### syncNewerRows(mediaTableMetadata: TableMetadata, tableMetadata: TableMetadata, mediaColumn: ColumnMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, version: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableMetadata | TableMetadata | - | - |
| mediaColumn | ColumnMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| version | int | - | - |

**Returns**: `void`


##### ST(unknown: sqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sqlTemplate | - | - |

**Returns**: `new`


##### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`


##### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`


##### deleteDuplicateRows(lastSyncTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastSyncTime | Date | - | - |

**Returns**: `void`


##### ST(unknown: deleteDuplicateMediaSql) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | deleteDuplicateMediaSql | - | - |

**Returns**: `new`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### subjectTypeTableName(subjectTypeName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `String`


##### TableNameGenerator() → new

**Returns**: `new`


##### wrapStringValue(parameter: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parameter | String | - | - |

**Returns**: `String`


##### equalsButNotBothNull(a: Object, b: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | Object | - | - |
| b | Object | - | - |

**Returns**: `boolean`




## Functions

### MediaTableSyncAction(jdbcTemplate: JdbcTemplate, metadataRepository: AvniMetadataRepository, mediaService: MediaService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| metadataRepository | AvniMetadataRepository | - | - |
| mediaService | MediaService | - | - |

**Returns**: `public`



### doesntSupport(tableMetadata: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `boolean`



### perform(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`



### insertData(mediaTableMetadata: TableMetadata, tableMetadata: TableMetadata, mediaColumn: ColumnMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, version: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableMetadata | TableMetadata | - | - |
| mediaColumn | ColumnMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| version | int | - | - |

**Returns**: `void`



### syncNewerRows(mediaTableMetadata: TableMetadata, tableMetadata: TableMetadata, mediaColumn: ColumnMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, version: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableMetadata | TableMetadata | - | - |
| mediaColumn | ColumnMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| version | int | - | - |

**Returns**: `void`



### ST(unknown: sqlTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sqlTemplate | - | - |

**Returns**: `new`



### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`



### SimpleDateFormat(unknown: "yyyy-MM-dd'T'HH:mm:ss.SSS") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "yyyy-MM-dd'T'HH:mm:ss.SSS" | - | - |

**Returns**: `new`



### deleteDuplicateRows(lastSyncTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastSyncTime | Date | - | - |

**Returns**: `void`



### ST(unknown: deleteDuplicateMediaSql) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | deleteDuplicateMediaSql | - | - |

**Returns**: `new`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### subjectTypeTableName(subjectTypeName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `String`



### TableNameGenerator() → new

**Returns**: `new`



### wrapStringValue(parameter: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parameter | String | - | - |

**Returns**: `String`



### equalsButNotBothNull(a: Object, b: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | Object | - | - |
| b | Object | - | - |

**Returns**: `boolean`


