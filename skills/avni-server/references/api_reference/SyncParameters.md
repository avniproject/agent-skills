# API Reference: SyncParameters.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/dao/SyncParameters.java`

---

## Classes

### SyncParameters

**Inherits from**: (none)

#### Methods

##### SyncParameters(lastModifiedDateTime: DateTime, now: DateTime, typeId: Long, entityTypeUuid: String, pageable: Pageable, addressLevels: List<Long>, subjectType: SubjectType, syncSettings: JsonObject, syncEntityName: SyncEntityName, catchment: Catchment) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| typeId | Long | - | - |
| entityTypeUuid | String | - | - |
| pageable | Pageable | - | - |
| addressLevels | List<Long> | - | - |
| subjectType | SubjectType | - | - |
| syncSettings | JsonObject | - | - |
| syncEntityName | SyncEntityName | - | - |
| catchment | Catchment | - | - |

**Returns**: `public`


##### getLastModifiedDateTime() → DateTime

**Returns**: `DateTime`


##### getNow() → DateTime

**Returns**: `DateTime`


##### getTypeId() → Long

**Returns**: `Long`


##### getPageable() → Pageable

**Returns**: `Pageable`


##### getAddressLevels() → List<Long>

**Returns**: `List<Long>`


##### getSubjectType() → SubjectType

**Returns**: `SubjectType`


##### getSyncSettings() → JsonObject

**Returns**: `JsonObject`


##### isParentOrSelfIndividual() → boolean

**Returns**: `boolean`


##### isEncounter() → boolean

**Returns**: `boolean`


##### isParentOrSelfEnrolment() → boolean

**Returns**: `boolean`


##### isProgramEncounter() → boolean

**Returns**: `boolean`


##### getCatchment() → Catchment

**Returns**: `Catchment`


##### getSyncEntityName() → SyncEntityName

**Returns**: `SyncEntityName`


##### getEntityTypeUuid() → String

**Returns**: `String`


##### setEntityTypeUuid(entityTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityTypeUuid | String | - | - |

**Returns**: `void`


##### isModificationCheckOnEntity() → boolean

**Returns**: `boolean`




## Functions

### SyncParameters(lastModifiedDateTime: DateTime, now: DateTime, typeId: Long, entityTypeUuid: String, pageable: Pageable, addressLevels: List<Long>, subjectType: SubjectType, syncSettings: JsonObject, syncEntityName: SyncEntityName, catchment: Catchment) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| now | DateTime | - | - |
| typeId | Long | - | - |
| entityTypeUuid | String | - | - |
| pageable | Pageable | - | - |
| addressLevels | List<Long> | - | - |
| subjectType | SubjectType | - | - |
| syncSettings | JsonObject | - | - |
| syncEntityName | SyncEntityName | - | - |
| catchment | Catchment | - | - |

**Returns**: `public`



### getLastModifiedDateTime() → DateTime

**Returns**: `DateTime`



### getNow() → DateTime

**Returns**: `DateTime`



### getTypeId() → Long

**Returns**: `Long`



### getPageable() → Pageable

**Returns**: `Pageable`



### getAddressLevels() → List<Long>

**Returns**: `List<Long>`



### getSubjectType() → SubjectType

**Returns**: `SubjectType`



### getSyncSettings() → JsonObject

**Returns**: `JsonObject`



### isParentOrSelfIndividual() → boolean

**Returns**: `boolean`



### isEncounter() → boolean

**Returns**: `boolean`



### isParentOrSelfEnrolment() → boolean

**Returns**: `boolean`



### isProgramEncounter() → boolean

**Returns**: `boolean`



### getCatchment() → Catchment

**Returns**: `Catchment`



### getSyncEntityName() → SyncEntityName

**Returns**: `SyncEntityName`



### getEntityTypeUuid() → String

**Returns**: `String`



### setEntityTypeUuid(entityTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityTypeUuid | String | - | - |

**Returns**: `void`



### isModificationCheckOnEntity() → boolean

**Returns**: `boolean`


