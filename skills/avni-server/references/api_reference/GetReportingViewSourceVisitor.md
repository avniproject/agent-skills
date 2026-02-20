# API Reference: GetReportingViewSourceVisitor.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/visitor/GetReportingViewSourceVisitor.java`

---

## Classes

### GetReportingViewSourceVisitor

**Inherits from**: MetaDataVisitor

#### Methods

##### GetReportingViewSourceVisitor(implementationRepository: ImplementationRepository, organisation: Organisation, formMappingRepository: FormMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implementationRepository | ImplementationRepository | - | - |
| organisation | Organisation | - | - |
| formMappingRepository | FormMappingRepository | - | - |

**Returns**: `public`


##### ViewNameGenerator(unknown: organisation) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |

**Returns**: `new`


##### getReportingViewResponses() → List<ReportingViewResponse>

**Returns**: `List<ReportingViewResponse>`


##### visit(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`


##### visit(subjectType: SubjectType, program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |

**Returns**: `void`


##### visit(subjectType: SubjectType, program: Program, encounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |

**Returns**: `void`


##### visit(subjectType: SubjectType, encounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | EncounterType | - | - |

**Returns**: `void`


##### generateComment(formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |

**Returns**: `String`


##### StringBuilder() → new

**Returns**: `new`


##### getReportingViewProjection(viewName: String) → ReportingViewProjection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewName | String | - | - |

**Returns**: `ReportingViewProjection`


##### addToResponse(reportingViewProjection: ReportingViewProjection, formMapping: FormMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportingViewProjection | ReportingViewProjection | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `void`


##### StringBuilder(unknown: comment) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | comment | - | - |

**Returns**: `new`


##### ReportingViewResponse(unknown: reportingViewProjection.getViewname() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | reportingViewProjection.getViewname( | - | - |

**Returns**: `new`




## Functions

### GetReportingViewSourceVisitor(implementationRepository: ImplementationRepository, organisation: Organisation, formMappingRepository: FormMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| implementationRepository | ImplementationRepository | - | - |
| organisation | Organisation | - | - |
| formMappingRepository | FormMappingRepository | - | - |

**Returns**: `public`



### ViewNameGenerator(unknown: organisation) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |

**Returns**: `new`



### getReportingViewResponses() → List<ReportingViewResponse>

**Returns**: `List<ReportingViewResponse>`



### visit(subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |

**Returns**: `void`



### visit(subjectType: SubjectType, program: Program) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |

**Returns**: `void`



### visit(subjectType: SubjectType, program: Program, encounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| program | Program | - | - |
| encounterType | EncounterType | - | - |

**Returns**: `void`



### visit(subjectType: SubjectType, encounterType: EncounterType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectType | SubjectType | - | - |
| encounterType | EncounterType | - | - |

**Returns**: `void`



### generateComment(formMapping: FormMapping) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formMapping | FormMapping | - | - |

**Returns**: `String`



### StringBuilder() → new

**Returns**: `new`



### getReportingViewProjection(viewName: String) → ReportingViewProjection

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewName | String | - | - |

**Returns**: `ReportingViewProjection`



### addToResponse(reportingViewProjection: ReportingViewProjection, formMapping: FormMapping) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reportingViewProjection | ReportingViewProjection | - | - |
| formMapping | FormMapping | - | - |

**Returns**: `void`



### StringBuilder(unknown: comment) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | comment | - | - |

**Returns**: `new`



### ReportingViewResponse(unknown: reportingViewProjection.getViewname() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | reportingViewProjection.getViewname( | - | - |

**Returns**: `new`


