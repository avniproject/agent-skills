# How To: Numpy Argsort

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test numpy argsort

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign c = Categorical(...)

```python
c = Categorical([5, 3, 1, 4, 2], ordered=True)
```

### Step 2: Assign expected = np.array(...)

```python
expected = np.array([2, 4, 1, 3, 0])
```

### Step 3: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(np.argsort(c), expected, check_dtype=False)
```

### Step 4: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(np.argsort(c, kind='mergesort'), expected, check_dtype=False)
```

### Step 5: Assign msg = "the 'axis' parameter is not supported"

```python
msg = "the 'axis' parameter is not supported"
```

### Step 6: Assign msg = "the 'order' parameter is not supported"

```python
msg = "the 'order' parameter is not supported"
```

### Step 7: Call np.argsort()

```python
np.argsort(c, axis=0)
```

### Step 8: Call np.argsort()

```python
np.argsort(c, order='C')
```


## Complete Example

```python
# Workflow
c = Categorical([5, 3, 1, 4, 2], ordered=True)
expected = np.array([2, 4, 1, 3, 0])
tm.assert_numpy_array_equal(np.argsort(c), expected, check_dtype=False)
tm.assert_numpy_array_equal(np.argsort(c, kind='mergesort'), expected, check_dtype=False)
msg = "the 'axis' parameter is not supported"
with pytest.raises(ValueError, match=msg):
    np.argsort(c, axis=0)
msg = "the 'order' parameter is not supported"
with pytest.raises(ValueError, match=msg):
    np.argsort(c, order='C')
```

## Next Steps


---

*Source: test_sorting.py:25 | Complexity: Advanced | Last updated: 2026-02-20*