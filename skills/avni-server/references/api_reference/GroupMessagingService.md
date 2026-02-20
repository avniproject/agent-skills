# API Reference: GroupMessagingService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/service/GroupMessagingService.java`

---

## Classes

### GroupMessagingService

**Inherits from**: (none)

#### Methods

##### GroupMessagingService(glificMessageRepository: GlificMessageRepository, glificContactRepository: GlificContactRepository, individualService: IndividualService, userService: UserService, bugsnag: Bugsnag) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificMessageRepository | GlificMessageRepository | - | - |
| glificContactRepository | GlificContactRepository | - | - |
| individualService | IndividualService | - | - |
| userService | UserService | - | - |
| bugsnag | Bugsnag | - | - |

**Returns**: `public`


##### sendManualMessage(messageRequest: MessageRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `void`


##### sendNonStaticMessageToGroup(messageReceiver: MessageReceiver, manualMessage: ManualMessage, parameters: String[], indicesOfNonStaticParameters: int[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| manualMessage | ManualMessage | - | - |
| parameters | String[] | - | - |
| indicesOfNonStaticParameters | int[] | - | - |

**Returns**: `void`


##### NextTriggerDetails(unknown: pageNumber, unknown: exception.getContactIdFailedAt() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | pageNumber | - | - |
| unknown | exception.getContactIdFailedAt( | - | - |

**Returns**: `new`


##### NextTriggerDetails(unknown: pageNumber) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | pageNumber | - | - |

**Returns**: `new`


##### GlificGroupMessageFailureException(unknown: exception.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exception.getMessage( | - | - |

**Returns**: `new`


##### sendMessageToContactsInThePartiallySentPage(messageReceiver: MessageReceiver, manualMessage: ManualMessage, parameters: String[], indicesOfNonStaticParameters: int[]) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| manualMessage | ManualMessage | - | - |
| parameters | String[] | - | - |
| indicesOfNonStaticParameters | int[] | - | - |

**Returns**: `int`


##### sendNonStaticMessageToContacts(manualMessage: ManualMessage, parameters: String[], indicesOfNonStaticParameters: int[], contactGroupContacts: List<GlificContactGroupContactsResponse.GlificContactGroupContacts>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessage | ManualMessage | - | - |
| parameters | String[] | - | - |
| indicesOfNonStaticParameters | int[] | - | - |
| contactGroupContacts | List<GlificContactGroupContactsResponse.GlificContactGroupContacts> | - | - |

**Returns**: `void`


##### GlificGroupMessageFailureException(unknown: contactGroupContact.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contactGroupContact.getId( | - | - |

**Returns**: `new`


##### logAndNotifyError(contactGroupContact: GlificContactGroupContactsResponse.GlificContactGroupContacts) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupContact | GlificContactGroupContactsResponse.GlificContactGroupContacts | - | - |

**Returns**: `void`


##### Exception(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`


##### findNameOfTheContact(contactGroupContact: GlificContactGroupContactsResponse.GlificContactGroupContacts) → Optional<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupContact | GlificContactGroupContactsResponse.GlificContactGroupContacts | - | - |

**Returns**: `Optional<String>`




## Functions

### GroupMessagingService(glificMessageRepository: GlificMessageRepository, glificContactRepository: GlificContactRepository, individualService: IndividualService, userService: UserService, bugsnag: Bugsnag) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificMessageRepository | GlificMessageRepository | - | - |
| glificContactRepository | GlificContactRepository | - | - |
| individualService | IndividualService | - | - |
| userService | UserService | - | - |
| bugsnag | Bugsnag | - | - |

**Returns**: `public`



### sendManualMessage(messageRequest: MessageRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageRequest | MessageRequest | - | - |

**Returns**: `void`



### sendNonStaticMessageToGroup(messageReceiver: MessageReceiver, manualMessage: ManualMessage, parameters: String[], indicesOfNonStaticParameters: int[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| manualMessage | ManualMessage | - | - |
| parameters | String[] | - | - |
| indicesOfNonStaticParameters | int[] | - | - |

**Returns**: `void`



### NextTriggerDetails(unknown: pageNumber, unknown: exception.getContactIdFailedAt() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | pageNumber | - | - |
| unknown | exception.getContactIdFailedAt( | - | - |

**Returns**: `new`



### NextTriggerDetails(unknown: pageNumber) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | pageNumber | - | - |

**Returns**: `new`



### GlificGroupMessageFailureException(unknown: exception.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exception.getMessage( | - | - |

**Returns**: `new`



### sendMessageToContactsInThePartiallySentPage(messageReceiver: MessageReceiver, manualMessage: ManualMessage, parameters: String[], indicesOfNonStaticParameters: int[]) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| messageReceiver | MessageReceiver | - | - |
| manualMessage | ManualMessage | - | - |
| parameters | String[] | - | - |
| indicesOfNonStaticParameters | int[] | - | - |

**Returns**: `int`



### sendNonStaticMessageToContacts(manualMessage: ManualMessage, parameters: String[], indicesOfNonStaticParameters: int[], contactGroupContacts: List<GlificContactGroupContactsResponse.GlificContactGroupContacts>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| manualMessage | ManualMessage | - | - |
| parameters | String[] | - | - |
| indicesOfNonStaticParameters | int[] | - | - |
| contactGroupContacts | List<GlificContactGroupContactsResponse.GlificContactGroupContacts> | - | - |

**Returns**: `void`



### GlificGroupMessageFailureException(unknown: contactGroupContact.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contactGroupContact.getId( | - | - |

**Returns**: `new`



### logAndNotifyError(contactGroupContact: GlificContactGroupContactsResponse.GlificContactGroupContacts) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupContact | GlificContactGroupContactsResponse.GlificContactGroupContacts | - | - |

**Returns**: `void`



### Exception(unknown: errorMessage) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | errorMessage | - | - |

**Returns**: `new`



### findNameOfTheContact(contactGroupContact: GlificContactGroupContactsResponse.GlificContactGroupContacts) → Optional<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupContact | GlificContactGroupContactsResponse.GlificContactGroupContacts | - | - |

**Returns**: `Optional<String>`


