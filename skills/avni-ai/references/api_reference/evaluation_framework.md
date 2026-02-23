# API Reference: evaluation_framework.py

**Language**: Python

**Source**: `src/dspy/evaluation_framework.py`

---

## Functions

### create_evaluation_dataset() → List[dspy.Example]

Create a fixed evaluation dataset for SimplifiedAvniAnalyzer.
Only use issue identification examples since the main analyzer only takes form_element.

**Returns**: `List[dspy.Example]`



### evaluate_model(model, eval_dataset: List[dspy.Example], description: str = '') → float

Evaluate a model against the evaluation dataset.

Args:
    model: The model to evaluate (SimplifiedAvniAnalyzer or individual modules)
    eval_dataset: List of examples to evaluate on
    description: Description for logging

Returns:
    Average score across all examples

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model | None | - | - |
| eval_dataset | List[dspy.Example] | - | - |
| description | str | '' | - |

**Returns**: `float`



### evaluate_baseline_performance(eval_dataset: List[dspy.Example]) → Dict[str, float]

Evaluate baseline performance using original (non-optimized) prompts.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| eval_dataset | List[dspy.Example] | - | - |

**Returns**: `Dict[str, float]`



### compare_models(original_model, optimized_model, eval_dataset: List[dspy.Example], config: Dict[str, Any]) → Dict[str, Any]

Compare original vs optimized model performance.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| original_model | None | - | - |
| optimized_model | None | - | - |
| eval_dataset | List[dspy.Example] | - | - |
| config | Dict[str, Any] | - | - |

**Returns**: `Dict[str, Any]`



### save_baseline_scores(scores: Dict[str, Any])

Save baseline scores for future reference.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| scores | Dict[str, Any] | - | - |

**Returns**: (none)



### load_baseline_scores() → Dict[str, Any]

Load previously saved baseline scores.

**Returns**: `Dict[str, Any]`



### save_optimization_results(comparison: Dict[str, Any], model_path: str)

Save optimization results to history for tracking over time.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| comparison | Dict[str, Any] | - | - |
| model_path | str | - | - |

**Returns**: (none)



### load_optimization_history() → List[Dict[str, Any]]

Load optimization history from file.

**Returns**: `List[Dict[str, Any]]`



### display_optimization_history()

Display optimization history in a readable format.

**Returns**: (none)



### run_comprehensive_evaluation(model_path: str, config: Dict[str, Any])

Run comprehensive evaluation comparing baseline vs optimized model.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model_path | str | - | - |
| config | Dict[str, Any] | - | - |

**Returns**: (none)


