# API Reference: ExportV2CSVFieldExtractor.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/v2/ExportV2CSVFieldExtractor.java`

---

## Functions

### ExportV2CSVFieldExtractor(encounterRepository: EncounterRepository, programEncounterRepository: ProgramEncounterRepository, formMappingService: FormMappingService, unknown: @Value("#{jobParameters['exportJobParamsUUID']}") → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterRepository | EncounterRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| formMappingService | FormMappingService | - | - |
| unknown | @Value("#{jobParameters['exportJobParamsUUID']}" | - | - |

**Returns**: `public`



### init() → void

**Returns**: `void`



### ExportFieldsManager(unknown: formMappingService, unknown: encounterRepository, unknown: programEncounterRepository, unknown: timeZone) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formMappingService | - | - |
| unknown | encounterRepository | - | - |
| unknown | programEncounterRepository | - | - |
| unknown | timeZone | - | - |

**Returns**: `new`



### HeaderCreator(unknown: subjectTypeRepository, unknown: addressLevelTypes, unknown: maxNumberOfQuestionGroupObservations, unknown: encounterTypeRepository, unknown: exportFieldsManager, unknown: programRepository) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | subjectTypeRepository | - | - |
| unknown | addressLevelTypes | - | - |
| unknown | maxNumberOfQuestionGroupObservations | - | - |
| unknown | encounterTypeRepository | - | - |
| unknown | exportFieldsManager | - | - |
| unknown | programRepository | - | - |

**Returns**: `new`



### writeHeader(writer: Writer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| writer | Writer | - | - |

**Returns**: `void`



### getExportOutput() → ExportOutput

**Returns**: `ExportOutput`



### createRow(unknown: individual) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individual | - | - |

**Returns**: `return`



### addBlanks(unknown: columnsData, unknown: 1) → addressLevels

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | columnsData | - | - |
| unknown | 1 | - | - |

**Returns**: `addressLevels`



### addRegistrationColumns(columnsData: List<Object>, individual: Individual, unknown: Map<String, registrationMap: FormElement>, coreFields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnsData | List<Object> | - | - |
| individual | Individual | - | - |
| unknown | Map<String | - | - |
| registrationMap | FormElement> | - | - |
| coreFields | List<String> | - | - |

**Returns**: `void`



### addStaticRegistrationColumns(columnsData: List<Object>, individual: Individual, unknown: Map<String, registrationDataMap: HeaderNameAndFunctionMapper<Individual>>, fields: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnsData | List<Object> | - | - |
| individual | Individual | - | - |
| unknown | Map<String | - | - |
| registrationDataMap | HeaderNameAndFunctionMapper<Individual>> | - | - |
| fields | List<String> | - | - |

**Returns**: `void`



### addEnrolmentColumns(columnsData: List<Object>, programEnrolment: ProgramEnrolment, unknown: Map<String, enrolmentMap: FormElement>, unknown: Map<String, exitEnrolmentMap: FormElement>, program: ExportOutput.ExportNestedOutput) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| columnsData | List<Object> | - | - |
| programEnrolment | ProgramEnrolment | - | - |
| unknown | Map<String | - | - |
| enrolmentMap | FormElement> | - | - |
| unknown | Map<String | - | - |
| exitEnrolmentMap | FormElement> | - | - |
| program | ExportOutput.ExportNestedOutput | - | - |

**Returns**: `void`



### addEncounterColumns(maxVisitCount: Long, columnsData: List<Object>, encounters: List<T>, unknown: Map<String, map: FormElement>, unknown: Map<String, cancelMap: FormElement>, encounterEntityType: ExportEntityType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxVisitCount | Long | - | - |
| columnsData | List<Object> | - | - |
| encounters | List<T> | - | - |
| unknown | Map<String | - | - |
| map | FormElement> | - | - |
| unknown | Map<String | - | - |
| cancelMap | FormElement> | - | - |
| encounterEntityType | ExportEntityType | - | - |

**Returns**: `void`



### AtomicInteger(unknown: 0) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 0 | - | - |

**Returns**: `new`



### addStaticEnrolmentColumns(program: ExportOutput.ExportNestedOutput, columnsData: List<Object>, programEnrolment: ProgramEnrolment, unknown: Map<String, enrolmentDataMap: HeaderNameAndFunctionMapper<ProgramEnrolment>>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| program | ExportOutput.ExportNestedOutput | - | - |
| columnsData | List<Object> | - | - |
| programEnrolment | ProgramEnrolment | - | - |
| unknown | Map<String | - | - |
| enrolmentDataMap | HeaderNameAndFunctionMapper<ProgramEnrolment>> | - | - |

**Returns**: `void`



### appendStaticEncounterColumns(encounterEntityType: ExportEntityType, columnsData: List<Object>, encounter: AbstractEncounter, unknown: Map<String, encounterDataMap: HeaderNameAndFunctionMapper<AbstractEncounter>>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterEntityType | ExportEntityType | - | - |
| columnsData | List<Object> | - | - |
| encounter | AbstractEncounter | - | - |
| unknown | Map<String | - | - |
| encounterDataMap | HeaderNameAndFunctionMapper<AbstractEncounter>> | - | - |

**Returns**: `void`



### getTotalMembers(individual: Individual) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `long`



### addObservations(observations: ObservationCollection, unknown: Map<String, obsMap: FormElement>) → List<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |
| unknown | Map<String | - | - |
| obsMap | FormElement> | - | - |

**Returns**: `List<Object>`



### addObservation(values: List<Object>, formElement: FormElement, val: Object) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| values | List<Object> | - | - |
| formElement | FormElement | - | - |
| val | Object | - | - |

**Returns**: `void`



### processDateObs(val: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| val | Object | - | - |

**Returns**: `Object`



### DateTime(unknown: String.valueOf(val) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.valueOf(val | - | - |

**Returns**: `new`



### processCodedObs(formType: String, val: Object, formElement: FormElement) → List<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | String | - | - |
| val | Object | - | - |
| formElement | FormElement | - | - |

**Returns**: `List<Object>`



### getObservationValueList(val: Object) → List<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| val | Object | - | - |

**Returns**: `List<Object>`



### processMediaObs(val: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| val | Object | - | - |

**Returns**: `String`



### getFieldValue(unknown: String.join(", unknown: ", unknown: imageURIs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | imageURIs | - | - |

**Returns**: `return`



### getFieldValue(value: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | String | - | - |

**Returns**: `String`



### getAnsName(concept: Concept, val: Object) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| val | Object | - | - |

**Returns**: `String`



### getAns(concept: Concept, val: List<Object>) → List<String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |
| val | List<Object> | - | - |

**Returns**: `List<String>`



### addAddressLevels(row: List<Object>, addressLevel: AddressLevel) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | List<Object> | - | - |
| addressLevel | AddressLevel | - | - |

**Returns**: `void`



### getAddressTypeAddressLevelMap(addressLevel: AddressLevel, parentLocationMapping: ParentLocationMapping) → Map<String, String>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addressLevel | AddressLevel | - | - |
| parentLocationMapping | ParentLocationMapping | - | - |

**Returns**: `Map<String, String>`



### addBlanks(row: List<Object>, noOfColumns: long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | List<Object> | - | - |
| noOfColumns | long | - | - |

**Returns**: `void`



### QuotedStringValue(text: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | String | - | - |

**Returns**: `String`


