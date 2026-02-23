# API Reference: config_processor.py

**Language**: Python

**Source**: `src/services/config_processor.py`

---

## Classes

### ConfigProcessResult

**Inherits from**: (none)

#### Methods

##### to_dict(self) → Dict[str, Any]

Convert to dictionary for JSON serialization.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`




### ConfigProcessor

**Inherits from**: (none)

#### Methods

##### process_config(config: Dict[str, Any], auth_token: str, task_id: str, progress_callback: Callable[[str], None]) → ConfigProcessResult

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Dict[str, Any] | - | - |
| auth_token | str | - | - |
| task_id | str | - | - |
| progress_callback | Callable[[str], None] | - | - |

**Returns**: `ConfigProcessResult`




## Functions

### setup_file_logging(task_id: str) → logging.Logger

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| task_id | str | - | - |

**Returns**: `logging.Logger`



### create_success_result(llm_result: Dict[str, Any], iterations: int) → ConfigProcessResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| llm_result | Dict[str, Any] | - | - |
| iterations | int | - | - |

**Returns**: `ConfigProcessResult`



### create_error_result(error_message: str, additional_errors: list = None) → ConfigProcessResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error_message | str | - | - |
| additional_errors | list | None | - |

**Returns**: `ConfigProcessResult`



### create_max_iterations_result(max_iterations: int) → ConfigProcessResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| max_iterations | int | - | - |

**Returns**: `ConfigProcessResult`


