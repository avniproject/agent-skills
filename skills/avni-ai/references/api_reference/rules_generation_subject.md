# API Reference: rules_generation_subject.py

**Language**: Python

**Source**: `tests/judge_framework/implementations/rulesGeneration/rules_generation_subject.py`

---

## Classes

### RulesGenerationTestSubject

Test subject for rules generation testing that includes form_context in inputs

**Inherits from**: ConversationTestSubject

#### Methods

##### __init__(self, scenario_data: Dict[str, Any], config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| scenario_data | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |


##### get_test_input(self) → Dict[str, Any]

Get input data for rules generation execution with form_context in inputs

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`


##### get_test_identifier(self) → str

Get identifier for this rules generation test

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### get_expected_outputs(self) → Dict[str, Any]

Get expected outputs for rules generation evaluation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`




### RulesGenerationTestSubjectFactory

Factory for creating rules generation test subjects

**Inherits from**: TestSubjectFactory

#### Methods

##### __init__(self, scenario_prompts: list[str])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| scenario_prompts | list[str] | - | - |


##### create_from_static_data(self, static_case: Dict[str, Any], config: TestConfiguration) → TestSubject

Create rules generation test subject from static test case data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| static_case | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |

**Returns**: `TestSubject`


##### create_from_ai_generation(self, ai_prompt: str, config: TestConfiguration) → TestSubject

Create test subject from AI-generated test case

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| ai_prompt | str | - | - |
| config | TestConfiguration | - | - |

**Returns**: `TestSubject`


##### get_generation_prompt_template(self) → str

Get the prompt template for AI test generation

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### create_test_subject(self, test_case_data: Dict[str, Any], config: TestConfiguration) → RulesGenerationTestSubject

Create a rules generation test subject from test case data

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_case_data | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |

**Returns**: `RulesGenerationTestSubject`


##### create_test_subjects_from_config(self, config: TestConfiguration) → list[RulesGenerationTestSubject]

Create test subjects from configuration static test cases

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |

**Returns**: `list[RulesGenerationTestSubject]`



