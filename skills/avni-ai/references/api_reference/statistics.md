# API Reference: statistics.py

**Language**: Python

**Source**: `tests/judge_framework/analytics/statistics.py`

---

## Classes

### StatisticsCalculator

Calculate comprehensive statistics for test results

**Inherits from**: (none)

#### Methods

##### calculate_suite_statistics(suite_result: TestSuiteResult) → Dict[str, Any]

Calculate detailed statistics for a test suite

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| suite_result | TestSuiteResult | - | - |

**Returns**: `Dict[str, Any]`


##### _calculate_score_statistics(results: List[EvaluationResult]) → Dict[str, Any]

Calculate statistical measures for each scoring metric

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| results | List[EvaluationResult] | - | - |

**Returns**: `Dict[str, Any]`


##### _calculate_performance_metrics(results: List[EvaluationResult]) → Dict[str, Any]

Calculate performance-related metrics

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| results | List[EvaluationResult] | - | - |

**Returns**: `Dict[str, Any]`


##### compare_test_suites(suite_results: List[TestSuiteResult]) → Dict[str, Any]

Compare multiple test suites

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| suite_results | List[TestSuiteResult] | - | - |

**Returns**: `Dict[str, Any]`



