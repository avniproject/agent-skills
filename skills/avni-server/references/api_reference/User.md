# API Reference: User.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/User.java`

---

## Classes

### User

**Inherits from**: IdHolder

#### Methods

##### hasAllPrivileges() → boolean

**Returns**: `boolean`


##### getUserGroups() → return

**Returns**: `return`


##### isPartOfUserGroup(userGroup: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroup | String | - | - |

**Returns**: `boolean`


##### getUsername() → String

**Returns**: `String`


##### setUsername(username: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### newUser(name: String, orgId: Long) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| orgId | Long | - | - |

**Returns**: `User`


##### User() → new

**Returns**: `new`


##### getOrganisationId() → Long

**Returns**: `Long`


##### setOrganisationId(organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `void`


##### getEmail() → String

**Returns**: `String`


##### setEmail(email: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `void`


##### getPhoneNumber() → String

**Returns**: `String`


##### setPhoneNumber(phoneNumber: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `void`


##### isDisabledInCognito() → boolean

**Returns**: `boolean`


##### setDisabledInCognito(disabledInCognito: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabledInCognito | boolean | - | - |

**Returns**: `void`


##### getId() → Long

**Returns**: `Long`


##### setId(id: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `void`


##### getUuid() → String

**Returns**: `String`


##### setUuid(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`


##### getCatchment() → Catchment

**Returns**: `Catchment`


##### getCatchmentId() → Optional<Long>

**Returns**: `Optional<Long>`


##### setCatchment(Catchment: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Catchment | @NotNull | - | - |

**Returns**: `void`


##### removeCatchment() → void

**Returns**: `void`


##### isVoided() → Boolean

**Returns**: `Boolean`


##### setVoided(voided: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| voided | boolean | - | - |

**Returns**: `void`


##### getUserGroups() → List<UserGroup>

**Returns**: `List<UserGroup>`


##### setUserGroups(userGroups: List<UserGroup>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroups | List<UserGroup> | - | - |

**Returns**: `void`


##### equals(o: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Object | - | - |

**Returns**: `boolean`


##### hashCode() → int

**Returns**: `int`


##### isNew() → boolean

**Returns**: `boolean`


##### setCreatedBy(createdBy: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createdBy | User | - | - |

**Returns**: `void`


##### setCreatedDateTime(createdDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createdDateTime | DateTime | - | - |

**Returns**: `void`


##### setLastModifiedBy(lastModifiedBy: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedBy | User | - | - |

**Returns**: `void`


##### setLastModifiedDateTime(lastModifiedDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `void`


##### getCreatedBy() → User

**Returns**: `User`


##### getCreatedByUserName() → String

**Returns**: `String`


##### getLastModifiedByUserName() → String

**Returns**: `String`


##### getCreatedDateTime() → DateTime

**Returns**: `DateTime`


##### getLastModifiedBy() → User

**Returns**: `User`


##### getLastModifiedDateTime() → DateTime

**Returns**: `DateTime`


##### getLastActivatedDateTime() → DateTime

**Returns**: `DateTime`


##### setLastActivatedDateTime(lastActivatedDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastActivatedDateTime | DateTime | - | - |

**Returns**: `void`


##### getSyncSettings() → JsonObject

**Returns**: `JsonObject`


##### setSyncSettings(syncSettings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncSettings | JsonObject | - | - |

**Returns**: `void`


##### isIgnoreSyncSettingsInDEA() → boolean

**Returns**: `boolean`


##### setIgnoreSyncSettingsInDEA(ignoreSyncSettingsInDEA: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ignoreSyncSettingsInDEA | boolean | - | - |

**Returns**: `void`


##### getAccountAdmin() → Set<AccountAdmin>

**Returns**: `Set<AccountAdmin>`


##### setAccountAdmin(accountAdmin: AccountAdmin) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accountAdmin | AccountAdmin | - | - |

**Returns**: `void`


##### isAdmin() → boolean

**Returns**: `boolean`


##### setAdmin(admin: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| admin | boolean | - | - |

**Returns**: `void`


##### getOperatingIndividualScope() → OperatingIndividualScope

**Returns**: `OperatingIndividualScope`


##### setOperatingIndividualScope(OperatingIndividualScope: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| OperatingIndividualScope | @NotNull | - | - |

**Returns**: `void`


##### getSettings() → JsonObject

**Returns**: `JsonObject`


##### getUserSettings() → UserSettings

**Returns**: `UserSettings`


##### UserSettings(unknown: this.settings) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.settings | - | - |

**Returns**: `new`


##### setSettings(settings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `void`


##### setAuditInfo(currentUser: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentUser | User | - | - |

**Returns**: `void`


##### assignUUID() → void

**Returns**: `void`


##### assignUUIDIfRequired() → void

**Returns**: `void`


##### validateEmail(email: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `void`


##### ValidationException(email: String.format("Invalid, unknown: email) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String.format("Invalid | - | - |
| unknown | email | - | - |

**Returns**: `new`


##### validateUsername(username: String, userSuffix: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| userSuffix | String | - | - |

**Returns**: `void`


##### ValidationException(username: String.format("Invalid, unknown: username) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | username | - | - |

**Returns**: `new`


##### ValidationException(username: String.format("Invalid, unknown: username) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | username | - | - |

**Returns**: `new`


##### ValidationException(username: String.format("Invalid, unknown: username, unknown: userSuffix) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | username | - | - |
| unknown | userSuffix | - | - |

**Returns**: `new`


##### ValidationException(username: String.format("Invalid, at: contains, unknown: username, unknown: ValidationUtil.COMMON_INVALID_CHARS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| at | contains | - | - |
| unknown | username | - | - |
| unknown | ValidationUtil.COMMON_INVALID_CHARS | - | - |

**Returns**: `new`


##### validateName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### ValidationException(name: String.format("Invalid, at: contains, unknown: name, unknown: ValidationUtil.NAME_INVALID_CHARS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String.format("Invalid | - | - |
| at | contains | - | - |
| unknown | name | - | - |
| unknown | ValidationUtil.NAME_INVALID_CHARS | - | - |

**Returns**: `new`




## Functions

### hasAllPrivileges() → boolean

**Returns**: `boolean`



### getUserGroups() → return

**Returns**: `return`



### isPartOfUserGroup(userGroup: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroup | String | - | - |

**Returns**: `boolean`



### getUsername() → String

**Returns**: `String`



### setUsername(username: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### newUser(name: String, orgId: Long) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |
| orgId | Long | - | - |

**Returns**: `User`



### User() → new

**Returns**: `new`



### getOrganisationId() → Long

**Returns**: `Long`



### setOrganisationId(organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `void`



### getEmail() → String

**Returns**: `String`



### setEmail(email: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `void`



### getPhoneNumber() → String

**Returns**: `String`



### setPhoneNumber(phoneNumber: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `void`



### isDisabledInCognito() → boolean

**Returns**: `boolean`



### setDisabledInCognito(disabledInCognito: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabledInCognito | boolean | - | - |

**Returns**: `void`



### getId() → Long

**Returns**: `Long`



### setId(id: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `void`



### getUuid() → String

**Returns**: `String`



### setUuid(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`



### getCatchment() → Catchment

**Returns**: `Catchment`



### getCatchmentId() → Optional<Long>

**Returns**: `Optional<Long>`



### setCatchment(Catchment: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Catchment | @NotNull | - | - |

**Returns**: `void`



### removeCatchment() → void

**Returns**: `void`



### isVoided() → Boolean

**Returns**: `Boolean`



### setVoided(voided: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| voided | boolean | - | - |

**Returns**: `void`



### getUserGroups() → List<UserGroup>

**Returns**: `List<UserGroup>`



### setUserGroups(userGroups: List<UserGroup>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroups | List<UserGroup> | - | - |

**Returns**: `void`



### equals(o: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Object | - | - |

**Returns**: `boolean`



### hashCode() → int

**Returns**: `int`



### isNew() → boolean

**Returns**: `boolean`



### setCreatedBy(createdBy: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createdBy | User | - | - |

**Returns**: `void`



### setCreatedDateTime(createdDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createdDateTime | DateTime | - | - |

**Returns**: `void`



### setLastModifiedBy(lastModifiedBy: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedBy | User | - | - |

**Returns**: `void`



### setLastModifiedDateTime(lastModifiedDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `void`



### getCreatedBy() → User

**Returns**: `User`



### getCreatedByUserName() → String

**Returns**: `String`



### getLastModifiedByUserName() → String

**Returns**: `String`



### getCreatedDateTime() → DateTime

**Returns**: `DateTime`



### getLastModifiedBy() → User

**Returns**: `User`



### getLastModifiedDateTime() → DateTime

**Returns**: `DateTime`



### getLastActivatedDateTime() → DateTime

**Returns**: `DateTime`



### setLastActivatedDateTime(lastActivatedDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastActivatedDateTime | DateTime | - | - |

**Returns**: `void`



### getSyncSettings() → JsonObject

**Returns**: `JsonObject`



### setSyncSettings(syncSettings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncSettings | JsonObject | - | - |

**Returns**: `void`



### isIgnoreSyncSettingsInDEA() → boolean

**Returns**: `boolean`



### setIgnoreSyncSettingsInDEA(ignoreSyncSettingsInDEA: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ignoreSyncSettingsInDEA | boolean | - | - |

**Returns**: `void`



### getAccountAdmin() → Set<AccountAdmin>

**Returns**: `Set<AccountAdmin>`



### setAccountAdmin(accountAdmin: AccountAdmin) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accountAdmin | AccountAdmin | - | - |

**Returns**: `void`



### isAdmin() → boolean

**Returns**: `boolean`



### setAdmin(admin: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| admin | boolean | - | - |

**Returns**: `void`



### getOperatingIndividualScope() → OperatingIndividualScope

**Returns**: `OperatingIndividualScope`



### setOperatingIndividualScope(OperatingIndividualScope: @NotNull) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| OperatingIndividualScope | @NotNull | - | - |

**Returns**: `void`



### getSettings() → JsonObject

**Returns**: `JsonObject`



### getUserSettings() → UserSettings

**Returns**: `UserSettings`



### UserSettings(unknown: this.settings) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.settings | - | - |

**Returns**: `new`



### setSettings(settings: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| settings | JsonObject | - | - |

**Returns**: `void`



### setAuditInfo(currentUser: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentUser | User | - | - |

**Returns**: `void`



### assignUUID() → void

**Returns**: `void`



### assignUUIDIfRequired() → void

**Returns**: `void`



### validateEmail(email: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `void`



### ValidationException(email: String.format("Invalid, unknown: email) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String.format("Invalid | - | - |
| unknown | email | - | - |

**Returns**: `new`



### validateUsername(username: String, userSuffix: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| userSuffix | String | - | - |

**Returns**: `void`



### ValidationException(username: String.format("Invalid, unknown: username) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | username | - | - |

**Returns**: `new`



### ValidationException(username: String.format("Invalid, unknown: username) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | username | - | - |

**Returns**: `new`



### ValidationException(username: String.format("Invalid, unknown: username, unknown: userSuffix) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| unknown | username | - | - |
| unknown | userSuffix | - | - |

**Returns**: `new`



### ValidationException(username: String.format("Invalid, at: contains, unknown: username, unknown: ValidationUtil.COMMON_INVALID_CHARS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String.format("Invalid | - | - |
| at | contains | - | - |
| unknown | username | - | - |
| unknown | ValidationUtil.COMMON_INVALID_CHARS | - | - |

**Returns**: `new`



### validateName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### ValidationException(name: String.format("Invalid, at: contains, unknown: name, unknown: ValidationUtil.NAME_INVALID_CHARS) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String.format("Invalid | - | - |
| at | contains | - | - |
| unknown | name | - | - |
| unknown | ValidationUtil.NAME_INVALID_CHARS | - | - |

**Returns**: `new`


