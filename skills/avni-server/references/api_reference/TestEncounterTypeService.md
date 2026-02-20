# API Reference: TestEncounterTypeService.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/builder/TestEncounterTypeService.java`

---

## Classes

### TestEncounterTypeService

**Inherits from**: (none)

#### Methods

##### TestEncounterTypeService(formRepository: FormRepository, formMappingRepository: FormMappingRepository, encounterTypeRepository: EncounterTypeRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRepository | FormRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |

**Returns**: `public`


##### addGeneralEncounterTypeAndGetFormMapping(encounterTypeName: String, subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`


##### EncounterTypeBuilder() → new

**Returns**: `new`


##### OperationalEncounterType() → new

**Returns**: `new`


##### TestFormBuilder() → new

**Returns**: `new`


##### FormMappingBuilder() → new

**Returns**: `new`


##### addProgramEncounterTypeAndGetFormMapping(encounterTypeName: String, subjectType: SubjectType, program: Program) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| subjectType | SubjectType | - | - |
| program | Program | - | - |

**Returns**: `FormMapping`


##### EncounterTypeBuilder() → new

**Returns**: `new`


##### OperationalEncounterType() → new

**Returns**: `new`


##### TestFormBuilder() → new

**Returns**: `new`


##### FormMappingBuilder() → new

**Returns**: `new`




## Functions

### TestEncounterTypeService(formRepository: FormRepository, formMappingRepository: FormMappingRepository, encounterTypeRepository: EncounterTypeRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRepository | FormRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |

**Returns**: `public`



### addGeneralEncounterTypeAndGetFormMapping(encounterTypeName: String, subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`



### EncounterTypeBuilder() → new

**Returns**: `new`



### OperationalEncounterType() → new

**Returns**: `new`



### TestFormBuilder() → new

**Returns**: `new`



### FormMappingBuilder() → new

**Returns**: `new`



### addProgramEncounterTypeAndGetFormMapping(encounterTypeName: String, subjectType: SubjectType, program: Program) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeName | String | - | - |
| subjectType | SubjectType | - | - |
| program | Program | - | - |

**Returns**: `FormMapping`



### EncounterTypeBuilder() → new

**Returns**: `new`



### OperationalEncounterType() → new

**Returns**: `new`



### TestFormBuilder() → new

**Returns**: `new`



### FormMappingBuilder() → new

**Returns**: `new`


