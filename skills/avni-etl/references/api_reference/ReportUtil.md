# API Reference: ReportUtil.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/util/ReportUtil.java`

---

## Classes

### ReportUtil

**Inherits from**: (none)

#### Methods

##### getDateDynamicWhere(startDate: String, endDate: String, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| columnName | String | - | - |

**Returns**: `String`


##### format(%s::date: "and, unknown: columnName, unknown: startDate, unknown: endDate) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s::date | "and | - | - |
| unknown | columnName | - | - |
| unknown | startDate | - | - |
| unknown | endDate | - | - |

**Returns**: `return`


##### getDateSeries(startDate: String, endDate: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |

**Returns**: `String`


##### format(generate_series('%s'::date: "from, unknown: '%s'::date, unknown: '7d'::interval) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| generate_series('%s'::date | "from | - | - |
| unknown | '%s'::date | - | - |
| unknown | '7d'::interval | - | - |

**Returns**: `return`


##### generate_series(at: current_date, at: current_date, unknown: '7d'::interval) → from

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| at | current_date | - | - |
| at | current_date | - | - |
| unknown | '7d'::interval | - | - |

**Returns**: `from`


##### getDynamicUserWhere(userIds: List<Long>, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userIds | List<Long> | - | - |
| columnName | String | - | - |

**Returns**: `String`


##### format(%s: "and) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | "and | - | - |

**Returns**: `return`




## Functions

### getDateDynamicWhere(startDate: String, endDate: String, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |
| columnName | String | - | - |

**Returns**: `String`



### format(%s::date: "and, unknown: columnName, unknown: startDate, unknown: endDate) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s::date | "and | - | - |
| unknown | columnName | - | - |
| unknown | startDate | - | - |
| unknown | endDate | - | - |

**Returns**: `return`



### getDateSeries(startDate: String, endDate: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startDate | String | - | - |
| endDate | String | - | - |

**Returns**: `String`



### format(generate_series('%s'::date: "from, unknown: '%s'::date, unknown: '7d'::interval) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| generate_series('%s'::date | "from | - | - |
| unknown | '%s'::date | - | - |
| unknown | '7d'::interval | - | - |

**Returns**: `return`



### generate_series(at: current_date, at: current_date, unknown: '7d'::interval) → from

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| at | current_date | - | - |
| at | current_date | - | - |
| unknown | '7d'::interval | - | - |

**Returns**: `from`



### getDynamicUserWhere(userIds: List<Long>, columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userIds | List<Long> | - | - |
| columnName | String | - | - |

**Returns**: `String`



### format(%s: "and) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| %s | "and | - | - |

**Returns**: `return`


