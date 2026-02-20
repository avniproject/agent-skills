# API Reference: ProgramEnrolmentContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/rules/RulesContractWrapper/ProgramEnrolmentContract.java`

---

## Classes

### ProgramEnrolmentContract

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


##### getChecklistDetails() → List<ChecklistDetailRequest>

**Returns**: `List<ChecklistDetailRequest>`


##### setChecklistDetails(checklistDetails: List<ChecklistDetailRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetails | List<ChecklistDetailRequest> | - | - |

**Returns**: `void`


##### getOperationalProgramName() → String

**Returns**: `String`


##### setOperationalProgramName(operationalProgramName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramName | String | - | - |

**Returns**: `void`


##### getEnrolmentDateTime() → DateTime

**Returns**: `DateTime`


##### setEnrolmentDateTime(enrolmentDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentDateTime | DateTime | - | - |

**Returns**: `void`


##### getProgramExitDateTime() → DateTime

**Returns**: `DateTime`


##### setProgramExitDateTime(programExitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programExitDateTime | DateTime | - | - |

**Returns**: `void`


##### getUuid() → String

**Returns**: `String`


##### setUuid(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`


##### getVoided() → Boolean

**Returns**: `Boolean`


##### setVoided(voided: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| voided | Boolean | - | - |

**Returns**: `void`


##### getProgramEncounters() → Set<ProgramEncounterContract>

**Returns**: `Set<ProgramEncounterContract>`


##### setProgramEncounters(programEncounters: Set<ProgramEncounterContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounters | Set<ProgramEncounterContract> | - | - |

**Returns**: `void`


##### getObservations() → List<ObservationModelContract>

**Returns**: `List<ObservationModelContract>`


##### setObservations(observations: List<ObservationModelContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationModelContract> | - | - |

**Returns**: `void`


##### getExitObservations() → List<ObservationModelContract>

**Returns**: `List<ObservationModelContract>`


##### setExitObservations(exitObservations: List<ObservationModelContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exitObservations | List<ObservationModelContract> | - | - |

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


##### getVisitSchedules() → List<VisitSchedule>

**Returns**: `List<VisitSchedule>`


##### setVisitSchedules(visitSchedules: List<VisitSchedule>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitSchedules | List<VisitSchedule> | - | - |

**Returns**: `void`


##### fromEnrolment(enrolment: ProgramEnrolment, observationService: ObservationService, entityApprovalStatusService: EntityApprovalStatusService) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolment | ProgramEnrolment | - | - |
| observationService | ObservationService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |

**Returns**: `ProgramEnrolmentContract`


##### ProgramEnrolmentContract() → new

**Returns**: `new`




## Functions

### getEntityApprovalStatuses() → List<EntityApprovalStatusWrapper>

**Returns**: `List<EntityApprovalStatusWrapper>`



### setEntityApprovalStatuses(entityApprovalStatuses: List<EntityApprovalStatusWrapper>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityApprovalStatuses | List<EntityApprovalStatusWrapper> | - | - |

**Returns**: `void`



### getChecklistDetails() → List<ChecklistDetailRequest>

**Returns**: `List<ChecklistDetailRequest>`



### setChecklistDetails(checklistDetails: List<ChecklistDetailRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistDetails | List<ChecklistDetailRequest> | - | - |

**Returns**: `void`



### getOperationalProgramName() → String

**Returns**: `String`



### setOperationalProgramName(operationalProgramName: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operationalProgramName | String | - | - |

**Returns**: `void`



### getEnrolmentDateTime() → DateTime

**Returns**: `DateTime`



### setEnrolmentDateTime(enrolmentDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolmentDateTime | DateTime | - | - |

**Returns**: `void`



### getProgramExitDateTime() → DateTime

**Returns**: `DateTime`



### setProgramExitDateTime(programExitDateTime: DateTime) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programExitDateTime | DateTime | - | - |

**Returns**: `void`



### getUuid() → String

**Returns**: `String`



### setUuid(uuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `void`



### getVoided() → Boolean

**Returns**: `Boolean`



### setVoided(voided: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| voided | Boolean | - | - |

**Returns**: `void`



### getProgramEncounters() → Set<ProgramEncounterContract>

**Returns**: `Set<ProgramEncounterContract>`



### setProgramEncounters(programEncounters: Set<ProgramEncounterContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounters | Set<ProgramEncounterContract> | - | - |

**Returns**: `void`



### getObservations() → List<ObservationModelContract>

**Returns**: `List<ObservationModelContract>`



### setObservations(observations: List<ObservationModelContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | List<ObservationModelContract> | - | - |

**Returns**: `void`



### getExitObservations() → List<ObservationModelContract>

**Returns**: `List<ObservationModelContract>`



### setExitObservations(exitObservations: List<ObservationModelContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exitObservations | List<ObservationModelContract> | - | - |

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



### getVisitSchedules() → List<VisitSchedule>

**Returns**: `List<VisitSchedule>`



### setVisitSchedules(visitSchedules: List<VisitSchedule>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitSchedules | List<VisitSchedule> | - | - |

**Returns**: `void`



### fromEnrolment(enrolment: ProgramEnrolment, observationService: ObservationService, entityApprovalStatusService: EntityApprovalStatusService) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| enrolment | ProgramEnrolment | - | - |
| observationService | ObservationService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |

**Returns**: `ProgramEnrolmentContract`



### ProgramEnrolmentContract() → new

**Returns**: `new`


