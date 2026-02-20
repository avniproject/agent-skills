# API Reference: WebConcept.ts

**Language**: TypeScript

**Source**: `src/common/model/WebConcept.ts`

---

## Classes

### WebConcept

**Inherits from**: (none)

#### Methods

##### adjustOrderOfAnswers(concept: WebConcept)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| concept | WebConcept | - | - |


##### forEach((answer, index)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| (answer | None | - | - |
| index | None | - | - |




### WebConceptAnswer

**Inherits from**: (none)



### WebConceptView

**Inherits from**: WebConcept

#### Methods

##### emptyConcept()


##### WebConceptView()


##### emptyAnswer()




### ConceptAnswerError

**Inherits from**: (none)

#### Methods

##### inError(type: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | - | - |




### WebConceptAnswerView

**Inherits from**: WebConceptAnswer

#### Methods

##### emptyAnswer()


##### WebConceptAnswerView()


##### inError("")

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| "" | None | - | - |




## Functions

### convertToNumberOrNull(value: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | any | - | - |

**Returns**: (none)



### isNullOrLessThanOrEqual(value: number | null, otherValue: number | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | number | null | - | - |
| otherValue | number | null | - | - |

**Returns**: (none)


