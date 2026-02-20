# API Reference: UserBasedIdentifierGenerator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/identifier/UserBasedIdentifierGenerator.java`

---

## Classes

### UserBasedIdentifierGenerator

**Inherits from**: IdentifierGenerator

#### Methods

##### UserBasedIdentifierGenerator(prefixedUserPoolBasedIdentifierGenerator: PrefixedUserPoolBasedIdentifierGenerator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefixedUserPoolBasedIdentifierGenerator | PrefixedUserPoolBasedIdentifierGenerator | - | - |

**Returns**: `public`


##### generateIdentifiers(identifierSource: IdentifierSource, user: User, deviceId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| deviceId | String | - | - |

**Returns**: `void`


##### generateSingleIdentifier(identifierSource: IdentifierSource, user: User) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |

**Returns**: `IdentifierAssignment`


##### getIdPrefix(user: User) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `String`


##### IllegalArgumentException(idPrefix: "Missing) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| idPrefix | "Missing | - | - |

**Returns**: `new`




## Functions

### UserBasedIdentifierGenerator(prefixedUserPoolBasedIdentifierGenerator: PrefixedUserPoolBasedIdentifierGenerator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| prefixedUserPoolBasedIdentifierGenerator | PrefixedUserPoolBasedIdentifierGenerator | - | - |

**Returns**: `public`



### generateIdentifiers(identifierSource: IdentifierSource, user: User, deviceId: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |
| deviceId | String | - | - |

**Returns**: `void`



### generateSingleIdentifier(identifierSource: IdentifierSource, user: User) → IdentifierAssignment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| user | User | - | - |

**Returns**: `IdentifierAssignment`



### getIdPrefix(user: User) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `String`



### IllegalArgumentException(idPrefix: "Missing) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| idPrefix | "Missing | - | - |

**Returns**: `new`


