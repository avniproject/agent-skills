# How To: Sort Values

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test sort values

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: non_monotonic_idx
```

## Step-by-Step Guide

### Step 1: Assign idx = non_monotonic_idx

```python
idx = non_monotonic_idx
```

**Verification:**
```python
assert ordered.is_monotonic_increasing
```

### Step 2: Assign ordered = idx.sort_values(...)

```python
ordered = idx.sort_values()
```

**Verification:**
```python
assert ordered[::-1].is_monotonic_increasing
```

### Step 3: Assign ordered = idx.sort_values(...)

```python
ordered = idx.sort_values(ascending=False)
```

**Verification:**
```python
assert ordered.is_monotonic_increasing
```

### Step 4: Assign unknown = idx.sort_values(...)

```python
ordered, dexer = idx.sort_values(return_indexer=True)
```

**Verification:**
```python
assert ordered[::-1].is_monotonic_increasing
```

### Step 5: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(dexer, np.array([1, 2, 0], dtype=np.intp))
```

### Step 6: Assign unknown = idx.sort_values(...)

```python
ordered, dexer = idx.sort_values(return_indexer=True, ascending=False)
```

**Verification:**
```python
assert ordered[::-1].is_monotonic_increasing
```

### Step 7: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(dexer, np.array([0, 2, 1], dtype=np.intp))
```


## Complete Example

```python
# Setup
# Fixtures: non_monotonic_idx

# Workflow
idx = non_monotonic_idx
ordered = idx.sort_values()
assert ordered.is_monotonic_increasing
ordered = idx.sort_values(ascending=False)
assert ordered[::-1].is_monotonic_increasing
ordered, dexer = idx.sort_values(return_indexer=True)
assert ordered.is_monotonic_increasing
tm.assert_numpy_array_equal(dexer, np.array([1, 2, 0], dtype=np.intp))
ordered, dexer = idx.sort_values(return_indexer=True, ascending=False)
assert ordered[::-1].is_monotonic_increasing
tm.assert_numpy_array_equal(dexer, np.array([0, 2, 1], dtype=np.intp))
```

## Next Steps


---

*Source: test_sort_values.py:59 | Complexity: Intermediate | Last updated: 2026-02-20*