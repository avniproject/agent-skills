# API Reference: QuestionConfig.java

**Language**: Java

**Source**: `avni-server-data/src/main/java/org/avni/server/domain/metabase/QuestionConfig.java`

---

## Classes

### QuestionConfig

**Inherits from**: (none)

#### Methods

##### withAggregation(aggregationType: AggregationType) → QuestionConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aggregationType | AggregationType | - | - |

**Returns**: `QuestionConfig`


##### withBreakout(breakoutField: String) → QuestionConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| breakoutField | String | - | - |

**Returns**: `QuestionConfig`


##### withFilters(filters: FilterCondition...) → QuestionConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filters | FilterCondition... | - | - |

**Returns**: `QuestionConfig`


##### withVisualization(visualizationType: VisualizationType, visualizationAttributes: VisualizationAttributes...) → QuestionConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visualizationType | VisualizationType | - | - |
| visualizationAttributes | VisualizationAttributes... | - | - |

**Returns**: `QuestionConfig`


##### withVisualizationSettings(dimension: String, metric: String) → ObjectNode

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dimension | String | - | - |
| metric | String | - | - |

**Returns**: `ObjectNode`


##### getAggregationType() → AggregationType

**Returns**: `AggregationType`


##### getBreakoutField() → String

**Returns**: `String`


##### getVisualizationType() → VisualizationType

**Returns**: `VisualizationType`




## Functions

### withAggregation(aggregationType: AggregationType) → QuestionConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aggregationType | AggregationType | - | - |

**Returns**: `QuestionConfig`



### withBreakout(breakoutField: String) → QuestionConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| breakoutField | String | - | - |

**Returns**: `QuestionConfig`



### withFilters(filters: FilterCondition...) → QuestionConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| filters | FilterCondition... | - | - |

**Returns**: `QuestionConfig`



### withVisualization(visualizationType: VisualizationType, visualizationAttributes: VisualizationAttributes...) → QuestionConfig

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| visualizationType | VisualizationType | - | - |
| visualizationAttributes | VisualizationAttributes... | - | - |

**Returns**: `QuestionConfig`



### withVisualizationSettings(dimension: String, metric: String) → ObjectNode

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dimension | String | - | - |
| metric | String | - | - |

**Returns**: `ObjectNode`



### getAggregationType() → AggregationType

**Returns**: `AggregationType`



### getBreakoutField() → String

**Returns**: `String`



### getVisualizationType() → VisualizationType

**Returns**: `VisualizationType`


