# API Reference: GroupPrivilege.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/accessControl/GroupPrivilege.java`

---

## Classes

### GroupPrivilege

**Inherits from**: OrganisationAwareEntity

#### Methods

##### getGroup() → Group

**Returns**: `Group`


##### setGroup(group: Group) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |

**Returns**: `void`


##### getPrivilege() → Privilege

**Returns**: `Privilege`


##### setPrivilege(privilege: Privilege) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilege | Privilege | - | - |

**Returns**: `void`


##### getSubjectType() → SubjectType

**Returns**: `SubjectType`


##### setSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### getProgram() → Program

**Returns**: `Program`


##### setProgram(program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |

**Returns**: `void`


##### getProgramEncounterType() → EncounterType

**Returns**: `EncounterType`


##### setProgramEncounterType(programEncounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterType | EncounterType | - | - |

**Returns**: `void`


##### getEncounterType() → EncounterType

**Returns**: `EncounterType`


##### setEncounterType(encounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EncounterType | - | - |

**Returns**: `void`


##### getChecklistDetail() → ChecklistDetail

**Returns**: `ChecklistDetail`


##### setChecklistDetail(checklistDetail: ChecklistDetail) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetail | ChecklistDetail | - | - |

**Returns**: `void`


##### isAllow() → boolean

**Returns**: `boolean`


##### setAllow(allow: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allow | boolean | - | - |

**Returns**: `void`


##### getGroupUuid() → String

**Returns**: `String`


##### getPrivilegeUuid() → String

**Returns**: `String`


##### getSubjectTypeUuid() → String

**Returns**: `String`


##### getNullSafeUuid(unknown: subjectType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |

**Returns**: `return`


##### getProgramUuid() → String

**Returns**: `String`


##### getNullSafeUuid(unknown: program) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | program | - | - |

**Returns**: `return`


##### getProgramEncounterTypeUuid() → String

**Returns**: `String`


##### getNullSafeUuid(unknown: programEncounterType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEncounterType | - | - |

**Returns**: `return`


##### getEncounterTypeUuid() → String

**Returns**: `String`


##### getNullSafeUuid(unknown: encounterType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterType | - | - |

**Returns**: `return`


##### getChecklistDetailUuid() → String

**Returns**: `String`


##### getNullSafeUuid(unknown: checklistDetail) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklistDetail | - | - |

**Returns**: `return`


##### getNullSafeUuid(entity: T) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | T | - | - |

**Returns**: `String`


##### isSubjectPrivilege() → boolean

**Returns**: `boolean`


##### isEncounterPrivilege() → boolean

**Returns**: `boolean`


##### isProgramPrivilege() → boolean

**Returns**: `boolean`


##### isProgramEncounterPrivilege() → boolean

**Returns**: `boolean`


##### isChecklistPrivilege() → boolean

**Returns**: `boolean`


##### matches(privilegeType: PrivilegeType, subjectType: SubjectType, program: Program, encounterType: EncounterType, checklistDetail: ChecklistDetail) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| checklistDetail | ChecklistDetail | - | - |

**Returns**: `boolean`


##### itemsMatch(o1: CHSBaseEntity, o2: CHSBaseEntity) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o1 | CHSBaseEntity | - | - |
| o2 | CHSBaseEntity | - | - |

**Returns**: `boolean`


##### getTypeUUID() → String

**Returns**: `String`


##### getEncounterTypeUuid() → return

**Returns**: `return`


##### getProgramUuid() → return

**Returns**: `return`


##### getProgramEncounterTypeUuid() → return

**Returns**: `return`


##### getChecklistDetailUuid() → return

**Returns**: `return`


##### getSubjectTypeUuid() → return

**Returns**: `return`


##### toString() → String

**Returns**: `String`


##### getImplVersion() → int

**Returns**: `int`


##### setImplVersion(implVersion: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implVersion | int | - | - |

**Returns**: `void`


##### isVoided() → boolean

**Returns**: `boolean`


##### getImplVersion() → return

**Returns**: `return`




## Functions

### getGroup() → Group

**Returns**: `Group`



### setGroup(group: Group) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | Group | - | - |

**Returns**: `void`



### getPrivilege() → Privilege

**Returns**: `Privilege`



### setPrivilege(privilege: Privilege) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilege | Privilege | - | - |

**Returns**: `void`



### getSubjectType() → SubjectType

**Returns**: `SubjectType`



### setSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



### getProgram() → Program

**Returns**: `Program`



### setProgram(program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |

**Returns**: `void`



### getProgramEncounterType() → EncounterType

**Returns**: `EncounterType`



### setProgramEncounterType(programEncounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterType | EncounterType | - | - |

**Returns**: `void`



### getEncounterType() → EncounterType

**Returns**: `EncounterType`



### setEncounterType(encounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EncounterType | - | - |

**Returns**: `void`



### getChecklistDetail() → ChecklistDetail

**Returns**: `ChecklistDetail`



### setChecklistDetail(checklistDetail: ChecklistDetail) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetail | ChecklistDetail | - | - |

**Returns**: `void`



### isAllow() → boolean

**Returns**: `boolean`



### setAllow(allow: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allow | boolean | - | - |

**Returns**: `void`



### getGroupUuid() → String

**Returns**: `String`



### getPrivilegeUuid() → String

**Returns**: `String`



### getSubjectTypeUuid() → String

**Returns**: `String`



### getNullSafeUuid(unknown: subjectType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType | - | - |

**Returns**: `return`



### getProgramUuid() → String

**Returns**: `String`



### getNullSafeUuid(unknown: program) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | program | - | - |

**Returns**: `return`



### getProgramEncounterTypeUuid() → String

**Returns**: `String`



### getNullSafeUuid(unknown: programEncounterType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programEncounterType | - | - |

**Returns**: `return`



### getEncounterTypeUuid() → String

**Returns**: `String`



### getNullSafeUuid(unknown: encounterType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterType | - | - |

**Returns**: `return`



### getChecklistDetailUuid() → String

**Returns**: `String`



### getNullSafeUuid(unknown: checklistDetail) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklistDetail | - | - |

**Returns**: `return`



### getNullSafeUuid(entity: T) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | T | - | - |

**Returns**: `String`



### isSubjectPrivilege() → boolean

**Returns**: `boolean`



### isEncounterPrivilege() → boolean

**Returns**: `boolean`



### isProgramPrivilege() → boolean

**Returns**: `boolean`



### isProgramEncounterPrivilege() → boolean

**Returns**: `boolean`



### isChecklistPrivilege() → boolean

**Returns**: `boolean`



### matches(privilegeType: PrivilegeType, subjectType: SubjectType, program: Program, encounterType: EncounterType, checklistDetail: ChecklistDetail) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |
| checklistDetail | ChecklistDetail | - | - |

**Returns**: `boolean`



### itemsMatch(o1: CHSBaseEntity, o2: CHSBaseEntity) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o1 | CHSBaseEntity | - | - |
| o2 | CHSBaseEntity | - | - |

**Returns**: `boolean`



### getTypeUUID() → String

**Returns**: `String`



### getEncounterTypeUuid() → return

**Returns**: `return`



### getProgramUuid() → return

**Returns**: `return`



### getProgramEncounterTypeUuid() → return

**Returns**: `return`



### getChecklistDetailUuid() → return

**Returns**: `return`



### getSubjectTypeUuid() → return

**Returns**: `return`



### toString() → String

**Returns**: `String`



### getImplVersion() → int

**Returns**: `int`



### setImplVersion(implVersion: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implVersion | int | - | - |

**Returns**: `void`



### isVoided() → boolean

**Returns**: `boolean`



### getImplVersion() → return

**Returns**: `return`


