# API Reference: UserPrivilegeWebResponse.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/response/UserPrivilegeWebResponse.java`

---

## Classes

### UserPrivilegeWebResponse

**Inherits from**: (none)

#### Methods

##### createForOrgUser(groupPrivilege: GroupPrivilege) → UserPrivilegeWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivilege | GroupPrivilege | - | - |

**Returns**: `UserPrivilegeWebResponse`


##### createFromPrivilege(privilege: Privilege) → UserPrivilegeWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilege | Privilege | - | - |

**Returns**: `UserPrivilegeWebResponse`


##### UserPrivilegeWebResponse() → new

**Returns**: `new`


##### createForAdminUser(privilege: Privilege) → UserPrivilegeWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilege | Privilege | - | - |

**Returns**: `UserPrivilegeWebResponse`


##### createFromPrivilege(unknown: privilege) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | privilege | - | - |

**Returns**: `return`


##### getPrivilegeEntityType() → String

**Returns**: `String`


##### setPrivilegeEntityType(privilegeEntityType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeEntityType | String | - | - |

**Returns**: `void`


##### getPrivilegeName() → String

**Returns**: `String`


##### setPrivilegeName(privilegeName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeName | String | - | - |

**Returns**: `void`


##### getPrivilegeDescription() → String

**Returns**: `String`


##### setPrivilegeDescription(privilegeDescription: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeDescription | String | - | - |

**Returns**: `void`


##### getSubjectType() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`


##### getProgram() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`


##### getProgramEncounterType() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`


##### getEncounterType() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`


##### getChecklistDetail() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`


##### getPrivilegeType() → PrivilegeType

**Returns**: `PrivilegeType`


##### create(namedEntity: NamedEntity) → PrivilegedEntityContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| namedEntity | NamedEntity | - | - |

**Returns**: `PrivilegedEntityContract`


##### PrivilegedEntityContract(unknown: namedEntity.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | namedEntity.getId( | - | - |

**Returns**: `new`


##### PrivilegedEntityContract(id: Long, name: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| name | String | - | - |

**Returns**: `private`


##### getId() → long

**Returns**: `long`


##### setId(id: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`




### PrivilegedEntityContract

**Inherits from**: (none)

#### Methods

##### create(namedEntity: NamedEntity) → PrivilegedEntityContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| namedEntity | NamedEntity | - | - |

**Returns**: `PrivilegedEntityContract`


##### PrivilegedEntityContract(unknown: namedEntity.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | namedEntity.getId( | - | - |

**Returns**: `new`


##### PrivilegedEntityContract(id: Long, name: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| name | String | - | - |

**Returns**: `private`


##### getId() → long

**Returns**: `long`


##### setId(id: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`




## Functions

### createForOrgUser(groupPrivilege: GroupPrivilege) → UserPrivilegeWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivilege | GroupPrivilege | - | - |

**Returns**: `UserPrivilegeWebResponse`



### createFromPrivilege(privilege: Privilege) → UserPrivilegeWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilege | Privilege | - | - |

**Returns**: `UserPrivilegeWebResponse`



### UserPrivilegeWebResponse() → new

**Returns**: `new`



### createForAdminUser(privilege: Privilege) → UserPrivilegeWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilege | Privilege | - | - |

**Returns**: `UserPrivilegeWebResponse`



### createFromPrivilege(unknown: privilege) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | privilege | - | - |

**Returns**: `return`



### getPrivilegeEntityType() → String

**Returns**: `String`



### setPrivilegeEntityType(privilegeEntityType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeEntityType | String | - | - |

**Returns**: `void`



### getPrivilegeName() → String

**Returns**: `String`



### setPrivilegeName(privilegeName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeName | String | - | - |

**Returns**: `void`



### getPrivilegeDescription() → String

**Returns**: `String`



### setPrivilegeDescription(privilegeDescription: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeDescription | String | - | - |

**Returns**: `void`



### getSubjectType() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`



### getProgram() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`



### getProgramEncounterType() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`



### getEncounterType() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`



### getChecklistDetail() → PrivilegedEntityContract

**Returns**: `PrivilegedEntityContract`



### getPrivilegeType() → PrivilegeType

**Returns**: `PrivilegeType`



### create(namedEntity: NamedEntity) → PrivilegedEntityContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| namedEntity | NamedEntity | - | - |

**Returns**: `PrivilegedEntityContract`



### PrivilegedEntityContract(unknown: namedEntity.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | namedEntity.getId( | - | - |

**Returns**: `new`



### PrivilegedEntityContract(id: Long, name: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| name | String | - | - |

**Returns**: `private`



### getId() → long

**Returns**: `long`



### setId(id: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


