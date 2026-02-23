# API Reference: session_context.py

**Language**: Python

**Source**: `src/utils/session_context.py`

---

## Functions

### get_session_logger() → Optional[logging.Logger]

**Returns**: `Optional[logging.Logger]`



### set_session_logger(logger: logging.Logger) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| logger | logging.Logger | - | - |

**Returns**: `None`



### log_payload(message: str, payload: Any = None) → None

Log payload to both standard logger and session logger if available.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | str | - | - |
| payload | Any | None | - |

**Returns**: `None`


