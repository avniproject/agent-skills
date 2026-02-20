# API Reference: MetadataDiffChecker.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/MetadataDiffChecker.java`

---

## Classes

### MetadataDiffChecker

**Inherits from**: (none)

#### Methods

##### findCollectionDifference(unknown: Map<String, candidateEntityEntries: Object>, unknown: Map<String, existingEntityEntries: Object>) → ObjectCollectionChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| candidateEntityEntries | Object> | - | - |
| unknown | Map<String | - | - |
| existingEntityEntries | Object> | - | - |

**Returns**: `ObjectCollectionChangeReport`


##### ObjectCollectionChangeReport() → new

**Returns**: `new`


##### findObjectDifference(parentObjectUuid: String, unknown: Map<String, candidateObject: Object>, unknown: Map<String, existingObject: Object>) → ObjectChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentObjectUuid | String | - | - |
| unknown | Map<String | - | - |
| candidateObject | Object> | - | - |
| unknown | Map<String | - | - |
| existingObject | Object> | - | - |

**Returns**: `ObjectChangeReport`


##### findArrayDifferences(candidateArray: List<Object>, existingArray: List<Object>) → ObjectCollectionChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| candidateArray | List<Object> | - | - |
| existingArray | List<Object> | - | - |

**Returns**: `ObjectCollectionChangeReport`




## Functions

### findCollectionDifference(unknown: Map<String, candidateEntityEntries: Object>, unknown: Map<String, existingEntityEntries: Object>) → ObjectCollectionChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| candidateEntityEntries | Object> | - | - |
| unknown | Map<String | - | - |
| existingEntityEntries | Object> | - | - |

**Returns**: `ObjectCollectionChangeReport`



### ObjectCollectionChangeReport() → new

**Returns**: `new`



### findObjectDifference(parentObjectUuid: String, unknown: Map<String, candidateObject: Object>, unknown: Map<String, existingObject: Object>) → ObjectChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentObjectUuid | String | - | - |
| unknown | Map<String | - | - |
| candidateObject | Object> | - | - |
| unknown | Map<String | - | - |
| existingObject | Object> | - | - |

**Returns**: `ObjectChangeReport`



### findArrayDifferences(candidateArray: List<Object>, existingArray: List<Object>) → ObjectCollectionChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| candidateArray | List<Object> | - | - |
| existingArray | List<Object> | - | - |

**Returns**: `ObjectCollectionChangeReport`


