# API Reference: Msg91ConfigService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/Msg91ConfigService.java`

---

## Classes

### Msg91ConfigService

**Inherits from**: (none)

#### Methods

##### Msg91ConfigService(cryptoService: CryptoService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cryptoService | CryptoService | - | - |

**Returns**: `public`


##### encryptAuthKey(authKey: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authKey | String | - | - |

**Returns**: `String`


##### decryptAuthKey(encryptedAuthKey: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encryptedAuthKey | String | - | - |

**Returns**: `String`


##### String(unknown: cryptoService.decryptWithIVPrefixed(cryptoService.decodeFromBase64(encryptedAuthKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cryptoService.decryptWithIVPrefixed(cryptoService.decodeFromBase64(encryptedAuthKey | - | - |

**Returns**: `new`


##### maskAuthKey(authKey: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authKey | String | - | - |

**Returns**: `String`




## Functions

### Msg91ConfigService(cryptoService: CryptoService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cryptoService | CryptoService | - | - |

**Returns**: `public`



### encryptAuthKey(authKey: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authKey | String | - | - |

**Returns**: `String`



### decryptAuthKey(encryptedAuthKey: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encryptedAuthKey | String | - | - |

**Returns**: `String`



### String(unknown: cryptoService.decryptWithIVPrefixed(cryptoService.decodeFromBase64(encryptedAuthKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | cryptoService.decryptWithIVPrefixed(cryptoService.decodeFromBase64(encryptedAuthKey | - | - |

**Returns**: `new`



### maskAuthKey(authKey: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authKey | String | - | - |

**Returns**: `String`


