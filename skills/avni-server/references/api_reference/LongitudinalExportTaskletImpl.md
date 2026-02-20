# API Reference: LongitudinalExportTaskletImpl.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/LongitudinalExportTaskletImpl.java`

---

## Classes

### LongitudinalExportTaskletImpl

**Inherits from**: LongitudinalExportTasklet

#### Methods

##### LongitudinalExportTaskletImpl(cacheClearSize: int, entityManager: EntityManager, exportCSVFieldExtractor: ExportCSVFieldExtractor, exportProcessor: ExportProcessor, exportS3Service: ExportS3Service, jobUuid: String, stream: Stream) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cacheClearSize | int | - | - |
| entityManager | EntityManager | - | - |
| exportCSVFieldExtractor | ExportCSVFieldExtractor | - | - |
| exportProcessor | ExportProcessor | - | - |
| exportS3Service | ExportS3Service | - | - |
| jobUuid | String | - | - |
| stream | Stream | - | - |

**Returns**: `public`


##### execute(contribution: StepContribution, chunkContext: ChunkContext) → RepeatStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contribution | StepContribution | - | - |
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


##### writeToFile(rows: List<ExportItemRow>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rows | List<ExportItemRow> | - | - |

**Returns**: `void`


##### clean() → void

**Returns**: `void`




## Functions

### LongitudinalExportTaskletImpl(cacheClearSize: int, entityManager: EntityManager, exportCSVFieldExtractor: ExportCSVFieldExtractor, exportProcessor: ExportProcessor, exportS3Service: ExportS3Service, jobUuid: String, stream: Stream) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cacheClearSize | int | - | - |
| entityManager | EntityManager | - | - |
| exportCSVFieldExtractor | ExportCSVFieldExtractor | - | - |
| exportProcessor | ExportProcessor | - | - |
| exportS3Service | ExportS3Service | - | - |
| jobUuid | String | - | - |
| stream | Stream | - | - |

**Returns**: `public`



### execute(contribution: StepContribution, chunkContext: ChunkContext) → RepeatStatus

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contribution | StepContribution | - | - |
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



### writeToFile(rows: List<ExportItemRow>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rows | List<ExportItemRow> | - | - |

**Returns**: `void`



### clean() → void

**Returns**: `void`


