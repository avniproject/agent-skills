# API Reference: LongitudinalExportV2TaskletImpl.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/v2/LongitudinalExportV2TaskletImpl.java`

---

## Classes

### LongitudinalExportV2TaskletImpl

**Inherits from**: LongitudinalExportTasklet

#### Methods

##### LongitudinalExportV2TaskletImpl(cacheClearSize: int, entityManager: EntityManager, exportV2CSVFieldExtractor: ExportV2CSVFieldExtractor, exportV2Processor: ExportV2Processor, exportS3Service: ExportS3Service, jobUuid: String, stream: Stream) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cacheClearSize | int | - | - |
| entityManager | EntityManager | - | - |
| exportV2CSVFieldExtractor | ExportV2CSVFieldExtractor | - | - |
| exportV2Processor | ExportV2Processor | - | - |
| exportS3Service | ExportS3Service | - | - |
| jobUuid | String | - | - |
| stream | Stream | - | - |

**Returns**: `public`


##### execute(stepContribution: StepContribution, chunkContext: ChunkContext) → RepeatStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stepContribution | StepContribution | - | - |
| chunkContext | ChunkContext | - | - |

**Returns**: `RepeatStatus`


##### createFileWriter(uuid: String, executionContext: ExecutionContext) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| executionContext | ExecutionContext | - | - |

**Returns**: `void`


##### FileSystemResource(unknown: outputFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | outputFile | - | - |

**Returns**: `new`


##### writeToFile(rows: List<LongitudinalExportItemRow>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rows | List<LongitudinalExportItemRow> | - | - |

**Returns**: `void`


##### clean() → void

**Returns**: `void`




## Functions

### LongitudinalExportV2TaskletImpl(cacheClearSize: int, entityManager: EntityManager, exportV2CSVFieldExtractor: ExportV2CSVFieldExtractor, exportV2Processor: ExportV2Processor, exportS3Service: ExportS3Service, jobUuid: String, stream: Stream) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cacheClearSize | int | - | - |
| entityManager | EntityManager | - | - |
| exportV2CSVFieldExtractor | ExportV2CSVFieldExtractor | - | - |
| exportV2Processor | ExportV2Processor | - | - |
| exportS3Service | ExportS3Service | - | - |
| jobUuid | String | - | - |
| stream | Stream | - | - |

**Returns**: `public`



### execute(stepContribution: StepContribution, chunkContext: ChunkContext) → RepeatStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stepContribution | StepContribution | - | - |
| chunkContext | ChunkContext | - | - |

**Returns**: `RepeatStatus`



### createFileWriter(uuid: String, executionContext: ExecutionContext) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| executionContext | ExecutionContext | - | - |

**Returns**: `void`



### FileSystemResource(unknown: outputFile) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | outputFile | - | - |

**Returns**: `new`



### writeToFile(rows: List<LongitudinalExportItemRow>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rows | List<LongitudinalExportItemRow> | - | - |

**Returns**: `void`



### clean() → void

**Returns**: `void`


