# API Reference: ConceptDirtyCheckingIntegrationTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/web/ConceptDirtyCheckingIntegrationTest.java`

---

## Classes

### ConceptDirtyCheckingIntegrationTest

**Inherits from**: AbstractControllerIntegrationTest

#### Methods

##### post(json: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| json | Object | - | - |

**Returns**: `void`


##### setUp() → void

**Returns**: `void`


##### conceptUpdateShouldModifyLastModifiedDateTime() → void

**Returns**: `void`


##### assertNoChangeInDates(conceptUuids: String[], before: List<DateTime>, after: List<DateTime>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuids | String[] | - | - |
| before | List<DateTime> | - | - |
| after | List<DateTime> | - | - |

**Returns**: `void`


##### dateTimesForConceptUuids(conceptUuids: String[]) → List<DateTime>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuids | String[] | - | - |

**Returns**: `List<DateTime>`




## Functions

### post(json: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| json | Object | - | - |

**Returns**: `void`



### setUp() → void

**Returns**: `void`



### conceptUpdateShouldModifyLastModifiedDateTime() → void

**Returns**: `void`



### assertNoChangeInDates(conceptUuids: String[], before: List<DateTime>, after: List<DateTime>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuids | String[] | - | - |
| before | List<DateTime> | - | - |
| after | List<DateTime> | - | - |

**Returns**: `void`



### dateTimesForConceptUuids(conceptUuids: String[]) → List<DateTime>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuids | String[] | - | - |

**Returns**: `List<DateTime>`


