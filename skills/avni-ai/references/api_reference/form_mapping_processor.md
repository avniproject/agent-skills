# API Reference: form_mapping_processor.py

**Language**: Python

**Source**: `src/services/avni/form_mapping_processor.py`

---

## Classes

### FormMappingProcessor

**Inherits from**: (none)

#### Methods

##### find_registration_form_uuid(form_mappings: List[Dict], subject_type_uuid: str) → Optional[str]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form_mappings | List[Dict] | - | - |
| subject_type_uuid | str | - | - |

**Returns**: `Optional[str]`


##### find_program_enrolment_form_uuid(form_mappings: List[Dict], program_uuid: str) → Optional[str]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form_mappings | List[Dict] | - | - |
| program_uuid | str | - | - |

**Returns**: `Optional[str]`


##### find_program_exit_form_uuid(form_mappings: List[Dict], program_uuid: str) → Optional[str]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form_mappings | List[Dict] | - | - |
| program_uuid | str | - | - |

**Returns**: `Optional[str]`


##### find_program_encounter_form_uuid(form_mappings: List[Dict], encounter_type_uuid: str) → Optional[str]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form_mappings | List[Dict] | - | - |
| encounter_type_uuid | str | - | - |

**Returns**: `Optional[str]`


##### find_program_encounter_cancellation_form_uuid(form_mappings: List[Dict], encounter_type_uuid: str) → Optional[str]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form_mappings | List[Dict] | - | - |
| encounter_type_uuid | str | - | - |

**Returns**: `Optional[str]`


##### find_program_uuid_for_encounter_type(form_mappings: List[Dict], encounter_type_uuid: str) → Optional[str]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form_mappings | List[Dict] | - | - |
| encounter_type_uuid | str | - | - |

**Returns**: `Optional[str]`


##### find_subject_type_uuid_for_encounter_type(form_mappings: List[Dict], encounter_type_uuid: str) → Optional[str]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form_mappings | List[Dict] | - | - |
| encounter_type_uuid | str | - | - |

**Returns**: `Optional[str]`


##### find_subject_type_uuid_for_program(form_mappings: List[Dict], program_uuid: str) → Optional[str]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form_mappings | List[Dict] | - | - |
| program_uuid | str | - | - |

**Returns**: `Optional[str]`


##### process_subject_types(subject_types: List[Dict], form_mappings: List[Dict]) → List[Dict]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subject_types | List[Dict] | - | - |
| form_mappings | List[Dict] | - | - |

**Returns**: `List[Dict]`


##### process_programs(programs: List[Dict], form_mappings: List[Dict]) → List[Dict]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| programs | List[Dict] | - | - |
| form_mappings | List[Dict] | - | - |

**Returns**: `List[Dict]`


##### process_encounter_types(encounter_types: List[Dict], form_mappings: List[Dict]) → List[Dict]

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| encounter_types | List[Dict] | - | - |
| form_mappings | List[Dict] | - | - |

**Returns**: `List[Dict]`


##### enrich_config_with_form_mappings(config: Dict[str, Any], auth_token: str, session_logger: logging.Logger) → Dict[str, Any]

Main method to enrich configuration data with form mapping information.

Args:
    config: The complete existing configuration
    auth_token: Authentication token
    session_logger: Logger for session-specific logging

Returns:
    Enriched configuration with form mappings applied

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Dict[str, Any] | - | - |
| auth_token | str | - | - |
| session_logger | logging.Logger | - | - |

**Returns**: `Dict[str, Any]`



