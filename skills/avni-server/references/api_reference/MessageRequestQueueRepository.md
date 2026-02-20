# API Reference: MessageRequestQueueRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/repository/MessageRequestQueueRepository.java`

---

## Functions

### findAllByDeliveryStatusNotAndIsVoidedFalseAndScheduledDateTimeBetween(messageDeliveryStatus: MessageDeliveryStatus, then: DateTime, now: DateTime) → Stream<MessageRequest>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageDeliveryStatus | MessageDeliveryStatus | - | - |
| then | DateTime | - | - |
| now | DateTime | - | - |

**Returns**: `Stream<MessageRequest>`



### findByEntityIdAndMessageRule(entityId: Long, messageRule: MessageRule) → Optional<MessageRequest>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| messageRule | MessageRule | - | - |

**Returns**: `Optional<MessageRequest>`



### findDueMessageRequests(duration: Duration) → Stream<MessageRequest>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| duration | Duration | - | - |

**Returns**: `Stream<MessageRequest>`



### findAllByDeliveryStatusNotAndIsVoidedFalseAndScheduledDateTimeBetween(unknown: MessageDeliveryStatus.Sent, unknown: DateTime.now() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | MessageDeliveryStatus.Sent | - | - |
| unknown | DateTime.now( | - | - |

**Returns**: `return`



### updateVoided(isVoided: boolean, entityId: Long, lastModifiedDateTime: Date, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isVoided | boolean | - | - |
| entityId | Long | - | - |
| lastModifiedDateTime | Date | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### updateVoided(isVoided: boolean, entityId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isVoided | boolean | - | - |
| entityId | Long | - | - |

**Returns**: `void`



### Date() → new

**Returns**: `new`



### findAllByDeliveryStatusAndMessageReceiverAndIsVoidedFalse(notSent: MessageDeliveryStatus, messageReceiver: MessageReceiver) → Stream<MessageRequest>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| notSent | MessageDeliveryStatus | - | - |
| messageReceiver | MessageReceiver | - | - |

**Returns**: `Stream<MessageRequest>`


