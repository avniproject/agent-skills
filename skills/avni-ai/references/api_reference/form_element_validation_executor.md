# API Reference: form_element_validation_executor.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/formElementValidation/form_element_validation_executor.py`

---

## Classes

### FormElementValidationExecutorWrapper

Wrapper for form element validation that uses the Dify Form Assistant workflow

**Inherits from**: DifyFormValidationExecutor

#### Methods

##### __init__(self, config: TestConfiguration)

Initialize with form validation configuration

Args:
    config: Test configuration with Dify API settings

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### execute(self, test_input: Dict[str, Any]) → Dict[str, Any]

Execute form element validation using the Dify Form Assistant workflow
This matches the actual YAML workflow structure

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`


##### get_executor_metadata(self) → Dict[str, Any]

Get metadata including information about form validation workflow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`



