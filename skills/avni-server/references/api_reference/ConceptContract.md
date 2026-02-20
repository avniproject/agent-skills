# API Reference: ConceptContract.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/web/request/ConceptContract.java`

---

## Classes

### ConceptContract

**Inherits from**: ReferenceDataContract

#### Methods

##### create(concept: Concept) → ConceptContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `ConceptContract`


##### ConceptContract() → new

**Returns**: `new`


##### createForSearchResult(concept: Concept) → ConceptContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `ConceptContract`


##### ConceptContract() → new

**Returns**: `new`


##### getKeyValues() → KeyValues

**Returns**: `KeyValues`


##### setKeyValues(keyValues: KeyValues) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValues | KeyValues | - | - |

**Returns**: `void`


##### getDataType() → String

**Returns**: `String`


##### setDataType(dataType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataType | String | - | - |

**Returns**: `void`


##### isCoded() → boolean

**Returns**: `boolean`


##### isQuestionGroup() → boolean

**Returns**: `boolean`


##### getAnswers() → List<ConceptContract>

**Returns**: `List<ConceptContract>`


##### setAnswers(answers: List<ConceptContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answers | List<ConceptContract> | - | - |

**Returns**: `void`


##### getLowAbsolute() → Double

**Returns**: `Double`


##### setLowAbsolute(lowAbsolute: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowAbsolute | Double | - | - |

**Returns**: `void`


##### getHighAbsolute() → Double

**Returns**: `Double`


##### setHighAbsolute(highAbsolute: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| highAbsolute | Double | - | - |

**Returns**: `void`


##### getLowNormal() → Double

**Returns**: `Double`


##### setLowNormal(lowNormal: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowNormal | Double | - | - |

**Returns**: `void`


##### getHighNormal() → Double

**Returns**: `Double`


##### setHighNormal(highNormal: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| highNormal | Double | - | - |

**Returns**: `void`


##### getUnit() → String

**Returns**: `String`


##### setUnit(unit: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unit | String | - | - |

**Returns**: `void`


##### isAbnormal() → boolean

**Returns**: `boolean`


##### setAbnormal(abnormal: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| abnormal | boolean | - | - |

**Returns**: `void`


##### isUnique() → boolean

**Returns**: `boolean`


##### setUnique(unique: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unique | boolean | - | - |

**Returns**: `void`


##### getOrganisationUUID() → String

**Returns**: `String`


##### setOrganisationUUID(organisationUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |

**Returns**: `void`


##### getOrder() → Double

**Returns**: `Double`


##### setOrder(order: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | Double | - | - |

**Returns**: `void`


##### toString() → String

**Returns**: `String`


##### getActive() → Boolean

**Returns**: `Boolean`


##### setActive(active: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `void`


##### getMedia() → List<ConceptMedia>

**Returns**: `List<ConceptMedia>`


##### setMedia(media: List<ConceptMedia>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| media | List<ConceptMedia> | - | - |

**Returns**: `void`


##### hasNameOrUUID() → boolean

**Returns**: `boolean`


##### validate() → void

**Returns**: `void`


##### BadRequestError(must: "Concept) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| must | "Concept | - | - |

**Returns**: `new`




## Functions

### create(concept: Concept) → ConceptContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `ConceptContract`



### ConceptContract() → new

**Returns**: `new`



### createForSearchResult(concept: Concept) → ConceptContract

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | Concept | - | - |

**Returns**: `ConceptContract`



### ConceptContract() → new

**Returns**: `new`



### getKeyValues() → KeyValues

**Returns**: `KeyValues`



### setKeyValues(keyValues: KeyValues) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keyValues | KeyValues | - | - |

**Returns**: `void`



### getDataType() → String

**Returns**: `String`



### setDataType(dataType: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataType | String | - | - |

**Returns**: `void`



### isCoded() → boolean

**Returns**: `boolean`



### isQuestionGroup() → boolean

**Returns**: `boolean`



### getAnswers() → List<ConceptContract>

**Returns**: `List<ConceptContract>`



### setAnswers(answers: List<ConceptContract>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answers | List<ConceptContract> | - | - |

**Returns**: `void`



### getLowAbsolute() → Double

**Returns**: `Double`



### setLowAbsolute(lowAbsolute: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowAbsolute | Double | - | - |

**Returns**: `void`



### getHighAbsolute() → Double

**Returns**: `Double`



### setHighAbsolute(highAbsolute: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| highAbsolute | Double | - | - |

**Returns**: `void`



### getLowNormal() → Double

**Returns**: `Double`



### setLowNormal(lowNormal: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| lowNormal | Double | - | - |

**Returns**: `void`



### getHighNormal() → Double

**Returns**: `Double`



### setHighNormal(highNormal: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| highNormal | Double | - | - |

**Returns**: `void`



### getUnit() → String

**Returns**: `String`



### setUnit(unit: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unit | String | - | - |

**Returns**: `void`



### isAbnormal() → boolean

**Returns**: `boolean`



### setAbnormal(abnormal: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| abnormal | boolean | - | - |

**Returns**: `void`



### isUnique() → boolean

**Returns**: `boolean`



### setUnique(unique: boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unique | boolean | - | - |

**Returns**: `void`



### getOrganisationUUID() → String

**Returns**: `String`



### setOrganisationUUID(organisationUUID: String) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organisationUUID | String | - | - |

**Returns**: `void`



### getOrder() → Double

**Returns**: `Double`



### setOrder(order: Double) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| order | Double | - | - |

**Returns**: `void`



### toString() → String

**Returns**: `String`



### getActive() → Boolean

**Returns**: `Boolean`



### setActive(active: Boolean) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| active | Boolean | - | - |

**Returns**: `void`



### getMedia() → List<ConceptMedia>

**Returns**: `List<ConceptMedia>`



### setMedia(media: List<ConceptMedia>) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| media | List<ConceptMedia> | - | - |

**Returns**: `void`



### hasNameOrUUID() → boolean

**Returns**: `boolean`



### validate() → void

**Returns**: `void`



### BadRequestError(must: "Concept) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| must | "Concept | - | - |

**Returns**: `new`


