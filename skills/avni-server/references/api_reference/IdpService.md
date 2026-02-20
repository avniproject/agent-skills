# API Reference: IdpService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/IdpService.java`

---

## Functions

### createUser(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`



### createInActiveUser(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`



### updateUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### disableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### deleteUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### resetPassword(user: User, password: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `boolean`



### createUserWithPassword(user: User, password: String, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`



### createSuperAdmin(user: User, password: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `void`



### exists(user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `boolean`



### createUserIfNotExists(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`



### getLastLoginTime(user: User) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `long`



### enableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### resendPassword(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


