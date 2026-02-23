# API Reference: mch_integration_test.py

**Language**: Python

**Source**: `tests/dify/config/mch_integration_test.py`

---

## Classes

### ConversationResult

**Inherits from**: (none)



### ValidationResult

**Inherits from**: (none)



### MCHTestResult

**Inherits from**: (none)



### MCHIntegrationTest

**Inherits from**: (none)

#### Methods

##### __init__(self, dify_api_key: str, avni_auth_token: str)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| dify_api_key | str | - | - |
| avni_auth_token | str | - | - |


##### run_test(self) → MCHTestResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `MCHTestResult`


##### _conduct_mch_conversation(self) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`


##### generate_tester_message(ai_tester, conversation_history: List[Dict[str, Any]], round_count: int) → str

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ai_tester | None | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| round_count | int | - | - |

**Returns**: `str`


##### create_dify_inputs(auth_token: str) → Dict[str, Any]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |

**Returns**: `Dict[str, Any]`


##### is_satisfaction_expressed(user_message: str) → bool

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| user_message | str | - | - |

**Returns**: `bool`


##### is_timeout_response(dify_response: Dict[str, Any]) → bool

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dify_response | Dict[str, Any] | - | - |

**Returns**: `bool`


##### handle_satisfaction_response(dify_response: Dict[str, Any], conversation_history: List[Dict[str, Any]], user_message: str, round_count: int) → None

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dify_response | Dict[str, Any] | - | - |
| conversation_history | List[Dict[str, Any]] | - | - |
| user_message | str | - | - |
| round_count | int | - | - |

**Returns**: `None`


##### handle_normal_conversation_timeout(conversation_history: List[Dict[str, Any]], user_message: str, round_count: int) → bool

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation_history | List[Dict[str, Any]] | - | - |
| user_message | str | - | - |
| round_count | int | - | - |

**Returns**: `bool`


##### record_normal_conversation(conversation_history: List[Dict[str, Any]], user_message: str, assistant_response: str, round_count: int) → None

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversation_history | List[Dict[str, Any]] | - | - |
| user_message | str | - | - |
| assistant_response | str | - | - |
| round_count | int | - | - |

**Returns**: `None`




## Functions

### print_test_results(result: MCHTestResult) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| result | MCHTestResult | - | - |

**Returns**: `None`



### main()

**Async function**

**Returns**: (none)


