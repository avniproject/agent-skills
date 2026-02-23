# How To: Intersection

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test intersection

## Prerequisites

**Required Modules:**
- `datetime`
- `numpy`
- `pytest`
- `pandas._testing`
- `pandas.core.indexes.api`


## Step-by-Step Guide

### Step 1: Assign index = Index(...)

```python
index = Index(range(5), dtype=np.int64)
```

### Step 2: Assign other = Index(...)

```python
other = Index([1, 2, 3, 4, 5])
```

### Step 3: Assign result = index.intersection(...)

```python
result = index.intersection(other)
```

### Step 4: Assign expected = Index(...)

```python
expected = Index(np.sort(np.intersect1d(index.values, other.values)))
```

### Step 5: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 6: Assign result = other.intersection(...)

```python
result = other.intersection(index)
```

### Step 7: Assign expected = Index(...)

```python
expected = Index(np.sort(np.asarray(np.intersect1d(index.values, other.values))))
```

### Step 8: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```


## Complete Example

```python
# Workflow
index = Index(range(5), dtype=np.int64)
other = Index([1, 2, 3, 4, 5])
result = index.intersection(other)
expected = Index(np.sort(np.intersect1d(index.values, other.values)))
tm.assert_index_equal(result, expected)
result = other.intersection(index)
expected = Index(np.sort(np.asarray(np.intersect1d(index.values, other.values))))
tm.assert_index_equal(result, expected)
```

## Next Steps


---

*Source: test_setops.py:39 | Complexity: Advanced | Last updated: 2026-02-20*