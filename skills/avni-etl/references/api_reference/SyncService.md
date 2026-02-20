# API Reference: SyncService.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/service/SyncService.java`

---

## Classes

### SyncService

**Inherits from**: (none)

#### Methods

##### SyncService(entityRepository: EntityRepository, entitySyncStatusRepository: EntitySyncStatusRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityRepository | EntityRepository | - | - |
| entitySyncStatusRepository | EntitySyncStatusRepository | - | - |

**Returns**: `public`


##### sync(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`


##### migrateTable(tableMetadata: TableMetadata, syncStatus: SchemaDataSyncStatus, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| syncStatus | SchemaDataSyncStatus | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`




## Functions

### SyncService(entityRepository: EntityRepository, entitySyncStatusRepository: EntitySyncStatusRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityRepository | EntityRepository | - | - |
| entitySyncStatusRepository | EntitySyncStatusRepository | - | - |

**Returns**: `public`



### sync(organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `void`



### migrateTable(tableMetadata: TableMetadata, syncStatus: SchemaDataSyncStatus, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| syncStatus | SchemaDataSyncStatus | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


