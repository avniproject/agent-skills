# API Reference: CustomQueryService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/CustomQueryService.java`

---

## Classes

### CustomQueryService

**Inherits from**: (none)

#### Methods

##### CustomQueryService(customQueryRepository: CustomQueryRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQueryRepository | CustomQueryRepository | - | - |

**Returns**: `public`


##### upsertCustomQuery(customQuery: CustomQuery) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQuery | CustomQuery | - | - |

**Returns**: `void`


##### processCustomQueries(customQueryContracts: List<CustomQueryContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQueryContracts | List<CustomQueryContract> | - | - |

**Returns**: `void`


##### dtoToEntity(customQueryContract: CustomQueryContract) → CustomQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQueryContract | CustomQueryContract | - | - |

**Returns**: `CustomQuery`


##### CustomQuery() → new

**Returns**: `new`


##### EntityToDto(customQuery: CustomQuery) → CustomQueryContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQuery | CustomQuery | - | - |

**Returns**: `CustomQueryContract`


##### CustomQueryContract() → new

**Returns**: `new`




## Functions

### CustomQueryService(customQueryRepository: CustomQueryRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQueryRepository | CustomQueryRepository | - | - |

**Returns**: `public`



### upsertCustomQuery(customQuery: CustomQuery) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQuery | CustomQuery | - | - |

**Returns**: `void`



### processCustomQueries(customQueryContracts: List<CustomQueryContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQueryContracts | List<CustomQueryContract> | - | - |

**Returns**: `void`



### dtoToEntity(customQueryContract: CustomQueryContract) → CustomQuery

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQueryContract | CustomQueryContract | - | - |

**Returns**: `CustomQuery`



### CustomQuery() → new

**Returns**: `new`



### EntityToDto(customQuery: CustomQuery) → CustomQueryContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| customQuery | CustomQuery | - | - |

**Returns**: `CustomQueryContract`



### CustomQueryContract() → new

**Returns**: `new`


