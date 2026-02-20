# API Reference: RuleValidationService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/rules/validateRules/RuleValidationService.java`

---

## Classes

### RuleValidationService

**Inherits from**: (none)

#### Methods

##### RuleValidationService(conceptRepository: ConceptRepository, ruleFailureLogRepository: RuleFailureLogRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| ruleFailureLogRepository | RuleFailureLogRepository | - | - |

**Returns**: `public`


##### generateRuleFailureLog(rule: BaseRuleRequest, source: String, entityType: String, entityUuid: String) → RuleFailureLog

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | BaseRuleRequest | - | - |
| source | String | - | - |
| entityType | String | - | - |
| entityUuid | String | - | - |

**Returns**: `RuleFailureLog`


##### RuleFailureLog() → new

**Returns**: `new`


##### validateDecision(keyValueResponse: List<KeyValueResponse>, ruleFailureLog: RuleFailureLog) → List<KeyValueResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValueResponse | List<KeyValueResponse> | - | - |
| ruleFailureLog | RuleFailureLog | - | - |

**Returns**: `List<KeyValueResponse>`


##### filterDecisionValuesForCodedConcept(decision: KeyValueResponse, ruleFailureLog: RuleFailureLog) → KeyValueResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decision | KeyValueResponse | - | - |
| ruleFailureLog | RuleFailureLog | - | - |

**Returns**: `KeyValueResponse`


##### checkConceptForRule(conceptName: String, ruleFailureLog: RuleFailureLog) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |
| ruleFailureLog | RuleFailureLog | - | - |

**Returns**: `Boolean`




## Functions

### RuleValidationService(conceptRepository: ConceptRepository, ruleFailureLogRepository: RuleFailureLogRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptRepository | ConceptRepository | - | - |
| ruleFailureLogRepository | RuleFailureLogRepository | - | - |

**Returns**: `public`



### generateRuleFailureLog(rule: BaseRuleRequest, source: String, entityType: String, entityUuid: String) → RuleFailureLog

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | BaseRuleRequest | - | - |
| source | String | - | - |
| entityType | String | - | - |
| entityUuid | String | - | - |

**Returns**: `RuleFailureLog`



### RuleFailureLog() → new

**Returns**: `new`



### validateDecision(keyValueResponse: List<KeyValueResponse>, ruleFailureLog: RuleFailureLog) → List<KeyValueResponse>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValueResponse | List<KeyValueResponse> | - | - |
| ruleFailureLog | RuleFailureLog | - | - |

**Returns**: `List<KeyValueResponse>`



### filterDecisionValuesForCodedConcept(decision: KeyValueResponse, ruleFailureLog: RuleFailureLog) → KeyValueResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decision | KeyValueResponse | - | - |
| ruleFailureLog | RuleFailureLog | - | - |

**Returns**: `KeyValueResponse`



### checkConceptForRule(conceptName: String, ruleFailureLog: RuleFailureLog) → Boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |
| ruleFailureLog | RuleFailureLog | - | - |

**Returns**: `Boolean`


