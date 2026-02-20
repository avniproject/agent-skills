# API Reference: EncounterService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/EncounterService.java`

---

## Functions

### EncounterService(encounterRepository: EncounterRepository, observationService: ObservationService, individualRepository: IndividualRepository, encounterTypeRepository: EncounterTypeRepository, encounterSearchRepository: EncounterSearchRepository, accessControlService: AccessControlService, formMappingService: FormMappingService, conceptRepository: ConceptRepository, mediaObservationService: MediaObservationService, userService: UserService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterRepository | EncounterRepository | - | - |
| observationService | ObservationService | - | - |
| individualRepository | IndividualRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| encounterSearchRepository | EncounterSearchRepository | - | - |
| accessControlService | AccessControlService | - | - |
| formMappingService | FormMappingService | - | - |
| conceptRepository | ConceptRepository | - | - |
| mediaObservationService | MediaObservationService | - | - |
| userService | UserService | - | - |

**Returns**: `public`



### getEncounterByUuid(uuid: String) → EncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `EncounterContract`



### constructEncounter(unknown: encounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter | - | - |

**Returns**: `return`



### getAllCompletedEncounters(uuid: String, encounterTypeUuids: String, encounterDateTime: DateTime, earliestVisitDateTime: DateTime, pageable: Pageable) → Page<EncounterContract>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| encounterTypeUuids | String | - | - |
| encounterDateTime | DateTime | - | - |
| earliestVisitDateTime | DateTime | - | - |
| pageable | Pageable | - | - |

**Returns**: `Page<EncounterContract>`



### constructEncounter(encounter: Encounter) → EncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |

**Returns**: `EncounterContract`



### EncounterContract() → new

**Returns**: `new`



### EntityTypeContract() → new

**Returns**: `new`



### scheduledEncountersByType(individual: Individual, encounterTypeName: String, currentEncounterUuid: String) → List<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| encounterTypeName | String | - | - |
| currentEncounterUuid | String | - | - |

**Returns**: `List<Encounter>`



### saveVisitSchedules(individualUuid: String, visitSchedules: List<VisitSchedule>, currentEncounterUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individualUuid | String | - | - |
| visitSchedules | List<VisitSchedule> | - | - |
| currentEncounterUuid | String | - | - |

**Returns**: `void`



### saveVisitSchedule(individual: Individual, visitSchedule: VisitSchedule, currentEncounterUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| visitSchedule | VisitSchedule | - | - |
| currentEncounterUuid | String | - | - |

**Returns**: `void`



### BadRequestError(scheduled: "Next, unknown: visitSchedule.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scheduled | "Next | - | - |
| unknown | visitSchedule.getName( | - | - |

**Returns**: `new`



### updateEncounterWithVisitSchedule(encounter: Encounter, visitSchedule: VisitSchedule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |
| visitSchedule | VisitSchedule | - | - |

**Returns**: `void`



### createEmptyEncounter(individual: Individual, encounterType: EncounterType) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| encounterType | EncounterType | - | - |

**Returns**: `Encounter`



### Encounter() → new

**Returns**: `new`



### ObservationCollection() → new

**Returns**: `new`



### ObservationCollection() → new

**Returns**: `new`



### isScopeEntityChanged(lastModifiedDateTime: DateTime, encounterTypeUuid: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |
| encounterTypeUuid | String | - | - |

**Returns**: `boolean`



### repository() → OperatingIndividualScopeAwareRepository<Encounter>

**Returns**: `OperatingIndividualScopeAwareRepository<Encounter>`



### save(encounter: Encounter) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |

**Returns**: `Encounter`



### search(encounterSearchRequest: EncounterSearchRequest) → Page<Encounter>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterSearchRequest | EncounterSearchRequest | - | - |

**Returns**: `Page<Encounter>`



### getFormMapping(encounter: Encounter) → FormMapping

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |

**Returns**: `FormMapping`



### patchEncounter(encounter: Encounter, unknown: Map<String, request: Object>) → Encounter

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |
| unknown | Map<String | - | - |
| request | Object> | - | - |

**Returns**: `Encounter`



### save(unknown: encounter) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | encounter | - | - |

**Returns**: `return`


