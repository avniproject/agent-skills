# API Reference: BuildObservations.js

**Language**: JavaScript

**Source**: `src/observationBuilder/BuildObservations.js`

---

## Functions

### addObservationValue(observationsHolder, concept, fe, row, errors, allFormElements)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationsHolder | None | - | - |
| concept | None | - | - |
| fe | None | - | - |
| row | None | - | - |
| errors | None | - | - |
| allFormElements | None | - | - |

**Returns**: (none)



### BuildObservations({row, form, entity})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {row | None | - | - |
| form | None | - | - |
| entity} | None | - | - |

**Returns**: (none)



### handleValidationResults(validationResults)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResults | None | - | - |

**Returns**: (none)



### handleValidationResult(validationResult)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResult | None | - | - |

**Returns**: (none)



### pushErrorMessages(form, allValidationResults, errors)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | None | - | - |
| allValidationResults | None | - | - |
| errors | None | - | - |

**Returns**: (none)



### updateGroupQuestionObservations(formElement, allFormElements, row, observationsHolder, errors)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| allFormElements | None | - | - |
| row | None | - | - |
| observationsHolder | None | - | - |
| errors | None | - | - |

**Returns**: (none)



### updateCodedObs(childFormElement, answerValue, errors, updateObs)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| childFormElement | None | - | - |
| answerValue | None | - | - |
| errors | None | - | - |
| updateObs | None | - | - |

**Returns**: (none)



### updateRepeatableGroupQuestionValue(parentFormElement, childFormElement, row, errors, observationsHolder, questionGroupIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFormElement | None | - | - |
| childFormElement | None | - | - |
| row | None | - | - |
| errors | None | - | - |
| observationsHolder | None | - | - |
| questionGroupIndex | None | - | - |

**Returns**: (none)



### updateGroupQuestionValue(parentFormElement, childFormElement, row, errors, observationsHolder, questionGroupIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFormElement | None | - | - |
| childFormElement | None | - | - |
| row | None | - | - |
| errors | None | - | - |
| observationsHolder | None | - | - |
| questionGroupIndex | None | - | - |

**Returns**: (none)



### getAnswerValue(formElement, row, parentFormElement, questionGroupIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| row | None | - | - |
| parentFormElement | None | - | - |
| questionGroupIndex | None | - | - |

**Returns**: (none)



### addOrUpdateObs(fe, value, observationsHolder)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fe | None | - | - |
| value | None | - | - |
| observationsHolder | None | - | - |

**Returns**: (none)



### isNonEmptyQuestionGroup(formElement, allFormElements, row)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| allFormElements | None | - | - |
| row | None | - | - |

**Returns**: (none)



### getFormElementByUUID(form, formElementUUID)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | None | - | - |
| formElementUUID | None | - | - |

**Returns**: (none)



### getFormElementStatuses(entity, formElementGroup, observationsHolder)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | None | - | - |
| formElementGroup | None | - | - |
| observationsHolder | None | - | - |

**Returns**: (none)



### checkValidationResult(ruleValidationErrors, validationResult)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleValidationErrors | None | - | - |
| validationResult | None | - | - |

**Returns**: (none)



### addPreviousValidationErrors(ruleValidationErrors, validationResult, previousErrors)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ruleValidationErrors | None | - | - |
| validationResult | None | - | - |
| previousErrors | None | - | - |

**Returns**: (none)



### validate(formElement, value, observations, validationResults, formElementStatuses)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| value | None | - | - |
| observations | None | - | - |
| validationResults | None | - | - |
| formElementStatuses | None | - | - |

**Returns**: (none)


