# API Reference: RuleEvalService.js

**Language**: JavaScript

**Source**: `src/services/RuleEvalService.js`

---

## Functions

### isEmptyValues(value)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | None | - | - |

**Returns**: (none)



### getImports()

**Returns**: (none)



### removeStrictFromRuleCode(rule)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | None | - | - |

**Returns**: (none)



### trimDecisionsMap(decisionsMap)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionsMap | None | - | - |

**Returns**: (none)



### decisionRule(rule, entity)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### visitScheduleRule(rule, entity, scheduledVisits)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | None | - | - |
| entity | None | - | - |
| scheduledVisits | None | - | - |

**Returns**: (none)



### checkListRule(rule, entity, checklistDetails)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | None | - | - |
| entity | None | - | - |
| checklistDetails | None | - | - |

**Returns**: (none)



### programSummaryRule(rule, entity)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### subjectSummaryRule(rule, entity)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### isEligibleForEntityType(individual, entityType, bundleRuleParams)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| individual | None | - | - |
| entityType | None | - | - |
| bundleRuleParams | None | - | - |

**Returns**: (none)



### messagingRule(rule, entity)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### getAllRuleItemsFor(entityUuid, type, entityType)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityUuid | None | - | - |
| type | None | - | - |
| entityType | None | - | - |

**Returns**: (none)



### runRuleAndSaveFailure(rule, entityName, entity, ruleTypeValue, config, context)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | None | - | - |
| entityName | None | - | - |
| entity | None | - | - |
| ruleTypeValue | None | - | - |
| config | None | - | - |
| context | None | - | - |

**Returns**: (none)



### runFormElementGroupRule(formElementGroup, entity)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### getTheChildFormElementStatues(childFormElement, entity)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| childFormElement | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### getFormElementsStatuses(entity, formElementGroup)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | None | - | - |
| formElementGroup | None | - | - |

**Returns**: (none)



### runFormElementStatusRule(formElement, entity, questionGroupIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| entity | None | - | - |
| questionGroupIndex | None | - | - |

**Returns**: (none)


