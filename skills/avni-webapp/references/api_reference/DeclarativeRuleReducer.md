# API Reference: DeclarativeRuleReducer.js

**Language**: JavaScript

**Source**: `src/formDesigner/components/DeclarativeRule/DeclarativeRuleReducer.js`

---

## Functions

### resetState()

**Returns**: (none)



### newCondition(declarativeRuleHolder, { declarativeRuleIndex })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex } | None | - | - |

**Returns**: (none)



### newAction(declarativeRuleHolder, { declarativeRuleIndex })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex } | None | - | - |

**Returns**: (none)



### conditionConjunctionChange(declarativeRuleHolder, { declarativeRuleIndex, conjunction, index })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| conjunction | None | - | - |
| index } | None | - | - |

**Returns**: (none)



### compoundRuleConjunctionChange(declarativeRuleHolder, { declarativeRuleIndex, conjunction, conditionIndex })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| conjunction | None | - | - |
| conditionIndex } | None | - | - |

**Returns**: (none)



### addNewRule(declarativeRuleHolder, { declarativeRuleIndex, conditionIndex })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| conditionIndex } | None | - | - |

**Returns**: (none)



### lhsChange(declarativeRuleHolder, { declarativeRuleIndex, ruleIndex, conditionIndex, property, value })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| ruleIndex | None | - | - |
| conditionIndex | None | - | - |
| property | None | - | - |
| value } | None | - | - |

**Returns**: (none)



### typeChange(declarativeRuleHolder, {
    declarativeRuleIndex, ruleIndex, conditionIndex, name, uuid, dataType, formType, parentConceptUuid
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| {
    declarativeRuleIndex | None | - | - |
| ruleIndex | None | - | - |
| conditionIndex | None | - | - |
| name | None | - | - |
| uuid | None | - | - |
| dataType | None | - | - |
| formType | None | - | - |
| parentConceptUuid
  } | None | - | - |

**Returns**: (none)



### rhsChange(declarativeRuleHolder, { declarativeRuleIndex, ruleIndex, conditionIndex, property, value })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| ruleIndex | None | - | - |
| conditionIndex | None | - | - |
| property | None | - | - |
| value } | None | - | - |

**Returns**: (none)



### rhsAnswerConceptChange(declarativeRuleHolder, { declarativeRuleIndex, ruleIndex, conditionIndex, labelValues })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| ruleIndex | None | - | - |
| conditionIndex | None | - | - |
| labelValues } | None | - | - |

**Returns**: (none)



### rhsConceptChange(declarativeRuleHolder, { declarativeRuleIndex, ruleIndex, conditionIndex, name, uuid, formType })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| ruleIndex | None | - | - |
| conditionIndex | None | - | - |
| name | None | - | - |
| uuid | None | - | - |
| formType } | None | - | - |

**Returns**: (none)



### operatorChange(declarativeRuleHolder, { declarativeRuleIndex, ruleIndex, conditionIndex, operator })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| ruleIndex | None | - | - |
| conditionIndex | None | - | - |
| operator } | None | - | - |

**Returns**: (none)



### deleteCondition(declarativeRuleHolder, { declarativeRuleIndex, conditionIndex })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| conditionIndex } | None | - | - |

**Returns**: (none)



### deleteRule(declarativeRuleHolder, { declarativeRuleIndex, ruleIndex, conditionIndex })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| ruleIndex | None | - | - |
| conditionIndex } | None | - | - |

**Returns**: (none)



### actionChange(declarativeRuleHolder, { declarativeRuleIndex, index, property, value, types })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| index | None | - | - |
| property | None | - | - |
| value | None | - | - |
| types } | None | - | - |

**Returns**: (none)



### answerToSkipChange(declarativeRuleHolder, { declarativeRuleIndex, index, labelValues })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| index | None | - | - |
| labelValues } | None | - | - |

**Returns**: (none)



### deleteDeclarativeRule(declarativeRuleHolder, { declarativeRuleIndex })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex } | None | - | - |

**Returns**: (none)



### decisionConcept(declarativeRuleHolder, { declarativeRuleIndex, index, name, uuid, dataType })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| index | None | - | - |
| name | None | - | - |
| uuid | None | - | - |
| dataType } | None | - | - |

**Returns**: (none)



### decisionCodedValue(declarativeRuleHolder, { declarativeRuleIndex, index, labelValues })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| index | None | - | - |
| labelValues } | None | - | - |

**Returns**: (none)



### visitDateField(declarativeRuleHolder, { declarativeRuleIndex, index, dateField, dateFieldUuid })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| { declarativeRuleIndex | None | - | - |
| index | None | - | - |
| dateField | None | - | - |
| dateFieldUuid } | None | - | - |

**Returns**: (none)



### DeclarativeRuleReducer(declarativeRuleHolder, action)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRuleHolder | None | - | - |
| action | None | - | - |

**Returns**: (none)


