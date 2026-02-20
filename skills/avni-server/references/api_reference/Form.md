# API Reference: Form.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/application/Form.java`

---

## Classes

### Form

**Inherits from**: OrganisationAwareEntity

#### Methods

##### Form() → public

**Returns**: `public`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getFormElementGroups() → Set<FormElementGroup>

**Returns**: `Set<FormElementGroup>`


##### getFormType() → FormType

**Returns**: `FormType`


##### setFormType(formType: FormType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | FormType | - | - |

**Returns**: `void`


##### create() → Form

**Returns**: `Form`


##### Form() → new

**Returns**: `new`


##### addFormElementGroup(formElementGroup: FormElementGroup) → FormElementGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | FormElementGroup | - | - |

**Returns**: `FormElementGroup`


##### findFormElementGroup(uuid: String) → FormElementGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `FormElementGroup`


##### getAllFormElements() → List<FormElement>

**Returns**: `List<FormElement>`


##### getApplicableFormElements() → List<FormElement>

**Returns**: `List<FormElement>`


##### getAllFormElements() → return

**Returns**: `return`


##### getAllCodedFormElements() → List<FormElement>

**Returns**: `List<FormElement>`


##### getApplicableFormElements() → return

**Returns**: `return`


##### getDecisionRule() → String

**Returns**: `String`


##### setDecisionRule(decisionRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionRule | String | - | - |

**Returns**: `void`


##### getVisitScheduleRule() → String

**Returns**: `String`


##### setVisitScheduleRule(visitScheduleRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleRule | String | - | - |

**Returns**: `void`


##### getValidationRule() → String

**Returns**: `String`


##### setValidationRule(validationRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationRule | String | - | - |

**Returns**: `void`


##### getValidationDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setValidationDeclarativeRule(validationDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getDecisionDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setDecisionDeclarativeRule(decisionDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getVisitScheduleDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setVisitScheduleDeclarativeRule(visitScheduleDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getChecklistsRule() → String

**Returns**: `String`


##### setChecklistsRule(checklistsRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistsRule | String | - | - |

**Returns**: `void`


##### getDecisionConcepts() → Set<Concept>

**Returns**: `Set<Concept>`


##### addDecisionConcept(concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `void`


##### DecisionConcept() → new

**Returns**: `new`


##### hasDecisionConcept(conceptUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUUID | String | - | - |

**Returns**: `boolean`


##### getDecisionConcept(unknown: conceptUUID) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptUUID | - | - |

**Returns**: `return`


##### getDecisionConcept(conceptUUID: String) → DecisionConcept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUUID | String | - | - |

**Returns**: `DecisionConcept`


##### removeDecisionConcept(concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `void`


##### getTaskScheduleRule() → String

**Returns**: `String`


##### setTaskScheduleRule(taskScheduleRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleRule | String | - | - |

**Returns**: `void`


##### getTaskScheduleDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setTaskScheduleDeclarativeRule(taskScheduleDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getAllElements(conceptDataType: ConceptDataType) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptDataType | ConceptDataType | - | - |

**Returns**: `List<FormElement>`


##### getEditFormRule() → String

**Returns**: `String`


##### setEditFormRule(editFormRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| editFormRule | String | - | - |

**Returns**: `void`




## Functions

### Form() → public

**Returns**: `public`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getFormElementGroups() → Set<FormElementGroup>

**Returns**: `Set<FormElementGroup>`



### getFormType() → FormType

**Returns**: `FormType`



### setFormType(formType: FormType) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formType | FormType | - | - |

**Returns**: `void`



### create() → Form

**Returns**: `Form`



### Form() → new

**Returns**: `new`



### addFormElementGroup(formElementGroup: FormElementGroup) → FormElementGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | FormElementGroup | - | - |

**Returns**: `FormElementGroup`



### findFormElementGroup(uuid: String) → FormElementGroup

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `FormElementGroup`



### getAllFormElements() → List<FormElement>

**Returns**: `List<FormElement>`



### getApplicableFormElements() → List<FormElement>

**Returns**: `List<FormElement>`



### getAllFormElements() → return

**Returns**: `return`



### getAllCodedFormElements() → List<FormElement>

**Returns**: `List<FormElement>`



### getApplicableFormElements() → return

**Returns**: `return`



### getDecisionRule() → String

**Returns**: `String`



### setDecisionRule(decisionRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionRule | String | - | - |

**Returns**: `void`



### getVisitScheduleRule() → String

**Returns**: `String`



### setVisitScheduleRule(visitScheduleRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleRule | String | - | - |

**Returns**: `void`



### getValidationRule() → String

**Returns**: `String`



### setValidationRule(validationRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationRule | String | - | - |

**Returns**: `void`



### getValidationDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setValidationDeclarativeRule(validationDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validationDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getDecisionDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setDecisionDeclarativeRule(decisionDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| decisionDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getVisitScheduleDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setVisitScheduleDeclarativeRule(visitScheduleDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visitScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getChecklistsRule() → String

**Returns**: `String`



### setChecklistsRule(checklistsRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checklistsRule | String | - | - |

**Returns**: `void`



### getDecisionConcepts() → Set<Concept>

**Returns**: `Set<Concept>`



### addDecisionConcept(concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `void`



### DecisionConcept() → new

**Returns**: `new`



### hasDecisionConcept(conceptUUID: String) → boolean

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUUID | String | - | - |

**Returns**: `boolean`



### getDecisionConcept(unknown: conceptUUID) → return

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | conceptUUID | - | - |

**Returns**: `return`



### getDecisionConcept(conceptUUID: String) → DecisionConcept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptUUID | String | - | - |

**Returns**: `DecisionConcept`



### removeDecisionConcept(concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `void`



### getTaskScheduleRule() → String

**Returns**: `String`



### setTaskScheduleRule(taskScheduleRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleRule | String | - | - |

**Returns**: `void`



### getTaskScheduleDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setTaskScheduleDeclarativeRule(taskScheduleDeclarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| taskScheduleDeclarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getAllElements(conceptDataType: ConceptDataType) → List<FormElement>

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptDataType | ConceptDataType | - | - |

**Returns**: `List<FormElement>`



### getEditFormRule() → String

**Returns**: `String`



### setEditFormRule(editFormRule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| editFormRule | String | - | - |

**Returns**: `void`


