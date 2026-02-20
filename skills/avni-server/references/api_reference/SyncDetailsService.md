# API Reference: SyncDetailsService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/SyncDetailsService.java`

---

## Classes

### SyncDetailsService

**Inherits from**: (none)

#### Methods

##### SyncDetailsService(subjectTypeRepository1: OperationalSubjectTypeRepository, encounterTypeRepository: EncounterTypeRepository, formMappingRepository: FormMappingRepository, checklistDetailRepository: ChecklistDetailRepository, organisationConfigService: OrganisationConfigService, groupPrivilegeService: GroupPrivilegeService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository1 | OperationalSubjectTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| groupPrivilegeService | GroupPrivilegeService | - | - |

**Returns**: `public`


##### getAllSyncableItems(scopeAwareEAS: boolean, includeUserSubjectType: boolean) → Set<SyncableItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scopeAwareEAS | boolean | - | - |
| includeUserSubjectType | boolean | - | - |

**Returns**: `Set<SyncableItem>`


##### addToSyncableItems(syncableItems: HashSet<SyncableItem>, syncEntityName: SyncEntityName, uuid: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncableItems | HashSet<SyncableItem> | - | - |
| syncEntityName | SyncEntityName | - | - |
| uuid | String | - | - |

**Returns**: `boolean`


##### SyncableItem(unknown: syncEntityName, unknown: uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncEntityName | - | - |
| unknown | uuid | - | - |

**Returns**: `new`


##### addToSyncableItems(syncableItems: HashSet<SyncableItem>, entityNames: List<SyncEntityName>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncableItems | HashSet<SyncableItem> | - | - |
| entityNames | List<SyncEntityName> | - | - |

**Returns**: `void`


##### SyncableItem(unknown: entityName, unknown: "") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityName | - | - |
| unknown | "" | - | - |

**Returns**: `new`




## Functions

### SyncDetailsService(subjectTypeRepository1: OperationalSubjectTypeRepository, encounterTypeRepository: EncounterTypeRepository, formMappingRepository: FormMappingRepository, checklistDetailRepository: ChecklistDetailRepository, organisationConfigService: OrganisationConfigService, groupPrivilegeService: GroupPrivilegeService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository1 | OperationalSubjectTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| groupPrivilegeService | GroupPrivilegeService | - | - |

**Returns**: `public`



### getAllSyncableItems(scopeAwareEAS: boolean, includeUserSubjectType: boolean) → Set<SyncableItem>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scopeAwareEAS | boolean | - | - |
| includeUserSubjectType | boolean | - | - |

**Returns**: `Set<SyncableItem>`



### addToSyncableItems(syncableItems: HashSet<SyncableItem>, syncEntityName: SyncEntityName, uuid: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncableItems | HashSet<SyncableItem> | - | - |
| syncEntityName | SyncEntityName | - | - |
| uuid | String | - | - |

**Returns**: `boolean`



### SyncableItem(unknown: syncEntityName, unknown: uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | syncEntityName | - | - |
| unknown | uuid | - | - |

**Returns**: `new`



### addToSyncableItems(syncableItems: HashSet<SyncableItem>, entityNames: List<SyncEntityName>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncableItems | HashSet<SyncableItem> | - | - |
| entityNames | List<SyncEntityName> | - | - |

**Returns**: `void`



### SyncableItem(unknown: entityName, unknown: "") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityName | - | - |
| unknown | "" | - | - |

**Returns**: `new`


