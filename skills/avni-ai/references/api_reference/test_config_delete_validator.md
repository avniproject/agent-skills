# API Reference: test_config_delete_validator.py

**Language**: Python

**Source**: `tests/dify/config/validators/test_config_delete_validator.py`

---

## Classes

### TestConfigDeleteValidator

**Inherits from**: (none)

#### Methods

##### validate_test_delete_config(config: Dict[str, Any]) → ValidationResult

Validate that the generated config matches test-config-delete.json structure exactly.

Returns:
    ValidationResult with validation status and any errors

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Dict[str, Any] | - | - |

**Returns**: `ValidationResult`


##### _validate_delete_encounter_types(delete_config: Dict[str, Any]) → List[str]

Validate specific encounter types to be deleted

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delete_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_delete_programs(delete_config: Dict[str, Any]) → List[str]

Validate specific programs to be deleted

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delete_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_delete_subject_types(delete_config: Dict[str, Any]) → List[str]

Validate specific subject types to be deleted

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delete_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_delete_catchments(delete_config: Dict[str, Any]) → List[str]

Validate specific catchments to be deleted

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delete_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_delete_locations(delete_config: Dict[str, Any]) → List[str]

Validate specific locations to be deleted

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delete_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_delete_address_level_types(delete_config: Dict[str, Any]) → List[str]

Validate specific address level types to be deleted

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delete_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### validate_deletion_order(delete_config: Dict[str, Any]) → List[str]

Validate that deletions are in the correct dependency order.
This is important for referential integrity.

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| delete_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`



