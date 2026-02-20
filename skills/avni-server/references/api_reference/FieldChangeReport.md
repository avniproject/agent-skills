# API Reference: FieldChangeReport.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/metadata/FieldChangeReport.java`

---

## Classes

### FieldChangeReport

**Inherits from**: (none)

#### Methods

##### added(fieldName: String) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |

**Returns**: `FieldChangeReport`


##### FieldChangeReport() → new

**Returns**: `new`


##### missing(fieldName: String) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |

**Returns**: `FieldChangeReport`


##### FieldChangeReport() → new

**Returns**: `new`


##### modified(fieldName: String, oldValue: Object, newValue: Object) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| oldValue | Object | - | - |
| newValue | Object | - | - |

**Returns**: `FieldChangeReport`


##### FieldChangeReport() → new

**Returns**: `new`


##### PrimitiveValueChange(unknown: oldValue, unknown: newValue) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | oldValue | - | - |
| unknown | newValue | - | - |

**Returns**: `new`


##### getModificationType(fieldName: String, oldValue: Object, newValue: Object) → ChangeType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| oldValue | Object | - | - |
| newValue | Object | - | - |

**Returns**: `ChangeType`


##### objectModified(fieldName: String, objectChangeReport: ObjectChangeReport) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| objectChangeReport | ObjectChangeReport | - | - |

**Returns**: `FieldChangeReport`


##### FieldChangeReport() → new

**Returns**: `new`


##### collectionModified(fieldName: String, collectionChangeReport: ObjectCollectionChangeReport) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| collectionChangeReport | ObjectCollectionChangeReport | - | - |

**Returns**: `FieldChangeReport`


##### FieldChangeReport() → new

**Returns**: `new`


##### getFieldName() → String

**Returns**: `String`


##### getChangeType() → ChangeType

**Returns**: `ChangeType`


##### getPrimitiveValueChange() → PrimitiveValueChange

**Returns**: `PrimitiveValueChange`


##### getObjectChangeReport() → ObjectChangeReport

**Returns**: `ObjectChangeReport`


##### getCollectionChangeReport() → ObjectCollectionChangeReport

**Returns**: `ObjectCollectionChangeReport`




## Functions

### added(fieldName: String) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |

**Returns**: `FieldChangeReport`



### FieldChangeReport() → new

**Returns**: `new`



### missing(fieldName: String) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |

**Returns**: `FieldChangeReport`



### FieldChangeReport() → new

**Returns**: `new`



### modified(fieldName: String, oldValue: Object, newValue: Object) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| oldValue | Object | - | - |
| newValue | Object | - | - |

**Returns**: `FieldChangeReport`



### FieldChangeReport() → new

**Returns**: `new`



### PrimitiveValueChange(unknown: oldValue, unknown: newValue) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | oldValue | - | - |
| unknown | newValue | - | - |

**Returns**: `new`



### getModificationType(fieldName: String, oldValue: Object, newValue: Object) → ChangeType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| oldValue | Object | - | - |
| newValue | Object | - | - |

**Returns**: `ChangeType`



### objectModified(fieldName: String, objectChangeReport: ObjectChangeReport) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| objectChangeReport | ObjectChangeReport | - | - |

**Returns**: `FieldChangeReport`



### FieldChangeReport() → new

**Returns**: `new`



### collectionModified(fieldName: String, collectionChangeReport: ObjectCollectionChangeReport) → FieldChangeReport

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldName | String | - | - |
| collectionChangeReport | ObjectCollectionChangeReport | - | - |

**Returns**: `FieldChangeReport`



### FieldChangeReport() → new

**Returns**: `new`



### getFieldName() → String

**Returns**: `String`



### getChangeType() → ChangeType

**Returns**: `ChangeType`



### getPrimitiveValueChange() → PrimitiveValueChange

**Returns**: `PrimitiveValueChange`



### getObjectChangeReport() → ObjectChangeReport

**Returns**: `ObjectChangeReport`



### getCollectionChangeReport() → ObjectCollectionChangeReport

**Returns**: `ObjectCollectionChangeReport`


