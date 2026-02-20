# API Reference: FormElement.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/application/FormElement.java`

---

## Classes

### FormElement

**Inherits from**: OrganisationAwareEntity

#### Methods

##### getName() → String

**Returns**: `String`


##### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`


##### getDisplayOrder() → Double

**Returns**: `Double`


##### setDisplayOrder(displayOrder: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `void`


##### getConcept() → Concept

**Returns**: `Concept`


##### setConcept(concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `void`


##### getKeyValues() → KeyValues

**Returns**: `KeyValues`


##### setKeyValues(newKeyValues: KeyValues) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newKeyValues | KeyValues | - | - |

**Returns**: `void`


##### isMandatory() → boolean

**Returns**: `boolean`


##### setMandatory(mandatory: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mandatory | boolean | - | - |

**Returns**: `void`


##### setMandatory(mandatory: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mandatory | Boolean | - | - |

**Returns**: `void`


##### getFormElementGroup() → FormElementGroup

**Returns**: `FormElementGroup`


##### setFormElementGroup(formElementGroup: FormElementGroup) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | FormElementGroup | - | - |

**Returns**: `void`


##### getType() → String

**Returns**: `String`


##### setType(type: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `void`


##### getValidFormat() → Format

**Returns**: `Format`


##### setValidFormat(validFormat: Format) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFormat | Format | - | - |

**Returns**: `void`


##### isSingleSelect() → boolean

**Returns**: `boolean`


##### isRepeatable() → boolean

**Returns**: `boolean`


##### getLastModifiedDateTime() → DateTime

**Returns**: `DateTime`


##### getNonApplicableFormElements() → Set<NonApplicableFormElement>

**Returns**: `Set<NonApplicableFormElement>`


##### getNonApplicable() → NonApplicableFormElement

**Returns**: `NonApplicableFormElement`


##### getNonApplicableFormElements() → return

**Returns**: `return`


##### setNonApplicable(nonApplicable: NonApplicableFormElement) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nonApplicable | NonApplicableFormElement | - | - |

**Returns**: `void`


##### isVoided() → boolean

**Returns**: `boolean`


##### getNonApplicable() → return

**Returns**: `return`


##### validate() → List<ValidationResult>

**Returns**: `List<ValidationResult>`


##### RuntimeException(-: String.format("%s, form: for, unknown: this.getType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | String.format("%s | - | - |
| form | for | - | - |
| unknown | this.getType( | - | - |

**Returns**: `new`


##### toString() → String

**Returns**: `String`


##### isApplicable() → boolean

**Returns**: `boolean`


##### getRule() → String

**Returns**: `String`


##### setRule(rule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `void`


##### getDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`


##### setDeclarativeRule(declarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRule | DeclarativeRule | - | - |

**Returns**: `void`


##### getGroup() → FormElement

**Returns**: `FormElement`


##### setGroup(group: FormElement) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | FormElement | - | - |

**Returns**: `void`


##### getDocumentation() → Documentation

**Returns**: `Documentation`


##### setDocumentation(documentation: Documentation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentation | Documentation | - | - |

**Returns**: `void`


##### isCodedMultiSelect() → boolean

**Returns**: `boolean`


##### isPartOfRepeatableQuestionGroup() → boolean

**Returns**: `boolean`


##### isPartOfQuestionGroup() → return

**Returns**: `return`


##### isPartOfQuestionGroup() → boolean

**Returns**: `boolean`


##### getGroup() → return

**Returns**: `return`


##### isQuestionGroupElement() → boolean

**Returns**: `boolean`




## Functions

### getName() → String

**Returns**: `String`



### setName(name: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `void`



### getDisplayOrder() → Double

**Returns**: `Double`



### setDisplayOrder(displayOrder: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `void`



### getConcept() → Concept

**Returns**: `Concept`



### setConcept(concept: Concept) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `void`



### getKeyValues() → KeyValues

**Returns**: `KeyValues`



### setKeyValues(newKeyValues: KeyValues) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newKeyValues | KeyValues | - | - |

**Returns**: `void`



### isMandatory() → boolean

**Returns**: `boolean`



### setMandatory(mandatory: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mandatory | boolean | - | - |

**Returns**: `void`



### setMandatory(mandatory: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mandatory | Boolean | - | - |

**Returns**: `void`



### getFormElementGroup() → FormElementGroup

**Returns**: `FormElementGroup`



### setFormElementGroup(formElementGroup: FormElementGroup) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | FormElementGroup | - | - |

**Returns**: `void`



### getType() → String

**Returns**: `String`



### setType(type: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `void`



### getValidFormat() → Format

**Returns**: `Format`



### setValidFormat(validFormat: Format) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFormat | Format | - | - |

**Returns**: `void`



### isSingleSelect() → boolean

**Returns**: `boolean`



### isRepeatable() → boolean

**Returns**: `boolean`



### getLastModifiedDateTime() → DateTime

**Returns**: `DateTime`



### getNonApplicableFormElements() → Set<NonApplicableFormElement>

**Returns**: `Set<NonApplicableFormElement>`



### getNonApplicable() → NonApplicableFormElement

**Returns**: `NonApplicableFormElement`



### getNonApplicableFormElements() → return

**Returns**: `return`



### setNonApplicable(nonApplicable: NonApplicableFormElement) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nonApplicable | NonApplicableFormElement | - | - |

**Returns**: `void`



### isVoided() → boolean

**Returns**: `boolean`



### getNonApplicable() → return

**Returns**: `return`



### validate() → List<ValidationResult>

**Returns**: `List<ValidationResult>`



### RuntimeException(-: String.format("%s, form: for, unknown: this.getType() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| - | String.format("%s | - | - |
| form | for | - | - |
| unknown | this.getType( | - | - |

**Returns**: `new`



### toString() → String

**Returns**: `String`



### isApplicable() → boolean

**Returns**: `boolean`



### getRule() → String

**Returns**: `String`



### setRule(rule: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `void`



### getDeclarativeRule() → DeclarativeRule

**Returns**: `DeclarativeRule`



### setDeclarativeRule(declarativeRule: DeclarativeRule) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRule | DeclarativeRule | - | - |

**Returns**: `void`



### getGroup() → FormElement

**Returns**: `FormElement`



### setGroup(group: FormElement) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | FormElement | - | - |

**Returns**: `void`



### getDocumentation() → Documentation

**Returns**: `Documentation`



### setDocumentation(documentation: Documentation) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentation | Documentation | - | - |

**Returns**: `void`



### isCodedMultiSelect() → boolean

**Returns**: `boolean`



### isPartOfRepeatableQuestionGroup() → boolean

**Returns**: `boolean`



### isPartOfQuestionGroup() → return

**Returns**: `return`



### isPartOfQuestionGroup() → boolean

**Returns**: `boolean`



### getGroup() → return

**Returns**: `return`



### isQuestionGroupElement() → boolean

**Returns**: `boolean`


