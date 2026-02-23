# API Reference: form_element_validation_judge.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/formElementValidation/form_element_validation_judge.py`

---

## Classes

### FormElementValidationJudgeStrategyWrapper

Wrapper for form element validation judge strategy that evaluates Dify workflow results

**Inherits from**: DifyFormValidationJudgeStrategy

#### Methods

##### __init__(self, config: TestConfiguration)

Initialize with configuration that preserves form validation evaluation criteria

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### evaluate(self, test_input: Dict[str, Any], test_output: Dict[str, Any]) → EvaluationResult

Evaluate form validation using the Dify Form Assistant workflow logic

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |
| test_output | Dict[str, Any] | - | - |

**Returns**: `EvaluationResult`



