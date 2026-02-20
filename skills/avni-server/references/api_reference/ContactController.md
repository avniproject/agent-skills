# API Reference: ContactController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/messaging/controller/ContactController.java`

---

## Classes

### ContactController

**Inherits from**: (none)

#### Methods

##### ContactController(glificContactRepository: GlificContactRepository, individualService: IndividualService, userRepository: UserRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificContactRepository | GlificContactRepository | - | - |
| individualService | IndividualService | - | - |
| userRepository | UserRepository | - | - |

**Returns**: `public`


##### fetchContactSubject(unknown: @PathVariable("id") → GlificContactResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `GlificContactResponse`


##### fetchContactUser(unknown: @PathVariable("id") → GlificContactResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `GlificContactResponse`


##### fetchAllMsgsForContactUser(unknown: @PathVariable("id") → List<Message>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `List<Message>`




## Functions

### ContactController(glificContactRepository: GlificContactRepository, individualService: IndividualService, userRepository: UserRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| glificContactRepository | GlificContactRepository | - | - |
| individualService | IndividualService | - | - |
| userRepository | UserRepository | - | - |

**Returns**: `public`



### fetchContactSubject(unknown: @PathVariable("id") → GlificContactResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `GlificContactResponse`



### fetchContactUser(unknown: @PathVariable("id") → GlificContactResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `GlificContactResponse`



### fetchAllMsgsForContactUser(unknown: @PathVariable("id") → List<Message>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `List<Message>`


