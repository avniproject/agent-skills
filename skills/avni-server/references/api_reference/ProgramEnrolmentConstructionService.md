# API Reference: ProgramEnrolmentConstructionService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/rules/constructWrappers/ProgramEnrolmentConstructionService.java`

---

## Classes

### ProgramEnrolmentConstructionService

**Inherits from**: (none)

#### Methods

##### ProgramEnrolmentConstructionService(observationConstructionService: ObservationConstructionService, individualConstructionService: IndividualConstructionService, individualRepository: IndividualRepository, observationService: ObservationService, checklistDetailRepository: ChecklistDetailRepository, entityApprovalStatusService: EntityApprovalStatusService, groupSubjectRepository: GroupSubjectRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationConstructionService | ObservationConstructionService | - | - |
| individualConstructionService | IndividualConstructionService | - | - |
| individualRepository | IndividualRepository | - | - |
| observationService | ObservationService | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |

**Returns**: `public`


##### constructProgramEnrolmentContract(request: ProgramEnrolmentRequestEntity) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ProgramEnrolmentRequestEntity | - | - |

**Returns**: `ProgramEnrolmentContract`


##### ProgramEnrolmentContract() → new

**Returns**: `new`


##### constructProgramEnrolmentContract(programEnrolment: ProgramEnrolment) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `ProgramEnrolmentContract`


##### ProgramEnrolmentContract() → new

**Returns**: `new`


##### constructChecklistDetailRequest() → List<ChecklistDetailRequest>

**Returns**: `List<ChecklistDetailRequest>`




## Functions

### ProgramEnrolmentConstructionService(observationConstructionService: ObservationConstructionService, individualConstructionService: IndividualConstructionService, individualRepository: IndividualRepository, observationService: ObservationService, checklistDetailRepository: ChecklistDetailRepository, entityApprovalStatusService: EntityApprovalStatusService, groupSubjectRepository: GroupSubjectRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationConstructionService | ObservationConstructionService | - | - |
| individualConstructionService | IndividualConstructionService | - | - |
| individualRepository | IndividualRepository | - | - |
| observationService | ObservationService | - | - |
| checklistDetailRepository | ChecklistDetailRepository | - | - |
| entityApprovalStatusService | EntityApprovalStatusService | - | - |
| groupSubjectRepository | GroupSubjectRepository | - | - |

**Returns**: `public`



### constructProgramEnrolmentContract(request: ProgramEnrolmentRequestEntity) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | ProgramEnrolmentRequestEntity | - | - |

**Returns**: `ProgramEnrolmentContract`



### ProgramEnrolmentContract() → new

**Returns**: `new`



### constructProgramEnrolmentContract(programEnrolment: ProgramEnrolment) → ProgramEnrolmentContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `ProgramEnrolmentContract`



### ProgramEnrolmentContract() → new

**Returns**: `new`



### constructChecklistDetailRequest() → List<ChecklistDetailRequest>

**Returns**: `List<ChecklistDetailRequest>`


