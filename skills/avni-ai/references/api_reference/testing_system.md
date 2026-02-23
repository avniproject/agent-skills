# API Reference: testing_system.py

**Language**: Python

**Source**: `tests/dify/prompts/testing_system.py`

---

## Classes

### TestingSystem

**Inherits from**: (none)

#### Methods

##### __init__(self, dify_api_key: str)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| dify_api_key | str | - | - |


##### run_single_conversation(self, scenario_index: int, cycle: int) → ConversationResult

Run a single conversation and get it reviewed

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| scenario_index | int | - | - |
| cycle | int | - | - |

**Returns**: `ConversationResult`


##### run_full_test_cycles(self, num_cycles: int = 5) → None

Run full test cycles across all scenarios

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| num_cycles | int | 5 | - |

**Returns**: `None`


##### generate_and_print_report(self) → None

Calculate statistics and print comprehensive report

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `None`



