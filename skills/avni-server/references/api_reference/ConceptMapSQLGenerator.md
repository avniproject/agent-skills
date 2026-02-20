# API Reference: ConceptMapSQLGenerator.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/reporting/ConceptMapSQLGenerator.java`

---

## Classes

### ConceptMapSQLGenerator

**Inherits from**: (none)

#### Methods

##### generateWithClauses(formMapping: FormMapping, formElementRepository: FormElementRepository, conceptMapTemplate: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| formElementRepository | FormElementRepository | - | - |
| conceptMapTemplate | String | - | - |

**Returns**: `String`


##### generateJoins(formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |

**Returns**: `String`


##### fillConceptMapTemplate(conceptMapTemplate: String, mapName: String, conceptUuids: String[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptMapTemplate | String | - | - |
| mapName | String | - | - |
| conceptUuids | String[] | - | - |

**Returns**: `String`




## Functions

### generateWithClauses(formMapping: FormMapping, formElementRepository: FormElementRepository, conceptMapTemplate: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |
| formElementRepository | FormElementRepository | - | - |
| conceptMapTemplate | String | - | - |

**Returns**: `String`



### generateJoins(formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |

**Returns**: `String`



### fillConceptMapTemplate(conceptMapTemplate: String, mapName: String, conceptUuids: String[]) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptMapTemplate | String | - | - |
| mapName | String | - | - |
| conceptUuids | String[] | - | - |

**Returns**: `String`


