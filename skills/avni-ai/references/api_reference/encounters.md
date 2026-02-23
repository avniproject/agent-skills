# API Reference: encounters.py

**Language**: Python

**Source**: `src/tools/app_designer/encounters.py`

---

## Functions

### add_non_empty_field(payload: dict, field_name: str, value) → None

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| payload | dict | - | - |
| field_name | str | - | - |
| value | None | - | - |

**Returns**: `None`



### create_encounter_type(auth_token: str, contract: EncounterTypeContract) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |
| contract | EncounterTypeContract | - | - |

**Returns**: `str`



### update_encounter_type(auth_token: str, contract: EncounterTypeUpdateContract) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |
| contract | EncounterTypeUpdateContract | - | - |

**Returns**: `str`



### delete_encounter_type(auth_token: str, contract: EncounterTypeDeleteContract) → str

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auth_token | str | - | - |
| contract | EncounterTypeDeleteContract | - | - |

**Returns**: `str`



### register_encounter_tools() → None

**Returns**: `None`


