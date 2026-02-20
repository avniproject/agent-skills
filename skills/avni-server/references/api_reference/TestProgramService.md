# API Reference: TestProgramService.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/service/builder/TestProgramService.java`

---

## Classes

### TestProgramService

**Inherits from**: (none)

#### Methods

##### TestProgramService(programRepository: ProgramRepository, formMappingRepository: FormMappingRepository, formRepository: FormRepository, operationalProgramRepository: OperationalProgramRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRepository | ProgramRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| formRepository | FormRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |

**Returns**: `public`


##### addProgram(program: Program, subjectType: SubjectType) → Program

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `Program`


##### addProgramAndGetFormMapping(program: Program, subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`


##### TestFormBuilder() → new

**Returns**: `new`


##### OperationalProgram() → new

**Returns**: `new`


##### FormMappingBuilder() → new

**Returns**: `new`


##### addProgramExitMapping(program: Program, subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`


##### TestFormBuilder() → new

**Returns**: `new`


##### FormMappingBuilder() → new

**Returns**: `new`




## Functions

### TestProgramService(programRepository: ProgramRepository, formMappingRepository: FormMappingRepository, formRepository: FormRepository, operationalProgramRepository: OperationalProgramRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRepository | ProgramRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| formRepository | FormRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |

**Returns**: `public`



### addProgram(program: Program, subjectType: SubjectType) → Program

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `Program`



### addProgramAndGetFormMapping(program: Program, subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`



### TestFormBuilder() → new

**Returns**: `new`



### OperationalProgram() → new

**Returns**: `new`



### FormMappingBuilder() → new

**Returns**: `new`



### addProgramExitMapping(program: Program, subjectType: SubjectType) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `FormMapping`



### TestFormBuilder() → new

**Returns**: `new`



### FormMappingBuilder() → new

**Returns**: `new`


