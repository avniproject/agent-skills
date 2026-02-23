# API Reference: reporting.py

**Language**: Python

**Source**: `tests/judge_framework/analytics/reporting.py`

---

## Classes

### ReportGenerator

Generate comprehensive reports for test results

**Inherits from**: (none)

#### Methods

##### generate_console_report(suite_result: TestSuiteResult, statistics: Dict[str, Any] = None) → str

Generate a detailed console report

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| suite_result | TestSuiteResult | - | - |
| statistics | Dict[str, Any] | None | - |

**Returns**: `str`


##### generate_json_report(suite_result: TestSuiteResult, statistics: Dict[str, Any] = None) → str

Generate a JSON report for programmatic consumption

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| suite_result | TestSuiteResult | - | - |
| statistics | Dict[str, Any] | None | - |

**Returns**: `str`


##### generate_csv_report(suite_result: TestSuiteResult) → str

Generate a CSV report for data analysis

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| suite_result | TestSuiteResult | - | - |

**Returns**: `str`


##### generate_comparison_report(suite_results: List[TestSuiteResult], comparison_stats: Dict[str, Any] = None) → str

Generate a comparison report for multiple test suites

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| suite_results | List[TestSuiteResult] | - | - |
| comparison_stats | Dict[str, Any] | None | - |

**Returns**: `str`


##### save_report_to_file(report_content: str, filename: str)

Save report content to file

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| report_content | str | - | - |
| filename | str | - | - |



