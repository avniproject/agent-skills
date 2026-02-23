# How To: To Numpy Copy

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test to numpy copy

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
# Fixtures: arr, as_series, using_infer_string
```

## Step-by-Step Guide

### Step 1: Assign obj = pd.Index(...)

```python
obj = pd.Index(arr, copy=False)
```

**Verification:**
```python
assert np.shares_memory(arr, result) is False
```

### Step 2: Assign result = obj.to_numpy(...)

```python
result = obj.to_numpy()
```

**Verification:**
```python
assert np.shares_memory(arr, result) is True
```

### Step 3: Assign result = obj.to_numpy(...)

```python
result = obj.to_numpy(copy=False)
```

**Verification:**
```python
assert np.shares_memory(arr, result) is False
```

### Step 4: Assign result = obj.to_numpy(...)

```python
result = obj.to_numpy(copy=True)
```

**Verification:**
```python
assert np.shares_memory(arr, result) is True
```

### Step 5: Assign obj = Series(...)

```python
obj = Series(obj.values, copy=False)
```

**Verification:**
```python
assert np.shares_memory(arr, result) is False
```


## Complete Example

```python
# Setup
# Fixtures: arr, as_series, using_infer_string

# Workflow
obj = pd.Index(arr, copy=False)
if as_series:
    obj = Series(obj.values, copy=False)
result = obj.to_numpy()
if using_infer_string and arr.dtype == object and (obj.dtype.storage == 'pyarrow'):
    assert np.shares_memory(arr, result) is False
else:
    assert np.shares_memory(arr, result) is True
result = obj.to_numpy(copy=False)
if using_infer_string and arr.dtype == object and (obj.dtype.storage == 'pyarrow'):
    assert np.shares_memory(arr, result) is False
else:
    assert np.shares_memory(arr, result) is True
result = obj.to_numpy(copy=True)
assert np.shares_memory(arr, result) is False
```

## Next Steps


---

*Source: test_conversion.py:396 | Complexity: Intermediate | Last updated: 2026-02-20*