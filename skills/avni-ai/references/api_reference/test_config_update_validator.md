# API Reference: test_config_update_validator.py

**Language**: Python

**Source**: `tests/dify/config/validators/test_config_update_validator.py`

---

## Classes

### TestConfigUpdateValidator

Validates the specific structure expected in test-config-update.json

**Inherits from**: (none)

#### Methods

##### validate_test_update_config(config: Dict[str, Any]) → ValidationResult

Validate that the generated config matches test-config-update.json structure exactly.

Returns:
    ValidationResult with validation status and any errors

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Dict[str, Any] | - | - |

**Returns**: `ValidationResult`


##### _validate_updated_address_level_types(update_config: Dict[str, Any]) → List[str]

Validate specific updated address level types

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| update_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_updated_locations(update_config: Dict[str, Any]) → List[str]

Validate specific updated locations

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| update_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_updated_catchments(update_config: Dict[str, Any]) → List[str]

Validate specific updated catchments

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| update_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_updated_subject_types(update_config: Dict[str, Any]) → List[str]

Validate specific updated subject types

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| update_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_updated_programs(update_config: Dict[str, Any]) → List[str]

Validate specific updated programs

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| update_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_updated_encounter_types(update_config: Dict[str, Any]) → List[str]

Validate specific updated encounter types

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| update_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`



