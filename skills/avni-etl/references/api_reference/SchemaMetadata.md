# API Reference: SchemaMetadata.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/metadata/SchemaMetadata.java`

---

## Classes

### SchemaMetadata

**Inherits from**: (none)

#### Methods

##### SchemaMetadata(tableMetadata: List<TableMetadata>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | List<TableMetadata> | - | - |

**Returns**: `public`


##### getTableMetadata() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### getOrderedTableMetadata() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### setTableMetadata(tableMetadata: List<TableMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | List<TableMetadata> | - | - |

**Returns**: `void`


##### findChanges(current: SchemaMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| current | SchemaMetadata | - | - |

**Returns**: `List<Diff>`


##### findMatchingTable(newTable: TableMetadata) → Optional<TableMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newTable | TableMetadata | - | - |

**Returns**: `Optional<TableMetadata>`


##### getAllSubjectTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### getAllSubjectTableNames() → List<String>

**Returns**: `List<String>`


##### getAllProgramEnrolmentTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### getAllProgramEnrolmentTableNames() → List<String>

**Returns**: `List<String>`


##### getAllProgramEncounterTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### getAllProgramEncounterTableNames() → List<String>

**Returns**: `List<String>`


##### getAllEncounterTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### getAllIndividualAndProgramEncounterTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`


##### getAllEncounterTableNames() → List<String>

**Returns**: `List<String>`


##### getMediaTable() → Optional<TableMetadata>

**Returns**: `Optional<TableMetadata>`


##### getMediaAnalysisTable() → Optional<TableMetadata>

**Returns**: `Optional<TableMetadata>`


##### findChanges(currentSchema: SchemaMetadata, newTable: TableMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentSchema | SchemaMetadata | - | - |
| newTable | TableMetadata | - | - |

**Returns**: `List<Diff>`


##### mergeWith(oldSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oldSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`


##### getCountsByType() → String

**Returns**: `String`


##### findTablesByForm(String: @NotNull) → Stream<TableMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @NotNull | - | - |

**Returns**: `Stream<TableMetadata>`




## Functions

### SchemaMetadata(tableMetadata: List<TableMetadata>) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | List<TableMetadata> | - | - |

**Returns**: `public`



### getTableMetadata() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### getOrderedTableMetadata() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### setTableMetadata(tableMetadata: List<TableMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tableMetadata | List<TableMetadata> | - | - |

**Returns**: `void`



### findChanges(current: SchemaMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| current | SchemaMetadata | - | - |

**Returns**: `List<Diff>`



### findMatchingTable(newTable: TableMetadata) → Optional<TableMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newTable | TableMetadata | - | - |

**Returns**: `Optional<TableMetadata>`



### getAllSubjectTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### getAllSubjectTableNames() → List<String>

**Returns**: `List<String>`



### getAllProgramEnrolmentTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### getAllProgramEnrolmentTableNames() → List<String>

**Returns**: `List<String>`



### getAllProgramEncounterTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### getAllProgramEncounterTableNames() → List<String>

**Returns**: `List<String>`



### getAllEncounterTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### getAllIndividualAndProgramEncounterTables() → List<TableMetadata>

**Returns**: `List<TableMetadata>`



### getAllEncounterTableNames() → List<String>

**Returns**: `List<String>`



### getMediaTable() → Optional<TableMetadata>

**Returns**: `Optional<TableMetadata>`



### getMediaAnalysisTable() → Optional<TableMetadata>

**Returns**: `Optional<TableMetadata>`



### findChanges(currentSchema: SchemaMetadata, newTable: TableMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentSchema | SchemaMetadata | - | - |
| newTable | TableMetadata | - | - |

**Returns**: `List<Diff>`



### mergeWith(oldSchemaMetadata: SchemaMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oldSchemaMetadata | SchemaMetadata | - | - |

**Returns**: `void`



### getCountsByType() → String

**Returns**: `String`



### findTablesByForm(String: @NotNull) → Stream<TableMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @NotNull | - | - |

**Returns**: `Stream<TableMetadata>`


