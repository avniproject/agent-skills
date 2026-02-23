# API Reference: request_handlers.py

**Language**: Python

**Source**: `src/handlers/request_handlers.py`

---

## Classes

### ConfigRequestValidation

**Inherits from**: (none)

#### Methods

##### is_valid(self) → bool

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `bool`




## Functions

### validate_config_request(request: Request) → ConfigRequestValidation

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | Request | - | - |

**Returns**: `ConfigRequestValidation`



### create_error_response(message: str, status_code: int = 400) → JSONResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | str | - | - |
| status_code | int | 400 | - |

**Returns**: `JSONResponse`



### create_success_response(data: dict) → JSONResponse

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | dict | - | - |

**Returns**: `JSONResponse`



### process_config_async_request(request: Request) → JSONResponse

**Async function**

Start async configuration processing and return task ID immediately.

 Expected headers:
- avni-auth-token: Required authentication token for Avni API

Expected body:
{
    "configuration": {
        "response": "Assistant response message",
        "config": {
            "create": {
                "addressLevelTypes": [...],
                "locations": [...],
                "catchments": [...],
                "subjectTypes": [...],
                "programs": [...],
                "encounterTypes": [...]
            },
            "update": {
                "addressLevelTypes": [...],
                "locations": [...],
                "catchments": [...],
                "subjectTypes": [...],
                "programs": [...],
                "encounterTypes": [...]
            },
            "delete": {
                "addressLevelTypes": [...],
                "locations": [...],
                "catchments": [...],
                "subjectTypes": [...],
                "programs": [...],
                "encounterTypes": [...]
            }
        },
        "next_step": "Optional next step instruction",
        "org_type": "Trial|Production|UAT"
    }
}


Use /process-config-status/{task_id} to check progress.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| request | Request | - | - |

**Returns**: `JSONResponse`



### get_task_status(task_id: str) → JSONResponse

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| task_id | str | - | - |

**Returns**: `JSONResponse`


