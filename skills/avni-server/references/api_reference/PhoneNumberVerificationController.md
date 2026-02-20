# API Reference: PhoneNumberVerificationController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/PhoneNumberVerificationController.java`

---

## Classes

### PhoneNumberVerificationController

**Inherits from**: (none)

#### Methods

##### PhoneNumberVerificationController(phoneNumberVerificationService: PhoneNumberVerificationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumberVerificationService | PhoneNumberVerificationService | - | - |

**Returns**: `public`


##### sendOTP(PhoneNumberVerificationRequest: @RequestBody) → ResponseEntity<PhoneNumberVerificationResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PhoneNumberVerificationRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<PhoneNumberVerificationResponse>`


##### resendOTP(PhoneNumberVerificationRequest: @RequestBody) → ResponseEntity<PhoneNumberVerificationResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PhoneNumberVerificationRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<PhoneNumberVerificationResponse>`


##### verifyOTP(PhoneNumberVerificationRequest: @RequestBody) → ResponseEntity<PhoneNumberVerificationResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PhoneNumberVerificationRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<PhoneNumberVerificationResponse>`




## Functions

### PhoneNumberVerificationController(phoneNumberVerificationService: PhoneNumberVerificationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumberVerificationService | PhoneNumberVerificationService | - | - |

**Returns**: `public`



### sendOTP(PhoneNumberVerificationRequest: @RequestBody) → ResponseEntity<PhoneNumberVerificationResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PhoneNumberVerificationRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<PhoneNumberVerificationResponse>`



### resendOTP(PhoneNumberVerificationRequest: @RequestBody) → ResponseEntity<PhoneNumberVerificationResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PhoneNumberVerificationRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<PhoneNumberVerificationResponse>`



### verifyOTP(PhoneNumberVerificationRequest: @RequestBody) → ResponseEntity<PhoneNumberVerificationResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PhoneNumberVerificationRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<PhoneNumberVerificationResponse>`


