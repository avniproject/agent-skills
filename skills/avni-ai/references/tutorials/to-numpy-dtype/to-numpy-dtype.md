# How To: To Numpy Dtype

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test to numpy dtype

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.compat`
- `pandas.compat.numpy`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays`
- `pandas.core.arrays.string_`
- `pandas.core.arrays.string_arrow`

**Setup Required:**
```python
# Fixtures: as_series, unit
```

## Step-by-Step Guide

### Step 1: Assign tz = 'US/Eastern'

```python
tz = 'US/Eastern'
```

### Step 2: Assign obj = pd.DatetimeIndex(...)

```python
obj = pd.DatetimeIndex(['2000', '2001'], tz=tz)
```

### Step 3: Assign result = obj.to_numpy(...)

```python
result = obj.to_numpy()
```

### Step 4: Assign expected = np.array(...)

```python
expected = np.array([Timestamp('2000', tz=tz), Timestamp('2001', tz=tz)], dtype=object)
```

### Step 5: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```

### Step 6: Assign result = obj.to_numpy(...)

```python
result = obj.to_numpy(dtype='object')
```

### Step 7: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```

### Step 8: Assign result = obj.to_numpy(...)

```python
result = obj.to_numpy(dtype='M8[ns]')
```

### Step 9: Assign expected = np.array(...)

```python
expected = np.array(['2000-01-01T05', '2001-01-01T05'], dtype='M8[ns]')
```

### Step 10: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```

### Step 11: Assign obj = Series(...)

```python
obj = Series(obj)
```


## Complete Example

```python
# Setup
# Fixtures: as_series, unit

# Workflow
tz = 'US/Eastern'
obj = pd.DatetimeIndex(['2000', '2001'], tz=tz)
if as_series:
    obj = Series(obj)
result = obj.to_numpy()
expected = np.array([Timestamp('2000', tz=tz), Timestamp('2001', tz=tz)], dtype=object)
tm.assert_numpy_array_equal(result, expected)
result = obj.to_numpy(dtype='object')
tm.assert_numpy_array_equal(result, expected)
result = obj.to_numpy(dtype='M8[ns]')
expected = np.array(['2000-01-01T05', '2001-01-01T05'], dtype='M8[ns]')
tm.assert_numpy_array_equal(result, expected)
```

## Next Steps


---

*Source: test_conversion.py:420 | Complexity: Advanced | Last updated: 2026-02-20*