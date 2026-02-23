# API Reference: task_manager.py

**Language**: Python

**Source**: `src/services/task_manager.py`

---

## Classes

### ConfigTask

**Inherits from**: (none)

#### Methods

##### to_dict(self) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`




### TaskManager

**Inherits from**: (none)

#### Methods

##### __init__(self, task_expiry_hours: int = 24)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| task_expiry_hours | int | 24 | - |


##### _ensure_cleanup_started(self) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `None`


##### _periodic_cleanup(self) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `None`


##### create_task(self, config_data: Dict[str, Any], auth_token: str) → ConfigTask

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config_data | Dict[str, Any] | - | - |
| auth_token | str | - | - |

**Returns**: `ConfigTask`


##### get_task(self, task_id: str) → Optional[ConfigTask]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| task_id | str | - | - |

**Returns**: `Optional[ConfigTask]`


##### update_task_status(self, task_id: str, status: TaskStatus, result: Optional[Dict[str, Any]] = None, error: Optional[str] = None, progress: Optional[str] = None) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| task_id | str | - | - |
| status | TaskStatus | - | - |
| result | Optional[Dict[str, Any]] | None | - |
| error | Optional[str] | None | - |
| progress | Optional[str] | None | - |

**Returns**: `None`


##### start_background_task(self, task_id: str) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| task_id | str | - | - |

**Returns**: `None`


##### _create_progress_updater(self, task_id: str) → Callable[[str], None]

Create a progress updater callback for the given task.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| task_id | str | - | - |

**Returns**: `Callable[[str], None]`


##### _process_config_background(self, task_id: str) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| task_id | str | - | - |

**Returns**: `None`


##### cleanup_old_tasks(self) → int

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `int`


##### get_task_count(self) → Dict[str, int]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, int]`




## Functions

### get_current_task_id() → Optional[str]

**Returns**: `Optional[str]`



### set_current_task_id(task_id: str) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| task_id | str | - | - |

**Returns**: `None`



### updater(message: str)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | str | - | - |

**Returns**: (none)


