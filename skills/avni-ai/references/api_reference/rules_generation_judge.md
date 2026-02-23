# API Reference: rules_generation_judge.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/rulesGeneration/rules_generation_judge.py`

---

## Classes

### RulesGenerationJudgeWrapper

**Inherits from**: ConversationJudgeStrategyWrapper

#### Methods

##### __init__(self, config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### evaluate(self, test_input: Dict[str, Any], test_output: Dict[str, Any]) → EvaluationResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |
| test_output | Dict[str, Any] | - | - |

**Returns**: `EvaluationResult`


##### _create_evaluation_prompt(test_case: Dict[str, Any], actual_response: str) → str

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| test_case | Dict[str, Any] | - | - |
| actual_response | str | - | - |

**Returns**: `str`


##### get_judge_metadata(self) → Dict[str, Any]

Get metadata about the rules generation judge

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`



