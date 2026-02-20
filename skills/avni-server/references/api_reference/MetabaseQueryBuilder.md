# API Reference: MetabaseQueryBuilder.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/metabase/MetabaseQueryBuilder.java`

---

## Classes

### MetabaseQueryBuilder

**Inherits from**: (none)

#### Methods

##### MetabaseQueryBuilder(database: Database, joinsArray: ArrayNode) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| joinsArray | ArrayNode | - | - |

**Returns**: `public`


##### forTable(tableDetails: TableDetails) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableDetails | TableDetails | - | - |

**Returns**: `MetabaseQueryBuilder`


##### forTable(tableDetails: TableDetails, primaryTableFields: List<FieldDetails>) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableDetails | TableDetails | - | - |
| primaryTableFields | List<FieldDetails> | - | - |

**Returns**: `MetabaseQueryBuilder`


##### joinWith(joinTargetTable: TableDetails, joinField1: FieldDetails, joinField2: FieldDetails, fieldsToShow: List<FieldDetails>) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| joinTargetTable | TableDetails | - | - |
| joinField1 | FieldDetails | - | - |
| joinField2 | FieldDetails | - | - |
| fieldsToShow | List<FieldDetails> | - | - |

**Returns**: `MetabaseQueryBuilder`


##### selectedFieldsToDisplay(fieldsToShow: List<FieldDetails>, joinNode: ObjectNode, joinTargetTable: TableDetails) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldsToShow | List<FieldDetails> | - | - |
| joinNode | ObjectNode | - | - |
| joinTargetTable | TableDetails | - | - |

**Returns**: `void`


##### addAggregation(aggregationType: AggregationType) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aggregationType | AggregationType | - | - |

**Returns**: `MetabaseQueryBuilder`


##### addBreakout(fieldId: int) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldId | int | - | - |

**Returns**: `MetabaseQueryBuilder`


##### addFilter(conditions: FilterCondition[]) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conditions | FilterCondition[] | - | - |

**Returns**: `MetabaseQueryBuilder`


##### build() → MetabaseQuery

**Returns**: `MetabaseQuery`


##### MetabaseQuery(unknown: database.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database.getId( | - | - |

**Returns**: `new`




## Functions

### MetabaseQueryBuilder(database: Database, joinsArray: ArrayNode) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| database | Database | - | - |
| joinsArray | ArrayNode | - | - |

**Returns**: `public`



### forTable(tableDetails: TableDetails) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableDetails | TableDetails | - | - |

**Returns**: `MetabaseQueryBuilder`



### forTable(tableDetails: TableDetails, primaryTableFields: List<FieldDetails>) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableDetails | TableDetails | - | - |
| primaryTableFields | List<FieldDetails> | - | - |

**Returns**: `MetabaseQueryBuilder`



### joinWith(joinTargetTable: TableDetails, joinField1: FieldDetails, joinField2: FieldDetails, fieldsToShow: List<FieldDetails>) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| joinTargetTable | TableDetails | - | - |
| joinField1 | FieldDetails | - | - |
| joinField2 | FieldDetails | - | - |
| fieldsToShow | List<FieldDetails> | - | - |

**Returns**: `MetabaseQueryBuilder`



### selectedFieldsToDisplay(fieldsToShow: List<FieldDetails>, joinNode: ObjectNode, joinTargetTable: TableDetails) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldsToShow | List<FieldDetails> | - | - |
| joinNode | ObjectNode | - | - |
| joinTargetTable | TableDetails | - | - |

**Returns**: `void`



### addAggregation(aggregationType: AggregationType) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aggregationType | AggregationType | - | - |

**Returns**: `MetabaseQueryBuilder`



### addBreakout(fieldId: int) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fieldId | int | - | - |

**Returns**: `MetabaseQueryBuilder`



### addFilter(conditions: FilterCondition[]) → MetabaseQueryBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conditions | FilterCondition[] | - | - |

**Returns**: `MetabaseQueryBuilder`



### build() → MetabaseQuery

**Returns**: `MetabaseQuery`



### MetabaseQuery(unknown: database.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | database.getId( | - | - |

**Returns**: `new`


