# API Reference: Msg91ConfigController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/Msg91ConfigController.java`

---

## Functions

### Msg91ConfigController(msg91ConfigRepository: Msg91ConfigRepository, phoneNumberVerificationService: PhoneNumberVerificationService, msg91ConfigService: Msg91ConfigService, organisationConfigService: OrganisationConfigService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| msg91ConfigRepository | Msg91ConfigRepository | - | - |
| phoneNumberVerificationService | PhoneNumberVerificationService | - | - |
| msg91ConfigService | Msg91ConfigService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### storeConfiguration(Msg91ConfigContract: @RequestBody) → ResponseEntity<Msg91ConfigContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Msg91ConfigContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<Msg91ConfigContract>`



### BadRequestError(and: "authKey) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| and | "authKey | - | - |

**Returns**: `new`



### Msg91Config() → new

**Returns**: `new`



### getConfiguration() → ResponseEntity<Msg91ConfigContract>

**Returns**: `ResponseEntity<Msg91ConfigContract>`



### Msg91ConfigContract() → new

**Returns**: `new`



### verifyConfiguration(Msg91ConfigContract: @RequestBody) → ResponseEntity<PhoneNumberVerificationResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Msg91ConfigContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<PhoneNumberVerificationResponse>`


