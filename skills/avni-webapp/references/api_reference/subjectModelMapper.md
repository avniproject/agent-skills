# API Reference: subjectModelMapper.js

**Language**: JavaScript

**Source**: `src/common/subjectModelMapper.js`

---

## Functions

### mapObservations(observations)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observations | None | - | - |

**Returns**: (none)



### getAnswers(answersJson)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| answersJson | None | - | - |

**Returns**: (none)



### looksLikeRepeatableQuestionGroupValue(value)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | None | - | - |

**Returns**: (none)



### mapObservation(observationJson)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| observationJson | None | - | - |

**Returns**: (none)



### mapProgramEnrolment(json, subject)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| json | None | - | - |
| subject | None | - | - |

**Returns**: (none)



### mapProgramEncounter(programEncounter, observations = programEncounter["observations"])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programEncounter | None | - | - |
| observations | None | programEncounter["observations"] | - |

**Returns**: (none)



### mapEncounter(encounterDetails, observations = encounterDetails["observations"])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounterDetails | None | - | - |
| observations | None | encounterDetails["observations"] | - |

**Returns**: (none)


