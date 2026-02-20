# API Reference: CreateReportingViewVisitor.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/visitor/CreateReportingViewVisitor.java`

---

## Classes

### CreateReportingViewVisitor

**Inherits from**: MetaDataVisitor

#### Methods

##### CreateReportingViewVisitor(viewGenService: ViewGenService, implementationRepository: ImplementationRepository, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewGenService | ViewGenService | - | - |
| implementationRepository | ImplementationRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`


##### getViewNameGenerator(organisationId: Long) → ViewNameGenerator

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `ViewNameGenerator`


##### ViewNameGenerator(unknown: organisation) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |

**Returns**: `new`


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


##### createView(organisation: Organisation, viewSql: String, viewName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| viewSql | String | - | - |
| viewName | String | - | - |

**Returns**: `void`


##### RuntimeException(while: String.format("Error, unknown: %s", unknown: viewName, unknown: ExceptionUtils.getRootCause(e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| while | String.format("Error | - | - |
| unknown | %s" | - | - |
| unknown | viewName | - | - |
| unknown | ExceptionUtils.getRootCause(e | - | - |

**Returns**: `new`




## Functions

### CreateReportingViewVisitor(viewGenService: ViewGenService, implementationRepository: ImplementationRepository, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewGenService | ViewGenService | - | - |
| implementationRepository | ImplementationRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`



### getViewNameGenerator(organisationId: Long) → ViewNameGenerator

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `ViewNameGenerator`



### ViewNameGenerator(unknown: organisation) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | organisation | - | - |

**Returns**: `new`



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



### createView(organisation: Organisation, viewSql: String, viewName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| viewSql | String | - | - |
| viewName | String | - | - |

**Returns**: `void`



### RuntimeException(while: String.format("Error, unknown: %s", unknown: viewName, unknown: ExceptionUtils.getRootCause(e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| while | String.format("Error | - | - |
| unknown | %s" | - | - |
| unknown | viewName | - | - |
| unknown | ExceptionUtils.getRootCause(e | - | - |

**Returns**: `new`


