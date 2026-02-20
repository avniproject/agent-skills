# API Reference: UserInfoClientContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/UserInfoClientContract.java`

---

## Classes

### UserInfoClientContract

**Inherits from**: UserInfoContract

#### Methods

##### UserInfoClientContract() → public

**Returns**: `public`


##### UserInfoClientContract(username: String, orgName: String, orgId: Long, usernameSuffix: String, roles: String[], settings: JsonObject, name: String, catchmentName: String, syncSettings: JsonObject, privileges: List<GroupPrivilegeContract>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| orgName | String | - | - |
| orgId | Long | - | - |
| usernameSuffix | String | - | - |
| roles | String[] | - | - |
| settings | JsonObject | - | - |
| name | String | - | - |
| catchmentName | String | - | - |
| syncSettings | JsonObject | - | - |
| privileges | List<GroupPrivilegeContract> | - | - |

**Returns**: `public`


##### getPrivileges() → List<GroupPrivilegeContract>

**Returns**: `List<GroupPrivilegeContract>`


##### setPrivileges(privileges: List<GroupPrivilegeContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privileges | List<GroupPrivilegeContract> | - | - |

**Returns**: `void`


##### getLastSessionTime() → long

**Returns**: `long`


##### setLastSessionTime(lastSessionTime: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastSessionTime | long | - | - |

**Returns**: `void`




## Functions

### UserInfoClientContract() → public

**Returns**: `public`



### UserInfoClientContract(username: String, orgName: String, orgId: Long, usernameSuffix: String, roles: String[], settings: JsonObject, name: String, catchmentName: String, syncSettings: JsonObject, privileges: List<GroupPrivilegeContract>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| orgName | String | - | - |
| orgId | Long | - | - |
| usernameSuffix | String | - | - |
| roles | String[] | - | - |
| settings | JsonObject | - | - |
| name | String | - | - |
| catchmentName | String | - | - |
| syncSettings | JsonObject | - | - |
| privileges | List<GroupPrivilegeContract> | - | - |

**Returns**: `public`



### getPrivileges() → List<GroupPrivilegeContract>

**Returns**: `List<GroupPrivilegeContract>`



### setPrivileges(privileges: List<GroupPrivilegeContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privileges | List<GroupPrivilegeContract> | - | - |

**Returns**: `void`



### getLastSessionTime() → long

**Returns**: `long`



### setLastSessionTime(lastSessionTime: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastSessionTime | long | - | - |

**Returns**: `void`


