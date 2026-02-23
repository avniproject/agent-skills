# How To: Int64 Overflow

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test int64 overflow

## Prerequisites

**Required Modules:**
- `collections`
- `datetime`
- `itertools`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.core.algorithms`
- `pandas.core.common`
- `pandas.core.sorting`


## Step-by-Step Guide

### Step 1: Assign B = np.concatenate(...)

```python
B = np.concatenate((np.arange(1000), np.arange(1000), np.arange(500)))
```

**Verification:**
```python
assert left[k] == right[k[::-1]]
```

### Step 2: Assign A = np.arange(...)

```python
A = np.arange(2500)
```

**Verification:**
```python
assert left[k] == v
```

### Step 3: Assign df = DataFrame(...)

```python
df = DataFrame({'A': A, 'B': B, 'C': A, 'D': B, 'E': A, 'F': B, 'G': A, 'H': B, 'values': np.random.default_rng(2).standard_normal(2500)})
```

**Verification:**
```python
assert len(left) == len(right)
```

### Step 4: Assign lg = df.groupby(...)

```python
lg = df.groupby(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'])
```

### Step 5: Assign rg = df.groupby(...)

```python
rg = df.groupby(['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'])
```

### Step 6: Assign left = value

```python
left = lg.sum()['values']
```

### Step 7: Assign right = value

```python
right = rg.sum()['values']
```

### Step 8: Assign unknown = left.index.sortlevel(...)

```python
exp_index, _ = left.index.sortlevel()
```

### Step 9: Call tm.assert_index_equal()

```python
tm.assert_index_equal(left.index, exp_index)
```

### Step 10: Assign unknown = right.index.sortlevel(...)

```python
exp_index, _ = right.index.sortlevel(0)
```

### Step 11: Call tm.assert_index_equal()

```python
tm.assert_index_equal(right.index, exp_index)
```

### Step 12: Assign tups = list(...)

```python
tups = list(map(tuple, df[['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']].values))
```

### Step 13: Assign tups = com.asarray_tuplesafe(...)

```python
tups = com.asarray_tuplesafe(tups)
```

### Step 14: Assign expected = value

```python
expected = df.groupby(tups).sum()['values']
```

**Verification:**
```python
assert len(left) == len(right)
```


## Complete Example

```python
# Workflow
B = np.concatenate((np.arange(1000), np.arange(1000), np.arange(500)))
A = np.arange(2500)
df = DataFrame({'A': A, 'B': B, 'C': A, 'D': B, 'E': A, 'F': B, 'G': A, 'H': B, 'values': np.random.default_rng(2).standard_normal(2500)})
lg = df.groupby(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'])
rg = df.groupby(['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'])
left = lg.sum()['values']
right = rg.sum()['values']
exp_index, _ = left.index.sortlevel()
tm.assert_index_equal(left.index, exp_index)
exp_index, _ = right.index.sortlevel(0)
tm.assert_index_equal(right.index, exp_index)
tups = list(map(tuple, df[['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']].values))
tups = com.asarray_tuplesafe(tups)
expected = df.groupby(tups).sum()['values']
for k, v in expected.items():
    assert left[k] == right[k[::-1]]
    assert left[k] == v
assert len(left) == len(right)
```

## Next Steps


---

*Source: test_sorting.py:48 | Complexity: Advanced | Last updated: 2026-02-20*