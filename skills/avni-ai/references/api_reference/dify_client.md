# API Reference: dify_client.py

**Language**: Python

**Source**: `tests/dify/common/dify_client.py`

---

## Classes

### DifyClient

**Inherits from**: (none)

#### Methods

##### __init__(self, api_key: str)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| api_key | str | - | - |


##### send_message(self, query: str, conversation_id: str = '', user: str = 'automated_prompts_tester', inputs: Optional[Dict[str, Any]] = None, timeout: int = 120) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| query | str | - | - |
| conversation_id | str | '' | - |
| user | str | 'automated_prompts_tester' | - |
| inputs | Optional[Dict[str, Any]] | None | - |
| timeout | int | 120 | - |

**Returns**: `Dict[str, Any]`




## Functions

### extract_config_from_response(response_text: str) → Optional[Dict[str, Any]]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response_text | str | - | - |

**Returns**: `Optional[Dict[str, Any]]`


