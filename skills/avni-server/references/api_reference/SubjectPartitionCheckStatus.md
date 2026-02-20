# API Reference: SubjectPartitionCheckStatus.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/accessControl/SubjectPartitionCheckStatus.java`

---

## Classes

### SubjectPartitionCheckStatus

**Inherits from**: (none)

#### Methods

##### SubjectPartitionCheckStatus(passed: boolean, message: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| passed | boolean | - | - |
| message | String | - | - |

**Returns**: `private`


##### passed() → SubjectPartitionCheckStatus

**Returns**: `SubjectPartitionCheckStatus`


##### SubjectPartitionCheckStatus(unknown: true, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### failed(message: String) → SubjectPartitionCheckStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `SubjectPartitionCheckStatus`


##### SubjectPartitionCheckStatus(unknown: false, unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | message | - | - |

**Returns**: `new`


##### isPassed() → boolean

**Returns**: `boolean`


##### getMessage() → String

**Returns**: `String`




## Functions

### SubjectPartitionCheckStatus(passed: boolean, message: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| passed | boolean | - | - |
| message | String | - | - |

**Returns**: `private`



### passed() → SubjectPartitionCheckStatus

**Returns**: `SubjectPartitionCheckStatus`



### SubjectPartitionCheckStatus(unknown: true, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | true | - | - |
| unknown | null | - | - |

**Returns**: `new`



### failed(message: String) → SubjectPartitionCheckStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | String | - | - |

**Returns**: `SubjectPartitionCheckStatus`



### SubjectPartitionCheckStatus(unknown: false, unknown: message) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | false | - | - |
| unknown | message | - | - |

**Returns**: `new`



### isPassed() → boolean

**Returns**: `boolean`



### getMessage() → String

**Returns**: `String`


