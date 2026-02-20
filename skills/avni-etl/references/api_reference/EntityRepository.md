# API Reference: EntityRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/sync/EntityRepository.java`

---

## Classes

### EntityRepository

**Inherits from**: (none)

#### Methods

##### EntityRepository(transactionalTablesSyncAction: TransactionalTablesSyncAction, duplicateRowDeleteAction: DuplicateRowDeleteAction, addressTableSyncAction: AddressTableSyncAction, entityApprovalStatusSyncAction: EntityApprovalStatusSyncAction, answerConceptSync: AnswerConceptSync, mediaTableSyncAction: MediaTableSyncAction, mediaForRepeatableGroupsSyncAction: MediaForRepeatableGroupsSyncAction, syncTelemetryTableSyncAction: SyncTelemetryTableSyncAction, userTableSyncAction: UserTableSyncAction, userTypeSubjectTableSyncAction: UserTypeSubjectTableSyncAction, cleanEnrolmentExitTableAction: CleanEnrolmentExitTableAction, cleanEncounterCancelTableAction: CleanEncounterCancelTableAction, repeatableQGTransactionTablesSyncAction: RepeatableQGTransactionTablesSyncAction) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| transactionalTablesSyncAction | TransactionalTablesSyncAction | - | - |
| duplicateRowDeleteAction | DuplicateRowDeleteAction | - | - |
| addressTableSyncAction | AddressTableSyncAction | - | - |
| entityApprovalStatusSyncAction | EntityApprovalStatusSyncAction | - | - |
| answerConceptSync | AnswerConceptSync | - | - |
| mediaTableSyncAction | MediaTableSyncAction | - | - |
| mediaForRepeatableGroupsSyncAction | MediaForRepeatableGroupsSyncAction | - | - |
| syncTelemetryTableSyncAction | SyncTelemetryTableSyncAction | - | - |
| userTableSyncAction | UserTableSyncAction | - | - |
| userTypeSubjectTableSyncAction | UserTypeSubjectTableSyncAction | - | - |
| cleanEnrolmentExitTableAction | CleanEnrolmentExitTableAction | - | - |
| cleanEncounterCancelTableAction | CleanEncounterCancelTableAction | - | - |
| repeatableQGTransactionTablesSyncAction | RepeatableQGTransactionTablesSyncAction | - | - |

**Returns**: `public`


##### saveEntities(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`




## Functions

### EntityRepository(transactionalTablesSyncAction: TransactionalTablesSyncAction, duplicateRowDeleteAction: DuplicateRowDeleteAction, addressTableSyncAction: AddressTableSyncAction, entityApprovalStatusSyncAction: EntityApprovalStatusSyncAction, answerConceptSync: AnswerConceptSync, mediaTableSyncAction: MediaTableSyncAction, mediaForRepeatableGroupsSyncAction: MediaForRepeatableGroupsSyncAction, syncTelemetryTableSyncAction: SyncTelemetryTableSyncAction, userTableSyncAction: UserTableSyncAction, userTypeSubjectTableSyncAction: UserTypeSubjectTableSyncAction, cleanEnrolmentExitTableAction: CleanEnrolmentExitTableAction, cleanEncounterCancelTableAction: CleanEncounterCancelTableAction, repeatableQGTransactionTablesSyncAction: RepeatableQGTransactionTablesSyncAction) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| transactionalTablesSyncAction | TransactionalTablesSyncAction | - | - |
| duplicateRowDeleteAction | DuplicateRowDeleteAction | - | - |
| addressTableSyncAction | AddressTableSyncAction | - | - |
| entityApprovalStatusSyncAction | EntityApprovalStatusSyncAction | - | - |
| answerConceptSync | AnswerConceptSync | - | - |
| mediaTableSyncAction | MediaTableSyncAction | - | - |
| mediaForRepeatableGroupsSyncAction | MediaForRepeatableGroupsSyncAction | - | - |
| syncTelemetryTableSyncAction | SyncTelemetryTableSyncAction | - | - |
| userTableSyncAction | UserTableSyncAction | - | - |
| userTypeSubjectTableSyncAction | UserTypeSubjectTableSyncAction | - | - |
| cleanEnrolmentExitTableAction | CleanEnrolmentExitTableAction | - | - |
| cleanEncounterCancelTableAction | CleanEncounterCancelTableAction | - | - |
| repeatableQGTransactionTablesSyncAction | RepeatableQGTransactionTablesSyncAction | - | - |

**Returns**: `public`



### saveEntities(tableMetadata: TableMetadata, lastSyncTime: Date, dataSyncBoundaryTime: Date, currentSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| lastSyncTime | Date | - | - |
| dataSyncBoundaryTime | Date | - | - |
| currentSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


