# API Reference: config_generation_manager.py

**Language**: Python

**Source**: `tests/dify/config/config_generation_manager.py`

---

## Classes

### ConversationResult

**Inherits from**: (none)

#### Methods

##### has_config(self) → bool

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `bool`




### DifyConversationManager

**Inherits from**: (none)

#### Methods

##### __init__(self, dify_api_key: str)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| dify_api_key | str | - | - |


##### conduct_config_conversation(self, config_file_path: str, auth_token: str, org_name: str = 'Test Organization', org_type: str = 'Demo', user_name: str = 'Test User') → ConversationResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config_file_path | str | - | - |
| auth_token | str | - | - |
| org_name | str | 'Test Organization' | - |
| org_type | str | 'Demo' | - |
| user_name | str | 'Test User' | - |

**Returns**: `ConversationResult`


##### _create_initial_message(test_config: Dict[str, Any]) → str

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| test_config | Dict[str, Any] | - | - |

**Returns**: `str`


##### _generate_follow_up_message() → str

Generate the follow-up message - always the same response.

**Decorators**: `@staticmethod`

**Returns**: `str`



