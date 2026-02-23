# API Reference: test_subject.py

**Language**: Python

**Source**: `tests/judge_framework/interfaces/test_subject.py`

---

## Classes

### TestSubject

Abstract interface for test subjects - what we're testing.
Each implementation represents a different type of test artifact.

**Inherits from**: ABC

#### Methods

##### __init__(self, test_data: Dict[str, Any], config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_data | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |


##### get_test_identifier(self) → str

Get unique identifier for this test subject

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### get_test_input(self) → Dict[str, Any]

Get input data that will be passed to the test executor

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`


##### get_expected_behavior(self) → str

Get description of expected behavior for evaluation

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### get_evaluation_context(self) → Dict[str, Any]

Get additional context needed for evaluation

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`


##### get_test_metadata(self) → Dict[str, Any]

Get metadata about this test subject

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`




### TestSubjectFactory

Factory interface for creating test subjects from various sources

**Inherits from**: ABC

#### Methods

##### create_from_static_data(self, static_case: Dict[str, Any], config: TestConfiguration) → 'TestSubject'

Create test subject from static test case data

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| static_case | Dict[str, Any] | - | - |
| config | TestConfiguration | - | - |

**Returns**: `'TestSubject'`


##### create_from_ai_generation(self, ai_prompt: str, config: TestConfiguration) → 'TestSubject'

Create test subject from AI-generated test case

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| ai_prompt | str | - | - |
| config | TestConfiguration | - | - |

**Returns**: `'TestSubject'`


##### get_generation_prompt_template(self) → str

Get the prompt template for AI test generation

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`




### TestSubjectGenerator

Utility class for generating test subjects using mixed approach
(static cases + AI-generated cases)

**Inherits from**: (none)

#### Methods

##### __init__(self, factory: TestSubjectFactory)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| factory | TestSubjectFactory | - | - |


##### generate_test_suite(self, config: TestConfiguration, num_ai_cases: int = 0) → List[TestSubject]

Generate a complete test suite combining static and AI-generated cases

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |
| num_ai_cases | int | 0 | - |

**Returns**: `List[TestSubject]`


##### _generate_ai_cases(self, config: TestConfiguration, num_cases: int) → List[TestSubject]

Generate AI-powered test cases

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |
| num_cases | int | - | - |

**Returns**: `List[TestSubject]`



