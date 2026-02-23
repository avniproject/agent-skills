# API Reference: result_models.py

**Language**: Python

**Source**: `tests/judge_framework/interfaces/result_models.py`

---

## Classes

### DifyConfig

Configuration for Dify workflow integration

**Inherits from**: (none)



### EvaluationConfig

Configuration for evaluation criteria and scoring

**Inherits from**: (none)



### TestGenerationConfig

Configuration for test data generation

**Inherits from**: (none)



### TestConfiguration

Main configuration that composes all sub-configurations

**Inherits from**: (none)

#### Methods

##### dify_api_key(self) → str

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### dify_base_url(self) → str

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### workflow_name(self) → str

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### evaluation_metrics(self) → List[str]

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[str]`


##### success_thresholds(self) → Dict[str, float]

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, float]`


##### openai_model(self) → str

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### openai_temperature(self) → float

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `float`


##### static_test_cases(self) → List[Dict[str, Any]]

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[Dict[str, Any]]`


##### ai_generation_enabled(self) → bool

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `bool`


##### test_user(self) → str

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### timeout_seconds(self) → int

**Decorators**: `@property`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `int`




### EvaluationResult

Standardized result from any judge evaluation

**Inherits from**: (none)



### TestSuiteResult

Aggregated results for a complete test suite

**Inherits from**: (none)



### BaseTestSubject

Abstract base for test subjects

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

Get unique identifier for this test

**Decorators**: `@abstractmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `str`


##### get_test_input(self) → Dict[str, Any]

Get input data for test execution

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




### TestSuite

Collection of test subjects with metadata

**Inherits from**: (none)

#### Methods

##### __init__(self, test_type: str, config: TestConfiguration)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_type | str | - | - |
| config | TestConfiguration | - | - |


##### add_test_subject(self, subject: BaseTestSubject)

Add a test subject to the suite

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| subject | BaseTestSubject | - | - |


##### get_test_subjects(self) → List[BaseTestSubject]

Get all test subjects in the suite

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `List[BaseTestSubject]`


##### get_suite_summary(self) → Dict[str, Any]

Get summary of the test suite

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |

**Returns**: `Dict[str, Any]`



