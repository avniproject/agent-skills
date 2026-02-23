# How To: Asarray Tz Aware

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test asarray tz aware

## Prerequisites

**Required Modules:**
- `datetime`
- `datetime`
- `re`
- `numpy`
- `pytest`
- `pandas.compat.numpy`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign tz = 'US/Central'

```python
tz = 'US/Central'
```

### Step 2: Assign idx = date_range(...)

```python
idx = date_range('2000', periods=2, tz=tz)
```

### Step 3: Assign expected = np.array(...)

```python
expected = np.array(['2000-01-01T06', '2000-01-02T06'], dtype='M8[ns]')
```

### Step 4: Assign result = np.asarray(...)

```python
result = np.asarray(idx, dtype='datetime64[ns]')
```

### Step 5: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```

### Step 6: Assign result = np.asarray(...)

```python
result = np.asarray(idx, dtype='M8[ns]')
```

### Step 7: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```

### Step 8: Assign expected = np.array(...)

```python
expected = np.array([Timestamp('2000-01-01', tz=tz), Timestamp('2000-01-02', tz=tz)])
```

### Step 9: Assign result = np.asarray(...)

```python
result = np.asarray(idx, dtype=object)
```

### Step 10: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```


## Complete Example

```python
# Workflow
tz = 'US/Central'
idx = date_range('2000', periods=2, tz=tz)
expected = np.array(['2000-01-01T06', '2000-01-02T06'], dtype='M8[ns]')
result = np.asarray(idx, dtype='datetime64[ns]')
tm.assert_numpy_array_equal(result, expected)
result = np.asarray(idx, dtype='M8[ns]')
tm.assert_numpy_array_equal(result, expected)
expected = np.array([Timestamp('2000-01-01', tz=tz), Timestamp('2000-01-02', tz=tz)])
result = np.asarray(idx, dtype=object)
tm.assert_numpy_array_equal(result, expected)
```

## Next Steps


---

*Source: test_datetime.py:116 | Complexity: Advanced | Last updated: 2026-02-20*