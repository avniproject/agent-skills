# API Reference: SubjectSyncResponseBuilderService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/SubjectSyncResponseBuilderService.java`

---

## Classes

### SubjectSyncResponseBuilderService

**Inherits from**: (none)

#### Methods

##### SubjectSyncResponseBuilderService(individualRepository: IndividualRepository, checklistService: ChecklistService, checklistItemService: ChecklistItemService, individualRelationshipService: IndividualRelationshipService, groupSubjectRepository: GroupSubjectRepository, privilegeService: GroupPrivilegeService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| checklistService | ChecklistService | - | - |
| checklistItemService | ChecklistItemService | - | - |
| individualRelationshipService | IndividualRelationshipService | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| privilegeService | GroupPrivilegeService | - | - |

**Returns**: `public`


##### getSubject(uuid: String) → SyncSubjectResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `SyncSubjectResponse`


##### SyncSubjectResponse() → new

**Returns**: `new`




## Functions

### SubjectSyncResponseBuilderService(individualRepository: IndividualRepository, checklistService: ChecklistService, checklistItemService: ChecklistItemService, individualRelationshipService: IndividualRelationshipService, groupSubjectRepository: GroupSubjectRepository, privilegeService: GroupPrivilegeService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| checklistService | ChecklistService | - | - |
| checklistItemService | ChecklistItemService | - | - |
| individualRelationshipService | IndividualRelationshipService | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| privilegeService | GroupPrivilegeService | - | - |

**Returns**: `public`



### getSubject(uuid: String) → SyncSubjectResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `SyncSubjectResponse`



### SyncSubjectResponse() → new

**Returns**: `new`


