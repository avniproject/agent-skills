# API Reference: SchemaMetadataRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/SchemaMetadataRepository.java`

---

## Classes

### SchemaMetadataRepository

**Inherits from**: (none)

#### Methods

##### SchemaMetadataRepository(jdbcTemplate: JdbcTemplate, tableMetadataRepository: TableMetadataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| tableMetadataRepository | TableMetadataRepository | - | - |

**Returns**: `public`


##### getNewSchemaMetadata() → SchemaMetadata

**Returns**: `SchemaMetadata`


##### SchemaMetadata(unknown: tables) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tables | - | - |

**Returns**: `new`


##### getAddressTable() → TableMetadata

**Returns**: `TableMetadata`


##### AddressTable(unknown: addressLevelTypes, unknown: locationProperties) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypes | - | - |
| unknown | locationProperties | - | - |

**Returns**: `new`


##### TableMetadata() → new

**Returns**: `new`


##### getRepeatableQuestionGroupTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### getTableMetadataForForm(unknown: sql) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sql | - | - |

**Returns**: `return`


##### getFormTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### join(id: select, unknown: jsonb_array_elements(key_values) → outer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | select | - | - |
| unknown | jsonb_array_elements(key_values | - | - |

**Returns**: `outer`


##### and(is: p.id) → false

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | p.id | - | - |

**Returns**: `false`


##### getPlaceholderSubjectTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### in(distinct: select) → not

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| distinct | select | - | - |

**Returns**: `not`


##### TableMetadata() → new

**Returns**: `new`


##### TableNameGenerator() → new

**Returns**: `new`


##### ColumnMetadata(Column("id": new, unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("id" | new | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("uuid": new, unknown: Column.Type.text, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("uuid" | new | - | - |
| unknown | Column.Type.text | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("user_id": new, unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("user_id" | new | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("first_name": new, unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("first_name" | new | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("last_name": new, unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("last_name" | new | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("address_id": new, unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("address_id" | new | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("created_by_id": new, unknown: Column.Type.integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("created_by_id" | new | - | - |
| unknown | Column.Type.integer | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("last_modified_by_id": new, unknown: Column.Type.integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("last_modified_by_id" | new | - | - |
| unknown | Column.Type.integer | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("created_date_time": new, unknown: Column.Type.timestamp) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("created_date_time" | new | - | - |
| unknown | Column.Type.timestamp | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("last_modified_date_time": new, unknown: Column.Type.timestamp) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("last_modified_date_time" | new | - | - |
| unknown | Column.Type.timestamp | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("organisation_id": new, unknown: Column.Type.integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("organisation_id" | new | - | - |
| unknown | Column.Type.integer | - | - |

**Returns**: `new`


##### ColumnMetadata(Column("is_voided": new, unknown: Column.Type.bool) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("is_voided" | new | - | - |
| unknown | Column.Type.bool | - | - |

**Returns**: `new`


##### getChecklistTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### ChecklistTable(unknown: checklistTypes) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklistTypes | - | - |

**Returns**: `new`


##### TableMetadata() → new

**Returns**: `new`


##### getTableMetadataForForm(sql: String) → List<TableMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sql | String | - | - |

**Returns**: `List<TableMetadata>`


##### TableMetadataMapper() → new

**Returns**: `new`


##### addDecisionConceptColumns(tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`


##### ColumnMetadataMapper() → new

**Returns**: `new`


##### addSyncAttributeColumns(tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`


##### addSyncAttribute(tableMetadata: TableMetadata, unknown: List<Map<String, syncRegistrationConcept: Object>>, columnType: Column.ColumnType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| unknown | List<Map<String | - | - |
| syncRegistrationConcept | Object>> | - | - |
| columnType | Column.ColumnType | - | - |

**Returns**: `void`


##### ColumnMetadataMapper() → new

**Returns**: `new`


##### getGroupSubjectTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### in(unknown: 'Group', unknown: 'Household') → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 'Group' | - | - |
| unknown | 'Household' | - | - |

**Returns**: `type`


##### TableMetadataMapper() → new

**Returns**: `new`


##### addHeadOfHouseholdColumns(tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`


##### ColumnMetadata(Column("Head: new, unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("Head | new | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`


##### getSyncAttributeSql(columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnName | String | - | - |

**Returns**: `String`


##### format(c.id: "select, +: \n", +: \n", +: \n") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c.id | "select | - | - |
| + | \n" | - | - |
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `return`


##### getExistingSchemaMetadata() → SchemaMetadata

**Returns**: `SchemaMetadata`


##### TableMetadataMapper() → new

**Returns**: `new`


##### SchemaMetadata(unknown: tables) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tables | - | - |

**Returns**: `new`


##### applyChanges(changes: List<Diff>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| changes | List<Diff> | - | - |

**Returns**: `void`


##### save(schemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`




## Functions

### SchemaMetadataRepository(jdbcTemplate: JdbcTemplate, tableMetadataRepository: TableMetadataRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |
| tableMetadataRepository | TableMetadataRepository | - | - |

**Returns**: `public`



### getNewSchemaMetadata() → SchemaMetadata

**Returns**: `SchemaMetadata`



### SchemaMetadata(unknown: tables) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tables | - | - |

**Returns**: `new`



### getAddressTable() → TableMetadata

**Returns**: `TableMetadata`



### AddressTable(unknown: addressLevelTypes, unknown: locationProperties) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | addressLevelTypes | - | - |
| unknown | locationProperties | - | - |

**Returns**: `new`



### TableMetadata() → new

**Returns**: `new`



### getRepeatableQuestionGroupTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### getTableMetadataForForm(unknown: sql) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sql | - | - |

**Returns**: `return`



### getFormTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### join(id: select, unknown: jsonb_array_elements(key_values) → outer

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | select | - | - |
| unknown | jsonb_array_elements(key_values | - | - |

**Returns**: `outer`



### and(is: p.id) → false

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | p.id | - | - |

**Returns**: `false`



### getPlaceholderSubjectTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### in(distinct: select) → not

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| distinct | select | - | - |

**Returns**: `not`



### TableMetadata() → new

**Returns**: `new`



### TableNameGenerator() → new

**Returns**: `new`



### ColumnMetadata(Column("id": new, unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("id" | new | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### ColumnMetadata(Column("uuid": new, unknown: Column.Type.text, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("uuid" | new | - | - |
| unknown | Column.Type.text | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### ColumnMetadata(Column("user_id": new, unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("user_id" | new | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### ColumnMetadata(Column("first_name": new, unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("first_name" | new | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`



### ColumnMetadata(Column("last_name": new, unknown: Column.Type.text) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("last_name" | new | - | - |
| unknown | Column.Type.text | - | - |

**Returns**: `new`



### ColumnMetadata(Column("address_id": new, unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("address_id" | new | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### ColumnMetadata(Column("created_by_id": new, unknown: Column.Type.integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("created_by_id" | new | - | - |
| unknown | Column.Type.integer | - | - |

**Returns**: `new`



### ColumnMetadata(Column("last_modified_by_id": new, unknown: Column.Type.integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("last_modified_by_id" | new | - | - |
| unknown | Column.Type.integer | - | - |

**Returns**: `new`



### ColumnMetadata(Column("created_date_time": new, unknown: Column.Type.timestamp) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("created_date_time" | new | - | - |
| unknown | Column.Type.timestamp | - | - |

**Returns**: `new`



### ColumnMetadata(Column("last_modified_date_time": new, unknown: Column.Type.timestamp) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("last_modified_date_time" | new | - | - |
| unknown | Column.Type.timestamp | - | - |

**Returns**: `new`



### ColumnMetadata(Column("organisation_id": new, unknown: Column.Type.integer) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("organisation_id" | new | - | - |
| unknown | Column.Type.integer | - | - |

**Returns**: `new`



### ColumnMetadata(Column("is_voided": new, unknown: Column.Type.bool) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("is_voided" | new | - | - |
| unknown | Column.Type.bool | - | - |

**Returns**: `new`



### getChecklistTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### ChecklistTable(unknown: checklistTypes) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | checklistTypes | - | - |

**Returns**: `new`



### TableMetadata() → new

**Returns**: `new`



### getTableMetadataForForm(sql: String) → List<TableMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sql | String | - | - |

**Returns**: `List<TableMetadata>`



### TableMetadataMapper() → new

**Returns**: `new`



### addDecisionConceptColumns(tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`



### ColumnMetadataMapper() → new

**Returns**: `new`



### addSyncAttributeColumns(tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`



### addSyncAttribute(tableMetadata: TableMetadata, unknown: List<Map<String, syncRegistrationConcept: Object>>, columnType: Column.ColumnType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |
| unknown | List<Map<String | - | - |
| syncRegistrationConcept | Object>> | - | - |
| columnType | Column.ColumnType | - | - |

**Returns**: `void`



### ColumnMetadataMapper() → new

**Returns**: `new`



### getGroupSubjectTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### in(unknown: 'Group', unknown: 'Household') → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 'Group' | - | - |
| unknown | 'Household' | - | - |

**Returns**: `type`



### TableMetadataMapper() → new

**Returns**: `new`



### addHeadOfHouseholdColumns(tableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | TableMetadata | - | - |

**Returns**: `void`



### ColumnMetadata(Column("Head: new, unknown: Column.Type.integer, unknown: Column.ColumnType.index) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Column("Head | new | - | - |
| unknown | Column.Type.integer | - | - |
| unknown | Column.ColumnType.index | - | - |

**Returns**: `new`



### getSyncAttributeSql(columnName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnName | String | - | - |

**Returns**: `String`



### format(c.id: "select, +: \n", +: \n", +: \n") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| c.id | "select | - | - |
| + | \n" | - | - |
| + | \n" | - | - |
| + | \n" | - | - |

**Returns**: `return`



### getExistingSchemaMetadata() → SchemaMetadata

**Returns**: `SchemaMetadata`



### TableMetadataMapper() → new

**Returns**: `new`



### SchemaMetadata(unknown: tables) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | tables | - | - |

**Returns**: `new`



### applyChanges(changes: List<Diff>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| changes | List<Diff> | - | - |

**Returns**: `void`



### save(schemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| schemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


