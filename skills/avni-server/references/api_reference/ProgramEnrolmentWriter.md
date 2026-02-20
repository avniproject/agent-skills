# API Reference: ProgramEnrolmentWriter.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/ProgramEnrolmentWriter.java`

---

## Functions

### ProgramEnrolmentWriter(programEnrolmentRepository: ProgramEnrolmentRepository, subjectCreator: SubjectCreator, formMappingRepository: FormMappingRepository, observationCreator: ObservationCreator, programEnrolmentService: ProgramEnrolmentService, organisationConfigService: OrganisationConfigService, programEnrolmentHeadersCreator: ProgramEnrolmentHeadersCreator, programRepository: ProgramRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| subjectCreator | SubjectCreator | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| observationCreator | ObservationCreator | - | - |
| programEnrolmentService | ProgramEnrolmentService | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| programEnrolmentHeadersCreator | ProgramEnrolmentHeadersCreator | - | - |
| programRepository | ProgramRepository | - | - |

**Returns**: `public`



### write(extends: Chunk<?) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| extends | Chunk<? | - | - |

**Returns**: `void`



### write(row: Row) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |

**Returns**: `void`



### LocationCreator() → new

**Returns**: `new`



### getOrCreateProgramEnrolment(row: Row) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |

**Returns**: `ProgramEnrolment`



### createNewEnrolment(unknown: id) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | id | - | - |

**Returns**: `return`



### createNewEnrolment(externalId: String) → ProgramEnrolment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| externalId | String | - | - |

**Returns**: `ProgramEnrolment`



### ProgramEnrolment() → new

**Returns**: `new`


