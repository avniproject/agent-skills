# API Reference: CognitoIdpService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/CognitoIdpService.java`

---

## Classes

### CognitoIdpService

**Inherits from**: IdpServiceImpl

#### Methods

##### CognitoIdpService(springProfiles: SpringProfiles) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| springProfiles | SpringProfiles | - | - |

**Returns**: `public`


##### init() → void

**Returns**: `void`


##### getCredentialsProvider() → AWSStaticCredentialsProvider

**Returns**: `AWSStaticCredentialsProvider`


##### AWSStaticCredentialsProvider(BasicAWSCredentials(accessKeyId: new, unknown: secretAccessKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| BasicAWSCredentials(accessKeyId | new | - | - |
| unknown | secretAccessKey | - | - |

**Returns**: `new`


##### createUser(user: User, password: String, changePasswordOnFirstLogin: boolean, suppressMessage: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |
| changePasswordOnFirstLogin | boolean | - | - |
| suppressMessage | boolean | - | - |

**Returns**: `void`


##### AdminCreateUserRequest() → new

**Returns**: `new`


##### AttributeType() → new

**Returns**: `new`


##### AttributeType() → new

**Returns**: `new`


##### AttributeType() → new

**Returns**: `new`


##### AttributeType() → new

**Returns**: `new`


##### AttributeType() → new

**Returns**: `new`


##### setPassword(user: User, password: String, permanent: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |
| permanent | boolean | - | - |

**Returns**: `void`


##### AdminSetUserPasswordRequest() → new

**Returns**: `new`


##### enableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### AdminEnableUserRequest() → new

**Returns**: `new`


##### resendPassword(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### AdminCreateUserRequest() → new

**Returns**: `new`


##### AttributeType() → new

**Returns**: `new`


##### disableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### AdminDisableUserRequest() → new

**Returns**: `new`


##### deleteUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### AdminDeleteUserRequest() → new

**Returns**: `new`


##### createUser(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`


##### createInActiveUser(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`


##### createUserWithPassword(user: User, password: String, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`


##### createSuperAdmin(user: User, password: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `void`


##### updateUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### AdminUpdateUserAttributesRequest() → new

**Returns**: `new`


##### AttributeType() → new

**Returns**: `new`


##### AttributeType() → new

**Returns**: `new`


##### AttributeType() → new

**Returns**: `new`


##### resetPassword(user: User, password: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `boolean`


##### exists(user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `boolean`


##### AdminGetUserRequest() → new

**Returns**: `new`


##### getLastLoginTime(user: User) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `long`




## Functions

### CognitoIdpService(springProfiles: SpringProfiles) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| springProfiles | SpringProfiles | - | - |

**Returns**: `public`



### init() → void

**Returns**: `void`



### getCredentialsProvider() → AWSStaticCredentialsProvider

**Returns**: `AWSStaticCredentialsProvider`



### AWSStaticCredentialsProvider(BasicAWSCredentials(accessKeyId: new, unknown: secretAccessKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| BasicAWSCredentials(accessKeyId | new | - | - |
| unknown | secretAccessKey | - | - |

**Returns**: `new`



### createUser(user: User, password: String, changePasswordOnFirstLogin: boolean, suppressMessage: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |
| changePasswordOnFirstLogin | boolean | - | - |
| suppressMessage | boolean | - | - |

**Returns**: `void`



### AdminCreateUserRequest() → new

**Returns**: `new`



### AttributeType() → new

**Returns**: `new`



### AttributeType() → new

**Returns**: `new`



### AttributeType() → new

**Returns**: `new`



### AttributeType() → new

**Returns**: `new`



### AttributeType() → new

**Returns**: `new`



### setPassword(user: User, password: String, permanent: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |
| permanent | boolean | - | - |

**Returns**: `void`



### AdminSetUserPasswordRequest() → new

**Returns**: `new`



### enableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### AdminEnableUserRequest() → new

**Returns**: `new`



### resendPassword(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### AdminCreateUserRequest() → new

**Returns**: `new`



### AttributeType() → new

**Returns**: `new`



### disableUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### AdminDisableUserRequest() → new

**Returns**: `new`



### deleteUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### AdminDeleteUserRequest() → new

**Returns**: `new`



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



### updateUser(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### AdminUpdateUserAttributesRequest() → new

**Returns**: `new`



### AttributeType() → new

**Returns**: `new`



### AttributeType() → new

**Returns**: `new`



### AttributeType() → new

**Returns**: `new`



### resetPassword(user: User, password: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| password | String | - | - |

**Returns**: `boolean`



### exists(user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `boolean`



### AdminGetUserRequest() → new

**Returns**: `new`



### getLastLoginTime(user: User) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `long`


