# How To: Unstack

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test unstack

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign index = MultiIndex(...)

```python
index = MultiIndex(levels=[['bar', 'foo'], ['one', 'three', 'two']], codes=[[1, 1, 0, 0], [0, 1, 0, 2]])
```

### Step 2: Assign s = Series(...)

```python
s = Series(np.arange(4.0), index=index)
```

### Step 3: Assign unstacked = s.unstack(...)

```python
unstacked = s.unstack()
```

### Step 4: Assign expected = DataFrame(...)

```python
expected = DataFrame([[2.0, np.nan, 3.0], [0.0, 1.0, np.nan]], index=['bar', 'foo'], columns=['one', 'three', 'two'])
```

### Step 5: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(unstacked, expected)
```

### Step 6: Assign unstacked = s.unstack(...)

```python
unstacked = s.unstack(level=0)
```

### Step 7: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(unstacked, expected.T)
```

### Step 8: Assign index = MultiIndex(...)

```python
index = MultiIndex(levels=[['bar'], ['one', 'two', 'three'], [0, 1]], codes=[[0, 0, 0, 0, 0, 0], [0, 1, 2, 0, 1, 2], [0, 1, 0, 1, 0, 1]])
```

### Step 9: Assign s = Series(...)

```python
s = Series(np.random.default_rng(2).standard_normal(6), index=index)
```

### Step 10: Assign exp_index = MultiIndex(...)

```python
exp_index = MultiIndex(levels=[['one', 'two', 'three'], [0, 1]], codes=[[0, 1, 2, 0, 1, 2], [0, 1, 0, 1, 0, 1]])
```

### Step 11: Assign expected = DataFrame.sort_index(...)

```python
expected = DataFrame({'bar': s.values}, index=exp_index).sort_index(level=0)
```

### Step 12: Assign unstacked = s.unstack.sort_index(...)

```python
unstacked = s.unstack(0).sort_index()
```

### Step 13: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(unstacked, expected)
```

### Step 14: Assign idx = MultiIndex.from_arrays(...)

```python
idx = MultiIndex.from_arrays([[101, 102], [3.5, np.nan]])
```

### Step 15: Assign ts = Series(...)

```python
ts = Series([1, 2], index=idx)
```

### Step 16: Assign left = ts.unstack(...)

```python
left = ts.unstack()
```

### Step 17: Assign right = DataFrame(...)

```python
right = DataFrame([[np.nan, 1], [2, np.nan]], index=[101, 102], columns=[np.nan, 3.5])
```

### Step 18: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(left, right)
```

### Step 19: Assign idx = MultiIndex.from_arrays(...)

```python
idx = MultiIndex.from_arrays([['cat', 'cat', 'cat', 'dog', 'dog'], ['a', 'a', 'b', 'a', 'b'], [1, 2, 1, 1, np.nan]])
```

### Step 20: Assign ts = Series(...)

```python
ts = Series([1.0, 1.1, 1.2, 1.3, 1.4], index=idx)
```

### Step 21: Assign right = DataFrame(...)

```python
right = DataFrame([[1.0, 1.3], [1.1, np.nan], [np.nan, 1.4], [1.2, np.nan]], columns=['cat', 'dog'])
```

### Step 22: Assign tpls = value

```python
tpls = [('a', 1), ('a', 2), ('b', np.nan), ('b', 1)]
```

### Step 23: Assign right.index = MultiIndex.from_tuples(...)

```python
right.index = MultiIndex.from_tuples(tpls)
```

### Step 24: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(ts.unstack(level=0), right)
```


## Complete Example

```python
# Workflow
index = MultiIndex(levels=[['bar', 'foo'], ['one', 'three', 'two']], codes=[[1, 1, 0, 0], [0, 1, 0, 2]])
s = Series(np.arange(4.0), index=index)
unstacked = s.unstack()
expected = DataFrame([[2.0, np.nan, 3.0], [0.0, 1.0, np.nan]], index=['bar', 'foo'], columns=['one', 'three', 'two'])
tm.assert_frame_equal(unstacked, expected)
unstacked = s.unstack(level=0)
tm.assert_frame_equal(unstacked, expected.T)
index = MultiIndex(levels=[['bar'], ['one', 'two', 'three'], [0, 1]], codes=[[0, 0, 0, 0, 0, 0], [0, 1, 2, 0, 1, 2], [0, 1, 0, 1, 0, 1]])
s = Series(np.random.default_rng(2).standard_normal(6), index=index)
exp_index = MultiIndex(levels=[['one', 'two', 'three'], [0, 1]], codes=[[0, 1, 2, 0, 1, 2], [0, 1, 0, 1, 0, 1]])
expected = DataFrame({'bar': s.values}, index=exp_index).sort_index(level=0)
unstacked = s.unstack(0).sort_index()
tm.assert_frame_equal(unstacked, expected)
idx = MultiIndex.from_arrays([[101, 102], [3.5, np.nan]])
ts = Series([1, 2], index=idx)
left = ts.unstack()
right = DataFrame([[np.nan, 1], [2, np.nan]], index=[101, 102], columns=[np.nan, 3.5])
tm.assert_frame_equal(left, right)
idx = MultiIndex.from_arrays([['cat', 'cat', 'cat', 'dog', 'dog'], ['a', 'a', 'b', 'a', 'b'], [1, 2, 1, 1, np.nan]])
ts = Series([1.0, 1.1, 1.2, 1.3, 1.4], index=idx)
right = DataFrame([[1.0, 1.3], [1.1, np.nan], [np.nan, 1.4], [1.2, np.nan]], columns=['cat', 'dog'])
tpls = [('a', 1), ('a', 2), ('b', np.nan), ('b', 1)]
right.index = MultiIndex.from_tuples(tpls)
tm.assert_frame_equal(ts.unstack(level=0), right)
```

## Next Steps


---

*Source: test_unstack.py:27 | Complexity: Advanced | Last updated: 2026-02-20*