# How To: Value Counts Na

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test value counts na

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign arr = pd.array(...)

```python
arr = pd.array([True, False, pd.NA], dtype='boolean')
```

**Verification:**
```python
assert expected.index.dtype == arr.dtype
```

### Step 2: Assign result = arr.value_counts(...)

```python
result = arr.value_counts(dropna=False)
```

**Verification:**
```python
assert expected.index.dtype == arr.dtype
```

### Step 3: Assign expected = pd.Series(...)

```python
expected = pd.Series([1, 1, 1], index=arr, dtype='Int64', name='count')
```

**Verification:**
```python
assert expected.index.dtype == arr.dtype
```

### Step 4: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 5: Assign result = arr.value_counts(...)

```python
result = arr.value_counts(dropna=True)
```

### Step 6: Assign expected = pd.Series(...)

```python
expected = pd.Series([1, 1], index=arr[:-1], dtype='Int64', name='count')
```

**Verification:**
```python
assert expected.index.dtype == arr.dtype
```

### Step 7: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Workflow
arr = pd.array([True, False, pd.NA], dtype='boolean')
result = arr.value_counts(dropna=False)
expected = pd.Series([1, 1, 1], index=arr, dtype='Int64', name='count')
assert expected.index.dtype == arr.dtype
tm.assert_series_equal(result, expected)
result = arr.value_counts(dropna=True)
expected = pd.Series([1, 1], index=arr[:-1], dtype='Int64', name='count')
assert expected.index.dtype == arr.dtype
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_function.py:92 | Complexity: Intermediate | Last updated: 2026-02-20*