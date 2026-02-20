# API Reference: BatchConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/BatchConfiguration.java`

---

## Classes

### BatchConfiguration

**Inherits from**: (none)

#### Methods

##### BatchConfiguration(jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager, unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`


##### csvFileItemReader(unknown: @Value("#{jobParameters['s3Key']}") → FlatFileItemReader<Row>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("#{jobParameters['s3Key']}" | - | - |

**Returns**: `FlatFileItemReader<Row>`


##### StringReader(String(bytes: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String(bytes | new | - | - |

**Returns**: `new`


##### StringReader(String(bytes: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String(bytes | new | - | - |

**Returns**: `new`


##### DelimitedLineTokenizer() → new

**Returns**: `new`


##### Row(unknown: headers, unknown: fieldSet.getValues() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | fieldSet.getValues( | - | - |

**Returns**: `new`


##### ByteArrayResource(unknown: bytes) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bytes | - | - |

**Returns**: `new`


##### importJob(listener: ErrorFileCreatorListener, importStep: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | ErrorFileCreatorListener | - | - |
| importStep | Step | - | - |

**Returns**: `Job`


##### JobBuilder(unknown: "importJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### RunIdIncrementer() → new

**Returns**: `new`


##### importStep(csvFileItemReader: FlatFileItemReader<Row>, csvFileItemWriter: CsvFileItemWriter, errorFileWriterListener: ErrorFileWriterListener) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| csvFileItemReader | FlatFileItemReader<Row> | - | - |
| csvFileItemWriter | CsvFileItemWriter | - | - |
| errorFileWriterListener | ErrorFileWriterListener | - | - |

**Returns**: `Step`


##### StepBuilder(unknown: "importStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### bgJobLauncher() → JobLauncher

**Returns**: `JobLauncher`


##### TaskExecutorJobLauncher() → new

**Returns**: `new`


##### ThreadPoolTaskExecutor() → new

**Returns**: `new`


##### BufferedReader(unknown: reader) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | reader | - | - |

**Returns**: `new`


##### DelimitedLineTokenizer() → new

**Returns**: `new`


##### getNumberOfLinesToSkip(reader: Reader) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reader | Reader | - | - |

**Returns**: `int`


##### BufferedReader(unknown: reader) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | reader | - | - |

**Returns**: `new`


##### DelimitedLineTokenizer() → new

**Returns**: `new`




## Functions

### BatchConfiguration(jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager, unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`



### csvFileItemReader(unknown: @Value("#{jobParameters['s3Key']}") → FlatFileItemReader<Row>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("#{jobParameters['s3Key']}" | - | - |

**Returns**: `FlatFileItemReader<Row>`



### StringReader(String(bytes: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String(bytes | new | - | - |

**Returns**: `new`



### StringReader(String(bytes: new) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| String(bytes | new | - | - |

**Returns**: `new`



### DelimitedLineTokenizer() → new

**Returns**: `new`



### Row(unknown: headers, unknown: fieldSet.getValues() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | headers | - | - |
| unknown | fieldSet.getValues( | - | - |

**Returns**: `new`



### ByteArrayResource(unknown: bytes) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | bytes | - | - |

**Returns**: `new`



### importJob(listener: ErrorFileCreatorListener, importStep: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | ErrorFileCreatorListener | - | - |
| importStep | Step | - | - |

**Returns**: `Job`



### JobBuilder(unknown: "importJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### RunIdIncrementer() → new

**Returns**: `new`



### importStep(csvFileItemReader: FlatFileItemReader<Row>, csvFileItemWriter: CsvFileItemWriter, errorFileWriterListener: ErrorFileWriterListener) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| csvFileItemReader | FlatFileItemReader<Row> | - | - |
| csvFileItemWriter | CsvFileItemWriter | - | - |
| errorFileWriterListener | ErrorFileWriterListener | - | - |

**Returns**: `Step`



### StepBuilder(unknown: "importStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### bgJobLauncher() → JobLauncher

**Returns**: `JobLauncher`



### TaskExecutorJobLauncher() → new

**Returns**: `new`



### ThreadPoolTaskExecutor() → new

**Returns**: `new`



### BufferedReader(unknown: reader) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | reader | - | - |

**Returns**: `new`



### DelimitedLineTokenizer() → new

**Returns**: `new`



### getNumberOfLinesToSkip(reader: Reader) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reader | Reader | - | - |

**Returns**: `int`



### BufferedReader(unknown: reader) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | reader | - | - |

**Returns**: `new`



### DelimitedLineTokenizer() → new

**Returns**: `new`


