# API Reference: EntitySyncStatusContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/EntitySyncStatusContract.java`

---

## Classes

### EntitySyncStatusContract

**Inherits from**: (none)

#### Methods

##### DateTime(unknown: "1900-01-01T00:00:00.000Z") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "1900-01-01T00:00:00.000Z" | - | - |

**Returns**: `new`


##### createForComparison(entityName: String, entityTypeUuid: String) → EntitySyncStatusContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityName | String | - | - |
| entityTypeUuid | String | - | - |

**Returns**: `EntitySyncStatusContract`


##### EntitySyncStatusContract() → new

**Returns**: `new`


##### createForEntityWithSubType(syncEntityName: SyncEntityName, entityTypeUuid: String) → EntitySyncStatusContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncEntityName | SyncEntityName | - | - |
| entityTypeUuid | String | - | - |

**Returns**: `EntitySyncStatusContract`


##### EntitySyncStatusContract() → new

**Returns**: `new`


##### createForEntityWithoutSubType(syncEntityName: SyncEntityName) → EntitySyncStatusContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncEntityName | SyncEntityName | - | - |

**Returns**: `EntitySyncStatusContract`


##### getUuid() → String

**Returns**: `String`


##### setUuid(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`


##### getEntityName() → String

**Returns**: `String`


##### setEntityName(entityName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityName | String | - | - |

**Returns**: `void`


##### getLoadedSince() → DateTime

**Returns**: `DateTime`


##### setLoadedSince(loadedSince: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| loadedSince | DateTime | - | - |

**Returns**: `void`


##### getEntityTypeUuid() → String

**Returns**: `String`


##### setEntityTypeUuid(entityTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityTypeUuid | String | - | - |

**Returns**: `void`


##### matchesEntity(syncableItem: SyncableItem) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncableItem | SyncableItem | - | - |

**Returns**: `boolean`


##### isApprovalStatusType() → boolean

**Returns**: `boolean`


##### isEncounterOrEnrolmentType() → boolean

**Returns**: `boolean`


##### mightHaveToBeIgnoredDuringSync() → boolean

**Returns**: `boolean`


##### isApprovalStatusType() → return

**Returns**: `return`


##### toString() → String

**Returns**: `String`


##### equals(o: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Object | - | - |

**Returns**: `boolean`


##### hashCode() → int

**Returns**: `int`




## Functions

### DateTime(unknown: "1900-01-01T00:00:00.000Z") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "1900-01-01T00:00:00.000Z" | - | - |

**Returns**: `new`



### createForComparison(entityName: String, entityTypeUuid: String) → EntitySyncStatusContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityName | String | - | - |
| entityTypeUuid | String | - | - |

**Returns**: `EntitySyncStatusContract`



### EntitySyncStatusContract() → new

**Returns**: `new`



### createForEntityWithSubType(syncEntityName: SyncEntityName, entityTypeUuid: String) → EntitySyncStatusContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncEntityName | SyncEntityName | - | - |
| entityTypeUuid | String | - | - |

**Returns**: `EntitySyncStatusContract`



### EntitySyncStatusContract() → new

**Returns**: `new`



### createForEntityWithoutSubType(syncEntityName: SyncEntityName) → EntitySyncStatusContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncEntityName | SyncEntityName | - | - |

**Returns**: `EntitySyncStatusContract`



### getUuid() → String

**Returns**: `String`



### setUuid(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`



### getEntityName() → String

**Returns**: `String`



### setEntityName(entityName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityName | String | - | - |

**Returns**: `void`



### getLoadedSince() → DateTime

**Returns**: `DateTime`



### setLoadedSince(loadedSince: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| loadedSince | DateTime | - | - |

**Returns**: `void`



### getEntityTypeUuid() → String

**Returns**: `String`



### setEntityTypeUuid(entityTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityTypeUuid | String | - | - |

**Returns**: `void`



### matchesEntity(syncableItem: SyncableItem) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncableItem | SyncableItem | - | - |

**Returns**: `boolean`



### isApprovalStatusType() → boolean

**Returns**: `boolean`



### isEncounterOrEnrolmentType() → boolean

**Returns**: `boolean`



### mightHaveToBeIgnoredDuringSync() → boolean

**Returns**: `boolean`



### isApprovalStatusType() → return

**Returns**: `return`



### toString() → String

**Returns**: `String`



### equals(o: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Object | - | - |

**Returns**: `boolean`



### hashCode() → int

**Returns**: `int`


