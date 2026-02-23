# API Reference: test_config_create_validator.py

**Language**: Python

**Source**: `tests/dify/config/validators/test_config_create_validator.py`

---

## Classes

### TestConfigCreateValidator

**Inherits from**: (none)

#### Methods

##### validate_test_create_config(config: Dict[str, Any]) → ValidationResult

Validate that the generated config matches test-config-create.json structure exactly.

Returns:
    ValidationResult with validation status and any errors

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Dict[str, Any] | - | - |

**Returns**: `ValidationResult`


##### _validate_crud_address_level_types(create_config: Dict[str, Any]) → List[str]

Validate specific address level types for CRUD test

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| create_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_crud_locations(create_config: Dict[str, Any]) → List[str]

Validate specific locations for CRUD test

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| create_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_crud_catchments(create_config: Dict[str, Any]) → List[str]

Validate specific catchments for CRUD test

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| create_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_crud_subject_types(create_config: Dict[str, Any]) → List[str]

Validate specific subject types for CRUD test

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| create_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_crud_programs(create_config: Dict[str, Any]) → List[str]

Validate specific programs for CRUD test

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| create_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`


##### _validate_crud_encounter_types(create_config: Dict[str, Any]) → List[str]

Validate specific encounter types for CRUD test

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| create_config | Dict[str, Any] | - | - |

**Returns**: `List[str]`



