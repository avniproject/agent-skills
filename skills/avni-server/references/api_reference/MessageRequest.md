# API Reference: MessageRequest.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/messaging/domain/MessageRequest.java`

---

## Classes

### MessageRequest

**Inherits from**: OrganisationAwareEntity

#### Methods

##### setMessageRule(messageRule: MessageRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRule | MessageRule | - | - |

**Returns**: `void`


##### setMessageReceiver(messageReceiver: MessageReceiver) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |

**Returns**: `void`


##### setEntityId(entityId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |

**Returns**: `void`


##### setScheduledDateTime(scheduledDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduledDateTime | DateTime | - | - |

**Returns**: `void`


##### setDeliveryStatus(deliveryStatus: MessageDeliveryStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `void`


##### setDeliveredDateTime(deliveredDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deliveredDateTime | DateTime | - | - |

**Returns**: `void`


##### MessageRequest() → public

**Returns**: `public`


##### MessageRequest(messageRule: MessageRule, messageReceiverId: MessageReceiver, entityId: Long, scheduledDateTime: DateTime) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRule | MessageRule | - | - |
| messageReceiverId | MessageReceiver | - | - |
| entityId | Long | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `public`


##### MessageRequest(manualMessage: ManualMessage, messageReceiver: MessageReceiver, scheduledDateTime: DateTime) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessage | ManualMessage | - | - |
| messageReceiver | MessageReceiver | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `public`


##### markComplete() → void

**Returns**: `void`


##### getMessageRule() → MessageRule

**Returns**: `MessageRule`


##### getMessageReceiver() → MessageReceiver

**Returns**: `MessageReceiver`


##### getEntityId() → Long

**Returns**: `Long`


##### getScheduledDateTime() → DateTime

**Returns**: `DateTime`


##### getDeliveryStatus() → MessageDeliveryStatus

**Returns**: `MessageDeliveryStatus`


##### getDeliveredDateTime() → DateTime

**Returns**: `DateTime`


##### isDelivered() → boolean

**Returns**: `boolean`


##### getDeliveredDateTime() → return

**Returns**: `return`


##### getManualMessage() → ManualMessage

**Returns**: `ManualMessage`


##### setManualMessage(manualMessage: ManualMessage) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessage | ManualMessage | - | - |

**Returns**: `void`


##### markPartiallyComplete() → void

**Returns**: `void`


##### markFailed(messageDeliveryStatus: MessageDeliveryStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageDeliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `void`




## Functions

### setMessageRule(messageRule: MessageRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRule | MessageRule | - | - |

**Returns**: `void`



### setMessageReceiver(messageReceiver: MessageReceiver) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |

**Returns**: `void`



### setEntityId(entityId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |

**Returns**: `void`



### setScheduledDateTime(scheduledDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduledDateTime | DateTime | - | - |

**Returns**: `void`



### setDeliveryStatus(deliveryStatus: MessageDeliveryStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `void`



### setDeliveredDateTime(deliveredDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| deliveredDateTime | DateTime | - | - |

**Returns**: `void`



### MessageRequest() → public

**Returns**: `public`



### MessageRequest(messageRule: MessageRule, messageReceiverId: MessageReceiver, entityId: Long, scheduledDateTime: DateTime) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRule | MessageRule | - | - |
| messageReceiverId | MessageReceiver | - | - |
| entityId | Long | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `public`



### MessageRequest(manualMessage: ManualMessage, messageReceiver: MessageReceiver, scheduledDateTime: DateTime) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessage | ManualMessage | - | - |
| messageReceiver | MessageReceiver | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `public`



### markComplete() → void

**Returns**: `void`



### getMessageRule() → MessageRule

**Returns**: `MessageRule`



### getMessageReceiver() → MessageReceiver

**Returns**: `MessageReceiver`



### getEntityId() → Long

**Returns**: `Long`



### getScheduledDateTime() → DateTime

**Returns**: `DateTime`



### getDeliveryStatus() → MessageDeliveryStatus

**Returns**: `MessageDeliveryStatus`



### getDeliveredDateTime() → DateTime

**Returns**: `DateTime`



### isDelivered() → boolean

**Returns**: `boolean`



### getDeliveredDateTime() → return

**Returns**: `return`



### getManualMessage() → ManualMessage

**Returns**: `ManualMessage`



### setManualMessage(manualMessage: ManualMessage) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessage | ManualMessage | - | - |

**Returns**: `void`



### markPartiallyComplete() → void

**Returns**: `void`



### markFailed(messageDeliveryStatus: MessageDeliveryStatus) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageDeliveryStatus | MessageDeliveryStatus | - | - |

**Returns**: `void`


