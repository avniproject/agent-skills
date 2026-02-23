# How To: Invert

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test invert

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `operator`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays`

**Setup Required:**
```python
# Fixtures: fill_value
```

## Step-by-Step Guide

### Step 1: Assign arr = np.array(...)

```python
arr = np.array([True, False, False, True])
```

### Step 2: Assign sparray = SparseArray(...)

```python
sparray = SparseArray(arr, fill_value=fill_value)
```

### Step 3: Assign result = value

```python
result = ~sparray
```

### Step 4: Assign expected = SparseArray(...)

```python
expected = SparseArray(~arr, fill_value=not fill_value)
```

### Step 5: Call tm.assert_sp_array_equal()

```python
tm.assert_sp_array_equal(result, expected)
```

### Step 6: Assign result = value

```python
result = ~pd.Series(sparray)
```

### Step 7: Assign expected = pd.Series(...)

```python
expected = pd.Series(expected)
```

### Step 8: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 9: Assign result = value

```python
result = ~pd.DataFrame({'A': sparray})
```

### Step 10: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame({'A': expected})
```

### Step 11: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: fill_value

# Workflow
arr = np.array([True, False, False, True])
sparray = SparseArray(arr, fill_value=fill_value)
result = ~sparray
expected = SparseArray(~arr, fill_value=not fill_value)
tm.assert_sp_array_equal(result, expected)
result = ~pd.Series(sparray)
expected = pd.Series(expected)
tm.assert_series_equal(result, expected)
result = ~pd.DataFrame({'A': sparray})
expected = pd.DataFrame({'A': expected})
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_unary.py:23 | Complexity: Advanced | Last updated: 2026-02-20*