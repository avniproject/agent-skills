# How To: Quantile Empty

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test quantile empty

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas._testing`
- `pandas.arrays`

**Setup Required:**
```python
# Fixtures: dtype
```

## Step-by-Step Guide

### Step 1: Assign arr = NumpyExtensionArray(...)

```python
arr = NumpyExtensionArray(np.array([], dtype=dtype))
```

### Step 2: Assign idx = pd.Index(...)

```python
idx = pd.Index([0.0, 0.5])
```

### Step 3: Assign result = arr._quantile(...)

```python
result = arr._quantile(idx, interpolation='linear')
```

### Step 4: Assign expected = NumpyExtensionArray(...)

```python
expected = NumpyExtensionArray(np.array([np.nan, np.nan]))
```

### Step 5: Call tm.assert_extension_array_equal()

```python
tm.assert_extension_array_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: dtype

# Workflow
arr = NumpyExtensionArray(np.array([], dtype=dtype))
idx = pd.Index([0.0, 0.5])
result = arr._quantile(idx, interpolation='linear')
expected = NumpyExtensionArray(np.array([np.nan, np.nan]))
tm.assert_extension_array_equal(result, expected)
```

## Next Steps


---

*Source: test_numpy.py:304 | Complexity: Intermediate | Last updated: 2026-02-20*