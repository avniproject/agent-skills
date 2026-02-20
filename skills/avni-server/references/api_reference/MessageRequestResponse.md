# API Reference: MessageRequestResponse.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/contract/web/MessageRequestResponse.java`

---

## Classes

### MessageRequestResponse

**Inherits from**: (none)

#### Methods

##### fromMessageRequest(messageRequest: MessageRequest, messageTemplates: List<GlificMessageTemplate>) → MessageRequestResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |
| messageTemplates | List<GlificMessageTemplate> | - | - |

**Returns**: `MessageRequestResponse`


##### MessageRequestResponse() → new

**Returns**: `new`


##### initializeMessageRuleParams(response: MessageRequestResponse, messageRule: MessageRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | MessageRequestResponse | - | - |
| messageRule | MessageRule | - | - |

**Returns**: `void`


##### getDeliveredDateTime() → DateTime

**Returns**: `DateTime`


##### getScheduledDateTime() → DateTime

**Returns**: `DateTime`


##### getMessageTemplateId() → String

**Returns**: `String`


##### getMessageRuleParams() → String

**Returns**: `String`


##### getMessageTemplate() → GlificMessageTemplate

**Returns**: `GlificMessageTemplate`


##### getCreatedBy() → String

**Returns**: `String`


##### getLastModifiedBy() → String

**Returns**: `String`




## Functions

### fromMessageRequest(messageRequest: MessageRequest, messageTemplates: List<GlificMessageTemplate>) → MessageRequestResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |
| messageTemplates | List<GlificMessageTemplate> | - | - |

**Returns**: `MessageRequestResponse`



### MessageRequestResponse() → new

**Returns**: `new`



### initializeMessageRuleParams(response: MessageRequestResponse, messageRule: MessageRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | MessageRequestResponse | - | - |
| messageRule | MessageRule | - | - |

**Returns**: `void`



### getDeliveredDateTime() → DateTime

**Returns**: `DateTime`



### getScheduledDateTime() → DateTime

**Returns**: `DateTime`



### getMessageTemplateId() → String

**Returns**: `String`



### getMessageRuleParams() → String

**Returns**: `String`



### getMessageTemplate() → GlificMessageTemplate

**Returns**: `GlificMessageTemplate`



### getCreatedBy() → String

**Returns**: `String`



### getLastModifiedBy() → String

**Returns**: `String`


