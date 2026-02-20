# API Reference: ProgramImportService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ProgramImportService.java`

---

## Classes

### ProgramImportService

**Inherits from**: AbstractSampleFileExportService

#### Methods

##### ProgramImportService(formMappingRepository: FormMappingRepository, programEnrolmentHeadersCreator: ProgramEnrolmentHeadersCreator, programRepository: ProgramRepository, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| programEnrolmentHeadersCreator | ProgramEnrolmentHeadersCreator | - | - |
| programRepository | ProgramRepository | - | - |
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

### ProgramImportService(formMappingRepository: FormMappingRepository, programEnrolmentHeadersCreator: ProgramEnrolmentHeadersCreator, programRepository: ProgramRepository, subjectTypeRepository: SubjectTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingRepository | FormMappingRepository | - | - |
| programEnrolmentHeadersCreator | ProgramEnrolmentHeadersCreator | - | - |
| programRepository | ProgramRepository | - | - |
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


