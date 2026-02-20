# API Reference: FilterCondition.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/metabase/FilterCondition.java`

---

## Classes

### FilterCondition

**Inherits from**: (none)

#### Methods

##### FilterCondition(operator: ConditionType, fieldId: int, baseType: String, value: Object) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operator | ConditionType | - | - |
| fieldId | int | - | - |
| baseType | String | - | - |
| value | Object | - | - |

**Returns**: `public`


##### FilterCondition(operator: ConditionType, fieldId: int, baseType: String, value: Object, sourceFieldId: int) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operator | ConditionType | - | - |
| fieldId | int | - | - |
| baseType | String | - | - |
| value | Object | - | - |
| sourceFieldId | int | - | - |

**Returns**: `public`


##### getOperator() → ConditionType

**Returns**: `ConditionType`


##### getFieldId() → int

**Returns**: `int`


##### getBaseType() → String

**Returns**: `String`


##### getValue() → Object

**Returns**: `Object`


##### toJson() → ArrayNode

**Returns**: `ArrayNode`




## Functions

### FilterCondition(operator: ConditionType, fieldId: int, baseType: String, value: Object) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operator | ConditionType | - | - |
| fieldId | int | - | - |
| baseType | String | - | - |
| value | Object | - | - |

**Returns**: `public`



### FilterCondition(operator: ConditionType, fieldId: int, baseType: String, value: Object, sourceFieldId: int) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operator | ConditionType | - | - |
| fieldId | int | - | - |
| baseType | String | - | - |
| value | Object | - | - |
| sourceFieldId | int | - | - |

**Returns**: `public`



### getOperator() → ConditionType

**Returns**: `ConditionType`



### getFieldId() → int

**Returns**: `int`



### getBaseType() → String

**Returns**: `String`



### getValue() → Object

**Returns**: `Object`



### toJson() → ArrayNode

**Returns**: `ArrayNode`


