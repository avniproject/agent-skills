# API Reference: GroupPrivilegeController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/GroupPrivilegeController.java`

---

## Functions

### GroupPrivilegeController(groupPrivilegeRepository: GroupPrivilegeRepository, groupRepository: GroupRepository, privilegeRepository: PrivilegeRepository, subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, checklistDetailRepository: ChecklistDetailRepository, groupPrivilegeService: GroupPrivilegeService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivilegeRepository | GroupPrivilegeRepository | - | - |
| groupRepository | GroupRepository | - | - |
| privilegeRepository | PrivilegeRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| groupPrivilegeService | GroupPrivilegeService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getById(unknown: @PathVariable("id") → List<GroupPrivilegeContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `List<GroupPrivilegeContract>`



### addOrUpdateGroupPrivileges(List<GroupPrivilegeWebRequest>: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<GroupPrivilegeWebRequest> | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### GroupPrivilege() → new

**Returns**: `new`


