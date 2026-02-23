# API Reference: avni_client.py

**Language**: Python

**Source**: `src/clients/avni_client.py`

---

## Classes

### ApiResult

**Inherits from**: (none)

#### Methods

##### success_result(cls, data: Any) → 'ApiResult'

**Decorators**: `@classmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cls | None | - | - |
| data | Any | - | - |

**Returns**: `'ApiResult'`


##### error_result(cls, error: str) → 'ApiResult'

**Decorators**: `@classmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| cls | None | - | - |
| error | str | - | - |

**Returns**: `'ApiResult'`




### AvniClient

**Inherits from**: (none)

#### Methods

##### __init__(self, base_url = os.getenv('AVNI_BASE_URL'), timeout_seconds: float = 30.0)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| base_url | None | os.getenv('AVNI_BASE_URL') | - |
| timeout_seconds | float | 30.0 | - |


##### get_headers() → Dict[str, str]

**Decorators**: `@staticmethod`

**Returns**: `Dict[str, str]`


##### call_avni_server(self, method: str, endpoint: str, auth_token: str, data: Optional[Dict[str, Any]] = None) → ApiResult

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| method | str | - | - |
| endpoint | str | - | - |
| auth_token | str | - | - |
| data | Optional[Dict[str, Any]] | None | - |

**Returns**: `ApiResult`



