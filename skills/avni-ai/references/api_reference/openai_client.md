# API Reference: openai_client.py

**Language**: Python

**Source**: `src/clients/openai_client.py`

---

## Classes

### OpenAIResponsesClient

**Inherits from**: (none)

#### Methods

##### __init__(self, api_key: str, timeout: float = 120.0)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| api_key | str | - | - |
| timeout | float | 120.0 | - |


##### _parse_function_arguments(arguments_str: str, call_id: str) → Optional[Dict[str, Any]]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| arguments_str | str | - | - |
| call_id | str | - | - |

**Returns**: `Optional[Dict[str, Any]]`


##### _add_function_output(input_list: List, call_id: str, result: Any, is_error: bool = False) → None

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input_list | List | - | - |
| call_id | str | - | - |
| result | Any | - | - |
| is_error | bool | False | - |

**Returns**: `None`


##### _format_tools_for_continuation(available_tools: Optional[List[Dict[str, Any]]], tool_registry) → List[Dict[str, Any]]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| available_tools | Optional[List[Dict[str, Any]]] | - | - |
| tool_registry | None | - | - |

**Returns**: `List[Dict[str, Any]]`


##### _extract_function_calls(response) → List[Dict[str, Any]]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | None | - | - |

**Returns**: `List[Dict[str, Any]]`


##### _execute_function_call(function_name: str, function_args: Dict[str, Any], tool_registry, auth_token: str, session_logger: Optional[logging.Logger] = None) → Any

Execute a single function call and return the result.

Args:
    function_name: Name of the function to call
    function_args: Arguments for the function
    tool_registry: The tool registry to execute functions
    auth_token: Authentication token to inject
    session_logger: Optional session logger for detailed logging

Returns:
    The function execution result

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| function_name | str | - | - |
| function_args | Dict[str, Any] | - | - |
| tool_registry | None | - | - |
| auth_token | str | - | - |
| session_logger | Optional[logging.Logger] | None | - |

**Returns**: `Any`


##### __aenter__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### __aexit__(self, exc_type, exc_val, exc_tb)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| exc_type | None | - | - |
| exc_val | None | - | - |
| exc_tb | None | - | - |


##### close(self)

Close the OpenAI client.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### create_response(self, input_text: str, tools: List[Dict[str, Any]], model: str = 'gpt-4o', instructions: Optional[str] = None) → Dict[str, Any]

Create a response using OpenAI's Responses API with conversation flow.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| input_text | str | - | - |
| tools | List[Dict[str, Any]] | - | - |
| model | str | 'gpt-4o' | - |
| instructions | Optional[str] | None | - |

**Returns**: `Dict[str, Any]`


##### _make_continuation_call(self, input_list: List, formatted_tools: List[Dict[str, Any]], model: str, instructions: Optional[str]) → Any

Make the continuation API call after function execution.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| input_list | List | - | - |
| formatted_tools | List[Dict[str, Any]] | - | - |
| model | str | - | - |
| instructions | Optional[str] | - | - |

**Returns**: `Any`


##### process_function_calls_and_continue(self, response: Dict[str, Any], tool_registry, auth_token: str, model: str = 'gpt-4o', instructions: Optional[str] = None, available_tools: List[Dict[str, Any]] = None, session_logger: Optional[logging.Logger] = None) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| response | Dict[str, Any] | - | - |
| tool_registry | None | - | - |
| auth_token | str | - | - |
| model | str | 'gpt-4o' | - |
| instructions | Optional[str] | None | - |
| available_tools | List[Dict[str, Any]] | None | - |
| session_logger | Optional[logging.Logger] | None | - |

**Returns**: `Dict[str, Any]`



