# How To: Sort Values Key

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test sort values key

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign series = Series(...)

```python
series = Series(np.array(['Hello', 'goodbye']))
```

### Step 2: Assign result = series.sort_values(...)

```python
result = series.sort_values(axis=0)
```

### Step 3: Assign expected = series

```python
expected = series
```

### Step 4: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 5: Assign result = series.sort_values(...)

```python
result = series.sort_values(axis=0, key=lambda x: x.str.lower())
```

### Step 6: Assign expected = value

```python
expected = series[::-1]
```

### Step 7: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Workflow
series = Series(np.array(['Hello', 'goodbye']))
result = series.sort_values(axis=0)
expected = series
tm.assert_series_equal(result, expected)
result = series.sort_values(axis=0, key=lambda x: x.str.lower())
expected = series[::-1]
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_sort_values.py:222 | Complexity: Intermediate | Last updated: 2026-02-20*