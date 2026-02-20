# API Reference: commonFormUtil.js

**Language**: JavaScript

**Source**: `src/dataEntryApp/reducers/commonFormUtil.js`

---

## Functions

### isObsPresent(formElement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |

**Returns**: (none)



### nextState(formElementGroup, filteredFormElements, validationResults, observations, entity, onSummaryPage, wizard)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | None | - | - |
| filteredFormElements | None | - | - |
| validationResults | None | - | - |
| observations | None | - | - |
| entity | None | - | - |
| onSummaryPage | None | - | - |
| wizard | None | - | - |

**Returns**: (none)



### postObservationsUpdate(entity, formElement, observationsHolder, obsValue, existingValidationResults, childFormElement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | None | - | - |
| formElement | None | - | - |
| observationsHolder | None | - | - |
| obsValue | None | - | - |
| existingValidationResults | None | - | - |
| childFormElement | None | - | - |

**Returns**: (none)



### getRepeatableQuestionGroup(observations, concept)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | None | - | - |
| concept | None | - | - |

**Returns**: (none)



### addNewQuestionGroup(entity, formElement, observations)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | None | - | - |
| formElement | None | - | - |
| observations | None | - | - |

**Returns**: (none)



### removeQuestionGroup(entity, formElement, observations, existingValidationResults, index)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | None | - | - |
| formElement | None | - | - |
| observations | None | - | - |
| existingValidationResults | None | - | - |
| index | None | - | - |

**Returns**: (none)



### filterFormElementsWithStatus(formElementGroup, entity)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### fetchFilteredFormElementsAndUpdateEntityObservations(formElementGroup, entity)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | None | - | - |
| entity | None | - | - |

**Returns**: (none)



### getUpdatedNextFilteredFormElements(formElementStatuses, nextGroup, entity, nextFilteredFormElements)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementStatuses | None | - | - |
| nextGroup | None | - | - |
| entity | None | - | - |
| nextFilteredFormElements | None | - | - |

**Returns**: (none)



### hasQuestionGroupWithValueInElementStatus(formElementStatuses, allFormElements)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementStatuses | None | - | - |
| allFormElements | None | - | - |

**Returns**: (none)



### checkFormElement({ uuid, value })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { uuid | None | - | - |
| value } | None | - | - |

**Returns**: (none)



### onLoad(form, entity, isIndividualRegistration = false, isEdit = false, isImmutable = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | None | - | - |
| entity | None | - | - |
| isIndividualRegistration | None | false | - |
| isEdit | None | false | - |
| isImmutable | None | false | - |

**Returns**: (none)



### getReturnObject(formElementGroup, entity, isSummaryPage = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | None | - | - |
| entity | None | - | - |
| isSummaryPage | None | false | - |

**Returns**: (none)



### isFailedValidation(result)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| result | None | - | - |

**Returns**: (none)



### errors(validationResults)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResults | None | - | - |

**Returns**: (none)



### getIdValidationErrors(filteredFormElements, obsHolder)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filteredFormElements | None | - | - |
| obsHolder | None | - | - |

**Returns**: (none)



### isIdFieldWithoutObservation(fe)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fe | None | - | - |

**Returns**: (none)



### createValidationResult(fe)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fe | None | - | - |

**Returns**: (none)



### getStandaloneElements(formElements)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElements | None | - | - |

**Returns**: (none)



### getQuestionGroupElements(formElements)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElements | None | - | - |

**Returns**: (none)



### getChildFormElements(formElements)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElements | None | - | - |

**Returns**: (none)



### validateElement({
  formElement, parentElement = null, groupObservation = null, obsHolder, formElementStatuses, validationResults, })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  formElement | None | - | - |
| parentElement | None | null | - |
| groupObservation | None | null | - |
| obsHolder | None | - | - |
| formElementStatuses | None | - | - |
| validationResults | None | - | - |
| } | None | - | - |

**Returns**: (none)



### validateRepeatableQuestionGroup({
  formElement, questionGroupWrapper, formElements, obsHolder, formElementStatuses, validationResults, })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  formElement | None | - | - |
| questionGroupWrapper | None | - | - |
| formElements | None | - | - |
| obsHolder | None | - | - |
| formElementStatuses | None | - | - |
| validationResults | None | - | - |
| } | None | - | - |

**Returns**: (none)



### validateNonRepeatableQuestionGroup({
  formElement, questionGroupWrapper, formElements, obsHolder, formElementStatuses, validationResults, })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  formElement | None | - | - |
| questionGroupWrapper | None | - | - |
| formElements | None | - | - |
| obsHolder | None | - | - |
| formElementStatuses | None | - | - |
| validationResults | None | - | - |
| } | None | - | - |

**Returns**: (none)



### validateChildInRepeatableGroup({ childFormElement, obsHolder, formElementStatuses, validationResults })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { childFormElement | None | - | - |
| obsHolder | None | - | - |
| formElementStatuses | None | - | - |
| validationResults } | None | - | - |

**Returns**: (none)



### getFEDataValidationErrors(filteredFormElements, obsHolder)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filteredFormElements | None | - | - |
| obsHolder | None | - | - |

**Returns**: (none)



### onNext({
  formElementGroup, observations, entity, filteredFormElements, validationResults, wizard, entityValidations, staticFormElementIds, })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  formElementGroup | None | - | - |
| observations | None | - | - |
| entity | None | - | - |
| filteredFormElements | None | - | - |
| validationResults | None | - | - |
| wizard | None | - | - |
| entityValidations | None | - | - |
| staticFormElementIds | None | - | - |
| } | None | - | - |

**Returns**: (none)



### anyFailedResultForCurrentFEG()

**Returns**: (none)



### onPrevious({ formElementGroup, observations, entity, filteredFormElements, validationResults, onSummaryPage, wizard })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { formElementGroup | None | - | - |
| observations | None | - | - |
| entity | None | - | - |
| filteredFormElements | None | - | - |
| validationResults | None | - | - |
| onSummaryPage | None | - | - |
| wizard } | None | - | - |

**Returns**: (none)



### handleValidationResult(newValidationResults, existingValidationResults)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newValidationResults | None | - | - |
| existingValidationResults | None | - | - |

**Returns**: (none)



### updateObservations(formElement, value, entity, observationsHolder, existingValidationResults, childFormElement, questionGroupIndex)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | None | - | - |
| value | None | - | - |
| entity | None | - | - |
| observationsHolder | None | - | - |
| existingValidationResults | None | - | - |
| childFormElement | None | - | - |
| questionGroupIndex | None | - | - |

**Returns**: (none)



### shouldKeepValidationResult(validationResult)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResult | None | - | - |

**Returns**: (none)



### getValidationResult(validationResults, formElementIdentifier)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationResults | None | - | - |
| formElementIdentifier | None | - | - |

**Returns**: (none)


