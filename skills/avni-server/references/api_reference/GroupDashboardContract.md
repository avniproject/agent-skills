# API Reference: GroupDashboardContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/GroupDashboardContract.java`

---

## Classes

### GroupDashboardContract

**Inherits from**: CHSRequest

#### Methods

##### isPrimaryDashboard() → boolean

**Returns**: `boolean`


##### isSecondaryDashboard() → boolean

**Returns**: `boolean`


##### setPrimaryDashboard(primaryDashboard: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| primaryDashboard | boolean | - | - |

**Returns**: `void`


##### setSecondaryDashboard(secondaryDashboard: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| secondaryDashboard | boolean | - | - |

**Returns**: `void`


##### setDashboardId(dashboardId: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardId | long | - | - |

**Returns**: `void`


##### setGroupId(groupId: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | long | - | - |

**Returns**: `void`


##### setDashboardName(dashboardName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardName | String | - | - |

**Returns**: `void`


##### setDashboardDescription(dashboardDescription: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardDescription | String | - | - |

**Returns**: `void`


##### getDashboardId() → long

**Returns**: `long`


##### getGroupId() → long

**Returns**: `long`


##### getDashboardName() → String

**Returns**: `String`


##### getDashboardDescription() → String

**Returns**: `String`


##### fromEntity(groupDashboard: GroupDashboard) → GroupDashboardContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboard | GroupDashboard | - | - |

**Returns**: `GroupDashboardContract`


##### GroupDashboardContract() → new

**Returns**: `new`


##### populateCommonFields(groupDashboard: GroupDashboard, groupDashboardContract: GroupDashboardContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboard | GroupDashboard | - | - |
| groupDashboardContract | GroupDashboardContract | - | - |

**Returns**: `void`


##### fromEntityForExternal(groupDashboard: GroupDashboard) → GroupDashboardContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboard | GroupDashboard | - | - |

**Returns**: `GroupDashboardContract`


##### GroupDashboardContract() → new

**Returns**: `new`




## Functions

### isPrimaryDashboard() → boolean

**Returns**: `boolean`



### isSecondaryDashboard() → boolean

**Returns**: `boolean`



### setPrimaryDashboard(primaryDashboard: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| primaryDashboard | boolean | - | - |

**Returns**: `void`



### setSecondaryDashboard(secondaryDashboard: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| secondaryDashboard | boolean | - | - |

**Returns**: `void`



### setDashboardId(dashboardId: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardId | long | - | - |

**Returns**: `void`



### setGroupId(groupId: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | long | - | - |

**Returns**: `void`



### setDashboardName(dashboardName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardName | String | - | - |

**Returns**: `void`



### setDashboardDescription(dashboardDescription: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardDescription | String | - | - |

**Returns**: `void`



### getDashboardId() → long

**Returns**: `long`



### getGroupId() → long

**Returns**: `long`



### getDashboardName() → String

**Returns**: `String`



### getDashboardDescription() → String

**Returns**: `String`



### fromEntity(groupDashboard: GroupDashboard) → GroupDashboardContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboard | GroupDashboard | - | - |

**Returns**: `GroupDashboardContract`



### GroupDashboardContract() → new

**Returns**: `new`



### populateCommonFields(groupDashboard: GroupDashboard, groupDashboardContract: GroupDashboardContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboard | GroupDashboard | - | - |
| groupDashboardContract | GroupDashboardContract | - | - |

**Returns**: `void`



### fromEntityForExternal(groupDashboard: GroupDashboard) → GroupDashboardContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboard | GroupDashboard | - | - |

**Returns**: `GroupDashboardContract`



### GroupDashboardContract() → new

**Returns**: `new`


