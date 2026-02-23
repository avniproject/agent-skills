# API Reference: validation_result.py

**Language**: Python

**Source**: `tests/dify/config/validators/validation_result.py`

---

## Classes

### ValidationResult

**Inherits from**: (none)

#### Methods

##### has_errors(self) → bool

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `bool`


##### error_count(self) → int

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `int`


##### add_error(self, error: str) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| error | str | - | - |

**Returns**: `None`


##### add_errors(self, errors: List[str]) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| errors | List[str] | - | - |

**Returns**: `None`


##### success(cls) → 'ValidationResult'

**Decorators**: `@classmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cls | None | - | - |

**Returns**: `'ValidationResult'`


##### failure(cls, errors: List[str]) → 'ValidationResult'

**Decorators**: `@classmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cls | None | - | - |
| errors | List[str] | - | - |

**Returns**: `'ValidationResult'`



