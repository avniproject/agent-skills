# API Reference: ScopeBasedSyncService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ScopeBasedSyncService.java`

---

## Functions

### ScopeBasedSyncService(addressLevelService: AddressLevelService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelService | AddressLevelService | - | - |

**Returns**: `public`



### getSyncResultsBySubjectTypeRegistrationLocation(repository: SyncableRepository<T>, user: User, lastModifiedDateTime: DateTime, now: DateTime, typeId: Long, pageable: Pageable, subjectType: SubjectType, syncEntityName: SyncEntityName) → Page<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | SyncableRepository<T> | - | - |
| user | User | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| typeId | Long | - | - |
| pageable | Pageable | - | - |
| subjectType | SubjectType | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `Page<T>`



### SyncParameters(unknown: lastModifiedDateTime, unknown: now, unknown: typeId, unknown: null, unknown: pageable, unknown: addressLevels, unknown: subjectType, unknown: user.getSyncSettings() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | typeId | - | - |
| unknown | null | - | - |
| unknown | pageable | - | - |
| unknown | addressLevels | - | - |
| unknown | subjectType | - | - |
| unknown | user.getSyncSettings( | - | - |

**Returns**: `new`



### getSyncResultsBySubjectTypeRegistrationLocation(repository: SyncableRepository<T>, user: User, lastModifiedDateTime: DateTime, now: DateTime, entityTypeUuid: String, pageable: Pageable, subjectType: SubjectType, syncEntityName: SyncEntityName) → Page<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | SyncableRepository<T> | - | - |
| user | User | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| entityTypeUuid | String | - | - |
| pageable | Pageable | - | - |
| subjectType | SubjectType | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `Page<T>`



### SyncParameters(unknown: lastModifiedDateTime, unknown: now, unknown: null, unknown: entityTypeUuid, unknown: pageable, unknown: addressLevels, unknown: subjectType, unknown: user.getSyncSettings() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | null | - | - |
| unknown | entityTypeUuid | - | - |
| unknown | pageable | - | - |
| unknown | addressLevels | - | - |
| unknown | subjectType | - | - |
| unknown | user.getSyncSettings( | - | - |

**Returns**: `new`



### getSyncResultsByCatchment(repository: SyncableRepository<T>, user: User, lastModifiedDateTime: DateTime, now: DateTime, pageable: Pageable, syncEntityName: SyncEntityName) → Page<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | SyncableRepository<T> | - | - |
| user | User | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| pageable | Pageable | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `Page<T>`



### SyncParameters(unknown: lastModifiedDateTime, unknown: now, unknown: null, unknown: null, unknown: pageable, unknown: null, unknown: null, unknown: user.getSyncSettings() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | pageable | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | user.getSyncSettings( | - | - |

**Returns**: `new`



### getSyncResultsBySubjectTypeRegistrationLocationAsSlice(repository: SyncableRepository<T>, user: User, lastModifiedDateTime: DateTime, now: DateTime, typeId: Long, pageable: Pageable, subjectType: SubjectType, syncEntityName: SyncEntityName) → Slice<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | SyncableRepository<T> | - | - |
| user | User | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| typeId | Long | - | - |
| pageable | Pageable | - | - |
| subjectType | SubjectType | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `Slice<T>`



### SyncParameters(unknown: lastModifiedDateTime, unknown: now, unknown: typeId, unknown: null, unknown: pageable, unknown: addressLevels, unknown: subjectType, unknown: user.getSyncSettings() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | typeId | - | - |
| unknown | null | - | - |
| unknown | pageable | - | - |
| unknown | addressLevels | - | - |
| unknown | subjectType | - | - |
| unknown | user.getSyncSettings( | - | - |

**Returns**: `new`



### getSyncResultsBySubjectTypeRegistrationLocationAsSlice(repository: SyncableRepository<T>, user: User, lastModifiedDateTime: DateTime, now: DateTime, entityTypeUuid: String, pageable: Pageable, subjectType: SubjectType, syncEntityName: SyncEntityName) → Slice<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | SyncableRepository<T> | - | - |
| user | User | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| entityTypeUuid | String | - | - |
| pageable | Pageable | - | - |
| subjectType | SubjectType | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `Slice<T>`



### SyncParameters(unknown: lastModifiedDateTime, unknown: now, unknown: null, unknown: entityTypeUuid, unknown: pageable, unknown: addressLevels, unknown: subjectType, unknown: user.getSyncSettings() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | null | - | - |
| unknown | entityTypeUuid | - | - |
| unknown | pageable | - | - |
| unknown | addressLevels | - | - |
| unknown | subjectType | - | - |
| unknown | user.getSyncSettings( | - | - |

**Returns**: `new`



### getSyncResultsByCatchmentAsSlice(repository: SyncableRepository<T>, user: User, lastModifiedDateTime: DateTime, now: DateTime, pageable: Pageable, syncEntityName: SyncEntityName) → Slice<T>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repository | SyncableRepository<T> | - | - |
| user | User | - | - |
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| pageable | Pageable | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `Slice<T>`



### SyncParameters(unknown: lastModifiedDateTime, unknown: now, unknown: null, unknown: null, unknown: pageable, unknown: null, unknown: null, unknown: user.getSyncSettings() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | now | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | pageable | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | user.getSyncSettings( | - | - |

**Returns**: `new`


