# API Reference: ProgramService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/ProgramService.java`

---

## Classes

### ProgramService

**Inherits from**: NonScopeAwareService

#### Methods

##### ProgramService(programRepository: ProgramRepository, operationalProgramRepository: OperationalProgramRepository, formMappingRepository: FormMappingRepository, ruleService: RuleService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRepository | ProgramRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| ruleService | RuleService | - | - |

**Returns**: `public`


##### saveProgram(programRequest: ProgramRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRequest | ProgramRequest | - | - |

**Returns**: `void`


##### updateAndSaveProgram(program: Program, programContract: ProgramContract) → Program

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| programContract | ProgramContract | - | - |

**Returns**: `Program`


##### getEligiblePrograms(individual: Individual) → List<Program>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `List<Program>`


##### getEligibleProgramsFromInactivePrograms(unknown: individual, unknown: staticallyEnrollablePrograms) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individual | - | - |
| unknown | staticallyEnrollablePrograms | - | - |

**Returns**: `return`


##### createOperationalProgram(operationalProgramContract: OperationalProgramContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramContract | OperationalProgramContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### OperationalProgram() → new

**Returns**: `new`


##### createProgram(programRequest: ProgramRequest) → Program

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRequest | ProgramRequest | - | - |

**Returns**: `Program`


##### Program() → new

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getAll() → Stream<Program>

**Returns**: `Stream<Program>`


##### getEligibleProgramsFromInactivePrograms(individual: Individual, staticallyEnrolablePrograms: List<Program>) → List<Program>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| staticallyEnrolablePrograms | List<Program> | - | - |

**Returns**: `List<Program>`


##### savePrograms(programRequests: ProgramRequest[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRequests | ProgramRequest[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: programRequest, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programRequest | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### saveOperationalPrograms(operationalProgramsContract: OperationalProgramsContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramsContract | OperationalProgramsContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: opc, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | opc | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### ProgramService(programRepository: ProgramRepository, operationalProgramRepository: OperationalProgramRepository, formMappingRepository: FormMappingRepository, ruleService: RuleService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRepository | ProgramRepository | - | - |
| operationalProgramRepository | OperationalProgramRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| ruleService | RuleService | - | - |

**Returns**: `public`



### saveProgram(programRequest: ProgramRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRequest | ProgramRequest | - | - |

**Returns**: `void`



### updateAndSaveProgram(program: Program, programContract: ProgramContract) → Program

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| programContract | ProgramContract | - | - |

**Returns**: `Program`



### getEligiblePrograms(individual: Individual) → List<Program>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `List<Program>`



### getEligibleProgramsFromInactivePrograms(unknown: individual, unknown: staticallyEnrollablePrograms) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individual | - | - |
| unknown | staticallyEnrollablePrograms | - | - |

**Returns**: `return`



### createOperationalProgram(operationalProgramContract: OperationalProgramContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramContract | OperationalProgramContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### OperationalProgram() → new

**Returns**: `new`



### createProgram(programRequest: ProgramRequest) → Program

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRequest | ProgramRequest | - | - |

**Returns**: `Program`



### Program() → new

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getAll() → Stream<Program>

**Returns**: `Stream<Program>`



### getEligibleProgramsFromInactivePrograms(individual: Individual, staticallyEnrolablePrograms: List<Program>) → List<Program>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| staticallyEnrolablePrograms | List<Program> | - | - |

**Returns**: `List<Program>`



### savePrograms(programRequests: ProgramRequest[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programRequests | ProgramRequest[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: programRequest, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programRequest | - | - |
| unknown | e | - | - |

**Returns**: `new`



### saveOperationalPrograms(operationalProgramsContract: OperationalProgramsContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramsContract | OperationalProgramsContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: opc, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | opc | - | - |
| unknown | e | - | - |

**Returns**: `new`


