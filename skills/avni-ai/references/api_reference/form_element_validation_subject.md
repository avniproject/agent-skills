# API Reference: form_element_validation_subject.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/formElementValidation/form_element_validation_subject.py`

---

## Classes

### FormElementValidationTestSubject

Test subject for form element validation that matches the actual Dify workflow

**Inherits from**: TestSubject

#### Methods

##### __init__(self, form_test_case: Dict[str, Any], config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| form_test_case | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |


##### get_test_identifier(self) → str

Get unique identifier for this form validation test

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### get_test_input(self) → Dict[str, Any]

Get input data for form validation execution

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`


##### get_expected_behavior(self) → str

Get description of expected behavior for evaluation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### get_evaluation_context(self) → Dict[str, Any]

Get additional context needed for evaluation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`


##### _get_auth_token(self) → str

Get auth token from environment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### _get_mcp_server_url(self) → str

Get MCP server URL from environment

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`




### FormElementValidationTestSubjectFactory

Factory for creating form element validation test subjects

**Inherits from**: TestSubjectFactory

#### Methods

##### __init__(self, form_test_cases: List[Dict[str, Any]])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| form_test_cases | List[Dict[str, Any]] | - | - |


##### create_from_static_data(self, static_case: Dict[str, Any], config: TestConfiguration) → TestSubject

Create form validation test subject from static test case

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| static_case | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |

**Returns**: `TestSubject`


##### create_from_ai_generation(self, ai_case_data: Dict[str, Any], config: TestConfiguration) → TestSubject

Create form validation test subject from AI-generated test case

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| ai_case_data | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |

**Returns**: `TestSubject`


##### get_generation_prompt_template(self) → str

Get the prompt template for AI test generation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### create_static_test_cases(self) → List[Dict[str, Any]]

Create static test cases from curated reference bundle analysis

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[Dict[str, Any]]`



