# API Reference: MetabaseUserRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/metabase/MetabaseUserRepository.java`

---

## Classes

### MetabaseUserRepository

**Inherits from**: MetabaseConnector

#### Methods

##### MetabaseUserRepository(restTemplateBuilder: RestTemplateBuilder, metabaseGroupRepository: MetabaseGroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |
| metabaseGroupRepository | MetabaseGroupRepository | - | - |

**Returns**: `public`


##### save(createUserRequest: CreateUserRequest) → MetabaseUserResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createUserRequest | CreateUserRequest | - | - |

**Returns**: `MetabaseUserResponse`


##### postForObject(unknown: url, unknown: createUserRequest, unknown: MetabaseUserResponse.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | createUserRequest | - | - |
| unknown | MetabaseUserResponse.class | - | - |

**Returns**: `return`


##### getAllUsers() → MetabaseAllUsersResponse

**Returns**: `MetabaseAllUsersResponse`


##### getForObject(unknown: url, unknown: MetabaseAllUsersResponse.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | MetabaseAllUsersResponse.class | - | - |

**Returns**: `return`


##### getUserFromEmail(email: String) → MetabaseUserData

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `MetabaseUserData`


##### getForObject(unknown: url, ParameterizedTypeReference<Map<String: new, unknown: List<MetabaseGroupMembership>>>() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| ParameterizedTypeReference<Map<String | new | - | - |
| unknown | List<MetabaseGroupMembership>>>( | - | - |

**Returns**: `return`


##### deleteMembership(membership: MetabaseGroupMembership) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| membership | MetabaseGroupMembership | - | - |

**Returns**: `void`


##### activeUserExists(email: String, excludeSuperAdmins: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |
| excludeSuperAdmins | boolean | - | - |

**Returns**: `boolean`


##### activeUserExists(email: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `boolean`


##### activeUserExists(unknown: email, unknown: false) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | email | - | - |
| unknown | false | - | - |

**Returns**: `return`


##### emailExists(email: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `boolean`


##### userExistsInCurrentOrgGroup(email: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `boolean`


##### deactivateMetabaseUser(email: String) → DeactivateMetabaseUserResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `DeactivateMetabaseUserResponse`


##### deleteForObject(unknown: url, unknown: DeactivateMetabaseUserResponse.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | DeactivateMetabaseUserResponse.class | - | - |

**Returns**: `return`


##### reactivateMetabaseUser(email: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `void`


##### buildDefaultUserGroupMemberships(orgMetabaseGroup: Group) → List<UserGroupMemberships>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgMetabaseGroup | Group | - | - |

**Returns**: `List<UserGroupMemberships>`


##### UserGroupMemberships(unknown: orgMetabaseGroup.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | orgMetabaseGroup.getId( | - | - |

**Returns**: `new`


##### buildAllUserGroupMembership() → List<UserGroupMemberships>

**Returns**: `List<UserGroupMemberships>`


##### UserGroupMemberships(unknown: 1, unknown: false) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |
| unknown | false | - | - |

**Returns**: `new`


##### updateGroupPermissions(updateUserGroupRequest: UpdateUserGroupRequest) → List<UpdateUserGroupResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| updateUserGroupRequest | UpdateUserGroupRequest | - | - |

**Returns**: `List<UpdateUserGroupResponse>`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`




## Functions

### MetabaseUserRepository(restTemplateBuilder: RestTemplateBuilder, metabaseGroupRepository: MetabaseGroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |
| metabaseGroupRepository | MetabaseGroupRepository | - | - |

**Returns**: `public`



### save(createUserRequest: CreateUserRequest) → MetabaseUserResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createUserRequest | CreateUserRequest | - | - |

**Returns**: `MetabaseUserResponse`



### postForObject(unknown: url, unknown: createUserRequest, unknown: MetabaseUserResponse.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | createUserRequest | - | - |
| unknown | MetabaseUserResponse.class | - | - |

**Returns**: `return`



### getAllUsers() → MetabaseAllUsersResponse

**Returns**: `MetabaseAllUsersResponse`



### getForObject(unknown: url, unknown: MetabaseAllUsersResponse.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | MetabaseAllUsersResponse.class | - | - |

**Returns**: `return`



### getUserFromEmail(email: String) → MetabaseUserData

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `MetabaseUserData`



### getForObject(unknown: url, ParameterizedTypeReference<Map<String: new, unknown: List<MetabaseGroupMembership>>>() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| ParameterizedTypeReference<Map<String | new | - | - |
| unknown | List<MetabaseGroupMembership>>>( | - | - |

**Returns**: `return`



### deleteMembership(membership: MetabaseGroupMembership) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| membership | MetabaseGroupMembership | - | - |

**Returns**: `void`



### activeUserExists(email: String, excludeSuperAdmins: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |
| excludeSuperAdmins | boolean | - | - |

**Returns**: `boolean`



### activeUserExists(email: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `boolean`



### activeUserExists(unknown: email, unknown: false) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | email | - | - |
| unknown | false | - | - |

**Returns**: `return`



### emailExists(email: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `boolean`



### userExistsInCurrentOrgGroup(email: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `boolean`



### deactivateMetabaseUser(email: String) → DeactivateMetabaseUserResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `DeactivateMetabaseUserResponse`



### deleteForObject(unknown: url, unknown: DeactivateMetabaseUserResponse.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | DeactivateMetabaseUserResponse.class | - | - |

**Returns**: `return`



### reactivateMetabaseUser(email: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `void`



### buildDefaultUserGroupMemberships(orgMetabaseGroup: Group) → List<UserGroupMemberships>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgMetabaseGroup | Group | - | - |

**Returns**: `List<UserGroupMemberships>`



### UserGroupMemberships(unknown: orgMetabaseGroup.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | orgMetabaseGroup.getId( | - | - |

**Returns**: `new`



### buildAllUserGroupMembership() → List<UserGroupMemberships>

**Returns**: `List<UserGroupMemberships>`



### UserGroupMemberships(unknown: 1, unknown: false) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |
| unknown | false | - | - |

**Returns**: `new`



### updateGroupPermissions(updateUserGroupRequest: UpdateUserGroupRequest) → List<UpdateUserGroupResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| updateUserGroupRequest | UpdateUserGroupRequest | - | - |

**Returns**: `List<UpdateUserGroupResponse>`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


