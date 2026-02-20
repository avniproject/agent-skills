# API Reference: FormDesignerHandlers.jsx

**Language**: JavaScript

**Source**: `src/formDesigner/common/FormDesignerHandlers.jsx`

---

## Functions

### formDesignerUpdateConceptElementData(draftFormElement, propertyName, value)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| propertyName | None | - | - |
| value | None | - | - |

**Returns**: (none)



### formDesignerDeleteGroup(draft, draftFormElementGroups, groupIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draft | None | - | - |
| draftFormElementGroups | None | - | - |
| groupIndex | None | - | - |

**Returns**: (none)



### formDesignerDeleteFormElement(draft, draftFormElements, elementIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draft | None | - | - |
| draftFormElements | None | - | - |
| elementIndex | None | - | - |

**Returns**: (none)



### formDesignerAddFormElementGroup(draft, draftFormElementGroups, groupIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draft | None | - | - |
| draftFormElementGroups | None | - | - |
| groupIndex | None | - | - |

**Returns**: (none)



### formDesignerAddFormElement(draft, draftFormElements, elementIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draft | None | - | - |
| draftFormElements | None | - | - |
| elementIndex | None | - | - |

**Returns**: (none)



### formDesignerHandleGroupElementChange(draft, draftFormElementGroup, propertyName, value, elementIndex = -1)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draft | None | - | - |
| draftFormElementGroup | None | - | - |
| propertyName | None | - | - |
| value | None | - | - |
| elementIndex | None | -1 | - |

**Returns**: (none)



### formDesignerHandleInlineNumericAttributes(draftFormElement, propertyName, value)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| propertyName | None | - | - |
| value | None | - | - |

**Returns**: (none)



### formDesignerHandleInlineCodedConceptAnswers(draftFormElement, answerName, answerIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| answerName | None | - | - |
| answerIndex | None | - | - |

**Returns**: (none)



### formDesignerOnToggleInlineConceptCodedAnswerAttribute(draftFormElement, propertyName, answerIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| propertyName | None | - | - |
| answerIndex | None | - | - |

**Returns**: (none)



### formDesignerOnDeleteInlineConceptCodedAnswerDelete(draftFormElement, answerIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| answerIndex | None | - | - |

**Returns**: (none)



### formDesignerOnConceptAnswerMoveUp(draftFormElement, answerIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| answerIndex | None | - | - |

**Returns**: (none)



### formDesignerOnConceptAnswerMoveDown(draftFormElement, answerIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| answerIndex | None | - | - |

**Returns**: (none)



### formDesignerHandleInlineConceptAttributes(draftFormElement, attributeName, propertyName, value)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| attributeName | None | - | - |
| propertyName | None | - | - |
| value | None | - | - |

**Returns**: (none)



### formDesignerHandleGroupElementKeyValueChange(draft, draftFormElement, propertyName, value)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draft | None | - | - |
| draftFormElement | None | - | - |
| propertyName | None | - | - |
| value | None | - | - |

**Returns**: (none)



### formDesignerHandleExcludedAnswers(draft, draftFormElement, name, status)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draft | None | - | - |
| draftFormElement | None | - | - |
| name | None | - | - |
| status | None | - | - |

**Returns**: (none)



### formDesignerHandleModeForDate(draftFormElement, propertyName, value)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| propertyName | None | - | - |
| value | None | - | - |

**Returns**: (none)



### formDesignerHandleRegex(draftFormElement, propertyName, value)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| propertyName | None | - | - |
| value | None | - | - |

**Returns**: (none)



### formDesignerHandleConceptFormLibrary(draftFormElement, value, inlineConcept = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draftFormElement | None | - | - |
| value | None | - | - |
| inlineConcept | None | false | - |

**Returns**: (none)



### formDesignerOnSubmitInlineConcept(inlineConceptObject, formElement, updateState)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inlineConceptObject | None | - | - |
| formElement | None | - | - |
| updateState | None | - | - |

**Returns**: (none)



### formDesignerOnSaveInlineConcept(clonedFormElement, updateState)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clonedFormElement | None | - | - |
| updateState | None | - | - |

**Returns**: (none)



### isNullOrLessThanOrEqual(value, otherValue)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | None | - | - |
| otherValue | None | - | - |

**Returns**: (none)



### formDesignerUpdateDragDropOrderForFirstGroup(draft, draftSourceFormElementGroup, draftDestinationFormElementGroup, groupSourceIndex, groupDestinationIndex, sourceElementIndex, destinationElementIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| draft | None | - | - |
| draftSourceFormElementGroup | None | - | - |
| draftDestinationFormElementGroup | None | - | - |
| groupSourceIndex | None | - | - |
| groupDestinationIndex | None | - | - |
| sourceElementIndex | None | - | - |
| destinationElementIndex | None | - | - |

**Returns**: (none)



### formDesignerGetEmptyFormElement()

**Returns**: (none)


