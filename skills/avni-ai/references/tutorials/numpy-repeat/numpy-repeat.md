# How To: Numpy Repeat

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test numpy repeat

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign reps = 2

```python
reps = 2
```

### Step 2: Assign numbers = value

```python
numbers = [1, 2, 3]
```

### Step 3: Assign names = np.array(...)

```python
names = np.array(['foo', 'bar'])
```

### Step 4: Assign m = MultiIndex.from_product(...)

```python
m = MultiIndex.from_product([numbers, names], names=names)
```

### Step 5: Assign expected = MultiIndex.from_product(...)

```python
expected = MultiIndex.from_product([numbers, names.repeat(reps)], names=names)
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(np.repeat(m, reps), expected)
```

### Step 7: Assign msg = "the 'axis' parameter is not supported"

```python
msg = "the 'axis' parameter is not supported"
```

### Step 8: Call np.repeat()

```python
np.repeat(m, reps, axis=1)
```


## Complete Example

```python
# Workflow
reps = 2
numbers = [1, 2, 3]
names = np.array(['foo', 'bar'])
m = MultiIndex.from_product([numbers, names], names=names)
expected = MultiIndex.from_product([numbers, names.repeat(reps)], names=names)
tm.assert_index_equal(np.repeat(m, reps), expected)
msg = "the 'axis' parameter is not supported"
with pytest.raises(ValueError, match=msg):
    np.repeat(m, reps, axis=1)
```

## Next Steps


---

*Source: test_analytics.py:85 | Complexity: Advanced | Last updated: 2026-02-20*