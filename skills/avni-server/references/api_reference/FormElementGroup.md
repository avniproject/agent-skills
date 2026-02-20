# API Reference: FormElementGroup.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/application/FormElementGroup.java`

---

## Classes

### FormElementGroup

**Inherits from**: OrganisationAwareEntity

#### Methods

##### getRule() → String

**Returns**: `String`


##### setRule(rule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `void`


##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getFormElements() → Set<FormElement>

**Returns**: `Set<FormElement>`


##### getForm() → Form

**Returns**: `Form`


##### setForm(form: Form) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |

**Returns**: `void`


##### getDisplayOrder() → Double

**Returns**: `Double`


##### setDisplayOrder(displayOrder: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `void`


##### create() → FormElementGroup

**Returns**: `FormElementGroup`


##### FormElementGroup() → new

**Returns**: `new`


##### getDisplay() → String

**Returns**: `String`


##### getName() → return

**Returns**: `return`


##### findFormElementByConcept(conceptName: String) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `FormElement`


##### findFormElement(uuid: String) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `FormElement`


##### addFormElement(formElement: FormElement) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |

**Returns**: `void`


##### getApplicableFormElements() → List<FormElement>

**Returns**: `List<FormElement>`


##### getDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setDeclarativeRule(declarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getStartTime() → Long

**Returns**: `Long`


##### setStartTime(startTime: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | Long | - | - |

**Returns**: `void`


##### getStayTime() → Long

**Returns**: `Long`


##### setStayTime(stayTime: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stayTime | Long | - | - |

**Returns**: `void`


##### isTimed() → boolean

**Returns**: `boolean`


##### setTimed(timed: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| timed | boolean | - | - |

**Returns**: `void`


##### getTextColour() → String

**Returns**: `String`


##### setTextColour(textColour: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| textColour | String | - | - |

**Returns**: `void`


##### getBackgroundColour() → String

**Returns**: `String`


##### setBackgroundColour(backgroundColour: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| backgroundColour | String | - | - |

**Returns**: `void`




## Functions

### getRule() → String

**Returns**: `String`



### setRule(rule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `void`



### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getFormElements() → Set<FormElement>

**Returns**: `Set<FormElement>`



### getForm() → Form

**Returns**: `Form`



### setForm(form: Form) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | Form | - | - |

**Returns**: `void`



### getDisplayOrder() → Double

**Returns**: `Double`



### setDisplayOrder(displayOrder: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `void`



### create() → FormElementGroup

**Returns**: `FormElementGroup`



### FormElementGroup() → new

**Returns**: `new`



### getDisplay() → String

**Returns**: `String`



### getName() → return

**Returns**: `return`



### findFormElementByConcept(conceptName: String) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conceptName | String | - | - |

**Returns**: `FormElement`



### findFormElement(uuid: String) → FormElement

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `FormElement`



### addFormElement(formElement: FormElement) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |

**Returns**: `void`



### getApplicableFormElements() → List<FormElement>

**Returns**: `List<FormElement>`



### getDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setDeclarativeRule(declarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getStartTime() → Long

**Returns**: `Long`



### setStartTime(startTime: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| startTime | Long | - | - |

**Returns**: `void`



### getStayTime() → Long

**Returns**: `Long`



### setStayTime(stayTime: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| stayTime | Long | - | - |

**Returns**: `void`



### isTimed() → boolean

**Returns**: `boolean`



### setTimed(timed: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| timed | boolean | - | - |

**Returns**: `void`



### getTextColour() → String

**Returns**: `String`



### setTextColour(textColour: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| textColour | String | - | - |

**Returns**: `void`



### getBackgroundColour() → String

**Returns**: `String`



### setBackgroundColour(backgroundColour: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| backgroundColour | String | - | - |

**Returns**: `void`


