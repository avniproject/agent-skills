# API Reference: FormElementService.js

**Language**: JavaScript

**Source**: `src/dataEntryApp/services/FormElementService.js`

---

## Functions

### getFormElementStatuses(entity, formElementGroup, observationsHolder)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | None | - | - |
| formElementGroup | None | - | - |
| observationsHolder | None | - | - |

**Returns**: (none)



### getNonNestedFormElements(formElements)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElements | None | - | - |

**Returns**: (none)



### getRuleValidationErrors(formElementStatuses)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementStatuses | None | - | - |

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



### filterFormElements(formElementGroup, entity)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### filterFormElementStatusesAndConvertToValidationResults(formElementGroup, entity)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | None | - | - |
| entity | None | - | - |

**Returns**: (none)


