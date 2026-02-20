# API Reference: OrganisationIdentity.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/OrganisationIdentity.java`

---

## Classes

### OrganisationIdentity

**Inherits from**: (none)

#### Methods

##### OrganisationIdentity(dbUser: String, schemaName: String, schemaUser: String, mediaDirectory: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbUser | String | - | - |
| schemaName | String | - | - |
| schemaUser | String | - | - |
| mediaDirectory | String | - | - |

**Returns**: `private`


##### createForOrganisation(dbUser: String, schemaName: String, mediaDirectory: String) → OrganisationIdentity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbUser | String | - | - |
| schemaName | String | - | - |
| mediaDirectory | String | - | - |

**Returns**: `OrganisationIdentity`


##### OrganisationIdentity(unknown: dbUser, unknown: schemaName, unknown: dbUser, unknown: mediaDirectory) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dbUser | - | - |
| unknown | schemaName | - | - |
| unknown | dbUser | - | - |
| unknown | mediaDirectory | - | - |

**Returns**: `new`


##### createForOrganisationGroup(dbUser: String, schemaName: String, schemaUser: String) → OrganisationIdentity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbUser | String | - | - |
| schemaName | String | - | - |
| schemaUser | String | - | - |

**Returns**: `OrganisationIdentity`


##### OrganisationIdentity(unknown: dbUser, unknown: schemaName, unknown: schemaUser, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dbUser | - | - |
| unknown | schemaName | - | - |
| unknown | schemaUser | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### getSchemaName() → String

**Returns**: `String`


##### toString() → String

**Returns**: `String`


##### getDbUser() → String

**Returns**: `String`


##### getSchemaUser() → String

**Returns**: `String`


##### getUsersWithSchemaAccess() → List<String>

**Returns**: `List<String>`


##### setOrgGroupOrgDbUsers(orgGroupOrgDbUsers: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgGroupOrgDbUsers | List<String> | - | - |

**Returns**: `void`


##### getStartTime() → Date

**Returns**: `Date`


##### setStartTime(startTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | Date | - | - |

**Returns**: `void`


##### getMediaDirectory() → String

**Returns**: `String`


##### isPartOfGroup() → boolean

**Returns**: `boolean`




## Functions

### OrganisationIdentity(dbUser: String, schemaName: String, schemaUser: String, mediaDirectory: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbUser | String | - | - |
| schemaName | String | - | - |
| schemaUser | String | - | - |
| mediaDirectory | String | - | - |

**Returns**: `private`



### createForOrganisation(dbUser: String, schemaName: String, mediaDirectory: String) → OrganisationIdentity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbUser | String | - | - |
| schemaName | String | - | - |
| mediaDirectory | String | - | - |

**Returns**: `OrganisationIdentity`



### OrganisationIdentity(unknown: dbUser, unknown: schemaName, unknown: dbUser, unknown: mediaDirectory) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dbUser | - | - |
| unknown | schemaName | - | - |
| unknown | dbUser | - | - |
| unknown | mediaDirectory | - | - |

**Returns**: `new`



### createForOrganisationGroup(dbUser: String, schemaName: String, schemaUser: String) → OrganisationIdentity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dbUser | String | - | - |
| schemaName | String | - | - |
| schemaUser | String | - | - |

**Returns**: `OrganisationIdentity`



### OrganisationIdentity(unknown: dbUser, unknown: schemaName, unknown: schemaUser, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dbUser | - | - |
| unknown | schemaName | - | - |
| unknown | schemaUser | - | - |
| unknown | null | - | - |

**Returns**: `new`



### getSchemaName() → String

**Returns**: `String`



### toString() → String

**Returns**: `String`



### getDbUser() → String

**Returns**: `String`



### getSchemaUser() → String

**Returns**: `String`



### getUsersWithSchemaAccess() → List<String>

**Returns**: `List<String>`



### setOrgGroupOrgDbUsers(orgGroupOrgDbUsers: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgGroupOrgDbUsers | List<String> | - | - |

**Returns**: `void`



### getStartTime() → Date

**Returns**: `Date`



### setStartTime(startTime: Date) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | Date | - | - |

**Returns**: `void`



### getMediaDirectory() → String

**Returns**: `String`



### isPartOfGroup() → boolean

**Returns**: `boolean`


