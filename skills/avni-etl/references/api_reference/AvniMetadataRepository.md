# API Reference: AvniMetadataRepository.java

**Language**: Java

**Source**: `src/main/java/org/avniproject/etl/repository/AvniMetadataRepository.java`

---

## Classes

### AvniMetadataRepository

**Inherits from**: (none)

#### Methods

##### AvniMetadataRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`


##### subjectTypeName(subjectUuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectUuid | String | - | - |

**Returns**: `String`


##### getNameFromUuid(unknown: subjectUuid, unknown: "subject_type") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectUuid | - | - |
| unknown | "subject_type" | - | - |

**Returns**: `return`


##### programName(programUuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUuid | String | - | - |

**Returns**: `String`


##### getNameFromUuid(unknown: programUuid, unknown: "program") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programUuid | - | - |
| unknown | "program" | - | - |

**Returns**: `return`


##### encounterTypeName(encounterTypeUuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUuid | String | - | - |

**Returns**: `String`


##### getNameFromUuid(unknown: encounterTypeUuid, unknown: "encounter_type") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterTypeUuid | - | - |
| unknown | "encounter_type" | - | - |

**Returns**: `return`


##### conceptName(conceptUuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuid | String | - | - |

**Returns**: `String`


##### getNameFromUuid(unknown: conceptUuid, unknown: "concept") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptUuid | - | - |
| unknown | "concept" | - | - |

**Returns**: `return`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


##### SyncRegistrationConcept() → new

**Returns**: `new`


##### SyncRegistrationConcept() → new

**Returns**: `new`


##### fillInNameIfPossible(syncRegistrationConcept: SyncRegistrationConcept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept | SyncRegistrationConcept | - | - |

**Returns**: `void`


##### getNameFromUuid(uuid: String, tableName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| tableName | String | - | - |

**Returns**: `String`


##### runInOrgContext(unknown: () → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ( | - | - |

**Returns**: `return`


##### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`




## Functions

### AvniMetadataRepository(jdbcTemplate: JdbcTemplate) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jdbcTemplate | JdbcTemplate | - | - |

**Returns**: `public`



### subjectTypeName(subjectUuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectUuid | String | - | - |

**Returns**: `String`



### getNameFromUuid(unknown: subjectUuid, unknown: "subject_type") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectUuid | - | - |
| unknown | "subject_type" | - | - |

**Returns**: `return`



### programName(programUuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUuid | String | - | - |

**Returns**: `String`



### getNameFromUuid(unknown: programUuid, unknown: "program") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | programUuid | - | - |
| unknown | "program" | - | - |

**Returns**: `return`



### encounterTypeName(encounterTypeUuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterTypeUuid | String | - | - |

**Returns**: `String`



### getNameFromUuid(unknown: encounterTypeUuid, unknown: "encounter_type") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounterTypeUuid | - | - |
| unknown | "encounter_type" | - | - |

**Returns**: `return`



### conceptName(conceptUuid: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUuid | String | - | - |

**Returns**: `String`



### getNameFromUuid(unknown: conceptUuid, unknown: "concept") → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptUuid | - | - |
| unknown | "concept" | - | - |

**Returns**: `return`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`



### SyncRegistrationConcept() → new

**Returns**: `new`



### SyncRegistrationConcept() → new

**Returns**: `new`



### fillInNameIfPossible(syncRegistrationConcept: SyncRegistrationConcept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| syncRegistrationConcept | SyncRegistrationConcept | - | - |

**Returns**: `void`



### getNameFromUuid(uuid: String, tableName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| tableName | String | - | - |

**Returns**: `String`



### runInOrgContext(unknown: () → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ( | - | - |

**Returns**: `return`



### NamedParameterJdbcTemplate(unknown: jdbcTemplate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | jdbcTemplate | - | - |

**Returns**: `new`


