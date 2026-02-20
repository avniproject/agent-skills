# API Reference: OperationalProgramRepository.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/dao/OperationalProgramRepository.java`

---

## Functions

### findByLastModifiedDateTimeGreaterThanOrProgramLastModifiedDateTimeGreaterThanOrderByLastModifiedDateTimeAscIdAsc(unknown: @Param("lastModifiedDateTime") → Page<OperationalProgram>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Param("lastModifiedDateTime" | - | - |

**Returns**: `Page<OperationalProgram>`



### findByProgramAndOrganisationId(program: Program, organisationId: long) → OperationalProgram

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | Program | - | - |
| organisationId | long | - | - |

**Returns**: `OperationalProgram`



### getAllNames() → List<String>

**Returns**: `List<String>`


