# API Reference: IdpServiceImpl.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/IdpServiceImpl.java`

---

## Classes

### IdpServiceImpl

**Inherits from**: IdpService

#### Methods

##### IdpServiceImpl(springProfiles: SpringProfiles) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| springProfiles | SpringProfiles | - | - |

**Returns**: `public`


##### exists(user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `boolean`


##### createUserIfNotExists(user: User, organisationConfig: OrganisationConfig) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| organisationConfig | OrganisationConfig | - | - |

**Returns**: `void`


##### getDefaultPassword(user: User) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `String`




## Functions

### IdpServiceImpl(springProfiles: SpringProfiles) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| springProfiles | SpringProfiles | - | - |

**Returns**: `public`



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



### getDefaultPassword(user: User) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `String`


