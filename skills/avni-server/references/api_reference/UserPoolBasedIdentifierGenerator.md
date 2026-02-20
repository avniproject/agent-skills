# API Reference: UserPoolBasedIdentifierGenerator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/identifier/UserPoolBasedIdentifierGenerator.java`

---

## Classes

### UserPoolBasedIdentifierGenerator

**Inherits from**: IdentifierGenerator

#### Methods

##### UserPoolBasedIdentifierGenerator(prefixedUserPoolBasedIdentifierGenerator: PrefixedUserPoolBasedIdentifierGenerator) → public

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




## Functions

### UserPoolBasedIdentifierGenerator(prefixedUserPoolBasedIdentifierGenerator: PrefixedUserPoolBasedIdentifierGenerator) → public

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


