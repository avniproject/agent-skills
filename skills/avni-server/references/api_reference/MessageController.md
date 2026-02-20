# API Reference: MessageController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/api/MessageController.java`

---

## Classes

### MessageController

**Inherits from**: (none)

#### Methods

##### MessageController(accessControlService: AccessControlService, messageRequestService: MessageRequestService, messagingService: MessagingService, userRepository: UserRepository, individualService: IndividualService, messageTemplateService: MessageTemplateService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accessControlService | AccessControlService | - | - |
| messageRequestService | MessageRequestService | - | - |
| messagingService | MessagingService | - | - |
| userRepository | UserRepository | - | - |
| individualService | IndividualService | - | - |
| messageTemplateService | MessageTemplateService | - | - |

**Returns**: `public`


##### sendMsgToContactUser(ManualMessageContract: @RequestBody) → ResponseEntity<SendMessageResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ManualMessageContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<SendMessageResponse>`


##### SendMessageResponse(unknown: MessageDeliveryStatus.NotSentNoPhoneNumberInAvni, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSentNoPhoneNumberInAvni | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### SendMessageResponse(unknown: MessageDeliveryStatus.NotSent, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSent | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### SendMessageResponse(unknown: MessageDeliveryStatus.Failed, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.Failed | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### SendMessageResponse(unknown: MessageDeliveryStatus.Sent, unknown: "Success") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.Sent | - | - |
| unknown | "Success" | - | - |

**Returns**: `new`


##### startFlowForContact(StartFlowForContactRequest: @RequestBody) → ResponseEntity<SendMessageResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| StartFlowForContactRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<SendMessageResponse>`


##### SendMessageResponse(unknown: MessageDeliveryStatus.NotSentNoPhoneNumberInAvni, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSentNoPhoneNumberInAvni | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### SendMessageResponse(unknown: MessageDeliveryStatus.NotSent, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSent | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### SendMessageResponse(unknown: MessageDeliveryStatus.NotSent, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSent | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### SendMessageResponse(unknown: MessageDeliveryStatus.Failed, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.Failed | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### SendMessageResponse(unknown: MessageDeliveryStatus.Sent, unknown: "Success") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.Sent | - | - |
| unknown | "Success" | - | - |

**Returns**: `new`


##### getListResponseEntity(unknown: groupId, unknown: MessageDeliveryStatus.NotSent) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupId | - | - |
| unknown | MessageDeliveryStatus.NotSent | - | - |

**Returns**: `return`


##### getListResponseEntity(unknown: groupId, unknown: MessageDeliveryStatus.Sent) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupId | - | - |
| unknown | MessageDeliveryStatus.Sent | - | - |

**Returns**: `return`




## Functions

### MessageController(accessControlService: AccessControlService, messageRequestService: MessageRequestService, messagingService: MessagingService, userRepository: UserRepository, individualService: IndividualService, messageTemplateService: MessageTemplateService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accessControlService | AccessControlService | - | - |
| messageRequestService | MessageRequestService | - | - |
| messagingService | MessagingService | - | - |
| userRepository | UserRepository | - | - |
| individualService | IndividualService | - | - |
| messageTemplateService | MessageTemplateService | - | - |

**Returns**: `public`



### sendMsgToContactUser(ManualMessageContract: @RequestBody) → ResponseEntity<SendMessageResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ManualMessageContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<SendMessageResponse>`



### SendMessageResponse(unknown: MessageDeliveryStatus.NotSentNoPhoneNumberInAvni, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSentNoPhoneNumberInAvni | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### SendMessageResponse(unknown: MessageDeliveryStatus.NotSent, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSent | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### SendMessageResponse(unknown: MessageDeliveryStatus.Failed, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.Failed | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### SendMessageResponse(unknown: MessageDeliveryStatus.Sent, unknown: "Success") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.Sent | - | - |
| unknown | "Success" | - | - |

**Returns**: `new`



### startFlowForContact(StartFlowForContactRequest: @RequestBody) → ResponseEntity<SendMessageResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| StartFlowForContactRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<SendMessageResponse>`



### SendMessageResponse(unknown: MessageDeliveryStatus.NotSentNoPhoneNumberInAvni, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSentNoPhoneNumberInAvni | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### SendMessageResponse(unknown: MessageDeliveryStatus.NotSent, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSent | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### SendMessageResponse(unknown: MessageDeliveryStatus.NotSent, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.NotSent | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### SendMessageResponse(unknown: MessageDeliveryStatus.Failed, unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.Failed | - | - |
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### SendMessageResponse(unknown: MessageDeliveryStatus.Sent, unknown: "Success") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.Sent | - | - |
| unknown | "Success" | - | - |

**Returns**: `new`



### getListResponseEntity(unknown: groupId, unknown: MessageDeliveryStatus.NotSent) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupId | - | - |
| unknown | MessageDeliveryStatus.NotSent | - | - |

**Returns**: `return`



### getListResponseEntity(unknown: groupId, unknown: MessageDeliveryStatus.Sent) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupId | - | - |
| unknown | MessageDeliveryStatus.Sent | - | - |

**Returns**: `return`


