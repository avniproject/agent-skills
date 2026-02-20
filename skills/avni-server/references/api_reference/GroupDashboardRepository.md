# API Reference: GroupDashboardRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/GroupDashboardRepository.java`

---

## Functions

### findByName(name: String) → GroupDashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `GroupDashboard`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByNameIgnoreCase(name: String) → GroupDashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `GroupDashboard`



### UnsupportedOperationException(field: "No) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field | "No | - | - |

**Returns**: `new`



### findByGroup_IdAndIsVoidedFalseOrderByDashboardName(groupId: Long) → List<GroupDashboard>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | Long | - | - |

**Returns**: `List<GroupDashboard>`



### findByGroup_IdAndIdNotAndIsVoidedFalse(groupId: Long, Id: Long) → List<GroupDashboard>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupId | Long | - | - |
| Id | Long | - | - |

**Returns**: `List<GroupDashboard>`


