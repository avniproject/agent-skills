# API Reference: orchestrator.py

**Language**: Python

**Source**: `tests/judge_framework/orchestrator.py`

---

## Classes

### ProgressReporter

Protocol for pluggable progress reporting

**Inherits from**: Protocol

#### Methods

##### on_test_suite_start(self, test_type: str, total_tests: int)

Called when test suite starts

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_type | str | - | - |
| total_tests | int | - | - |


##### on_test_start(self, test_identifier: str, test_number: int, total_tests: int)

Called when individual test starts

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_identifier | str | - | - |
| test_number | int | - | - |
| total_tests | int | - | - |


##### on_test_complete(self, result: EvaluationResult, test_number: int, total_tests: int)

Called when individual test completes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| result | EvaluationResult | - | - |
| test_number | int | - | - |
| total_tests | int | - | - |


##### on_test_suite_complete(self, suite_result: TestSuiteResult)

Called when test suite completes

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| suite_result | TestSuiteResult | - | - |




### ConsoleProgressReporter

Simple console-based progress reporter

**Inherits from**: (none)

#### Methods

##### on_test_suite_start(self, test_type: str, total_tests: int)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_type | str | - | - |
| total_tests | int | - | - |


##### on_test_start(self, test_identifier: str, test_number: int, total_tests: int)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_identifier | str | - | - |
| test_number | int | - | - |
| total_tests | int | - | - |


##### on_test_complete(self, result: EvaluationResult, test_number: int, total_tests: int)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| result | EvaluationResult | - | - |
| test_number | int | - | - |
| total_tests | int | - | - |


##### on_test_suite_complete(self, suite_result: TestSuiteResult)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| suite_result | TestSuiteResult | - | - |




### JudgeOrchestrator

Simple orchestrator that coordinates test execution using Template Method pattern

**Inherits from**: (none)

#### Methods

##### __init__(self, executor: TestExecutor, judge_strategy: JudgeStrategy, progress_reporter: Optional[ProgressReporter] = None)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| executor | TestExecutor | - | - |
| judge_strategy | JudgeStrategy | - | - |
| progress_reporter | Optional[ProgressReporter] | None | - |


##### run_test_suite(self, test_subject_factory: TestSubjectFactory, config: TestConfiguration, fail_fast: bool = False) → TestSuiteResult

Template method: Execute complete test suite workflow

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_subject_factory | TestSubjectFactory | - | - |
| config | TestConfiguration | - | - |
| fail_fast | bool | False | - |

**Returns**: `TestSuiteResult`


##### _generate_test_subjects(self, factory: TestSubjectFactory, config: TestConfiguration) → List[TestSubject]

Generate test subjects using mixed approach

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| factory | TestSubjectFactory | - | - |
| config | TestConfiguration | - | - |

**Returns**: `List[TestSubject]`


##### _execute_single_test(self, test_subject: TestSubject) → EvaluationResult

Execute a single test and evaluate it

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| test_subject | TestSubject | - | - |

**Returns**: `EvaluationResult`


##### _calculate_suite_statistics(self, suite_result: TestSuiteResult)

Calculate aggregated statistics for the test suite

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| suite_result | TestSuiteResult | - | - |


##### _get_test_type_name(self, factory: TestSubjectFactory) → str

Extract test type name from factory class

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| factory | TestSubjectFactory | - | - |

**Returns**: `str`


##### _calculate_config_hash(self, config: TestConfiguration) → str

Calculate hash of configuration for tracking

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| self | None | - | - |
| config | TestConfiguration | - | - |

**Returns**: `str`



