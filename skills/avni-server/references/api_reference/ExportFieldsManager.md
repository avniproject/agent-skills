# API Reference: ExportFieldsManager.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/v2/ExportFieldsManager.java`

---

## Classes

### ExportFieldsManager

**Inherits from**: ExportEntityTypeVisitor

#### Methods

##### ExportFieldsManager(formMappingService: FormMappingService, encounterRepository: EncounterRepository, programEncounterRepository: ProgramEncounterRepository, timeZone: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingService | FormMappingService | - | - |
| encounterRepository | EncounterRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| timeZone | String | - | - |

**Returns**: `public`


##### setCoreFields(allCoreFields: Set<String>, exportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allCoreFields | Set<String> | - | - |
| exportEntityType | ExportEntityType | - | - |

**Returns**: `void`


##### getObsFields(exportEntityType: ExportEntityType, unknown: Map<String, allFormElementsAndDecisions: FormElement>, allCoreFields: Set<String>) → Map<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |
| unknown | Map<String | - | - |
| allFormElementsAndDecisions | FormElement> | - | - |
| allCoreFields | Set<String> | - | - |

**Returns**: `Map<String, FormElement>`


##### visitSubject(exportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `void`


##### addSubjectTypeForm(exportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `void`


##### visitEncounter(encounter: ExportEntityType, subjectExportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ExportEntityType | - | - |
| subjectExportEntityType | ExportEntityType | - | - |

**Returns**: `void`


##### processEncounter(encounter: ExportEntityType, subjectExportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ExportEntityType | - | - |
| subjectExportEntityType | ExportEntityType | - | - |

**Returns**: `void`


##### visitGroup(exportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `void`


##### visitGroupEncounter(groupEncounter: ExportEntityType, group: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupEncounter | ExportEntityType | - | - |
| group | ExportEntityType | - | - |

**Returns**: `void`


##### visitProgram(program: ExportEntityType, subjectExportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | ExportEntityType | - | - |
| subjectExportEntityType | ExportEntityType | - | - |

**Returns**: `void`


##### addProgramForm(program: ExportEntityType, formType: FormType, isOptional: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | ExportEntityType | - | - |
| formType | FormType | - | - |
| isOptional | boolean | - | - |

**Returns**: `void`


##### visitProgramEncounter(encounterType: ExportEntityType, program: ExportEntityType, subject: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | ExportEntityType | - | - |
| program | ExportEntityType | - | - |
| subject | ExportEntityType | - | - |

**Returns**: `void`


##### addEncounterTypeForm(exportEntityType: ExportEntityType, formType: FormType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |
| formType | FormType | - | - |

**Returns**: `void`


##### addEncounterTypeForm(exportEntityType: ExportEntityType, formType: FormType, isOptional: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |
| formType | FormType | - | - |
| isOptional | boolean | - | - |

**Returns**: `void`


##### getMaxEntityCount(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`


##### getMainFields(exportEntityType: ExportEntityType) → Map<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `Map<String, FormElement>`


##### getSecondaryFields(exportEntityType: ExportEntityType) → Map<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `Map<String, FormElement>`


##### getCoreFields(exportEntityType: ExportEntityType) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `List<String>`


##### calculateTotalNumberOfColumns(exportEntityType: ExportEntityType, unknown: Map<String, unknown: Map<String, formMap: FormElement>>) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |
| unknown | Map<String | - | - |
| unknown | Map<String | - | - |
| formMap | FormElement>> | - | - |

**Returns**: `long`


##### getTotalNumberOfMainColumns(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`


##### getTotalNumberOfSecondaryColumns(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`


##### getTotalNumberOfColumns(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`


##### getTotalNumberOfColumnsPerEntity(unknown: exportEntityType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exportEntityType | - | - |

**Returns**: `return`


##### getTotalNumberOfColumnsPerEntity(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`


##### getAllFormFilters() → Map<Form, ExportFilters>

**Returns**: `Map<Form, ExportFilters>`




## Functions

### ExportFieldsManager(formMappingService: FormMappingService, encounterRepository: EncounterRepository, programEncounterRepository: ProgramEncounterRepository, timeZone: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMappingService | FormMappingService | - | - |
| encounterRepository | EncounterRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| timeZone | String | - | - |

**Returns**: `public`



### setCoreFields(allCoreFields: Set<String>, exportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allCoreFields | Set<String> | - | - |
| exportEntityType | ExportEntityType | - | - |

**Returns**: `void`



### getObsFields(exportEntityType: ExportEntityType, unknown: Map<String, allFormElementsAndDecisions: FormElement>, allCoreFields: Set<String>) → Map<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |
| unknown | Map<String | - | - |
| allFormElementsAndDecisions | FormElement> | - | - |
| allCoreFields | Set<String> | - | - |

**Returns**: `Map<String, FormElement>`



### visitSubject(exportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `void`



### addSubjectTypeForm(exportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `void`



### visitEncounter(encounter: ExportEntityType, subjectExportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ExportEntityType | - | - |
| subjectExportEntityType | ExportEntityType | - | - |

**Returns**: `void`



### processEncounter(encounter: ExportEntityType, subjectExportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | ExportEntityType | - | - |
| subjectExportEntityType | ExportEntityType | - | - |

**Returns**: `void`



### visitGroup(exportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `void`



### visitGroupEncounter(groupEncounter: ExportEntityType, group: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| groupEncounter | ExportEntityType | - | - |
| group | ExportEntityType | - | - |

**Returns**: `void`



### visitProgram(program: ExportEntityType, subjectExportEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | ExportEntityType | - | - |
| subjectExportEntityType | ExportEntityType | - | - |

**Returns**: `void`



### addProgramForm(program: ExportEntityType, formType: FormType, isOptional: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | ExportEntityType | - | - |
| formType | FormType | - | - |
| isOptional | boolean | - | - |

**Returns**: `void`



### visitProgramEncounter(encounterType: ExportEntityType, program: ExportEntityType, subject: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | ExportEntityType | - | - |
| program | ExportEntityType | - | - |
| subject | ExportEntityType | - | - |

**Returns**: `void`



### addEncounterTypeForm(exportEntityType: ExportEntityType, formType: FormType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |
| formType | FormType | - | - |

**Returns**: `void`



### addEncounterTypeForm(exportEntityType: ExportEntityType, formType: FormType, isOptional: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |
| formType | FormType | - | - |
| isOptional | boolean | - | - |

**Returns**: `void`



### getMaxEntityCount(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`



### getMainFields(exportEntityType: ExportEntityType) → Map<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `Map<String, FormElement>`



### getSecondaryFields(exportEntityType: ExportEntityType) → Map<String, FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `Map<String, FormElement>`



### getCoreFields(exportEntityType: ExportEntityType) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `List<String>`



### calculateTotalNumberOfColumns(exportEntityType: ExportEntityType, unknown: Map<String, unknown: Map<String, formMap: FormElement>>) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |
| unknown | Map<String | - | - |
| unknown | Map<String | - | - |
| formMap | FormElement>> | - | - |

**Returns**: `long`



### getTotalNumberOfMainColumns(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`



### getTotalNumberOfSecondaryColumns(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`



### getTotalNumberOfColumns(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`



### getTotalNumberOfColumnsPerEntity(unknown: exportEntityType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | exportEntityType | - | - |

**Returns**: `return`



### getTotalNumberOfColumnsPerEntity(exportEntityType: ExportEntityType) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportEntityType | ExportEntityType | - | - |

**Returns**: `long`



### getAllFormFilters() → Map<Form, ExportFilters>

**Returns**: `Map<Form, ExportFilters>`


