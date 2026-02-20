# API Reference: MessageRequestService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/service/MessageRequestService.java`

---

## Classes

### MessageRequestService

**Inherits from**: (none)

#### Methods

##### MessageRequestService(messageRequestRepository: MessageRequestQueueRepository, messageReceiverService: MessageReceiverService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequestRepository | MessageRequestQueueRepository | - | - |
| messageReceiverService | MessageReceiverService | - | - |

**Returns**: `public`


##### createOrUpdateAutomatedMessageRequest(messageRule: MessageRule, messageReceiver: MessageReceiver, entityId: Long, scheduledDateTime: DateTime) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRule | MessageRule | - | - |
| messageReceiver | MessageReceiver | - | - |
| entityId | Long | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `MessageRequest`


##### MessageRequest(unknown: messageRule, unknown: messageReceiver, unknown: entityId, unknown: scheduledDateTime) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | messageRule | - | - |
| unknown | messageReceiver | - | - |
| unknown | entityId | - | - |
| unknown | scheduledDateTime | - | - |

**Returns**: `new`


##### createManualMessageRequest(manualMessage: ManualMessage, messageReceiver: MessageReceiver, scheduledDateTime: DateTime) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessage | ManualMessage | - | - |
| messageReceiver | MessageReceiver | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `MessageRequest`


##### MessageRequest(unknown: manualMessage, unknown: messageReceiver, unknown: scheduledDateTime) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | manualMessage | - | - |
| unknown | messageReceiver | - | - |
| unknown | scheduledDateTime | - | - |

**Returns**: `new`


##### markComplete(messageRequest: MessageRequest) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `MessageRequest`


##### voidMessageRequests(entityId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |

**Returns**: `void`


##### markPartiallyComplete(messageRequest: MessageRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `void`


##### fetchPendingScheduledMessages(receiverId: Long, receiverType: ReceiverType, messageDeliveryStatus: MessageDeliveryStatus) → Stream<MessageRequest>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverId | Long | - | - |
| receiverType | ReceiverType | - | - |
| messageDeliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `Stream<MessageRequest>`


##### markFailed(messageRequest: MessageRequest, messageDeliveryStatus: MessageDeliveryStatus) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |
| messageDeliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `MessageRequest`


##### getGroupMessages(groupId: String, messageDeliveryStatus: MessageDeliveryStatus) → Stream<MessageRequest>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | String | - | - |
| messageDeliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `Stream<MessageRequest>`




## Functions

### MessageRequestService(messageRequestRepository: MessageRequestQueueRepository, messageReceiverService: MessageReceiverService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequestRepository | MessageRequestQueueRepository | - | - |
| messageReceiverService | MessageReceiverService | - | - |

**Returns**: `public`



### createOrUpdateAutomatedMessageRequest(messageRule: MessageRule, messageReceiver: MessageReceiver, entityId: Long, scheduledDateTime: DateTime) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRule | MessageRule | - | - |
| messageReceiver | MessageReceiver | - | - |
| entityId | Long | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `MessageRequest`



### MessageRequest(unknown: messageRule, unknown: messageReceiver, unknown: entityId, unknown: scheduledDateTime) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | messageRule | - | - |
| unknown | messageReceiver | - | - |
| unknown | entityId | - | - |
| unknown | scheduledDateTime | - | - |

**Returns**: `new`



### createManualMessageRequest(manualMessage: ManualMessage, messageReceiver: MessageReceiver, scheduledDateTime: DateTime) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessage | ManualMessage | - | - |
| messageReceiver | MessageReceiver | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `MessageRequest`



### MessageRequest(unknown: manualMessage, unknown: messageReceiver, unknown: scheduledDateTime) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | manualMessage | - | - |
| unknown | messageReceiver | - | - |
| unknown | scheduledDateTime | - | - |

**Returns**: `new`



### markComplete(messageRequest: MessageRequest) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `MessageRequest`



### voidMessageRequests(entityId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |

**Returns**: `void`



### markPartiallyComplete(messageRequest: MessageRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `void`



### fetchPendingScheduledMessages(receiverId: Long, receiverType: ReceiverType, messageDeliveryStatus: MessageDeliveryStatus) → Stream<MessageRequest>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverId | Long | - | - |
| receiverType | ReceiverType | - | - |
| messageDeliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `Stream<MessageRequest>`



### markFailed(messageRequest: MessageRequest, messageDeliveryStatus: MessageDeliveryStatus) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |
| messageDeliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `MessageRequest`



### getGroupMessages(groupId: String, messageDeliveryStatus: MessageDeliveryStatus) → Stream<MessageRequest>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | String | - | - |
| messageDeliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `Stream<MessageRequest>`


