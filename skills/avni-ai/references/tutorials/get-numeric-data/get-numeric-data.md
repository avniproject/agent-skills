# How To: Get Numeric Data

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test get numeric data

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `numpy`
- `pytest`
- `pandas.core.dtypes.common`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: frame_or_series
```

## Step-by-Step Guide

### Step 1: Assign n = 4

```python
n = 4
```

### Step 2: Assign kwargs = value

```python
kwargs = {frame_or_series._get_axis_name(i): list(range(n)) for i in range(frame_or_series._AXIS_LEN)}
```

### Step 3: Assign o = construct(...)

```python
o = construct(frame_or_series, n, **kwargs)
```

### Step 4: Assign result = o._get_numeric_data(...)

```python
result = o._get_numeric_data()
```

### Step 5: Call tm.assert_equal()

```python
tm.assert_equal(result, o)
```

### Step 6: Assign result = o._get_bool_data(...)

```python
result = o._get_bool_data()
```

### Step 7: Assign expected = construct(...)

```python
expected = construct(frame_or_series, n, value='empty', **kwargs)
```

### Step 8: Call tm.assert_equal()

```python
tm.assert_equal(result.reset_index(drop=True), expected)
```

### Step 9: Assign arr = np.array(...)

```python
arr = np.array([True, True, False, True])
```

### Step 10: Assign o = construct(...)

```python
o = construct(frame_or_series, n, value=arr, **kwargs)
```

### Step 11: Assign result = o._get_numeric_data(...)

```python
result = o._get_numeric_data()
```

### Step 12: Call tm.assert_equal()

```python
tm.assert_equal(result, o)
```

### Step 13: Assign expected.columns = value

```python
expected.columns = o.columns[:0]
```


## Complete Example

```python
# Setup
# Fixtures: frame_or_series

# Workflow
n = 4
kwargs = {frame_or_series._get_axis_name(i): list(range(n)) for i in range(frame_or_series._AXIS_LEN)}
o = construct(frame_or_series, n, **kwargs)
result = o._get_numeric_data()
tm.assert_equal(result, o)
result = o._get_bool_data()
expected = construct(frame_or_series, n, value='empty', **kwargs)
if isinstance(o, DataFrame):
    expected.columns = o.columns[:0]
tm.assert_equal(result.reset_index(drop=True), expected)
arr = np.array([True, True, False, True])
o = construct(frame_or_series, n, value=arr, **kwargs)
result = o._get_numeric_data()
tm.assert_equal(result, o)
```

## Next Steps


---

*Source: test_generic.py:78 | Complexity: Advanced | Last updated: 2026-02-20*