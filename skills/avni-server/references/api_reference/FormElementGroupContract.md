# API Reference: FormElementGroupContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/application/FormElementGroupContract.java`

---

## Classes

### FormElementGroupContract

**Inherits from**: ReferenceDataContract

#### Methods

##### FormElementGroupContract() → public

**Returns**: `public`


##### FormElementGroupContract(uuid: String, name: String, displayOrder: Double) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| name | String | - | - |
| displayOrder | Double | - | - |

**Returns**: `public`


##### getRule() → String

**Returns**: `String`


##### setRule(rule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `void`


##### getDisplayOrder() → Double

**Returns**: `Double`


##### setDisplayOrder(displayOrder: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `void`


##### getFormElements() → List<FormElementContract>

**Returns**: `List<FormElementContract>`


##### setFormElements(formElements: List<FormElementContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElements | List<FormElementContract> | - | - |

**Returns**: `void`


##### addFormElement(formElementContract: FormElementContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementContract | FormElementContract | - | - |

**Returns**: `void`


##### getDisplay() → String

**Returns**: `String`


##### getName() → return

**Returns**: `return`


##### setDisplay(display: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| display | String | - | - |

**Returns**: `void`


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


##### toString() → String

**Returns**: `String`


##### setOrganisationId(organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `void`


##### getOrganisationId() → Long

**Returns**: `Long`


##### fromFormElementGroup(feg: FormElementGroup) → FormElementGroupContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| feg | FormElementGroup | - | - |

**Returns**: `FormElementGroupContract`


##### FormElementGroupContract() → new

**Returns**: `new`


##### isVoided() → boolean

**Returns**: `boolean`




## Functions

### FormElementGroupContract() → public

**Returns**: `public`



### FormElementGroupContract(uuid: String, name: String, displayOrder: Double) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| name | String | - | - |
| displayOrder | Double | - | - |

**Returns**: `public`



### getRule() → String

**Returns**: `String`



### setRule(rule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `void`



### getDisplayOrder() → Double

**Returns**: `Double`



### setDisplayOrder(displayOrder: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `void`



### getFormElements() → List<FormElementContract>

**Returns**: `List<FormElementContract>`



### setFormElements(formElements: List<FormElementContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElements | List<FormElementContract> | - | - |

**Returns**: `void`



### addFormElement(formElementContract: FormElementContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementContract | FormElementContract | - | - |

**Returns**: `void`



### getDisplay() → String

**Returns**: `String`



### getName() → return

**Returns**: `return`



### setDisplay(display: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| display | String | - | - |

**Returns**: `void`



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



### toString() → String

**Returns**: `String`



### setOrganisationId(organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `void`



### getOrganisationId() → Long

**Returns**: `Long`



### fromFormElementGroup(feg: FormElementGroup) → FormElementGroupContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| feg | FormElementGroup | - | - |

**Returns**: `FormElementGroupContract`



### FormElementGroupContract() → new

**Returns**: `new`



### isVoided() → boolean

**Returns**: `boolean`


