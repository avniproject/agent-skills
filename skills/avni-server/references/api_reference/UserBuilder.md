# API Reference: UserBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/domain/factory/UserBuilder.java`

---

## Classes

### UserBuilder

**Inherits from**: (none)

#### Methods

##### UserBuilder() → public

**Returns**: `public`


##### User() → new

**Returns**: `new`


##### UserBuilder(user: User) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `public`


##### id(id: long) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `UserBuilder`


##### isAdmin(isAdmin: boolean) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isAdmin | boolean | - | - |

**Returns**: `UserBuilder`


##### userName(name: String) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `UserBuilder`


##### phoneNumber(phoneNumber: String) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `UserBuilder`


##### organisationId(orgId: long) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | long | - | - |

**Returns**: `UserBuilder`


##### withUuid(uuid: String) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `UserBuilder`


##### withOperatingIndividualScope(operatingIndividualScope: OperatingIndividualScope) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operatingIndividualScope | OperatingIndividualScope | - | - |

**Returns**: `UserBuilder`


##### withDefaultValuesForNewEntity() → UserBuilder

**Returns**: `UserBuilder`


##### userName(unknown: placeholder) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | placeholder | - | - |

**Returns**: `return`


##### withAuditUser(auditUser: User) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auditUser | User | - | - |

**Returns**: `UserBuilder`


##### withCatchment(catchment: Catchment) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `UserBuilder`


##### withSubjectTypeSyncSettings(...: UserSyncSettings) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ... | UserSyncSettings | - | - |

**Returns**: `UserBuilder`


##### JsonObject() → new

**Returns**: `new`


##### setSettings(settings: JsonObject) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `UserBuilder`


##### setId(id: int) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | int | - | - |

**Returns**: `UserBuilder`


##### build() → User

**Returns**: `User`




## Functions

### UserBuilder() → public

**Returns**: `public`



### User() → new

**Returns**: `new`



### UserBuilder(user: User) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `public`



### id(id: long) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `UserBuilder`



### isAdmin(isAdmin: boolean) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isAdmin | boolean | - | - |

**Returns**: `UserBuilder`



### userName(name: String) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `UserBuilder`



### phoneNumber(phoneNumber: String) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `UserBuilder`



### organisationId(orgId: long) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| orgId | long | - | - |

**Returns**: `UserBuilder`



### withUuid(uuid: String) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `UserBuilder`



### withOperatingIndividualScope(operatingIndividualScope: OperatingIndividualScope) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operatingIndividualScope | OperatingIndividualScope | - | - |

**Returns**: `UserBuilder`



### withDefaultValuesForNewEntity() → UserBuilder

**Returns**: `UserBuilder`



### userName(unknown: placeholder) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | placeholder | - | - |

**Returns**: `return`



### withAuditUser(auditUser: User) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auditUser | User | - | - |

**Returns**: `UserBuilder`



### withCatchment(catchment: Catchment) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `UserBuilder`



### withSubjectTypeSyncSettings(...: UserSyncSettings) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ... | UserSyncSettings | - | - |

**Returns**: `UserBuilder`



### JsonObject() → new

**Returns**: `new`



### setSettings(settings: JsonObject) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `UserBuilder`



### setId(id: int) → UserBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | int | - | - |

**Returns**: `UserBuilder`



### build() → User

**Returns**: `User`


