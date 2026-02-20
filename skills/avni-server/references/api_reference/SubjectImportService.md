# API Reference: SubjectImportService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/SubjectImportService.java`

---

## Classes

### SubjectImportService

**Inherits from**: AbstractSampleFileExportService

#### Methods

##### SubjectImportService(formMappingRepository: FormMappingRepository, subjectHeadersCreator: SubjectHeadersCreator, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| subjectHeadersCreator | SubjectHeadersCreator | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`


##### getHeaders() → HeaderCreator

**Returns**: `HeaderCreator`


##### getFormMapping(uploadSpec: String[]) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadSpec | String[] | - | - |

**Returns**: `FormMapping`




## Functions

### SubjectImportService(formMappingRepository: FormMappingRepository, subjectHeadersCreator: SubjectHeadersCreator, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| subjectHeadersCreator | SubjectHeadersCreator | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |

**Returns**: `public`



### getHeaders() → HeaderCreator

**Returns**: `HeaderCreator`



### getFormMapping(uploadSpec: String[]) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uploadSpec | String[] | - | - |

**Returns**: `FormMapping`


