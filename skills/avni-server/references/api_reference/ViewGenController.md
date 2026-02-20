# API Reference: ViewGenController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/ViewGenController.java`

---

## Classes

### ViewGenController

**Inherits from**: (none)

#### Methods

##### ViewGenController(viewGenService: ViewGenService, subjectTypeRepository: SubjectTypeRepository, formMappingRepository: FormMappingRepository, metaDataService: MetaDataRepository, createReportingViewVisitor: CreateReportingViewVisitor, implementationRepository: ImplementationRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewGenService | ViewGenService | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| metaDataService | MetaDataRepository | - | - |
| createReportingViewVisitor | CreateReportingViewVisitor | - | - |
| implementationRepository | ImplementationRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`


##### query(ViewConfig: @RequestBody) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ViewConfig | @RequestBody | - | - |

**Returns**: `Map<String, String>`


##### createViews() → List<ReportingViewResponse>

**Returns**: `List<ReportingViewResponse>`


##### GetReportingViewSourceVisitor(unknown: implementationRepository, unknown: organisation, unknown: formMappingRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | implementationRepository | - | - |
| unknown | organisation | - | - |
| unknown | formMappingRepository | - | - |

**Returns**: `new`


##### getAllViews() → List<ReportingViewResponse>

**Returns**: `List<ReportingViewResponse>`


##### GetReportingViewSourceVisitor(unknown: implementationRepository, unknown: organisation, unknown: formMappingRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | implementationRepository | - | - |
| unknown | organisation | - | - |
| unknown | formMappingRepository | - | - |

**Returns**: `new`


##### deleteView(String: @PathVariable) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ResponseEntity`




## Functions

### ViewGenController(viewGenService: ViewGenService, subjectTypeRepository: SubjectTypeRepository, formMappingRepository: FormMappingRepository, metaDataService: MetaDataRepository, createReportingViewVisitor: CreateReportingViewVisitor, implementationRepository: ImplementationRepository, accessControlService: AccessControlService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewGenService | ViewGenService | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| metaDataService | MetaDataRepository | - | - |
| createReportingViewVisitor | CreateReportingViewVisitor | - | - |
| implementationRepository | ImplementationRepository | - | - |
| accessControlService | AccessControlService | - | - |

**Returns**: `public`



### query(ViewConfig: @RequestBody) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ViewConfig | @RequestBody | - | - |

**Returns**: `Map<String, String>`



### createViews() → List<ReportingViewResponse>

**Returns**: `List<ReportingViewResponse>`



### GetReportingViewSourceVisitor(unknown: implementationRepository, unknown: organisation, unknown: formMappingRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | implementationRepository | - | - |
| unknown | organisation | - | - |
| unknown | formMappingRepository | - | - |

**Returns**: `new`



### getAllViews() → List<ReportingViewResponse>

**Returns**: `List<ReportingViewResponse>`



### GetReportingViewSourceVisitor(unknown: implementationRepository, unknown: organisation, unknown: formMappingRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | implementationRepository | - | - |
| unknown | organisation | - | - |
| unknown | formMappingRepository | - | - |

**Returns**: `new`



### deleteView(String: @PathVariable) → ResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String | @PathVariable | - | - |

**Returns**: `ResponseEntity`


