# API Reference: training.py

**Language**: Python

**Source**: `src/dspy/training.py`

---

## Classes

### SimplifiedAvniAnalyzer

Simplified analyzer that coordinates IssueIdentifier and SuggestionGenerator for single form elements.

**Inherits from**: dspy.Module

#### Methods

##### __init__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### forward(self, form_element: str)

Analyze single form element by first identifying issues, then generating suggestions.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| form_element | str | - | - |




### AvniEvaluationRubric

You are an expert evaluator for Avni form analysis. Evaluate the AI's response against the expected output.

Compare the predicted output with the expected output and score based on:
1. Accuracy: Are the same issues/suggestions identified?
2. Completeness: Is all important information covered?
3. Quality: Are messages clear and actionable?

Return a score as a decimal number between 0.0 and 1.0 where:
- 1.0 = Perfect match or equivalent quality
- 0.8 = Good with minor differences
- 0.6 = Partially correct
- 0.4 = Poor but some relevance
- 0.0 = Completely wrong or irrelevant

**Inherits from**: dspy.Signature



### AvniJudge

**Inherits from**: dspy.Module

#### Methods

##### __init__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### forward(self, form_element, expected_output, predicted_output)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| form_element | None | - | - |
| expected_output | None | - | - |
| predicted_output | None | - | - |




### CombinedResult

**Inherits from**: (none)

#### Methods

##### __init__(self, issue_result, suggestion_result)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| issue_result | None | - | - |
| suggestion_result | None | - | - |




## Functions

### create_issue_identification_examples() → List[dspy.Example]

Create training examples for issue identification on single form elements.

**Returns**: `List[dspy.Example]`



### create_suggestion_generation_examples() → List[dspy.Example]

Create training examples for suggestion generation on single form elements.

**Returns**: `List[dspy.Example]`



### create_avni_metric() → callable

Create LLM-as-a-judge metric following DSPy patterns.

**Returns**: `callable`



### train_simplified_analyzer(config: Dict[str, Any]) → SimplifiedAvniAnalyzer

**Async function**

Train the simplified analyzer using MIPROv2.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Dict[str, Any] | - | - |

**Returns**: `SimplifiedAvniAnalyzer`



### save_trained_model(model, filepath: str)

Save trained model using DSPy's save method.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model | None | - | - |
| filepath | str | - | - |

**Returns**: (none)



### load_trained_model(filepath: str)

Load trained model using DSPy's load method.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filepath | str | - | - |

**Returns**: (none)



### check_trained_model_exists(filepath: str) → bool

Check if trained model file exists.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filepath | str | - | - |

**Returns**: `bool`



### main()

**Async function**

Main training function with CLI interface.

**Returns**: (none)



### avni_correctness_metric(example, pred, trace = None)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| example | None | - | - |
| pred | None | - | - |
| trace | None | None | - |

**Returns**: (none)


