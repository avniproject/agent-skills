# API Reference: UserService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/UserService.java`

---

## Classes

### UserService

**Inherits from**: NonScopeAwareService

#### Methods

##### UserService(userRepository: UserRepository, groupRepository: GroupRepository, userGroupRepository: UserGroupRepository, userSubjectRepository: UserSubjectRepository, individualRepository: IndividualRepository, subjectTypeRepository: SubjectTypeRepository, idpServiceFactory: IdpServiceFactory, accountAdminRepository: AccountAdminRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| groupRepository | GroupRepository | - | - |
| userGroupRepository | UserGroupRepository | - | - |
| userSubjectRepository | UserSubjectRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| accountAdminRepository | AccountAdminRepository | - | - |

**Returns**: `public`


##### getCurrentUser() → User

**Returns**: `User`


##### save(user: User) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `User`


##### synchronized(unknown: String.format("%d-USER-ID-PREFIX-%s", unknown: user.getOrganisationId() → idPrefix

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format("%d-USER-ID-PREFIX-%s" | - | - |
| unknown | user.getOrganisationId( | - | - |

**Returns**: `idPrefix`


##### createUpdateUser(unknown: user) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |

**Returns**: `return`


##### ValidationException(is: String.format("There, unknown: usersWithSameIdPrefix.get(0) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | String.format("There | - | - |
| unknown | usersWithSameIdPrefix.get(0 | - | - |

**Returns**: `new`


##### createUpdateUser(unknown: user) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |

**Returns**: `return`


##### createUpdateUser(user: User) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `User`


##### addToDefaultUserGroup(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`


##### associateUserToGroups(user: User, associatedGroupIds: List<Long>) → List<UserGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| associatedGroupIds | List<Long> | - | - |

**Returns**: `List<UserGroup>`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### findByUuid(uuid: String) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `User`


##### findById(id: Long) → Optional<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `Optional<User>`


##### findByPhoneNumber(phoneNumber: String) → Optional<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `Optional<User>`


##### addToGroups(user: User, groupsSpecified: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| groupsSpecified | String | - | - |

**Returns**: `void`


##### RuntimeException(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`


##### ensureSubjectsForUserSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### ensureSubjectForUser(user: User, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### RuntimeException(type:: String.format("Subject, unknown: subjectType.getType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type: | String.format("Subject | - | - |
| unknown | subjectType.getType( | - | - |

**Returns**: `new`


##### UserSubject() → new

**Returns**: `new`


##### Individual() → new

**Returns**: `new`


##### setPhoneNumber(phoneNumber: String, user: User, userRegion: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| user | User | - | - |
| userRegion | String | - | - |

**Returns**: `void`


##### ValidationException(unknown: PhoneNumberUtil.getInvalidMessage(phoneNumber, unknown: userRegion) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | PhoneNumberUtil.getInvalidMessage(phoneNumber | - | - |
| unknown | userRegion | - | - |

**Returns**: `new`


##### isAdmin(user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `boolean`




## Functions

### UserService(userRepository: UserRepository, groupRepository: GroupRepository, userGroupRepository: UserGroupRepository, userSubjectRepository: UserSubjectRepository, individualRepository: IndividualRepository, subjectTypeRepository: SubjectTypeRepository, idpServiceFactory: IdpServiceFactory, accountAdminRepository: AccountAdminRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userRepository | UserRepository | - | - |
| groupRepository | GroupRepository | - | - |
| userGroupRepository | UserGroupRepository | - | - |
| userSubjectRepository | UserSubjectRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| idpServiceFactory | IdpServiceFactory | - | - |
| accountAdminRepository | AccountAdminRepository | - | - |

**Returns**: `public`



### getCurrentUser() → User

**Returns**: `User`



### save(user: User) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `User`



### synchronized(unknown: String.format("%d-USER-ID-PREFIX-%s", unknown: user.getOrganisationId() → idPrefix

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.format("%d-USER-ID-PREFIX-%s" | - | - |
| unknown | user.getOrganisationId( | - | - |

**Returns**: `idPrefix`



### createUpdateUser(unknown: user) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |

**Returns**: `return`



### ValidationException(is: String.format("There, unknown: usersWithSameIdPrefix.get(0) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | String.format("There | - | - |
| unknown | usersWithSameIdPrefix.get(0 | - | - |

**Returns**: `new`



### createUpdateUser(unknown: user) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | user | - | - |

**Returns**: `return`



### createUpdateUser(user: User) → User

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `User`



### addToDefaultUserGroup(user: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `void`



### associateUserToGroups(user: User, associatedGroupIds: List<Long>) → List<UserGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| associatedGroupIds | List<Long> | - | - |

**Returns**: `List<UserGroup>`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



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



### findByPhoneNumber(phoneNumber: String) → Optional<User>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `Optional<User>`



### addToGroups(user: User, groupsSpecified: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| groupsSpecified | String | - | - |

**Returns**: `void`



### RuntimeException(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`



### ensureSubjectsForUserSubjectType(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



### ensureSubjectForUser(user: User, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`



### RuntimeException(type:: String.format("Subject, unknown: subjectType.getType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type: | String.format("Subject | - | - |
| unknown | subjectType.getType( | - | - |

**Returns**: `new`



### UserSubject() → new

**Returns**: `new`



### Individual() → new

**Returns**: `new`



### setPhoneNumber(phoneNumber: String, user: User, userRegion: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| user | User | - | - |
| userRegion | String | - | - |

**Returns**: `void`



### ValidationException(unknown: PhoneNumberUtil.getInvalidMessage(phoneNumber, unknown: userRegion) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | PhoneNumberUtil.getInvalidMessage(phoneNumber | - | - |
| unknown | userRegion | - | - |

**Returns**: `new`



### isAdmin(user: User) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `boolean`


