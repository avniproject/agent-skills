# API Reference: ExportFilters.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/external/request/export/ExportFilters.java`

---

## Classes

### ExportFilters

**Inherits from**: (none)

#### Methods

##### getAddressLevelIds() → List<Long>

**Returns**: `List<Long>`


##### setAddressLevelIds(addressLevelIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelIds | List<Long> | - | - |

**Returns**: `void`


##### getDate() → DateFilter

**Returns**: `DateFilter`


##### DateFilter() → new

**Returns**: `new`


##### setDate(date: DateFilter) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| date | DateFilter | - | - |

**Returns**: `void`


##### includeVoided() → boolean

**Returns**: `boolean`


##### setIncludeVoided(includeVoided: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| includeVoided | boolean | - | - |

**Returns**: `void`


##### DateFilter(to: DateTime, from: DateTime) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | DateTime | - | - |
| from | DateTime | - | - |

**Returns**: `public`


##### DateFilter() → public

**Returns**: `public`


##### getTo() → DateTime

**Returns**: `DateTime`


##### setTo(to: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | DateTime | - | - |

**Returns**: `void`


##### getFrom() → DateTime

**Returns**: `DateTime`


##### setFrom(from: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| from | DateTime | - | - |

**Returns**: `void`


##### apply(inputDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputDateTime | DateTime | - | - |

**Returns**: `boolean`




### DateFilter

**Inherits from**: (none)

#### Methods

##### DateFilter(to: DateTime, from: DateTime) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | DateTime | - | - |
| from | DateTime | - | - |

**Returns**: `public`


##### DateFilter() → public

**Returns**: `public`


##### getTo() → DateTime

**Returns**: `DateTime`


##### setTo(to: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | DateTime | - | - |

**Returns**: `void`


##### getFrom() → DateTime

**Returns**: `DateTime`


##### setFrom(from: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| from | DateTime | - | - |

**Returns**: `void`


##### apply(inputDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputDateTime | DateTime | - | - |

**Returns**: `boolean`




## Functions

### getAddressLevelIds() → List<Long>

**Returns**: `List<Long>`



### setAddressLevelIds(addressLevelIds: List<Long>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevelIds | List<Long> | - | - |

**Returns**: `void`



### getDate() → DateFilter

**Returns**: `DateFilter`



### DateFilter() → new

**Returns**: `new`



### setDate(date: DateFilter) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| date | DateFilter | - | - |

**Returns**: `void`



### includeVoided() → boolean

**Returns**: `boolean`



### setIncludeVoided(includeVoided: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| includeVoided | boolean | - | - |

**Returns**: `void`



### DateFilter(to: DateTime, from: DateTime) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | DateTime | - | - |
| from | DateTime | - | - |

**Returns**: `public`



### DateFilter() → public

**Returns**: `public`



### getTo() → DateTime

**Returns**: `DateTime`



### setTo(to: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | DateTime | - | - |

**Returns**: `void`



### getFrom() → DateTime

**Returns**: `DateTime`



### setFrom(from: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| from | DateTime | - | - |

**Returns**: `void`



### apply(inputDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inputDateTime | DateTime | - | - |

**Returns**: `boolean`


