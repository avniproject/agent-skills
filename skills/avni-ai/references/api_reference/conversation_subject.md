# API Reference: conversation_subject.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/conversation/conversation_subject.py`

---

## Classes

### ConversationTestSubject

Test subject for conversation testing that wraps existing scenario data

**Inherits from**: TestSubject

#### Methods

##### __init__(self, scenario_data: Dict[str, Any], config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| scenario_data | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |


##### get_test_identifier(self) → str

Get unique identifier for this conversation test

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### get_test_input(self) → Dict[str, Any]

Get input data for conversation execution

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


##### _get_default_dify_inputs(self) → Dict[str, Any]

Get default inputs for Dify workflow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`




### ConversationTestSubjectFactory

Factory for creating conversation test subjects from static and AI-generated data

**Inherits from**: TestSubjectFactory

#### Methods

##### __init__(self, scenario_prompts: List[str])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| scenario_prompts | List[str] | - | - |


##### create_from_static_data(self, static_case: Dict[str, Any], config: TestConfiguration) → TestSubject

Create conversation test subject from static test case data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| static_case | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |

**Returns**: `TestSubject`


##### create_from_ai_generation(self, ai_case_data: Dict[str, Any], config: TestConfiguration) → TestSubject

Create conversation test subject from AI-generated test case

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


##### _extract_scenario_names(self) → List[str]

Extract scenario names from prompts for reference

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[str]`


##### create_static_test_cases(self) → List[Dict[str, Any]]

Create static test cases from existing scenario prompts

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[Dict[str, Any]]`


##### _extract_initial_query_from_prompt(self, prompt: str) → str

Extract or generate initial query from scenario prompt

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| prompt | str | - | - |

**Returns**: `str`



