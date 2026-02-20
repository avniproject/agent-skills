# API Reference: GlificMessageRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/repository/GlificMessageRepository.java`

---

## Classes

### GlificMessageRepository

**Inherits from**: AbstractGlificRepository

#### Methods

##### GlificMessageRepository(glificRestClient: GlificRestClient) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificRestClient | GlificRestClient | - | - |

**Returns**: `public`


##### sendMessageToContact(messageTemplateId: String, externalId: String, parameters: String[]) → GlificMessageResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageTemplateId | String | - | - |
| externalId | String | - | - |
| parameters | String[] | - | - |

**Returns**: `GlificMessageResponse`


##### sendMessageToGroup(externalId: String, messageTemplateId: String, parameters: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |
| messageTemplateId | String | - | - |
| parameters | String[] | - | - |

**Returns**: `void`


##### startFlowForContact(flowId: String, contactId: String) → GlificStartFlowForContactResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| flowId | String | - | - |
| contactId | String | - | - |

**Returns**: `GlificStartFlowForContactResponse`


##### arrayToString(items: String[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| items | String[] | - | - |

**Returns**: `String`


##### StringBuffer() → new

**Returns**: `new`




## Functions

### GlificMessageRepository(glificRestClient: GlificRestClient) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificRestClient | GlificRestClient | - | - |

**Returns**: `public`



### sendMessageToContact(messageTemplateId: String, externalId: String, parameters: String[]) → GlificMessageResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageTemplateId | String | - | - |
| externalId | String | - | - |
| parameters | String[] | - | - |

**Returns**: `GlificMessageResponse`



### sendMessageToGroup(externalId: String, messageTemplateId: String, parameters: String[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |
| messageTemplateId | String | - | - |
| parameters | String[] | - | - |

**Returns**: `void`



### startFlowForContact(flowId: String, contactId: String) → GlificStartFlowForContactResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| flowId | String | - | - |
| contactId | String | - | - |

**Returns**: `GlificStartFlowForContactResponse`



### arrayToString(items: String[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| items | String[] | - | - |

**Returns**: `String`



### StringBuffer() → new

**Returns**: `new`


