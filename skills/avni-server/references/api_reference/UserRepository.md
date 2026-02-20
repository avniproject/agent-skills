# API Reference: UserRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/UserRepository.java`

---

## Functions

### findByUsername(username: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `User`



### findByUsernameIgnoreCaseAndIsVoidedFalse(username: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `User`



### findByUuid(uuid: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `User`



### findById(id: Long) → Optional<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `Optional<User>`



### findOne(id: Long) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `User`



### findById(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`



### findByOrganisationIdAndIsVoidedFalse(unknown: @Param("organisationId") → Page<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("organisationId" | - | - |

**Returns**: `Page<User>`



### findByIdIn(unknown: @Param("ids") → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `List<User>`



### findAllByOrganisationIdAndIsVoidedFalse(organisationId: Long) → List<UserWebProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `List<UserWebProjection>`



### findAllByIsVoidedFalseAndOrganisationId(organisationId: Long) → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `List<User>`



### findAllByOrganisationId(organisationId: Long) → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `List<User>`



### in(unknown: :accountIds) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :accountIds | - | - |

**Returns**: `id`



### findAccountAndOrgAdmins(username: String, name: String, email: String, phoneNumber: String, accountIds: List<Long>, pageable: Pageable) → Page<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| name | String | - | - |
| email | String | - | - |
| phoneNumber | String | - | - |
| accountIds | List<Long> | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<User>`



### in(unknown: :organisationIds) → organisationId

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :organisationIds | - | - |

**Returns**: `organisationId`



### in(unknown: :accountIds) → id

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | :accountIds | - | - |

**Returns**: `id`



### getOne(id: Long, accountIds: List<Long>, organisationIds: List<Long>) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| accountIds | List<Long> | - | - |
| organisationIds | List<Long> | - | - |

**Returns**: `User`



### existsByLastModifiedDateTimeGreaterThan(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### findByCatchment_IdInAndIsVoidedFalse(catchmentIds: List<Long>) → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentIds | List<Long> | - | - |

**Returns**: `List<User>`



### findByCatchmentAndIsVoidedFalse(catchment: Catchment) → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchment | Catchment | - | - |

**Returns**: `List<User>`



### getUser(userId: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | String | - | - |

**Returns**: `User`



### EntityNotFoundException(not: "User) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "User | - | - |

**Returns**: `new`



### findByPhoneNumber(phoneNumber: String) → Optional<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `Optional<User>`



### hasPrivilege(type: String, userId: long) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |
| userId | long | - | - |

**Returns**: `boolean`



### hasAnyOfSpecificPrivileges(types: List<String>, userId: long) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| types | List<String> | - | - |
| userId | long | - | - |

**Returns**: `boolean`



### bool_or(unknown: groups.has_all_privileges) → select

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groups.has_all_privileges | - | - |

**Returns**: `select`



### hasAll(userId: long) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | long | - | - |

**Returns**: `Boolean`



### hasSubjectPrivilege(type: String, subjectTypeId: long, userId: long) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |
| subjectTypeId | long | - | - |
| userId | long | - | - |

**Returns**: `boolean`



### hasAnyOfSpecificSubjectPrivileges(types: List<String>, subjectTypeId: long, userId: long) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| types | List<String> | - | - |
| subjectTypeId | long | - | - |
| userId | long | - | - |

**Returns**: `boolean`



### hasProgramPrivilege(type: String, programId: long, userId: long) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |
| programId | long | - | - |
| userId | long | - | - |

**Returns**: `boolean`



### hasProgramEncounterPrivilege(type: String, encounterTypeId: long, userId: long) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |
| encounterTypeId | long | - | - |
| userId | long | - | - |

**Returns**: `boolean`



### hasEncounterPrivilege(type: String, encounterTypeId: long, userId: long) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |
| encounterTypeId | long | - | - |
| userId | long | - | - |

**Returns**: `boolean`



### hasAllPrivileges(userId: long) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | long | - | - |

**Returns**: `boolean`



### getDefaultSuperAdmin() → User

**Returns**: `User`



### lower(unknown: users.settings->>'idPrefix') → where

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | users.settings->>'idPrefix' | - | - |

**Returns**: `where`



### getUsersWithSameIdPrefix(prefix: String, exceptUserId: long) → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | String | - | - |
| exceptUserId | long | - | - |

**Returns**: `List<User>`



### lower(unknown: users.settings->>'idPrefix') → where

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | users.settings->>'idPrefix' | - | - |

**Returns**: `where`



### getAllUsersWithSameIdPrefix(prefix: String) → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefix | String | - | - |

**Returns**: `List<User>`



### findTopByOrderByIdDesc() → User

**Returns**: `User`



### findAllByEmailIgnoreCaseAndIsVoidedFalse(email: String) → List<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| email | String | - | - |

**Returns**: `List<User>`



### getLatestUser() → User

**Returns**: `User`


