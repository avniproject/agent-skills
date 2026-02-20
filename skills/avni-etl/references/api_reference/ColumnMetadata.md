# API Reference: ColumnMetadata.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/domain/metadata/ColumnMetadata.java`

---

## Classes

### ColumnMetadata

**Inherits from**: Model

#### Methods

##### getVoidedName(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`


##### getVoidedName() → String

**Returns**: `String`


##### getVoidedName(unknown: getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | getName( | - | - |

**Returns**: `return`


##### getColumnDatatype() → Type

**Returns**: `Type`


##### ColumnMetadata(id: Integer, column: Column, conceptId: Integer, conceptType: ConceptType, conceptUuid: String, parentConceptUuid: String, parentConceptName: String, conceptVoided: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| column | Column | - | - |
| conceptId | Integer | - | - |
| conceptType | ConceptType | - | - |
| conceptUuid | String | - | - |
| parentConceptUuid | String | - | - |
| parentConceptName | String | - | - |
| conceptVoided | boolean | - | - |

**Returns**: `public`


##### isConceptVoided() → boolean

**Returns**: `boolean`


##### ColumnMetadata(id: Integer, name: String, conceptId: Integer, conceptType: ConceptType, conceptUuid: String, parentConceptUuid: String, parentConceptName: String, columnType: Column.ColumnType, conceptVoided: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| name | String | - | - |
| conceptId | Integer | - | - |
| conceptType | ConceptType | - | - |
| conceptUuid | String | - | - |
| parentConceptUuid | String | - | - |
| parentConceptName | String | - | - |
| columnType | Column.ColumnType | - | - |
| conceptVoided | boolean | - | - |

**Returns**: `public`


##### Column(unknown: name, unknown: null, unknown: columnType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | null | - | - |
| unknown | columnType | - | - |

**Returns**: `new`


##### Column(unknown: name, unknown: conceptType.getColumnDatatype() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | conceptType.getColumnDatatype( | - | - |

**Returns**: `new`


##### ColumnMetadata(column: Column, conceptId: Integer, conceptType: ConceptType, conceptUuid: String, conceptVoided: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| column | Column | - | - |
| conceptId | Integer | - | - |
| conceptType | ConceptType | - | - |
| conceptUuid | String | - | - |
| conceptVoided | boolean | - | - |

**Returns**: `public`


##### getConceptId() → Integer

**Returns**: `Integer`


##### getConceptType() → ConceptType

**Returns**: `ConceptType`


##### getColumn() → Column

**Returns**: `Column`


##### getName() → String

**Returns**: `String`


##### getType() → Type

**Returns**: `Type`


##### getConceptUuid() → String

**Returns**: `String`


##### getParentConceptUuid() → String

**Returns**: `String`


##### getParentConceptName() → String

**Returns**: `String`


##### matches(realColumn: ColumnMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| realColumn | ColumnMetadata | - | - |

**Returns**: `boolean`


##### getName() → return

**Returns**: `return`


##### nullSafeEquals(unknown: realColumn.getParentConceptUuid() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | realColumn.getParentConceptUuid( | - | - |

**Returns**: `return`


##### nullSafeEquals(unknown: realColumn.getConceptUuid() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | realColumn.getConceptUuid( | - | - |

**Returns**: `return`


##### findChanges(newTable: TableMetadata, oldColumnMetadata: ColumnMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newTable | TableMetadata | - | - |
| oldColumnMetadata | ColumnMetadata | - | - |

**Returns**: `List<Diff>`


##### RenameColumn(unknown: newTable.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | newTable.getName( | - | - |

**Returns**: `new`


##### RuntimeException(in: String.format("Change, %s: Column:, Type:: Old, Type:: New, unknown: newTable.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| in | String.format("Change | - | - |
| %s | Column: | - | - |
| Type: | Old | - | - |
| Type: | New | - | - |
| unknown | newTable.getName( | - | - |

**Returns**: `new`


##### mergeWith(oldColumnMetadata: ColumnMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oldColumnMetadata | ColumnMetadata | - | - |

**Returns**: `void`


##### getJsonbExtractor() → String

**Returns**: `String`


##### format('%s': "->, unknown: parentConceptUuid, unknown: conceptUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s' | "-> | - | - |
| unknown | parentConceptUuid | - | - |
| unknown | conceptUuid | - | - |

**Returns**: `return`


##### format('%s'": "->, unknown: conceptUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s'" | "-> | - | - |
| unknown | conceptUuid | - | - |

**Returns**: `return`


##### getTextExtractor() → String

**Returns**: `String`


##### format('%s': "->, unknown: parentConceptUuid, unknown: conceptUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s' | "-> | - | - |
| unknown | parentConceptUuid | - | - |
| unknown | conceptUuid | - | - |

**Returns**: `return`


##### format('%s'": "->>, unknown: conceptUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s'" | "->> | - | - |
| unknown | conceptUuid | - | - |

**Returns**: `return`


##### toString() → String

**Returns**: `String`


##### getNewVoidedColumnMetaData() → ColumnMetadata

**Returns**: `ColumnMetadata`


##### ColumnMetadata(unknown: this.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.getId( | - | - |

**Returns**: `new`




## Functions

### getVoidedName(name: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `String`



### getVoidedName() → String

**Returns**: `String`



### getVoidedName(unknown: getName() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | getName( | - | - |

**Returns**: `return`



### getColumnDatatype() → Type

**Returns**: `Type`



### ColumnMetadata(id: Integer, column: Column, conceptId: Integer, conceptType: ConceptType, conceptUuid: String, parentConceptUuid: String, parentConceptName: String, conceptVoided: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| column | Column | - | - |
| conceptId | Integer | - | - |
| conceptType | ConceptType | - | - |
| conceptUuid | String | - | - |
| parentConceptUuid | String | - | - |
| parentConceptName | String | - | - |
| conceptVoided | boolean | - | - |

**Returns**: `public`



### isConceptVoided() → boolean

**Returns**: `boolean`



### ColumnMetadata(id: Integer, name: String, conceptId: Integer, conceptType: ConceptType, conceptUuid: String, parentConceptUuid: String, parentConceptName: String, columnType: Column.ColumnType, conceptVoided: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | Integer | - | - |
| name | String | - | - |
| conceptId | Integer | - | - |
| conceptType | ConceptType | - | - |
| conceptUuid | String | - | - |
| parentConceptUuid | String | - | - |
| parentConceptName | String | - | - |
| columnType | Column.ColumnType | - | - |
| conceptVoided | boolean | - | - |

**Returns**: `public`



### Column(unknown: name, unknown: null, unknown: columnType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | null | - | - |
| unknown | columnType | - | - |

**Returns**: `new`



### Column(unknown: name, unknown: conceptType.getColumnDatatype() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | name | - | - |
| unknown | conceptType.getColumnDatatype( | - | - |

**Returns**: `new`



### ColumnMetadata(column: Column, conceptId: Integer, conceptType: ConceptType, conceptUuid: String, conceptVoided: boolean) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| column | Column | - | - |
| conceptId | Integer | - | - |
| conceptType | ConceptType | - | - |
| conceptUuid | String | - | - |
| conceptVoided | boolean | - | - |

**Returns**: `public`



### getConceptId() → Integer

**Returns**: `Integer`



### getConceptType() → ConceptType

**Returns**: `ConceptType`



### getColumn() → Column

**Returns**: `Column`



### getName() → String

**Returns**: `String`



### getType() → Type

**Returns**: `Type`



### getConceptUuid() → String

**Returns**: `String`



### getParentConceptUuid() → String

**Returns**: `String`



### getParentConceptName() → String

**Returns**: `String`



### matches(realColumn: ColumnMetadata) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| realColumn | ColumnMetadata | - | - |

**Returns**: `boolean`



### getName() → return

**Returns**: `return`



### nullSafeEquals(unknown: realColumn.getParentConceptUuid() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | realColumn.getParentConceptUuid( | - | - |

**Returns**: `return`



### nullSafeEquals(unknown: realColumn.getConceptUuid() → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | realColumn.getConceptUuid( | - | - |

**Returns**: `return`



### findChanges(newTable: TableMetadata, oldColumnMetadata: ColumnMetadata) → List<Diff>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newTable | TableMetadata | - | - |
| oldColumnMetadata | ColumnMetadata | - | - |

**Returns**: `List<Diff>`



### RenameColumn(unknown: newTable.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | newTable.getName( | - | - |

**Returns**: `new`



### RuntimeException(in: String.format("Change, %s: Column:, Type:: Old, Type:: New, unknown: newTable.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| in | String.format("Change | - | - |
| %s | Column: | - | - |
| Type: | Old | - | - |
| Type: | New | - | - |
| unknown | newTable.getName( | - | - |

**Returns**: `new`



### mergeWith(oldColumnMetadata: ColumnMetadata) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oldColumnMetadata | ColumnMetadata | - | - |

**Returns**: `void`



### getJsonbExtractor() → String

**Returns**: `String`



### format('%s': "->, unknown: parentConceptUuid, unknown: conceptUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s' | "-> | - | - |
| unknown | parentConceptUuid | - | - |
| unknown | conceptUuid | - | - |

**Returns**: `return`



### format('%s'": "->, unknown: conceptUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s'" | "-> | - | - |
| unknown | conceptUuid | - | - |

**Returns**: `return`



### getTextExtractor() → String

**Returns**: `String`



### format('%s': "->, unknown: parentConceptUuid, unknown: conceptUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s' | "-> | - | - |
| unknown | parentConceptUuid | - | - |
| unknown | conceptUuid | - | - |

**Returns**: `return`



### format('%s'": "->>, unknown: conceptUuid) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| '%s'" | "->> | - | - |
| unknown | conceptUuid | - | - |

**Returns**: `return`



### toString() → String

**Returns**: `String`



### getNewVoidedColumnMetaData() → ColumnMetadata

**Returns**: `ColumnMetadata`



### ColumnMetadata(unknown: this.getId() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.getId( | - | - |

**Returns**: `new`


