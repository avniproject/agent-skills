# API Reference: ExportOutputBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/web/request/ExportOutputBuilder.java`

---

## Classes

### ExportOutputBuilder

**Inherits from**: (none)

#### Methods

##### ExportOutput() → new

**Returns**: `new`


##### forSubjectType(subjectTypeUUID: String) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `ExportOutputBuilder`


##### withFields(fields: List<String>) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fields | List<String> | - | - |

**Returns**: `ExportOutputBuilder`


##### usingFilters(exportFilters: ExportFilters) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportFilters | ExportFilters | - | - |

**Returns**: `ExportOutputBuilder`


##### withEncounterTypes(encounterTypes: List<ExportEntityType>) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypes | List<ExportEntityType> | - | - |

**Returns**: `ExportOutputBuilder`


##### withProgram(programs: List<ExportOutput.ExportNestedOutput>) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programs | List<ExportOutput.ExportNestedOutput> | - | - |

**Returns**: `ExportOutputBuilder`


##### build() → ExportOutput

**Returns**: `ExportOutput`




## Functions

### ExportOutput() → new

**Returns**: `new`



### forSubjectType(subjectTypeUUID: String) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |

**Returns**: `ExportOutputBuilder`



### withFields(fields: List<String>) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fields | List<String> | - | - |

**Returns**: `ExportOutputBuilder`



### usingFilters(exportFilters: ExportFilters) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportFilters | ExportFilters | - | - |

**Returns**: `ExportOutputBuilder`



### withEncounterTypes(encounterTypes: List<ExportEntityType>) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypes | List<ExportEntityType> | - | - |

**Returns**: `ExportOutputBuilder`



### withProgram(programs: List<ExportOutput.ExportNestedOutput>) → ExportOutputBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programs | List<ExportOutput.ExportNestedOutput> | - | - |

**Returns**: `ExportOutputBuilder`



### build() → ExportOutput

**Returns**: `ExportOutput`


