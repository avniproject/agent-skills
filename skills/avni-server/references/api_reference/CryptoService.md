# API Reference: CryptoService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/CryptoService.java`

---

## Classes

### CryptoService

**Inherits from**: (none)

#### Methods

##### SecureRandom() → new

**Returns**: `new`


##### encodeToBase64(valueToEncode: byte[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| valueToEncode | byte[] | - | - |

**Returns**: `String`


##### getSecretKey(base64EncodedKey: String) → SecretKey

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| base64EncodedKey | String | - | - |

**Returns**: `SecretKey`


##### SecretKeySpec(unknown: decodedKey, unknown: 0, unknown: decodedKey.length, unknown: ALGO) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | decodedKey | - | - |
| unknown | 0 | - | - |
| unknown | decodedKey.length | - | - |
| unknown | ALGO | - | - |

**Returns**: `new`


##### GCMParameterSpec(unknown: TAG_LENGTH_BIT, unknown: iv) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | TAG_LENGTH_BIT | - | - |
| unknown | iv | - | - |

**Returns**: `new`


##### GCMParameterSpec(unknown: TAG_LENGTH_BIT, unknown: iv) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | TAG_LENGTH_BIT | - | - |
| unknown | iv | - | - |

**Returns**: `new`


##### decrypt(unknown: cText, unknown: secretKey, unknown: iv) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cText | - | - |
| unknown | secretKey | - | - |
| unknown | iv | - | - |

**Returns**: `return`




## Functions

### SecureRandom() → new

**Returns**: `new`



### encodeToBase64(valueToEncode: byte[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| valueToEncode | byte[] | - | - |

**Returns**: `String`



### getSecretKey(base64EncodedKey: String) → SecretKey

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| base64EncodedKey | String | - | - |

**Returns**: `SecretKey`



### SecretKeySpec(unknown: decodedKey, unknown: 0, unknown: decodedKey.length, unknown: ALGO) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | decodedKey | - | - |
| unknown | 0 | - | - |
| unknown | decodedKey.length | - | - |
| unknown | ALGO | - | - |

**Returns**: `new`



### GCMParameterSpec(unknown: TAG_LENGTH_BIT, unknown: iv) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | TAG_LENGTH_BIT | - | - |
| unknown | iv | - | - |

**Returns**: `new`



### GCMParameterSpec(unknown: TAG_LENGTH_BIT, unknown: iv) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | TAG_LENGTH_BIT | - | - |
| unknown | iv | - | - |

**Returns**: `new`



### decrypt(unknown: cText, unknown: secretKey, unknown: iv) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cText | - | - |
| unknown | secretKey | - | - |
| unknown | iv | - | - |

**Returns**: `return`


