# API Reference: FormElementGroupBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/builder/FormElementGroupBuilder.java`

---

## Functions

### FormElementGroupBuilder(form: Form, existingFormElementGroup: FormElementGroup, newFormElementGroup: FormElementGroup, conceptService: ConceptService, documentationService: DocumentationService) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |
| existingFormElementGroup | FormElementGroup | - | - |
| newFormElementGroup | FormElementGroup | - | - |
| conceptService | ConceptService | - | - |
| documentationService | DocumentationService | - | - |

**Returns**: `public`



### FormElementGroupBuilder(form: Form, existingFormElementGroup: FormElementGroup, newFormElementGroup: FormElementGroup) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |
| existingFormElementGroup | FormElementGroup | - | - |
| newFormElementGroup | FormElementGroup | - | - |

**Returns**: `public`



### withName(name: String) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `FormElementGroupBuilder`



### BuilderException(name: format("FormElementGroup, unknown: name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | format("FormElementGroup | - | - |
| unknown | name | - | - |

**Returns**: `new`



### withDisplayOrder(displayOrder: Double) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `FormElementGroupBuilder`



### withIsVoided(isVoided: boolean) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isVoided | boolean | - | - |

**Returns**: `FormElementGroupBuilder`



### withRule(rule: String) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `FormElementGroupBuilder`



### withTimed(isTimed: boolean) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isTimed | boolean | - | - |

**Returns**: `FormElementGroupBuilder`



### withTextColour(textColour: String) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| textColour | String | - | - |

**Returns**: `FormElementGroupBuilder`



### withBackgroundColour(backgroundColour: String) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| backgroundColour | String | - | - |

**Returns**: `FormElementGroupBuilder`



### withStartTime(startTime: Long) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | Long | - | - |

**Returns**: `FormElementGroupBuilder`



### withStayTime(stayTime: Long) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stayTime | Long | - | - |

**Returns**: `FormElementGroupBuilder`



### withDeclarativeRule(declarativeRule: DeclarativeRule) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRule | DeclarativeRule | - | - |

**Returns**: `FormElementGroupBuilder`



### getExistingFormElement(uuid: String) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `FormElement`



### getExistingConcept(uuid: String, formElement: FormElement) → Concept

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| formElement | FormElement | - | - |

**Returns**: `Concept`



### FormBuilderException(with: format("Concept, unknown: uuid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | format("Concept | - | - |
| unknown | uuid | - | - |

**Returns**: `new`



### makeFormElements(formElementGroupContract: FormElementGroupContract) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroupContract | FormElementGroupContract | - | - |

**Returns**: `FormElementGroupBuilder`



### getDocumentation(documentationOption: JsonObject) → Documentation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentationOption | JsonObject | - | - |

**Returns**: `Documentation`



### makeFormElement(formElementContract: FormElementContract, formElementGroupContract: FormElementGroupContract) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementContract | FormElementContract | - | - |
| formElementGroupContract | FormElementGroupContract | - | - |

**Returns**: `FormElement`



### FormElement() → new

**Returns**: `new`



### FormElementBuilder(unknown: this.get() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | this.get( | - | - |

**Returns**: `new`



### getQuestionGroup(formElementContract: FormElementContract) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementContract | FormElementContract | - | - |

**Returns**: `FormElement`



### FormBuilderException(form: format("Parent, unknown: formElementContract.getParentFormElementUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | format("Parent | - | - |
| unknown | formElementContract.getParentFormElementUuid( | - | - |

**Returns**: `new`



### withoutFormElements(organisation: Organisation, formElementContracts: List<FormElementContract>) → FormElementGroupBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisation | Organisation | - | - |
| formElementContracts | List<FormElementContract> | - | - |

**Returns**: `FormElementGroupBuilder`



### NonApplicableFormElementBuilder(unknown: formElement.getNonApplicable() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | formElement.getNonApplicable( | - | - |

**Returns**: `new`



### getFormElement(formElementContract: FormElementContract) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementContract | FormElementContract | - | - |

**Returns**: `FormElement`



### FormBuilderException(with: format("FormElement, unknown: formElementContract.getUuid() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| with | format("FormElement | - | - |
| unknown | formElementContract.getUuid( | - | - |

**Returns**: `new`


