# API Reference: ai_reviewer.py

**Language**: Python

**Source**: `tests/dify/prompts/ai_reviewer.py`

---

## Classes

### AIReviewer

AI that reviews conversations between tester and assistant

**Inherits from**: (none)

#### Methods

##### __init__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### analyze_conversation(self, conversation: List[Dict[str, str]], scenario: str) → Dict[str, Any]

Analyze a conversation between tester and assistant

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| conversation | List[Dict[str, str]] | - | - |
| scenario | str | - | - |

**Returns**: `Dict[str, Any]`


##### validate_created_configuration(actual_config: Dict[str, Any], program_requirements: str, scenario_name: str) → Dict[str, Any]

Validate if the actual created Avni configuration meets the program requirements.

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| actual_config | Dict[str, Any] | - | - |
| program_requirements | str | - | - |
| scenario_name | str | - | - |

**Returns**: `Dict[str, Any]`



