# API Reference: ExportCSVFieldExtractor.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/exporter/ExportCSVFieldExtractor.java`

---

## Functions

### StringBuilder() → new

**Returns**: `new`



### ExportCSVFieldExtractor(subjectTypeRepository: SubjectTypeRepository, encounterTypeRepository: EncounterTypeRepository, encounterRepository: EncounterRepository, programEncounterRepository: ProgramEncounterRepository, formMappingService: FormMappingService, addressLevelService: AddressLevelService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subjectTypeRepository | SubjectTypeRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| encounterRepository | EncounterRepository | - | - |
| programEncounterRepository | ProgramEncounterRepository | - | - |
| formMappingService | FormMappingService | - | - |
| addressLevelService | AddressLevelService | - | - |

**Returns**: `public`



### init() → void

**Returns**: `void`



### addGroupSubjectHeaders(headers: StringBuilder) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | StringBuilder | - | - |

**Returns**: `void`



### addEncounterHeaders(maxVisitCount: Long, headers: StringBuilder) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxVisitCount | Long | - | - |
| headers | StringBuilder | - | - |

**Returns**: `void`



### addEnrolmentHeaders(headers: StringBuilder) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | StringBuilder | - | - |

**Returns**: `void`



### addRegistrationHeaders(headers: StringBuilder, subjectType: SubjectType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | StringBuilder | - | - |
| subjectType | SubjectType | - | - |

**Returns**: `void`



### addVoidedColumnIfRequired(headers: StringBuilder, prefix: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | StringBuilder | - | - |
| prefix | String | - | - |

**Returns**: `void`



### addAuditColumns(headers: StringBuilder, prefix: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | StringBuilder | - | - |
| prefix | String | - | - |

**Returns**: `void`



### setEnrolmentMappings() → void

**Returns**: `void`



### getMaxVisitCount() → Long

**Returns**: `Long`



### getCalendarTime(date: Date) → Calendar

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| date | Date | - | - |

**Returns**: `Calendar`



### getTotalMembers(individual: Individual) → long

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `long`



### addGroupSubjectFields(exportItemRow: ExportItemRow, row: List<Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItemRow | ExportItemRow | - | - |
| row | List<Object> | - | - |

**Returns**: `void`



### addVoidedFieldIfRequired(chsEntity: CHSEntity, row: List<Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| chsEntity | CHSEntity | - | - |
| row | List<Object> | - | - |

**Returns**: `void`



### addAuditFields(auditable: Auditable, row: List<Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auditable | Auditable | - | - |
| row | List<Object> | - | - |

**Returns**: `void`



### addProgramEnrolmentFields(exportItemRow: ExportItemRow, row: List<Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItemRow | ExportItemRow | - | - |
| row | List<Object> | - | - |

**Returns**: `void`



### addGeneralEncounterRelatedFields(exportItemRow: ExportItemRow, row: List<Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItemRow | ExportItemRow | - | - |
| row | List<Object> | - | - |

**Returns**: `void`



### addProgramEncounterRelatedFields(exportItemRow: ExportItemRow, row: List<Object>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exportItemRow | ExportItemRow | - | - |
| row | List<Object> | - | - |

**Returns**: `void`



### addEncounter(row: List<Object>, encounter: T, unknown: LinkedHashMap<String, map: FormElement>, unknown: LinkedHashMap<String, cancelMap: FormElement>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | List<Object> | - | - |
| encounter | T | - | - |
| unknown | LinkedHashMap<String | - | - |
| map | FormElement> | - | - |
| unknown | LinkedHashMap<String | - | - |
| cancelMap | FormElement> | - | - |

**Returns**: `void`



### writeHeader(writer: Writer) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| writer | Writer | - | - |

**Returns**: `void`



### appendObsColumns(sb: StringBuilder, prefix: String, unknown: LinkedHashMap<String, map: FormElement>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sb | StringBuilder | - | - |
| prefix | String | - | - |
| unknown | LinkedHashMap<String | - | - |
| map | FormElement> | - | - |

**Returns**: `void`



### QuotedStringValue(text: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | String | - | - |

**Returns**: `String`



### getObs(observations: ObservationCollection, unknown: LinkedHashMap<String, obsMap: FormElement>) → List<Object>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | ObservationCollection | - | - |
| unknown | LinkedHashMap<String | - | - |
| obsMap | FormElement> | - | - |

**Returns**: `List<Object>`



### processDateObs(val: Object) → Object

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| val | Object | - | - |

**Returns**: `Object`



### getDateForTimeZone(DateTime(String.valueOf(val: new) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| DateTime(String.valueOf(val | new | - | - |

**Returns**: `return`



### getDateForTimeZone(dateTime: DateTime) → DateTime

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dateTime | DateTime | - | - |

**Returns**: `DateTime`



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



### QuotedStringValue(unknown: String.join(", unknown: ", unknown: imageURIs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | imageURIs | - | - |

**Returns**: `return`



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



### addAddressLevelColumns(sb: StringBuilder) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sb | StringBuilder | - | - |

**Returns**: `void`



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


