# API Reference: DashboardMapper.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/mapper/dashboard/DashboardMapper.java`

---

## Classes

### DashboardMapper

**Inherits from**: (none)

#### Methods

##### DashboardMapper(dashboardFilterMapper: DashboardFilterMapper, reportCardMapper: ReportCardMapper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardFilterMapper | DashboardFilterMapper | - | - |
| reportCardMapper | ReportCardMapper | - | - |

**Returns**: `public`


##### toWebResponse(dashboard: Dashboard) → DashboardWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | Dashboard | - | - |

**Returns**: `DashboardWebResponse`


##### DashboardWebResponse() → new

**Returns**: `new`


##### setSections(dashboardContract: DashboardWebResponse, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardWebResponse | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### setSections(dashboardContract: DashboardBundleContract, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardBundleContract | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### setFilters(dashboardContract: DashboardWebResponse, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardWebResponse | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### setFilters(dashboardBundleContract: DashboardBundleContract, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardBundleContract | DashboardBundleContract | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### toWebResponse(ds: DashboardSection) → DashboardSectionWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ds | DashboardSection | - | - |

**Returns**: `DashboardSectionWebResponse`


##### DashboardSectionWebResponse() → new

**Returns**: `new`


##### toBundle(ds: DashboardSection) → DashboardSectionBundleContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ds | DashboardSection | - | - |

**Returns**: `DashboardSectionBundleContract`


##### DashboardSectionBundleContract() → new

**Returns**: `new`


##### setDashboardSectionCardMappings(response: DashboardSectionWebResponse, dashboardSection: DashboardSection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | DashboardSectionWebResponse | - | - |
| dashboardSection | DashboardSection | - | - |

**Returns**: `void`


##### DashboardSectionCardMappingWebResponse() → new

**Returns**: `new`


##### setDashboardSectionCardMappings(contract: DashboardSectionBundleContract, dashboardSection: DashboardSection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contract | DashboardSectionBundleContract | - | - |
| dashboardSection | DashboardSection | - | - |

**Returns**: `void`


##### toBundle(dashboard: Dashboard) → DashboardBundleContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | Dashboard | - | - |

**Returns**: `DashboardBundleContract`


##### DashboardBundleContract() → new

**Returns**: `new`




## Functions

### DashboardMapper(dashboardFilterMapper: DashboardFilterMapper, reportCardMapper: ReportCardMapper) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardFilterMapper | DashboardFilterMapper | - | - |
| reportCardMapper | ReportCardMapper | - | - |

**Returns**: `public`



### toWebResponse(dashboard: Dashboard) → DashboardWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | Dashboard | - | - |

**Returns**: `DashboardWebResponse`



### DashboardWebResponse() → new

**Returns**: `new`



### setSections(dashboardContract: DashboardWebResponse, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardWebResponse | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`



### setSections(dashboardContract: DashboardBundleContract, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardBundleContract | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`



### setFilters(dashboardContract: DashboardWebResponse, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardWebResponse | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`



### setFilters(dashboardBundleContract: DashboardBundleContract, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardBundleContract | DashboardBundleContract | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`



### toWebResponse(ds: DashboardSection) → DashboardSectionWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ds | DashboardSection | - | - |

**Returns**: `DashboardSectionWebResponse`



### DashboardSectionWebResponse() → new

**Returns**: `new`



### toBundle(ds: DashboardSection) → DashboardSectionBundleContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ds | DashboardSection | - | - |

**Returns**: `DashboardSectionBundleContract`



### DashboardSectionBundleContract() → new

**Returns**: `new`



### setDashboardSectionCardMappings(response: DashboardSectionWebResponse, dashboardSection: DashboardSection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | DashboardSectionWebResponse | - | - |
| dashboardSection | DashboardSection | - | - |

**Returns**: `void`



### DashboardSectionCardMappingWebResponse() → new

**Returns**: `new`



### setDashboardSectionCardMappings(contract: DashboardSectionBundleContract, dashboardSection: DashboardSection) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contract | DashboardSectionBundleContract | - | - |
| dashboardSection | DashboardSection | - | - |

**Returns**: `void`



### toBundle(dashboard: Dashboard) → DashboardBundleContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | Dashboard | - | - |

**Returns**: `DashboardBundleContract`



### DashboardBundleContract() → new

**Returns**: `new`


