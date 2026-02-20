# API Reference: ExportV2Processor.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/v2/ExportV2Processor.java`

---

## Functions

### ExportV2Processor(exportJobParametersRepository: ExportJobParametersRepository, unknown: @Value("#{jobParameters['exportJobParamsUUID']}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportJobParametersRepository | ExportJobParametersRepository | - | - |
| unknown | @Value("#{jobParameters['exportJobParamsUUID']}" | - | - |

**Returns**: `public`



### init() → void

**Returns**: `void`



### process(exportItem: Object) → LongitudinalExportItemRow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItem | Object | - | - |

**Returns**: `LongitudinalExportItemRow`



### LongitudinalExportItemRow() → new

**Returns**: `new`



### initIndividual(exportItem: Individual, exportItemRow: LongitudinalExportItemRow) → Individual

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItem | Individual | - | - |
| exportItemRow | LongitudinalExportItemRow | - | - |

**Returns**: `Individual`



### initGroupSubjectsAndTheirEncounters(exportItemRow: LongitudinalExportItemRow, individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItemRow | LongitudinalExportItemRow | - | - |
| individual | Individual | - | - |

**Returns**: `void`



### initProgramsAndTheirEncounters(exportItemRow: LongitudinalExportItemRow, individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItemRow | LongitudinalExportItemRow | - | - |
| individual | Individual | - | - |

**Returns**: `void`



### initGeneralEncounters(exportItemRow: LongitudinalExportItemRow, individual: Individual) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItemRow | LongitudinalExportItemRow | - | - |
| individual | Individual | - | - |

**Returns**: `void`



### applyFilters(unknown: Map<String, entityToFiltersMap: ExportEntityType>, typeUUID: String, entityDateTime: DateTime, isVoided: boolean) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Map<String | - | - |
| entityToFiltersMap | ExportEntityType> | - | - |
| typeUUID | String | - | - |
| entityDateTime | DateTime | - | - |
| isVoided | boolean | - | - |

**Returns**: `boolean`



### setExportOutput(exportOutput: ExportOutput) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportOutput | ExportOutput | - | - |

**Returns**: `void`



### compareEncounters(enc1: AbstractEncounter, enc2: AbstractEncounter) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enc1 | AbstractEncounter | - | - |
| enc2 | AbstractEncounter | - | - |

**Returns**: `int`


