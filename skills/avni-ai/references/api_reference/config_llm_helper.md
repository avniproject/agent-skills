# API Reference: config_llm_helper.py

**Language**: Python

**Source**: `src/services/config_llm_helper.py`

---

## Functions

### preprocess_config_uuids(config: Dict[str, Any]) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`



### build_system_instructions() → str

**Returns**: `str`



### build_initial_input(config: Dict[str, Any], operational_context: Dict[str, Any]) → str

Build initial input for the LLM.

Args:
    config: CRUD configuration object to process
    operational_context: Existing configuration from Avni

Returns:
    Initial input string for the LLM

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Dict[str, Any] | - | - |
| operational_context | Dict[str, Any] | - | - |

**Returns**: `str`



### parse_llm_response(response_content: str) → Dict[str, Any]

Parse JSON response from LLM.

Args:
    response_content: Raw response content from LLM

Returns:
    Parsed response dictionary with fallback structure

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response_content | str | - | - |

**Returns**: `Dict[str, Any]`



### extract_text_content(response) → str

Extracts readable text from an OpenAI response, handling both text and structured outputs.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | None | - | - |

**Returns**: `str`



### log_openai_response_summary(response, session_logger)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| response | None | - | - |
| session_logger | None | - | - |

**Returns**: (none)



### log_input_list(input_list, session_logger, prefix = 'Current input list')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| input_list | None | - | - |
| session_logger | None | - | - |
| prefix | None | 'Current input list' | - |

**Returns**: (none)



### _create_fallback_response(next_action: str) → Dict[str, Any]

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| next_action | str | - | - |

**Returns**: `Dict[str, Any]`



### replace_uuids(obj)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| obj | None | - | - |

**Returns**: (none)


