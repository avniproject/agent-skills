# API Reference: locations.py

**Language**: Python

**Source**: `src/tools/admin/locations.py`

---

## Functions

### get_locations(auth_token: str) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |

**Returns**: `str`



### create_location(auth_token: str, contract: LocationContract) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |
| contract | LocationContract | - | - |

**Returns**: `str`



### update_location(auth_token: str, contract: LocationUpdateContract) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |
| contract | LocationUpdateContract | - | - |

**Returns**: `str`



### delete_location(auth_token: str, contract: LocationDeleteContract) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |
| contract | LocationDeleteContract | - | - |

**Returns**: `str`



### register_location_tools() → None

**Returns**: `None`


