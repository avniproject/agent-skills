# How To: Datetimeindex

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test datetimeindex

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.core.reshape.util`


## Step-by-Step Guide

### Step 1: Assign x = date_range(...)

```python
x = date_range('2000-01-01', periods=2)
```

### Step 2: Assign unknown = value

```python
result1, result2 = (Index(y).day for y in cartesian_product([x, x]))
```

### Step 3: Assign expected1 = Index(...)

```python
expected1 = Index([1, 1, 2, 2], dtype=np.int32)
```

### Step 4: Assign expected2 = Index(...)

```python
expected2 = Index([1, 2, 1, 2], dtype=np.int32)
```

### Step 5: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result1, expected1)
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result2, expected2)
```


## Complete Example

```python
# Workflow
x = date_range('2000-01-01', periods=2)
result1, result2 = (Index(y).day for y in cartesian_product([x, x]))
expected1 = Index([1, 1, 2, 2], dtype=np.int32)
expected2 = Index([1, 2, 1, 2], dtype=np.int32)
tm.assert_index_equal(result1, expected1)
tm.assert_index_equal(result2, expected2)
```

## Next Steps


---

*Source: test_util.py:21 | Complexity: Intermediate | Last updated: 2026-02-20*