# API Reference: Msg91ConfigContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/Msg91ConfigContract.java`

---

## Classes

### Msg91ConfigContract

**Inherits from**: CHSRequest

#### Methods

##### getAuthKey() → String

**Returns**: `String`


##### setAuthKey(authKey: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authKey | String | - | - |

**Returns**: `void`


##### getOtpSmsTemplateId() → String

**Returns**: `String`


##### setOtpSmsTemplateId(otpSmsTemplateId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| otpSmsTemplateId | String | - | - |

**Returns**: `void`


##### getOtpLength() → Long

**Returns**: `Long`


##### setOtpLength(otpLength: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| otpLength | Long | - | - |

**Returns**: `void`


##### fromMsg91Config(msg91Config: Msg91Config, maskedAuthKey: String) → Msg91ConfigContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| msg91Config | Msg91Config | - | - |
| maskedAuthKey | String | - | - |

**Returns**: `Msg91ConfigContract`


##### Msg91ConfigContract() → new

**Returns**: `new`




## Functions

### getAuthKey() → String

**Returns**: `String`



### setAuthKey(authKey: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authKey | String | - | - |

**Returns**: `void`



### getOtpSmsTemplateId() → String

**Returns**: `String`



### setOtpSmsTemplateId(otpSmsTemplateId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| otpSmsTemplateId | String | - | - |

**Returns**: `void`



### getOtpLength() → Long

**Returns**: `Long`



### setOtpLength(otpLength: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| otpLength | Long | - | - |

**Returns**: `void`



### fromMsg91Config(msg91Config: Msg91Config, maskedAuthKey: String) → Msg91ConfigContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| msg91Config | Msg91Config | - | - |
| maskedAuthKey | String | - | - |

**Returns**: `Msg91ConfigContract`



### Msg91ConfigContract() → new

**Returns**: `new`


