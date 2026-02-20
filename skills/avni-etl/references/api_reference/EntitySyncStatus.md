# API Reference: EntitySyncStatus.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/syncstatus/EntitySyncStatus.java`

---

## Classes

### EntitySyncStatus

**Inherits from**: Model

#### Methods

##### EntitySyncStatus(id: Integer, tableMetadataId: Integer, lastSyncTime: Date, syncStatus: Status, dbUser: String, schemaName: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| tableMetadataId | Integer | - | - |
| lastSyncTime | Date | - | - |
| syncStatus | Status | - | - |
| dbUser | String | - | - |
| schemaName | String | - | - |

**Returns**: `public`


##### EntitySyncStatus(tableMetadataId: Integer, lastSyncTime: Date, syncStatus: Status, dbUser: String, schemaName: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadataId | Integer | - | - |
| lastSyncTime | Date | - | - |
| syncStatus | Status | - | - |
| dbUser | String | - | - |
| schemaName | String | - | - |

**Returns**: `public`


##### startSync() → EntitySyncStatus

**Returns**: `EntitySyncStatus`


##### markSuccess(asOfDate: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| asOfDate | Date | - | - |

**Returns**: `void`


##### markFailure() → void

**Returns**: `void`


##### getTableMetadataId() → Integer

**Returns**: `Integer`


##### getSyncStatus() → Status

**Returns**: `Status`


##### setSyncStatus(syncStatus: Status) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncStatus | Status | - | - |

**Returns**: `void`


##### setTableMetadataId(tableMetadataId: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadataId | Integer | - | - |

**Returns**: `void`


##### getLastSyncTime() → Date

**Returns**: `Date`


##### setLastSyncTime(lastSyncTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastSyncTime | Date | - | - |

**Returns**: `void`


##### getDbUser() → String

**Returns**: `String`


##### getSchemaName() → String

**Returns**: `String`




## Functions

### EntitySyncStatus(id: Integer, tableMetadataId: Integer, lastSyncTime: Date, syncStatus: Status, dbUser: String, schemaName: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| tableMetadataId | Integer | - | - |
| lastSyncTime | Date | - | - |
| syncStatus | Status | - | - |
| dbUser | String | - | - |
| schemaName | String | - | - |

**Returns**: `public`



### EntitySyncStatus(tableMetadataId: Integer, lastSyncTime: Date, syncStatus: Status, dbUser: String, schemaName: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadataId | Integer | - | - |
| lastSyncTime | Date | - | - |
| syncStatus | Status | - | - |
| dbUser | String | - | - |
| schemaName | String | - | - |

**Returns**: `public`



### startSync() → EntitySyncStatus

**Returns**: `EntitySyncStatus`



### markSuccess(asOfDate: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| asOfDate | Date | - | - |

**Returns**: `void`



### markFailure() → void

**Returns**: `void`



### getTableMetadataId() → Integer

**Returns**: `Integer`



### getSyncStatus() → Status

**Returns**: `Status`



### setSyncStatus(syncStatus: Status) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncStatus | Status | - | - |

**Returns**: `void`



### setTableMetadataId(tableMetadataId: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadataId | Integer | - | - |

**Returns**: `void`



### getLastSyncTime() → Date

**Returns**: `Date`



### setLastSyncTime(lastSyncTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastSyncTime | Date | - | - |

**Returns**: `void`



### getDbUser() → String

**Returns**: `String`



### getSchemaName() → String

**Returns**: `String`


