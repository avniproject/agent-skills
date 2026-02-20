# API Reference: MessageReceiverRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/repository/MessageReceiverRepository.java`

---

## Functions

### findByExternalId(externalId: String) → Optional<MessageReceiver>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Optional<MessageReceiver>`



### findByReceiverIdAndReceiverType(receiverId: Long, receiverType: ReceiverType) → Optional<MessageReceiver>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverId | Long | - | - |
| receiverType | ReceiverType | - | - |

**Returns**: `Optional<MessageReceiver>`



### findByReceiverTypeAndExternalId(receiverType: ReceiverType, externalId: String) → Optional<MessageReceiver>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverType | ReceiverType | - | - |
| externalId | String | - | - |

**Returns**: `Optional<MessageReceiver>`



### updateVoided(isVoided: boolean, receiverId: Long, lastModifiedDateTime: Date, lastModifiedById: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isVoided | boolean | - | - |
| receiverId | Long | - | - |
| lastModifiedDateTime | Date | - | - |
| lastModifiedById | Long | - | - |

**Returns**: `void`



### updateVoided(isVoided: boolean, receiverId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isVoided | boolean | - | - |
| receiverId | Long | - | - |

**Returns**: `void`



### Date() → new

**Returns**: `new`


