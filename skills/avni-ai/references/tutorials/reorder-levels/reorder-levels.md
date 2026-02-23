# How To: Reorder Levels

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test reorder levels

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: frame_or_series
```

## Step-by-Step Guide

### Step 1: Assign index = MultiIndex(...)

```python
index = MultiIndex(levels=[['bar'], ['one', 'two', 'three'], [0, 1]], codes=[[0, 0, 0, 0, 0, 0], [0, 1, 2, 0, 1, 2], [0, 1, 0, 1, 0, 1]], names=['L0', 'L1', 'L2'])
```

### Step 2: Assign df = DataFrame(...)

```python
df = DataFrame({'A': np.arange(6), 'B': np.arange(6)}, index=index)
```

### Step 3: Assign obj = tm.get_obj(...)

```python
obj = tm.get_obj(df, frame_or_series)
```

### Step 4: Assign result = obj.reorder_levels(...)

```python
result = obj.reorder_levels([0, 1, 2])
```

### Step 5: Call tm.assert_equal()

```python
tm.assert_equal(obj, result)
```

### Step 6: Assign result = obj.reorder_levels(...)

```python
result = obj.reorder_levels(['L0', 'L1', 'L2'])
```

### Step 7: Call tm.assert_equal()

```python
tm.assert_equal(obj, result)
```

### Step 8: Assign result = obj.reorder_levels(...)

```python
result = obj.reorder_levels([1, 2, 0])
```

### Step 9: Assign e_idx = MultiIndex(...)

```python
e_idx = MultiIndex(levels=[['one', 'two', 'three'], [0, 1], ['bar']], codes=[[0, 1, 2, 0, 1, 2], [0, 1, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0]], names=['L1', 'L2', 'L0'])
```

### Step 10: Assign expected = DataFrame(...)

```python
expected = DataFrame({'A': np.arange(6), 'B': np.arange(6)}, index=e_idx)
```

### Step 11: Assign expected = tm.get_obj(...)

```python
expected = tm.get_obj(expected, frame_or_series)
```

### Step 12: Call tm.assert_equal()

```python
tm.assert_equal(result, expected)
```

### Step 13: Assign result = obj.reorder_levels(...)

```python
result = obj.reorder_levels([0, 0, 0])
```

### Step 14: Assign e_idx = MultiIndex(...)

```python
e_idx = MultiIndex(levels=[['bar'], ['bar'], ['bar']], codes=[[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], names=['L0', 'L0', 'L0'])
```

### Step 15: Assign expected = DataFrame(...)

```python
expected = DataFrame({'A': np.arange(6), 'B': np.arange(6)}, index=e_idx)
```

### Step 16: Assign expected = tm.get_obj(...)

```python
expected = tm.get_obj(expected, frame_or_series)
```

### Step 17: Call tm.assert_equal()

```python
tm.assert_equal(result, expected)
```

### Step 18: Assign result = obj.reorder_levels(...)

```python
result = obj.reorder_levels(['L0', 'L0', 'L0'])
```

### Step 19: Call tm.assert_equal()

```python
tm.assert_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: frame_or_series

# Workflow
index = MultiIndex(levels=[['bar'], ['one', 'two', 'three'], [0, 1]], codes=[[0, 0, 0, 0, 0, 0], [0, 1, 2, 0, 1, 2], [0, 1, 0, 1, 0, 1]], names=['L0', 'L1', 'L2'])
df = DataFrame({'A': np.arange(6), 'B': np.arange(6)}, index=index)
obj = tm.get_obj(df, frame_or_series)
result = obj.reorder_levels([0, 1, 2])
tm.assert_equal(obj, result)
result = obj.reorder_levels(['L0', 'L1', 'L2'])
tm.assert_equal(obj, result)
result = obj.reorder_levels([1, 2, 0])
e_idx = MultiIndex(levels=[['one', 'two', 'three'], [0, 1], ['bar']], codes=[[0, 1, 2, 0, 1, 2], [0, 1, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0]], names=['L1', 'L2', 'L0'])
expected = DataFrame({'A': np.arange(6), 'B': np.arange(6)}, index=e_idx)
expected = tm.get_obj(expected, frame_or_series)
tm.assert_equal(result, expected)
result = obj.reorder_levels([0, 0, 0])
e_idx = MultiIndex(levels=[['bar'], ['bar'], ['bar']], codes=[[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], names=['L0', 'L0', 'L0'])
expected = DataFrame({'A': np.arange(6), 'B': np.arange(6)}, index=e_idx)
expected = tm.get_obj(expected, frame_or_series)
tm.assert_equal(result, expected)
result = obj.reorder_levels(['L0', 'L0', 'L0'])
tm.assert_equal(result, expected)
```

## Next Steps


---

*Source: test_reorder_levels.py:12 | Complexity: Advanced | Last updated: 2026-02-20*