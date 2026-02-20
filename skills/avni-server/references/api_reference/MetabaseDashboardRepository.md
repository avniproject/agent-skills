# API Reference: MetabaseDashboardRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/metabase/MetabaseDashboardRepository.java`

---

## Classes

### MetabaseDashboardRepository

**Inherits from**: MetabaseConnector

#### Methods

##### MetabaseDashboardRepository(restTemplateBuilder: RestTemplateBuilder, collectionRepository: CollectionRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |
| collectionRepository | CollectionRepository | - | - |

**Returns**: `public`


##### save(createDashboardRequest: CreateDashboardRequest) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createDashboardRequest | CreateDashboardRequest | - | - |

**Returns**: `Dashboard`


##### postForObject(unknown: url, unknown: createDashboardRequest, unknown: Dashboard.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | createDashboardRequest | - | - |
| unknown | Dashboard.class | - | - |

**Returns**: `return`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### getDashboard(collection: CollectionInfoResponse) → CollectionItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| collection | CollectionInfoResponse | - | - |

**Returns**: `CollectionItem`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


##### updateDashboard(dashboardId: int, request: DashboardUpdateRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardId | int | - | - |
| request | DashboardUpdateRequest | - | - |

**Returns**: `void`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`




## Functions

### MetabaseDashboardRepository(restTemplateBuilder: RestTemplateBuilder, collectionRepository: CollectionRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restTemplateBuilder | RestTemplateBuilder | - | - |
| collectionRepository | CollectionRepository | - | - |

**Returns**: `public`



### save(createDashboardRequest: CreateDashboardRequest) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| createDashboardRequest | CreateDashboardRequest | - | - |

**Returns**: `Dashboard`



### postForObject(unknown: url, unknown: createDashboardRequest, unknown: Dashboard.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | url | - | - |
| unknown | createDashboardRequest | - | - |
| unknown | Dashboard.class | - | - |

**Returns**: `return`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### getDashboard(collection: CollectionInfoResponse) → CollectionItem

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| collection | CollectionInfoResponse | - | - |

**Returns**: `CollectionItem`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`



### updateDashboard(dashboardId: int, request: DashboardUpdateRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardId | int | - | - |
| request | DashboardUpdateRequest | - | - |

**Returns**: `void`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


