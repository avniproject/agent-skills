# API Reference: EncounterImportService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/EncounterImportService.java`

---

## Classes

### EncounterImportService

**Inherits from**: AbstractSampleFileExportService

#### Methods

##### EncounterImportService(formMappingRepository: FormMappingRepository, subjectTypeRepository: SubjectTypeRepository, encounterTypeRepository: EncounterTypeRepository, encounterHeadersCreator: EncounterHeadersCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| encounterHeadersCreator | EncounterHeadersCreator | - | - |

**Returns**: `public`


##### getHeaders() → HeaderCreator

**Returns**: `HeaderCreator`


##### getFormMapping(uploadSpec: String[]) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadSpec | String[] | - | - |

**Returns**: `FormMapping`


##### generateSampleFile(uploadSpec: String[], mode: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadSpec | String[] | - | - |
| mode | Object | - | - |

**Returns**: `String`


##### StringBuilder() → new

**Returns**: `new`


##### getSubjectType(subjectTypeName: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `SubjectType`


##### getEncounterType(encounterTypeName: String) → EncounterType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |

**Returns**: `EncounterType`




## Functions

### EncounterImportService(formMappingRepository: FormMappingRepository, subjectTypeRepository: SubjectTypeRepository, encounterTypeRepository: EncounterTypeRepository, encounterHeadersCreator: EncounterHeadersCreator) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| encounterHeadersCreator | EncounterHeadersCreator | - | - |

**Returns**: `public`



### getHeaders() → HeaderCreator

**Returns**: `HeaderCreator`



### getFormMapping(uploadSpec: String[]) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadSpec | String[] | - | - |

**Returns**: `FormMapping`



### generateSampleFile(uploadSpec: String[], mode: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadSpec | String[] | - | - |
| mode | Object | - | - |

**Returns**: `String`



### StringBuilder() → new

**Returns**: `new`



### getSubjectType(subjectTypeName: String) → SubjectType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeName | String | - | - |

**Returns**: `SubjectType`



### getEncounterType(encounterTypeName: String) → EncounterType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |

**Returns**: `EncounterType`


