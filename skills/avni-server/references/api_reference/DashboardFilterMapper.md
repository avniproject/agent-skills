# API Reference: DashboardFilterMapper.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/mapper/dashboard/DashboardFilterMapper.java`

---

## Classes

### DashboardFilterMapper

**Inherits from**: (none)

#### Methods

##### DashboardFilterMapper(conceptRepository: ConceptRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |

**Returns**: `public`


##### toBundle(dashboardFilter: DashboardFilter) → DashboardFilterBundleContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardFilter | DashboardFilter | - | - |

**Returns**: `DashboardFilterBundleContract`


##### DashboardFilterBundleContract() → new

**Returns**: `new`


##### toContract(dashboardFilter: DashboardFilter, filterContract: DashboardFilterContract) → DashboardFilterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardFilter | DashboardFilter | - | - |
| filterContract | DashboardFilterContract | - | - |

**Returns**: `DashboardFilterContract`


##### ConceptContract() → new

**Returns**: `new`


##### toResponse(dashboardFilter: DashboardFilter) → DashboardFilterResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardFilter | DashboardFilter | - | - |

**Returns**: `DashboardFilterResponse`


##### DashboardFilterResponse() → new

**Returns**: `new`




## Functions

### DashboardFilterMapper(conceptRepository: ConceptRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |

**Returns**: `public`



### toBundle(dashboardFilter: DashboardFilter) → DashboardFilterBundleContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardFilter | DashboardFilter | - | - |

**Returns**: `DashboardFilterBundleContract`



### DashboardFilterBundleContract() → new

**Returns**: `new`



### toContract(dashboardFilter: DashboardFilter, filterContract: DashboardFilterContract) → DashboardFilterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardFilter | DashboardFilter | - | - |
| filterContract | DashboardFilterContract | - | - |

**Returns**: `DashboardFilterContract`



### ConceptContract() → new

**Returns**: `new`



### toResponse(dashboardFilter: DashboardFilter) → DashboardFilterResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardFilter | DashboardFilter | - | - |

**Returns**: `DashboardFilterResponse`



### DashboardFilterResponse() → new

**Returns**: `new`


