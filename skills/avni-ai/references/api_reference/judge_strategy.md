# API Reference: judge_strategy.py

**Language**: Python

**Source**: `tests/judge_framework/interfaces/judge_strategy.py`

---

## Classes

### JudgeStrategy

Abstract interface for judge strategies - evaluation logic.
Each implementation knows how to evaluate a specific type of test output.

**Inherits from**: ABC

#### Methods

##### __init__(self, config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### evaluate(self, test_input: Dict[str, Any], test_output: Dict[str, Any]) → EvaluationResult

Evaluate test output against expected behavior

Args:
    test_input: Input data from TestSubject
    test_output: Output data from TestExecutor

Returns:
    EvaluationResult with scores and details

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |
| test_output | Dict[str, Any] | - | - |

**Returns**: `EvaluationResult`


##### _get_evaluation_prompt(self) → str

Get the evaluation prompt template for this strategy

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


##### _calculate_overall_success(self, scores: Dict[str, float]) → bool

Calculate overall success based on scores and thresholds

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| scores | Dict[str, float] | - | - |

**Returns**: `bool`




### ConversationJudgeStrategy

Judge strategy for evaluating chat conversation quality

**Inherits from**: JudgeStrategy

#### Methods

##### evaluate(self, test_input: Dict[str, Any], test_output: Dict[str, Any]) → EvaluationResult

Evaluate conversation quality

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |
| test_output | Dict[str, Any] | - | - |

**Returns**: `EvaluationResult`


##### _get_evaluation_prompt(self) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### _get_evaluation_metrics(self) → List[str]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[str]`




### FormValidationJudgeStrategy

Judge strategy for evaluating Avni form element validations

**Inherits from**: JudgeStrategy

#### Methods

##### evaluate(self, test_input: Dict[str, Any], test_output: Dict[str, Any]) → EvaluationResult

Evaluate form validation correctness

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |
| test_output | Dict[str, Any] | - | - |

**Returns**: `EvaluationResult`


##### _get_evaluation_prompt(self) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### _get_evaluation_metrics(self) → List[str]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[str]`




### SchedulingRuleJudgeStrategy

Judge strategy for evaluating Avni visit scheduling rules

**Inherits from**: JudgeStrategy

#### Methods

##### evaluate(self, test_input: Dict[str, Any], test_output: Dict[str, Any]) → EvaluationResult

Evaluate scheduling rule correctness

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |
| test_output | Dict[str, Any] | - | - |

**Returns**: `EvaluationResult`


##### _get_evaluation_prompt(self) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### _get_evaluation_metrics(self) → List[str]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[str]`



