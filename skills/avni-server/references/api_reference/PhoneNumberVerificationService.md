# API Reference: PhoneNumberVerificationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/PhoneNumberVerificationService.java`

---

## Classes

### PhoneNumberVerificationService

**Inherits from**: (none)

#### Methods

##### PhoneNumberVerificationService(msg91Client: Msg91Client, msg91ConfigRepository: Msg91ConfigRepository, msg91ConfigService: Msg91ConfigService, isDev: Boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| msg91Client | Msg91Client | - | - |
| msg91ConfigRepository | Msg91ConfigRepository | - | - |
| msg91ConfigService | Msg91ConfigService | - | - |
| isDev | Boolean | - | - |

**Returns**: `public`


##### sendOTP(request: PhoneNumberVerificationRequest) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | PhoneNumberVerificationRequest | - | - |

**Returns**: `PhoneNumberVerificationResponse`


##### PhoneNumberVerificationResponse(unknown: true, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### resendOTP(request: PhoneNumberVerificationRequest) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | PhoneNumberVerificationRequest | - | - |

**Returns**: `PhoneNumberVerificationResponse`


##### PhoneNumberVerificationResponse(unknown: true, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### verifyOTP(request: PhoneNumberVerificationRequest) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | PhoneNumberVerificationRequest | - | - |

**Returns**: `PhoneNumberVerificationResponse`


##### PhoneNumberVerificationResponse(unknown: request.getOtp() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | request.getOtp( | - | - |

**Returns**: `new`


##### checkBalance(authKey: String) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authKey | String | - | - |

**Returns**: `PhoneNumberVerificationResponse`


##### Msg91Request() → new

**Returns**: `new`


##### mapStringResponseToObject(responseString: String) → Msg91Response

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| responseString | String | - | - |

**Returns**: `Msg91Response`


##### processMsg91Request(method: HttpMethod, uri: String, msg91Request: Msg91Request, convertResponseStringToObject: boolean) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| method | HttpMethod | - | - |
| uri | String | - | - |
| msg91Request | Msg91Request | - | - |
| convertResponseStringToObject | boolean | - | - |

**Returns**: `PhoneNumberVerificationResponse`


##### processMsg91Response(unknown: msg91Response) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | msg91Response | - | - |

**Returns**: `return`


##### Msg91Response() → new

**Returns**: `new`


##### PhoneNumberVerificationResponse(unknown: true, unknown: msg91Response) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | msg91Response | - | - |

**Returns**: `new`


##### processMsg91Response(msg91Response: Msg91Response) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| msg91Response | Msg91Response | - | - |

**Returns**: `PhoneNumberVerificationResponse`


##### PhoneNumberVerificationResponse(unknown: true, unknown: msg91Response) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | msg91Response | - | - |

**Returns**: `new`


##### PhoneNumberVerificationResponse(unknown: false, unknown: msg91Response) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | msg91Response | - | - |

**Returns**: `new`


##### handleMsg91Errors(errorString: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorString | String | - | - |

**Returns**: `void`


##### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`


##### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`


##### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`


##### ConnectException(91: "Msg) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 91 | "Msg | - | - |

**Returns**: `new`


##### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`


##### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`


##### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`


##### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`


##### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`


##### createMsg91Request() → Msg91Request

**Returns**: `Msg91Request`


##### ConnectException(not: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Msg91 | - | - |

**Returns**: `new`


##### Msg91Request() → new

**Returns**: `new`


##### validateAndAddCountryCodeToPhoneNumber(phoneNumber: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `String`


##### ValidationException(phone: String.format("Invalid, unknown: phoneNumber) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phone | String.format("Invalid | - | - |
| unknown | phoneNumber | - | - |

**Returns**: `new`




## Functions

### PhoneNumberVerificationService(msg91Client: Msg91Client, msg91ConfigRepository: Msg91ConfigRepository, msg91ConfigService: Msg91ConfigService, isDev: Boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| msg91Client | Msg91Client | - | - |
| msg91ConfigRepository | Msg91ConfigRepository | - | - |
| msg91ConfigService | Msg91ConfigService | - | - |
| isDev | Boolean | - | - |

**Returns**: `public`



### sendOTP(request: PhoneNumberVerificationRequest) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | PhoneNumberVerificationRequest | - | - |

**Returns**: `PhoneNumberVerificationResponse`



### PhoneNumberVerificationResponse(unknown: true, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | null | - | - |

**Returns**: `new`



### resendOTP(request: PhoneNumberVerificationRequest) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | PhoneNumberVerificationRequest | - | - |

**Returns**: `PhoneNumberVerificationResponse`



### PhoneNumberVerificationResponse(unknown: true, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | null | - | - |

**Returns**: `new`



### verifyOTP(request: PhoneNumberVerificationRequest) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | PhoneNumberVerificationRequest | - | - |

**Returns**: `PhoneNumberVerificationResponse`



### PhoneNumberVerificationResponse(unknown: request.getOtp() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | request.getOtp( | - | - |

**Returns**: `new`



### checkBalance(authKey: String) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| authKey | String | - | - |

**Returns**: `PhoneNumberVerificationResponse`



### Msg91Request() → new

**Returns**: `new`



### mapStringResponseToObject(responseString: String) → Msg91Response

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| responseString | String | - | - |

**Returns**: `Msg91Response`



### processMsg91Request(method: HttpMethod, uri: String, msg91Request: Msg91Request, convertResponseStringToObject: boolean) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| method | HttpMethod | - | - |
| uri | String | - | - |
| msg91Request | Msg91Request | - | - |
| convertResponseStringToObject | boolean | - | - |

**Returns**: `PhoneNumberVerificationResponse`



### processMsg91Response(unknown: msg91Response) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | msg91Response | - | - |

**Returns**: `return`



### Msg91Response() → new

**Returns**: `new`



### PhoneNumberVerificationResponse(unknown: true, unknown: msg91Response) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | msg91Response | - | - |

**Returns**: `new`



### processMsg91Response(msg91Response: Msg91Response) → PhoneNumberVerificationResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| msg91Response | Msg91Response | - | - |

**Returns**: `PhoneNumberVerificationResponse`



### PhoneNumberVerificationResponse(unknown: true, unknown: msg91Response) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | msg91Response | - | - |

**Returns**: `new`



### PhoneNumberVerificationResponse(unknown: false, unknown: msg91Response) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | msg91Response | - | - |

**Returns**: `new`



### handleMsg91Errors(errorString: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorString | String | - | - |

**Returns**: `void`



### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`



### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`



### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`



### ConnectException(91: "Msg) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| 91 | "Msg | - | - |

**Returns**: `new`



### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`



### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`



### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`



### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`



### ConnectException(-: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | "Msg91 | - | - |

**Returns**: `new`



### createMsg91Request() → Msg91Request

**Returns**: `Msg91Request`



### ConnectException(not: "Msg91) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| not | "Msg91 | - | - |

**Returns**: `new`



### Msg91Request() → new

**Returns**: `new`



### validateAndAddCountryCodeToPhoneNumber(phoneNumber: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `String`



### ValidationException(phone: String.format("Invalid, unknown: phoneNumber) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phone | String.format("Invalid | - | - |
| unknown | phoneNumber | - | - |

**Returns**: `new`


