# API Reference: RuleController.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/RuleController.java`

---

## Classes

### RuleController

**Inherits from**: (none)

#### Methods

##### RuleController(ruleService: RuleService, programEnrolmentRepository: ProgramEnrolmentRepository, individualRepository: IndividualRepository, formMappingRepository: FormMappingRepository, individualService: IndividualService, accessControlService: AccessControlService, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleService | RuleService | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| individualService | IndividualService | - | - |
| accessControlService | AccessControlService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`


##### JsonObject() → new

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


##### addEligibleEncounterUUIDsToResponse(response: JsonObject, ruleResponse: EligibilityRuleResponseEntity, encounterTypes: List<EncounterType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | JsonObject | - | - |
| ruleResponse | EligibilityRuleResponseEntity | - | - |
| encounterTypes | List<EncounterType> | - | - |

**Returns**: `void`




## Functions

### RuleController(ruleService: RuleService, programEnrolmentRepository: ProgramEnrolmentRepository, individualRepository: IndividualRepository, formMappingRepository: FormMappingRepository, individualService: IndividualService, accessControlService: AccessControlService, errorBodyBuilder: ErrorBodyBuilder) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleService | RuleService | - | - |
| programEnrolmentRepository | ProgramEnrolmentRepository | - | - |
| individualRepository | IndividualRepository | - | - |
| formMappingRepository | FormMappingRepository | - | - |
| individualService | IndividualService | - | - |
| accessControlService | AccessControlService | - | - |
| errorBodyBuilder | ErrorBodyBuilder | - | - |

**Returns**: `public`



### JsonObject() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



### addEligibleEncounterUUIDsToResponse(response: JsonObject, ruleResponse: EligibilityRuleResponseEntity, encounterTypes: List<EncounterType>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | JsonObject | - | - |
| ruleResponse | EligibilityRuleResponseEntity | - | - |
| encounterTypes | List<EncounterType> | - | - |

**Returns**: `void`


