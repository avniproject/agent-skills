# API Reference: EntityTypeRetrieverService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/EntityTypeRetrieverService.java`

---

## Classes

### EntityTypeRetrieverService

**Inherits from**: (none)

#### Methods

##### EntityTypeRetrieverService(subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |

**Returns**: `public`


##### getEntityType(entityType: String, entityTypeId: Long) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityTypeId | Long | - | - |

**Returns**: `CHSEntity`


##### findRepository(unknown: entityType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityType | - | - |

**Returns**: `return`


##### getEntityType(entityType: String, entityTypeUuid: String) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityTypeUuid | String | - | - |

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


##### findPrivilegeType(entityType: String) → PrivilegeType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |

**Returns**: `PrivilegeType`


##### IllegalArgumentException(entityType: "Unknown) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | "Unknown | - | - |

**Returns**: `new`




## Functions

### EntityTypeRetrieverService(subjectTypeRepository: SubjectTypeRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |

**Returns**: `public`



### getEntityType(entityType: String, entityTypeId: Long) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityTypeId | Long | - | - |

**Returns**: `CHSEntity`



### findRepository(unknown: entityType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | entityType | - | - |

**Returns**: `return`



### getEntityType(entityType: String, entityTypeUuid: String) → CHSEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityTypeUuid | String | - | - |

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



### findPrivilegeType(entityType: String) → PrivilegeType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |

**Returns**: `PrivilegeType`



### IllegalArgumentException(entityType: "Unknown) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | "Unknown | - | - |

**Returns**: `new`


