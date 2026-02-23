# API Reference: tool_registry.py

**Language**: Python

**Source**: `src/services/tool_registry.py`

---

## Classes

### ToolDefinition

**Inherits from**: (none)



### ToolRegistry

**Inherits from**: (none)

#### Methods

##### __init__(self)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### register_tool(self, func: Callable, name: str = None, description: str = None) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| func | Callable | - | - |
| name | str | None | - |
| description | str | None | - |

**Returns**: `None`


##### get_openai_tools(self, filter_tools: List[str] = None) → List[Dict[str, Any]]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| filter_tools | List[str] | None | - |

**Returns**: `List[Dict[str, Any]]`


##### call_tool(self, tool_name: str, arguments: Dict[str, Any]) → Any

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| tool_name | str | - | - |
| arguments | Dict[str, Any] | - | - |

**Returns**: `Any`


##### list_tools(self) → List[str]

List all registered tool names.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[str]`




## Functions

### dataclass_to_json_schema(dataclass_type: type) → Dict[str, Any]

Convert a dataclass to JSON schema format.

Args:
    dataclass_type: The dataclass type to convert

Returns:
    JSON schema dictionary for the dataclass

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataclass_type | type | - | - |

**Returns**: `Dict[str, Any]`



### type_to_json_schema(param_type: type) → Dict[str, Any]

Convert a Python type to JSON schema format.

Args:
    param_type: The Python type to convert

Returns:
    JSON schema dictionary for the type

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| param_type | type | - | - |

**Returns**: `Dict[str, Any]`



### convert_arguments_for_function(func: Callable, arguments: Dict[str, Any]) → Dict[str, Any]

Convert dictionary arguments to appropriate types based on function signature.

This function examines the function's type hints and converts dictionary arguments
to dataclass instances where the parameter type is a dataclass.

Args:
    func: The function whose signature will be used for type conversion
    arguments: Dictionary of arguments to convert

Returns:
    Dictionary with converted arguments where applicable

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| func | Callable | - | - |
| arguments | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`



### convert_dict_to_dataclass(dataclass_type: type, data: Dict[str, Any])

Convert a dictionary to a dataclass instance, handling nested dataclasses and lists.

Args:
    dataclass_type: The dataclass type to convert to
    data: Dictionary containing the data to convert

Returns:
    Instance of the dataclass

Raises:
    TypeError: If the dataclass cannot be instantiated with the provided data
    ValueError: If dataclass_type is not actually a dataclass

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dataclass_type | type | - | - |
| data | Dict[str, Any] | - | - |

**Returns**: (none)



### convert_value_to_type(value: Any, target_type: type) → Any

Convert a value to the target type, handling nested structures.

Args:
    value: The value to convert
    target_type: The target type to convert to

Returns:
    Converted value

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | Any | - | - |
| target_type | type | - | - |

**Returns**: `Any`


