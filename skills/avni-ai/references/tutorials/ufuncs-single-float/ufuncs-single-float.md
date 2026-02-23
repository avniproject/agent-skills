# How To: Ufuncs Single Float

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test ufuncs single float

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays`

**Setup Required:**
```python
# Fixtures: ufunc
```

## Step-by-Step Guide

### Step 1: Assign a = pd.array(...)

```python
a = pd.array([1, 2, -3, np.nan])
```

### Step 2: Call tm.assert_extension_array_equal()

```python
tm.assert_extension_array_equal(result, expected)
```

### Step 3: Assign s = pd.Series(...)

```python
s = pd.Series(a)
```

### Step 4: Assign expected = pd.Series(...)

```python
expected = pd.Series(expected)
```

### Step 5: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 6: Assign result = ufunc(...)

```python
result = ufunc(a)
```

### Step 7: Assign expected = FloatingArray(...)

```python
expected = FloatingArray(ufunc(a.astype(float)), mask=a._mask)
```

### Step 8: Assign result = ufunc(...)

```python
result = ufunc(s)
```


## Complete Example

```python
# Setup
# Fixtures: ufunc

# Workflow
a = pd.array([1, 2, -3, np.nan])
with np.errstate(invalid='ignore'):
    result = ufunc(a)
    expected = FloatingArray(ufunc(a.astype(float)), mask=a._mask)
tm.assert_extension_array_equal(result, expected)
s = pd.Series(a)
with np.errstate(invalid='ignore'):
    result = ufunc(s)
expected = pd.Series(expected)
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_function.py:25 | Complexity: Advanced | Last updated: 2026-02-20*