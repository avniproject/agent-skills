# API Reference: TableMetaDataRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/etl/TableMetaDataRepository.java`

---

## Classes

### TableMetaDataRepository

**Inherits from**: (none)

#### Methods

##### TableMetaDataRepository(entityManager: EntityManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |

**Returns**: `public`


##### getProgramAndEncounterNames(organisation: Organisation) → List

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `List`


##### in(unknown: 'Encounter', unknown: 'IndividualEncounterCancellation', unknown: 'ProgramEncounter', unknown: 'ProgramEncounterCancellation', unknown: 'ProgramEnrolment', unknown: 'ProgramExit') → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 'Encounter' | - | - |
| unknown | 'IndividualEncounterCancellation' | - | - |
| unknown | 'ProgramEncounter' | - | - |
| unknown | 'ProgramEncounterCancellation' | - | - |
| unknown | 'ProgramEnrolment' | - | - |
| unknown | 'ProgramExit' | - | - |

**Returns**: `type`


##### getSubjectTypeNames(organisation: Organisation) → List

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `List`


##### in(unknown: 'Individual', unknown: 'Group', unknown: 'Household', unknown: 'Person') → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 'Individual' | - | - |
| unknown | 'Group' | - | - |
| unknown | 'Household' | - | - |
| unknown | 'Person' | - | - |

**Returns**: `type`




## Functions

### TableMetaDataRepository(entityManager: EntityManager) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityManager | EntityManager | - | - |

**Returns**: `public`



### getProgramAndEncounterNames(organisation: Organisation) → List

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `List`



### in(unknown: 'Encounter', unknown: 'IndividualEncounterCancellation', unknown: 'ProgramEncounter', unknown: 'ProgramEncounterCancellation', unknown: 'ProgramEnrolment', unknown: 'ProgramExit') → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 'Encounter' | - | - |
| unknown | 'IndividualEncounterCancellation' | - | - |
| unknown | 'ProgramEncounter' | - | - |
| unknown | 'ProgramEncounterCancellation' | - | - |
| unknown | 'ProgramEnrolment' | - | - |
| unknown | 'ProgramExit' | - | - |

**Returns**: `type`



### getSubjectTypeNames(organisation: Organisation) → List

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |

**Returns**: `List`



### in(unknown: 'Individual', unknown: 'Group', unknown: 'Household', unknown: 'Person') → type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 'Individual' | - | - |
| unknown | 'Group' | - | - |
| unknown | 'Household' | - | - |
| unknown | 'Person' | - | - |

**Returns**: `type`


