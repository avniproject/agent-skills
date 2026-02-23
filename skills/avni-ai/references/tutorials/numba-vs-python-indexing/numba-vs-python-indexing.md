# How To: Numba Vs Python Indexing

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test numba vs python indexing

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.compat`
- `pandas.util._test_decorators`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.util.version`


## Step-by-Step Guide

### Step 1: Assign frame = DataFrame(...)

```python
frame = DataFrame({'a': [1, 2, 3], 'b': [4, 5, 6], 'c': [7.0, 8.0, 9.0]}, index=Index(['A', 'B', 'C']))
```

### Step 2: Assign row_func = value

```python
row_func = lambda x: x['c']
```

### Step 3: Assign result = frame.apply(...)

```python
result = frame.apply(row_func, engine='numba', axis=1)
```

### Step 4: Assign expected = frame.apply(...)

```python
expected = frame.apply(row_func, engine='python', axis=1)
```

### Step 5: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 6: Assign col_func = value

```python
col_func = lambda x: x['A']
```

### Step 7: Assign result = frame.apply(...)

```python
result = frame.apply(col_func, engine='numba', axis=0)
```

### Step 8: Assign expected = frame.apply(...)

```python
expected = frame.apply(col_func, engine='python', axis=0)
```

### Step 9: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Workflow
frame = DataFrame({'a': [1, 2, 3], 'b': [4, 5, 6], 'c': [7.0, 8.0, 9.0]}, index=Index(['A', 'B', 'C']))
row_func = lambda x: x['c']
result = frame.apply(row_func, engine='numba', axis=1)
expected = frame.apply(row_func, engine='python', axis=1)
tm.assert_series_equal(result, expected)
col_func = lambda x: x['A']
result = frame.apply(col_func, engine='numba', axis=0)
expected = frame.apply(col_func, engine='python', axis=0)
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_numba.py:53 | Complexity: Advanced | Last updated: 2026-02-20*