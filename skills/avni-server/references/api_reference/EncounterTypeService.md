# API Reference: EncounterTypeService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/EncounterTypeService.java`

---

## Classes

### EncounterTypeService

**Inherits from**: NonScopeAwareService

#### Methods

##### EncounterTypeService(encounterTypeRepository: EncounterTypeRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository, formMappingRepository: FormMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeRepository | EncounterTypeRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |

**Returns**: `public`


##### createEncounterType(encounterTypeRequest: EntityTypeContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeRequest | EntityTypeContract | - | - |

**Returns**: `void`


##### EncounterType() → new

**Returns**: `new`


##### createOperationalEncounterType(operationalEncounterTypeContract: OperationalEncounterTypeContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalEncounterTypeContract | OperationalEncounterTypeContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### OperationalEncounterType() → new

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### getAllGeneralEncounter() → Stream<EncounterType>

**Returns**: `Stream<EncounterType>`


##### getAllProgramEncounter() → Stream<EncounterType>

**Returns**: `Stream<EncounterType>`


##### saveEncounterTypes(entityTypeContracts: EntityTypeContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityTypeContracts | EntityTypeContract[] | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: entityTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### saveOperationalEncounterTypes(operationalEncounterTypesContract: OperationalEncounterTypesContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalEncounterTypesContract | OperationalEncounterTypesContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`


##### BulkItemSaveException(unknown: operationalEncounterTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalEncounterTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`




## Functions

### EncounterTypeService(encounterTypeRepository: EncounterTypeRepository, operationalEncounterTypeRepository: OperationalEncounterTypeRepository, formMappingRepository: FormMappingRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeRepository | EncounterTypeRepository | - | - |
| operationalEncounterTypeRepository | OperationalEncounterTypeRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |

**Returns**: `public`



### createEncounterType(encounterTypeRequest: EntityTypeContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeRequest | EntityTypeContract | - | - |

**Returns**: `void`



### EncounterType() → new

**Returns**: `new`



### createOperationalEncounterType(operationalEncounterTypeContract: OperationalEncounterTypeContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalEncounterTypeContract | OperationalEncounterTypeContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### OperationalEncounterType() → new

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### getAllGeneralEncounter() → Stream<EncounterType>

**Returns**: `Stream<EncounterType>`



### getAllProgramEncounter() → Stream<EncounterType>

**Returns**: `Stream<EncounterType>`



### saveEncounterTypes(entityTypeContracts: EntityTypeContract[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityTypeContracts | EntityTypeContract[] | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: entityTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`



### saveOperationalEncounterTypes(operationalEncounterTypesContract: OperationalEncounterTypesContract, organisation: Organisation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalEncounterTypesContract | OperationalEncounterTypesContract | - | - |
| organisation | Organisation | - | - |

**Returns**: `void`



### BulkItemSaveException(unknown: operationalEncounterTypeContract, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | operationalEncounterTypeContract | - | - |
| unknown | e | - | - |

**Returns**: `new`


