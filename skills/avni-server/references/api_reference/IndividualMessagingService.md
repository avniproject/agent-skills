# API Reference: IndividualMessagingService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/service/IndividualMessagingService.java`

---

## Classes

### IndividualMessagingService

**Inherits from**: (none)

#### Methods

##### IndividualMessagingService(messageReceiverService: MessageReceiverService, glificMessageRepository: GlificMessageRepository, individualService: IndividualService, userService: UserService, ruleService: RuleService, bugsnag: Bugsnag) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiverService | MessageReceiverService | - | - |
| glificMessageRepository | GlificMessageRepository | - | - |
| individualService | IndividualService | - | - |
| userService | UserService | - | - |
| ruleService | RuleService | - | - |
| bugsnag | Bugsnag | - | - |

**Returns**: `public`


##### ensureExternalIdPresenceAndSendMessage(messageReceiver: MessageReceiver, templateId: String, parameters: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| templateId | String | - | - |
| parameters | String[] | - | - |

**Returns**: `void`


##### ensureExternalIdPresenceAndStartFlow(messageReceiver: MessageReceiver, flowId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| flowId | String | - | - |

**Returns**: `void`


##### sendAutomatedMessage(messageRequest: MessageRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `void`


##### sendManualMessage(messageRequest: MessageRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `void`


##### invokeStartFlowForContact(messageReceiver: MessageReceiver, flowId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| flowId | String | - | - |

**Returns**: `void`


##### GlificException(of: "Invocation) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| of | "Invocation | - | - |

**Returns**: `new`


##### getUpdatedParameters(messageReceiver: MessageReceiver, parameters: String[], indicesOfNonStaticParameters: int[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| parameters | String[] | - | - |
| indicesOfNonStaticParameters | int[] | - | - |

**Returns**: `void`




## Functions

### IndividualMessagingService(messageReceiverService: MessageReceiverService, glificMessageRepository: GlificMessageRepository, individualService: IndividualService, userService: UserService, ruleService: RuleService, bugsnag: Bugsnag) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiverService | MessageReceiverService | - | - |
| glificMessageRepository | GlificMessageRepository | - | - |
| individualService | IndividualService | - | - |
| userService | UserService | - | - |
| ruleService | RuleService | - | - |
| bugsnag | Bugsnag | - | - |

**Returns**: `public`



### ensureExternalIdPresenceAndSendMessage(messageReceiver: MessageReceiver, templateId: String, parameters: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| templateId | String | - | - |
| parameters | String[] | - | - |

**Returns**: `void`



### ensureExternalIdPresenceAndStartFlow(messageReceiver: MessageReceiver, flowId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| flowId | String | - | - |

**Returns**: `void`



### sendAutomatedMessage(messageRequest: MessageRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `void`



### sendManualMessage(messageRequest: MessageRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `void`



### invokeStartFlowForContact(messageReceiver: MessageReceiver, flowId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| flowId | String | - | - |

**Returns**: `void`



### GlificException(of: "Invocation) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| of | "Invocation | - | - |

**Returns**: `new`



### getUpdatedParameters(messageReceiver: MessageReceiver, parameters: String[], indicesOfNonStaticParameters: int[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| parameters | String[] | - | - |
| indicesOfNonStaticParameters | int[] | - | - |

**Returns**: `void`


