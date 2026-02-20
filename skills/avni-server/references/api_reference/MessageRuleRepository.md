# API Reference: MessageRuleRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/repository/MessageRuleRepository.java`

---

## Functions

### findAll(pageable: Pageable) → Page<MessageRule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<MessageRule>`



### findAll() → List<MessageRule>

**Returns**: `List<MessageRule>`



### findAllByEntityTypeAndEntityTypeIdAndIsVoidedFalse(entityType: EntityType, entityTypeId: Long) → List<MessageRule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityType | - | - |
| entityTypeId | Long | - | - |

**Returns**: `List<MessageRule>`



### findAllByReceiverTypeAndEntityTypeAndIsVoidedFalse(receiverType: ReceiverType, entityType: EntityType) → List<MessageRule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| receiverType | ReceiverType | - | - |
| entityType | EntityType | - | - |

**Returns**: `List<MessageRule>`



### findByEntityTypeAndEntityTypeId(entityType: EntityType, entityTypeId: Long, pageable: Pageable) → Page<MessageRule>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | EntityType | - | - |
| entityTypeId | Long | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<MessageRule>`


