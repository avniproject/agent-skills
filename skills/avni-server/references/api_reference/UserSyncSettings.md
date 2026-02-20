# API Reference: UserSyncSettings.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/syncAttribute/UserSyncSettings.java`

---

## Classes

### UserSyncSettings

**Inherits from**: Serializable

#### Methods

##### UserSyncSettings() → public

**Returns**: `public`


##### UserSyncSettings(subjectTypeUUID: String, syncConcept1: String, syncConcept1Values: List<String>, syncConcept2: String, syncConcept2Values: List<String>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| syncConcept1 | String | - | - |
| syncConcept1Values | List<String> | - | - |
| syncConcept2 | String | - | - |
| syncConcept2Values | List<String> | - | - |

**Returns**: `public`


##### fromUserSyncWebJSON(subjectTypeSyncSettings: JsonObject, subjectTypeRepository: SubjectTypeRepository) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeSyncSettings | JsonObject | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### UserSyncSettings(unknown: subjectType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType.getUuid( | - | - |

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### isValidAttribute(syncSettings: LinkedHashMap, keyName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncSettings | LinkedHashMap | - | - |
| keyName | String | - | - |

**Returns**: `boolean`


##### toWebResponse(syncSettings: JsonObject, subjectTypeRepository: SubjectTypeRepository) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncSettings | JsonObject | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `JsonObject`


##### JsonObject() → new

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### getSubjectTypeUUID() → String

**Returns**: `String`


##### getSyncConcept1() → String

**Returns**: `String`


##### getSyncConcept1Values() → List<String>

**Returns**: `List<String>`


##### getSyncConcept2() → String

**Returns**: `String`


##### getSyncConcept2Values() → List<String>

**Returns**: `List<String>`


##### setSubjectTypeUUID(subjectTypeUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `void`


##### setSyncConcept1(syncConcept1: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncConcept1 | String | - | - |

**Returns**: `void`


##### setSyncConcept1Values(syncConcept1Values: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncConcept1Values | List<String> | - | - |

**Returns**: `void`


##### setSyncConcept2(syncConcept2: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncConcept2 | String | - | - |

**Returns**: `void`


##### setSyncConcept2Values(syncConcept2Values: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncConcept2Values | List<String> | - | - |

**Returns**: `void`


##### hasSync1Value(value: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |

**Returns**: `boolean`


##### hasSync2Value(value: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |

**Returns**: `boolean`




## Functions

### UserSyncSettings() → public

**Returns**: `public`



### UserSyncSettings(subjectTypeUUID: String, syncConcept1: String, syncConcept1Values: List<String>, syncConcept2: String, syncConcept2Values: List<String>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| syncConcept1 | String | - | - |
| syncConcept1Values | List<String> | - | - |
| syncConcept2 | String | - | - |
| syncConcept2Values | List<String> | - | - |

**Returns**: `public`



### fromUserSyncWebJSON(subjectTypeSyncSettings: JsonObject, subjectTypeRepository: SubjectTypeRepository) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeSyncSettings | JsonObject | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### UserSyncSettings(unknown: subjectType.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectType.getUuid( | - | - |

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### isValidAttribute(syncSettings: LinkedHashMap, keyName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncSettings | LinkedHashMap | - | - |
| keyName | String | - | - |

**Returns**: `boolean`



### toWebResponse(syncSettings: JsonObject, subjectTypeRepository: SubjectTypeRepository) → JsonObject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncSettings | JsonObject | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `JsonObject`



### JsonObject() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### getSubjectTypeUUID() → String

**Returns**: `String`



### getSyncConcept1() → String

**Returns**: `String`



### getSyncConcept1Values() → List<String>

**Returns**: `List<String>`



### getSyncConcept2() → String

**Returns**: `String`



### getSyncConcept2Values() → List<String>

**Returns**: `List<String>`



### setSubjectTypeUUID(subjectTypeUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `void`



### setSyncConcept1(syncConcept1: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncConcept1 | String | - | - |

**Returns**: `void`



### setSyncConcept1Values(syncConcept1Values: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncConcept1Values | List<String> | - | - |

**Returns**: `void`



### setSyncConcept2(syncConcept2: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncConcept2 | String | - | - |

**Returns**: `void`



### setSyncConcept2Values(syncConcept2Values: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncConcept2Values | List<String> | - | - |

**Returns**: `void`



### hasSync1Value(value: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |

**Returns**: `boolean`



### hasSync2Value(value: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |

**Returns**: `boolean`


