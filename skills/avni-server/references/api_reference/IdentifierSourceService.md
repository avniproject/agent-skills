# API Reference: IdentifierSourceService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/IdentifierSourceService.java`

---

## Classes

### IdentifierSourceService

**Inherits from**: NonScopeAwareService

#### Methods

##### IdentifierSourceService(catchmentRepository: CatchmentRepository, identifierSourceRepository: IdentifierSourceRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRepository | CatchmentRepository | - | - |
| identifierSourceRepository | IdentifierSourceRepository | - | - |

**Returns**: `public`


##### saveIdSource(request: IdentifierSourceContractWeb) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | IdentifierSourceContractWeb | - | - |

**Returns**: `IdentifierSource`


##### IdentifierSource() → new

**Returns**: `new`


##### saveIdSource(request: IdentifierSourceContract) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | IdentifierSourceContract | - | - |

**Returns**: `IdentifierSource`


##### IdentifierSource() → new

**Returns**: `new`


##### updateIdSource(identifierSource: IdentifierSource, request: IdentifierSourceContractWeb) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| request | IdentifierSourceContractWeb | - | - |

**Returns**: `IdentifierSource`


##### createIdSource(identifierSource: IdentifierSource, request: IdentifierSourceContractWeb) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| request | IdentifierSourceContractWeb | - | - |

**Returns**: `IdentifierSource`


##### JsonObject() → new

**Returns**: `new`


##### createIdSource(identifierSource: IdentifierSource, request: IdentifierSourceContract) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| request | IdentifierSourceContract | - | - |

**Returns**: `IdentifierSource`


##### JsonObject() → new

**Returns**: `new`


##### getCatchment(catchmentId: Long, catchmentUUID: String) → Catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | Long | - | - |
| catchmentUUID | String | - | - |

**Returns**: `Catchment`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### saveIdSources(identifierSourceContractWebs: IdentifierSourceContractWeb[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSourceContractWebs | IdentifierSourceContractWeb[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: identifierSourceContractWeb, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSourceContractWeb | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### saveIdSources(identifierSourceContracts: IdentifierSourceContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSourceContracts | IdentifierSourceContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: identifierSourceContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSourceContract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### IdentifierSourceService(catchmentRepository: CatchmentRepository, identifierSourceRepository: IdentifierSourceRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentRepository | CatchmentRepository | - | - |
| identifierSourceRepository | IdentifierSourceRepository | - | - |

**Returns**: `public`



### saveIdSource(request: IdentifierSourceContractWeb) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | IdentifierSourceContractWeb | - | - |

**Returns**: `IdentifierSource`



### IdentifierSource() → new

**Returns**: `new`



### saveIdSource(request: IdentifierSourceContract) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | IdentifierSourceContract | - | - |

**Returns**: `IdentifierSource`



### IdentifierSource() → new

**Returns**: `new`



### updateIdSource(identifierSource: IdentifierSource, request: IdentifierSourceContractWeb) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| request | IdentifierSourceContractWeb | - | - |

**Returns**: `IdentifierSource`



### createIdSource(identifierSource: IdentifierSource, request: IdentifierSourceContractWeb) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| request | IdentifierSourceContractWeb | - | - |

**Returns**: `IdentifierSource`



### JsonObject() → new

**Returns**: `new`



### createIdSource(identifierSource: IdentifierSource, request: IdentifierSourceContract) → IdentifierSource

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSource | IdentifierSource | - | - |
| request | IdentifierSourceContract | - | - |

**Returns**: `IdentifierSource`



### JsonObject() → new

**Returns**: `new`



### getCatchment(catchmentId: Long, catchmentUUID: String) → Catchment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| catchmentId | Long | - | - |
| catchmentUUID | String | - | - |

**Returns**: `Catchment`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### saveIdSources(identifierSourceContractWebs: IdentifierSourceContractWeb[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSourceContractWebs | IdentifierSourceContractWeb[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: identifierSourceContractWeb, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSourceContractWeb | - | - |
| unknown | e | - | - |

**Returns**: `new`



### saveIdSources(identifierSourceContracts: IdentifierSourceContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| identifierSourceContracts | IdentifierSourceContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: identifierSourceContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | identifierSourceContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


