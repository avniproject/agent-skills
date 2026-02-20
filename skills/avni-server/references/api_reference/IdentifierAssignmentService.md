# API Reference: IdentifierAssignmentService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/IdentifierAssignmentService.java`

---

## Classes

### IdentifierAssignmentService

**Inherits from**: DeviceAwareService

#### Methods

##### IdentifierAssignmentService(identifierSourceRepository: IdentifierSourceRepository, identifierAssignmentRepository: IdentifierAssignmentRepository, context: ApplicationContext) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSourceRepository | IdentifierSourceRepository | - | - |
| identifierAssignmentRepository | IdentifierAssignmentRepository | - | - |
| context | ApplicationContext | - | - |

**Returns**: `public`


##### generateIdentifiersIfNecessary(user: User, deviceId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| deviceId | String | - | - |

**Returns**: `void`


##### generateIdentifiersIfNecessary(user: User, identifierSource: IdentifierSource, deviceId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| identifierSource | IdentifierSource | - | - |
| deviceId | String | - | - |

**Returns**: `void`


##### generateIdentifiersForAForm(form: Form, user: User) → List<IdentifierAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |
| user | User | - | - |

**Returns**: `List<IdentifierAssignment>`


##### shouldGenerateIdentifiers(user: User, identifierSource: IdentifierSource, deviceId: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| identifierSource | IdentifierSource | - | - |
| deviceId | String | - | - |

**Returns**: `boolean`


##### isSyncRequiredForDevice(lastModifiedDateTime: DateTime, deviceId: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| deviceId | String | - | - |

**Returns**: `boolean`




## Functions

### IdentifierAssignmentService(identifierSourceRepository: IdentifierSourceRepository, identifierAssignmentRepository: IdentifierAssignmentRepository, context: ApplicationContext) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSourceRepository | IdentifierSourceRepository | - | - |
| identifierAssignmentRepository | IdentifierAssignmentRepository | - | - |
| context | ApplicationContext | - | - |

**Returns**: `public`



### generateIdentifiersIfNecessary(user: User, deviceId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| deviceId | String | - | - |

**Returns**: `void`



### generateIdentifiersIfNecessary(user: User, identifierSource: IdentifierSource, deviceId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| identifierSource | IdentifierSource | - | - |
| deviceId | String | - | - |

**Returns**: `void`



### generateIdentifiersForAForm(form: Form, user: User) → List<IdentifierAssignment>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |
| user | User | - | - |

**Returns**: `List<IdentifierAssignment>`



### shouldGenerateIdentifiers(user: User, identifierSource: IdentifierSource, deviceId: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |
| identifierSource | IdentifierSource | - | - |
| deviceId | String | - | - |

**Returns**: `boolean`



### isSyncRequiredForDevice(lastModifiedDateTime: DateTime, deviceId: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| deviceId | String | - | - |

**Returns**: `boolean`


