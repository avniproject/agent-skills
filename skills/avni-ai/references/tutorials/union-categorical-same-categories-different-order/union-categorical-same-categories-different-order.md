# How To: Union Categorical Same Categories Different Order

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test union categorical same categories different order

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign a = Series(...)

```python
a = Series(Categorical(['a', 'b', 'c'], categories=['a', 'b', 'c']))
```

### Step 2: Assign b = Series(...)

```python
b = Series(Categorical(['a', 'b', 'c'], categories=['b', 'a', 'c']))
```

### Step 3: Assign result = pd.concat(...)

```python
result = pd.concat([a, b], ignore_index=True)
```

### Step 4: Assign expected = Series(...)

```python
expected = Series(Categorical(['a', 'b', 'c', 'a', 'b', 'c'], categories=['a', 'b', 'c']))
```

### Step 5: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Workflow
a = Series(Categorical(['a', 'b', 'c'], categories=['a', 'b', 'c']))
b = Series(Categorical(['a', 'b', 'c'], categories=['b', 'a', 'c']))
result = pd.concat([a, b], ignore_index=True)
expected = Series(Categorical(['a', 'b', 'c', 'a', 'b', 'c'], categories=['a', 'b', 'c']))
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_append_common.py:498 | Complexity: Intermediate | Last updated: 2026-02-20*