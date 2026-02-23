# API Reference: form_validation_judge.py

**Language**: Python

**Source**: `tests/judge_framework/interfaces/form_validation_judge.py`

---

## Classes

### FormValidationJudgeStrategy

Abstract interface for form validation judge strategies.
Evaluates the quality of form validation feedback and recommendations.

**Inherits from**: ABC

#### Methods

##### __init__(self, config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### evaluate(self, test_input: Dict[str, Any], test_output: Dict[str, Any]) → EvaluationResult

Evaluate form validation results

Args:
    test_input: Original form validation test data
    test_output: Results from form validation executor

Returns:
    EvaluationResult with scores and detailed feedback

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |
| test_output | Dict[str, Any] | - | - |

**Returns**: `EvaluationResult`


##### _get_evaluation_prompt(self) → str

Get the evaluation prompt for form validation

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### _get_evaluation_metrics(self) → List[str]

Get the list of metrics this strategy evaluates

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[str]`


##### _call_openai_for_evaluation(self, evaluation_context: str) → Dict[str, Any]

Common method to call OpenAI for evaluation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| evaluation_context | str | - | - |

**Returns**: `Dict[str, Any]`


##### _extract_scores_from_text(self, text: str) → Dict[str, Any]

Extract scores from unstructured text response

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| text | str | - | - |

**Returns**: `Dict[str, Any]`


##### _calculate_overall_success(self, scores: Dict[str, float]) → bool

Calculate overall success based on scores and thresholds

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| scores | Dict[str, float] | - | - |

**Returns**: `bool`




### DifyFormValidationJudgeStrategy

Form validation judge strategy that evaluates Dify workflow validation results

**Inherits from**: FormValidationJudgeStrategy

#### Methods

##### evaluate(self, test_input: Dict[str, Any], test_output: Dict[str, Any]) → EvaluationResult

Evaluate form validation results from Dify workflow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |
| test_output | Dict[str, Any] | - | - |

**Returns**: `EvaluationResult`


##### _parse_validation_response(self, response_text: str) → Dict[str, Any]

Parse the enhanced JSON response from Dify Form Assistant

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| response_text | str | - | - |

**Returns**: `Dict[str, Any]`


##### _calculate_performance_score(self, performance_metrics: Dict[str, Any], test_input: Dict[str, Any]) → float

Calculate performance score based on response time thresholds

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| performance_metrics | Dict[str, Any] | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `float`


##### _get_evaluation_prompt(self) → str

Get evaluation prompt for form validation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### _get_evaluation_metrics(self) → List[str]

Get evaluation metrics for form validation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[str]`



