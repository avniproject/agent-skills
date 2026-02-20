# API Reference: DashboardService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/DashboardService.java`

---

## Classes

### DashboardService

**Inherits from**: NonScopeAwareService

#### Methods

##### DashboardService(dashboardRepository: DashboardRepository, cardRepository: CardRepository, dashboardSectionRepository: DashboardSectionRepository, dashboardSectionCardMappingRepository: DashboardSectionCardMappingRepository, dashboardFilterRepository: DashboardFilterRepository, cardService: CardService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRepository | DashboardRepository | - | - |
| cardRepository | CardRepository | - | - |
| dashboardSectionRepository | DashboardSectionRepository | - | - |
| dashboardSectionCardMappingRepository | DashboardSectionCardMappingRepository | - | - |
| dashboardFilterRepository | DashboardFilterRepository | - | - |
| cardService | CardService | - | - |

**Returns**: `public`


##### saveDashboard(dashboardRequest: DashboardWebRequest) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |

**Returns**: `Dashboard`


##### Dashboard() → new

**Returns**: `new`


##### buildDashboard(unknown: dashboardRequest, unknown: dashboard) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dashboardRequest | - | - |
| unknown | dashboard | - | - |

**Returns**: `return`


##### uploadDashboard(dashboardContract: DashboardBundleContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardBundleContract | - | - |

**Returns**: `void`


##### Dashboard() → new

**Returns**: `new`


##### uploadDashboardFilters(bundleContract: DashboardBundleContract, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleContract | DashboardBundleContract | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### DashboardFilter() → new

**Returns**: `new`


##### uploadDashboardSections(dashboardContract: DashboardBundleContract, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardBundleContract | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### DashboardSection() → new

**Returns**: `new`


##### DashboardSectionCardMapping() → new

**Returns**: `new`


##### editDashboard(dashboardRequest: DashboardWebRequest, dashboardId: Long) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |
| dashboardId | Long | - | - |

**Returns**: `Dashboard`


##### buildDashboard(unknown: dashboardRequest, unknown: existingDashboard) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dashboardRequest | - | - |
| unknown | existingDashboard | - | - |

**Returns**: `return`


##### deleteDashboard(dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### buildDashboard(dashboardRequest: DashboardWebRequest, dashboard: Dashboard) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `Dashboard`


##### setDashboardSections(dashboardRequest: DashboardWebRequest, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### DashboardSection() → new

**Returns**: `new`


##### DashboardSectionCardMapping() → new

**Returns**: `new`


##### setDashboardFilters(dashboardRequest: DashboardWebRequest, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### DashboardFilter() → new

**Returns**: `new`


##### assertNewNameIsUnique(newName: String, oldName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newName | String | - | - |
| oldName | String | - | - |

**Returns**: `void`


##### assertNoExistingDashboardWithName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### BadRequestError(%s: String.format("Dashboard, unknown: name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Dashboard | - | - |
| unknown | name | - | - |

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### saveDashboards(dashboardContracts: DashboardBundleContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContracts | DashboardBundleContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: dashboardContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dashboardContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### createDefaultDashboard(organisation: Organisation) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Dashboard`


##### JsonObject() → new

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### setDefaults(entity: OrganisationAwareEntity, organisation: Organisation, uuid: String) → OrganisationAwareEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | OrganisationAwareEntity | - | - |
| organisation | Organisation | - | - |
| uuid | String | - | - |

**Returns**: `OrganisationAwareEntity`


##### createDashboard(organisation: Organisation, name: String) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| name | String | - | - |

**Returns**: `Dashboard`


##### Dashboard() → new

**Returns**: `new`


##### createDashboardSection(organisation: Organisation, name: String, displayOrder: Double) → DashboardSection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| name | String | - | - |
| displayOrder | Double | - | - |

**Returns**: `DashboardSection`


##### DashboardSection() → new

**Returns**: `new`


##### createDashboardSectionCardMapping(organisation: Organisation, reportCard: ReportCard, dashboardSection: DashboardSection, displayOrder: Double) → DashboardSectionCardMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| reportCard | ReportCard | - | - |
| dashboardSection | DashboardSection | - | - |
| displayOrder | Double | - | - |

**Returns**: `DashboardSectionCardMapping`


##### DashboardSectionCardMapping() → new

**Returns**: `new`


##### createDashboardFilter(organisation: Organisation, name: String, filterConfig: JsonObject) → DashboardFilter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| name | String | - | - |
| filterConfig | JsonObject | - | - |

**Returns**: `DashboardFilter`


##### DashboardFilter() → new

**Returns**: `new`




## Functions

### DashboardService(dashboardRepository: DashboardRepository, cardRepository: CardRepository, dashboardSectionRepository: DashboardSectionRepository, dashboardSectionCardMappingRepository: DashboardSectionCardMappingRepository, dashboardFilterRepository: DashboardFilterRepository, cardService: CardService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRepository | DashboardRepository | - | - |
| cardRepository | CardRepository | - | - |
| dashboardSectionRepository | DashboardSectionRepository | - | - |
| dashboardSectionCardMappingRepository | DashboardSectionCardMappingRepository | - | - |
| dashboardFilterRepository | DashboardFilterRepository | - | - |
| cardService | CardService | - | - |

**Returns**: `public`



### saveDashboard(dashboardRequest: DashboardWebRequest) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |

**Returns**: `Dashboard`



### Dashboard() → new

**Returns**: `new`



### buildDashboard(unknown: dashboardRequest, unknown: dashboard) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dashboardRequest | - | - |
| unknown | dashboard | - | - |

**Returns**: `return`



### uploadDashboard(dashboardContract: DashboardBundleContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardBundleContract | - | - |

**Returns**: `void`



### Dashboard() → new

**Returns**: `new`



### uploadDashboardFilters(bundleContract: DashboardBundleContract, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| bundleContract | DashboardBundleContract | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`



### DashboardFilter() → new

**Returns**: `new`



### uploadDashboardSections(dashboardContract: DashboardBundleContract, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContract | DashboardBundleContract | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`



### DashboardSection() → new

**Returns**: `new`



### DashboardSectionCardMapping() → new

**Returns**: `new`



### editDashboard(dashboardRequest: DashboardWebRequest, dashboardId: Long) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |
| dashboardId | Long | - | - |

**Returns**: `Dashboard`



### buildDashboard(unknown: dashboardRequest, unknown: existingDashboard) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dashboardRequest | - | - |
| unknown | existingDashboard | - | - |

**Returns**: `return`



### deleteDashboard(dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | Dashboard | - | - |

**Returns**: `void`



### buildDashboard(dashboardRequest: DashboardWebRequest, dashboard: Dashboard) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `Dashboard`



### setDashboardSections(dashboardRequest: DashboardWebRequest, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`



### DashboardSection() → new

**Returns**: `new`



### DashboardSectionCardMapping() → new

**Returns**: `new`



### setDashboardFilters(dashboardRequest: DashboardWebRequest, dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardRequest | DashboardWebRequest | - | - |
| dashboard | Dashboard | - | - |

**Returns**: `void`



### DashboardFilter() → new

**Returns**: `new`



### assertNewNameIsUnique(newName: String, oldName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newName | String | - | - |
| oldName | String | - | - |

**Returns**: `void`



### assertNoExistingDashboardWithName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### BadRequestError(%s: String.format("Dashboard, unknown: name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | String.format("Dashboard | - | - |
| unknown | name | - | - |

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### saveDashboards(dashboardContracts: DashboardBundleContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboardContracts | DashboardBundleContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: dashboardContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | dashboardContract | - | - |
| unknown | e | - | - |

**Returns**: `new`



### createDefaultDashboard(organisation: Organisation) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `Dashboard`



### JsonObject() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### setDefaults(entity: OrganisationAwareEntity, organisation: Organisation, uuid: String) → OrganisationAwareEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | OrganisationAwareEntity | - | - |
| organisation | Organisation | - | - |
| uuid | String | - | - |

**Returns**: `OrganisationAwareEntity`



### createDashboard(organisation: Organisation, name: String) → Dashboard

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| name | String | - | - |

**Returns**: `Dashboard`



### Dashboard() → new

**Returns**: `new`



### createDashboardSection(organisation: Organisation, name: String, displayOrder: Double) → DashboardSection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| name | String | - | - |
| displayOrder | Double | - | - |

**Returns**: `DashboardSection`



### DashboardSection() → new

**Returns**: `new`



### createDashboardSectionCardMapping(organisation: Organisation, reportCard: ReportCard, dashboardSection: DashboardSection, displayOrder: Double) → DashboardSectionCardMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| reportCard | ReportCard | - | - |
| dashboardSection | DashboardSection | - | - |
| displayOrder | Double | - | - |

**Returns**: `DashboardSectionCardMapping`



### DashboardSectionCardMapping() → new

**Returns**: `new`



### createDashboardFilter(organisation: Organisation, name: String, filterConfig: JsonObject) → DashboardFilter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| name | String | - | - |
| filterConfig | JsonObject | - | - |

**Returns**: `DashboardFilter`



### DashboardFilter() → new

**Returns**: `new`


