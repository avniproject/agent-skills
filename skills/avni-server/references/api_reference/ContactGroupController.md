# API Reference: ContactGroupController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/controller/ContactGroupController.java`

---

## Classes

### ContactGroupController

**Inherits from**: (none)

#### Methods

##### ContactGroupController(glificContactRepository: GlificContactRepository, individualService: IndividualService, userRepository: UserRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificContactRepository | GlificContactRepository | - | - |
| individualService | IndividualService | - | - |
| userRepository | UserRepository | - | - |

**Returns**: `public`


##### getContactGroups(=: @RequestParam(value, =: required, =: defaultValue) → WebPagedResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `WebPagedResponse`


##### WebPagedResponse(unknown: groups, unknown: pageable.getPageNumber() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groups | - | - |
| unknown | pageable.getPageNumber( | - | - |

**Returns**: `new`


##### getContactGroupContacts(unknown: @PathVariable("id") → GroupContactsResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `GroupContactsResponse`


##### WebPagedResponse(unknown: contactGroupContacts, unknown: pageable.getPageNumber() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contactGroupContacts | - | - |
| unknown | pageable.getPageNumber( | - | - |

**Returns**: `new`


##### GroupContactsResponse(unknown: webPagedResponse, unknown: contactGroup) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | webPagedResponse | - | - |
| unknown | contactGroup | - | - |

**Returns**: `new`


##### addContactGroup(ContactGroupRequest: @RequestBody) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ContactGroupRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<String>`


##### addContactGroup(unknown: @PathVariable("id") → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `void`


##### addSubject(unknown: @PathVariable("contactGroupId") → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("contactGroupId" | - | - |

**Returns**: `ResponseEntity<String>`


##### addUser(unknown: @PathVariable("contactGroupId") → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("contactGroupId" | - | - |

**Returns**: `void`


##### removeContacts(unknown: @PathVariable("contactGroupId") → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("contactGroupId" | - | - |

**Returns**: `void`


##### deleteContactGroups(List<String>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<String> | @RequestBody | - | - |

**Returns**: `void`




## Functions

### ContactGroupController(glificContactRepository: GlificContactRepository, individualService: IndividualService, userRepository: UserRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificContactRepository | GlificContactRepository | - | - |
| individualService | IndividualService | - | - |
| userRepository | UserRepository | - | - |

**Returns**: `public`



### getContactGroups(=: @RequestParam(value, =: required, =: defaultValue) → WebPagedResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |
| = | required | - | - |
| = | defaultValue | - | - |

**Returns**: `WebPagedResponse`



### WebPagedResponse(unknown: groups, unknown: pageable.getPageNumber() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groups | - | - |
| unknown | pageable.getPageNumber( | - | - |

**Returns**: `new`



### getContactGroupContacts(unknown: @PathVariable("id") → GroupContactsResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `GroupContactsResponse`



### WebPagedResponse(unknown: contactGroupContacts, unknown: pageable.getPageNumber() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contactGroupContacts | - | - |
| unknown | pageable.getPageNumber( | - | - |

**Returns**: `new`



### GroupContactsResponse(unknown: webPagedResponse, unknown: contactGroup) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | webPagedResponse | - | - |
| unknown | contactGroup | - | - |

**Returns**: `new`



### addContactGroup(ContactGroupRequest: @RequestBody) → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ContactGroupRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<String>`



### addContactGroup(unknown: @PathVariable("id") → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `void`



### addSubject(unknown: @PathVariable("contactGroupId") → ResponseEntity<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("contactGroupId" | - | - |

**Returns**: `ResponseEntity<String>`



### addUser(unknown: @PathVariable("contactGroupId") → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("contactGroupId" | - | - |

**Returns**: `void`



### removeContacts(unknown: @PathVariable("contactGroupId") → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("contactGroupId" | - | - |

**Returns**: `void`



### deleteContactGroups(List<String>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<String> | @RequestBody | - | - |

**Returns**: `void`


