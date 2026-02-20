# API Reference: MinioUri.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/util/MinioUri.java`

---

## Classes

### MinioUri

**Inherits from**: (none)

#### Methods

##### MinioUri(str: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |

**Returns**: `public`


##### MinioUri(str: String, urlEncode: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |
| urlEncode | boolean | - | - |

**Returns**: `public`


##### MinioUri(uri: URI) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | URI | - | - |

**Returns**: `public`


##### MinioUri(uri: URI, urlEncode: boolean) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | URI | - | - |
| urlEncode | boolean | - | - |

**Returns**: `private`


##### IllegalArgumentException(cannot: "uri) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannot | "uri | - | - |

**Returns**: `new`


##### IllegalArgumentException(minio: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minio | "Invalid | - | - |

**Returns**: `new`


##### IllegalArgumentException(minio: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minio | "Invalid | - | - |

**Returns**: `new`


##### IllegalArgumentException(minio: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minio | "Invalid | - | - |

**Returns**: `new`


##### parse(null: possibly) → to

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | possibly | - | - |

**Returns**: `to`


##### versionId(null: possibly) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | possibly | - | - |

**Returns**: `the`


##### parseVersionId(query: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | String | - | - |

**Returns**: `String`


##### decode(unknown: param.substring(10) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | param.substring(10 | - | - |

**Returns**: `return`


##### getURI() → URI

**Returns**: `URI`


##### isPathStyle() → boolean

**Returns**: `boolean`


##### URI(null: or) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | or | - | - |

**Returns**: `the`


##### getBucket() → String

**Returns**: `String`


##### URI(null: or) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | or | - | - |

**Returns**: `the`


##### getKey() → String

**Returns**: `String`


##### URI(null: or) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | or | - | - |

**Returns**: `the`


##### getVersionId() → String

**Returns**: `String`


##### URI(null: or) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | or | - | - |

**Returns**: `the`


##### getRegion() → String

**Returns**: `String`


##### toString() → String

**Returns**: `String`


##### preprocessUrlStr(str: String, encode: boolean) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |
| encode | boolean | - | - |

**Returns**: `String`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### decode(str: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |

**Returns**: `String`


##### decode(unknown: str, unknown: i) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | str | - | - |
| unknown | i | - | - |

**Returns**: `return`


##### decode(str: String, firstPercent: int) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |
| firstPercent | int | - | - |

**Returns**: `String`


##### StringBuilder() → new

**Returns**: `new`


##### appendDecoded(builder: StringBuilder, str: String, index: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| builder | StringBuilder | - | - |
| str | String | - | - |
| index | int | - | - |

**Returns**: `void`


##### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`


##### character(unknown: 0-9A-Fa-f) → hex

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 0-9A-Fa-f | - | - |

**Returns**: `hex`


##### fromHex(c: char) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | char | - | - |

**Returns**: `int`


##### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`


##### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`


##### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`


##### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`


##### equals(o: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Object | - | - |

**Returns**: `boolean`


##### hashCode() → int

**Returns**: `int`




## Functions

### MinioUri(str: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |

**Returns**: `public`



### MinioUri(str: String, urlEncode: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |
| urlEncode | boolean | - | - |

**Returns**: `public`



### MinioUri(uri: URI) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | URI | - | - |

**Returns**: `public`



### MinioUri(uri: URI, urlEncode: boolean) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uri | URI | - | - |
| urlEncode | boolean | - | - |

**Returns**: `private`



### IllegalArgumentException(cannot: "uri) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cannot | "uri | - | - |

**Returns**: `new`



### IllegalArgumentException(minio: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minio | "Invalid | - | - |

**Returns**: `new`



### IllegalArgumentException(minio: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minio | "Invalid | - | - |

**Returns**: `new`



### IllegalArgumentException(minio: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| minio | "Invalid | - | - |

**Returns**: `new`



### parse(null: possibly) → to

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | possibly | - | - |

**Returns**: `to`



### versionId(null: possibly) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | possibly | - | - |

**Returns**: `the`



### parseVersionId(query: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | String | - | - |

**Returns**: `String`



### decode(unknown: param.substring(10) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | param.substring(10 | - | - |

**Returns**: `return`



### getURI() → URI

**Returns**: `URI`



### isPathStyle() → boolean

**Returns**: `boolean`



### URI(null: or) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | or | - | - |

**Returns**: `the`



### getBucket() → String

**Returns**: `String`



### URI(null: or) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | or | - | - |

**Returns**: `the`



### getKey() → String

**Returns**: `String`



### URI(null: or) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | or | - | - |

**Returns**: `the`



### getVersionId() → String

**Returns**: `String`



### URI(null: or) → the

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| null | or | - | - |

**Returns**: `the`



### getRegion() → String

**Returns**: `String`



### toString() → String

**Returns**: `String`



### preprocessUrlStr(str: String, encode: boolean) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |
| encode | boolean | - | - |

**Returns**: `String`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### decode(str: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |

**Returns**: `String`



### decode(unknown: str, unknown: i) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | str | - | - |
| unknown | i | - | - |

**Returns**: `return`



### decode(str: String, firstPercent: int) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| str | String | - | - |
| firstPercent | int | - | - |

**Returns**: `String`



### StringBuilder() → new

**Returns**: `new`



### appendDecoded(builder: StringBuilder, str: String, index: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| builder | StringBuilder | - | - |
| str | String | - | - |
| index | int | - | - |

**Returns**: `void`



### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`



### character(unknown: 0-9A-Fa-f) → hex

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 0-9A-Fa-f | - | - |

**Returns**: `hex`



### fromHex(c: char) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c | char | - | - |

**Returns**: `int`



### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`



### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`



### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`



### IllegalStateException(percent-encoded: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| percent-encoded | "Invalid | - | - |

**Returns**: `new`



### equals(o: Object) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| o | Object | - | - |

**Returns**: `boolean`



### hashCode() → int

**Returns**: `int`


