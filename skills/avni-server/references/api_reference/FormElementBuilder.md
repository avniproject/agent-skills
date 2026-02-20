# API Reference: FormElementBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/builder/FormElementBuilder.java`

---

## Functions

### FormElementBuilder(formElementGroup: FormElementGroup, existingFormElement: FormElement, newFormElement: FormElement) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | FormElementGroup | - | - |
| existingFormElement | FormElement | - | - |
| newFormElement | FormElement | - | - |

**Returns**: `public`



### withName(name: String) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `FormElementBuilder`



### BuilderException(name: format("FormElement, unknown: name) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | format("FormElement | - | - |
| unknown | name | - | - |

**Returns**: `new`



### withDisplayOrder(displayOrder: Double) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `FormElementBuilder`



### withIsVoided(isVoided: boolean, isFormElementGroupVoided: boolean) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isVoided | boolean | - | - |
| isFormElementGroupVoided | boolean | - | - |

**Returns**: `FormElementBuilder`



### withMandatory(mandatory: Boolean) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mandatory | Boolean | - | - |

**Returns**: `FormElementBuilder`



### withKeyValues(keyValues: KeyValues) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValues | KeyValues | - | - |

**Returns**: `FormElementBuilder`



### withConcept(existingConcept: Concept) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| existingConcept | Concept | - | - |

**Returns**: `FormElementBuilder`



### withType(type: String) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `FormElementBuilder`



### withValidFormat(format: Format) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| format | Format | - | - |

**Returns**: `FormElementBuilder`



### withRule(rule: String) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `FormElementBuilder`



### withDeclarativeRule(declarativeRule: DeclarativeRule) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| declarativeRule | DeclarativeRule | - | - |

**Returns**: `FormElementBuilder`



### withGroup(group: FormElement) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | FormElement | - | - |

**Returns**: `FormElementBuilder`



### withDocumentation(documentation: Documentation) → FormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentation | Documentation | - | - |

**Returns**: `FormElementBuilder`



### linkWithFormElementGroup() → void

**Returns**: `void`



### build() → FormElement

**Returns**: `FormElement`


