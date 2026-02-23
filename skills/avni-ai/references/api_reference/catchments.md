# API Reference: catchments.py

**Language**: Python

**Source**: `src/tools/admin/catchments.py`

---

## Functions

### get_catchments(auth_token: str) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |

**Returns**: `str`



### create_catchment(auth_token: str, contract: CatchmentContract) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |
| contract | CatchmentContract | - | - |

**Returns**: `str`



### update_catchment(auth_token: str, contract: CatchmentUpdateContract) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |
| contract | CatchmentUpdateContract | - | - |

**Returns**: `str`



### delete_catchment(auth_token: str, contract: CatchmentDeleteContract) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |
| contract | CatchmentDeleteContract | - | - |

**Returns**: `str`



### register_catchment_tools() → None

**Returns**: `None`


