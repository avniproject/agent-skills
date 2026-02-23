# How To: Pivot Multiindexed Rows And Cols

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test pivot multiindexed rows and cols

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas._libs`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: using_array_manager
```

## Step-by-Step Guide

### Step 1: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame(data=np.arange(12).reshape(4, 3), columns=MultiIndex.from_tuples([(0, 0), (0, 1), (0, 2)], names=['col_L0', 'col_L1']), index=MultiIndex.from_tuples([(0, 0, 0), (0, 0, 1), (1, 1, 1), (1, 0, 0)], names=['idx_L0', 'idx_L1', 'idx_L2']))
```

### Step 2: Assign res = df.pivot_table(...)

```python
res = df.pivot_table(index=['idx_L0'], columns=['idx_L1'], values=[(0, 1)], aggfunc=lambda col: col.values.sum())
```

### Step 3: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame(data=[[5, np.nan], [10, 7.0]], columns=MultiIndex.from_tuples([(0, 1, 0), (0, 1, 1)], names=['col_L0', 'col_L1', 'idx_L1']), index=Index([0, 1], dtype='int64', name='idx_L0'))
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(res, expected)
```

### Step 5: Assign expected = expected.astype(...)

```python
expected = expected.astype('float64')
```


## Complete Example

```python
# Setup
# Fixtures: using_array_manager

# Workflow
df = pd.DataFrame(data=np.arange(12).reshape(4, 3), columns=MultiIndex.from_tuples([(0, 0), (0, 1), (0, 2)], names=['col_L0', 'col_L1']), index=MultiIndex.from_tuples([(0, 0, 0), (0, 0, 1), (1, 1, 1), (1, 0, 0)], names=['idx_L0', 'idx_L1', 'idx_L2']))
res = df.pivot_table(index=['idx_L0'], columns=['idx_L1'], values=[(0, 1)], aggfunc=lambda col: col.values.sum())
expected = pd.DataFrame(data=[[5, np.nan], [10, 7.0]], columns=MultiIndex.from_tuples([(0, 1, 0), (0, 1, 1)], names=['col_L0', 'col_L1', 'idx_L1']), index=Index([0, 1], dtype='int64', name='idx_L0'))
if not using_array_manager:
    expected = expected.astype('float64')
tm.assert_frame_equal(res, expected)
```

## Next Steps


---

*Source: test_pivot_multilevel.py:200 | Complexity: Intermediate | Last updated: 2026-02-20*