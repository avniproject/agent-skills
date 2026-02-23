# How To: Divide By Zero

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test divide by zero

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
# Fixtures: dtype, zero, negative
```

## Step-by-Step Guide

### Step 1: Assign a = pd.array(...)

```python
a = pd.array([0, 1, -1, None], dtype=dtype)
```

### Step 2: Assign result = value

```python
result = a / zero
```

### Step 3: Assign expected = FloatingArray(...)

```python
expected = FloatingArray(np.array([np.nan, np.inf, -np.inf, np.nan], dtype=dtype.numpy_dtype), np.array([False, False, False, True]))
```

### Step 4: Call tm.assert_extension_array_equal()

```python
tm.assert_extension_array_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: dtype, zero, negative

# Workflow
a = pd.array([0, 1, -1, None], dtype=dtype)
result = a / zero
expected = FloatingArray(np.array([np.nan, np.inf, -np.inf, np.nan], dtype=dtype.numpy_dtype), np.array([False, False, False, True]))
if negative:
    expected *= -1
tm.assert_extension_array_equal(result, expected)
```

## Next Steps


---

*Source: test_arithmetic.py:38 | Complexity: Intermediate | Last updated: 2026-02-20*