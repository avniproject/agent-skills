# API Reference: GroupDashboardController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/GroupDashboardController.java`

---

## Functions

### GroupDashboardController(groupDashboardRepository: GroupDashboardRepository, groupDashboardService: GroupDashboardService, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupDashboardRepository | GroupDashboardRepository | - | - |
| groupDashboardService | GroupDashboardService | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### getAll() → List<GroupDashboardContract>

**Returns**: `List<GroupDashboardContract>`



### getById(Long: @PathVariable) → ResponseEntity<GroupDashboardContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `ResponseEntity<GroupDashboardContract>`



### saveGroupDashboards(List<GroupDashboardContract>: @RequestBody) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| List<GroupDashboardContract> | @RequestBody | - | - |

**Returns**: `ResponseEntity`



### editGroupDashboard(Long: @PathVariable, GroupDashboardContract: @RequestBody) → ResponseEntity<GroupDashboardContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |
| GroupDashboardContract | @RequestBody | - | - |

**Returns**: `ResponseEntity<GroupDashboardContract>`



### deleteGroupDashboard(Long: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `void`



### getDashboardsByGroupId(unknown: @PathVariable("id") → List<GroupDashboardContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @PathVariable("id" | - | - |

**Returns**: `List<GroupDashboardContract>`



### wrap(unknown: groupDashboardRepository.findByLastModifiedDateTimeIsGreaterThanEqualAndLastModifiedDateTimeLessThanEqualOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime.toDate() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | groupDashboardRepository.findByLastModifiedDateTimeIsGreaterThanEqualAndLastModifiedDateTimeLessThanEqualOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime.toDate( | - | - |

**Returns**: `return`



### process(resource: EntityModel<GroupDashboard>) → EntityModel<GroupDashboard>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | EntityModel<GroupDashboard> | - | - |

**Returns**: `EntityModel<GroupDashboard>`


