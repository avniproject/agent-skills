# How To: Searchsorted Different Argument Classes

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test searchsorted different argument classes

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: listlike_box
```

## Step-by-Step Guide

### Step 1: Assign idx = TimedeltaIndex(...)

```python
idx = TimedeltaIndex(['1 day', '2 days', '3 days'])
```

### Step 2: Assign result = idx.searchsorted(...)

```python
result = idx.searchsorted(listlike_box(idx))
```

### Step 3: Assign expected = np.arange(...)

```python
expected = np.arange(len(idx), dtype=result.dtype)
```

### Step 4: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```

### Step 5: Assign result = idx._data.searchsorted(...)

```python
result = idx._data.searchsorted(listlike_box(idx))
```

### Step 6: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: listlike_box

# Workflow
idx = TimedeltaIndex(['1 day', '2 days', '3 days'])
result = idx.searchsorted(listlike_box(idx))
expected = np.arange(len(idx), dtype=result.dtype)
tm.assert_numpy_array_equal(result, expected)
result = idx._data.searchsorted(listlike_box(idx))
tm.assert_numpy_array_equal(result, expected)
```

## Next Steps


---

*Source: test_searchsorted.py:12 | Complexity: Intermediate | Last updated: 2026-02-20*