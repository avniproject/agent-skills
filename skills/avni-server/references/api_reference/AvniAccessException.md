# API Reference: AvniAccessException.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/accessControl/AvniAccessException.java`

---

## Classes

### AvniAccessException

**Inherits from**: RuntimeException

#### Methods

##### AvniAccessException(message: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `private`


##### createNoPrivilegeException(privilegeType: PrivilegeType) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |

**Returns**: `AvniAccessException`


##### AvniAccessException(does: String.format("User, unknown: privilegeType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| does | String.format("User | - | - |
| unknown | privilegeType | - | - |

**Returns**: `new`


##### createNoPrivilegeException(privilegeTypes: List<PrivilegeType>) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `AvniAccessException`


##### AvniAccessException(does: String.format("User, unknown: privilegeTypes.stream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| does | String.format("User | - | - |
| unknown | privilegeTypes.stream( | - | - |

**Returns**: `new`


##### createNoPrivilegeException(privilegeType: PrivilegeType, entityUUID: String, entityType: Class) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| entityUUID | String | - | - |
| entityType | Class | - | - |

**Returns**: `AvniAccessException`


##### AvniAccessException(does: String.format("User, unknown: privilegeType, unknown: entityType.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| does | String.format("User | - | - |
| unknown | privilegeType | - | - |
| unknown | entityType.getName( | - | - |

**Returns**: `new`


##### createForNotAdmin(user: User) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `AvniAccessException`


##### AvniAccessException(%s: String.format("User, unknown: user.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("User | - | - |
| unknown | user.getUsername( | - | - |

**Returns**: `new`


##### createForAdmin(user: User) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `AvniAccessException`


##### AvniAccessException(%s: String.format("User, disallowed": operation, unknown: user.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("User | - | - |
| disallowed" | operation | - | - |
| unknown | user.getUsername( | - | - |

**Returns**: `new`


##### createForUserNotAllowedTokenGeneration(user: User) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `AvniAccessException`


##### AvniAccessException(%s: String.format("User, unknown: user.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("User | - | - |
| unknown | user.getUsername( | - | - |

**Returns**: `new`




## Functions

### AvniAccessException(message: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `private`



### createNoPrivilegeException(privilegeType: PrivilegeType) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |

**Returns**: `AvniAccessException`



### AvniAccessException(does: String.format("User, unknown: privilegeType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| does | String.format("User | - | - |
| unknown | privilegeType | - | - |

**Returns**: `new`



### createNoPrivilegeException(privilegeTypes: List<PrivilegeType>) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeTypes | List<PrivilegeType> | - | - |

**Returns**: `AvniAccessException`



### AvniAccessException(does: String.format("User, unknown: privilegeTypes.stream() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| does | String.format("User | - | - |
| unknown | privilegeTypes.stream( | - | - |

**Returns**: `new`



### createNoPrivilegeException(privilegeType: PrivilegeType, entityUUID: String, entityType: Class) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| privilegeType | PrivilegeType | - | - |
| entityUUID | String | - | - |
| entityType | Class | - | - |

**Returns**: `AvniAccessException`



### AvniAccessException(does: String.format("User, unknown: privilegeType, unknown: entityType.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| does | String.format("User | - | - |
| unknown | privilegeType | - | - |
| unknown | entityType.getName( | - | - |

**Returns**: `new`



### createForNotAdmin(user: User) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `AvniAccessException`



### AvniAccessException(%s: String.format("User, unknown: user.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("User | - | - |
| unknown | user.getUsername( | - | - |

**Returns**: `new`



### createForAdmin(user: User) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `AvniAccessException`



### AvniAccessException(%s: String.format("User, disallowed": operation, unknown: user.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("User | - | - |
| disallowed" | operation | - | - |
| unknown | user.getUsername( | - | - |

**Returns**: `new`



### createForUserNotAllowedTokenGeneration(user: User) → AvniAccessException

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user | User | - | - |

**Returns**: `AvniAccessException`



### AvniAccessException(%s: String.format("User, unknown: user.getUsername() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("User | - | - |
| unknown | user.getUsername( | - | - |

**Returns**: `new`


