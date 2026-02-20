# API Reference: MetabaseService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/metabase/MetabaseService.java`

---

## Classes

### MetabaseService

**Inherits from**: (none)

#### Methods

##### MetabaseService(organisationService: OrganisationService, avniDatabase: AvniDatabase, databaseRepository: MetabaseDatabaseRepository, groupPermissionsRepository: GroupPermissionsRepository, collectionPermissionsRepository: CollectionPermissionsRepository, collectionRepository: CollectionRepository, metabaseDashboardRepository: MetabaseDashboardRepository, metabaseGroupRepository: MetabaseGroupRepository, metabaseUserRepository: MetabaseUserRepository, metabaseDatabaseRepository: MetabaseDatabaseRepository, selfServiceBatchConfig: SelfServiceBatchConfig, userRepository: UserRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationService | OrganisationService | - | - |
| avniDatabase | AvniDatabase | - | - |
| databaseRepository | MetabaseDatabaseRepository | - | - |
| groupPermissionsRepository | GroupPermissionsRepository | - | - |
| collectionPermissionsRepository | CollectionPermissionsRepository | - | - |
| collectionRepository | CollectionRepository | - | - |
| metabaseDashboardRepository | MetabaseDashboardRepository | - | - |
| metabaseGroupRepository | MetabaseGroupRepository | - | - |
| metabaseUserRepository | MetabaseUserRepository | - | - |
| metabaseDatabaseRepository | MetabaseDatabaseRepository | - | - |
| selfServiceBatchConfig | SelfServiceBatchConfig | - | - |
| userRepository | UserRepository | - | - |

**Returns**: `public`


##### setupDatabase() → boolean

**Returns**: `boolean`


##### DatabaseDetails(unknown: avniDatabase, unknown: organisation.getDbUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | avniDatabase | - | - |
| unknown | organisation.getDbUser( | - | - |

**Returns**: `new`


##### tearDownDatabase() → void

**Returns**: `void`


##### setupCollection() → void

**Returns**: `void`


##### CreateCollectionRequest(unknown: currentOrganisation.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | currentOrganisation.getName( | - | - |

**Returns**: `new`


##### tearDownMetabaseCollection() → void

**Returns**: `void`


##### setupMetabaseGroup() → void

**Returns**: `void`


##### tearDownMetabaseGroup() → void

**Returns**: `void`


##### setupCollectionPermissions() → void

**Returns**: `void`


##### setupDashboard() → void

**Returns**: `void`


##### CreateDashboardRequest(unknown: null, unknown: getGlobalCollection() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | getGlobalCollection( | - | - |

**Returns**: `new`


##### setupMetabase() → void

**Returns**: `void`


##### tearDownMetabase() → void

**Returns**: `void`


##### getGlobalCollection() → CollectionInfoResponse

**Returns**: `CollectionInfoResponse`


##### upsertUsersOnMetabase(userGroups: List<UserGroup>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroups | List<UserGroup> | - | - |

**Returns**: `void`


##### CreateUserRequest(unknown: firstName, unknown: lastName, unknown: value.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | firstName | - | - |
| unknown | lastName | - | - |
| unknown | value.getUser( | - | - |

**Returns**: `new`


##### UpdateUserGroupRequest(unknown: metabaseUser.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | metabaseUser.getId( | - | - |

**Returns**: `new`


##### removeUserFromMetabaseGroup(groupId: Integer, userId: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | Integer | - | - |
| userId | Integer | - | - |

**Returns**: `void`


##### fixDatabaseSyncSchedule() → void

**Returns**: `void`


##### waitForDatabaseSyncToComplete(organisation: Organisation, database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| database | Database | - | - |

**Returns**: `void`


##### getInitialSyncStatus() → SyncStatus

**Returns**: `SyncStatus`


##### syncDatabase() → Database

**Returns**: `Database`


##### getResourcesPresent() → List<String>

**Returns**: `List<String>`




## Functions

### MetabaseService(organisationService: OrganisationService, avniDatabase: AvniDatabase, databaseRepository: MetabaseDatabaseRepository, groupPermissionsRepository: GroupPermissionsRepository, collectionPermissionsRepository: CollectionPermissionsRepository, collectionRepository: CollectionRepository, metabaseDashboardRepository: MetabaseDashboardRepository, metabaseGroupRepository: MetabaseGroupRepository, metabaseUserRepository: MetabaseUserRepository, metabaseDatabaseRepository: MetabaseDatabaseRepository, selfServiceBatchConfig: SelfServiceBatchConfig, userRepository: UserRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationService | OrganisationService | - | - |
| avniDatabase | AvniDatabase | - | - |
| databaseRepository | MetabaseDatabaseRepository | - | - |
| groupPermissionsRepository | GroupPermissionsRepository | - | - |
| collectionPermissionsRepository | CollectionPermissionsRepository | - | - |
| collectionRepository | CollectionRepository | - | - |
| metabaseDashboardRepository | MetabaseDashboardRepository | - | - |
| metabaseGroupRepository | MetabaseGroupRepository | - | - |
| metabaseUserRepository | MetabaseUserRepository | - | - |
| metabaseDatabaseRepository | MetabaseDatabaseRepository | - | - |
| selfServiceBatchConfig | SelfServiceBatchConfig | - | - |
| userRepository | UserRepository | - | - |

**Returns**: `public`



### setupDatabase() → boolean

**Returns**: `boolean`



### DatabaseDetails(unknown: avniDatabase, unknown: organisation.getDbUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | avniDatabase | - | - |
| unknown | organisation.getDbUser( | - | - |

**Returns**: `new`



### tearDownDatabase() → void

**Returns**: `void`



### setupCollection() → void

**Returns**: `void`



### CreateCollectionRequest(unknown: currentOrganisation.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | currentOrganisation.getName( | - | - |

**Returns**: `new`



### tearDownMetabaseCollection() → void

**Returns**: `void`



### setupMetabaseGroup() → void

**Returns**: `void`



### tearDownMetabaseGroup() → void

**Returns**: `void`



### setupCollectionPermissions() → void

**Returns**: `void`



### setupDashboard() → void

**Returns**: `void`



### CreateDashboardRequest(unknown: null, unknown: getGlobalCollection() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | null | - | - |
| unknown | getGlobalCollection( | - | - |

**Returns**: `new`



### setupMetabase() → void

**Returns**: `void`



### tearDownMetabase() → void

**Returns**: `void`



### getGlobalCollection() → CollectionInfoResponse

**Returns**: `CollectionInfoResponse`



### upsertUsersOnMetabase(userGroups: List<UserGroup>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userGroups | List<UserGroup> | - | - |

**Returns**: `void`



### CreateUserRequest(unknown: firstName, unknown: lastName, unknown: value.getUser() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | firstName | - | - |
| unknown | lastName | - | - |
| unknown | value.getUser( | - | - |

**Returns**: `new`



### UpdateUserGroupRequest(unknown: metabaseUser.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | metabaseUser.getId( | - | - |

**Returns**: `new`



### removeUserFromMetabaseGroup(groupId: Integer, userId: Integer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | Integer | - | - |
| userId | Integer | - | - |

**Returns**: `void`



### fixDatabaseSyncSchedule() → void

**Returns**: `void`



### waitForDatabaseSyncToComplete(organisation: Organisation, database: Database) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| database | Database | - | - |

**Returns**: `void`



### getInitialSyncStatus() → SyncStatus

**Returns**: `SyncStatus`



### syncDatabase() → Database

**Returns**: `Database`



### getResourcesPresent() → List<String>

**Returns**: `List<String>`


