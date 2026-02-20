# API Reference: EntityRetrieverService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/EntityRetrieverService.java`

---

## Classes

### EntityRetrieverService

**Inherits from**: (none)

#### Methods

##### EntityRetrieverService(individualRepository: IndividualRepository, programEnrolmentRepository: ProgramEnrolmentRepository, programEncounterRepository: ProgramEncounterRepository, encounterRepository: EncounterRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| encounterRepository | EncounterRepository | - | - |

**Returns**: `public`


##### getEntity(entityType: String, entityId: Long) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityId | Long | - | - |

**Returns**: `CHSEntity`


##### findRepository(unknown: entityType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityType | - | - |

**Returns**: `return`


##### findRepository(entityType: String) → CHSRepository

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |

**Returns**: `CHSRepository`


##### IllegalArgumentException(entityType: "Unknown) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | "Unknown | - | - |

**Returns**: `new`




## Functions

### EntityRetrieverService(individualRepository: IndividualRepository, programEnrolmentRepository: ProgramEnrolmentRepository, programEncounterRepository: ProgramEncounterRepository, encounterRepository: EncounterRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualRepository | IndividualRepository | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| encounterRepository | EncounterRepository | - | - |

**Returns**: `public`



### getEntity(entityType: String, entityId: Long) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityId | Long | - | - |

**Returns**: `CHSEntity`



### findRepository(unknown: entityType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityType | - | - |

**Returns**: `return`



### findRepository(entityType: String) → CHSRepository

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |

**Returns**: `CHSRepository`



### IllegalArgumentException(entityType: "Unknown) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | "Unknown | - | - |

**Returns**: `new`


