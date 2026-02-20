# API Reference: MessageReceiverService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/service/MessageReceiverService.java`

---

## Classes

### MessageReceiverService

**Inherits from**: (none)

#### Methods

##### MessageReceiverService(messageReceiverRepository: MessageReceiverRepository, glificContactRepository: GlificContactRepository, individualService: IndividualService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiverRepository | MessageReceiverRepository | - | - |
| glificContactRepository | GlificContactRepository | - | - |
| individualService | IndividualService | - | - |
| userService | UserService | - | - |

**Returns**: `public`


##### saveReceiverIfRequired(receiverType: ReceiverType, entityId: Long) → MessageReceiver

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverType | ReceiverType | - | - |
| entityId | Long | - | - |

**Returns**: `MessageReceiver`


##### MessageReceiver(unknown: receiverType, unknown: entityId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | receiverType | - | - |
| unknown | entityId | - | - |

**Returns**: `new`


##### saveReceiverIfRequired(receiverType: ReceiverType, receiverId: String) → MessageReceiver

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverType | ReceiverType | - | - |
| receiverId | String | - | - |

**Returns**: `MessageReceiver`


##### saveReceiverIfRequired(unknown: receiverType, unknown: Long.parseLong(receiverId) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | receiverType | - | - |
| unknown | Long.parseLong(receiverId | - | - |

**Returns**: `return`


##### MessageReceiver(unknown: receiverType, unknown: receiverId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | receiverType | - | - |
| unknown | receiverId | - | - |

**Returns**: `new`


##### ensureExternalIdPresent(messageReceiver: MessageReceiver) → MessageReceiver

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |

**Returns**: `MessageReceiver`


##### voidMessageReceiver(receiverId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverId | Long | - | - |

**Returns**: `void`


##### findMessageReceiver(receiverId: Long, receiverType: ReceiverType) → Optional<MessageReceiver>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverId | Long | - | - |
| receiverType | ReceiverType | - | - |

**Returns**: `Optional<MessageReceiver>`


##### findExternalMessageReceiver(externalId: String) → Optional<MessageReceiver>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Optional<MessageReceiver>`




## Functions

### MessageReceiverService(messageReceiverRepository: MessageReceiverRepository, glificContactRepository: GlificContactRepository, individualService: IndividualService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiverRepository | MessageReceiverRepository | - | - |
| glificContactRepository | GlificContactRepository | - | - |
| individualService | IndividualService | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### saveReceiverIfRequired(receiverType: ReceiverType, entityId: Long) → MessageReceiver

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverType | ReceiverType | - | - |
| entityId | Long | - | - |

**Returns**: `MessageReceiver`



### MessageReceiver(unknown: receiverType, unknown: entityId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | receiverType | - | - |
| unknown | entityId | - | - |

**Returns**: `new`



### saveReceiverIfRequired(receiverType: ReceiverType, receiverId: String) → MessageReceiver

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverType | ReceiverType | - | - |
| receiverId | String | - | - |

**Returns**: `MessageReceiver`



### saveReceiverIfRequired(unknown: receiverType, unknown: Long.parseLong(receiverId) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | receiverType | - | - |
| unknown | Long.parseLong(receiverId | - | - |

**Returns**: `return`



### MessageReceiver(unknown: receiverType, unknown: receiverId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | receiverType | - | - |
| unknown | receiverId | - | - |

**Returns**: `new`



### ensureExternalIdPresent(messageReceiver: MessageReceiver) → MessageReceiver

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |

**Returns**: `MessageReceiver`



### voidMessageReceiver(receiverId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverId | Long | - | - |

**Returns**: `void`



### findMessageReceiver(receiverId: Long, receiverType: ReceiverType) → Optional<MessageReceiver>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverId | Long | - | - |
| receiverType | ReceiverType | - | - |

**Returns**: `Optional<MessageReceiver>`



### findExternalMessageReceiver(externalId: String) → Optional<MessageReceiver>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `Optional<MessageReceiver>`


