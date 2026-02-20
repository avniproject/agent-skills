# API Reference: FormElementContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/application/FormElementContract.java`

---

## Classes

### FormElementContract

**Inherits from**: ReferenceDataContract

#### Methods

##### FormElementContract() → public

**Returns**: `public`


##### FormElementContract(uuid: String, userUUID: String, name: String, isMandatory: boolean, keyValues: KeyValues, concept: ConceptContract, type: String, validFormat: FormatContract) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| userUUID | String | - | - |
| name | String | - | - |
| isMandatory | boolean | - | - |
| keyValues | KeyValues | - | - |
| concept | ConceptContract | - | - |
| type | String | - | - |
| validFormat | FormatContract | - | - |

**Returns**: `public`


##### isMandatory() → boolean

**Returns**: `boolean`


##### setMandatory(mandatory: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mandatory | boolean | - | - |

**Returns**: `void`


##### getKeyValues() → KeyValues

**Returns**: `KeyValues`


##### KeyValues() → new

**Returns**: `new`


##### setKeyValues(keyValues: KeyValues) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValues | KeyValues | - | - |

**Returns**: `void`


##### getDisplayOrder() → Double

**Returns**: `Double`


##### setDisplayOrder(displayOrder: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `void`


##### validate() → ValidationResult

**Returns**: `ValidationResult`


##### typeSpecified() → boolean

**Returns**: `boolean`


##### getConcept() → ConceptContract

**Returns**: `ConceptContract`


##### setConcept(concept: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | ConceptContract | - | - |

**Returns**: `void`


##### getType() → String

**Returns**: `String`


##### setType(type: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `void`


##### toString() → String

**Returns**: `String`


##### getValidFormat() → Format

**Returns**: `Format`


##### setValidFormat(validFormat: FormatContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFormat | FormatContract | - | - |

**Returns**: `void`


##### setOrganisationId(organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `void`


##### getOrganisationId() → Long

**Returns**: `Long`


##### fromFormElement(formElement: FormElement) → FormElementContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |

**Returns**: `FormElementContract`


##### FormElementContract() → new

**Returns**: `new`


##### JsonObject() → new

**Returns**: `new`


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


##### getParentFormElementUuid() → String

**Returns**: `String`


##### setParentFormElementUuid(parentFormElementUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFormElementUuid | String | - | - |

**Returns**: `void`


##### getDocumentation() → JsonObject

**Returns**: `JsonObject`


##### setDocumentation(documentation: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentation | JsonObject | - | - |

**Returns**: `void`


##### isChildFormElement() → boolean

**Returns**: `boolean`


##### isVoided() → boolean

**Returns**: `boolean`




## Functions

### FormElementContract() → public

**Returns**: `public`



### FormElementContract(uuid: String, userUUID: String, name: String, isMandatory: boolean, keyValues: KeyValues, concept: ConceptContract, type: String, validFormat: FormatContract) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| uuid | String | - | - |
| userUUID | String | - | - |
| name | String | - | - |
| isMandatory | boolean | - | - |
| keyValues | KeyValues | - | - |
| concept | ConceptContract | - | - |
| type | String | - | - |
| validFormat | FormatContract | - | - |

**Returns**: `public`



### isMandatory() → boolean

**Returns**: `boolean`



### setMandatory(mandatory: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mandatory | boolean | - | - |

**Returns**: `void`



### getKeyValues() → KeyValues

**Returns**: `KeyValues`



### KeyValues() → new

**Returns**: `new`



### setKeyValues(keyValues: KeyValues) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValues | KeyValues | - | - |

**Returns**: `void`



### getDisplayOrder() → Double

**Returns**: `Double`



### setDisplayOrder(displayOrder: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| displayOrder | Double | - | - |

**Returns**: `void`



### validate() → ValidationResult

**Returns**: `ValidationResult`



### typeSpecified() → boolean

**Returns**: `boolean`



### getConcept() → ConceptContract

**Returns**: `ConceptContract`



### setConcept(concept: ConceptContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | ConceptContract | - | - |

**Returns**: `void`



### getType() → String

**Returns**: `String`



### setType(type: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | String | - | - |

**Returns**: `void`



### toString() → String

**Returns**: `String`



### getValidFormat() → Format

**Returns**: `Format`



### setValidFormat(validFormat: FormatContract) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| validFormat | FormatContract | - | - |

**Returns**: `void`



### setOrganisationId(organisationId: Long) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationId | Long | - | - |

**Returns**: `void`



### getOrganisationId() → Long

**Returns**: `Long`



### fromFormElement(formElement: FormElement) → FormElementContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| formElement | FormElement | - | - |

**Returns**: `FormElementContract`



### FormElementContract() → new

**Returns**: `new`



### JsonObject() → new

**Returns**: `new`



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



### getParentFormElementUuid() → String

**Returns**: `String`



### setParentFormElementUuid(parentFormElementUuid: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| parentFormElementUuid | String | - | - |

**Returns**: `void`



### getDocumentation() → JsonObject

**Returns**: `JsonObject`



### setDocumentation(documentation: JsonObject) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| documentation | JsonObject | - | - |

**Returns**: `void`



### isChildFormElement() → boolean

**Returns**: `boolean`



### isVoided() → boolean

**Returns**: `boolean`


