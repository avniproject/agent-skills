# API Reference: DashboardController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/DashboardController.java`

---

## Functions

### DashboardController(dashboardRepository: DashboardRepository, dashboardService: DashboardService, dashboardMapper: DashboardMapper, accessControlService: AccessControlService, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRepository | DashboardRepository | - | - |
| dashboardService | DashboardService | - | - |
| dashboardMapper | DashboardMapper | - | - |
| accessControlService | AccessControlService | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`



### getAll() → List<DashboardWebResponse>

**Returns**: `List<DashboardWebResponse>`



### getById(Long: @PathVariable) → DashboardWebResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `DashboardWebResponse`



### newDashboard(DashboardWebRequest: @RequestBody) → ResponseEntity<DashboardWebResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| DashboardWebRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<DashboardWebResponse>`



### editDashboard(Long: @PathVariable, DashboardWebRequest: @RequestBody) → ResponseEntity<DashboardWebResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |
| DashboardWebRequest | @RequestBody | - | - |

**Returns**: `ResponseEntity<DashboardWebResponse>`



### deleteDashboard(Long: @PathVariable) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Long | @PathVariable | - | - |

**Returns**: `void`



### createDefaultDashboard(=: @RequestParam(value) → ResponseEntity<DashboardWebResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| = | @RequestParam(value | - | - |

**Returns**: `ResponseEntity<DashboardWebResponse>`



### ValidationException(with: String.format("Organisation, unknown: orgId) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("Organisation | - | - |
| unknown | orgId | - | - |

**Returns**: `new`



### ValidationException(create: "Cannot, and: test) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| create | "Cannot | - | - |
| and | test | - | - |

**Returns**: `new`



### ValidationException(dashboard: "Default) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | "Default | - | - |

**Returns**: `new`



### wrap(PageImpl<>(Collections.emptyList(: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| PageImpl<>(Collections.emptyList( | new | - | - |

**Returns**: `return`



### wrap(unknown: dashboardRepository.findByLastModifiedDateTimeIsGreaterThanEqualAndLastModifiedDateTimeLessThanEqualOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime.toDate() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dashboardRepository.findByLastModifiedDateTimeIsGreaterThanEqualAndLastModifiedDateTimeLessThanEqualOrderByLastModifiedDateTimeAscIdAsc(lastModifiedDateTime.toDate( | - | - |

**Returns**: `return`


