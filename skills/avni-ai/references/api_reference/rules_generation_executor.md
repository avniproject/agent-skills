# API Reference: rules_generation_executor.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/rulesGeneration/rules_generation_executor.py`

---

## Classes

### RulesGenerationExecutorWrapper

**Inherits from**: ConversationExecutorWrapper

#### Methods

##### __init__(self, config: TestConfiguration, scenario_prompts: list[str])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |
| scenario_prompts | list[str] | - | - |


##### execute(self, test_input: Dict[str, Any]) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`


##### get_executor_metadata(self) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`



