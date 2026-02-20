# API Reference: ObjectChangeReport.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/metadata/ObjectChangeReport.java`

---

## Classes

### ObjectChangeReport

**Inherits from**: (none)

#### Methods

##### noChange(uuid: String) → ObjectChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `ObjectChangeReport`


##### ObjectChangeReport() → new

**Returns**: `new`


##### added(uuid: String, newValue: Object) → ObjectChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| newValue | Object | - | - |

**Returns**: `ObjectChangeReport`


##### ObjectChangeReport() → new

**Returns**: `new`


##### missing(uuid: String, oldValue: Object) → ObjectChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| oldValue | Object | - | - |

**Returns**: `ObjectChangeReport`


##### ObjectChangeReport() → new

**Returns**: `new`


##### addFieldReport(fieldChangeReport: FieldChangeReport) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldChangeReport | FieldChangeReport | - | - |

**Returns**: `void`


##### addFieldReport(fieldChangeReport: FieldChangeReport, oldValue: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldChangeReport | FieldChangeReport | - | - |
| oldValue | Object | - | - |

**Returns**: `void`


##### getChangeType() → ChangeType

**Returns**: `ChangeType`


##### getUuid() → String

**Returns**: `String`


##### getNewValue() → Object

**Returns**: `Object`


##### getOldValue() → Object

**Returns**: `Object`




## Functions

### noChange(uuid: String) → ObjectChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `ObjectChangeReport`



### ObjectChangeReport() → new

**Returns**: `new`



### added(uuid: String, newValue: Object) → ObjectChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| newValue | Object | - | - |

**Returns**: `ObjectChangeReport`



### ObjectChangeReport() → new

**Returns**: `new`



### missing(uuid: String, oldValue: Object) → ObjectChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| oldValue | Object | - | - |

**Returns**: `ObjectChangeReport`



### ObjectChangeReport() → new

**Returns**: `new`



### addFieldReport(fieldChangeReport: FieldChangeReport) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldChangeReport | FieldChangeReport | - | - |

**Returns**: `void`



### addFieldReport(fieldChangeReport: FieldChangeReport, oldValue: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldChangeReport | FieldChangeReport | - | - |
| oldValue | Object | - | - |

**Returns**: `void`



### getChangeType() → ChangeType

**Returns**: `ChangeType`



### getUuid() → String

**Returns**: `String`



### getNewValue() → Object

**Returns**: `Object`



### getOldValue() → Object

**Returns**: `Object`


