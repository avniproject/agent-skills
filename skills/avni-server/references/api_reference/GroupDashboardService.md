# API Reference: GroupDashboardService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/GroupDashboardService.java`

---

## Classes

### GroupDashboardService

**Inherits from**: NonScopeAwareService

#### Methods

##### GroupDashboardService(groupDashboardRepository: GroupDashboardRepository, dashboardRepository: DashboardRepository, groupRepository: GroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboardRepository | GroupDashboardRepository | - | - |
| dashboardRepository | DashboardRepository | - | - |
| groupRepository | GroupRepository | - | - |

**Returns**: `public`


##### save(request: List<GroupDashboardContract>) → List<GroupDashboard>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | List<GroupDashboardContract> | - | - |

**Returns**: `List<GroupDashboard>`


##### GroupDashboard() → new

**Returns**: `new`


##### ValidationException(dashboard: String.format("Invalid, unknown: contract.getDashboardId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | String.format("Invalid | - | - |
| unknown | contract.getDashboardId( | - | - |

**Returns**: `new`


##### saveFromBundle(request: List<GroupDashboardBundleContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | List<GroupDashboardBundleContract> | - | - |

**Returns**: `void`


##### GroupDashboard() → new

**Returns**: `new`


##### RuntimeException(to: "Unable, to: due) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Unable | - | - |
| to | due | - | - |

**Returns**: `new`


##### buildAndSave(contract: GroupDashboardContract, groupDashboard: GroupDashboard) → GroupDashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contract | GroupDashboardContract | - | - |
| groupDashboard | GroupDashboard | - | - |

**Returns**: `GroupDashboard`


##### edit(updates: GroupDashboardContract, id: Long) → GroupDashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| updates | GroupDashboardContract | - | - |
| id | Long | - | - |

**Returns**: `GroupDashboard`


##### buildAndSave(unknown: updates, unknown: groupDashboardRepository.findOne(id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | updates | - | - |
| unknown | groupDashboardRepository.findOne(id | - | - |

**Returns**: `return`


##### delete(groupDashboard: GroupDashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboard | GroupDashboard | - | - |

**Returns**: `void`


##### createDefaultGroupDashboardForOrg(organisation: Organisation, group: Group, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| group | Group | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### GroupDashboard() → new

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`




## Functions

### GroupDashboardService(groupDashboardRepository: GroupDashboardRepository, dashboardRepository: DashboardRepository, groupRepository: GroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboardRepository | GroupDashboardRepository | - | - |
| dashboardRepository | DashboardRepository | - | - |
| groupRepository | GroupRepository | - | - |

**Returns**: `public`



### save(request: List<GroupDashboardContract>) → List<GroupDashboard>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | List<GroupDashboardContract> | - | - |

**Returns**: `List<GroupDashboard>`



### GroupDashboard() → new

**Returns**: `new`



### ValidationException(dashboard: String.format("Invalid, unknown: contract.getDashboardId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | String.format("Invalid | - | - |
| unknown | contract.getDashboardId( | - | - |

**Returns**: `new`



### saveFromBundle(request: List<GroupDashboardBundleContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | List<GroupDashboardBundleContract> | - | - |

**Returns**: `void`



### GroupDashboard() → new

**Returns**: `new`



### RuntimeException(to: "Unable, to: due) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | "Unable | - | - |
| to | due | - | - |

**Returns**: `new`



### buildAndSave(contract: GroupDashboardContract, groupDashboard: GroupDashboard) → GroupDashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contract | GroupDashboardContract | - | - |
| groupDashboard | GroupDashboard | - | - |

**Returns**: `GroupDashboard`



### edit(updates: GroupDashboardContract, id: Long) → GroupDashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| updates | GroupDashboardContract | - | - |
| id | Long | - | - |

**Returns**: `GroupDashboard`



### buildAndSave(unknown: updates, unknown: groupDashboardRepository.findOne(id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | updates | - | - |
| unknown | groupDashboardRepository.findOne(id | - | - |

**Returns**: `return`



### delete(groupDashboard: GroupDashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboard | GroupDashboard | - | - |

**Returns**: `void`



### createDefaultGroupDashboardForOrg(organisation: Organisation, group: Group, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| group | Group | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`



### GroupDashboard() → new

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


