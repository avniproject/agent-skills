# API Reference: GlificContactRepositoryTest.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/messaging/repository/GlificContactRepositoryTest.java`

---

## Classes

### GlificContactRepositoryTest

**Inherits from**: (none)

#### Methods

##### shouldCreateContactIfNotAvailable() → void

**Returns**: `void`


##### TestAccountBuilder() → new

**Returns**: `new`


##### TestOrganisationBuilder() → new

**Returns**: `new`


##### UserContextBuilder() → new

**Returns**: `new`


##### GlificContactRepository(unknown: glificRestClient) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | glificRestClient | - | - |

**Returns**: `new`


##### GlificGetContactsResponse() → new

**Returns**: `new`


##### GlificOptinContactResponse() → new

**Returns**: `new`


##### GlificOptinContactWithErrorsResponse() → new

**Returns**: `new`


##### GlificContactResponse() → new

**Returns**: `new`


##### contacts(ContactFilter: $filter:, Opts: $opts:) → query

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ContactFilter | $filter: | - | - |
| Opts | $opts: | - | - |

**Returns**: `query`


##### optinContact(String!: $phone:, String: $name:) → mutation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String! | $phone: | - | - |
| String | $name: | - | - |

**Returns**: `mutation`




## Functions

### shouldCreateContactIfNotAvailable() → void

**Returns**: `void`



### TestAccountBuilder() → new

**Returns**: `new`



### TestOrganisationBuilder() → new

**Returns**: `new`



### UserContextBuilder() → new

**Returns**: `new`



### GlificContactRepository(unknown: glificRestClient) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | glificRestClient | - | - |

**Returns**: `new`



### GlificGetContactsResponse() → new

**Returns**: `new`



### GlificOptinContactResponse() → new

**Returns**: `new`



### GlificOptinContactWithErrorsResponse() → new

**Returns**: `new`



### GlificContactResponse() → new

**Returns**: `new`



### contacts(ContactFilter: $filter:, Opts: $opts:) → query

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ContactFilter | $filter: | - | - |
| Opts | $opts: | - | - |

**Returns**: `query`



### optinContact(String!: $phone:, String: $name:) → mutation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String! | $phone: | - | - |
| String | $name: | - | - |

**Returns**: `mutation`


