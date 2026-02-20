# API Reference: ProgramEncounterWriter.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/writer/ProgramEncounterWriter.java`

---

## Functions

### ProgramEncounterWriter(programEncounterCreator: ProgramEncounterCreator, organisationConfigService: OrganisationConfigService, unknown: @Value("#{jobParameters['encounterUploadMode']}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounterCreator | ProgramEncounterCreator | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| unknown | @Value("#{jobParameters['encounterUploadMode']}" | - | - |

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


