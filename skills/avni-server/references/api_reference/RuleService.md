# API Reference: RuleService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/RuleService.java`

---

## Classes

### RuleService

**Inherits from**: NonScopeAwareService

#### Methods

##### RuleService(ruleDependencyRepository: RuleDependencyRepository, ruleRepository: RuleRepository, formRepository: FormRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, restClient: RuleServiceClient, individualConstructionService: IndividualConstructionService, ruleValidationService: RuleValidationService, programEncounterConstructionService: ProgramEncounterConstructionService, programEnrolmentConstructionService: ProgramEnrolmentConstructionService, ruleFailureLogRepository: RuleFailureLogRepository, observationService: ObservationService, contractBuilderServices: IndividualContractBuilderServices, entityRetrieverService: EntityRetrieverService, individualService: IndividualService, ruleServiceEntityContractBuilder: RuleServiceEntityContractBuilder, userRepository: UserRepository, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleDependencyRepository | RuleDependencyRepository | - | - |
| ruleRepository | RuleRepository | - | - |
| formRepository | FormRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| restClient | RuleServiceClient | - | - |
| individualConstructionService | IndividualConstructionService | - | - |
| ruleValidationService | RuleValidationService | - | - |
| programEncounterConstructionService | ProgramEncounterConstructionService | - | - |
| programEnrolmentConstructionService | ProgramEnrolmentConstructionService | - | - |
| ruleFailureLogRepository | RuleFailureLogRepository | - | - |
| observationService | ObservationService | - | - |
| contractBuilderServices | IndividualContractBuilderServices | - | - |
| entityRetrieverService | EntityRetrieverService | - | - |
| individualService | IndividualService | - | - |
| ruleServiceEntityContractBuilder | RuleServiceEntityContractBuilder | - | - |
| userRepository | UserRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`


##### createDependency(ruleCode: String, ruleHash: String) → RuleDependency

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleCode | String | - | - |
| ruleHash | String | - | - |

**Returns**: `RuleDependency`


##### RuleDependency() → new

**Returns**: `new`


##### _setCommonAttributes(rule: Rule, ruleRequest: RuleRequest) → Rule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | Rule | - | - |
| ruleRequest | RuleRequest | - | - |

**Returns**: `Rule`


##### RuleData(unknown: ruleRequest.getData() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ruleRequest.getData( | - | - |

**Returns**: `new`


##### createOrUpdate(ruleRequest: RuleRequest, organisation: Organisation) → Rule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleRequest | RuleRequest | - | - |
| organisation | Organisation | - | - |

**Returns**: `Rule`


##### Rule() → new

**Returns**: `new`


##### createOrUpdate(rules: List<RuleRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rules | List<RuleRequest> | - | - |

**Returns**: `void`


##### executeProgramSummaryRule(programEnrolment: ProgramEnrolment) → RuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `RuleResponseEntity`


##### RuleResponseEntity() → new

**Returns**: `new`


##### RuleRequestEntity() → new

**Returns**: `new`


##### executeSubjectSummaryRule(individual: Individual) → RuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `RuleResponseEntity`


##### RuleResponseEntity() → new

**Returns**: `new`


##### RuleRequestEntity() → new

**Returns**: `new`


##### executeEligibilityRule(individual: Individual, encounterTypes: List<EncounterType>) → EligibilityRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| encounterTypes | List<EncounterType> | - | - |

**Returns**: `EligibilityRuleResponseEntity`


##### EntityEligibilityRuleRequest(unknown: individualContract, unknown: entityTypeContracts, unknown: RuleEntityType.EncounterType.name() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualContract | - | - |
| unknown | entityTypeContracts | - | - |
| unknown | RuleEntityType.EncounterType.name( | - | - |

**Returns**: `new`


##### createHttpHeaderAndSendRequest(unknown: API_ENCOUNTER_ELIGIBILITY, unknown: ruleRequest, unknown: null, unknown: EligibilityRuleResponseEntity.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | API_ENCOUNTER_ELIGIBILITY | - | - |
| unknown | ruleRequest | - | - |
| unknown | null | - | - |
| unknown | EligibilityRuleResponseEntity.class | - | - |

**Returns**: `return`


##### executeProgramEligibilityCheckRule(individual: Individual, programs: List<Program>) → EligibilityRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| programs | List<Program> | - | - |

**Returns**: `EligibilityRuleResponseEntity`


##### EligibilityRuleResponseEntity() → new

**Returns**: `new`


##### EntityEligibilityRuleRequest(unknown: individualContract, unknown: entityTypeContracts, unknown: RuleEntityType.Program.name() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualContract | - | - |
| unknown | entityTypeContracts | - | - |
| unknown | RuleEntityType.Program.name( | - | - |

**Returns**: `new`


##### createHttpHeaderAndSendRequest(unknown: API_ENCOUNTER_ELIGIBILITY, unknown: ruleRequest, unknown: null, unknown: EligibilityRuleResponseEntity.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | API_ENCOUNTER_ELIGIBILITY | - | - |
| unknown | ruleRequest | - | - |
| unknown | null | - | - |
| unknown | EligibilityRuleResponseEntity.class | - | - |

**Returns**: `return`


##### executeScheduleRule(entityType: String, entityId: Long, scheduleRule: String) → ScheduleRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityId | Long | - | - |
| scheduleRule | String | - | - |

**Returns**: `ScheduleRuleResponseEntity`


##### executeMessageRule(entityType: String, entityId: Long, messageRule: String) → MessageRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityId | Long | - | - |
| messageRule | String | - | - |

**Returns**: `MessageRuleResponseEntity`


##### executeScheduleRuleForEntityTypeUser(entityId: Long, scheduleRule: String) → ScheduleRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| scheduleRule | String | - | - |

**Returns**: `ScheduleRuleResponseEntity`


##### executeMessageRuleForEntityTypeUser(entityId: Long, messageRule: String) → MessageRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| messageRule | String | - | - |

**Returns**: `MessageRuleResponseEntity`


##### getBaseRuleResponseEntity(entityType: String, rule: String, rulesMessage: String, extends: Class<?, contract: RuleServerEntityContract, entityUuid: String) → BaseRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| rule | String | - | - |
| rulesMessage | String | - | - |
| extends | Class<? | - | - |
| contract | RuleServerEntityContract | - | - |
| entityUuid | String | - | - |

**Returns**: `BaseRuleResponseEntity`


##### MessageRequestEntity(unknown: contract, unknown: rule, unknown: entityType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contract | - | - |
| unknown | rule | - | - |
| unknown | entityType | - | - |

**Returns**: `new`


##### BaseRuleRequest() → new

**Returns**: `new`


##### createHttpHeaderAndSendRequest(unknown: API_MESSAGING_RULE, unknown: ruleRequest, unknown: ruleFailureLog, unknown: responseType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | API_MESSAGING_RULE | - | - |
| unknown | ruleRequest | - | - |
| unknown | ruleFailureLog | - | - |
| unknown | responseType | - | - |

**Returns**: `return`


##### executeServerSideRules(requestEntityWrapper: RequestEntityWrapper) → RuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestEntityWrapper | RequestEntityWrapper | - | - |

**Returns**: `RuleResponseEntity`


##### IndividualContractBuilder(unknown: contractBuilderServices, unknown: individualService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contractBuilderServices | - | - |
| unknown | individualService | - | - |

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### setObservationsOnResponse(workFlowType: String, ruleResponseEntity: RuleResponseEntity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| workFlowType | String | - | - |
| ruleResponseEntity | RuleResponseEntity | - | - |

**Returns**: `void`


##### createHttpHeaderAndSendRequest(url: String, contractObject: Object, ruleFailureLog: RuleFailureLog, responseType: Class<R>) → R

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| contractObject | Object | - | - |
| ruleFailureLog | RuleFailureLog | - | - |
| responseType | Class<R> | - | - |

**Returns**: `R`


##### RuleError() → new

**Returns**: `new`


##### RuleExecutionException(unknown: ruleError) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ruleError | - | - |

**Returns**: `new`


##### getStackTrace(e: Exception) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `String`


##### StringWriter() → new

**Returns**: `new`


##### PrintWriter(unknown: sw) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sw | - | - |

**Returns**: `new`


##### saveRuleError(ruleFailureLog: RuleFailureLog, message: String, stack: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleFailureLog | RuleFailureLog | - | - |
| message | String | - | - |
| stack | String | - | - |

**Returns**: `void`


##### checkEntityExists(ruleRequest: RuleRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleRequest | RuleRequest | - | - |

**Returns**: `void`


##### ValidationException(with: String.format("%s, unknown: ruleRequest.getEntityType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("%s | - | - |
| unknown | ruleRequest.getEntityType( | - | - |

**Returns**: `new`


##### createUpdateGlobalRule(ruleCode: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleCode | String | - | - |

**Returns**: `void`


##### RuleDependency() → new

**Returns**: `new`


##### generateChecksum(input: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | String | - | - |

**Returns**: `String`


##### StringBuilder() → new

**Returns**: `new`


##### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`




## Functions

### RuleService(ruleDependencyRepository: RuleDependencyRepository, ruleRepository: RuleRepository, formRepository: FormRepository, programRepository: ProgramRepository, encounterTypeRepository: EncounterTypeRepository, restClient: RuleServiceClient, individualConstructionService: IndividualConstructionService, ruleValidationService: RuleValidationService, programEncounterConstructionService: ProgramEncounterConstructionService, programEnrolmentConstructionService: ProgramEnrolmentConstructionService, ruleFailureLogRepository: RuleFailureLogRepository, observationService: ObservationService, contractBuilderServices: IndividualContractBuilderServices, entityRetrieverService: EntityRetrieverService, individualService: IndividualService, ruleServiceEntityContractBuilder: RuleServiceEntityContractBuilder, userRepository: UserRepository, organisationRepository: OrganisationRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleDependencyRepository | RuleDependencyRepository | - | - |
| ruleRepository | RuleRepository | - | - |
| formRepository | FormRepository | - | - |
| programRepository | ProgramRepository | - | - |
| encounterTypeRepository | EncounterTypeRepository | - | - |
| restClient | RuleServiceClient | - | - |
| individualConstructionService | IndividualConstructionService | - | - |
| ruleValidationService | RuleValidationService | - | - |
| programEncounterConstructionService | ProgramEncounterConstructionService | - | - |
| programEnrolmentConstructionService | ProgramEnrolmentConstructionService | - | - |
| ruleFailureLogRepository | RuleFailureLogRepository | - | - |
| observationService | ObservationService | - | - |
| contractBuilderServices | IndividualContractBuilderServices | - | - |
| entityRetrieverService | EntityRetrieverService | - | - |
| individualService | IndividualService | - | - |
| ruleServiceEntityContractBuilder | RuleServiceEntityContractBuilder | - | - |
| userRepository | UserRepository | - | - |
| organisationRepository | OrganisationRepository | - | - |

**Returns**: `public`



### createDependency(ruleCode: String, ruleHash: String) → RuleDependency

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleCode | String | - | - |
| ruleHash | String | - | - |

**Returns**: `RuleDependency`



### RuleDependency() → new

**Returns**: `new`



### _setCommonAttributes(rule: Rule, ruleRequest: RuleRequest) → Rule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | Rule | - | - |
| ruleRequest | RuleRequest | - | - |

**Returns**: `Rule`



### RuleData(unknown: ruleRequest.getData() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ruleRequest.getData( | - | - |

**Returns**: `new`



### createOrUpdate(ruleRequest: RuleRequest, organisation: Organisation) → Rule

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleRequest | RuleRequest | - | - |
| organisation | Organisation | - | - |

**Returns**: `Rule`



### Rule() → new

**Returns**: `new`



### createOrUpdate(rules: List<RuleRequest>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rules | List<RuleRequest> | - | - |

**Returns**: `void`



### executeProgramSummaryRule(programEnrolment: ProgramEnrolment) → RuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEnrolment | ProgramEnrolment | - | - |

**Returns**: `RuleResponseEntity`



### RuleResponseEntity() → new

**Returns**: `new`



### RuleRequestEntity() → new

**Returns**: `new`



### executeSubjectSummaryRule(individual: Individual) → RuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |

**Returns**: `RuleResponseEntity`



### RuleResponseEntity() → new

**Returns**: `new`



### RuleRequestEntity() → new

**Returns**: `new`



### executeEligibilityRule(individual: Individual, encounterTypes: List<EncounterType>) → EligibilityRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| encounterTypes | List<EncounterType> | - | - |

**Returns**: `EligibilityRuleResponseEntity`



### EntityEligibilityRuleRequest(unknown: individualContract, unknown: entityTypeContracts, unknown: RuleEntityType.EncounterType.name() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualContract | - | - |
| unknown | entityTypeContracts | - | - |
| unknown | RuleEntityType.EncounterType.name( | - | - |

**Returns**: `new`



### createHttpHeaderAndSendRequest(unknown: API_ENCOUNTER_ELIGIBILITY, unknown: ruleRequest, unknown: null, unknown: EligibilityRuleResponseEntity.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | API_ENCOUNTER_ELIGIBILITY | - | - |
| unknown | ruleRequest | - | - |
| unknown | null | - | - |
| unknown | EligibilityRuleResponseEntity.class | - | - |

**Returns**: `return`



### executeProgramEligibilityCheckRule(individual: Individual, programs: List<Program>) → EligibilityRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | Individual | - | - |
| programs | List<Program> | - | - |

**Returns**: `EligibilityRuleResponseEntity`



### EligibilityRuleResponseEntity() → new

**Returns**: `new`



### EntityEligibilityRuleRequest(unknown: individualContract, unknown: entityTypeContracts, unknown: RuleEntityType.Program.name() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | individualContract | - | - |
| unknown | entityTypeContracts | - | - |
| unknown | RuleEntityType.Program.name( | - | - |

**Returns**: `new`



### createHttpHeaderAndSendRequest(unknown: API_ENCOUNTER_ELIGIBILITY, unknown: ruleRequest, unknown: null, unknown: EligibilityRuleResponseEntity.class) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | API_ENCOUNTER_ELIGIBILITY | - | - |
| unknown | ruleRequest | - | - |
| unknown | null | - | - |
| unknown | EligibilityRuleResponseEntity.class | - | - |

**Returns**: `return`



### executeScheduleRule(entityType: String, entityId: Long, scheduleRule: String) → ScheduleRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityId | Long | - | - |
| scheduleRule | String | - | - |

**Returns**: `ScheduleRuleResponseEntity`



### executeMessageRule(entityType: String, entityId: Long, messageRule: String) → MessageRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| entityId | Long | - | - |
| messageRule | String | - | - |

**Returns**: `MessageRuleResponseEntity`



### executeScheduleRuleForEntityTypeUser(entityId: Long, scheduleRule: String) → ScheduleRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| scheduleRule | String | - | - |

**Returns**: `ScheduleRuleResponseEntity`



### executeMessageRuleForEntityTypeUser(entityId: Long, messageRule: String) → MessageRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | Long | - | - |
| messageRule | String | - | - |

**Returns**: `MessageRuleResponseEntity`



### getBaseRuleResponseEntity(entityType: String, rule: String, rulesMessage: String, extends: Class<?, contract: RuleServerEntityContract, entityUuid: String) → BaseRuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityType | String | - | - |
| rule | String | - | - |
| rulesMessage | String | - | - |
| extends | Class<? | - | - |
| contract | RuleServerEntityContract | - | - |
| entityUuid | String | - | - |

**Returns**: `BaseRuleResponseEntity`



### MessageRequestEntity(unknown: contract, unknown: rule, unknown: entityType) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contract | - | - |
| unknown | rule | - | - |
| unknown | entityType | - | - |

**Returns**: `new`



### BaseRuleRequest() → new

**Returns**: `new`



### createHttpHeaderAndSendRequest(unknown: API_MESSAGING_RULE, unknown: ruleRequest, unknown: ruleFailureLog, unknown: responseType) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | API_MESSAGING_RULE | - | - |
| unknown | ruleRequest | - | - |
| unknown | ruleFailureLog | - | - |
| unknown | responseType | - | - |

**Returns**: `return`



### executeServerSideRules(requestEntityWrapper: RequestEntityWrapper) → RuleResponseEntity

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| requestEntityWrapper | RequestEntityWrapper | - | - |

**Returns**: `RuleResponseEntity`



### IndividualContractBuilder(unknown: contractBuilderServices, unknown: individualService) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | contractBuilderServices | - | - |
| unknown | individualService | - | - |

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### setObservationsOnResponse(workFlowType: String, ruleResponseEntity: RuleResponseEntity) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| workFlowType | String | - | - |
| ruleResponseEntity | RuleResponseEntity | - | - |

**Returns**: `void`



### createHttpHeaderAndSendRequest(url: String, contractObject: Object, ruleFailureLog: RuleFailureLog, responseType: Class<R>) → R

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | String | - | - |
| contractObject | Object | - | - |
| ruleFailureLog | RuleFailureLog | - | - |
| responseType | Class<R> | - | - |

**Returns**: `R`



### RuleError() → new

**Returns**: `new`



### RuleExecutionException(unknown: ruleError) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | ruleError | - | - |

**Returns**: `new`



### getStackTrace(e: Exception) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Exception | - | - |

**Returns**: `String`



### StringWriter() → new

**Returns**: `new`



### PrintWriter(unknown: sw) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | sw | - | - |

**Returns**: `new`



### saveRuleError(ruleFailureLog: RuleFailureLog, message: String, stack: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleFailureLog | RuleFailureLog | - | - |
| message | String | - | - |
| stack | String | - | - |

**Returns**: `void`



### checkEntityExists(ruleRequest: RuleRequest) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleRequest | RuleRequest | - | - |

**Returns**: `void`



### ValidationException(with: String.format("%s, unknown: ruleRequest.getEntityType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | String.format("%s | - | - |
| unknown | ruleRequest.getEntityType( | - | - |

**Returns**: `new`



### createUpdateGlobalRule(ruleCode: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleCode | String | - | - |

**Returns**: `void`



### RuleDependency() → new

**Returns**: `new`



### generateChecksum(input: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input | String | - | - |

**Returns**: `String`



### StringBuilder() → new

**Returns**: `new`



### RuntimeException(unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e | - | - |

**Returns**: `new`


