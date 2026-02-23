# API Reference: analytics.py

**Language**: Python

**Source**: `tests/dify/prompts/analytics.py`

---

## Classes

### StatisticsCalculator

Calculate comprehensive statistics from test results

**Inherits from**: (none)

#### Methods

##### calculate_statistics(results: List[ConversationResult]) → TestStatistics

Calculate comprehensive statistics from all results

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| results | List[ConversationResult] | - | - |

**Returns**: `TestStatistics`




### ReportGenerator

Generate comprehensive test reports

**Inherits from**: (none)

#### Methods

##### generate_report(statistics: TestStatistics, results: List[ConversationResult]) → str

Generate a comprehensive test report

**Decorators**: `@staticmethod`

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| statistics | TestStatistics | - | - |
| results | List[ConversationResult] | - | - |

**Returns**: `str`



