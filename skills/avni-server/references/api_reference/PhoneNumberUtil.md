# API Reference: PhoneNumberUtil.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/util/PhoneNumberUtil.java`

---

## Classes

### PhoneNumberUtil

**Inherits from**: (none)

#### Methods

##### parsePhoneNumber(phoneNumber: String, region: String) → PhoneNumber

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `PhoneNumber`


##### getPhoneNumber(phoneNumber: String, region: String) → PhoneNumber

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `PhoneNumber`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### getPhoneNumber(phoneNumber: String, phoneNumberFormat: com.google.i18n.phonenumbers.PhoneNumberUtil.PhoneNumberFormat, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| phoneNumberFormat | com.google.i18n.phonenumbers.PhoneNumberUtil.PhoneNumberFormat | - | - |
| region | String | - | - |

**Returns**: `String`


##### isValidPhoneNumber(phoneNumber: String, region: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `boolean`


##### getInvalidMessage(phoneNumber: String, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `String`


##### RuntimeException(number: "Phone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| number | "Phone | - | - |

**Returns**: `new`


##### getStandardFormatPhoneNumber(phoneNumber: String, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `String`


##### getPhoneNumber(unknown: phoneNumber, unknown: com.google.i18n.phonenumbers.PhoneNumberUtil.PhoneNumberFormat.E164, unknown: region) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | phoneNumber | - | - |
| unknown | com.google.i18n.phonenumbers.PhoneNumberUtil.PhoneNumberFormat.E164 | - | - |
| unknown | region | - | - |

**Returns**: `return`


##### getPhoneNumberInGlificFormat(phoneNumber: String, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `String`


##### getNationalPhoneNumber(phoneNumber: String, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `String`




## Functions

### parsePhoneNumber(phoneNumber: String, region: String) → PhoneNumber

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `PhoneNumber`



### getPhoneNumber(phoneNumber: String, region: String) → PhoneNumber

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `PhoneNumber`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### getPhoneNumber(phoneNumber: String, phoneNumberFormat: com.google.i18n.phonenumbers.PhoneNumberUtil.PhoneNumberFormat, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| phoneNumberFormat | com.google.i18n.phonenumbers.PhoneNumberUtil.PhoneNumberFormat | - | - |
| region | String | - | - |

**Returns**: `String`



### isValidPhoneNumber(phoneNumber: String, region: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `boolean`



### getInvalidMessage(phoneNumber: String, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `String`



### RuntimeException(number: "Phone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| number | "Phone | - | - |

**Returns**: `new`



### getStandardFormatPhoneNumber(phoneNumber: String, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `String`



### getPhoneNumber(unknown: phoneNumber, unknown: com.google.i18n.phonenumbers.PhoneNumberUtil.PhoneNumberFormat.E164, unknown: region) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | phoneNumber | - | - |
| unknown | com.google.i18n.phonenumbers.PhoneNumberUtil.PhoneNumberFormat.E164 | - | - |
| unknown | region | - | - |

**Returns**: `return`



### getPhoneNumberInGlificFormat(phoneNumber: String, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `String`



### getNationalPhoneNumber(phoneNumber: String, region: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| region | String | - | - |

**Returns**: `String`


