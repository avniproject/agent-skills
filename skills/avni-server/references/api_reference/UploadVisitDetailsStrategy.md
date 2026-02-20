# API Reference: UploadVisitDetailsStrategy.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/header/UploadVisitDetailsStrategy.java`

---

## Classes

### UploadVisitDetailsStrategy

**Inherits from**: EncounterHeaderStrategy

#### Methods

##### generateHeaders(formMapping: FormMapping) → List<HeaderField>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |

**Returns**: `List<HeaderField>`


##### HeaderField(unknown: EncounterHeadersCreator.ID, Can: "Optional., unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ID | - | - |
| Can | "Optional. | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: EncounterHeadersCreator.ENCOUNTER_TYPE, unknown: formMapping.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ENCOUNTER_TYPE | - | - |
| unknown | formMapping.getEncounterType( | - | - |

**Returns**: `new`


##### HeaderField(unknown: idField, unknown: idDescription, unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | idField | - | - |
| unknown | idDescription | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: EncounterHeadersCreator.VISIT_DATE, unknown: "", unknown: true, unknown: null, DD-MM-YYYY": "Format:, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.VISIT_DATE | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| DD-MM-YYYY" | "Format: | - | - |
| unknown | null | - | - |

**Returns**: `new`


##### HeaderField(unknown: EncounterHeadersCreator.ENCOUNTER_COORDINATES, unknown: "", unknown: false, unknown: null, latitude: "Format:, in: longitude, unknown: 19.8188, unknown: 83.9172) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ENCOUNTER_COORDINATES | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| latitude | "Format: | - | - |
| in | longitude | - | - |
| unknown | 19.8188 | - | - |
| unknown | 83.9172 | - | - |

**Returns**: `new`




## Functions

### generateHeaders(formMapping: FormMapping) → List<HeaderField>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |

**Returns**: `List<HeaderField>`



### HeaderField(unknown: EncounterHeadersCreator.ID, Can: "Optional., unknown: false, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ID | - | - |
| Can | "Optional. | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: EncounterHeadersCreator.ENCOUNTER_TYPE, unknown: formMapping.getEncounterType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ENCOUNTER_TYPE | - | - |
| unknown | formMapping.getEncounterType( | - | - |

**Returns**: `new`



### HeaderField(unknown: idField, unknown: idDescription, unknown: true, unknown: null, unknown: null, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | idField | - | - |
| unknown | idDescription | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| unknown | null | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: EncounterHeadersCreator.VISIT_DATE, unknown: "", unknown: true, unknown: null, DD-MM-YYYY": "Format:, unknown: null) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.VISIT_DATE | - | - |
| unknown | "" | - | - |
| unknown | true | - | - |
| unknown | null | - | - |
| DD-MM-YYYY" | "Format: | - | - |
| unknown | null | - | - |

**Returns**: `new`



### HeaderField(unknown: EncounterHeadersCreator.ENCOUNTER_COORDINATES, unknown: "", unknown: false, unknown: null, latitude: "Format:, in: longitude, unknown: 19.8188, unknown: 83.9172) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EncounterHeadersCreator.ENCOUNTER_COORDINATES | - | - |
| unknown | "" | - | - |
| unknown | false | - | - |
| unknown | null | - | - |
| latitude | "Format: | - | - |
| in | longitude | - | - |
| unknown | 19.8188 | - | - |
| unknown | 83.9172 | - | - |

**Returns**: `new`


