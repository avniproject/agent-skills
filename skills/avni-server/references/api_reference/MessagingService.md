# API Reference: MessagingService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/service/MessagingService.java`

---

## Classes

### MessagingService

**Inherits from**: (none)

#### Methods

##### MessagingService(messageRuleRepository: MessageRuleRepository, messageReceiverService: MessageReceiverService, messageRequestService: MessageRequestService, messageRequestQueueRepository: MessageRequestQueueRepository, manualMessageRepository: ManualMessageRepository, ruleService: RuleService, groupMessagingService: GroupMessagingService, individualMessagingService: IndividualMessagingService, bugsnag: Bugsnag, entityTypeRetrieverService: EntityTypeRetrieverService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRuleRepository | MessageRuleRepository | - | - |
| messageReceiverService | MessageReceiverService | - | - |
| messageRequestService | MessageRequestService | - | - |
| messageRequestQueueRepository | MessageRequestQueueRepository | - | - |
| manualMessageRepository | ManualMessageRepository | - | - |
| ruleService | RuleService | - | - |
| groupMessagingService | GroupMessagingService | - | - |
| individualMessagingService | IndividualMessagingService | - | - |
| bugsnag | Bugsnag | - | - |
| entityTypeRetrieverService | EntityTypeRetrieverService | - | - |

**Returns**: `public`


##### find(id: Long) → MessageRule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `MessageRule`


##### find(uuid: String) → MessageRule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `MessageRule`


##### saveRule(messageRule: MessageRule) → MessageRule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRule | MessageRule | - | - |

**Returns**: `MessageRule`


##### findByIdOrUuid(id: Long, uuid: String) → MessageRule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| uuid | String | - | - |

**Returns**: `MessageRule`


##### findAll(pageable: Pageable) → Page<MessageRule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<MessageRule>`


##### findAll() → List<MessageRule>

**Returns**: `List<MessageRule>`


##### onEntitySave(entityId: Long, entityTypeId: Long, entityType: EntityType, subjectId: Long, userId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| entityTypeId | Long | - | - |
| entityType | EntityType | - | - |
| subjectId | Long | - | - |
| userId | Long | - | - |

**Returns**: `void`


##### onEntityDelete(entityId: Long, entityType: EntityType, receiverId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| entityType | EntityType | - | - |
| receiverId | Long | - | - |

**Returns**: `void`


##### onUserEntitySave(userId: Long, createdBy: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |
| createdBy | User | - | - |

**Returns**: `void`


##### findByEntityTypeAndEntityTypeId(entityType: EntityType, entityTypeId: Long, pageable: Pageable) → Page<MessageRule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityType | - | - |
| entityTypeId | Long | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<MessageRule>`


##### sendMessageSynchronously(manualMessageContract: ManualMessageContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessageContract | ManualMessageContract | - | - |

**Returns**: `void`


##### ManualMessage(unknown: manualMessageContract.getMessageTemplateId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | manualMessageContract.getMessageTemplateId( | - | - |

**Returns**: `new`


##### MessageRequest(unknown: manualMessage, unknown: messageReceiver, unknown: manualMessageContract.getScheduledDateTime() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | manualMessage | - | - |
| unknown | messageReceiver | - | - |
| unknown | manualMessageContract.getScheduledDateTime( | - | - |

**Returns**: `new`


##### sendMessage(messageRequest: MessageRequest) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `MessageRequest`


##### sendMessages(duration: Duration) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| duration | Duration | - | - |

**Returns**: `void`


##### scheduleManualMessage(receiverId: String, receiverType: ReceiverType, messageTemplateId: String, parameters: String[], scheduledDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverId | String | - | - |
| receiverType | ReceiverType | - | - |
| messageTemplateId | String | - | - |
| parameters | String[] | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `void`


##### ManualMessage(unknown: messageTemplateId, unknown: parameters) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | messageTemplateId | - | - |
| unknown | parameters | - | - |

**Returns**: `new`


##### sendMessageToGlific(messageRequest: MessageRequest) → void

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


##### saveRules(messageRuleContracts: MessageRuleContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRuleContracts | MessageRuleContract[] | - | - |

**Returns**: `void`


##### sendStartFlowForContactSynchronously(startFlowForContactRequest: StartFlowForContactRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startFlowForContactRequest | StartFlowForContactRequest | - | - |

**Returns**: `void`




## Functions

### MessagingService(messageRuleRepository: MessageRuleRepository, messageReceiverService: MessageReceiverService, messageRequestService: MessageRequestService, messageRequestQueueRepository: MessageRequestQueueRepository, manualMessageRepository: ManualMessageRepository, ruleService: RuleService, groupMessagingService: GroupMessagingService, individualMessagingService: IndividualMessagingService, bugsnag: Bugsnag, entityTypeRetrieverService: EntityTypeRetrieverService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRuleRepository | MessageRuleRepository | - | - |
| messageReceiverService | MessageReceiverService | - | - |
| messageRequestService | MessageRequestService | - | - |
| messageRequestQueueRepository | MessageRequestQueueRepository | - | - |
| manualMessageRepository | ManualMessageRepository | - | - |
| ruleService | RuleService | - | - |
| groupMessagingService | GroupMessagingService | - | - |
| individualMessagingService | IndividualMessagingService | - | - |
| bugsnag | Bugsnag | - | - |
| entityTypeRetrieverService | EntityTypeRetrieverService | - | - |

**Returns**: `public`



### find(id: Long) → MessageRule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |

**Returns**: `MessageRule`



### find(uuid: String) → MessageRule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `MessageRule`



### saveRule(messageRule: MessageRule) → MessageRule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRule | MessageRule | - | - |

**Returns**: `MessageRule`



### findByIdOrUuid(id: Long, uuid: String) → MessageRule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Long | - | - |
| uuid | String | - | - |

**Returns**: `MessageRule`



### findAll(pageable: Pageable) → Page<MessageRule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<MessageRule>`



### findAll() → List<MessageRule>

**Returns**: `List<MessageRule>`



### onEntitySave(entityId: Long, entityTypeId: Long, entityType: EntityType, subjectId: Long, userId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| entityTypeId | Long | - | - |
| entityType | EntityType | - | - |
| subjectId | Long | - | - |
| userId | Long | - | - |

**Returns**: `void`



### onEntityDelete(entityId: Long, entityType: EntityType, receiverId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| entityType | EntityType | - | - |
| receiverId | Long | - | - |

**Returns**: `void`



### onUserEntitySave(userId: Long, createdBy: User) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userId | Long | - | - |
| createdBy | User | - | - |

**Returns**: `void`



### findByEntityTypeAndEntityTypeId(entityType: EntityType, entityTypeId: Long, pageable: Pageable) → Page<MessageRule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityType | - | - |
| entityTypeId | Long | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<MessageRule>`



### sendMessageSynchronously(manualMessageContract: ManualMessageContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessageContract | ManualMessageContract | - | - |

**Returns**: `void`



### ManualMessage(unknown: manualMessageContract.getMessageTemplateId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | manualMessageContract.getMessageTemplateId( | - | - |

**Returns**: `new`



### MessageRequest(unknown: manualMessage, unknown: messageReceiver, unknown: manualMessageContract.getScheduledDateTime() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | manualMessage | - | - |
| unknown | messageReceiver | - | - |
| unknown | manualMessageContract.getScheduledDateTime( | - | - |

**Returns**: `new`



### sendMessage(messageRequest: MessageRequest) → MessageRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `MessageRequest`



### sendMessages(duration: Duration) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| duration | Duration | - | - |

**Returns**: `void`



### scheduleManualMessage(receiverId: String, receiverType: ReceiverType, messageTemplateId: String, parameters: String[], scheduledDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverId | String | - | - |
| receiverType | ReceiverType | - | - |
| messageTemplateId | String | - | - |
| parameters | String[] | - | - |
| scheduledDateTime | DateTime | - | - |

**Returns**: `void`



### ManualMessage(unknown: messageTemplateId, unknown: parameters) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | messageTemplateId | - | - |
| unknown | parameters | - | - |

**Returns**: `new`



### sendMessageToGlific(messageRequest: MessageRequest) → void

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



### saveRules(messageRuleContracts: MessageRuleContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRuleContracts | MessageRuleContract[] | - | - |

**Returns**: `void`



### sendStartFlowForContactSynchronously(startFlowForContactRequest: StartFlowForContactRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startFlowForContactRequest | StartFlowForContactRequest | - | - |

**Returns**: `void`


