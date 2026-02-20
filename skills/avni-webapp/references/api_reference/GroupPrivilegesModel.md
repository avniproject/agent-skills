# API Reference: GroupPrivilegesModel.js

**Language**: JavaScript

**Source**: `src/common/model/GroupPrivilegesModel.js`

---

## Classes

### GroupPrivilegesModel

**Inherits from**: (none)

#### Methods

##### getSubjectTypeDependencies(groupPrivileges, groupPrivilege)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivileges | None | - | - |
| groupPrivilege | None | - | - |


##### filter(x = >
        x["privilegeTypeName"] === Privilege.PrivilegeType.ViewSubject &&
        matchingSubjectType(x, groupPrivilege)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| x | None | >
        x["privilegeTypeName"] === Privilege.PrivilegeType.ViewSubject &&
        matchingSubjectType(x | - |
| groupPrivilege | None | - | - |




## Functions

### matchingId(a, b, fieldName)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | None | - | - |
| b | None | - | - |
| fieldName | None | - | - |

**Returns**: (none)



### matchingSubjectType(a, b)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | None | - | - |
| b | None | - | - |

**Returns**: (none)



### matchingProgram(a, b)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | None | - | - |
| b | None | - | - |

**Returns**: (none)



### matchingEncounterType(a, b)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | None | - | - |
| b | None | - | - |

**Returns**: (none)



### matchingProgramEncounterType(a, b)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| a | None | - | - |
| b | None | - | - |

**Returns**: (none)


