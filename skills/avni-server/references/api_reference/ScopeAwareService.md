# API Reference: ScopeAwareService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ScopeAwareService.java`

---

## Functions

### isChangedBySubjectTypeRegistrationLocationType(user: User, lastModifiedDateTime: DateTime, typeId: Long, subjectType: SubjectType, syncEntityName: SyncEntityName) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDateTime | DateTime | - | - |
| typeId | Long | - | - |
| subjectType | SubjectType | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `boolean`



### ValidationException(unknown: "CatchmentTooLarge") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "CatchmentTooLarge" | - | - |

**Returns**: `new`



### repository() → return

**Returns**: `return`



### SyncParameters(unknown: lastModifiedDateTime, unknown: DateTime.now() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | DateTime.now( | - | - |

**Returns**: `new`



### isChangedByCatchment(user: User, lastModifiedDateTime: DateTime, syncEntityName: SyncEntityName) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| lastModifiedDateTime | DateTime | - | - |
| syncEntityName | SyncEntityName | - | - |

**Returns**: `boolean`



### ValidationException(unknown: "NoCatchmentFound") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "NoCatchmentFound" | - | - |

**Returns**: `new`



### repository() → return

**Returns**: `return`



### SyncParameters(unknown: lastModifiedDateTime, unknown: DateTime.now() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | lastModifiedDateTime | - | - |
| unknown | DateTime.now( | - | - |

**Returns**: `new`



### repository() → SyncableRepository<T>

**Returns**: `SyncableRepository<T>`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, typeUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| typeUUID | String | - | - |

**Returns**: `boolean`


