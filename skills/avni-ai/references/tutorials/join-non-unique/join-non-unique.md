# How To: Join Non Unique

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test join non unique

## Prerequisites

**Required Modules:**
- `numpy`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign index = RangeIndex(...)

```python
index = RangeIndex(start=0, stop=20, step=2)
```

### Step 2: Assign other = Index(...)

```python
other = Index([4, 4, 3, 3])
```

### Step 3: Assign unknown = index.join(...)

```python
res, lidx, ridx = index.join(other, return_indexers=True)
```

### Step 4: Assign eres = Index(...)

```python
eres = Index([0, 2, 4, 4, 6, 8, 10, 12, 14, 16, 18])
```

### Step 5: Assign elidx = np.array(...)

```python
elidx = np.array([0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9], dtype=np.intp)
```

### Step 6: Assign eridx = np.array(...)

```python
eridx = np.array([-1, -1, 0, 1, -1, -1, -1, -1, -1, -1, -1], dtype=np.intp)
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, eres)
```

### Step 8: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(lidx, elidx)
```

### Step 9: Call tm.assert_numpy_array_equal()

```python
tm.assert_numpy_array_equal(ridx, eridx)
```


## Complete Example

```python
# Workflow
index = RangeIndex(start=0, stop=20, step=2)
other = Index([4, 4, 3, 3])
res, lidx, ridx = index.join(other, return_indexers=True)
eres = Index([0, 2, 4, 4, 6, 8, 10, 12, 14, 16, 18])
elidx = np.array([0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9], dtype=np.intp)
eridx = np.array([-1, -1, 0, 1, -1, -1, -1, -1, -1, -1, -1], dtype=np.intp)
tm.assert_index_equal(res, eres)
tm.assert_numpy_array_equal(lidx, elidx)
tm.assert_numpy_array_equal(ridx, eridx)
```

## Next Steps


---

*Source: test_join.py:160 | Complexity: Advanced | Last updated: 2026-02-20*