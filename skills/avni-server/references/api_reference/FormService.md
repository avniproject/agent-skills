# API Reference: FormService.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/service/FormService.java`

---

## Classes

### FormService

**Inherits from**: NonScopeAwareService

#### Methods

##### FormService(formRepository: FormRepository, organisationConfigService: OrganisationConfigService, conceptRepository: ConceptRepository, accessControlService: AccessControlService, formElementRepository: FormElementRepository, formElementGroupRepository: FormElementGroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRepository | FormRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| conceptRepository | ConceptRepository | - | - |
| accessControlService | AccessControlService | - | - |
| formElementRepository | FormElementRepository | - | - |
| formElementGroupRepository | FormElementGroupRepository | - | - |

**Returns**: `public`


##### saveForm(formRequest: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRequest | FormContract | - | - |

**Returns**: `void`


##### FormBuilder(unknown: existingForm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | existingForm | - | - |

**Returns**: `new`


##### mapDecisionConcepts(formRequest: FormContract, form: Form) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRequest | FormContract | - | - |
| form | Form | - | - |

**Returns**: `void`


##### getOrCreateForm(formUuid: String, formName: String, formType: FormType) → Form

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUuid | String | - | - |
| formName | String | - | - |
| formType | FormType | - | - |

**Returns**: `Form`


##### checkIfLocationConceptsHaveBeenUsed(formRequest: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRequest | FormContract | - | - |

**Returns**: `void`


##### getFormElementNamesForLocationTypeForms() → List<FormElement>

**Returns**: `List<FormElement>`


##### createDecisionFormElement(concepts: Set<Concept>) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concepts | Set<Concept> | - | - |

**Returns**: `List<FormElement>`


##### FormElement() → new

**Returns**: `new`


##### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`


##### validateForm(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`


##### InvalidObjectException("Cannot: String.format(, uses: ..}, twice": ..}, unknown: formContract.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| "Cannot | String.format( | - | - |
| uses | ..} | - | - |
| twice" | ..} | - | - |
| unknown | formContract.getUuid( | - | - |

**Returns**: `new`


##### InvalidObjectException("Cannot: String.format(, unknown: ..}, unknown: QuestionGroup{name='%s', unknown: ..}, Concept{name='%s': uses, twice": ..}, unknown: formContract.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| "Cannot | String.format( | - | - |
| unknown | ..} | - | - |
| unknown | QuestionGroup{name='%s' | - | - |
| unknown | ..} | - | - |
| Concept{name='%s' | uses | - | - |
| twice" | ..} | - | - |
| unknown | formContract.getUuid( | - | - |

**Returns**: `new`


##### InvalidObjectException(change: String.format("Cannot, unknown: existingFormElement.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| change | String.format("Cannot | - | - |
| unknown | existingFormElement.getName( | - | - |

**Returns**: `new`


##### InvalidObjectException(change: String.format("Cannot, unknown: existingFormElement.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| change | String.format("Cannot | - | - |
| unknown | existingFormElement.getName( | - | - |

**Returns**: `new`


##### validateDisplayOrderConstraints(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`


##### createErrorList() → List<String>

**Returns**: `List<String>`


##### throwValidationErrorsIfAny(errorList: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |

**Returns**: `void`


##### RuntimeException(unknown: combinedErrors) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | combinedErrors | - | - |

**Returns**: `new`


##### validateFormElementGroupDisplayOrders(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`


##### validateFormElementDisplayOrders(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`


##### validateAgainstExistingData(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`


##### getCurrentOrganisationId() → Long

**Returns**: `Long`


##### getExistingFormElementGroups(existingForm: Form, organisationId: Long) → List<FormElementGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingForm | Form | - | - |
| organisationId | Long | - | - |

**Returns**: `List<FormElementGroup>`


##### validateGroupConflicts(formContract: FormContract, existingGroups: List<FormElementGroup>, organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |
| existingGroups | List<FormElementGroup> | - | - |
| organisationId | Long | - | - |

**Returns**: `void`


##### validateElementConflicts(formContract: FormContract, existingGroups: List<FormElementGroup>, organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |
| existingGroups | List<FormElementGroup> | - | - |
| organisationId | Long | - | - |

**Returns**: `void`


##### findMatchingExistingGroup(existingGroups: List<FormElementGroup>, incomingGroup: FormElementGroupContract) → FormElementGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingGroups | List<FormElementGroup> | - | - |
| incomingGroup | FormElementGroupContract | - | - |

**Returns**: `FormElementGroup`


##### getExistingFormElements(group: FormElementGroup, organisationId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | FormElementGroup | - | - |
| organisationId | Long | - | - |

**Returns**: `List<FormElement>`


##### checkElementConflicts(incomingGroup: FormElementGroupContract, existingElements: List<FormElement>, organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| incomingGroup | FormElementGroupContract | - | - |
| existingElements | List<FormElement> | - | - |
| organisationId | Long | - | - |

**Returns**: `void`




## Functions

### FormService(formRepository: FormRepository, organisationConfigService: OrganisationConfigService, conceptRepository: ConceptRepository, accessControlService: AccessControlService, formElementRepository: FormElementRepository, formElementGroupRepository: FormElementGroupRepository) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRepository | FormRepository | - | - |
| organisationConfigService | OrganisationConfigService | - | - |
| conceptRepository | ConceptRepository | - | - |
| accessControlService | AccessControlService | - | - |
| formElementRepository | FormElementRepository | - | - |
| formElementGroupRepository | FormElementGroupRepository | - | - |

**Returns**: `public`



### saveForm(formRequest: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRequest | FormContract | - | - |

**Returns**: `void`



### FormBuilder(unknown: existingForm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | existingForm | - | - |

**Returns**: `new`



### mapDecisionConcepts(formRequest: FormContract, form: Form) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRequest | FormContract | - | - |
| form | Form | - | - |

**Returns**: `void`



### getOrCreateForm(formUuid: String, formName: String, formType: FormType) → Form

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formUuid | String | - | - |
| formName | String | - | - |
| formType | FormType | - | - |

**Returns**: `Form`



### checkIfLocationConceptsHaveBeenUsed(formRequest: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formRequest | FormContract | - | - |

**Returns**: `void`



### getFormElementNamesForLocationTypeForms() → List<FormElement>

**Returns**: `List<FormElement>`



### createDecisionFormElement(concepts: Set<Concept>) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concepts | Set<Concept> | - | - |

**Returns**: `List<FormElement>`



### FormElement() → new

**Returns**: `new`



### isNonScopeEntityChanged(lastModifiedDateTime: DateTime) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lastModifiedDateTime | DateTime | - | - |

**Returns**: `boolean`



### validateForm(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`



### InvalidObjectException("Cannot: String.format(, uses: ..}, twice": ..}, unknown: formContract.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| "Cannot | String.format( | - | - |
| uses | ..} | - | - |
| twice" | ..} | - | - |
| unknown | formContract.getUuid( | - | - |

**Returns**: `new`



### InvalidObjectException("Cannot: String.format(, unknown: ..}, unknown: QuestionGroup{name='%s', unknown: ..}, Concept{name='%s': uses, twice": ..}, unknown: formContract.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| "Cannot | String.format( | - | - |
| unknown | ..} | - | - |
| unknown | QuestionGroup{name='%s' | - | - |
| unknown | ..} | - | - |
| Concept{name='%s' | uses | - | - |
| twice" | ..} | - | - |
| unknown | formContract.getUuid( | - | - |

**Returns**: `new`



### InvalidObjectException(change: String.format("Cannot, unknown: existingFormElement.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| change | String.format("Cannot | - | - |
| unknown | existingFormElement.getName( | - | - |

**Returns**: `new`



### InvalidObjectException(change: String.format("Cannot, unknown: existingFormElement.getName() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| change | String.format("Cannot | - | - |
| unknown | existingFormElement.getName( | - | - |

**Returns**: `new`



### validateDisplayOrderConstraints(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`



### createErrorList() → List<String>

**Returns**: `List<String>`



### throwValidationErrorsIfAny(errorList: List<String>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| errorList | List<String> | - | - |

**Returns**: `void`



### RuntimeException(unknown: combinedErrors) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | combinedErrors | - | - |

**Returns**: `new`



### validateFormElementGroupDisplayOrders(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`



### validateFormElementDisplayOrders(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`



### validateAgainstExistingData(formContract: FormContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |

**Returns**: `void`



### getCurrentOrganisationId() → Long

**Returns**: `Long`



### getExistingFormElementGroups(existingForm: Form, organisationId: Long) → List<FormElementGroup>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingForm | Form | - | - |
| organisationId | Long | - | - |

**Returns**: `List<FormElementGroup>`



### validateGroupConflicts(formContract: FormContract, existingGroups: List<FormElementGroup>, organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |
| existingGroups | List<FormElementGroup> | - | - |
| organisationId | Long | - | - |

**Returns**: `void`



### validateElementConflicts(formContract: FormContract, existingGroups: List<FormElementGroup>, organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formContract | FormContract | - | - |
| existingGroups | List<FormElementGroup> | - | - |
| organisationId | Long | - | - |

**Returns**: `void`



### findMatchingExistingGroup(existingGroups: List<FormElementGroup>, incomingGroup: FormElementGroupContract) → FormElementGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingGroups | List<FormElementGroup> | - | - |
| incomingGroup | FormElementGroupContract | - | - |

**Returns**: `FormElementGroup`



### getExistingFormElements(group: FormElementGroup, organisationId: Long) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | FormElementGroup | - | - |
| organisationId | Long | - | - |

**Returns**: `List<FormElement>`



### checkElementConflicts(incomingGroup: FormElementGroupContract, existingElements: List<FormElement>, organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| incomingGroup | FormElementGroupContract | - | - |
| existingElements | List<FormElement> | - | - |
| organisationId | Long | - | - |

**Returns**: `void`


