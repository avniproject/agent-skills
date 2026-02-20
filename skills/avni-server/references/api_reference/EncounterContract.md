# API Reference: EncounterContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/rules/RulesContractWrapper/EncounterContract.java`

---

## Classes

### EncounterContract

**Inherits from**: RuleServerEntityContract

#### Methods

##### getEntityApprovalStatuses() → List<EntityApprovalStatusWrapper>

**Returns**: `List<EntityApprovalStatusWrapper>`


##### setEntityApprovalStatuses(entityApprovalStatuses: List<EntityApprovalStatusWrapper>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatuses | List<EntityApprovalStatusWrapper> | - | - |

**Returns**: `void`


##### getVoided() → Boolean

**Returns**: `Boolean`


##### setVoided(voided: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| voided | Boolean | - | - |

**Returns**: `void`


##### getUuid() → String

**Returns**: `String`


##### setUuid(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getEncounterType() → EntityTypeContract

**Returns**: `EntityTypeContract`


##### setEncounterType(encounterType: EntityTypeContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EntityTypeContract | - | - |

**Returns**: `void`


##### getCancelDateTime() → DateTime

**Returns**: `DateTime`


##### setCancelDateTime(cancelDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelDateTime | DateTime | - | - |

**Returns**: `void`


##### getEarliestVisitDateTime() → DateTime

**Returns**: `DateTime`


##### setEarliestVisitDateTime(earliestVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| earliestVisitDateTime | DateTime | - | - |

**Returns**: `void`


##### getMaxVisitDateTime() → DateTime

**Returns**: `DateTime`


##### setMaxVisitDateTime(maxVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxVisitDateTime | DateTime | - | - |

**Returns**: `void`


##### getEncounterDateTime() → DateTime

**Returns**: `DateTime`


##### setEncounterDateTime(encounterDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDateTime | DateTime | - | - |

**Returns**: `void`


##### getCancelObservations() → List<ObservationModelContract>

**Returns**: `List<ObservationModelContract>`


##### setCancelObservations(cancelObservations: List<ObservationModelContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelObservations | List<ObservationModelContract> | - | - |

**Returns**: `void`


##### getObservations() → List<ObservationModelContract>

**Returns**: `List<ObservationModelContract>`


##### setObservations(observations: List<ObservationModelContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationModelContract> | - | - |

**Returns**: `void`


##### getRule() → RuleRequestEntity

**Returns**: `RuleRequestEntity`


##### setRule(rule: RuleRequestEntity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | RuleRequestEntity | - | - |

**Returns**: `void`


##### getSubject() → IndividualContract

**Returns**: `IndividualContract`


##### setSubject(subject: IndividualContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | IndividualContract | - | - |

**Returns**: `void`


##### fromEncounter(encounter: Encounter, observationService: ObservationService, entityApprovalStatusService: EntityApprovalStatusService) → EncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |
| observationService | ObservationService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |

**Returns**: `EncounterContract`


##### EncounterContract() → new

**Returns**: `new`


##### getVisitSchedules() → List<VisitSchedule>

**Returns**: `List<VisitSchedule>`


##### setVisitSchedules(visitSchedules: List<VisitSchedule>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitSchedules | List<VisitSchedule> | - | - |

**Returns**: `void`




## Functions

### getEntityApprovalStatuses() → List<EntityApprovalStatusWrapper>

**Returns**: `List<EntityApprovalStatusWrapper>`



### setEntityApprovalStatuses(entityApprovalStatuses: List<EntityApprovalStatusWrapper>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatuses | List<EntityApprovalStatusWrapper> | - | - |

**Returns**: `void`



### getVoided() → Boolean

**Returns**: `Boolean`



### setVoided(voided: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| voided | Boolean | - | - |

**Returns**: `void`



### getUuid() → String

**Returns**: `String`



### setUuid(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getEncounterType() → EntityTypeContract

**Returns**: `EntityTypeContract`



### setEncounterType(encounterType: EntityTypeContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterType | EntityTypeContract | - | - |

**Returns**: `void`



### getCancelDateTime() → DateTime

**Returns**: `DateTime`



### setCancelDateTime(cancelDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelDateTime | DateTime | - | - |

**Returns**: `void`



### getEarliestVisitDateTime() → DateTime

**Returns**: `DateTime`



### setEarliestVisitDateTime(earliestVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| earliestVisitDateTime | DateTime | - | - |

**Returns**: `void`



### getMaxVisitDateTime() → DateTime

**Returns**: `DateTime`



### setMaxVisitDateTime(maxVisitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| maxVisitDateTime | DateTime | - | - |

**Returns**: `void`



### getEncounterDateTime() → DateTime

**Returns**: `DateTime`



### setEncounterDateTime(encounterDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDateTime | DateTime | - | - |

**Returns**: `void`



### getCancelObservations() → List<ObservationModelContract>

**Returns**: `List<ObservationModelContract>`



### setCancelObservations(cancelObservations: List<ObservationModelContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cancelObservations | List<ObservationModelContract> | - | - |

**Returns**: `void`



### getObservations() → List<ObservationModelContract>

**Returns**: `List<ObservationModelContract>`



### setObservations(observations: List<ObservationModelContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationModelContract> | - | - |

**Returns**: `void`



### getRule() → RuleRequestEntity

**Returns**: `RuleRequestEntity`



### setRule(rule: RuleRequestEntity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | RuleRequestEntity | - | - |

**Returns**: `void`



### getSubject() → IndividualContract

**Returns**: `IndividualContract`



### setSubject(subject: IndividualContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject | IndividualContract | - | - |

**Returns**: `void`



### fromEncounter(encounter: Encounter, observationService: ObservationService, entityApprovalStatusService: EntityApprovalStatusService) → EncounterContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter | Encounter | - | - |
| observationService | ObservationService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |

**Returns**: `EncounterContract`



### EncounterContract() → new

**Returns**: `new`



### getVisitSchedules() → List<VisitSchedule>

**Returns**: `List<VisitSchedule>`



### setVisitSchedules(visitSchedules: List<VisitSchedule>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitSchedules | List<VisitSchedule> | - | - |

**Returns**: `void`


