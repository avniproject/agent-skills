# API Reference: ZipJobBatchConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/zip/ZipJobBatchConfiguration.java`

---

## Classes

### ZipJobBatchConfiguration

**Inherits from**: (none)

#### Methods

##### ZipJobBatchConfiguration(jobRepository: JobRepository, unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`


##### zipItemReader(unknown: @Value("#{jobParameters['s3Key']}") → ItemReader<BundleFile>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("#{jobParameters['s3Key']}" | - | - |

**Returns**: `ItemReader<BundleFile>`


##### ZipItemReader(unknown: s3Service.getObjectContent(s3Key) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s3Service.getObjectContent(s3Key | - | - |

**Returns**: `new`


##### importZipJob(importZipStep: Step, zipJobCompletionNotificationListener: ZipJobCompletionNotificationListener) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| importZipStep | Step | - | - |
| zipJobCompletionNotificationListener | ZipJobCompletionNotificationListener | - | - |

**Returns**: `Job`


##### JobBuilder(unknown: "importZipJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importZipJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### RunIdIncrementer() → new

**Returns**: `new`


##### importZipStep(zipErrorFileWriterListener: ZipErrorFileWriterListener, zipItemReader: ItemReader<BundleFile>, bundleZipFileImporter: BundleZipFileImporter, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zipErrorFileWriterListener | ZipErrorFileWriterListener | - | - |
| zipItemReader | ItemReader<BundleFile> | - | - |
| bundleZipFileImporter | BundleZipFileImporter | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`


##### StepBuilder(unknown: "importZipStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importZipStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`




## Functions

### ZipJobBatchConfiguration(jobRepository: JobRepository, unknown: @Qualifier("BatchS3Service") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| jobRepository | JobRepository | - | - |
| unknown | @Qualifier("BatchS3Service" | - | - |

**Returns**: `public`



### zipItemReader(unknown: @Value("#{jobParameters['s3Key']}") → ItemReader<BundleFile>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("#{jobParameters['s3Key']}" | - | - |

**Returns**: `ItemReader<BundleFile>`



### ZipItemReader(unknown: s3Service.getObjectContent(s3Key) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | s3Service.getObjectContent(s3Key | - | - |

**Returns**: `new`



### importZipJob(importZipStep: Step, zipJobCompletionNotificationListener: ZipJobCompletionNotificationListener) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| importZipStep | Step | - | - |
| zipJobCompletionNotificationListener | ZipJobCompletionNotificationListener | - | - |

**Returns**: `Job`



### JobBuilder(unknown: "importZipJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importZipJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### RunIdIncrementer() → new

**Returns**: `new`



### importZipStep(zipErrorFileWriterListener: ZipErrorFileWriterListener, zipItemReader: ItemReader<BundleFile>, bundleZipFileImporter: BundleZipFileImporter, platformTransactionManager: PlatformTransactionManager) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| zipErrorFileWriterListener | ZipErrorFileWriterListener | - | - |
| zipItemReader | ItemReader<BundleFile> | - | - |
| bundleZipFileImporter | BundleZipFileImporter | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |

**Returns**: `Step`



### StepBuilder(unknown: "importZipStep", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "importZipStep" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


