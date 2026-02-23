# How To: Symmetric Difference

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test symmetric difference

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `numpy`
- `pytest`
- `pandas._testing`
- `pandas.core.indexes.api`

**Setup Required:**
```python
# Fixtures: sort
```

## Step-by-Step Guide

### Step 1: Assign index1 = Index(...)

```python
index1 = Index([5, 2, 3, 4], name='index1')
```

**Verification:**
```python
assert result.name is None
```

### Step 2: Assign index2 = Index(...)

```python
index2 = Index([2, 3, 4, 1])
```

### Step 3: Assign result = index1.symmetric_difference(...)

```python
result = index1.symmetric_difference(index2, sort=sort)
```

### Step 4: Assign expected = Index(...)

```python
expected = Index([5, 1])
```

**Verification:**
```python
assert result.name is None
```

### Step 5: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected.sort_values())
```

### Step 8: Assign expected = expected.sort_values(...)

```python
expected = expected.sort_values()
```


## Complete Example

```python
# Setup
# Fixtures: sort

# Workflow
index1 = Index([5, 2, 3, 4], name='index1')
index2 = Index([2, 3, 4, 1])
result = index1.symmetric_difference(index2, sort=sort)
expected = Index([5, 1])
if sort is not None:
    tm.assert_index_equal(result, expected)
else:
    tm.assert_index_equal(result, expected.sort_values())
assert result.name is None
if sort is None:
    expected = expected.sort_values()
tm.assert_index_equal(result, expected)
```

## Next Steps


---

*Source: test_setops.py:130 | Complexity: Advanced | Last updated: 2026-02-20*