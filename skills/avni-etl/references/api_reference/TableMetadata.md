# API Reference: TableMetadata.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/metadata/TableMetadata.java`

---

## Classes

### TableMetadata

**Inherits from**: Model

#### Methods

##### TableMetadata(id: Integer) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |

**Returns**: `public`


##### TableMetadata() → public

**Returns**: `public`


##### matches(other: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| other | TableMetadata | - | - |

**Returns**: `boolean`


##### nullSafeEquals(unknown: other.getType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | other.getType( | - | - |

**Returns**: `return`


##### findChanges(existingTable: TableMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingTable | TableMetadata | - | - |

**Returns**: `List<Diff>`


##### RenameTable(unknown: existingTable.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | existingTable.getName( | - | - |

**Returns**: `new`


##### AddColumn(unknown: getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | getName( | - | - |

**Returns**: `new`


##### getNowVoidedColumns(existingTable: TableMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingTable | TableMetadata | - | - |

**Returns**: `List<Diff>`


##### RenameColumn(unknown: getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | getName( | - | - |

**Returns**: `new`


##### findMatchingIndex(indexMetadata: IndexMetadata) → Optional<IndexMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadata | IndexMetadata | - | - |

**Returns**: `Optional<IndexMetadata>`


##### findMatchingColumn(columnMetadata: ColumnMetadata) → Optional<ColumnMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `Optional<ColumnMetadata>`


##### getColumns() → List<Column>

**Returns**: `List<Column>`


##### getColumnMetadataList() → return

**Returns**: `return`


##### findColumnsMatchingConceptType(conceptTypes: ColumnMetadata.ConceptType...) → List<ColumnMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptTypes | ColumnMetadata.ConceptType... | - | - |

**Returns**: `List<ColumnMetadata>`


##### hasColumnsMatchingConceptType(conceptTypes: ColumnMetadata.ConceptType...) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptTypes | ColumnMetadata.ConceptType... | - | - |

**Returns**: `boolean`


##### getColumnMetadataList() → return

**Returns**: `return`


##### mergeWith(oldTableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oldTableMetadata | TableMetadata | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getType() → Type

**Returns**: `Type`


##### setType(type: Type) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | Type | - | - |

**Returns**: `void`


##### getParentType() → Type

**Returns**: `Type`


##### setParentType(parentType: Type) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentType | Type | - | - |

**Returns**: `void`


##### getSubjectTypeUuid() → String

**Returns**: `String`


##### setSubjectTypeUuid(subjectTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUuid | String | - | - |

**Returns**: `void`


##### getProgramUuid() → String

**Returns**: `String`


##### setProgramUuid(programUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUuid | String | - | - |

**Returns**: `void`


##### getEncounterTypeUuid() → String

**Returns**: `String`


##### setEncounterTypeUuid(encounterTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUuid | String | - | - |

**Returns**: `void`


##### getFormUuid() → String

**Returns**: `String`


##### setFormUuid(formUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUuid | String | - | - |

**Returns**: `void`


##### getColumnMetadataList() → List<ColumnMetadata>

**Returns**: `List<ColumnMetadata>`


##### setColumnMetadataList(columnMetadataList: List<ColumnMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnMetadataList | List<ColumnMetadata> | - | - |

**Returns**: `void`


##### getNonDefaultColumnMetadataList() → List<ColumnMetadata>

**Returns**: `List<ColumnMetadata>`


##### getColumnMetadataList() → return

**Returns**: `return`


##### addColumnMetadata(columnMetadataList: List<ColumnMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnMetadataList | List<ColumnMetadata> | - | - |

**Returns**: `void`


##### hasNonDefaultColumns() → boolean

**Returns**: `boolean`


##### getIndexMetadataList() → List<IndexMetadata>

**Returns**: `List<IndexMetadata>`


##### addIndexMetadata(column: Column) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| column | Column | - | - |

**Returns**: `void`


##### IndexMetadata(ColumnMetadata(column: findMatchingColumn(new, unknown: null, unknown: null, unknown: null, unknown: false) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ColumnMetadata(column | findMatchingColumn(new | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | false | - | - |

**Returns**: `new`


##### addIndexMetadata(indexMetadataList: List<IndexMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadataList | List<IndexMetadata> | - | - |

**Returns**: `void`


##### setIndexMetadataList(indexMetadataList: List<IndexMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadataList | List<IndexMetadata> | - | - |

**Returns**: `void`


##### getGroupSubjectTypeUuid() → String

**Returns**: `String`


##### setGroupSubjectTypeUuid(groupSubjectTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectTypeUuid | String | - | - |

**Returns**: `void`


##### getMemberSubjectTypeUuid() → String

**Returns**: `String`


##### setMemberSubjectTypeUuid(memberSubjectTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberSubjectTypeUuid | String | - | - |

**Returns**: `void`


##### createNew() → List<Diff>

**Returns**: `List<Diff>`


##### CreateTable(unknown: name, unknown: getColumns() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | getColumns( | - | - |

**Returns**: `new`


##### AddIndex(unknown: indexMetadata.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | indexMetadata.getName( | - | - |

**Returns**: `new`


##### hasColumn(columnName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnName | String | - | - |

**Returns**: `boolean`


##### getParentTableType() → TableType

**Returns**: `TableType`


##### getColumn(columnId: Integer) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnId | Integer | - | - |

**Returns**: `ColumnMetadata`


##### getColumnByConceptUuid(conceptUuid: String) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuid | String | - | - |

**Returns**: `ColumnMetadata`


##### getAllColumnsByConceptUuid(conceptUuid: String) → Stream<ColumnMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuid | String | - | - |

**Returns**: `Stream<ColumnMetadata>`


##### isSubjectTable() → boolean

**Returns**: `boolean`


##### isMediaTable() → boolean

**Returns**: `boolean`


##### isMediaAnalysisTable() → boolean

**Returns**: `boolean`


##### isPartOfRegularSync() → boolean

**Returns**: `boolean`


##### addIndexMetadata(indexMetadata: IndexMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadata | IndexMetadata | - | - |

**Returns**: `void`


##### getRepeatableQuestionGroupConceptUuid() → String

**Returns**: `String`


##### setRepeatableQuestionGroupConceptUuid(repeatableQuestionGroupConceptUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repeatableQuestionGroupConceptUuid | String | - | - |

**Returns**: `void`


##### isRepeatableQuestionGroupTable() → boolean

**Returns**: `boolean`


##### toString() → String

**Returns**: `String`




## Functions

### TableMetadata(id: Integer) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |

**Returns**: `public`



### TableMetadata() → public

**Returns**: `public`



### matches(other: TableMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| other | TableMetadata | - | - |

**Returns**: `boolean`



### nullSafeEquals(unknown: other.getType() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | other.getType( | - | - |

**Returns**: `return`



### findChanges(existingTable: TableMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingTable | TableMetadata | - | - |

**Returns**: `List<Diff>`



### RenameTable(unknown: existingTable.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | existingTable.getName( | - | - |

**Returns**: `new`



### AddColumn(unknown: getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | getName( | - | - |

**Returns**: `new`



### getNowVoidedColumns(existingTable: TableMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingTable | TableMetadata | - | - |

**Returns**: `List<Diff>`



### RenameColumn(unknown: getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | getName( | - | - |

**Returns**: `new`



### findMatchingIndex(indexMetadata: IndexMetadata) → Optional<IndexMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadata | IndexMetadata | - | - |

**Returns**: `Optional<IndexMetadata>`



### findMatchingColumn(columnMetadata: ColumnMetadata) → Optional<ColumnMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnMetadata | ColumnMetadata | - | - |

**Returns**: `Optional<ColumnMetadata>`



### getColumns() → List<Column>

**Returns**: `List<Column>`



### getColumnMetadataList() → return

**Returns**: `return`



### findColumnsMatchingConceptType(conceptTypes: ColumnMetadata.ConceptType...) → List<ColumnMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptTypes | ColumnMetadata.ConceptType... | - | - |

**Returns**: `List<ColumnMetadata>`



### hasColumnsMatchingConceptType(conceptTypes: ColumnMetadata.ConceptType...) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptTypes | ColumnMetadata.ConceptType... | - | - |

**Returns**: `boolean`



### getColumnMetadataList() → return

**Returns**: `return`



### mergeWith(oldTableMetadata: TableMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oldTableMetadata | TableMetadata | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getType() → Type

**Returns**: `Type`



### setType(type: Type) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | Type | - | - |

**Returns**: `void`



### getParentType() → Type

**Returns**: `Type`



### setParentType(parentType: Type) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentType | Type | - | - |

**Returns**: `void`



### getSubjectTypeUuid() → String

**Returns**: `String`



### setSubjectTypeUuid(subjectTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUuid | String | - | - |

**Returns**: `void`



### getProgramUuid() → String

**Returns**: `String`



### setProgramUuid(programUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUuid | String | - | - |

**Returns**: `void`



### getEncounterTypeUuid() → String

**Returns**: `String`



### setEncounterTypeUuid(encounterTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUuid | String | - | - |

**Returns**: `void`



### getFormUuid() → String

**Returns**: `String`



### setFormUuid(formUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUuid | String | - | - |

**Returns**: `void`



### getColumnMetadataList() → List<ColumnMetadata>

**Returns**: `List<ColumnMetadata>`



### setColumnMetadataList(columnMetadataList: List<ColumnMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnMetadataList | List<ColumnMetadata> | - | - |

**Returns**: `void`



### getNonDefaultColumnMetadataList() → List<ColumnMetadata>

**Returns**: `List<ColumnMetadata>`



### getColumnMetadataList() → return

**Returns**: `return`



### addColumnMetadata(columnMetadataList: List<ColumnMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnMetadataList | List<ColumnMetadata> | - | - |

**Returns**: `void`



### hasNonDefaultColumns() → boolean

**Returns**: `boolean`



### getIndexMetadataList() → List<IndexMetadata>

**Returns**: `List<IndexMetadata>`



### addIndexMetadata(column: Column) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| column | Column | - | - |

**Returns**: `void`



### IndexMetadata(ColumnMetadata(column: findMatchingColumn(new, unknown: null, unknown: null, unknown: null, unknown: false) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ColumnMetadata(column | findMatchingColumn(new | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | false | - | - |

**Returns**: `new`



### addIndexMetadata(indexMetadataList: List<IndexMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadataList | List<IndexMetadata> | - | - |

**Returns**: `void`



### setIndexMetadataList(indexMetadataList: List<IndexMetadata>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadataList | List<IndexMetadata> | - | - |

**Returns**: `void`



### getGroupSubjectTypeUuid() → String

**Returns**: `String`



### setGroupSubjectTypeUuid(groupSubjectTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupSubjectTypeUuid | String | - | - |

**Returns**: `void`



### getMemberSubjectTypeUuid() → String

**Returns**: `String`



### setMemberSubjectTypeUuid(memberSubjectTypeUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| memberSubjectTypeUuid | String | - | - |

**Returns**: `void`



### createNew() → List<Diff>

**Returns**: `List<Diff>`



### CreateTable(unknown: name, unknown: getColumns() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | getColumns( | - | - |

**Returns**: `new`



### AddIndex(unknown: indexMetadata.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | indexMetadata.getName( | - | - |

**Returns**: `new`



### hasColumn(columnName: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnName | String | - | - |

**Returns**: `boolean`



### getParentTableType() → TableType

**Returns**: `TableType`



### getColumn(columnId: Integer) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnId | Integer | - | - |

**Returns**: `ColumnMetadata`



### getColumnByConceptUuid(conceptUuid: String) → ColumnMetadata

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuid | String | - | - |

**Returns**: `ColumnMetadata`



### getAllColumnsByConceptUuid(conceptUuid: String) → Stream<ColumnMetadata>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuid | String | - | - |

**Returns**: `Stream<ColumnMetadata>`



### isSubjectTable() → boolean

**Returns**: `boolean`



### isMediaTable() → boolean

**Returns**: `boolean`



### isMediaAnalysisTable() → boolean

**Returns**: `boolean`



### isPartOfRegularSync() → boolean

**Returns**: `boolean`



### addIndexMetadata(indexMetadata: IndexMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| indexMetadata | IndexMetadata | - | - |

**Returns**: `void`



### getRepeatableQuestionGroupConceptUuid() → String

**Returns**: `String`



### setRepeatableQuestionGroupConceptUuid(repeatableQuestionGroupConceptUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| repeatableQuestionGroupConceptUuid | String | - | - |

**Returns**: `void`



### isRepeatableQuestionGroupTable() → boolean

**Returns**: `boolean`



### toString() → String

**Returns**: `String`


