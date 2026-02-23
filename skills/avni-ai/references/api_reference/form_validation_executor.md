# API Reference: form_validation_executor.py

**Language**: Python

**Source**: `tests/judge_framework/interfaces/form_validation_executor.py`

---

## Classes

### FormValidationExecutor

Abstract interface for form validation executors.
Validates form elements against Avni rules and best practices.

**Inherits from**: ABC

#### Methods

##### __init__(self, config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### execute(self, test_input: Dict[str, Any]) → Dict[str, Any]

Execute form validation test

Args:
    test_input: Dictionary containing form element data to validate
        - form_element: Form element definition with name, dataType, type, etc.
        - form_context: Overall form structure and domain context
        - validation_rules: Specific rules to check against

Returns:
    Dictionary containing validation results
        - success: Whether validation completed successfully
        - validation_feedback: AI-generated validation feedback
        - issues_found: List of identified issues
        - recommendations: List of improvement suggestions
        - executive_summary: Overall assessment and scores

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`


##### get_executor_metadata(self) → Dict[str, Any]

Get metadata about this executor

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`




### DifyFormValidationExecutor

Form validation executor that uses Dify workflow for validation

**Inherits from**: FormValidationExecutor

#### Methods

##### __init__(self, config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |


##### _initialize_dify_client(self)

Initialize Dify client for form validation workflow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |


##### execute(self, test_input: Dict[str, Any]) → Dict[str, Any]

Execute form validation using Dify workflow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_input | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`


##### _format_form_validation_query(self, form_element: Dict[str, Any], form_context: Dict[str, Any]) → str

Format form element data into query text for Dify workflow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| form_element | Dict[str, Any] | - | - |
| form_context | Dict[str, Any] | - | - |

**Returns**: `str`


##### _build_context_string(self, form_element: Dict[str, Any], form_context: Dict[str, Any]) → str

Build context string for form validation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| form_element | Dict[str, Any] | - | - |
| form_context | Dict[str, Any] | - | - |

**Returns**: `str`


##### get_executor_metadata(self) → Dict[str, Any]

Get metadata about this executor

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`



