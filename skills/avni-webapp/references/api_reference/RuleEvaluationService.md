# API Reference: RuleEvaluationService.js

**Language**: JavaScript

**Source**: `src/dataEntryApp/services/RuleEvaluationService.js`

---

## Functions

### getImports()

**Returns**: (none)



### updateMapUsingKeyPattern()

**Returns**: (none)



### getFormElementsStatuses(entity, formElementGroup)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | None | - | - |
| formElementGroup | None | - | - |

**Returns**: (none)



### getTheChildFormElementStatuses(childFormElement, entity, entityName, mapOfBundleFormElementStatuses)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| childFormElement | None | - | - |
| entity | None | - | - |
| entityName | None | - | - |
| mapOfBundleFormElementStatuses | None | - | - |

**Returns**: (none)



### getRepeatableObservationSize(formElement, entity)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### runFormElementStatusRule(formElement, entity, entityName, questionGroupIndex, mapOfBundleFormElementStatuses)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| entity | None | - | - |
| entityName | None | - | - |
| questionGroupIndex | None | - | - |
| mapOfBundleFormElementStatuses | None | - | - |

**Returns**: (none)



### getDefaultFormElementStatusIfNotFoundInBundleFESs(mapOfBundleFormElementStatuses, fs)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mapOfBundleFormElementStatuses | None | - | - |
| fs | None | - | - |

**Returns**: (none)



### runFormElementGroupRule(formElementGroup, entity, entityName, mapOfBundleFormElementStatuses)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | None | - | - |
| entity | None | - | - |
| entityName | None | - | - |
| mapOfBundleFormElementStatuses | None | - | - |

**Returns**: (none)



### getRuleServiceLibraryInterfaceForSharingModules()

**Returns**: (none)



### getAllRuleItemsFor(entity, type, entityTypeHardCoded)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | None | - | - |
| type | None | - | - |
| entityTypeHardCoded | None | - | - |

**Returns**: (none)



### getApplicableRules(ruledEntity, ruleType, ruledEntityType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruledEntity | None | - | - |
| ruleType | None | - | - |
| ruledEntityType | None | - | - |

**Returns**: (none)



### getRuleFunctions(rules = [])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rules | None | [] | - |

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


