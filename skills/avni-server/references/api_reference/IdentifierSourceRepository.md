# API Reference: IdentifierSourceRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/IdentifierSourceRepository.java`

---

## Functions

### findByIdIn(unknown: @Param("ids") → Page<IdentifierSource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("ids" | - | - |

**Returns**: `Page<IdentifierSource>`



### or(is: :catchment) → null

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | :catchment | - | - |

**Returns**: `null`



### getAllAuthorisedIdentifierSources(unknown: @Param("catchment") → Page<IdentifierSource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("catchment" | - | - |

**Returns**: `Page<IdentifierSource>`



### and(is: catchment) → false

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| is | catchment | - | - |

**Returns**: `false`



### getAllAuthorisedIdentifierSources(unknown: @Param("catchment") → List<IdentifierSource>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("catchment" | - | - |

**Returns**: `List<IdentifierSource>`



### existsByLastModifiedDateTimeGreaterThan(lastModifiedDateTime: Date) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | Date | - | - |

**Returns**: `boolean`


