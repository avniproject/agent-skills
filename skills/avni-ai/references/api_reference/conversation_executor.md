# API Reference: conversation_executor.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/conversation/conversation_executor.py`

---

## Classes

### ConversationExecutorWrapper

Wrapper that adapts the existing conversation execution logic to the new framework

**Inherits from**: ConversationExecutor

#### Methods

##### __init__(self, config: TestConfiguration, scenario_prompts: list, conversation_strategy: Optional[ConversationGenerationStrategy] = None)

Initialize with existing conversation testing components

Args:
    config: Test configuration
    scenario_prompts: List of scenario prompts from existing testing system
    conversation_strategy: Optional custom conversation strategy

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |
| scenario_prompts | list | - | - |
| conversation_strategy | Optional[ConversationGenerationStrategy] | None | - |


##### execute(self, test_input: Dict[str, Any]) → Dict[str, Any]

Execute conversation test using the framework's ConversationExecutor
This method leverages the existing conversation strategy integration

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`


##### get_executor_metadata(self) → Dict[str, Any]

Get metadata including information about wrapped components

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`



