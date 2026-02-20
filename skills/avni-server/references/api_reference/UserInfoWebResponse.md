# API Reference: UserInfoWebResponse.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/response/UserInfoWebResponse.java`

---

## Classes

### UserInfoWebResponse

**Inherits from**: UserInfoContract

#### Methods

##### UserInfoWebResponse() → private

**Returns**: `private`


##### createForAdminUser(groupPrivilegeResponses: List<UserPrivilegeWebResponse>, contextOrganisation: Organisation, user: User) → UserInfoWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivilegeResponses | List<UserPrivilegeWebResponse> | - | - |
| contextOrganisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `UserInfoWebResponse`


##### UserInfoWebResponse() → new

**Returns**: `new`


##### UserInfoWebResponse(username: String, orgName: String, orgId: Long, usernameSuffix: String, settings: JsonObject, name: String, catchmentName: String, syncSettings: JsonObject, privileges: List<UserPrivilegeWebResponse>, hasAllPrivileges: boolean, lastSessionTime: long, organisationCategory: OrganisationCategory, region: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| orgName | String | - | - |
| orgId | Long | - | - |
| usernameSuffix | String | - | - |
| settings | JsonObject | - | - |
| name | String | - | - |
| catchmentName | String | - | - |
| syncSettings | JsonObject | - | - |
| privileges | List<UserPrivilegeWebResponse> | - | - |
| hasAllPrivileges | boolean | - | - |
| lastSessionTime | long | - | - |
| organisationCategory | OrganisationCategory | - | - |
| region | String | - | - |

**Returns**: `public`


##### getPrivileges() → List<UserPrivilegeWebResponse>

**Returns**: `List<UserPrivilegeWebResponse>`


##### isHasAllPrivileges() → boolean

**Returns**: `boolean`


##### getIsAdmin() → boolean

**Returns**: `boolean`


##### getLastSessionTime() → long

**Returns**: `long`


##### setLastSessionTime(lastSessionTime: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastSessionTime | long | - | - |

**Returns**: `void`


##### getOrganisationCategoryName() → String

**Returns**: `String`


##### getRegion() → String

**Returns**: `String`




## Functions

### UserInfoWebResponse() → private

**Returns**: `private`



### createForAdminUser(groupPrivilegeResponses: List<UserPrivilegeWebResponse>, contextOrganisation: Organisation, user: User) → UserInfoWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupPrivilegeResponses | List<UserPrivilegeWebResponse> | - | - |
| contextOrganisation | Organisation | - | - |
| user | User | - | - |

**Returns**: `UserInfoWebResponse`



### UserInfoWebResponse() → new

**Returns**: `new`



### UserInfoWebResponse(username: String, orgName: String, orgId: Long, usernameSuffix: String, settings: JsonObject, name: String, catchmentName: String, syncSettings: JsonObject, privileges: List<UserPrivilegeWebResponse>, hasAllPrivileges: boolean, lastSessionTime: long, organisationCategory: OrganisationCategory, region: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| orgName | String | - | - |
| orgId | Long | - | - |
| usernameSuffix | String | - | - |
| settings | JsonObject | - | - |
| name | String | - | - |
| catchmentName | String | - | - |
| syncSettings | JsonObject | - | - |
| privileges | List<UserPrivilegeWebResponse> | - | - |
| hasAllPrivileges | boolean | - | - |
| lastSessionTime | long | - | - |
| organisationCategory | OrganisationCategory | - | - |
| region | String | - | - |

**Returns**: `public`



### getPrivileges() → List<UserPrivilegeWebResponse>

**Returns**: `List<UserPrivilegeWebResponse>`



### isHasAllPrivileges() → boolean

**Returns**: `boolean`



### getIsAdmin() → boolean

**Returns**: `boolean`



### getLastSessionTime() → long

**Returns**: `long`



### setLastSessionTime(lastSessionTime: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastSessionTime | long | - | - |

**Returns**: `void`



### getOrganisationCategoryName() → String

**Returns**: `String`



### getRegion() → String

**Returns**: `String`


