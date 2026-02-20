# API Reference: GenderController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/GenderController.java`

---

## Classes

### GenderController

**Inherits from**: (none)

#### Methods

##### GenderController(genderRepository: GenderRepository, projectionFactory: ProjectionFactory, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderRepository | GenderRepository | - | - |
| projectionFactory | ProjectionFactory | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### getAll(pageable: Pageable) → Page<GenderProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<GenderProjection>`


##### saveOrUpdate(List<GenderContract>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<GenderContract> | @RequestBody | - | - |

**Returns**: `void`


##### saveOrUpdate(genderContract: GenderContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderContract | GenderContract | - | - |

**Returns**: `void`


##### Gender() → new

**Returns**: `new`




## Functions

### GenderController(genderRepository: GenderRepository, projectionFactory: ProjectionFactory, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderRepository | GenderRepository | - | - |
| projectionFactory | ProjectionFactory | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getAll(pageable: Pageable) → Page<GenderProjection>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| pageable | Pageable | - | - |

**Returns**: `Page<GenderProjection>`



### saveOrUpdate(List<GenderContract>: @RequestBody) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<GenderContract> | @RequestBody | - | - |

**Returns**: `void`



### saveOrUpdate(genderContract: GenderContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| genderContract | GenderContract | - | - |

**Returns**: `void`



### Gender() → new

**Returns**: `new`


