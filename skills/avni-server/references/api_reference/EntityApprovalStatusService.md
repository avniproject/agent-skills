# API Reference: EntityApprovalStatusService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/EntityApprovalStatusService.java`

---

## Classes

### EntityApprovalStatusService

**Inherits from**: NonScopeAwareService

#### Methods

##### EntityApprovalStatusService(entityApprovalStatusRepository: EntityApprovalStatusRepository, approvalStatusRepository: ApprovalStatusRepository, individualRepository: IndividualRepository, encounterRepository: EncounterRepository, checklistItemRepository: ChecklistItemRepository, programEncounterRepository: ProgramEncounterRepository, programEnrolmentRepository: ProgramEnrolmentRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| approvalStatusRepository | ApprovalStatusRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| encounterRepository | EncounterRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |

**Returns**: `public`


##### save(request: EntityApprovalStatusRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | EntityApprovalStatusRequest | - | - |

**Returns**: `void`


##### EntityApprovalStatus() → new

**Returns**: `new`


##### createStatus(entityType: EntityApprovalStatus.EntityType, entityId: Long, status: ApprovalStatus.Status, entityTypeUuid: String, formMapping: FormMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| entityId | Long | - | - |
| status | ApprovalStatus.Status | - | - |
| entityTypeUuid | String | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `void`


##### EntityApprovalStatus() → new

**Returns**: `new`


##### DateTime() → new

**Returns**: `new`


##### updateIndividualAndSyncAttributes(entity: CHSEntity, entityApprovalStatus: EntityApprovalStatus, entityType: EntityApprovalStatus.EntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | CHSEntity | - | - |
| entityApprovalStatus | EntityApprovalStatus | - | - |
| entityType | EntityApprovalStatus.EntityType | - | - |

**Returns**: `void`


##### getIndividual(entityType: EntityApprovalStatus.EntityType, chsEntity: CHSEntity) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| chsEntity | CHSEntity | - | - |

**Returns**: `Individual`


##### RuntimeException(Approval: String.format("Entity, unknown: entityType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Approval | String.format("Entity | - | - |
| unknown | entityType | - | - |

**Returns**: `new`


##### getEntityUuid(eaStatus: EntityApprovalStatus) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| eaStatus | EntityApprovalStatus | - | - |

**Returns**: `String`


##### getChsEntity(entityType: EntityApprovalStatus.EntityType, entityId: Long) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| entityId | Long | - | - |

**Returns**: `CHSEntity`


##### IllegalArgumentException(entityId: String.format("Incorrect, unknown: entityId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | String.format("Incorrect | - | - |
| unknown | entityId | - | - |

**Returns**: `new`


##### getChsEntity(entityType: EntityApprovalStatus.EntityType, entityUUID: String) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| entityUUID | String | - | - |

**Returns**: `CHSEntity`


##### IllegalArgumentException(entityUUID: String.format("Incorrect, unknown: entityUUID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityUUID | String.format("Incorrect | - | - |
| unknown | entityUUID | - | - |

**Returns**: `new`


##### getTransactionalDataRepository(entityType: EntityApprovalStatus.EntityType) → TransactionalDataRepository

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |

**Returns**: `TransactionalDataRepository`


##### IllegalArgumentException(entityType: String.format("Incorrect, unknown: entityType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String.format("Incorrect | - | - |
| unknown | entityType | - | - |

**Returns**: `new`


##### getEntityTypeUUID(entityType: EntityApprovalStatus.EntityType, entity: CHSEntity) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| entity | CHSEntity | - | - |

**Returns**: `String`


##### IllegalArgumentException(entityType: String.format("Incorrect, unknown: entityType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String.format("Incorrect | - | - |
| unknown | entityType | - | - |

**Returns**: `new`


##### getEntityApprovalStatuses(entityId: Long, entityType: EntityApprovalStatus.EntityType, entityUUID: String) → List<EntityApprovalStatusWrapper>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| entityType | EntityApprovalStatus.EntityType | - | - |
| entityUUID | String | - | - |

**Returns**: `List<EntityApprovalStatusWrapper>`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`




## Functions

### EntityApprovalStatusService(entityApprovalStatusRepository: EntityApprovalStatusRepository, approvalStatusRepository: ApprovalStatusRepository, individualRepository: IndividualRepository, encounterRepository: EncounterRepository, checklistItemRepository: ChecklistItemRepository, programEncounterRepository: ProgramEncounterRepository, programEnrolmentRepository: ProgramEnrolmentRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatusRepository | EntityApprovalStatusRepository | - | - |
| approvalStatusRepository | ApprovalStatusRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| encounterRepository | EncounterRepository | - | - |
| checklistItemRepository | ChecklistItemRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |

**Returns**: `public`



### save(request: EntityApprovalStatusRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | EntityApprovalStatusRequest | - | - |

**Returns**: `void`



### EntityApprovalStatus() → new

**Returns**: `new`



### createStatus(entityType: EntityApprovalStatus.EntityType, entityId: Long, status: ApprovalStatus.Status, entityTypeUuid: String, formMapping: FormMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| entityId | Long | - | - |
| status | ApprovalStatus.Status | - | - |
| entityTypeUuid | String | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `void`



### EntityApprovalStatus() → new

**Returns**: `new`



### DateTime() → new

**Returns**: `new`



### updateIndividualAndSyncAttributes(entity: CHSEntity, entityApprovalStatus: EntityApprovalStatus, entityType: EntityApprovalStatus.EntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | CHSEntity | - | - |
| entityApprovalStatus | EntityApprovalStatus | - | - |
| entityType | EntityApprovalStatus.EntityType | - | - |

**Returns**: `void`



### getIndividual(entityType: EntityApprovalStatus.EntityType, chsEntity: CHSEntity) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| chsEntity | CHSEntity | - | - |

**Returns**: `Individual`



### RuntimeException(Approval: String.format("Entity, unknown: entityType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Approval | String.format("Entity | - | - |
| unknown | entityType | - | - |

**Returns**: `new`



### getEntityUuid(eaStatus: EntityApprovalStatus) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| eaStatus | EntityApprovalStatus | - | - |

**Returns**: `String`



### getChsEntity(entityType: EntityApprovalStatus.EntityType, entityId: Long) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| entityId | Long | - | - |

**Returns**: `CHSEntity`



### IllegalArgumentException(entityId: String.format("Incorrect, unknown: entityId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | String.format("Incorrect | - | - |
| unknown | entityId | - | - |

**Returns**: `new`



### getChsEntity(entityType: EntityApprovalStatus.EntityType, entityUUID: String) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| entityUUID | String | - | - |

**Returns**: `CHSEntity`



### IllegalArgumentException(entityUUID: String.format("Incorrect, unknown: entityUUID) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityUUID | String.format("Incorrect | - | - |
| unknown | entityUUID | - | - |

**Returns**: `new`



### getTransactionalDataRepository(entityType: EntityApprovalStatus.EntityType) → TransactionalDataRepository

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |

**Returns**: `TransactionalDataRepository`



### IllegalArgumentException(entityType: String.format("Incorrect, unknown: entityType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String.format("Incorrect | - | - |
| unknown | entityType | - | - |

**Returns**: `new`



### getEntityTypeUUID(entityType: EntityApprovalStatus.EntityType, entity: CHSEntity) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityApprovalStatus.EntityType | - | - |
| entity | CHSEntity | - | - |

**Returns**: `String`



### IllegalArgumentException(entityType: String.format("Incorrect, unknown: entityType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String.format("Incorrect | - | - |
| unknown | entityType | - | - |

**Returns**: `new`



### getEntityApprovalStatuses(entityId: Long, entityType: EntityApprovalStatus.EntityType, entityUUID: String) → List<EntityApprovalStatusWrapper>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| entityType | EntityApprovalStatus.EntityType | - | - |
| entityUUID | String | - | - |

**Returns**: `List<EntityApprovalStatusWrapper>`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


