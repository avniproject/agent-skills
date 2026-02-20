# API Reference: MetadataChangeReport.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/metadata/MetadataChangeReport.java`

---

## Classes

### MetadataChangeReport

**Inherits from**: (none)

#### Methods

##### getNumberOfModifications() → int

**Returns**: `int`


##### getAllValues(unknown: Map<String, map: Object>, values: List<Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | Object> | - | - |
| values | List<Object> | - | - |

**Returns**: `void`


##### addChange(fileName: String, collectionChangeReport: ObjectCollectionChangeReport) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| collectionChangeReport | ObjectCollectionChangeReport | - | - |

**Returns**: `void`


##### setMissingInExisting(missing: Set<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| missing | Set<String> | - | - |

**Returns**: `void`


##### setMissingInNew(missing: Set<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| missing | Set<String> | - | - |

**Returns**: `void`


##### setError(unknown: Map<String, errorResult: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| errorResult | Object> | - | - |

**Returns**: `void`


##### getFileChangeReports() → Map<String, ObjectCollectionChangeReport>

**Returns**: `Map<String, ObjectCollectionChangeReport>`


##### getMissingFilesInNew() → List<String>

**Returns**: `List<String>`


##### getMissingFilesInExisting() → List<String>

**Returns**: `List<String>`


##### getErrors() → Map<String, Object>

**Returns**: `Map<String, Object>`




## Functions

### getNumberOfModifications() → int

**Returns**: `int`



### getAllValues(unknown: Map<String, map: Object>, values: List<Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| map | Object> | - | - |
| values | List<Object> | - | - |

**Returns**: `void`



### addChange(fileName: String, collectionChangeReport: ObjectCollectionChangeReport) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fileName | String | - | - |
| collectionChangeReport | ObjectCollectionChangeReport | - | - |

**Returns**: `void`



### setMissingInExisting(missing: Set<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| missing | Set<String> | - | - |

**Returns**: `void`



### setMissingInNew(missing: Set<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| missing | Set<String> | - | - |

**Returns**: `void`



### setError(unknown: Map<String, errorResult: Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| errorResult | Object> | - | - |

**Returns**: `void`



### getFileChangeReports() → Map<String, ObjectCollectionChangeReport>

**Returns**: `Map<String, ObjectCollectionChangeReport>`



### getMissingFilesInNew() → List<String>

**Returns**: `List<String>`



### getMissingFilesInExisting() → List<String>

**Returns**: `List<String>`



### getErrors() → Map<String, Object>

**Returns**: `Map<String, Object>`


