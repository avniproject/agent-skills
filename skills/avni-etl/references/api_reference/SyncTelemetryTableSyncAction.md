# API Reference: SyncTelemetryTableSyncAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/SyncTelemetryTableSyncAction.java`

---

## Classes

### SyncTelemetryTableSyncAction

**Inherits from**: EntitySyncAction

#### Methods

##### SyncTelemetryTableSyncAction(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

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


##### insertData(syncTelemetryTableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncTelemetryTableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`


##### syncNewerRows(syncTelemetryTableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncTelemetryTableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`


##### ST(unknown: syncTelemetrySql) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncTelemetrySql | - | - |

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




## Functions

### SyncTelemetryTableSyncAction(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

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



### insertData(syncTelemetryTableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncTelemetryTableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`



### syncNewerRows(syncTelemetryTableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncTelemetryTableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`



### ST(unknown: syncTelemetrySql) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncTelemetrySql | - | - |

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


