# How To: Astype Copy

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test astype copy

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign arr = pd.array(...)

```python
arr = pd.array([0.1, 0.2, None], dtype='Float64')
```

**Verification:**
```python
assert result is not arr
```

### Step 2: Assign orig = pd.array(...)

```python
orig = pd.array([0.1, 0.2, None], dtype='Float64')
```

**Verification:**
```python
assert not tm.shares_memory(result, arr)
```

### Step 3: Assign result = arr.astype(...)

```python
result = arr.astype('Float64', copy=True)
```

**Verification:**
```python
assert result is arr
```

### Step 4: Assign unknown = 10

```python
result[0] = 10
```

**Verification:**
```python
assert np.shares_memory(result._data, arr._data)
```

### Step 5: Call tm.assert_extension_array_equal()

```python
tm.assert_extension_array_equal(arr, orig)
```

**Verification:**
```python
assert np.shares_memory(result._mask, arr._mask)
```

### Step 6: Assign unknown = value

```python
result[0] = pd.NA
```

**Verification:**
```python
assert arr[0] == 10
```

### Step 7: Call tm.assert_extension_array_equal()

```python
tm.assert_extension_array_equal(arr, orig)
```

**Verification:**
```python
assert arr[0] is pd.NA
```

### Step 8: Assign result = arr.astype(...)

```python
result = arr.astype('Float64', copy=False)
```

**Verification:**
```python
assert not tm.shares_memory(result, arr)
```

### Step 9: Assign unknown = 10

```python
result[0] = 10
```

**Verification:**
```python
assert arr[0] == 10
```

### Step 10: Assign unknown = value

```python
result[0] = pd.NA
```

**Verification:**
```python
assert arr[0] is pd.NA
```

### Step 11: Assign arr = pd.array(...)

```python
arr = pd.array([0.1, 0.2, None], dtype='Float64')
```

### Step 12: Assign orig = pd.array(...)

```python
orig = pd.array([0.1, 0.2, None], dtype='Float64')
```

### Step 13: Assign result = arr.astype(...)

```python
result = arr.astype('Float32', copy=False)
```

**Verification:**
```python
assert not tm.shares_memory(result, arr)
```

### Step 14: Assign unknown = 10

```python
result[0] = 10
```

### Step 15: Call tm.assert_extension_array_equal()

```python
tm.assert_extension_array_equal(arr, orig)
```

### Step 16: Assign unknown = value

```python
result[0] = pd.NA
```

### Step 17: Call tm.assert_extension_array_equal()

```python
tm.assert_extension_array_equal(arr, orig)
```


## Complete Example

```python
# Workflow
arr = pd.array([0.1, 0.2, None], dtype='Float64')
orig = pd.array([0.1, 0.2, None], dtype='Float64')
result = arr.astype('Float64', copy=True)
assert result is not arr
assert not tm.shares_memory(result, arr)
result[0] = 10
tm.assert_extension_array_equal(arr, orig)
result[0] = pd.NA
tm.assert_extension_array_equal(arr, orig)
result = arr.astype('Float64', copy=False)
assert result is arr
assert np.shares_memory(result._data, arr._data)
assert np.shares_memory(result._mask, arr._mask)
result[0] = 10
assert arr[0] == 10
result[0] = pd.NA
assert arr[0] is pd.NA
arr = pd.array([0.1, 0.2, None], dtype='Float64')
orig = pd.array([0.1, 0.2, None], dtype='Float64')
result = arr.astype('Float32', copy=False)
assert not tm.shares_memory(result, arr)
result[0] = 10
tm.assert_extension_array_equal(arr, orig)
result[0] = pd.NA
tm.assert_extension_array_equal(arr, orig)
```

## Next Steps


---

*Source: test_astype.py:81 | Complexity: Advanced | Last updated: 2026-02-20*