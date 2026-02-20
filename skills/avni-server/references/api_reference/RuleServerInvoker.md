# API Reference: RuleServerInvoker.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/importer/batch/csv/creator/RuleServerInvoker.java`

---

## Classes

### RuleServerInvoker

**Inherits from**: (none)

#### Methods

##### RuleServerInvoker(restClient: RuleServiceClient, programEnrolmentConstructionService: ProgramEnrolmentConstructionService, individualConstructionService: IndividualConstructionService, observationService: ObservationService, programEncounterConstructionService: ProgramEncounterConstructionService, entityApprovalStatusService: EntityApprovalStatusService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restClient | RuleServiceClient | - | - |
| programEnrolmentConstructionService | ProgramEnrolmentConstructionService | - | - |
| individualConstructionService | IndividualConstructionService | - | - |
| observationService | ObservationService | - | - |
| programEncounterConstructionService | ProgramEncounterConstructionService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |

**Returns**: `public`


##### invokeRuleServer(row: Row, form: Form, entity: Object, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| entity | Object | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`


##### Exception(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`


##### getRuleServerResult(row: Row, form: Form, individual: Individual, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| individual | Individual | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`


##### invokeRuleServer(unknown: row, unknown: form, unknown: entity, unknown: allErrorMsgs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | form | - | - |
| unknown | entity | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `return`


##### getRuleServerResult(row: Row, form: Form, programEnrolment: ProgramEnrolment, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| programEnrolment | ProgramEnrolment | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`


##### invokeRuleServer(unknown: row, unknown: form, unknown: entity, unknown: allErrorMsgs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | form | - | - |
| unknown | entity | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `return`


##### getRuleServerResult(row: Row, form: Form, programEncounter: ProgramEncounter, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| programEncounter | ProgramEncounter | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`


##### invokeRuleServer(unknown: row, unknown: form, unknown: entity, unknown: allErrorMsgs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | form | - | - |
| unknown | entity | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `return`


##### getRuleServerResult(row: Row, form: Form, encounter: Encounter, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| encounter | Encounter | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`


##### invokeRuleServer(unknown: row, unknown: form, unknown: entity, unknown: allErrorMsgs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | form | - | - |
| unknown | entity | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `return`




## Functions

### RuleServerInvoker(restClient: RuleServiceClient, programEnrolmentConstructionService: ProgramEnrolmentConstructionService, individualConstructionService: IndividualConstructionService, observationService: ObservationService, programEncounterConstructionService: ProgramEncounterConstructionService, entityApprovalStatusService: EntityApprovalStatusService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| restClient | RuleServiceClient | - | - |
| programEnrolmentConstructionService | ProgramEnrolmentConstructionService | - | - |
| individualConstructionService | IndividualConstructionService | - | - |
| observationService | ObservationService | - | - |
| programEncounterConstructionService | ProgramEncounterConstructionService | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |

**Returns**: `public`



### invokeRuleServer(row: Row, form: Form, entity: Object, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| entity | Object | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`



### Exception(unknown: String.join(", unknown: ", unknown: allErrorMsgs) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | String.join(" | - | - |
| unknown | " | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `new`



### getRuleServerResult(row: Row, form: Form, individual: Individual, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| individual | Individual | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`



### invokeRuleServer(unknown: row, unknown: form, unknown: entity, unknown: allErrorMsgs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | form | - | - |
| unknown | entity | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `return`



### getRuleServerResult(row: Row, form: Form, programEnrolment: ProgramEnrolment, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| programEnrolment | ProgramEnrolment | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`



### invokeRuleServer(unknown: row, unknown: form, unknown: entity, unknown: allErrorMsgs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | form | - | - |
| unknown | entity | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `return`



### getRuleServerResult(row: Row, form: Form, programEncounter: ProgramEncounter, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| programEncounter | ProgramEncounter | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`



### invokeRuleServer(unknown: row, unknown: form, unknown: entity, unknown: allErrorMsgs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | form | - | - |
| unknown | entity | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `return`



### getRuleServerResult(row: Row, form: Form, encounter: Encounter, allErrorMsgs: List<String>) → UploadRuleServerResponseContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| row | Row | - | - |
| form | Form | - | - |
| encounter | Encounter | - | - |
| allErrorMsgs | List<String> | - | - |

**Returns**: `UploadRuleServerResponseContract`



### invokeRuleServer(unknown: row, unknown: form, unknown: entity, unknown: allErrorMsgs) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | row | - | - |
| unknown | form | - | - |
| unknown | entity | - | - |
| unknown | allErrorMsgs | - | - |

**Returns**: `return`


