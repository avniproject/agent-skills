# API Reference: Row.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/model/Row.java`

---

## Functions

### Row(headers: String[], values: String[]) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | String[] | - | - |
| values | String[] | - | - |

**Returns**: `public`



### nullSafeTrim(s: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| s | String | - | - |

**Returns**: `String`



### get(headers: List<String>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | List<String> | - | - |

**Returns**: `List<String>`



### get(key: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | Object | - | - |

**Returns**: `String`



### getObservation(key: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | Object | - | - |

**Returns**: `String`



### getOrDefault(key: Object, defaultValue: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| key | Object | - | - |
| defaultValue | String | - | - |

**Returns**: `String`



### toString() → String

**Returns**: `String`



### getBool(header: String) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| header | String | - | - |

**Returns**: `Boolean`



### ensureDateIsPresentAndNotInFuture(headerColumnName: String, errorMsgs: List<String>) → LocalDate

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headerColumnName | String | - | - |
| errorMsgs | List<String> | - | - |

**Returns**: `LocalDate`


