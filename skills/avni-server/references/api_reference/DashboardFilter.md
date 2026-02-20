# API Reference: DashboardFilter.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/app/dashboard/DashboardFilter.java`

---

## Classes

### DashboardFilter

**Inherits from**: OrganisationAwareEntity

#### Methods

##### getDashboard() → Dashboard

**Returns**: `Dashboard`


##### setDashboard(dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | Dashboard | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getFilterConfig() → DashboardFilterConfig

**Returns**: `DashboardFilterConfig`


##### DashboardFilterConfig(unknown: filterConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | filterConfig | - | - |

**Returns**: `new`


##### getFilterConfigJsonString() → JsonObject

**Returns**: `JsonObject`


##### setFilterConfig(filterConfig: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filterConfig | JsonObject | - | - |

**Returns**: `void`


##### DashboardFilterConfig(jsonObject: JsonObject) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | JsonObject | - | - |

**Returns**: `public`


##### getSubjectTypeUuid() → String

**Returns**: `String`


##### getWidget() → String

**Returns**: `String`


##### getType() → FilterType

**Returns**: `FilterType`


##### getGroupSubjectTypeFilter() → GroupSubjectTypeFilter

**Returns**: `GroupSubjectTypeFilter`


##### JsonObject(unknown: (Map<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Map<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`


##### getObservationBasedFilter() → ObservationBasedFilter

**Returns**: `ObservationBasedFilter`


##### JsonObject(unknown: (Map<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Map<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`


##### fromDatabase(jsonObject: JsonObject) → GroupSubjectTypeFilter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | JsonObject | - | - |

**Returns**: `GroupSubjectTypeFilter`


##### GroupSubjectTypeFilter() → new

**Returns**: `new`


##### setSubjectTypeUUID(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`


##### getSubjectTypeUUID() → String

**Returns**: `String`


##### fromDatabase(jsonObject: JsonObject) → ObservationBasedFilter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | JsonObject | - | - |

**Returns**: `ObservationBasedFilter`


##### ObservationBasedFilter() → new

**Returns**: `new`


##### getScope() → String

**Returns**: `String`


##### getConcept() → String

**Returns**: `String`


##### getPrograms() → List<String>

**Returns**: `List<String>`


##### getEncounterTypes() → List<String>

**Returns**: `List<String>`




### DashboardFilterConfig

**Inherits from**: (none)

#### Methods

##### DashboardFilterConfig(jsonObject: JsonObject) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | JsonObject | - | - |

**Returns**: `public`


##### getSubjectTypeUuid() → String

**Returns**: `String`


##### getWidget() → String

**Returns**: `String`


##### getType() → FilterType

**Returns**: `FilterType`


##### getGroupSubjectTypeFilter() → GroupSubjectTypeFilter

**Returns**: `GroupSubjectTypeFilter`


##### JsonObject(unknown: (Map<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Map<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`


##### getObservationBasedFilter() → ObservationBasedFilter

**Returns**: `ObservationBasedFilter`


##### JsonObject(unknown: (Map<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Map<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`




### GroupSubjectTypeFilter

**Inherits from**: (none)

#### Methods

##### fromDatabase(jsonObject: JsonObject) → GroupSubjectTypeFilter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | JsonObject | - | - |

**Returns**: `GroupSubjectTypeFilter`


##### GroupSubjectTypeFilter() → new

**Returns**: `new`


##### setSubjectTypeUUID(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`


##### getSubjectTypeUUID() → String

**Returns**: `String`




### ObservationBasedFilter

**Inherits from**: (none)

#### Methods

##### fromDatabase(jsonObject: JsonObject) → ObservationBasedFilter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | JsonObject | - | - |

**Returns**: `ObservationBasedFilter`


##### ObservationBasedFilter() → new

**Returns**: `new`


##### getScope() → String

**Returns**: `String`


##### getConcept() → String

**Returns**: `String`


##### getPrograms() → List<String>

**Returns**: `List<String>`


##### getEncounterTypes() → List<String>

**Returns**: `List<String>`




## Functions

### getDashboard() → Dashboard

**Returns**: `Dashboard`



### setDashboard(dashboard: Dashboard) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dashboard | Dashboard | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getFilterConfig() → DashboardFilterConfig

**Returns**: `DashboardFilterConfig`



### DashboardFilterConfig(unknown: filterConfig) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | filterConfig | - | - |

**Returns**: `new`



### getFilterConfigJsonString() → JsonObject

**Returns**: `JsonObject`



### setFilterConfig(filterConfig: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filterConfig | JsonObject | - | - |

**Returns**: `void`



### DashboardFilterConfig(jsonObject: JsonObject) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | JsonObject | - | - |

**Returns**: `public`



### getSubjectTypeUuid() → String

**Returns**: `String`



### getWidget() → String

**Returns**: `String`



### getType() → FilterType

**Returns**: `FilterType`



### getGroupSubjectTypeFilter() → GroupSubjectTypeFilter

**Returns**: `GroupSubjectTypeFilter`



### JsonObject(unknown: (Map<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Map<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`



### getObservationBasedFilter() → ObservationBasedFilter

**Returns**: `ObservationBasedFilter`



### JsonObject(unknown: (Map<String, unknown: Object>) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | (Map<String | - | - |
| unknown | Object> | - | - |

**Returns**: `new`



### fromDatabase(jsonObject: JsonObject) → GroupSubjectTypeFilter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | JsonObject | - | - |

**Returns**: `GroupSubjectTypeFilter`



### GroupSubjectTypeFilter() → new

**Returns**: `new`



### setSubjectTypeUUID(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`



### getSubjectTypeUUID() → String

**Returns**: `String`



### fromDatabase(jsonObject: JsonObject) → ObservationBasedFilter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jsonObject | JsonObject | - | - |

**Returns**: `ObservationBasedFilter`



### ObservationBasedFilter() → new

**Returns**: `new`



### getScope() → String

**Returns**: `String`



### getConcept() → String

**Returns**: `String`



### getPrograms() → List<String>

**Returns**: `List<String>`



### getEncounterTypes() → List<String>

**Returns**: `List<String>`


