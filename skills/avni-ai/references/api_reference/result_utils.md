# API Reference: result_utils.py

**Language**: Python

**Source**: `src/utils/result_utils.py`

---

## Functions

### format_error_message(result: ApiResult, operation: str) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| result | ApiResult | - | - |
| operation | str | - | - |

**Returns**: `str`



### format_empty_message(resource: str) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | str | - | - |

**Returns**: `str`



### format_list_response(items, id_key: str = 'id', name_key: str = 'name', extra_key: Optional[str] = None) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| items | None | - | - |
| id_key | str | 'id' | - |
| name_key | str | 'name' | - |
| extra_key | Optional[str] | None | - |

**Returns**: `str`



### format_creation_response(resource: str, name: str, id_field: str, response_data: Dict[str, Any]) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | str | - | - |
| name | str | - | - |
| id_field | str | - | - |
| response_data | Dict[str, Any] | - | - |

**Returns**: `str`



### format_update_response(resource: str, name: str, id_field: str, response_data: Dict[str, Any]) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | str | - | - |
| name | str | - | - |
| id_field | str | - | - |
| response_data | Dict[str, Any] | - | - |

**Returns**: `str`



### format_deletion_response(resource: str, resource_id: Any) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resource | str | - | - |
| resource_id | Any | - | - |

**Returns**: `str`



### format_validation_error(operation: str, error_message: str) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| operation | str | - | - |
| error_message | str | - | - |

**Returns**: `str`



### format_implementation_deletion_response(delete_metadata: bool = True, delete_admin_config: bool = True) → str

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delete_metadata | bool | True | - |
| delete_admin_config | bool | True | - |

**Returns**: `str`


