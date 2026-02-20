# API Reference: GroupPrivileges.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/accessControl/GroupPrivileges.java`

---

## Classes

### GroupPrivileges

**Inherits from**: (none)

#### Methods

##### GroupPrivileges(hasAllPrivileges: boolean, privileges: List<GroupPrivilege>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hasAllPrivileges | boolean | - | - |
| privileges | List<GroupPrivilege> | - | - |

**Returns**: `public`


##### GroupPrivileges(hasAllPrivileges: boolean, ...: GroupPrivilege) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hasAllPrivileges | boolean | - | - |
| ... | GroupPrivilege | - | - |

**Returns**: `public`


##### GroupPrivileges() → public

**Returns**: `public`


##### hasPrivilege(privilegeType: PrivilegeType, subjectType: SubjectType, program: Program, encounterType: EncounterType, checklistDetail: ChecklistDetail) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| checklistDetail | ChecklistDetail | - | - |

**Returns**: `boolean`


##### hasViewPrivilege(checklistItem: ChecklistItem) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistItem | ChecklistItem | - | - |

**Returns**: `boolean`


##### hasViewPrivilege(programEncounter: ProgramEncounter) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |

**Returns**: `boolean`


##### hasViewPrivilege(encounter: Encounter) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |

**Returns**: `boolean`


##### hasViewPrivilege(individual: Individual) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `boolean`


##### hasViewPrivilege(programEnrolment: ProgramEnrolment) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `boolean`


##### hasViewPrivilege(checklist: Checklist) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklist | Checklist | - | - |

**Returns**: `boolean`


##### getPrivileges() → List<GroupPrivilege>

**Returns**: `List<GroupPrivilege>`




## Functions

### GroupPrivileges(hasAllPrivileges: boolean, privileges: List<GroupPrivilege>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hasAllPrivileges | boolean | - | - |
| privileges | List<GroupPrivilege> | - | - |

**Returns**: `public`



### GroupPrivileges(hasAllPrivileges: boolean, ...: GroupPrivilege) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hasAllPrivileges | boolean | - | - |
| ... | GroupPrivilege | - | - |

**Returns**: `public`



### GroupPrivileges() → public

**Returns**: `public`



### hasPrivilege(privilegeType: PrivilegeType, subjectType: SubjectType, program: Program, encounterType: EncounterType, checklistDetail: ChecklistDetail) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| checklistDetail | ChecklistDetail | - | - |

**Returns**: `boolean`



### hasViewPrivilege(checklistItem: ChecklistItem) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistItem | ChecklistItem | - | - |

**Returns**: `boolean`



### hasViewPrivilege(programEncounter: ProgramEncounter) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | ProgramEncounter | - | - |

**Returns**: `boolean`



### hasViewPrivilege(encounter: Encounter) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |

**Returns**: `boolean`



### hasViewPrivilege(individual: Individual) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `boolean`



### hasViewPrivilege(programEnrolment: ProgramEnrolment) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `boolean`



### hasViewPrivilege(checklist: Checklist) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklist | Checklist | - | - |

**Returns**: `boolean`



### getPrivileges() → List<GroupPrivilege>

**Returns**: `List<GroupPrivilege>`


