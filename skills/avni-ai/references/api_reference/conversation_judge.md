# API Reference: conversation_judge.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/conversation/conversation_judge.py`

---

## Classes

### ConversationJudgeStrategyWrapper

Wrapper that adapts the existing ConversationJudgeStrategy to work with the new framework
while preserving the existing evaluation logic

**Inherits from**: JudgeStrategy

#### Methods

##### __init__(self, config: TestConfiguration)

Initialize with configuration that preserves existing evaluation criteria

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### evaluate(self, test_input: Dict[str, Any], test_output: Dict[str, Any]) → EvaluationResult

Evaluate conversation using the existing ConversationJudgeStrategy logic
This method preserves the existing evaluation approach while adapting to new interfaces

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |
| test_output | Dict[str, Any] | - | - |

**Returns**: `EvaluationResult`


##### _get_evaluation_prompt(self) → str

Get the evaluation prompt from the existing conversation judge strategy

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### _get_evaluation_metrics(self) → list

Get evaluation metrics from configuration

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `list`



