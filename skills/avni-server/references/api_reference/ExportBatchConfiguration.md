# API Reference: ExportBatchConfiguration.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/ExportBatchConfiguration.java`

---

## Classes

### ExportBatchConfiguration

**Inherits from**: (none)

#### Methods

##### ExportBatchConfiguration(programEnrolmentRepository: ProgramEnrolmentRepository, individualRepository: IndividualRepository, groupSubjectRepository: GroupSubjectRepository, authService: AuthService, exportS3Service: ExportS3Service, locationRepository: LocationRepository, subjectTypeRepository: SubjectTypeRepository, encounterTypeRepository: EncounterTypeRepository, programRepository: ProgramRepository, entityManager: EntityManager, jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager, unknown: @Value("${avni.longitudinal.export.v2.limit}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| authService | AuthService | - | - |
| exportS3Service | ExportS3Service | - | - |
| locationRepository | LocationRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| entityManager | EntityManager | - | - |
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |
| unknown | @Value("${avni.longitudinal.export.v2.limit}" | - | - |

**Returns**: `public`


##### exportVisitJob(listener: JobCompletionNotificationListener, step1: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | JobCompletionNotificationListener | - | - |
| step1 | Step | - | - |

**Returns**: `Job`


##### JobBuilder(unknown: "exportVisitJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "exportVisitJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### RunIdIncrementer() → new

**Returns**: `new`


##### exportV2Job(listener: JobCompletionNotificationListener, exportV2Step: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | JobCompletionNotificationListener | - | - |
| exportV2Step | Step | - | - |

**Returns**: `Job`


##### JobBuilder(unknown: "exportV2Job", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "exportV2Job" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### RunIdIncrementer() → new

**Returns**: `new`


##### exportV2Step(exportV2Tasklet: Tasklet, listener: LongitudinalExportJobStepListener) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportV2Tasklet | Tasklet | - | - |
| listener | LongitudinalExportJobStepListener | - | - |

**Returns**: `Step`


##### StepBuilder(unknown: "exportV2Step", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "exportV2Step" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### exportV2Tasklet(unknown: @Value("#{jobParameters['uuid']}") → Tasklet

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("#{jobParameters['uuid']}" | - | - |

**Returns**: `Tasklet`


##### LongitudinalExportV2TaskletImpl(unknown: CHUNK_SIZE, unknown: entityManager, unknown: exportV2CSVFieldExtractor, unknown: exportV2Processor, unknown: exportS3Service, unknown: uuid, unknown: alteredStream) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | CHUNK_SIZE | - | - |
| unknown | entityManager | - | - |
| unknown | exportV2CSVFieldExtractor | - | - |
| unknown | exportV2Processor | - | - |
| unknown | exportS3Service | - | - |
| unknown | uuid | - | - |
| unknown | alteredStream | - | - |

**Returns**: `new`


##### truncateStream(stream: Stream) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stream | Stream | - | - |

**Returns**: `Stream`


##### step1(tasklet: Tasklet, listener: LongitudinalExportJobStepListener) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tasklet | Tasklet | - | - |
| listener | LongitudinalExportJobStepListener | - | - |

**Returns**: `Step`


##### StepBuilder(unknown: "step1", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "step1" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`


##### tasklet(unknown: @Value("#{jobParameters['uuid']}") → Tasklet

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("#{jobParameters['uuid']}" | - | - |

**Returns**: `Tasklet`


##### LocalDate(unknown: startDate, unknown: dateTimeZone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | startDate | - | - |
| unknown | dateTimeZone | - | - |

**Returns**: `new`


##### LocalDate(unknown: endDate, unknown: dateTimeZone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | endDate | - | - |
| unknown | dateTimeZone | - | - |

**Returns**: `new`


##### DateTime(unknown: startDate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | startDate | - | - |

**Returns**: `new`


##### DateTime(unknown: endDate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | endDate | - | - |

**Returns**: `new`


##### RuntimeException(report: format("Unknown, unknown: reportType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| report | format("Unknown | - | - |
| unknown | reportType | - | - |

**Returns**: `new`


##### LongitudinalExportTaskletImpl(unknown: CHUNK_SIZE, unknown: entityManager, unknown: exportCSVFieldExtractor, unknown: exportProcessor, unknown: exportS3Service, unknown: uuid, unknown: alteredStream) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | CHUNK_SIZE | - | - |
| unknown | entityManager | - | - |
| unknown | exportCSVFieldExtractor | - | - |
| unknown | exportProcessor | - | - |
| unknown | exportS3Service | - | - |
| unknown | uuid | - | - |
| unknown | alteredStream | - | - |

**Returns**: `new`


##### getGroupSubjectStream(subjectTypeUUID: String, addressParam: List<Long>, startDate: LocalDate, endDate: LocalDate, unknown: Map<String, sorts: Sort.Direction>, isVoidedIncluded: boolean) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| addressParam | List<Long> | - | - |
| startDate | LocalDate | - | - |
| endDate | LocalDate | - | - |
| unknown | Map<String | - | - |
| sorts | Sort.Direction> | - | - |
| isVoidedIncluded | boolean | - | - |

**Returns**: `Stream`


##### getEncounterStream(programUUID: String, encounterTypeUUID: String, addressParam: List<Long>, startDateTime: DateTime, endDateTime: DateTime, isVoidedIncluded: boolean) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUUID | String | - | - |
| encounterTypeUUID | String | - | - |
| addressParam | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |
| isVoidedIncluded | boolean | - | - |

**Returns**: `Stream`


##### getEnrolmentStream(programUUID: String, addressParam: List<Long>, startDateTime: DateTime, endDateTime: DateTime, isVoidedIncluded: boolean) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUUID | String | - | - |
| addressParam | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |
| isVoidedIncluded | boolean | - | - |

**Returns**: `Stream`


##### getRegistrationStream(subjectTypeUUID: String, addressParam: List<Long>, startDateTime: LocalDate, endDateTime: LocalDate, includeVoided: boolean) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| addressParam | List<Long> | - | - |
| startDateTime | LocalDate | - | - |
| endDateTime | LocalDate | - | - |
| includeVoided | boolean | - | - |

**Returns**: `Stream`


##### getLocations(locationIds: List<Long>) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |

**Returns**: `List<Long>`


##### findLowestAddresses(selectedAddress: AddressLevel, allAddresses: List<AddressLevel>) → Stream<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selectedAddress | AddressLevel | - | - |
| allAddresses | List<AddressLevel> | - | - |

**Returns**: `Stream<AddressLevel>`




## Functions

### ExportBatchConfiguration(programEnrolmentRepository: ProgramEnrolmentRepository, individualRepository: IndividualRepository, groupSubjectRepository: GroupSubjectRepository, authService: AuthService, exportS3Service: ExportS3Service, locationRepository: LocationRepository, subjectTypeRepository: SubjectTypeRepository, encounterTypeRepository: EncounterTypeRepository, programRepository: ProgramRepository, entityManager: EntityManager, jobRepository: JobRepository, platformTransactionManager: PlatformTransactionManager, unknown: @Value("${avni.longitudinal.export.v2.limit}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |
| authService | AuthService | - | - |
| exportS3Service | ExportS3Service | - | - |
| locationRepository | LocationRepository | - | - |
| subjectTypeRepository | SubjectTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| programRepository | ProgramRepository | - | - |
| entityManager | EntityManager | - | - |
| jobRepository | JobRepository | - | - |
| platformTransactionManager | PlatformTransactionManager | - | - |
| unknown | @Value("${avni.longitudinal.export.v2.limit}" | - | - |

**Returns**: `public`



### exportVisitJob(listener: JobCompletionNotificationListener, step1: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | JobCompletionNotificationListener | - | - |
| step1 | Step | - | - |

**Returns**: `Job`



### JobBuilder(unknown: "exportVisitJob", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "exportVisitJob" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### RunIdIncrementer() → new

**Returns**: `new`



### exportV2Job(listener: JobCompletionNotificationListener, exportV2Step: Step) → Job

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| listener | JobCompletionNotificationListener | - | - |
| exportV2Step | Step | - | - |

**Returns**: `Job`



### JobBuilder(unknown: "exportV2Job", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "exportV2Job" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### RunIdIncrementer() → new

**Returns**: `new`



### exportV2Step(exportV2Tasklet: Tasklet, listener: LongitudinalExportJobStepListener) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportV2Tasklet | Tasklet | - | - |
| listener | LongitudinalExportJobStepListener | - | - |

**Returns**: `Step`



### StepBuilder(unknown: "exportV2Step", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "exportV2Step" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### exportV2Tasklet(unknown: @Value("#{jobParameters['uuid']}") → Tasklet

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("#{jobParameters['uuid']}" | - | - |

**Returns**: `Tasklet`



### LongitudinalExportV2TaskletImpl(unknown: CHUNK_SIZE, unknown: entityManager, unknown: exportV2CSVFieldExtractor, unknown: exportV2Processor, unknown: exportS3Service, unknown: uuid, unknown: alteredStream) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | CHUNK_SIZE | - | - |
| unknown | entityManager | - | - |
| unknown | exportV2CSVFieldExtractor | - | - |
| unknown | exportV2Processor | - | - |
| unknown | exportS3Service | - | - |
| unknown | uuid | - | - |
| unknown | alteredStream | - | - |

**Returns**: `new`



### truncateStream(stream: Stream) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stream | Stream | - | - |

**Returns**: `Stream`



### step1(tasklet: Tasklet, listener: LongitudinalExportJobStepListener) → Step

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tasklet | Tasklet | - | - |
| listener | LongitudinalExportJobStepListener | - | - |

**Returns**: `Step`



### StepBuilder(unknown: "step1", unknown: jobRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | "step1" | - | - |
| unknown | jobRepository | - | - |

**Returns**: `new`



### tasklet(unknown: @Value("#{jobParameters['uuid']}") → Tasklet

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | @Value("#{jobParameters['uuid']}" | - | - |

**Returns**: `Tasklet`



### LocalDate(unknown: startDate, unknown: dateTimeZone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | startDate | - | - |
| unknown | dateTimeZone | - | - |

**Returns**: `new`



### LocalDate(unknown: endDate, unknown: dateTimeZone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | endDate | - | - |
| unknown | dateTimeZone | - | - |

**Returns**: `new`



### DateTime(unknown: startDate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | startDate | - | - |

**Returns**: `new`



### DateTime(unknown: endDate) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | endDate | - | - |

**Returns**: `new`



### RuntimeException(report: format("Unknown, unknown: reportType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| report | format("Unknown | - | - |
| unknown | reportType | - | - |

**Returns**: `new`



### LongitudinalExportTaskletImpl(unknown: CHUNK_SIZE, unknown: entityManager, unknown: exportCSVFieldExtractor, unknown: exportProcessor, unknown: exportS3Service, unknown: uuid, unknown: alteredStream) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | CHUNK_SIZE | - | - |
| unknown | entityManager | - | - |
| unknown | exportCSVFieldExtractor | - | - |
| unknown | exportProcessor | - | - |
| unknown | exportS3Service | - | - |
| unknown | uuid | - | - |
| unknown | alteredStream | - | - |

**Returns**: `new`



### getGroupSubjectStream(subjectTypeUUID: String, addressParam: List<Long>, startDate: LocalDate, endDate: LocalDate, unknown: Map<String, sorts: Sort.Direction>, isVoidedIncluded: boolean) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| addressParam | List<Long> | - | - |
| startDate | LocalDate | - | - |
| endDate | LocalDate | - | - |
| unknown | Map<String | - | - |
| sorts | Sort.Direction> | - | - |
| isVoidedIncluded | boolean | - | - |

**Returns**: `Stream`



### getEncounterStream(programUUID: String, encounterTypeUUID: String, addressParam: List<Long>, startDateTime: DateTime, endDateTime: DateTime, isVoidedIncluded: boolean) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUUID | String | - | - |
| encounterTypeUUID | String | - | - |
| addressParam | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |
| isVoidedIncluded | boolean | - | - |

**Returns**: `Stream`



### getEnrolmentStream(programUUID: String, addressParam: List<Long>, startDateTime: DateTime, endDateTime: DateTime, isVoidedIncluded: boolean) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programUUID | String | - | - |
| addressParam | List<Long> | - | - |
| startDateTime | DateTime | - | - |
| endDateTime | DateTime | - | - |
| isVoidedIncluded | boolean | - | - |

**Returns**: `Stream`



### getRegistrationStream(subjectTypeUUID: String, addressParam: List<Long>, startDateTime: LocalDate, endDateTime: LocalDate, includeVoided: boolean) → Stream

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeUUID | String | - | - |
| addressParam | List<Long> | - | - |
| startDateTime | LocalDate | - | - |
| endDateTime | LocalDate | - | - |
| includeVoided | boolean | - | - |

**Returns**: `Stream`



### getLocations(locationIds: List<Long>) → List<Long>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| locationIds | List<Long> | - | - |

**Returns**: `List<Long>`



### findLowestAddresses(selectedAddress: AddressLevel, allAddresses: List<AddressLevel>) → Stream<AddressLevel>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| selectedAddress | AddressLevel | - | - |
| allAddresses | List<AddressLevel> | - | - |

**Returns**: `Stream<AddressLevel>`


