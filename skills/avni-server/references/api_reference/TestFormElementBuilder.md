# API Reference: TestFormElementBuilder.java

**Language**: Java

**Source**: `avni-server-api/src/test/java/org/avni/server/application/TestFormElementBuilder.java`

---

## Classes

### TestFormElementBuilder

**Inherits from**: (none)

#### Methods

##### FormElement() → new

**Returns**: `new`


##### TestFormElementBuilder() → public

**Returns**: `public`


##### KeyValues() → new

**Returns**: `new`


##### withUuid(uuid: String) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `TestFormElementBuilder`


##### withName(name: String) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `TestFormElementBuilder`


##### withId(id: long) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `TestFormElementBuilder`


##### withConcept(concept: Concept) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `TestFormElementBuilder`


##### withQuestionGroupElement(formElement: FormElement) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |

**Returns**: `TestFormElementBuilder`


##### withRepeatable(isRepeatable: boolean) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isRepeatable | boolean | - | - |

**Returns**: `TestFormElementBuilder`


##### KeyValue(unknown: KeyType.repeatable, unknown: isRepeatable) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | KeyType.repeatable | - | - |
| unknown | isRepeatable | - | - |

**Returns**: `new`


##### withReadOnly(isEditable: boolean) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isEditable | boolean | - | - |

**Returns**: `TestFormElementBuilder`


##### KeyValue(unknown: KeyType.editable, unknown: isEditable) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | KeyType.editable | - | - |
| unknown | isEditable | - | - |

**Returns**: `new`


##### withType(type: FormElementType) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | FormElementType | - | - |

**Returns**: `TestFormElementBuilder`


##### withDisplayOrder(displayOrder: Double) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `TestFormElementBuilder`


##### withIsVoided(isVoided: boolean) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isVoided | boolean | - | - |

**Returns**: `TestFormElementBuilder`


##### withRule(rule: String) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `TestFormElementBuilder`


##### withMandatory(isMandatory: boolean) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isMandatory | boolean | - | - |

**Returns**: `TestFormElementBuilder`


##### withType(type: String) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `TestFormElementBuilder`


##### withFormElementGroup(formElementGroup: FormElementGroup) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | FormElementGroup | - | - |

**Returns**: `TestFormElementBuilder`


##### build() → FormElement

**Returns**: `FormElement`




## Functions

### FormElement() → new

**Returns**: `new`



### TestFormElementBuilder() → public

**Returns**: `public`



### KeyValues() → new

**Returns**: `new`



### withUuid(uuid: String) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |

**Returns**: `TestFormElementBuilder`



### withName(name: String) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | String | - | - |

**Returns**: `TestFormElementBuilder`



### withId(id: long) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | long | - | - |

**Returns**: `TestFormElementBuilder`



### withConcept(concept: Concept) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `TestFormElementBuilder`



### withQuestionGroupElement(formElement: FormElement) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |

**Returns**: `TestFormElementBuilder`



### withRepeatable(isRepeatable: boolean) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isRepeatable | boolean | - | - |

**Returns**: `TestFormElementBuilder`



### KeyValue(unknown: KeyType.repeatable, unknown: isRepeatable) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | KeyType.repeatable | - | - |
| unknown | isRepeatable | - | - |

**Returns**: `new`



### withReadOnly(isEditable: boolean) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isEditable | boolean | - | - |

**Returns**: `TestFormElementBuilder`



### KeyValue(unknown: KeyType.editable, unknown: isEditable) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | KeyType.editable | - | - |
| unknown | isEditable | - | - |

**Returns**: `new`



### withType(type: FormElementType) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | FormElementType | - | - |

**Returns**: `TestFormElementBuilder`



### withDisplayOrder(displayOrder: Double) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `TestFormElementBuilder`



### withIsVoided(isVoided: boolean) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isVoided | boolean | - | - |

**Returns**: `TestFormElementBuilder`



### withRule(rule: String) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rule | String | - | - |

**Returns**: `TestFormElementBuilder`



### withMandatory(isMandatory: boolean) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| isMandatory | boolean | - | - |

**Returns**: `TestFormElementBuilder`



### withType(type: String) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `TestFormElementBuilder`



### withFormElementGroup(formElementGroup: FormElementGroup) → TestFormElementBuilder

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElementGroup | FormElementGroup | - | - |

**Returns**: `TestFormElementBuilder`



### build() → FormElement

**Returns**: `FormElement`


