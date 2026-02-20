# API Reference: GlificContactRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/repository/GlificContactRepository.java`

---

## Classes

### GlificContactRepository

**Inherits from**: AbstractGlificRepository

#### Methods

##### GlificContactRepository(glificRestClient: GlificRestClient) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificRestClient | GlificRestClient | - | - |

**Returns**: `public`


##### getOrCreateContact(phoneNumber: String, fullName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| fullName | String | - | - |

**Returns**: `String`


##### PhoneNumberNotAvailableOrIncorrectException() → new

**Returns**: `new`


##### createContact(phoneNumber: String, fullName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| fullName | String | - | - |

**Returns**: `String`


##### getContact(phoneNumber: String) → GlificGetContactsResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `GlificGetContactsResponse`


##### getContactGroupCount() → int

**Returns**: `int`


##### getContactGroupContactsCount(contactGroupId: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupId | String | - | - |

**Returns**: `int`


##### getContactGroup(id: String) → GlificGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `GlificGroup`


##### findContact(phoneNumber: String) → GlificContactResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `GlificContactResponse`


##### GlificContactNotFoundError(with: String.format("Contact, unknown: phoneNumber) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Contact | - | - |
| unknown | phoneNumber | - | - |

**Returns**: `new`


##### getAllMsgsForContact(phoneNumber: String) → List<Message>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `List<Message>`


##### addContactToGroup(contactGroupId: String, contactId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupId | String | - | - |
| contactId | String | - | - |

**Returns**: `void`


##### removeContactsFromGroup(contactGroupId: String, contactIds: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupId | String | - | - |
| contactIds | List<String> | - | - |

**Returns**: `void`


##### createContactGroup(contactGroupRequest: ContactGroupRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupRequest | ContactGroupRequest | - | - |

**Returns**: `void`


##### GlificException(unknown: glificResponse.getFirstError() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | glificResponse.getFirstError( | - | - |

**Returns**: `new`


##### updateContactGroup(id: String, contactGroupRequest: ContactGroupRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |
| contactGroupRequest | ContactGroupRequest | - | - |

**Returns**: `void`


##### deleteContactGroup(id: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `void`




## Functions

### GlificContactRepository(glificRestClient: GlificRestClient) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificRestClient | GlificRestClient | - | - |

**Returns**: `public`



### getOrCreateContact(phoneNumber: String, fullName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| fullName | String | - | - |

**Returns**: `String`



### PhoneNumberNotAvailableOrIncorrectException() → new

**Returns**: `new`



### createContact(phoneNumber: String, fullName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |
| fullName | String | - | - |

**Returns**: `String`



### getContact(phoneNumber: String) → GlificGetContactsResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `GlificGetContactsResponse`



### getContactGroupCount() → int

**Returns**: `int`



### getContactGroupContactsCount(contactGroupId: String) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupId | String | - | - |

**Returns**: `int`



### getContactGroup(id: String) → GlificGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `GlificGroup`



### findContact(phoneNumber: String) → GlificContactResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `GlificContactResponse`



### GlificContactNotFoundError(with: String.format("Contact, unknown: phoneNumber) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Contact | - | - |
| unknown | phoneNumber | - | - |

**Returns**: `new`



### getAllMsgsForContact(phoneNumber: String) → List<Message>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| phoneNumber | String | - | - |

**Returns**: `List<Message>`



### addContactToGroup(contactGroupId: String, contactId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupId | String | - | - |
| contactId | String | - | - |

**Returns**: `void`



### removeContactsFromGroup(contactGroupId: String, contactIds: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupId | String | - | - |
| contactIds | List<String> | - | - |

**Returns**: `void`



### createContactGroup(contactGroupRequest: ContactGroupRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contactGroupRequest | ContactGroupRequest | - | - |

**Returns**: `void`



### GlificException(unknown: glificResponse.getFirstError() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | glificResponse.getFirstError( | - | - |

**Returns**: `new`



### updateContactGroup(id: String, contactGroupRequest: ContactGroupRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |
| contactGroupRequest | ContactGroupRequest | - | - |

**Returns**: `void`



### deleteContactGroup(id: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | String | - | - |

**Returns**: `void`


