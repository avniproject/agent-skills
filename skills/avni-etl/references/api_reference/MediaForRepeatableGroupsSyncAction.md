# API Reference: MediaForRepeatableGroupsSyncAction.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/MediaForRepeatableGroupsSyncAction.java`

---

## Classes

### MediaForRepeatableGroupsSyncAction

**Inherits from**: EntitySyncAction

#### Methods

##### MediaForRepeatableGroupsSyncAction(repeatableQuestionGroupMediaColumnProcessingService: RepeatableQuestionGroupMediaColumnProcessingService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repeatableQuestionGroupMediaColumnProcessingService | RepeatableQuestionGroupMediaColumnProcessingService | - | - |

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


##### processRepeatableQuestionGroupTable(mediaTableMetadata: TableMetadata, tableData: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableData | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`




## Functions

### MediaForRepeatableGroupsSyncAction(repeatableQuestionGroupMediaColumnProcessingService: RepeatableQuestionGroupMediaColumnProcessingService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repeatableQuestionGroupMediaColumnProcessingService | RepeatableQuestionGroupMediaColumnProcessingService | - | - |

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



### processRepeatableQuestionGroupTable(mediaTableMetadata: TableMetadata, tableData: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mediaTableMetadata | TableMetadata | - | - |
| tableData | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |

**Returns**: `void`


